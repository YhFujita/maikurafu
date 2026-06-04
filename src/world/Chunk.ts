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
    const atlasCols = 4; // アトラスの列数
    const atlasRows = 7; // アトラスの行数（武器追加で7行になったため修正）
    const uvStepU = 1.0 / atlasCols; // U方向ステップ (0.25)
    const uvStepV = 1.0 / atlasRows; // V方向ステップ (1/7)

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

    const addBox = (
      x0: number, y0: number, z0: number,
      x1: number, y1: number, z1: number,
      uvIndex: number
    ) => {
      const subFaces = [
        { dir: [1, 0, 0], corners: [[x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1]], uvName: 'right' as const },
        { dir: [-1, 0, 0], corners: [[x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0]], uvName: 'left' as const },
        { dir: [0, 1, 0], corners: [[x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0]], uvName: 'top' as const },
        { dir: [0, -1, 0], corners: [[x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1]], uvName: 'bottom' as const },
        { dir: [0, 0, 1], corners: [[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], uvName: 'front' as const },
        { dir: [0, 0, -1], corners: [[x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0]], uvName: 'back' as const }
      ];

      for (const face of subFaces) {
        for (const corner of face.corners) {
          positions.push(corner[0], corner[1], corner[2]);
          normals.push(...face.dir);

          const shadow = FACE_SHADING[face.uvName];
          let maxLight = 0.0;
          for (let i = 0; i < torches.length; i++) {
            const torch = torches[i];
            const dx = corner[0] - torch.x;
            const dy = corner[1] - torch.y;
            const dz = corner[2] - torch.z;
            const dist = Math.abs(dx) + Math.abs(dy) + Math.abs(dz);
            const light = Math.max(0, 1.0 - dist / 8.0);
            if (light > maxLight) maxLight = light;
          }
          const finalLight = Math.min(1.0, 0.52 + maxLight * 0.48);
          const finalColor = shadow * finalLight;
          colors.push(
            finalColor,
            finalColor * (0.93 - (1.0 - maxLight) * 0.08),
            finalColor * (0.85 - (1.0 - maxLight) * 0.15)
          );
        }

        const col = uvIndex % atlasCols;
        const row = Math.floor(uvIndex / atlasCols);
        const uMin = col * uvStepU;
        const vMin = 1.0 - (row + 1) * uvStepV;
        const uMax = uMin + uvStepU;
        const vMax = vMin + uvStepV;

        uvs.push(uMin, vMin, uMax, vMin, uMax, vMax, uMin, vMax);

        indices.push(
          vertexCount, vertexCount + 1, vertexCount + 2,
          vertexCount, vertexCount + 2, vertexCount + 3
        );
        vertexCount += 4;
      }
    };

    for (let cx = 0; cx < this.size; cx++) {
      for (let cy = 0; cy < this.size; cy++) {
        for (let cz = 0; cz < this.size; cz++) {
          const blockType = this.getBlock(cx, cy, cz);
          if (blockType === BlockType.AIR) continue;

          const blockProp = BLOCKS[blockType];
          const globalX = this.x * this.size + cx;
          const globalY = this.y * this.size + cy;
          const globalZ = this.z * this.size + cz;

          if (blockType === BlockType.STAIRS) {
            addBox(globalX, globalY,       globalZ, globalX + 1.0, globalY + 0.5, globalZ + 1.0, 9); // ベース
            addBox(globalX, globalY + 0.5, globalZ, globalX + 1.0, globalY + 1.0, globalZ + 0.5, 9); // ステップ
            continue;
          }

          // 柵：中心ポスト + 上下レール二本
          if (blockType === BlockType.FENCE) {
            const uv = 16; // 柵テクスチャ
            // 中心ポスト
            addBox(globalX+0.375, globalY,        globalZ+0.375, globalX+0.625, globalY+1.0,   globalZ+0.625, uv);
            // 上レール（X方向）
            addBox(globalX,       globalY+0.75,   globalZ+0.375, globalX+1.0,   globalY+0.875, globalZ+0.625, uv);
            // 上レール（Z方向）
            addBox(globalX+0.375, globalY+0.75,   globalZ,       globalX+0.625, globalY+0.875, globalZ+1.0,   uv);
            // 下レール（X方向）
            addBox(globalX,       globalY+0.5,    globalZ+0.375, globalX+1.0,   globalY+0.5625, globalZ+0.625, uv);
            // 下レール（Z方向）
            addBox(globalX+0.375, globalY+0.5,    globalZ,       globalX+0.625, globalY+0.5625, globalZ+1.0,   uv);
            continue;
          }

          // ベッド：半分の高さの平たい笥
          if (blockType === BlockType.BED_HEAD || blockType === BlockType.BED_FOOT) {
            const isBedHead = blockType === BlockType.BED_HEAD;
            const topUv   = isBedHead ? 17 : 18; // 上面：枝鞠=17、足元=18
            const sideUv  = 18;                   // 側面：赤ウール
            const bedH    = 0.5625;               // ベッドの高さ（9/16）
            // ベッド座面（底面・倖面・周傈）
            addBox(globalX, globalY, globalZ, globalX+1.0, globalY+bedH, globalZ+1.0, sideUv);
            // 上面だけ別テクスチャで上書き
            // （上面が見える山面のみ再描画）
            {
              const uvIdx = topUv;
              const col = uvIdx % atlasCols;
              const row = Math.floor(uvIdx / atlasCols);
              const uMin2 = col * uvStepU;
              const vMin2 = 1.0 - (row + 1) * uvStepV;
              const uMax2 = uMin2 + uvStepU;
              const vMax2 = vMin2 + uvStepV;
              const topCorners = [
                [globalX,   globalY+bedH, globalZ+1.0],
                [globalX+1, globalY+bedH, globalZ+1.0],
                [globalX+1, globalY+bedH, globalZ],
                [globalX,   globalY+bedH, globalZ],
              ];
              for (const corner of topCorners) {
                positions.push(corner[0], corner[1], corner[2]);
                normals.push(0, 1, 0);
                colors.push(0.95, 0.95, 0.95);
              }
              uvs.push(uMin2, vMin2, uMax2, vMin2, uMax2, vMax2, uMin2, vMax2);
              indices.push(vertexCount, vertexCount+1, vertexCount+2, vertexCount, vertexCount+2, vertexCount+3);
              vertexCount += 4;
            }
            continue;
          }

          // チェスト：内側に少し小さい笥
          if (blockType === BlockType.CHEST) {
            // 内側オフセット。本体と蕋
            const cx0 = globalX + 0.0625;
            const cz0 = globalZ + 0.0625;
            const cx1 = globalX + 0.9375;
            const cz1 = globalZ + 0.9375;
            // 本体 (7/8の高さ)
            addBox(cx0, globalY,        cz0, cx1, globalY + 0.875,  cz1, 21); // 側面・底
            // 正面（+Z面）のみ鍵前テクスチャで上書き
            {
              const uvIdx = 20;
              const col = uvIdx % atlasCols;
              const row = Math.floor(uvIdx / atlasCols);
              const uMin2 = col * uvStepU;
              const vMin2 = 1.0 - (row + 1) * uvStepV;
              const uMax2 = uMin2 + uvStepU;
              const vMax2 = vMin2 + uvStepV;
              const frontCorners = [
                [cx0, globalY,        cz1],
                [cx1, globalY,        cz1],
                [cx1, globalY+0.875,  cz1],
                [cx0, globalY+0.875,  cz1],
              ];
              for (const corner of frontCorners) {
                positions.push(corner[0], corner[1], corner[2]);
                normals.push(0, 0, 1);
                colors.push(0.85, 0.85, 0.85);
              }
              uvs.push(uMin2, vMin2, uMax2, vMin2, uMax2, vMax2, uMin2, vMax2);
              indices.push(vertexCount, vertexCount+1, vertexCount+2, vertexCount, vertexCount+2, vertexCount+3);
              vertexCount += 4;
            }
            // 蕋
            addBox(cx0, globalY+0.875, cz0, cx1, globalY+0.9375, cz1, 21);
            continue;
          }

          for (const face of FACES) {
            const nx = cx + face.dir[0];
            const ny = cy + face.dir[1];
            const nz = cz + face.dir[2];

            let shouldDrawFace = false;

            if (blockType === BlockType.TORCH || blockType === BlockType.DOOR_CLOSED || blockType === BlockType.DOOR_OPEN) {
              // 松明・扉は常に全方位の面を描画する（薄型形状でカリングされると消えるため）
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

              // 扉の向き情報を取得（NS=南北方向に開口、EW=東西方向に開口）
              let doorOrientation: 'NS' | 'EW' = 'NS';
              if (isDoorClosed || isDoorOpen) {
                doorOrientation = world.getDoorOrientation(globalX, globalY, globalZ);
              }

              // 頂点の追加
              for (const corner of face.corners) {
                let vx = globalX + corner[0];
                let vy = globalY + corner[1];
                let vz = globalZ + corner[2];

                if (isTorch) {
                  // 松明専用の細長い棒状アバターを生成 (幅2/16 = 0.125, 高さ10/16 = 0.625)
                  vx = globalX + 0.5 + (corner[0] - 0.5) * 0.125;
                  vy = globalY + corner[1] * 0.625;
                  vz = globalZ + 0.5 + (corner[2] - 0.5) * 0.125;
                } else if (isDoorClosed) {
                  if (doorOrientation === 'EW') {
                    // EW向き（東西）の閉扉：X軸方向に薄い板（通路をZ方向に通る場合に壁になる）
                    vx = globalX + 0.5 + (corner[0] - 0.5) * 0.14;
                  } else {
                    // NS向き（南北）の閉扉：Z軸方向に薄い板（通路をX方向に通る場合に壁になる）
                    vz = globalZ + 0.5 + (corner[2] - 0.5) * 0.14;
                  }
                } else if (isDoorOpen) {
                  if (doorOrientation === 'EW') {
                    // EW向き（東西）の開扉：Z軸方向に薄い板（壁の端に収まる）
                    vz = globalZ + 0.5 + (corner[2] - 0.5) * 0.14;
                  } else {
                    // NS向き（南北）の開扉：X軸方向に薄い板（壁の端に収まる）
                    vx = globalX + 0.5 + (corner[0] - 0.5) * 0.14;
                  }
                } else if (blockType === BlockType.WATER) {
                  // 水の場合、上面（corner[1] === 1）かつ、上のブロックが水でなければ水位を下げる
                  if (corner[1] === 1) {
                    let aboveBlock: BlockType;
                    if (this.isOutOfBounds(cx, cy + 1, cz)) {
                      aboveBlock = world.getBlock(globalX, globalY + 1, globalZ);
                    } else {
                      aboveBlock = this.getBlock(cx, cy + 1, cz);
                    }
                    if (aboveBlock !== BlockType.WATER) {
                      vy -= 0.15;
                    }
                  }
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

              // UV座標の算出
              const uvIdx = blockProp.uvs[face.uvName];
              const col = uvIdx % atlasCols;
              const row = Math.floor(uvIdx / atlasCols);

              const uMin = col * uvStepU;
              const vMin = 1.0 - (row + 1) * uvStepV;
              const uMax = uMin + uvStepU;
              const vMax = vMin + uvStepV;
              
              let finalUMin = uMin;
              let finalVMin = vMin;
              let finalUMax = uMax;
              let finalVMax = vMax;

              if (isTorch) {
                const tu = uvStepU / 16;
                const tv = uvStepV / 16;
                finalUMin = uMin + 7 * tu;
                finalUMax = uMin + 9 * tu;

                if (face.uvName === 'top') {
                  finalVMax = vMax - 4 * tv;
                  finalVMin = vMax - 6 * tv;
                } else if (face.uvName === 'bottom') {
                  finalVMax = vMax - 14 * tv;
                  finalVMin = vMax - 16 * tv;
                } else {
                  finalVMax = vMax - 6 * tv;
                  finalVMin = vMax - 16 * tv;
                }
              }

              // 4つの角に対応するUVマッピング
              uvs.push(
                finalUMin, finalVMin, // 左下
                finalUMax, finalVMin, // 右下
                finalUMax, finalVMax, // 右上
                finalUMin, finalVMax  // 左上
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
