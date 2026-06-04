export enum BlockType {
  AIR = 0,
  GROUND = 1, // 草ブロック (土 + 上面が緑)
  DIRT = 2,   // 土ブロック
  STONE = 3,  // 石ブロック
  WOOD = 4,   // 木（原木）
  LEAVES = 5,  // 葉
  PLANK = 6,  // 木材
  BRICK = 7,  // レンガ
  SAND = 8,   // 砂
  COAL_ORE = 9, // 石炭鉱石
  TORCH = 10,   // 松明ブロック
  GLASS = 11,   // ガラスブロック
  DOOR_CLOSED = 12, // ドアブロック（閉）
  DOOR_OPEN = 13,   // ドアブロック（開）
  SWORD = 14,       // 剣（武器）
  STAIRS = 15,      // 木の階段
  FENCE = 16,       // 柵
  BED_HEAD = 17,    // ベッド（枕側）
  BED_FOOT = 18,    // ベッド（足元側）
  FURNACE = 19,     // かまど
  CHEST = 20,       // チェスト
  WATER = 21,       // 水
  DIAMOND_SWORD = 22, // ダイヤの剣（武器）
  HAMMER = 23,        // ハンマー（武器）
  BEDROCK = 24,       // 岩盤
}

export interface BlockProperties {
  id: BlockType;
  name: string;
  isSolid: boolean;
  isTransparent: boolean;
  lightLevel?: number; // 光強度（0〜15、未指定は0）
  // テクスチャアトラス上の面ごとのUVインデックス [前, 後, 左, 右, 上, 下]
  // アトラスのグリッドが4x4の場合、インデックスは0〜15
  uvs: {
    front: number;
    back: number;
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
}

export const BLOCKS: Record<BlockType, BlockProperties> = {
  [BlockType.AIR]: {
    id: BlockType.AIR,
    name: 'くうき',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 0, back: 0, left: 0, right: 0, top: 0, bottom: 0 },
  },
  [BlockType.GROUND]: {
    id: BlockType.GROUND,
    name: 'くさ',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 3, back: 3, left: 3, right: 3, top: 0, bottom: 1 },
  },
  [BlockType.DIRT]: {
    id: BlockType.DIRT,
    name: 'つち',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 1, back: 1, left: 1, right: 1, top: 1, bottom: 1 },
  },
  [BlockType.STONE]: {
    id: BlockType.STONE,
    name: 'いし',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 2, back: 2, left: 2, right: 2, top: 2, bottom: 2 },
  },
  [BlockType.WOOD]: {
    id: BlockType.WOOD,
    name: 'まるた',
    isSolid: true,
    isTransparent: false,
    // 木（原木）は側面が樹皮(4), 天面底面が年輪(5)
    uvs: { front: 4, back: 4, left: 4, right: 4, top: 5, bottom: 5 },
  },
  [BlockType.LEAVES]: {
    id: BlockType.LEAVES,
    name: 'はっぱ',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 6, back: 6, left: 6, right: 6, top: 6, bottom: 6 },
  },
  [BlockType.PLANK]: {
    id: BlockType.PLANK,
    name: 'いた',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 9, back: 9, left: 9, right: 9, top: 9, bottom: 9 },
  },
  [BlockType.BRICK]: {
    id: BlockType.BRICK,
    name: 'れんが',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 7, back: 7, left: 7, right: 7, top: 7, bottom: 7 },
  },
  [BlockType.SAND]: {
    id: BlockType.SAND,
    name: 'すな',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 8, back: 8, left: 8, right: 8, top: 8, bottom: 8 },
  },
  [BlockType.COAL_ORE]: {
    id: BlockType.COAL_ORE,
    name: 'せきたん',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 10, back: 10, left: 10, right: 10, top: 10, bottom: 10 },
  },
  [BlockType.TORCH]: {
    id: BlockType.TORCH,
    name: 'たいまつ',
    isSolid: false,
    isTransparent: true,
    lightLevel: 14,
    uvs: { front: 11, back: 11, left: 11, right: 11, top: 11, bottom: 11 },
  },
  [BlockType.GLASS]: {
    id: BlockType.GLASS,
    name: 'ガラス',
    isSolid: true,
    isTransparent: true,
    uvs: { front: 12, back: 12, left: 12, right: 12, top: 12, bottom: 12 },
  },
  [BlockType.DOOR_CLOSED]: {
    id: BlockType.DOOR_CLOSED,
    name: 'ドア（しめる）',
    isSolid: true,
    isTransparent: true,
    uvs: { front: 13, back: 13, left: 13, right: 13, top: 13, bottom: 13 },
  },
  [BlockType.DOOR_OPEN]: {
    id: BlockType.DOOR_OPEN,
    name: 'ドア（あける）',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 13, back: 13, left: 13, right: 13, top: 13, bottom: 13 },
  },
  [BlockType.SWORD]: {
    id: BlockType.SWORD,
    name: 'いしのけん',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 14, back: 14, left: 14, right: 14, top: 14, bottom: 14 },
  },
  [BlockType.STAIRS]: {
    id: BlockType.STAIRS,
    name: 'きのかいだん',
    isSolid: true,
    isTransparent: true,
    uvs: { front: 9, back: 9, left: 9, right: 9, top: 9, bottom: 9 },
  },
  [BlockType.FENCE]: {
    id: BlockType.FENCE,
    name: 'さく',
    isSolid: true,       // 物理衝突あり（通り抜け不可）
    isTransparent: true, // 特殊形状のため通常カリングをスキップ
    uvs: { front: 16, back: 16, left: 16, right: 16, top: 16, bottom: 16 },
  },
  [BlockType.BED_HEAD]: {
    id: BlockType.BED_HEAD,
    name: 'ベッド（まくら）',
    isSolid: true,
    isTransparent: true, // 半分の高さなので特殊描画
    uvs: { front: 18, back: 18, left: 18, right: 18, top: 17, bottom: 16 },
  },
  [BlockType.BED_FOOT]: {
    id: BlockType.BED_FOOT,
    name: 'ベッド（あしもと）',
    isSolid: true,
    isTransparent: true,
    uvs: { front: 18, back: 18, left: 18, right: 18, top: 18, bottom: 16 },
  },
  [BlockType.FURNACE]: {
    id: BlockType.FURNACE,
    name: 'かまど',
    isSolid: true,
    isTransparent: false,
    // 正面（+Z）にかまどの口、その他は石テクスチャ
    uvs: { front: 19, back: 2, left: 2, right: 2, top: 2, bottom: 2 },
  },
  [BlockType.CHEST]: {
    id: BlockType.CHEST,
    name: 'チェスト',
    isSolid: true,
    isTransparent: true, // 少し小さい形状なので特殊描画
    // 正面（+Z）に錠前テクスチャ、側面・上面は木材調
    uvs: { front: 20, back: 21, left: 21, right: 21, top: 21, bottom: 16 },
  },
  [BlockType.WATER]: {
    id: BlockType.WATER,
    name: 'みず',
    isSolid: false,      // 通り抜け可能
    isTransparent: true, // 透過
    uvs: { front: 22, back: 22, left: 22, right: 22, top: 22, bottom: 22 },
  },
  [BlockType.DIAMOND_SWORD]: {
    id: BlockType.DIAMOND_SWORD,
    name: 'ダイヤのけん',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 23, back: 23, left: 23, right: 23, top: 23, bottom: 23 },
  },
  [BlockType.HAMMER]: {
    id: BlockType.HAMMER,
    name: 'ハンマー',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 24, back: 24, left: 24, right: 24, top: 24, bottom: 24 },
  },
  [BlockType.BEDROCK]: {
    id: BlockType.BEDROCK,
    name: 'いわばん',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 25, back: 25, left: 25, right: 25, top: 25, bottom: 25 },
  },
};
