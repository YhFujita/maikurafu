export enum BlockType {
  AIR = 0,
  GROUND = 1, // 草ブロック (土 + 上面が緑)
  DIRT = 2,   // 土ブロック
  STONE = 3,  // 石ブロック
}

export interface BlockProperties {
  id: BlockType;
  name: string;
  isSolid: boolean;
  isTransparent: boolean;
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
    // 草ブロックは上面が緑、底面が土、側面が草付き土
    // テクスチャアトラスの例 (4x4グリッド):
    // 0: 草(上面), 1: 土, 2: 石, 3: 草側面
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
};
