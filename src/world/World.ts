import * as THREE from 'three';
import { CONFIG } from '../config.ts';
import { Chunk } from './Chunk.ts';
import { BlockType } from './Block.ts';
import { createProceduralTextureAtlas } from '../renderer/TextureAtlas.ts';

export class World {
  private chunks: Map<string, Chunk> = new Map();
  private scene: THREE.Scene;
  private material: THREE.Material;
  // プレイヤーが明示的に変更したブロック差分データ (GC低減のためチャンクごとに Map<localIndex, BlockType> で管理)
  private modifiedBlocks: Map<string, Map<number, BlockType>> = new Map();
  // 扉の向き情報: キーは "x,y,z".値は 'NS'(南北=Z軸方向に薄い板) または 'EW'(東西=X軸方向に薄い板)
  private doorOrientations: Map<string, 'NS' | 'EW'> = new Map();

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    
    // 手続き型テクスチャアトラスを生成
    const texture = createProceduralTextureAtlas();

    // マテリアルにテクスチャアトラスと頂点カラーを結合
    const mat = new THREE.MeshStandardMaterial({
      map: texture,
      vertexColors: true, // 面ごとの濃淡（影）を反映
      roughness: 0.85,
      metalness: 0.05,
      alphaTest: 0.5,     // 透過テクスチャ用（0.5以下のアルファ値を除外）
      side: THREE.DoubleSide, // 松明などの裏面も描画する
    });

    // 松明が夜間でも明るく周囲を照らすように、頂点カラーベースの自己発光エフェクトをシェーダーに追加
    mat.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace(
        'vec3 totalEmissiveRadiance = emissive;',
        `
        // 頂点カラーから松明光成分（最低輝度0.52を超える部分）を抽出し、自己発光として加算する
        vec3 torchLight = max(vec3(0.0), vColor - vec3(0.52));
        // 温かみのあるオレンジ色の自己発光を1.5倍で加算（夜間でも綺麗に光る）
        vec3 totalEmissiveRadiance = emissive + torchLight * 1.5;
        `
      );
    };

    this.material = mat;

  }

  private getChunkKey(cx: number, cy: number, cz: number): string {
    return `${cx},${cy},${cz}`;
  }

  public getChunk(cx: number, cy: number, cz: number): Chunk | undefined {
    return this.chunks.get(this.getChunkKey(cx, cy, cz));
  }

  public getBlock(x: number, y: number, z: number): BlockType {
    const cx = Math.floor(x / CONFIG.CHUNK_SIZE);
    const cy = Math.floor(y / CONFIG.CHUNK_SIZE);
    const cz = Math.floor(z / CONFIG.CHUNK_SIZE);

    const chunk = this.getChunk(cx, cy, cz);
    if (!chunk) return BlockType.AIR;

    const lx = ((x % CONFIG.CHUNK_SIZE) + CONFIG.CHUNK_SIZE) % CONFIG.CHUNK_SIZE;
    const ly = ((y % CONFIG.CHUNK_SIZE) + CONFIG.CHUNK_SIZE) % CONFIG.CHUNK_SIZE;
    const lz = ((z % CONFIG.CHUNK_SIZE) + CONFIG.CHUNK_SIZE) % CONFIG.CHUNK_SIZE;

    return chunk.getBlock(lx, ly, lz);
  }

  public setBlock(x: number, y: number, z: number, type: BlockType): void {
    const cx = Math.floor(x / CONFIG.CHUNK_SIZE);
    const cy = Math.floor(y / CONFIG.CHUNK_SIZE);
    const cz = Math.floor(z / CONFIG.CHUNK_SIZE);
    const chunkKey = this.getChunkKey(cx, cy, cz);

    const size = CONFIG.CHUNK_SIZE;
    const lx = ((x % size) + size) % size;
    const ly = ((y % size) + size) % size;
    const lz = ((z % size) + size) % size;
    const localIndex = lx + ly * size + lz * size * size;

    // 変更差分を永続用マップに記録する
    let chunkMods = this.modifiedBlocks.get(chunkKey);
    if (!chunkMods) {
      chunkMods = new Map();
      this.modifiedBlocks.set(chunkKey, chunkMods);
    }
    chunkMods.set(localIndex, type);

    let chunk = this.getChunk(cx, cy, cz);
    if (!chunk) {
      chunk = new Chunk(cx, cy, cz);
      this.chunks.set(chunkKey, chunk);
    }

    chunk.setBlock(lx, ly, lz, type);

    this.updateChunkMesh(cx, cy, cz);

    if (lx === 0) this.updateChunkMesh(cx - 1, cy, cz);
    if (lx === CONFIG.CHUNK_SIZE - 1) this.updateChunkMesh(cx + 1, cy, cz);
    if (ly === 0) this.updateChunkMesh(cx, cy - 1, cz);
    if (ly === CONFIG.CHUNK_SIZE - 1) this.updateChunkMesh(cx, cy + 1, cz);
    if (lz === 0) this.updateChunkMesh(cx, cy, cz - 1);
    if (lz === CONFIG.CHUNK_SIZE - 1) this.updateChunkMesh(cx, cy, cz + 1);
  }

  /**
   * 扉の向き情報を登録する。
   * @param x - グローバルX座標
   * @param y - グローバルY座標
   * @param z - グローバルZ座標
   * @param orientation - 'NS'(南北=Z軸方向に薄い板) または 'EW'(東西=X軸方向に薄い板)
   */
  public setDoorOrientation(x: number, y: number, z: number, orientation: 'NS' | 'EW'): void {
    this.doorOrientations.set(`${x},${y},${z}`, orientation);
  }

  /**
   * 指定座標の扉の向き情報を取得する。登録なしの場合は 'NS' をデフォルト返す。
   */
  public getDoorOrientation(x: number, y: number, z: number): 'NS' | 'EW' {
    return this.doorOrientations.get(`${x},${y},${z}`) ?? 'NS';
  }

  /**
   * 扉の向き情報を削除する（ブロック破壊時に呼び出す）。
   */
  public removeDoorOrientation(x: number, y: number, z: number): void {
    this.doorOrientations.delete(`${x},${y},${z}`);
  }

  private updateChunkMesh(cx: number, cy: number, cz: number): void {
    const chunk = this.getChunk(cx, cy, cz);
    if (!chunk) return;

    const oldMesh = chunk.mesh;
    const newMesh = chunk.generateMesh(this, this.material);

    if (newMesh && !oldMesh) {
      this.scene.add(newMesh);
    } else if (!newMesh && oldMesh) {
      this.scene.remove(oldMesh);
    }
  }

  public generateWorldAround(playerX: number, playerZ: number): void {
    const centerCX = Math.floor(playerX / CONFIG.CHUNK_SIZE);
    const centerCZ = Math.floor(playerZ / CONFIG.CHUNK_SIZE);
    const dist = CONFIG.RENDER_DISTANCE;

    const activeKeys = new Set<string>();

    for (let cx = centerCX - dist; cx <= centerCX + dist; cx++) {
      for (let cz = centerCZ - dist; cz <= centerCZ + dist; cz++) {
        for (let cy = -1; cy <= 1; cy++) {
          const key = this.getChunkKey(cx, cy, cz);
          activeKeys.add(key);

          if (!this.chunks.has(key)) {
            const chunk = new Chunk(cx, cy, cz);
            this.generateChunkTerrain(chunk);
            this.chunks.set(key, chunk);
          }
        }
      }
    }

    for (const [key, chunk] of this.chunks.entries()) {
      if (!activeKeys.has(key)) {
        if (chunk.mesh) {
          this.scene.remove(chunk.mesh);
          chunk.mesh.geometry.dispose();
          chunk.mesh = null;
        }
        this.chunks.delete(key);
      }
    }

    for (let cx = centerCX - dist; cx <= centerCX + dist; cx++) {
      for (let cz = centerCZ - dist; cz <= centerCZ + dist; cz++) {
        for (let cy = -1; cy <= 1; cy++) {
          this.updateChunkMesh(cx, cy, cz);
        }
      }
    }

    const chunksDisplay = document.getElementById('chunks-display');
    if (chunksDisplay) {
      chunksDisplay.textContent = this.chunks.size.toString();
    }
  }

  private generateChunkTerrain(chunk: Chunk): void {
    const size = CONFIG.CHUNK_SIZE;
    const globalChunkY = chunk.y * size;

    // 1. 基本地形の生成 (石、石炭、土、草)
    for (let x = 0; x < size; x++) {
      for (let z = 0; z < size; z++) {
        for (let y = 0; y < size; y++) {
          const globalY = globalChunkY + y;

          let type = BlockType.AIR;

          if (globalY < -4) {
            // 石の中に5%の確率で石炭鉱石を混入させる
            // 決定論的なハッシュで鉱石の位置を固定
            const hash = Math.sin((chunk.x * 17.13) + (chunk.y * 31.41) + (chunk.z * 53.57) + (x * 7.1) + (y * 13.3) + (z * 19.9)) * 43758.5453;
            const rand = hash - Math.floor(hash);
            type = rand < 0.05 ? BlockType.COAL_ORE : BlockType.STONE;
          } else if (globalY < 0) {
            type = BlockType.DIRT;
          } else if (globalY === 0) {
            type = BlockType.GROUND;
          }

          chunk.setBlock(x, y, z, type);
        }
      }
    }

    // 2. 木の自動生成 (地表が存在する chunk.y === 0 の場合)
    if (chunk.y === 0) {
      for (let x = 2; x < size - 2; x++) {
        for (let z = 2; z < size - 2; z++) {
          // 決定論的なハッシュコードで生成可否を判定 (約1.5%の確率)
          const hash = Math.sin((chunk.x * 12.9898) + (chunk.z * 78.233) + (x * 43.123) + (z * 93.314)) * 43758.5453;
          const rand = hash - Math.floor(hash);

          if (rand < 0.015) {
            // 幹を配置 (高さ3ブロック)
            chunk.setBlock(x, 1, z, BlockType.WOOD);
            chunk.setBlock(x, 2, z, BlockType.WOOD);
            chunk.setBlock(x, 3, z, BlockType.WOOD);

            // 葉を配置 (幹の高さに合わせて3レイヤー)
            // レイヤー1 (y = 3): 幹の周り十字
            chunk.setBlock(x + 1, 3, z, BlockType.LEAVES);
            chunk.setBlock(x - 1, 3, z, BlockType.LEAVES);
            chunk.setBlock(x, 3, z + 1, BlockType.LEAVES);
            chunk.setBlock(x, 3, z - 1, BlockType.LEAVES);

            // レイヤー2 (y = 4): 3x3の矩形
            for (let dx = -1; dx <= 1; dx++) {
              for (let dz = -1; dz <= 1; dz++) {
                if (dx !== 0 || dz !== 0) {
                  chunk.setBlock(x + dx, 4, z + dz, BlockType.LEAVES);
                }
              }
            }
            chunk.setBlock(x, 4, z, BlockType.LEAVES); // 幹の真上

            // レイヤー3 (y = 5): 頂部の十字
            chunk.setBlock(x, 5, z, BlockType.LEAVES);
            chunk.setBlock(x + 1, 5, z, BlockType.LEAVES);
            chunk.setBlock(x - 1, 5, z, BlockType.LEAVES);
            chunk.setBlock(x, 5, z + 1, BlockType.LEAVES);
            chunk.setBlock(x, 5, z - 1, BlockType.LEAVES);
          }
        }
      }
    }

    // 3. プレイヤーによる変更差分を適用する
    const chunkKey = this.getChunkKey(chunk.x, chunk.y, chunk.z);
    const chunkMods = this.modifiedBlocks.get(chunkKey);
    if (chunkMods) {
      const size = CONFIG.CHUNK_SIZE;
      for (const [localIndex, type] of chunkMods.entries()) {
        const lx = localIndex % size;
        const ly = Math.floor((localIndex % (size * size)) / size);
        const lz = Math.floor(localIndex / (size * size));
        chunk.setBlock(lx, ly, lz, type);
      }
    }
  }

  public getChunkMeshes(): THREE.Mesh[] {
    const meshes: THREE.Mesh[] = [];
    for (const chunk of this.chunks.values()) {
      if (chunk.mesh) {
        meshes.push(chunk.mesh);
      }
    }
    return meshes;
  }

  public getChunksCount(): number {
    return this.chunks.size;
  }

  // セーブデータ用：ブロック変更差分を Record 形式でシリアライズして取得
  public getModifiedBlocksData(): { blocks: Record<string, Record<string, number>>; doorOrientations: Record<string, string> } {
    const blocks: Record<string, Record<string, number>> = {};
    for (const [chunkKey, chunkMods] of this.modifiedBlocks.entries()) {
      if (chunkMods.size === 0) continue;
      const mods: Record<string, number> = {};
      for (const [localIndex, type] of chunkMods.entries()) {
        mods[localIndex.toString()] = type;
      }
      blocks[chunkKey] = mods;
    }
    // 扉の向き情報もシリアライズ
    const doorOrientations: Record<string, string> = {};
    for (const [key, orientation] of this.doorOrientations.entries()) {
      doorOrientations[key] = orientation;
    }
    return { blocks, doorOrientations };
  }

  // ロードデータ用：Record 形式のデータからブロック変更差分を復元
  public setModifiedBlocksData(data: Record<string, any>): void {
    this.modifiedBlocks.clear();
    this.doorOrientations.clear();
    if (!data) return;

    // 旧フォーマット（blocksキーなし）との後方互換性維持
    const blocksData: Record<string, Record<string, number>> = data.blocks ?? data;
    for (const chunkKey of Object.keys(blocksData)) {
      const chunkMods = new Map<number, BlockType>();
      const mods = blocksData[chunkKey];
      for (const localIndexStr of Object.keys(mods)) {
        const localIndex = parseInt(localIndexStr, 10);
        const type = mods[localIndexStr] as BlockType;
        chunkMods.set(localIndex, type);
      }
      this.modifiedBlocks.set(chunkKey, chunkMods);
    }

    // 扉の向き情報を復元（新フォーマットのみ）
    if (data.doorOrientations) {
      for (const [key, orientation] of Object.entries(data.doorOrientations)) {
        this.doorOrientations.set(key, orientation as 'NS' | 'EW');
      }
    }
  }

  // すべてのチャンクメッシュをクリアし、指定位置の周囲に世界を再生成・描画する
  public clearAndRebuild(playerX: number, playerZ: number): void {
    // 既存の全メッシュをシーンから削除し破棄
    for (const chunk of this.chunks.values()) {
      if (chunk.mesh) {
        this.scene.remove(chunk.mesh);
        chunk.mesh.geometry.dispose();
        chunk.mesh = null;
      }
    }
    this.chunks.clear();

    // プレイヤー位置を中心にチャンクを生成
    this.generateWorldAround(playerX, playerZ);
  }
}
