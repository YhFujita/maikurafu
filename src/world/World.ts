import * as THREE from 'three';
import { CONFIG } from '../config.ts';
import { Chunk } from './Chunk.ts';
import { BlockType } from './Block.ts';
import { createProceduralTextureAtlas } from '../renderer/TextureAtlas.ts';

export class World {
  private chunks: Map<string, Chunk> = new Map();
  private scene: THREE.Scene;
  private material: THREE.Material;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    
    // 手続き型テクスチャアトラスを生成
    const texture = createProceduralTextureAtlas();

    // マテリアルにテクスチャアトラスと頂点カラーを結合
    this.material = new THREE.MeshStandardMaterial({
      map: texture,
      vertexColors: true, // 面ごとの濃淡（影）を反映
      roughness: 0.85,
      metalness: 0.05,
    });
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

    let chunk = this.getChunk(cx, cy, cz);
    if (!chunk) {
      chunk = new Chunk(cx, cy, cz);
      this.chunks.set(this.getChunkKey(cx, cy, cz), chunk);
    }

    const lx = ((x % CONFIG.CHUNK_SIZE) + CONFIG.CHUNK_SIZE) % CONFIG.CHUNK_SIZE;
    const ly = ((y % CONFIG.CHUNK_SIZE) + CONFIG.CHUNK_SIZE) % CONFIG.CHUNK_SIZE;
    const lz = ((z % CONFIG.CHUNK_SIZE) + CONFIG.CHUNK_SIZE) % CONFIG.CHUNK_SIZE;

    chunk.setBlock(lx, ly, lz, type);

    this.updateChunkMesh(cx, cy, cz);

    if (lx === 0) this.updateChunkMesh(cx - 1, cy, cz);
    if (lx === CONFIG.CHUNK_SIZE - 1) this.updateChunkMesh(cx + 1, cy, cz);
    if (ly === 0) this.updateChunkMesh(cx, cy - 1, cz);
    if (ly === CONFIG.CHUNK_SIZE - 1) this.updateChunkMesh(cx, cy + 1, cz);
    if (lz === 0) this.updateChunkMesh(cx, cy, cz - 1);
    if (lz === CONFIG.CHUNK_SIZE - 1) this.updateChunkMesh(cx, cy, cz + 1);
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

    for (let x = 0; x < size; x++) {
      for (let z = 0; z < size; z++) {
        for (let y = 0; y < size; y++) {
          const globalY = globalChunkY + y;

          let type = BlockType.AIR;

          if (globalY < -4) {
            type = BlockType.STONE;
          } else if (globalY < 0) {
            type = BlockType.DIRT;
          } else if (globalY === 0) {
            type = BlockType.GROUND;
          }

          chunk.setBlock(x, y, z, type);
        }
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
}
