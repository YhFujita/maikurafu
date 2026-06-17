import * as THREE from 'three';
import { CONFIG } from '../config.ts';
import { Chunk } from './Chunk.ts';
import { BlockType } from './Block.ts';
import { createProceduralTextureAtlas } from '../renderer/TextureAtlas.ts';
import { TerrainGenerator } from './TerrainGenerator.ts';

export class World {
  private chunks: Map<string, Chunk> = new Map();
  private scene: THREE.Scene;
  private material: THREE.Material;
  // プレイヤーが明示的に変更したブロック差分データ (GC低減のためチャンクごとに Map<localIndex, BlockType> で管理)
  private modifiedBlocks: Map<string, Map<number, BlockType>> = new Map();
  // 扉の向き情報: キーは "x,y,z".値は 'NS'(南北=Z軸方向に薄い板) または 'EW'(東西=X軸方向に薄い板)
  private doorOrientations: Map<string, 'NS' | 'EW'> = new Map();
  // チャンクごとの地形生成アルゴリズムのバージョン (1:平地, 2:ノイズ地形)
  private chunkVersions: Map<string, number> = new Map();
  private terrainGenerator: TerrainGenerator;

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
    this.terrainGenerator = new TerrainGenerator();
  }

  private getChunkKey(cx: number, cy: number, cz: number): string {
    return `${cx},${cy},${cz}`;
  }

  public getChunk(cx: number, cy: number, cz: number): Chunk | undefined {
    return this.chunks.get(this.getChunkKey(cx, cy, cz));
  }

  public *getLoadedChunks(): IterableIterator<Chunk> {
    yield* this.chunks.values();
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
  public setDoorOrientation(x: number, y: number, z: number, orientation: 'NS' | 'EW' | 'N' | 'S' | 'E' | 'W'): void {
    this.doorOrientations.set(`${x},${y},${z}`, orientation as 'NS' | 'EW');
  }

  /**
   * 指定座標の扉の向き情報を取得する。登録なしの場合は 'NS' をデフォルト返す。
   */
  public getDoorOrientation(x: number, y: number, z: number): 'NS' | 'EW' | 'N' | 'S' | 'E' | 'W' {
    return (this.doorOrientations.get(`${x},${y},${z}`) as any) ?? 'NS';
  }

  /**
   * 扉の向き情報を削除する（ブロック破壊時に呼び出す）。
   */
  public removeDoorOrientation(x: number, y: number, z: number): void {
    this.doorOrientations.delete(`${x},${y},${z}`);
  }

  public updateChunkMesh(cx: number, cy: number, cz: number): void {
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
    const chunkKey = this.getChunkKey(chunk.x, chunk.y, chunk.z);
    
    // バージョンの決定
    let version = this.chunkVersions.get(chunkKey);
    
    // 初期スポーン地点周辺（半径約100ブロック）は、過去の建物が埋もれないよう強制的にV1（平地）とする
    const spawnRadius = 6;
    if (Math.abs(chunk.x) <= spawnRadius && Math.abs(chunk.z) <= spawnRadius) {
      version = 1;
      this.chunkVersions.set(chunkKey, 1);
    }
    
    if (version === undefined) {
      if (this.modifiedBlocks.has(chunkKey)) {
        // セーブデータに変更があるがバージョン指定がない場合、古いワールドなのでV1（平地）とする
        version = 1;
      } else {
        // 新規探索チャンクはV2
        version = 2;
      }
      this.chunkVersions.set(chunkKey, version);
    }

    if (version === 1) {
      this.terrainGenerator.generateV1(chunk);
    } else {
      this.terrainGenerator.generateV2(chunk);
    }

    // プレイヤーによる変更差分を適用する
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
  public getModifiedBlocksData(): { blocks: Record<string, Record<string, number>>; doorOrientations: Record<string, string>; chunkVersions: Record<string, number> } {
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
    // バージョン情報もシリアライズ
    const chunkVersions: Record<string, number> = {};
    for (const [key, version] of this.chunkVersions.entries()) {
      chunkVersions[key] = version;
    }
    return { blocks, doorOrientations, chunkVersions };
  }

  // ロードデータ用：Record 形式のデータからブロック変更差分を復元
  public setModifiedBlocksData(data: Record<string, any>): void {
    this.modifiedBlocks.clear();
    this.doorOrientations.clear();
    this.chunkVersions.clear();
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
    
    // バージョン情報を復元
    if (data.chunkVersions) {
      for (const [key, version] of Object.entries(data.chunkVersions)) {
        this.chunkVersions.set(key, version as number);
      }
    }
  }

  // 新しいワールドデータを取り込んで、ローカルの変更とマージし、変更があったチャンクキーのセットを返す
  public mergeModifiedBlocksData(data: Record<string, any>): Set<string> {
    const updatedChunks = new Set<string>();
    if (!data) return updatedChunks;

    // 旧フォーマット（blocksキーなし）との後方互換性維持
    const blocksData: Record<string, Record<string, number>> = data.blocks ?? data;
    for (const chunkKey of Object.keys(blocksData)) {
      if (chunkKey === 'doorOrientations' || chunkKey === 'chunkVersions' || chunkKey === 'blocks') continue;

      let chunkMods = this.modifiedBlocks.get(chunkKey);
      if (!chunkMods) {
        chunkMods = new Map();
        this.modifiedBlocks.set(chunkKey, chunkMods);
        updatedChunks.add(chunkKey);
      }

      const mods = blocksData[chunkKey];
      for (const localIndexStr of Object.keys(mods)) {
        const localIndex = parseInt(localIndexStr, 10);
        const type = mods[localIndexStr] as BlockType;

        const currentType = chunkMods.get(localIndex);
        if (currentType !== type) {
          chunkMods.set(localIndex, type);
          updatedChunks.add(chunkKey);

          // メモリ上にロード済みのチャンクオブジェクトが存在する場合、そのブロックデータも更新する
          const parts = chunkKey.split(',');
          const cx = parseInt(parts[0], 10);
          const cy = parseInt(parts[1], 10);
          const cz = parseInt(parts[2], 10);
          const chunk = this.getChunk(cx, cy, cz);
          if (chunk) {
            const size = CONFIG.CHUNK_SIZE;
            const lx = localIndex % size;
            const ly = Math.floor((localIndex % (size * size)) / size);
            const lz = Math.floor(localIndex / (size * size));
            chunk.setBlock(lx, ly, lz, type);
          }
        }
      }
    }

    // 扉の向き情報のマージ
    if (data.doorOrientations) {
      for (const [key, orientation] of Object.entries(data.doorOrientations)) {
        const current = this.doorOrientations.get(key);
        if (current !== orientation) {
          this.doorOrientations.set(key, orientation as 'NS' | 'EW');
          // 扉の座標からチャンクキーを割り出して更新対象に入れる
          const parts = key.split(',');
          const x = parseInt(parts[0], 10);
          const y = parseInt(parts[1], 10);
          const z = parseInt(parts[2], 10);
          const cx = Math.floor(x / CONFIG.CHUNK_SIZE);
          const cy = Math.floor(y / CONFIG.CHUNK_SIZE);
          const cz = Math.floor(z / CONFIG.CHUNK_SIZE);
          updatedChunks.add(this.getChunkKey(cx, cy, cz));
        }
      }
    }
    
    // バージョン情報のマージ
    if (data.chunkVersions) {
      for (const [key, version] of Object.entries(data.chunkVersions)) {
        const current = this.chunkVersions.get(key);
        if (current !== version) {
          this.chunkVersions.set(key, version as number);
          updatedChunks.add(key);
        }
      }
    }

    return updatedChunks;
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
