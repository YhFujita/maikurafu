import * as THREE from 'three';
import { CONFIG } from '../config.ts';
import { BlockType, BLOCKS } from './Block.ts';
import { World } from './World.ts';

const FACES = [
  { // +X (右)
    dir: [1, 0, 0],
    corners: [
      [1, 0, 1],
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
    ],
    uvName: 'right' as const
  },
  { // -X (左)
    dir: [-1, 0, 0],
    corners: [
      [0, 0, 0],
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ],
    uvName: 'left' as const
  },
  { // +Y (上)
    dir: [0, 1, 0],
    corners: [
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 0],
      [0, 1, 0],
    ],
    uvName: 'top' as const
  },
  { // -Y (下)
    dir: [0, -1, 0],
    corners: [
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 1],
      [0, 0, 1],
    ],
    uvName: 'bottom' as const
  },
  { // +Z (前)
    dir: [0, 0, 1],
    corners: [
      [0, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 1, 1],
    ],
    uvName: 'front' as const
  },
  { // -Z (後)
    dir: [0, 0, -1],
    corners: [
      [1, 0, 0],
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    uvName: 'back' as const
  }
];

// 面の向きに応じた影（陰影起伏）のスケールファクター
const FACE_SHADING: Record<string, number> = {
  top: 1.0,      // 上面は一番明るい
  bottom: 0.5,   // 底面は一番暗い
  front: 0.8,    // 側面は適度な影
  back: 0.8,
  left: 0.65,
  right: 0.65
};

export class Chunk {
  public x: number;
  public y: number;
  public z: number;

  public blocks: Uint8Array;
  public mesh: THREE.Mesh | null = null;
  public isDirty: boolean = true;

  private size: number = CONFIG.CHUNK_SIZE;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.blocks = new Uint8Array(this.size * this.size * this.size);
  }

  private getIndex(x: number, y: number, z: number): number {
    return x + y * this.size + z * this.size * this.size;
  }

  private isOutOfBounds(x: number, y: number, z: number): boolean {
    return x < 0 || x >= this.size || y < 0 || y >= this.size || z < 0 || z >= this.size;
  }

  public setBlock(x: number, y: number, z: number, type: BlockType): void {
    if (this.isOutOfBounds(x, y, z)) return;
    const index = this.getIndex(x, y, z);
    if (this.blocks[index] !== type) {
      this.blocks[index] = type;
      this.isDirty = true;
    }
  }

  public getBlock(x: number, y: number, z: number): BlockType {
    if (this.isOutOfBounds(x, y, z)) return BlockType.AIR;
    const index = this.getIndex(x, y, z);
    return this.blocks[index];
  }

  public generateMesh(world: World, material: THREE.Material): THREE.Mesh | null {
    if (!this.isDirty && this.mesh) {
      return this.mesh;
    }

    const positions: number[] = [];
    const normals: number[] = [];
    const colors: number[] = [];
    const uvs: number[] = [];
    const indices: number[] = [];

    let vertexCount = 0;
    const atlasGridSize = 4; // 4x4アトラス
    const uvStep = 1.0 / atlasGridSize; // 0.25

    for (let cx = 0; cx < this.size; cx++) {
      for (let cy = 0; cy < this.size; cy++) {
        for (let cz = 0; cz < this.size; cz++) {
          const blockType = this.getBlock(cx, cy, cz);
          if (blockType === BlockType.AIR) continue;

          const blockProp = BLOCKS[blockType];
          const globalX = this.x * this.size + cx;
          const globalY = this.y * this.size + cy;
          const globalZ = this.z * this.size + cz;

          for (const face of FACES) {
            const nx = cx + face.dir[0];
            const ny = cy + face.dir[1];
            const nz = cz + face.dir[2];

            let shouldDrawFace = false;

            if (this.isOutOfBounds(nx, ny, nz)) {
              const neighborBlock = world.getBlock(globalX + face.dir[0], globalY + face.dir[1], globalZ + face.dir[2]);
              shouldDrawFace = !BLOCKS[neighborBlock].isSolid;
            } else {
              const neighborBlock = this.getBlock(nx, ny, nz);
              shouldDrawFace = !BLOCKS[neighborBlock].isSolid;
            }

            if (shouldDrawFace) {
              // 頂点の追加
              for (const corner of face.corners) {
                positions.push(
                  globalX + corner[0],
                  globalY + corner[1],
                  globalZ + corner[2]
                );
                normals.push(...face.dir);

                // 頂点カラー：陰影を直接乗せて立体感を強調する（マテリアルカラーと掛け算される）
                const shadow = FACE_SHADING[face.uvName];
                colors.push(shadow, shadow, shadow);
              }

              // UV座標の算出 (4x4グリッド)
              const uvIdx = blockProp.uvs[face.uvName];
              const col = uvIdx % atlasGridSize;
              const row = Math.floor(uvIdx / atlasGridSize);

              const uMin = col * uvStep;
              const vMin = 1.0 - (row + 1) * uvStep;
              const uMax = uMin + uvStep;
              const vMax = vMin + uvStep;

              // 4つの角に対応するUVマッピング
              uvs.push(
                uMin, vMin, // 左下
                uMax, vMin, // 右下
                uMax, vMax, // 右上
                uMin, vMax  // 左上
              );

              // 三角形のインデックス
              indices.push(
                vertexCount, vertexCount + 1, vertexCount + 2,
                vertexCount, vertexCount + 2, vertexCount + 3
              );

              vertexCount += 4;
            }
          }
        }
      }
    }

    if (positions.length === 0) {
      if (this.mesh) {
        this.mesh.geometry.dispose();
        this.mesh = null;
      }
      this.isDirty = false;
      return null;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);

    if (this.mesh) {
      this.mesh.geometry.dispose();
      this.mesh.geometry = geometry;
    } else {
      this.mesh = new THREE.Mesh(geometry, material);
      this.mesh.castShadow = true;
      this.mesh.receiveShadow = true;
    }

    this.isDirty = false;
    return this.mesh;
  }
}
