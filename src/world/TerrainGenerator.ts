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

  private grad3(hash: number, x: number, y: number, z: number): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  public noise3D(x: number, y: number, z: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);

    const u = this.fade(x);
    const v = this.fade(y);
    const w = this.fade(z);

    const A = this.permutation[X] + Y;
    const AA = this.permutation[A] + Z;
    const AB = this.permutation[A + 1] + Z;
    const B = this.permutation[X + 1] + Y;
    const BA = this.permutation[B] + Z;
    const BB = this.permutation[B + 1] + Z;

    return this.lerp(
      w,
      this.lerp(
        v,
        this.lerp(u, this.grad3(this.permutation[AA], x, y, z), this.grad3(this.permutation[BA], x - 1, y, z)),
        this.lerp(u, this.grad3(this.permutation[AB], x, y - 1, z), this.grad3(this.permutation[BB], x - 1, y - 1, z))
      ),
      this.lerp(
        v,
        this.lerp(u, this.grad3(this.permutation[AA + 1], x, y, z - 1), this.grad3(this.permutation[BA + 1], x - 1, y, z - 1)),
        this.lerp(u, this.grad3(this.permutation[AB + 1], x, y - 1, z - 1), this.grad3(this.permutation[BB + 1], x - 1, y - 1, z - 1))
      )
    );
  }

  public fbm3D(x: number, y: number, z: number, octaves: number, persistence: number = 0.5, scale: number = 1): number {
    let total = 0;
    let frequency = scale;
    let amplitude = 1;
    let maxValue = 0;
    for (let i = 0; i < octaves; i++) {
      total += this.noise3D(x * frequency, y * frequency, z * frequency) * amplitude;
      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= 2;
    }
    return total / maxValue;
  }
}

export class TerrainGenerator {
  private noise: SimpleNoise;
  private tempNoise: SimpleNoise;
  private humidNoise: SimpleNoise;
  private caveNoise: SimpleNoise;

  constructor(seed: number = 12345) {
    this.noise = new SimpleNoise(seed);
    this.tempNoise = new SimpleNoise(seed + 100);
    this.humidNoise = new SimpleNoise(seed + 200);
    this.caveNoise = new SimpleNoise(seed + 300);
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

    // 海面の高さ
    const seaLevel = -5;

    // V2: ノイズによる起伏とバイオーム
    for (let x = 0; x < size; x++) {
      for (let z = 0; z < size; z++) {
        const gx = globalChunkX + x;
        const gz = globalChunkZ + z;
        
        // 複数オクターブのノイズを合成して地形のベース高さを決定
        const noiseVal = this.noise.fbm2D(gx, gz, 4, 0.5, 0.015);
        
        // 気候ノイズ
        const tempVal = this.tempNoise.fbm2D(gx, gz, 2, 0.5, 0.005);
        const humidVal = this.humidNoise.fbm2D(gx, gz, 2, 0.5, 0.005);
        
        // バイオーム判定
        const isDesert = tempVal > 0.1 && humidVal < 0;
        const isForest = humidVal > 0.15;
        
        // 初期スポーン位置 (8,8) からの距離を計算し、周辺32ブロックを完全に平地化、64ブロックに向けて滑らかに山へ繋ぐ
        const dx = gx - 8;
        const dz = gz - 8;
        const distFromSpawn = Math.sqrt(dx * dx + dz * dz);
        const flatRadius = 32.0;
        const transitionRadius = 64.0;
        
        let heightFactor = 1.0;
        if (distFromSpawn < flatRadius) {
          heightFactor = 0.0;
        } else if (distFromSpawn < transitionRadius) {
          heightFactor = (distFromSpawn - flatRadius) / (transitionRadius - flatRadius);
        }
        
        // ベースの高さ (-15 〜 25 程度の起伏)
        const rawHeight = Math.floor(noiseVal * 40) - 2;
        const surfaceY = Math.floor(rawHeight * heightFactor);

        for (let y = 0; y < size; y++) {
          const globalY = globalChunkY + y;
          let type = BlockType.AIR;

          if (globalY <= -30) {
            type = BlockType.BEDROCK;
          } else if (globalY <= surfaceY) {
            // 洞窟の判定 (深部の石層のみ)
            let isCave = false;
            if (globalY < surfaceY - 5) {
              const caveVal = this.caveNoise.fbm3D(gx, globalY, gz, 2, 0.5, 0.05);
              if (Math.abs(caveVal) < 0.06) {
                isCave = true;
              }
            }

            if (!isCave) {
              if (globalY < surfaceY - 3) {
                // 石・鉱石層
                type = BlockType.STONE;
                // 鉱石の生成判定
                const hash = Math.sin((chunk.x * 17.13) + (chunk.y * 31.41) + (chunk.z * 53.57) + (x * 7.1) + (y * 13.3) + (z * 19.9)) * 43758.5453;
                const rand = hash - Math.floor(hash);
                
                if (rand < 0.06) {
                  const oreRand = Math.sin((gx * 1.1) + (globalY * 2.2) + (gz * 3.3)) * 1000;
                  const oreVal = oreRand - Math.floor(oreRand);
                  
                  if (globalY < -20 && oreVal < 0.08) {
                    type = BlockType.DIAMOND_ORE;
                  } else if (globalY < -15 && oreVal < 0.15) {
                    type = BlockType.LAPIS_ORE;
                  } else if (globalY < -10 && oreVal < 0.25) {
                    type = BlockType.GOLD_ORE;
                  } else if (globalY < 0 && oreVal < 0.5) {
                    type = BlockType.IRON_ORE;
                  } else {
                    type = BlockType.COAL_ORE;
                  }
                }
              } else if (globalY < surfaceY) {
                // 土・砂層
                type = isDesert ? BlockType.SAND : BlockType.DIRT;
              } else if (globalY === surfaceY) {
                // 表面
                type = isDesert ? BlockType.SAND : BlockType.GROUND;
              }
            }
          } else if (globalY === surfaceY + 1 && !isDesert && globalY > seaLevel) {
            // 地表の1つ上かつ水中でない場合にお花を低確率で生成
            const flowerHash = Math.sin((gx * 53.3) + (gz * 13.7)) * 1000;
            const flowerRand = flowerHash - Math.floor(flowerHash);
            if (flowerRand < 0.04) { // 4%の確率でお花
              type = flowerRand < 0.02 ? BlockType.FLOWER_DANDELION : BlockType.FLOWER_ROSE;
            }
          } else if (globalY <= seaLevel) {
            // 水没部分
            type = BlockType.WATER;
          }

          chunk.setBlock(x, y, z, type);
        }
        
        // 木の生成判定 (木は地表にあるべき、砂漠には生えない、水没していない)
        if (surfaceY >= globalChunkY && surfaceY < globalChunkY + size) {
          if (!isDesert && surfaceY >= seaLevel) {
            const treeProb = isForest ? 0.05 : 0.01;
            const localSurfaceY = surfaceY - globalChunkY;
            this.tryGenerateTreeAt(chunk, x, localSurfaceY, z, gx, gz, treeProb);
          }
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

  private tryGenerateTreeAt(chunk: Chunk, x: number, localY: number, z: number, gx: number, gz: number, prob: number = 0.015): void {
    // 境界チェック (木がチャンク外にはみ出す簡易防止策)
    if (x < 2 || x >= CONFIG.CHUNK_SIZE - 2 || z < 2 || z >= CONFIG.CHUNK_SIZE - 2) return;
    if (localY + 5 >= CONFIG.CHUNK_SIZE) return;

    // 決定論的なハッシュコードで生成可否を判定
    const hash = Math.sin((gx * 12.9898) + (gz * 78.233)) * 43758.5453;
    const rand = hash - Math.floor(hash);

    if (rand < prob) {
      const baseY = localY + 1; // 地表の1つ上から

      // 木の種類（オークか白樺か）を決定 (randを基準に判定)
      const isBirch = (rand * 10) % 1.0 < 0.35;
      const woodType = isBirch ? BlockType.BIRCH_WOOD : BlockType.WOOD;
      const leafType = isBirch ? BlockType.BIRCH_LEAVES : BlockType.LEAVES;

      // 幹を配置 (高さ3ブロック)
      chunk.setBlock(x, baseY, z, woodType);
      chunk.setBlock(x, baseY + 1, z, woodType);
      chunk.setBlock(x, baseY + 2, z, woodType);

      // 葉を配置
      const leafBase = baseY + 2;
      // レイヤー1 (十字)
      chunk.setBlock(x + 1, leafBase, z, leafType);
      chunk.setBlock(x - 1, leafBase, z, leafType);
      chunk.setBlock(x, leafBase, z + 1, leafType);
      chunk.setBlock(x, leafBase, z - 1, leafType);

      // レイヤー2 (3x3)
      for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
          if (dx !== 0 || dz !== 0) {
            chunk.setBlock(x + dx, leafBase + 1, z + dz, leafType);
          }
        }
      }
      chunk.setBlock(x, leafBase + 1, z, leafType);

      // レイヤー3 (頂部十字)
      chunk.setBlock(x, leafBase + 2, z, leafType);
      chunk.setBlock(x + 1, leafBase + 2, z, leafType);
      chunk.setBlock(x - 1, leafBase + 2, z, leafType);
      chunk.setBlock(x, leafBase + 2, z + 1, leafType);
      chunk.setBlock(x, leafBase + 2, z - 1, leafType);
    }
  }
}
