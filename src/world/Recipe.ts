import { BlockType } from './Block.ts';

export interface RecipeIngredient {
  type: BlockType;
  count: number;
}

export interface Recipe {
  id: string;
  inputs: RecipeIngredient[];
  output: RecipeIngredient;
}

export const RECIPES: Recipe[] = [
  // 基本素材
  {
    id: 'plank',
    inputs: [{ type: BlockType.WOOD, count: 1 }],
    output: { type: BlockType.PLANK, count: 4 },
  },
  {
    id: 'stick',
    inputs: [{ type: BlockType.PLANK, count: 2 }],
    output: { type: BlockType.STICK, count: 4 },
  },
  
  // 建築ブロック・設備
  {
    id: 'torch',
    inputs: [{ type: BlockType.STICK, count: 1 }, { type: BlockType.COAL, count: 1 }],
    output: { type: BlockType.TORCH, count: 4 },
  },
  {
    id: 'chest',
    inputs: [{ type: BlockType.PLANK, count: 8 }],
    output: { type: BlockType.CHEST, count: 1 },
  },
  {
    id: 'furnace',
    inputs: [{ type: BlockType.COBBLESTONE, count: 8 }],
    output: { type: BlockType.FURNACE, count: 1 },
  },
  {
    id: 'door',
    inputs: [{ type: BlockType.PLANK, count: 6 }],
    output: { type: BlockType.DOOR_CLOSED, count: 3 },
  },
  {
    id: 'bed',
    inputs: [{ type: BlockType.PLANK, count: 3 }, { type: BlockType.WOOD, count: 3 }],
    output: { type: BlockType.BED_HEAD, count: 1 },
  },
  {
    id: 'stairs',
    inputs: [{ type: BlockType.PLANK, count: 6 }],
    output: { type: BlockType.STAIRS, count: 4 },
  },
  {
    id: 'fence',
    inputs: [{ type: BlockType.PLANK, count: 2 }, { type: BlockType.STICK, count: 4 }],
    output: { type: BlockType.FENCE, count: 3 },
  },

  // 簡易精錬
  {
    id: 'smelt_stone',
    inputs: [{ type: BlockType.COBBLESTONE, count: 1 }, { type: BlockType.COAL, count: 1 }],
    output: { type: BlockType.STONE, count: 1 },
  },
  {
    id: 'smelt_glass',
    inputs: [{ type: BlockType.SAND, count: 1 }, { type: BlockType.COAL, count: 1 }],
    output: { type: BlockType.GLASS, count: 1 },
  },
  {
    id: 'smelt_iron',
    inputs: [{ type: BlockType.IRON_ORE, count: 1 }, { type: BlockType.COAL, count: 1 }],
    output: { type: BlockType.IRON_INGOT, count: 1 },
  },
  {
    id: 'smelt_gold',
    inputs: [{ type: BlockType.GOLD_ORE, count: 1 }, { type: BlockType.COAL, count: 1 }],
    output: { type: BlockType.GOLD_INGOT, count: 1 },
  },

  // ツルハシ
  {
    id: 'wooden_pickaxe',
    inputs: [{ type: BlockType.STICK, count: 2 }, { type: BlockType.PLANK, count: 3 }],
    output: { type: BlockType.WOODEN_PICKAXE, count: 1 },
  },
  {
    id: 'stone_pickaxe',
    inputs: [{ type: BlockType.STICK, count: 2 }, { type: BlockType.COBBLESTONE, count: 3 }],
    output: { type: BlockType.STONE_PICKAXE, count: 1 },
  },
  {
    id: 'iron_pickaxe',
    inputs: [{ type: BlockType.STICK, count: 2 }, { type: BlockType.IRON_INGOT, count: 3 }],
    output: { type: BlockType.IRON_PICKAXE, count: 1 },
  },
  {
    id: 'diamond_pickaxe',
    inputs: [{ type: BlockType.STICK, count: 2 }, { type: BlockType.DIAMOND, count: 3 }],
    output: { type: BlockType.DIAMOND_PICKAXE, count: 1 },
  },

  // 斧
  {
    id: 'wooden_axe',
    inputs: [{ type: BlockType.STICK, count: 2 }, { type: BlockType.PLANK, count: 3 }],
    output: { type: BlockType.WOODEN_AXE, count: 1 },
  },
  {
    id: 'stone_axe',
    inputs: [{ type: BlockType.STICK, count: 2 }, { type: BlockType.COBBLESTONE, count: 3 }],
    output: { type: BlockType.STONE_AXE, count: 1 },
  },
  {
    id: 'iron_axe',
    inputs: [{ type: BlockType.STICK, count: 2 }, { type: BlockType.IRON_INGOT, count: 3 }],
    output: { type: BlockType.IRON_AXE, count: 1 },
  },
  {
    id: 'diamond_axe',
    inputs: [{ type: BlockType.STICK, count: 2 }, { type: BlockType.DIAMOND, count: 3 }],
    output: { type: BlockType.DIAMOND_AXE, count: 1 },
  },

  // シャベル
  {
    id: 'wooden_shovel',
    inputs: [{ type: BlockType.STICK, count: 2 }, { type: BlockType.PLANK, count: 1 }],
    output: { type: BlockType.WOODEN_SHOVEL, count: 1 },
  },
  {
    id: 'stone_shovel',
    inputs: [{ type: BlockType.STICK, count: 2 }, { type: BlockType.COBBLESTONE, count: 1 }],
    output: { type: BlockType.STONE_SHOVEL, count: 1 },
  },
  {
    id: 'iron_shovel',
    inputs: [{ type: BlockType.STICK, count: 2 }, { type: BlockType.IRON_INGOT, count: 1 }],
    output: { type: BlockType.IRON_SHOVEL, count: 1 },
  },
  {
    id: 'diamond_shovel',
    inputs: [{ type: BlockType.STICK, count: 2 }, { type: BlockType.DIAMOND, count: 1 }],
    output: { type: BlockType.DIAMOND_SHOVEL, count: 1 },
  },

  // 武器類
  {
    id: 'stone_sword',
    inputs: [{ type: BlockType.STICK, count: 1 }, { type: BlockType.COBBLESTONE, count: 2 }],
    output: { type: BlockType.SWORD, count: 1 },
  },
  {
    id: 'diamond_sword',
    inputs: [{ type: BlockType.STICK, count: 1 }, { type: BlockType.DIAMOND, count: 2 }],
    output: { type: BlockType.DIAMOND_SWORD, count: 1 },
  },
  {
    id: 'hammer',
    inputs: [{ type: BlockType.STICK, count: 2 }, { type: BlockType.IRON_INGOT, count: 3 }],
    output: { type: BlockType.HAMMER, count: 1 },
  },

  // 防具セット（24個の素材で一括クラフト）
  {
    id: 'iron_armor_set',
    inputs: [{ type: BlockType.IRON_INGOT, count: 24 }],
    output: { type: BlockType.IRON_ARMOR_SET, count: 1 },
  },
  {
    id: 'diamond_armor_set',
    inputs: [{ type: BlockType.DIAMOND, count: 24 }],
    output: { type: BlockType.DIAMOND_ARMOR_SET, count: 1 },
  },
];
