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
    const atlasRows = 22; // アトラスの行数
    const uvStepU = 1.0 / atlasCols; // U方向ステップ (0.25)
    const uvStepV = 1.0 / atlasRows; // V方向ステップ (1/22)

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

    const addCrossPlate = (
      globalX: number, globalY: number, globalZ: number,
      uvIndex: number
    ) => {
      const col = uvIndex % atlasCols;
      const row = Math.floor(uvIndex / atlasCols);
      const uMin = col * uvStepU;
      const vMin = 1.0 - (row + 1) * uvStepV;
      const uMax = uMin + uvStepU;
      const vMax = vMin + uvStepV;

      // 松明の光源から明るさを計算する
      const cx = globalX + 0.5;
      const cy = globalY + 0.5;
      const cz = globalZ + 0.5;
      let maxLight = 0.0;
      for (let i = 0; i < torches.length; i++) {
        const torch = torches[i];
        const dx = cx - torch.x;
        const dy = cy - torch.y;
        const dz = cz - torch.z;
        const dist = Math.abs(dx) + Math.abs(dy) + Math.abs(dz);
        const light = Math.max(0, 1.0 - dist / 8.0);
        if (light > maxLight) maxLight = light;
      }
      const finalLight = Math.min(1.0, 0.52 + maxLight * 0.48);
      const shadow = 0.9; 
      const r = shadow * finalLight;
      const g = r * (0.93 - (1.0 - maxLight) * 0.08);
      const b = r * (0.85 - (1.0 - maxLight) * 0.15);

      // 板1 (左手前下 から 右奥上)
      const p1 = [
        [globalX + 0.15, globalY,        globalZ + 0.15],
        [globalX + 0.85, globalY,        globalZ + 0.85],
        [globalX + 0.85, globalY + 1.0,  globalZ + 0.85],
        [globalX + 0.15, globalY + 1.0,  globalZ + 0.15]
      ];

      // 板2 (右手前下 から 左奥上)
      const p2 = [
        [globalX + 0.85, globalY,        globalZ + 0.15],
        [globalX + 0.15, globalY,        globalZ + 0.85],
        [globalX + 0.15, globalY + 1.0,  globalZ + 0.85],
        [globalX + 0.85, globalY + 1.0,  globalZ + 0.15]
      ];

      const addPlate = (corners: number[][], nx: number, nz: number) => {
        // 表
        for (const corner of corners) {
          positions.push(corner[0], corner[1], corner[2]);
          normals.push(nx, 0, nz);
          colors.push(r, g, b);
        }
        uvs.push(uMin, vMin, uMax, vMin, uMax, vMax, uMin, vMax);
        indices.push(vertexCount, vertexCount + 1, vertexCount + 2, vertexCount, vertexCount + 2, vertexCount + 3);
        vertexCount += 4;

        // 裏 (カリング防止のために頂点インデックス順を逆にする)
        for (const corner of corners) {
          positions.push(corner[0], corner[1], corner[2]);
          normals.push(-nx, 0, -nz);
          colors.push(r, g, b);
        }
        uvs.push(uMax, vMin, uMin, vMin, uMin, vMax, uMax, vMax);
        indices.push(vertexCount, vertexCount + 2, vertexCount + 1, vertexCount, vertexCount + 3, vertexCount + 2);
        vertexCount += 4;
      };

      addPlate(p1, -0.707, 0.707);
      addPlate(p2, 0.707, 0.707);
    };

    const addLadderPlate = (
      globalX: number, globalY: number, globalZ: number,
      cx: number, cy: number, cz: number,
      uvIndex: number
    ) => {
      const checkSolid = (dx: number, dz: number) => {
        const nx = cx + dx;
        const ny = cy;
        const nz = cz + dz;
        let neighborBlock: BlockType;
        if (this.isOutOfBounds(nx, ny, nz)) {
          neighborBlock = world.getBlock(globalX + dx, globalY, globalZ + dz);
        } else {
          neighborBlock = this.getBlock(nx, ny, nz);
        }
        return BLOCKS[neighborBlock].isSolid;
      };

      let wallDir: 'E' | 'W' | 'N' | 'S' = 'N';
      if (checkSolid(1, 0)) wallDir = 'E';
      else if (checkSolid(-1, 0)) wallDir = 'W';
      else if (checkSolid(0, 1)) wallDir = 'S';
      else if (checkSolid(0, -1)) wallDir = 'N';

      let corners: number[][];
      let nx = 0, nz = 0;
      const offset = 0.05;

      if (wallDir === 'E') {
        corners = [
          [globalX + 1.0 - offset, globalY,       globalZ],
          [globalX + 1.0 - offset, globalY,       globalZ + 1.0],
          [globalX + 1.0 - offset, globalY + 1.0, globalZ + 1.0],
          [globalX + 1.0 - offset, globalY + 1.0, globalZ]
        ];
        nx = -1;
      } else if (wallDir === 'W') {
        corners = [
          [globalX + offset, globalY,       globalZ + 1.0],
          [globalX + offset, globalY,       globalZ],
          [globalX + offset, globalY + 1.0, globalZ],
          [globalX + offset, globalY + 1.0, globalZ + 1.0]
        ];
        nx = 1;
      } else if (wallDir === 'S') {
        corners = [
          [globalX + 1.0, globalY,       globalZ + 1.0 - offset],
          [globalX,       globalY,       globalZ + 1.0 - offset],
          [globalX,       globalY + 1.0, globalZ + 1.0 - offset],
          [globalX + 1.0, globalY + 1.0, globalZ + 1.0 - offset]
        ];
        nz = -1;
      } else {
        corners = [
          [globalX,       globalY,       globalZ + offset],
          [globalX + 1.0, globalY,       globalZ + offset],
          [globalX + 1.0, globalY + 1.0, globalZ + offset],
          [globalX,       globalY + 1.0, globalZ + offset]
        ];
        nz = 1;
      }

      const col = uvIndex % atlasCols;
      const row = Math.floor(uvIndex / atlasCols);
      const uMin = col * uvStepU;
      const vMin = 1.0 - (row + 1) * uvStepV;
      const uMax = uMin + uvStepU;
      const vMax = vMin + uvStepV;

      let maxLight = 0.0;
      for (let i = 0; i < torches.length; i++) {
        const torch = torches[i];
        const dx = globalX + 0.5 - torch.x;
        const dy = globalY + 0.5 - torch.y;
        const dz = globalZ + 0.5 - torch.z;
        const dist = Math.abs(dx) + Math.abs(dy) + Math.abs(dz);
        const light = Math.max(0, 1.0 - dist / 8.0);
        if (light > maxLight) maxLight = light;
      }
      const finalLight = Math.min(1.0, 0.52 + maxLight * 0.48);
      const shadow = 0.8;
      const r = shadow * finalLight;
      const g = r * (0.93 - (1.0 - maxLight) * 0.08);
      const b = r * (0.85 - (1.0 - maxLight) * 0.15);

      for (const corner of corners) {
        positions.push(corner[0], corner[1], corner[2]);
        normals.push(nx, 0, nz);
        colors.push(r, g, b);
      }
      uvs.push(uMin, vMin, uMax, vMin, uMax, vMax, uMin, vMax);
      indices.push(vertexCount, vertexCount + 1, vertexCount + 2, vertexCount, vertexCount + 2, vertexCount + 3);
      vertexCount += 4;

      for (const corner of corners) {
        positions.push(corner[0], corner[1], corner[2]);
        normals.push(-nx, 0, -nz);
        colors.push(r, g, b);
      }
      uvs.push(uMax, vMin, uMin, vMin, uMin, vMax, uMax, vMax);
      indices.push(vertexCount, vertexCount + 2, vertexCount + 1, vertexCount, vertexCount + 3, vertexCount + 2);
      vertexCount += 4;
    };

    const addChainPlate = (
      globalX: number, globalY: number, globalZ: number,
      uvIndex: number
    ) => {
      const col = uvIndex % atlasCols;
      const row = Math.floor(uvIndex / atlasCols);
      const uMin = col * uvStepU;
      const vMin = 1.0 - (row + 1) * uvStepV;
      const uMax = uMin + uvStepU;
      const vMax = vMin + uvStepV;

      const cx = globalX + 0.5;
      const cy = globalY + 0.5;
      const cz = globalZ + 0.5;
      let maxLight = 0.0;
      for (let i = 0; i < torches.length; i++) {
        const torch = torches[i];
        const dx = cx - torch.x;
        const dy = cy - torch.y;
        const dz = cz - torch.z;
        const dist = Math.abs(dx) + Math.abs(dy) + Math.abs(dz);
        const light = Math.max(0, 1.0 - dist / 8.0);
        if (light > maxLight) maxLight = light;
      }
      const finalLight = Math.min(1.0, 0.52 + maxLight * 0.48);
      const shadow = 0.85;
      const r = shadow * finalLight;
      const g = r * (0.93 - (1.0 - maxLight) * 0.08);
      const b = r * (0.85 - (1.0 - maxLight) * 0.15);

      const p1 = [
        [globalX + 0.35, globalY,        globalZ + 0.35],
        [globalX + 0.65, globalY,        globalZ + 0.65],
        [globalX + 0.65, globalY + 1.0,  globalZ + 0.65],
        [globalX + 0.35, globalY + 1.0,  globalZ + 0.35]
      ];

      const p2 = [
        [globalX + 0.65, globalY,        globalZ + 0.35],
        [globalX + 0.35, globalY,        globalZ + 0.65],
        [globalX + 0.35, globalY + 1.0,  globalZ + 0.65],
        [globalX + 0.65, globalY + 1.0,  globalZ + 0.35]
      ];

      const addPlate = (corners: number[][], nx: number, nz: number) => {
        for (const corner of corners) {
          positions.push(corner[0], corner[1], corner[2]);
          normals.push(nx, 0, nz);
          colors.push(r, g, b);
        }
        uvs.push(uMin, vMin, uMax, vMin, uMax, vMax, uMin, vMax);
        indices.push(vertexCount, vertexCount + 1, vertexCount + 2, vertexCount, vertexCount + 2, vertexCount + 3);
        vertexCount += 4;

        for (const corner of corners) {
          positions.push(corner[0], corner[1], corner[2]);
          normals.push(-nx, 0, -nz);
          colors.push(r, g, b);
        }
        uvs.push(uMax, vMin, uMin, vMin, uMin, vMax, uMax, vMax);
        indices.push(vertexCount, vertexCount + 2, vertexCount + 1, vertexCount, vertexCount + 3, vertexCount + 2);
        vertexCount += 4;
      };

      addPlate(p1, -0.707, 0.707);
      addPlate(p2, 0.707, 0.707);
    };

    const addRailPlate = (
      globalX: number, globalY: number, globalZ: number,
      uvIndex: number
    ) => {
      const col = uvIndex % atlasCols;
      const row = Math.floor(uvIndex / atlasCols);
      const uMin = col * uvStepU;
      const vMin = 1.0 - (row + 1) * uvStepV;
      const uMax = uMin + uvStepU;
      const vMax = vMin + uvStepV;

      const offset = 0.01;
      const corners = [
        [globalX,       globalY + offset, globalZ],
        [globalX + 1.0, globalY + offset, globalZ],
        [globalX + 1.0, globalY + offset, globalZ + 1.0],
        [globalX,       globalY + offset, globalZ + 1.0]
      ];

      let maxLight = 0.0;
      for (let i = 0; i < torches.length; i++) {
        const torch = torches[i];
        const dx = globalX + 0.5 - torch.x;
        const dy = globalY + 0.5 - torch.y;
        const dz = globalZ + 0.5 - torch.z;
        const dist = Math.abs(dx) + Math.abs(dy) + Math.abs(dz);
        const light = Math.max(0, 1.0 - dist / 8.0);
        if (light > maxLight) maxLight = light;
      }
      const finalLight = Math.min(1.0, 0.52 + maxLight * 0.48);
      const shadow = 0.85;
      const r = shadow * finalLight;
      const g = r * (0.93 - (1.0 - maxLight) * 0.08);
      const b = r * (0.85 - (1.0 - maxLight) * 0.15);

      for (const corner of corners) {
        positions.push(corner[0], corner[1], corner[2]);
        normals.push(0, 1, 0);
        colors.push(r, g, b);
      }
      uvs.push(uMin, vMax, uMax, vMax, uMax, vMin, uMin, vMin);
      indices.push(vertexCount, vertexCount + 1, vertexCount + 2, vertexCount, vertexCount + 2, vertexCount + 3);
      vertexCount += 4;
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
            const dir = world.getDoorOrientation(globalX, globalY, globalZ) as string;
            
            // ベースは共通
            addBox(globalX, globalY, globalZ, globalX + 1.0, globalY + 0.5, globalZ + 1.0, 9); // ベース
            
            // ステップは向きに応じて配置
            if (dir === 'E') { // 東向きに登る
              addBox(globalX + 0.5, globalY + 0.5, globalZ, globalX + 1.0, globalY + 1.0, globalZ + 1.0, 9);
            } else if (dir === 'W') { // 西向きに登る
              addBox(globalX, globalY + 0.5, globalZ, globalX + 0.5, globalY + 1.0, globalZ + 1.0, 9);
            } else if (dir === 'S') { // 南向きに登る
              addBox(globalX, globalY + 0.5, globalZ + 0.5, globalX + 1.0, globalY + 1.0, globalZ + 1.0, 9);
            } else {
              // 'N' (デフォルト)。北向きに登る
              addBox(globalX, globalY + 0.5, globalZ, globalX + 1.0, globalY + 1.0, globalZ + 0.5, 9);
            }
            continue;
          }

          // 柵：中心ポスト + 繋がる方向へのレール
          if (blockType === BlockType.FENCE) {
            const uv = 16; // 柵テクスチャ
            
            // 隣接ブロックが柵かどうか判定
            const checkConnect = (dx: number, dz: number) => {
              const nx = cx + dx;
              const ny = cy;
              const nz = cz + dz;
              let neighborBlock: BlockType;
              if (this.isOutOfBounds(nx, ny, nz)) {
                neighborBlock = world.getBlock(globalX + dx, globalY, globalZ + dz);
              } else {
                neighborBlock = this.getBlock(nx, ny, nz);
              }
              return neighborBlock === BlockType.FENCE;
            };

            const connectN = checkConnect(0, -1);
            const connectS = checkConnect(0, 1);
            const connectE = checkConnect(1, 0);
            const connectW = checkConnect(-1, 0);

            // 中心ポスト (幅4/16 = 0.25)
            const cMin = 0.375;
            const cMax = 0.625;
            addBox(globalX+cMin, globalY, globalZ+cMin, globalX+cMax, globalY+1.0, globalZ+cMax, uv);

            // レールの高さと幅 (上レール Y:0.75~0.875, 下レール Y:0.4375~0.5625)
            const rMin = 0.4375;
            const rMax = 0.5625;
            const yTop1 = 0.75;
            const yTop2 = 0.875;
            const yBot1 = 0.4375;
            const yBot2 = 0.5625;

            // 北 (Z-)
            if (connectN) {
              addBox(globalX+rMin, globalY+yTop1, globalZ, globalX+rMax, globalY+yTop2, globalZ+cMin, uv);
              addBox(globalX+rMin, globalY+yBot1, globalZ, globalX+rMax, globalY+yBot2, globalZ+cMin, uv);
            }
            // 南 (Z+)
            if (connectS) {
              addBox(globalX+rMin, globalY+yTop1, globalZ+cMax, globalX+rMax, globalY+yTop2, globalZ+1.0, uv);
              addBox(globalX+rMin, globalY+yBot1, globalZ+cMax, globalX+rMax, globalY+yBot2, globalZ+1.0, uv);
            }
            // 東 (X+)
            if (connectE) {
              addBox(globalX+cMax, globalY+yTop1, globalZ+rMin, globalX+1.0, globalY+yTop2, globalZ+rMax, uv);
              addBox(globalX+cMax, globalY+yBot1, globalZ+rMin, globalX+1.0, globalY+yBot2, globalZ+rMax, uv);
            }
            // 西 (X-)
            if (connectW) {
              addBox(globalX, globalY+yTop1, globalZ+rMin, globalX+cMin, globalY+yTop2, globalZ+rMax, uv);
              addBox(globalX, globalY+yBot1, globalZ+rMin, globalX+cMin, globalY+yBot2, globalZ+rMax, uv);
            }
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

          // お花・作物：対角線上に交差するプレート
          if (blockType === BlockType.FLOWER_DANDELION || blockType === BlockType.FLOWER_ROSE || blockProp.isCrop) {
            addCrossPlate(globalX, globalY, globalZ, blockProp.uvs.front);
            continue;
          }

          // はしご
          if (blockType === BlockType.LADDER) {
            addLadderPlate(globalX, globalY, globalZ, cx, cy, cz, blockProp.uvs.front);
            continue;
          }

          // チェーン
          if (blockType === BlockType.CHAIN) {
            addChainPlate(globalX, globalY, globalZ, blockProp.uvs.front);
            continue;
          }

          // レール
          if (blockType === BlockType.RAIL) {
            addRailPlate(globalX, globalY, globalZ, blockProp.uvs.front);
            continue;
          }

          let torchOffsetX = 0;
          let torchOffsetZ = 0;
          if (blockType === BlockType.TORCH) {
            const checkSolid = (dx: number, dy: number, dz: number) => {
              let neighborBlock: BlockType;
              if (this.isOutOfBounds(cx + dx, cy + dy, cz + dz)) {
                neighborBlock = world.getBlock(globalX + dx, globalY + dy, globalZ + dz);
              } else {
                neighborBlock = this.getBlock(cx + dx, cy + dy, cz + dz);
              }
              return BLOCKS[neighborBlock]?.isSolid ?? false;
            };

            if (checkSolid(0, -1, 0)) {
              // 床に置ける場合はそのまま
            } else if (checkSolid(1, 0, 0)) {
              torchOffsetX = 0.4;
            } else if (checkSolid(-1, 0, 0)) {
              torchOffsetX = -0.4;
            } else if (checkSolid(0, 0, 1)) {
              torchOffsetZ = 0.4;
            } else if (checkSolid(0, 0, -1)) {
              torchOffsetZ = -0.4;
            }
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
                doorOrientation = world.getDoorOrientation(globalX, globalY, globalZ) as 'NS' | 'EW';
              }

              // 頂点の追加
              for (const corner of face.corners) {
                let vx = globalX + corner[0];
                let vy = globalY + corner[1];
                let vz = globalZ + corner[2];

                if (blockProp.isFarmland) {
                  if (corner[1] === 1) {
                    vy -= 0.0625; // 高さを 15/16 (1 - 1/16) にする
                  }
                }

                if (isTorch) {
                  // 松明専用の細長い棒状アバターを生成 (幅2/16 = 0.125, 高さ10/16 = 0.625)
                  vx = globalX + 0.5 + (corner[0] - 0.5) * 0.125;
                  vy = globalY + corner[1] * 0.625;
                  vz = globalZ + 0.5 + (corner[2] - 0.5) * 0.125;

                  if (torchOffsetX !== 0) {
                    vx += torchOffsetX;
                    if (corner[1] === 1) vx -= Math.sign(torchOffsetX) * 0.2;
                    vy += 0.2; // 壁掛けは少し高い位置に
                  }
                  if (torchOffsetZ !== 0) {
                    vz += torchOffsetZ;
                    if (corner[1] === 1) vz -= Math.sign(torchOffsetZ) * 0.2;
                    vy += 0.2;
                  }
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
