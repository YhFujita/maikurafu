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
  {
    id: 'torch',
    inputs: [{ type: BlockType.STICK, count: 1 }, { type: BlockType.COAL_ORE, count: 1 }],
    output: { type: BlockType.TORCH, count: 4 },
  },
  {
    id: 'chest',
    inputs: [{ type: BlockType.PLANK, count: 8 }],
    output: { type: BlockType.CHEST, count: 1 },
  },
  {
    id: 'furnace',
    inputs: [{ type: BlockType.STONE, count: 8 }],
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
  // ツール類
  {
    id: 'stone_sword',
    inputs: [{ type: BlockType.STICK, count: 1 }, { type: BlockType.STONE, count: 2 }],
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
  // 簡易精錬ルール
  {
    id: 'smelt_iron',
    inputs: [{ type: BlockType.IRON_ORE, count: 1 }, { type: BlockType.COAL_ORE, count: 1 }],
    output: { type: BlockType.IRON_INGOT, count: 1 },
  },
  {
    id: 'smelt_gold',
    inputs: [{ type: BlockType.GOLD_ORE, count: 1 }, { type: BlockType.COAL_ORE, count: 1 }],
    output: { type: BlockType.GOLD_INGOT, count: 1 },
  },
  // ダイヤはそのままアイテムにする
  {
    id: 'extract_diamond',
    inputs: [{ type: BlockType.DIAMOND_ORE, count: 1 }],
    output: { type: BlockType.DIAMOND, count: 1 },
  },
];
