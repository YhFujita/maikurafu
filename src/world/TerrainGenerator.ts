import { Chunk } from './Chunk.ts';
import { BlockType } from './Block.ts';
import { CONFIG } from '../config.ts';

// シンプルな2Dパーリン/シンプレックス風ノイズジェネレーター
class SimpleNoise {
  private permutation: number[];

  constructor(seed: number = 0) {
    this.permutation = new Array(512);
    const p = new Array(256);
    // 線形合同法で疑似乱数生成
    let s = seed;
    for (let i = 0; i < 256; i++) {
      s = (s * 1103515245 + 12345) % 2147483648;
      p[i] = i;
    }
    // シャッフル
    for (let i = 255; i > 0; i--) {
      s = (s * 1103515245 + 12345) % 2147483648;
      const j = s % (i + 1);
      const temp = p[i];
      p[i] = p[j];
      p[j] = temp;
    }
    for (let i = 0; i < 512; i++) {
      this.permutation[i] = p[i & 255];
    }
  }

  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(t: number, a: number, b: number): number {
    return a + t * (b - a);
  }

  private grad(hash: number, x: number, y: number): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : 0;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  public noise2D(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);

    const u = this.fade(x);
    const v = this.fade(y);

    const A = this.permutation[X] + Y;
    const B = this.permutation[X + 1] + Y;

    return this.lerp(
      v,
      this.lerp(u, this.grad(this.permutation[A], x, y), this.grad(this.permutation[B], x - 1, y)),
      this.lerp(u, this.grad(this.permutation[A + 1], x, y - 1), this.grad(this.permutation[B + 1], x - 1, y - 1))
    );
  }
  
  // フラクタルブラウン運動 (複数オクターブの合成)
  public fbm2D(x: number, y: number, octaves: number, persistence: number = 0.5, scale: number = 1): number {
    let total = 0;
    let frequency = scale;
    let amplitude = 1;
    let maxValue = 0; // 正規化用
    
    for (let i = 0; i < octaves; i++) {
      total += this.noise2D(x * frequency, y * frequency) * amplitude;
      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= 2;
    }
    
    return total / maxValue;
  }
}

export class TerrainGenerator {
  private noise: SimpleNoise;

  constructor(seed: number = 12345) {
    this.noise = new SimpleNoise(seed);
  }

  public generateV1(chunk: Chunk): void {
    const size = CONFIG.CHUNK_SIZE;
    const globalChunkY = chunk.y * size;

    // 1. 基本地形の生成 (石、石炭、土、草) - 平地
    for (let x = 0; x < size; x++) {
      for (let z = 0; z < size; z++) {
        for (let y = 0; y < size; y++) {
          const globalY = globalChunkY + y;
          let type = BlockType.AIR;

          if (globalY <= -10) {
            type = BlockType.BEDROCK;
          } else if (globalY < -4) {
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

    this.generateTrees(chunk, 0); // V1は地表が y=0
  }

  public generateV2(chunk: Chunk): void {
    const size = CONFIG.CHUNK_SIZE;
    const globalChunkX = chunk.x * size;
    const globalChunkY = chunk.y * size;
    const globalChunkZ = chunk.z * size;

    // V2: ノイズによる起伏
    for (let x = 0; x < size; x++) {
      for (let z = 0; z < size; z++) {
        const gx = globalChunkX + x;
        const gz = globalChunkZ + z;
        
        // 複数オクターブのノイズを合成して地形のベース高さを決定 (-0.5 〜 0.5)
        const noiseVal = this.noise.fbm2D(gx, gz, 4, 0.5, 0.02);
        
        // ベースの高さ (-10 〜 15 程度の起伏)
        const surfaceY = Math.floor(noiseVal * 25) - 2;

        for (let y = 0; y < size; y++) {
          const globalY = globalChunkY + y;
          let type = BlockType.AIR;

          if (globalY <= -15) {
            type = BlockType.BEDROCK;
          } else if (globalY < surfaceY - 3) {
            const hash = Math.sin((chunk.x * 17.13) + (chunk.y * 31.41) + (chunk.z * 53.57) + (x * 7.1) + (y * 13.3) + (z * 19.9)) * 43758.5453;
            const rand = hash - Math.floor(hash);
            type = rand < 0.05 ? BlockType.COAL_ORE : BlockType.STONE;
          } else if (globalY < surfaceY) {
            // 砂漠バイオームの簡易実装（座標によって砂漠にするなどの拡張も可）
            type = BlockType.DIRT;
          } else if (globalY === surfaceY) {
            type = BlockType.GROUND;
          }

          chunk.setBlock(x, y, z, type);
        }
        
        // 木の生成判定 (木は地表にあるべき)
        // チャンク内に地表(surfaceY)が含まれる場合のみ判定
        if (surfaceY >= globalChunkY && surfaceY < globalChunkY + size) {
          const localSurfaceY = surfaceY - globalChunkY;
          this.tryGenerateTreeAt(chunk, x, localSurfaceY, z, gx, gz);
        }
      }
    }
  }

  // 旧仕様互換のための木生成ロジック
  private generateTrees(chunk: Chunk, surfaceGlobalY: number): void {
    const size = CONFIG.CHUNK_SIZE;
    const globalChunkY = chunk.y * size;
    
    // チャンクに指定された高さが含まれる場合のみ
    if (surfaceGlobalY >= globalChunkY && surfaceGlobalY < globalChunkY + size) {
      const localSurfaceY = surfaceGlobalY - globalChunkY;
      for (let x = 2; x < size - 2; x++) {
        for (let z = 2; z < size - 2; z++) {
          this.tryGenerateTreeAt(chunk, x, localSurfaceY, z, chunk.x * size + x, chunk.z * size + z);
        }
      }
    }
  }

  private tryGenerateTreeAt(chunk: Chunk, x: number, localY: number, z: number, gx: number, gz: number): void {
    // 境界チェック (木がチャンク外にはみ出す簡易防止策)
    if (x < 2 || x >= CONFIG.CHUNK_SIZE - 2 || z < 2 || z >= CONFIG.CHUNK_SIZE - 2) return;
    if (localY + 5 >= CONFIG.CHUNK_SIZE) return;

    // 決定論的なハッシュコードで生成可否を判定 (約1.5%の確率)
    const hash = Math.sin((gx * 12.9898) + (gz * 78.233)) * 43758.5453;
    const rand = hash - Math.floor(hash);

    if (rand < 0.015) {
      const baseY = localY + 1; // 地表の1つ上から

      // 幹を配置 (高さ3ブロック)
      chunk.setBlock(x, baseY, z, BlockType.WOOD);
      chunk.setBlock(x, baseY + 1, z, BlockType.WOOD);
      chunk.setBlock(x, baseY + 2, z, BlockType.WOOD);

      // 葉を配置
      const leafBase = baseY + 2;
      // レイヤー1 (十字)
      chunk.setBlock(x + 1, leafBase, z, BlockType.LEAVES);
      chunk.setBlock(x - 1, leafBase, z, BlockType.LEAVES);
      chunk.setBlock(x, leafBase, z + 1, BlockType.LEAVES);
      chunk.setBlock(x, leafBase, z - 1, BlockType.LEAVES);

      // レイヤー2 (3x3)
      for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
          if (dx !== 0 || dz !== 0) {
            chunk.setBlock(x + dx, leafBase + 1, z + dz, BlockType.LEAVES);
          }
        }
      }
      chunk.setBlock(x, leafBase + 1, z, BlockType.LEAVES);

      // レイヤー3 (頂部十字)
      chunk.setBlock(x, leafBase + 2, z, BlockType.LEAVES);
      chunk.setBlock(x + 1, leafBase + 2, z, BlockType.LEAVES);
      chunk.setBlock(x - 1, leafBase + 2, z, BlockType.LEAVES);
      chunk.setBlock(x, leafBase + 2, z + 1, BlockType.LEAVES);
      chunk.setBlock(x, leafBase + 2, z - 1, BlockType.LEAVES);
    }
  }
}
