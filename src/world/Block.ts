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
  IRON_ORE = 25,      // 鉄鉱石
  GOLD_ORE = 26,      // 金鉱石
  DIAMOND_ORE = 27,   // ダイヤモンド鉱石
  STICK = 28,         // 木の棒
  IRON_INGOT = 29,    // 鉄インゴット
  GOLD_INGOT = 30,    // 金インゴット
  DIAMOND = 31,       // ダイヤモンド
  COBBLESTONE = 32,   // 丸石
  COAL = 33,          // 石炭(アイテム)
  APPLE = 34,         // リンゴ
  WOODEN_PICKAXE = 35, // 木のツルハシ
  STONE_PICKAXE = 36,  // 石のツルハシ
  IRON_PICKAXE = 37,   // 鉄のツルハシ
  DIAMOND_PICKAXE = 38, // ダイヤのツルハシ
  WOODEN_AXE = 39,     // 木の斧
  STONE_AXE = 40,      // 石の斧
  IRON_AXE = 41,       // 鉄の斧
  DIAMOND_AXE = 42,    // ダイヤの斧
  WOODEN_SHOVEL = 43,  // 木のシャベル
  STONE_SHOVEL = 44,   // 石のシャベル
  IRON_SHOVEL = 45,    // 鉄のシャベル
  DIAMOND_SHOVEL = 46, // ダイヤのシャベル
  LEATHER_ARMOR_SET = 47, // 革の防具セット
  IRON_ARMOR_SET = 48,    // 鉄の防具セット
  DIAMOND_ARMOR_SET = 49, // ダイヤの防具セット
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
  drops?: BlockType; // 指定がない場合は自分自身をドロップ

  // 破壊・採掘関連のプロパティ
  hardness?: number; // 壊すのにかかる基準時間（秒）。0や未定義なら瞬時(またはデフォルト値)
  requiredToolCategory?: 'pickaxe' | 'axe' | 'shovel' | 'sword' | 'none'; // 適性ツール
  minToolTier?: number; // ドロップに必要なツールの最低ランク (0:木/手, 1:石, 2:鉄, 3:ダイヤ)

  // ツールとしてのプロパティ（アイテム向け）
  isTool?: boolean;
  toolCategory?: 'pickaxe' | 'axe' | 'shovel' | 'sword';
  toolTier?: number;
  speedMultiplier?: number; // 採掘速度の倍率
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
    name: 'くさブロック',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 3, back: 3, left: 3, right: 3, top: 0, bottom: 2 },
    drops: BlockType.DIRT,
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
    uvs: { front: 1, back: 1, left: 1, right: 1, top: 1, bottom: 1 },
    drops: BlockType.COBBLESTONE,
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
    name: 'せきたんこうせき',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 25, back: 25, left: 25, right: 25, top: 25, bottom: 25 },
    drops: BlockType.COAL,
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
  [BlockType.IRON_ORE]: {
    id: BlockType.IRON_ORE,
    name: 'てつこうせき',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 26, back: 26, left: 26, right: 26, top: 26, bottom: 26 },
  },
  [BlockType.GOLD_ORE]: {
    id: BlockType.GOLD_ORE,
    name: 'きんこうせき',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 27, back: 27, left: 27, right: 27, top: 27, bottom: 27 },
  },
  [BlockType.DIAMOND_ORE]: {
    id: BlockType.DIAMOND_ORE,
    name: 'ダイヤこうせき',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 28, back: 28, left: 28, right: 28, top: 28, bottom: 28 },
    drops: BlockType.DIAMOND,
  },
  [BlockType.STICK]: {
    id: BlockType.STICK,
    name: 'きのぼう',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 29, back: 29, left: 29, right: 29, top: 29, bottom: 29 },
  },
  [BlockType.IRON_INGOT]: {
    id: BlockType.IRON_INGOT,
    name: 'てつインゴット',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 30, back: 30, left: 30, right: 30, top: 30, bottom: 30 },
  },
  [BlockType.GOLD_INGOT]: {
    id: BlockType.GOLD_INGOT,
    name: 'きんインゴット',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 31, back: 31, left: 31, right: 31, top: 31, bottom: 31 },
  },
  [BlockType.DIAMOND]: {
    id: BlockType.DIAMOND,
    name: 'ダイヤモンド',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 32, back: 32, left: 32, right: 32, top: 32, bottom: 32 },
  },
  [BlockType.COBBLESTONE]: {
    id: BlockType.COBBLESTONE,
    name: '丸石',
    isSolid: true,
    isTransparent: false,
    uvs: { front: 33, back: 33, left: 33, right: 33, top: 33, bottom: 33 },
  },
  [BlockType.COAL]: {
    id: BlockType.COAL,
    name: '石炭',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 34, back: 34, left: 34, right: 34, top: 34, bottom: 34 },
  },
  [BlockType.APPLE]: {
    id: BlockType.APPLE,
    name: 'リンゴ',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 35, back: 35, left: 35, right: 35, top: 35, bottom: 35 },
  },
  [BlockType.WOODEN_PICKAXE]: {
    id: BlockType.WOODEN_PICKAXE,
    name: '木のツルハシ',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 36, back: 36, left: 36, right: 36, top: 36, bottom: 36 },
  },
  [BlockType.STONE_PICKAXE]: {
    id: BlockType.STONE_PICKAXE,
    name: '石のツルハシ',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 37, back: 37, left: 37, right: 37, top: 37, bottom: 37 },
  },
  [BlockType.IRON_PICKAXE]: {
    id: BlockType.IRON_PICKAXE,
    name: '鉄のツルハシ',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 38, back: 38, left: 38, right: 38, top: 38, bottom: 38 },
  },
  [BlockType.DIAMOND_PICKAXE]: {
    id: BlockType.DIAMOND_PICKAXE,
    name: 'ダイヤのツルハシ',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 39, back: 39, left: 39, right: 39, top: 39, bottom: 39 },
  },
  [BlockType.WOODEN_AXE]: {
    id: BlockType.WOODEN_AXE,
    name: '木の斧',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 40, back: 40, left: 40, right: 40, top: 40, bottom: 40 },
  },
  [BlockType.STONE_AXE]: {
    id: BlockType.STONE_AXE,
    name: '石の斧',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 41, back: 41, left: 41, right: 41, top: 41, bottom: 41 },
  },
  [BlockType.IRON_AXE]: {
    id: BlockType.IRON_AXE,
    name: '鉄の斧',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 42, back: 42, left: 42, right: 42, top: 42, bottom: 42 },
  },
  [BlockType.DIAMOND_AXE]: {
    id: BlockType.DIAMOND_AXE,
    name: 'ダイヤの斧',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 43, back: 43, left: 43, right: 43, top: 43, bottom: 43 },
  },
  [BlockType.WOODEN_SHOVEL]: {
    id: BlockType.WOODEN_SHOVEL,
    name: '木のシャベル',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 44, back: 44, left: 44, right: 44, top: 44, bottom: 44 },
  },
  [BlockType.STONE_SHOVEL]: {
    id: BlockType.STONE_SHOVEL,
    name: '石のシャベル',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 45, back: 45, left: 45, right: 45, top: 45, bottom: 45 },
  },
  [BlockType.IRON_SHOVEL]: {
    id: BlockType.IRON_SHOVEL,
    name: '鉄のシャベル',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 46, back: 46, left: 46, right: 46, top: 46, bottom: 46 },
  },
  [BlockType.DIAMOND_SHOVEL]: {
    id: BlockType.DIAMOND_SHOVEL,
    name: 'ダイヤのシャベル',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 47, back: 47, left: 47, right: 47, top: 47, bottom: 47 },
  },
  [BlockType.LEATHER_ARMOR_SET]: {
    id: BlockType.LEATHER_ARMOR_SET,
    name: '革の防具セット',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 48, back: 48, left: 48, right: 48, top: 48, bottom: 48 },
  },
  [BlockType.IRON_ARMOR_SET]: {
    id: BlockType.IRON_ARMOR_SET,
    name: '鉄の防具セット',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 49, back: 49, left: 49, right: 49, top: 49, bottom: 49 },
  },
  [BlockType.DIAMOND_ARMOR_SET]: {
    id: BlockType.DIAMOND_ARMOR_SET,
    name: 'ダイヤの防具セット',
    isSolid: false,
    isTransparent: true,
    uvs: { front: 50, back: 50, left: 50, right: 50, top: 50, bottom: 50 },
  },
};
