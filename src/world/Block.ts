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
    name: 'Air',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 0, back: 0, left: 0, right: 0, top: 0, bottom: 0 },
  },
  [BlockType.GROUND]: {
    id: BlockType.GROUND,
    name: 'Grass',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 3, back: 3, left: 3, right: 3, top: 0, bottom: 1 },
  },
  [BlockType.DIRT]: {
    id: BlockType.DIRT,
    name: 'Dirt',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 1, back: 1, left: 1, right: 1, top: 1, bottom: 1 },
  },
  [BlockType.STONE]: {
    id: BlockType.STONE,
    name: 'Stone',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 2, back: 2, left: 2, right: 2, top: 2, bottom: 2 },
  },
  [BlockType.WOOD]: {
    id: BlockType.WOOD,
    name: 'Wood',
    isSolid: true,
    isTransparent: false,
    // 木（原木）は側面が樹皮(4), 天面底面が年輪(5)
    uvs: { front: 4, back: 4, left: 4, right: 4, top: 5, bottom: 5 },
  },
  [BlockType.LEAVES]: {
    id: BlockType.LEAVES,
    name: 'Leaves',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 6, back: 6, left: 6, right: 6, top: 6, bottom: 6 },
  },
  [BlockType.PLANK]: {
    id: BlockType.PLANK,
    name: 'Plank',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 9, back: 9, left: 9, right: 9, top: 9, bottom: 9 },
  },
  [BlockType.BRICK]: {
    id: BlockType.BRICK,
    name: 'Brick',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 7, back: 7, left: 7, right: 7, top: 7, bottom: 7 },
  },
  [BlockType.SAND]: {
    id: BlockType.SAND,
    name: 'Sand',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 8, back: 8, left: 8, right: 8, top: 8, bottom: 8 },
  },
  [BlockType.COAL_ORE]: {
    id: BlockType.COAL_ORE,
    name: 'Coal Ore',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 10, back: 10, left: 10, right: 10, top: 10, bottom: 10 },
  },
  [BlockType.TORCH]: {
    id: BlockType.TORCH,
    name: 'Torch',
    isSolid: false,
    isTransparent: true,
    lightLevel: 14, // 強い発光強度を持つ
    uvs: { front: 11, back: 11, left: 11, right: 11, top: 11, bottom: 11 },
  },
};

