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

    // 周辺の松明の座標を走査（現在のチャンク + 隣接2マスまで検索）
    const torches: { x: number; y: number; z: number }[] = [];
    const searchRange = 2;
    for (let cx = -searchRange; cx < this.size + searchRange; cx++) {
      for (let cy = -searchRange; cy < this.size + searchRange; cy++) {
        for (let cz = -searchRange; cz < this.size + searchRange; cz++) {
          const gx = this.x * this.size + cx;
          const gy = this.y * this.size + cy;
          const gz = this.z * this.size + cz;
          if (world.getBlock(gx, gy, gz) === BlockType.TORCH) {
            torches.push({ x: gx + 0.5, y: gy + 0.5, z: gz + 0.5 });
          }
        }
      }
    }

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

            if (blockType === BlockType.TORCH || blockType === BlockType.DOOR_CLOSED || blockType === BlockType.DOOR_OPEN) {
              // 松明とドアは常に全方位の面を描画する（薄型形状でカリングされると消えるため）
              shouldDrawFace = true;
            } else {
              let neighborBlock: BlockType;
              if (this.isOutOfBounds(nx, ny, nz)) {
                neighborBlock = world.getBlock(globalX + face.dir[0], globalY + face.dir[1], globalZ + face.dir[2]);
              } else {
                neighborBlock = this.getBlock(nx, ny, nz);
              }

              const neighborProp = BLOCKS[neighborBlock];
              // 隣が空気か、透過ブロックの場合に面を描く
              if (!neighborProp.isSolid || neighborProp.isTransparent) {
                // 隣が自分自身と同じ種類の透過ブロック（ガラスの隣のガラス等）の場合は面を描かない
                if (blockProp.isTransparent && neighborBlock === blockType) {
                  shouldDrawFace = false;
                } else {
                  shouldDrawFace = true;
                }
              } else {
                shouldDrawFace = false;
              }
            }

            if (shouldDrawFace) {
              const isTorch = (blockType === BlockType.TORCH);
              const isDoorClosed = (blockType === BlockType.DOOR_CLOSED);
              const isDoorOpen = (blockType === BlockType.DOOR_OPEN);

              // 頂点の追加
              for (const corner of face.corners) {
                let vx = globalX + corner[0];
                let vy = globalY + corner[1];
                let vz = globalZ + corner[2];

                if (isTorch) {
                  // 松明専用の細長い棒状アバターを生成 (幅14cm, 高さ65cm)
                  vx = globalX + 0.5 + (corner[0] - 0.5) * 0.14;
                  vy = globalY + corner[1] * 0.65;
                  vz = globalZ + 0.5 + (corner[2] - 0.5) * 0.14;
                } else if (isDoorClosed) {
                  // ドア（閉）：X-Y平面に平行な薄い板（Z方向を薄くする、厚さ14cm）
                  vz = globalZ + 0.5 + (corner[2] - 0.5) * 0.14;
                } else if (isDoorOpen) {
                  // ドア（開）：Y-Z平面に平行な薄い板（X方向を薄くする、厚さ14cm）
                  vx = globalX + 0.5 + (corner[0] - 0.5) * 0.14;
                }

                positions.push(vx, vy, vz);
                normals.push(...face.dir);


                // 頂点カラー：陰影（アンビエントオクルージョン風）と松明光源の頂点ライトを合成
                const shadow = FACE_SHADING[face.uvName];

                // 最も近い松明からの光を計算（マンハッタン距離）
                let maxLight = 0.0;
                for (let i = 0; i < torches.length; i++) {
                  const torch = torches[i];
                  const dx = vx - torch.x;
                  const dy = vy - torch.y;
                  const dz = vz - torch.z;
                  const dist = Math.abs(dx) + Math.abs(dy) + Math.abs(dz);
                  const light = Math.max(0, 1.0 - dist / 8.0); // 8ブロック先で完全に減衰
                  if (light > maxLight) {
                    maxLight = light;
                  }
                }

                // 松明ブロック自身は常に最大光輝
                const isSelfTorch = (blockType === BlockType.TORCH);
                const lightFactor = isSelfTorch ? 1.0 : maxLight;

                // 最終カラー値のブレンド（明るさは最低0.52、松明ライトで最大1.0まで加算）
                const finalLight = Math.min(1.0, 0.52 + lightFactor * 0.48);
                const finalColor = shadow * finalLight;

                // 黄色・オレンジの温かみのある光を表現するため、RとGを少し強調し、Bを抑える
                const r = finalColor;
                const g = finalColor * (isSelfTorch ? 0.9 : (0.93 - (1.0 - lightFactor) * 0.08));
                const b = finalColor * (isSelfTorch ? 0.6 : (0.85 - (1.0 - lightFactor) * 0.15));

                
                colors.push(r, g, b);
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
