import * as THREE from 'three';
import { Renderer } from './renderer/Renderer.ts';
import { World } from './world/World.ts';
import { InputHandler } from './input/InputHandler.ts';
import { Player } from './player/Player.ts';
import { PhysicsWorld } from './physics/PhysicsWorld.ts';
import { BlockType, BLOCKS } from './world/Block.ts';
import { CONFIG } from './config.ts';
import { configStore } from './configStore.ts';
import { ConfigUIHandler } from './input/ConfigUIHandler.ts';
import { SoundManager } from './system/SoundManager.ts';
import { RECIPES } from './world/Recipe.ts';
import { TimeManager } from './system/TimeManager.ts';
import { DroppedItem } from './item/DroppedItem.ts';
import { Mob, MobType } from './mob/Mob.ts';
import { SaveManager } from './system/SaveManager.ts';
import { NavigationManager } from './ui/NavigationManager.ts';
import { NPCManager } from './mob/NPCManager.ts';

// レンダラーの初期化
const renderer = new Renderer('canvas-container');

// ひび割れ（破壊アニメーション）用メッシュの設定
let isBreakingBlock = false;
let breakingProgress = 0.0;
let breakingTargetPos = new THREE.Vector3(-999, -999, -999);
let easyModeBreakTimer = 0.0;
let prevShouldBreak = false;

// ひび割れ用の動的テクスチャとキャンバス
const crackCanvas = document.createElement('canvas');
crackCanvas.width = 128;
crackCanvas.height = 128;
const crackCtx = crackCanvas.getContext('2d')!;
const crackTexture = new THREE.CanvasTexture(crackCanvas);
crackTexture.magFilter = THREE.NearestFilter;
crackTexture.minFilter = THREE.NearestFilter;

const crackMaterial = new THREE.MeshBasicMaterial({
  map: crackTexture,
  transparent: true,
  opacity: 0.9,
  depthTest: true,
  depthWrite: false,
  polygonOffset: true,
  polygonOffsetFactor: -1,
  polygonOffsetUnits: -4.0,
});
const crackGeometry = new THREE.BoxGeometry(1.002, 1.002, 1.002);
const crackMesh = new THREE.Mesh(crackGeometry, crackMaterial);
crackMesh.visible = false;
renderer.scene.add(crackMesh);

// ひび割れテクスチャを更新する関数
function updateCrackTexture(progress: number) {
  crackCtx.clearRect(0, 0, 128, 128);
  if (progress <= 0) {
    crackTexture.needsUpdate = true;
    return;
  }
  
  crackCtx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
  crackCtx.lineWidth = 2;
  crackCtx.lineCap = 'round';
  crackCtx.lineJoin = 'round';

  // シード固定的な乱数を生成して進行度に応じて線を増やす
  const numLines = Math.floor(progress * 40);
  let seed = 12345;
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  crackCtx.beginPath();
  for (let i = 0; i < numLines; i++) {
    const x1 = random() * 128;
    const y1 = random() * 128;
    const x2 = x1 + (random() - 0.5) * 40;
    const y2 = y1 + (random() - 0.5) * 40;
    crackCtx.moveTo(x1, y1);
    crackCtx.lineTo(x2, y2);
    // 枝分かれ
    if (random() > 0.5) {
      crackCtx.lineTo(x2 + (random() - 0.5) * 20, y2 + (random() - 0.5) * 20);
    }
  }
  crackCtx.stroke();
  crackTexture.needsUpdate = true;
}


// 物理ワールドの初期化
const physics = new PhysicsWorld();

// 入力ハンドリングの初期化
const input = new InputHandler(document.body);

// プレイヤーの初期化
const player = new Player(renderer.camera, new THREE.Vector3(8, 5, 8), physics, renderer.scene);

// 昼夜サイクルマネージャーの初期化
const timeManager = new TimeManager(renderer.scene);

// ドロップアイテムの管理
const droppedItems: DroppedItem[] = [];

// 敵Mobの管理
const mobs: Mob[] = [];

// ナビゲーションの管理
const navigation = new NavigationManager();


// インベントリの管理（初期状態で各64個所持、剣は1個）
const inventory: Record<BlockType, number> = {
  [BlockType.AIR]: 0,
  [BlockType.GROUND]: 64,
  [BlockType.DIRT]: 64,
  [BlockType.STONE]: 64,
  [BlockType.WOOD]: 64,
  [BlockType.LEAVES]: 64,
  [BlockType.PLANK]: 64,
  [BlockType.BRICK]: 64,
  [BlockType.SAND]: 64,
  [BlockType.COAL_ORE]: 64,
  [BlockType.TORCH]: 64,
  [BlockType.GLASS]: 64,
  [BlockType.DOOR_CLOSED]: 64,
  [BlockType.DOOR_OPEN]: 0,
  [BlockType.SWORD]: 1,
  [BlockType.STAIRS]: 64,
  [BlockType.FENCE]: 64,   // 柵
  [BlockType.BED_HEAD]: 64, // ベッドアイテム
  [BlockType.BED_FOOT]: 0,  // 足元ブロックは設置時に自動配置
  [BlockType.FURNACE]: 64, // かまど
  [BlockType.CHEST]: 64,   // チェスト
  [BlockType.WATER]: 64,   // 水
  [BlockType.DIAMOND_SWORD]: 1, // ダイヤの剣
  [BlockType.HAMMER]: 1,        // ハンマー
  [BlockType.BEDROCK]: 0,       // 岩盤
  [BlockType.IRON_ORE]: 0,
  [BlockType.GOLD_ORE]: 0,
  [BlockType.DIAMOND_ORE]: 0,
  [BlockType.STICK]: 0,
  [BlockType.IRON_INGOT]: 0,
  [BlockType.GOLD_INGOT]: 0,
  [BlockType.DIAMOND]: 0,
  [BlockType.COBBLESTONE]: 0,
  [BlockType.COAL]: 0,
  [BlockType.APPLE]: 0,
  [BlockType.WOODEN_PICKAXE]: 0,
  [BlockType.STONE_PICKAXE]: 0,
  [BlockType.IRON_PICKAXE]: 0,
  [BlockType.DIAMOND_PICKAXE]: 0,
  [BlockType.WOODEN_AXE]: 0,
  [BlockType.STONE_AXE]: 0,
  [BlockType.IRON_AXE]: 0,
  [BlockType.DIAMOND_AXE]: 0,
  [BlockType.WOODEN_SHOVEL]: 0,
  [BlockType.STONE_SHOVEL]: 0,
  [BlockType.IRON_SHOVEL]: 0,
  [BlockType.DIAMOND_SHOVEL]: 0,
  [BlockType.LEATHER_ARMOR_SET]: 0,
  [BlockType.IRON_ARMOR_SET]: 0,
  [BlockType.DIAMOND_ARMOR_SET]: 0,
  [BlockType.BIRCH_WOOD]: 64,
  [BlockType.BIRCH_LEAVES]: 64,
  [BlockType.BIRCH_PLANK]: 64,
  [BlockType.FLOWER_DANDELION]: 64,
  [BlockType.FLOWER_ROSE]: 64,
  [BlockType.LAPIS_ORE]: 0,
  [BlockType.LAPIS_LAZULI]: 0,
  [BlockType.LAPIS_BLOCK]: 64,
  [BlockType.SEA_LANTERN]: 64,
  [BlockType.MAGMA_BLOCK]: 64,
  [BlockType.LADDER]: 64,
  [BlockType.CHAIN]: 64,
  [BlockType.BUCKET]: 64,
  [BlockType.WATER_BUCKET]: 0,
  [BlockType.MAGMA_BUCKET]: 0,
  [BlockType.SPONGE]: 64,
  [BlockType.WET_SPONGE]: 0,
  [BlockType.RAIL]: 64,
  [BlockType.MINECART]: 64,
  // --- 農業システム ---
  [BlockType.FARMLAND]: 0,
  [BlockType.FARMLAND_WET]: 0,
  [BlockType.WHEAT_0]: 0,
  [BlockType.WHEAT_1]: 0,
  [BlockType.WHEAT_2]: 0,
  [BlockType.WHEAT_3]: 0,
  [BlockType.WHEAT_4]: 0,
  [BlockType.WHEAT_5]: 0,
  [BlockType.WHEAT_6]: 0,
  [BlockType.WHEAT_7]: 0,
  [BlockType.WHEAT_ITEM]: 0,
  [BlockType.SEEDS]: 64,
  [BlockType.WOODEN_HOE]: 1,
  [BlockType.STONE_HOE]: 0,
  [BlockType.IRON_HOE]: 0,
  [BlockType.BONE_MEAL]: 64,
  [BlockType.BREAD]: 0,
};

// 設定UIの初期化
const configUI = new ConfigUIHandler();
configUI.updateInstructionsUI(); // 現在の設定をメイン画面に適用

// 設定画面などからのスタック救出リクエストを受信
window.addEventListener('request-rescue', () => {
  player.rescue();
  input.requestLock();
});

// リスポーンボタンの登録
const respawnBtn = document.getElementById('respawn-btn');
if (respawnBtn) {
  respawnBtn.addEventListener('click', () => {
    player.respawn();
    input.requestLock();
    SoundManager.init();
    if (!loopStarted) {
      loopStarted = true;
      requestAnimationFrame(animate);
    }
  });
}

// 選択されているブロックの管理
let activeBlockType = BlockType.GROUND;
let activeSlotIndex = 0;

// ホットバーのページ割り当て
const hotbarPages = [
  [
    BlockType.GROUND,  // 1: 草
    BlockType.DIRT,    // 2: 土
    BlockType.STONE,   // 3: 石
    BlockType.WOOD,    // 4: 木
    BlockType.LEAVES,  // 5: 葉
    BlockType.PLANK,   // 6: 木材
    BlockType.BRICK,   // 7: レンガ
    BlockType.SAND,    // 8: 砂
    BlockType.TORCH,   // 9: 松明
  ],
  [
    BlockType.GLASS,       // 1: ガラス
    BlockType.DOOR_CLOSED, // 2: ドア
    BlockType.COAL_ORE,    // 3: 石炭
    BlockType.DIAMOND_SWORD, // 4: ダイヤの剣
    BlockType.HAMMER,        // 5: ハンマー
    BlockType.STAIRS,      // 6: 階段
    BlockType.FENCE,       // 7: 柵
    BlockType.BED_HEAD,    // 8: ベッド
    BlockType.FURNACE,     // 9: かまど
  ],
  [
    BlockType.WOODEN_HOE,  // 1: 木のクワ
    BlockType.SEEDS,       // 2: 小麦のタネ
    BlockType.BONE_MEAL,   // 3: 骨粉
    BlockType.BREAD,       // 4: パン
    BlockType.WHEAT_ITEM,  // 5: 小麦（アイテム）
    BlockType.FARMLAND,    // 6: たがやした土
    BlockType.WATER_BUCKET, // 7: 水入りバケツ
    BlockType.APPLE,       // 8: リンゴ
    BlockType.COAL,        // 9: 石炭
  ]
];

// かまど（精錬）状態管理変数
let furnaceInputBlock: BlockType | null = null;
let furnaceInputCount = 0;
let furnaceFuelBlock: BlockType | null = null;
let furnaceFuelCount = 0;
let furnaceOutputBlock: BlockType | null = null;
let furnaceOutputCount = 0;
let isSmelting = false;
let smeltProgress = 0.0;
const smeltDuration = 3.0; // 精錬完了にかかる時間（秒）

const SMELT_RECIPES: Record<number, number> = {
  [BlockType.IRON_ORE]: BlockType.IRON_INGOT,
  [BlockType.GOLD_ORE]: BlockType.GOLD_INGOT,
  [BlockType.COBBLESTONE]: BlockType.STONE,
  [BlockType.SAND]: BlockType.GLASS,
  [BlockType.LAPIS_ORE]: BlockType.LAPIS_LAZULI,
  [BlockType.DIAMOND_ORE]: BlockType.DIAMOND,
  [BlockType.WET_SPONGE]: BlockType.SPONGE,
};

const FUEL_ITEMS = [
  BlockType.COAL,
  BlockType.WOOD,
  BlockType.PLANK,
  BlockType.BIRCH_WOOD,
  BlockType.BIRCH_PLANK,
];

let ridingCart: Mob | null = null;
let activePage = 0;
let slotBlocks = hotbarPages[activePage];

const hotbarSlots = document.querySelectorAll('.hotbar-slot');
const hotbarLabel = document.getElementById('hotbar-label');

function getSlotIconClass(type: BlockType): string {
  switch (type) {
    case BlockType.GROUND:      return 'slot-grass';
    case BlockType.DIRT:        return 'slot-dirt';
    case BlockType.STONE:       return 'slot-stone';
    case BlockType.WOOD:        return 'slot-wood';
    case BlockType.LEAVES:      return 'slot-leaves';
    case BlockType.PLANK:       return 'slot-plank';
    case BlockType.BRICK:       return 'slot-brick';
    case BlockType.SAND:        return 'slot-sand';
    case BlockType.TORCH:       return 'slot-torch';
    case BlockType.GLASS:       return 'slot-glass';
    case BlockType.DOOR_CLOSED: return 'slot-door';
    case BlockType.COAL_ORE:    return 'slot-coal';
    case BlockType.STAIRS:      return 'slot-stairs';
    case BlockType.FENCE:       return 'slot-fence';
    case BlockType.BED_HEAD:    return 'slot-bed';
    case BlockType.FURNACE:     return 'slot-furnace';
    case BlockType.CHEST:       return 'slot-chest';
    case BlockType.WATER:       return 'slot-water';
    case BlockType.SWORD:       return 'slot-sword';
    case BlockType.DIAMOND_SWORD: return 'slot-diamond-sword';
    case BlockType.HAMMER:      return 'slot-hammer';
    case BlockType.BIRCH_WOOD:  return 'slot-birch-wood';
    case BlockType.BIRCH_LEAVES: return 'slot-birch-leaves';
    case BlockType.BIRCH_PLANK: return 'slot-birch-plank';
    case BlockType.FLOWER_DANDELION: return 'slot-dandelion';
    case BlockType.FLOWER_ROSE: return 'slot-rose';
    case BlockType.LAPIS_ORE:   return 'slot-lapis-ore';
    case BlockType.LAPIS_LAZULI: return 'slot-lapis-lazuli';
    case BlockType.LAPIS_BLOCK:  return 'slot-lapis-block';
    case BlockType.SEA_LANTERN:  return 'slot-sea-lantern';
    case BlockType.MAGMA_BLOCK:  return 'slot-magma';
    case BlockType.LADDER:       return 'slot-ladder';
    case BlockType.CHAIN:        return 'slot-chain';
    case BlockType.BUCKET:       return 'slot-bucket';
    case BlockType.WATER_BUCKET: return 'slot-water-bucket';
    case BlockType.MAGMA_BUCKET: return 'slot-magma-bucket';
    case BlockType.SPONGE:       return 'slot-sponge';
    case BlockType.WET_SPONGE:   return 'slot-wet-sponge';
    case BlockType.RAIL:         return 'slot-rail';
    case BlockType.MINECART:     return 'slot-minecart';
    default: return '';
  }
}

function syncHotbarUI() {
  hotbarSlots.forEach((slot, index) => {
    const type = slotBlocks[index];
    slot.setAttribute('data-block', type.toString());

    const iconEl = slot.querySelector('.slot-icon');
    if (iconEl) {
      iconEl.className = 'slot-icon';
      const iconClass = getSlotIconClass(type);
      if (iconClass) {
        iconEl.classList.add(iconClass);
      }
    }

    const countEl = document.getElementById(`count-${index}`);
    if (countEl) {
      countEl.textContent = (inventory[type] || 0).toString();
    }
  });

  const pageIndicator = document.getElementById('hotbar-page-indicator');
  if (pageIndicator) {
    pageIndicator.textContent = (activePage + 1).toString();
  }

  selectSlot(activeSlotIndex);
}

// 初期インベントリ数の同期
syncHotbarUI();

function selectSlot(index: number) {
  if (index < 0 || index >= slotBlocks.length) return;
  activeSlotIndex = index;
  activeBlockType = slotBlocks[index];

  // UIのアクティブクラス切り替え
  hotbarSlots.forEach((slot, i) => {
    if (i === index) {
      slot.classList.add('active');
    } else {
      slot.classList.remove('active');
    }
  });

  if (hotbarLabel) {
    hotbarLabel.textContent = BLOCKS[activeBlockType].name;
  }
}

// ワールドの初期化
const world = new World(renderer.scene);

// カメラの壁抜け防止のため、プレイヤーにワールド参照を設定
player.setWorld(world);

// クラウドセーブマネージャーの初期化
const saveManager = new SaveManager(player, world);
// NPCマネージャーの初期化
const npcManager = new NPCManager(renderer.scene, world);

saveManager.onSaveCustomData = () => {
  const homePos = navigation.getHome();
  return {
    inventory: {
      blocks: inventory,
      hotbarPages: hotbarPages,
      activePage: activePage,
      activeSlotIndex: activeSlotIndex
    },
    homePosition: homePos ? { x: homePos.x, y: homePos.y, z: homePos.z } : null
  };
};
saveManager.onLoadCustomData = (data: any) => {
  if (data) {
    if (data.inventory) {
      const inv = data.inventory;
      if (inv.blocks) {
        Object.assign(inventory, inv.blocks);
      }
      if (inv.hotbarPages && Array.isArray(inv.hotbarPages)) {
        for (let i = 0; i < Math.min(hotbarPages.length, inv.hotbarPages.length); i++) {
          hotbarPages[i] = [...inv.hotbarPages[i]];
        }
      }
      if (typeof inv.activePage === 'number') {
        activePage = inv.activePage;
        slotBlocks = hotbarPages[activePage];
      }
      if (typeof inv.activeSlotIndex === 'number') {
        activeSlotIndex = inv.activeSlotIndex;
      }
      syncHotbarUI();
    }
    if (data.homePosition) {
      navigation.setHome(new THREE.Vector3(data.homePosition.x, data.homePosition.y, data.homePosition.z));
    }
  }
};

saveManager.onConflictDetected = (localTime: number, cloudTime: number): Promise<'local' | 'cloud' | 'cancel'> => {
  return new Promise((resolve) => {
    const modal = document.getElementById('conflict-modal');
    const localTimeEl = document.getElementById('conflict-local-time');
    const cloudTimeEl = document.getElementById('conflict-cloud-time');
    const useLocalBtn = document.getElementById('conflict-use-local-btn');
    const useCloudBtn = document.getElementById('conflict-use-cloud-btn');
    const cancelBtn = document.getElementById('conflict-cancel-btn');

    if (!modal || !localTimeEl || !cloudTimeEl || !useLocalBtn || !useCloudBtn || !cancelBtn) {
      resolve('cloud');
      return;
    }

    const formatDate = (ms: number) => {
      if (!ms) return 'データなし';
      const d = new Date(ms);
      return `${d.getFullYear()}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getDate().toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
    };

    localTimeEl.textContent = formatDate(localTime);
    cloudTimeEl.textContent = formatDate(cloudTime);

    document.exitPointerLock();
    modal.style.display = 'flex';

    const cleanup = (choice: 'local' | 'cloud' | 'cancel') => {
      modal.style.display = 'none';
      useLocalBtn.removeEventListener('click', onLocal);
      useCloudBtn.removeEventListener('click', onCloud);
      cancelBtn.removeEventListener('click', onCancel);
      resolve(choice);
    };

    const onLocal = () => cleanup('local');
    const onCloud = () => cleanup('cloud');
    const onCancel = () => cleanup('cancel');

    useLocalBtn.addEventListener('click', onLocal);
    useCloudBtn.addEventListener('click', onCloud);
    cancelBtn.addEventListener('click', onCancel);
  });
};

// オートセーブデータがあれば自動ロード
const hasAutosave = loadAutoSave();
if (hasAutosave) {
  // 自動ロードした座標を中心に世界を初期構築
  world.clearAndRebuild(player.position.x, player.position.z);
} else {
  // 初回起動時はデフォルト位置で世界を初期構築
  world.generateWorldAround(player.position.x, player.position.z);
}

// アカウントID入力の管理
const accountIdInput = document.getElementById('account-id-input') as HTMLInputElement;
const worldIdInput = document.getElementById('world-id-input') as HTMLInputElement;

// アカウントID履歴の管理
function updateAccountIdList(newId?: string) {
  const listEl = document.getElementById('account-id-list');
  if (!listEl) return;
  
  let savedIds: string[] = [];
  try {
    const raw = localStorage.getItem('maikurafu_account_ids');
    if (raw) savedIds = JSON.parse(raw);
  } catch(e) {}
  
  if (newId && !savedIds.includes(newId)) {
    savedIds.push(newId);
    localStorage.setItem('maikurafu_account_ids', JSON.stringify(savedIds));
  }
  
  const renderList = (ids: string[]) => {
    listEl.innerHTML = '';
    ids.forEach(id => {
      const option = document.createElement('option');
      option.value = id;
      listEl.appendChild(option);
    });
  };
  
  renderList(savedIds);

  // サーバーからもアカウント一覧を取得してマージする（非同期）
  if (CONFIG.GAS_WEB_APP_URL) {
    const worldId = worldIdInput ? worldIdInput.value.trim() || 'shared_world_1' : 'shared_world_1';
    fetch(`${CONFIG.GAS_WEB_APP_URL}?action=listAccounts&worldId=${encodeURIComponent(worldId)}`)
      .then(res => res.json())
      .then(data => {
        if (data.accounts && Array.isArray(data.accounts)) {
          let updated = false;
          data.accounts.forEach((acc: string) => {
            if (!savedIds.includes(acc)) {
              savedIds.push(acc);
              updated = true;
            }
          });
          if (updated) {
            localStorage.setItem('maikurafu_account_ids', JSON.stringify(savedIds));
            renderList(savedIds);
          }
        }
      })
      .catch(err => console.warn('Failed to fetch accounts from server:', err));
  }
}
// 初期化時にリストを構築
updateAccountIdList();

// 最後に使用したアカウントIDがあれば入力欄の初期値にする
if (accountIdInput) {
  const lastAccountId = localStorage.getItem('maikurafu_last_account_id');
  if (lastAccountId) {
    accountIdInput.value = lastAccountId;
  }
}

// レイキャスターの設定（ブロックの設置・破壊用）
const raycaster = new THREE.Raycaster();
const maxInteractDistance = 6; // 操作可能距離 (m)

// HP表示の更新
function updateHPUI() {
  const hpContainer = document.getElementById('hp-container');
  if (hpContainer) {
    const maxHp = CONFIG.PLAYER_MAX_HP;
    const currentHp = player.hp;
    let heartsText = '';
    for (let i = 1; i <= maxHp; i++) {
      heartsText += i <= currentHp ? '❤' : '🖤';
    }
    hpContainer.textContent = heartsText;
  }
}

// むらびと（Mob）の頭上に吹き出しを表示する
function showMobSpeechBubble(mob: Mob, text: string): void {
  // 既存の吹き出しを削除（userData に保存して管理）
  if (mob.mesh.userData.speechSprite) {
    mob.mesh.remove(mob.mesh.userData.speechSprite);
    mob.mesh.userData.speechSprite = null;
  }

  // Canvas に吹き出しを描画
  const canvas = document.createElement('canvas');
  canvas.width = 320;
  canvas.height = 80;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    // 吹き出し背景（白い丸角矩形）
    ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(8, 4, 296, 60, 12);
    } else {
      ctx.rect(8, 4, 296, 60);
    }
    ctx.fill();
    // 三角形（しっぽ）
    ctx.beginPath();
    ctx.moveTo(60, 64);
    ctx.lineTo(80, 64);
    ctx.lineTo(70, 76);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
    ctx.fill();
    // テキスト
    ctx.font = 'bold 24px Outfit, sans-serif';
    ctx.fillStyle = '#1a1a2e';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 160, 34);
  }
  const texture = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(mat);
  sprite.scale.set(2.0, 0.5, 1.0);
  sprite.position.set(0, 1.6, 0); // 頭上

  mob.mesh.add(sprite);
  mob.mesh.userData.speechSprite = sprite;

  // 音を鳴らす（グラス音を流用）
  SoundManager.playPlace(BlockType.GLASS);

  // 3.5秒後にフェードアウトして削除
  const startTime = performance.now();
  const duration = 3500;
  const fade = () => {
    const elapsed = performance.now() - startTime;
    const progress = elapsed / duration;
    if (progress >= 1.0) {
      if (mob.mesh.userData.speechSprite === sprite) {
        mob.mesh.remove(sprite);
        mob.mesh.userData.speechSprite = null;
      }
      return;
    }
    // 最後の1秒でフェードアウト
    mat.opacity = Math.min(1.0, (1.0 - progress) * 3.0);
    requestAnimationFrame(fade);
  };
  requestAnimationFrame(fade);
}

// ドロップアイテムの生成処理
function spawnDroppedItem(type: BlockType, pos: THREE.Vector3, targetPos?: THREE.Vector3) {
  if (droppedItems.length >= CONFIG.MAX_DROPPED_ITEMS) {
    const oldest = droppedItems.shift();
    if (oldest) oldest.destroy();
  }
  const item = new DroppedItem(type, pos, renderer.scene, physics.world, targetPos);
  droppedItems.push(item);
}

// 投げるときの一時用ベクトル（GC回避）
const tempThrowDir = new THREE.Vector3();
const tempThrowPos = new THREE.Vector3();
let mobSpawnTimer = 0;
let autoSaveTimer = 0; // 自動セーブ用タイマー

// アニメーションループ
let lastTime = 0;
function animate(time: number) {
  requestAnimationFrame(animate);

  const deltaTime = Math.min((time - lastTime) / 1000, 0.1);
  lastTime = time;

  if (easyModeBreakTimer > 0) {
    easyModeBreakTimer -= deltaTime;
  }

  // プレイヤーおよびMobの周辺ブロックの物理ボディを同期
  const physicsUpdatePositions = [player.position];
  for (const mob of mobs) {
    physicsUpdatePositions.push(mob.mesh.position);
  }
  physics.updateBlockBodies(physicsUpdatePositions, world);

  // 物理世界のステップ実行
  physics.step(deltaTime);

  // トロッコ搭乗中の操縦・位置同期処理
  if (ridingCart) {
    if (input.consumeJustPressed('Space') || input.consumeJustPressed('Escape')) {
      ridingCart = null;
      player.body.position.y += 1.0;
    } else {
      player.body.position.x = ridingCart.body.position.x;
      player.body.position.y = ridingCart.body.position.y + 0.35;
      player.body.position.z = ridingCart.body.position.z;
      player.body.velocity.set(0, 0, 0);

      const moveVector = new THREE.Vector3();
      if (input.isActionActive('forward')) moveVector.z -= 1;
      if (input.isActionActive('backward')) moveVector.z += 1;
      if (input.isActionActive('left')) moveVector.x -= 1;
      if (input.isActionActive('right')) moveVector.x += 1;
      moveVector.normalize();

      const yaw = player.getYaw();
      moveVector.applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);

      const tx = Math.floor(ridingCart.body.position.x);
      const ty = Math.floor(ridingCart.body.position.y - 0.2);
      const tz = Math.floor(ridingCart.body.position.z);
      const currentBlock = world.getBlock(tx, ty, tz);
      const isOnRail = currentBlock === BlockType.RAIL;

      const speed = isOnRail ? 10.0 : 1.5;

      if (moveVector.lengthSq() > 0) {
        ridingCart.body.velocity.x = moveVector.x * speed;
        ridingCart.body.velocity.z = moveVector.z * speed;
        const targetAngle = Math.atan2(moveVector.x, moveVector.z);
        ridingCart.mesh.rotation.y = targetAngle;
      } else {
        const damping = isOnRail ? 0.98 : 0.8;
        ridingCart.body.velocity.x *= damping;
        ridingCart.body.velocity.z *= damping;
      }
    }
  }

  // プレイヤーと入力の更新
  player.update(input, deltaTime, world, activeBlockType);

  // NPCの更新
  npcManager.update(deltaTime, player);
  
  // コンパスの更新
  navigation.updateCompass({ position: player.position, camera: renderer.camera });

  // 昼夜サイクルの更新
  timeManager.update(deltaTime, player.position);

  // かまど精錬プロセスの更新
  updateFurnace(deltaTime);

  // 農業アップデートの実行
  updateFarming(deltaTime, world, player.position);

  // Tabキー押下時のホットバーページ切り替え
  if (input.consumeJustPressed('Tab')) {
    activePage = (activePage + 1) % hotbarPages.length;
    slotBlocks = hotbarPages[activePage];
    syncHotbarUI();
  }


  // 設定キー等押下時の拠点登録アクション
  if (input.consumeJustPressed(configStore.getConfig().keyRegisterHome)) {
    if (input.isLocked) {
      navigation.setHome(player.position);
      // 画面にメッセージを出す
      const message = document.createElement('div');
      message.style.position = 'absolute';
      message.style.top = '100px';
      message.style.left = '50%';
      message.style.transform = 'translateX(-50%)';
      message.style.color = '#32cd32';
      message.style.fontSize = '1.5rem';
      message.style.fontWeight = 'bold';
      message.style.textShadow = '0 2px 4px rgba(0,0,0,0.8)';
      message.style.zIndex = '50';
      message.textContent = '🏠 ここを拠点に設定しました';
      document.body.appendChild(message);
      setTimeout(() => message.remove(), 3000);
    }
  }


  // Qキー押下時のアイテム投棄アクション
  if (input.consumeJustPressed('KeyQ')) {
    if (inventory[activeBlockType] > 0) {
      inventory[activeBlockType]--;
      syncHotbarUI();

      // プレイヤーの視線方向にドロップアイテムを放出
      const eyeHeight = CONFIG.PLAYER_HEIGHT / 2 - 0.2;
      tempThrowPos.copy(player.position);
      tempThrowPos.y += eyeHeight;

      tempThrowDir.set(0, 0, -1).applyQuaternion(renderer.camera.quaternion);
      tempThrowPos.addScaledVector(tempThrowDir, 0.8);

      spawnDroppedItem(activeBlockType, tempThrowPos);

      // 放出したアイテムに初速度を与える
      const item = droppedItems[droppedItems.length - 1];
      if (item) {
        item.body.velocity.set(
          tempThrowDir.x * 6.0 + (Math.random() - 0.5) * 0.5,
          tempThrowDir.y * 6.0 + 2.0,
          tempThrowDir.z * 6.0 + (Math.random() - 0.5) * 0.5
        );
      }
    }
  }

  // ドロップアイテムの更新・回収
  for (let i = droppedItems.length - 1; i >= 0; i--) {
    const item = droppedItems[i];
    const isDespawned = item.update(deltaTime, player.position);
    
    // アイテムメッシュとプレイヤーの位置の距離を算出
    const dist = item.mesh.position.distanceTo(player.position);
    if (dist < 1.2) {
      // 1.2m以内に近づいたら即座に獲得
      inventory[item.blockType] = (inventory[item.blockType] || 0) + 1;
      syncHotbarUI();
      // アイテム獲得音の再生
      SoundManager.playPickup();
      item.destroy();
      droppedItems.splice(i, 1);
    } else if (isDespawned) {
      // 1.2m以内に入らずに時間切れで消去された場合
      droppedItems.splice(i, 1);
    }
  }

  // Mobの自動スポーン
  mobSpawnTimer += deltaTime;
  if (mobSpawnTimer > 2.0) {
    mobSpawnTimer = 0;
    if (mobs.length < CONFIG.MAX_MOBS) {
      const radius = CONFIG.MOB_SPAWN_RADIUS;
      const angle = Math.random() * Math.PI * 2;
      const spawnDist = 12.0 + Math.random() * (radius - 12.0);
      const sx = Math.floor(player.position.x + Math.cos(angle) * spawnDist);
      const sz = Math.floor(player.position.z + Math.sin(angle) * spawnDist);

      // スポーン地表Y座標の探索
      let sy = 0;
      let foundGround = false;
      for (let y = 15; y >= -10; y--) {
        if (world.getBlock(sx, y, sz) !== BlockType.AIR) {
          sy = y + 1;
          foundGround = true;
          break;
        }
      }

      if (foundGround) {
        let type: MobType = MobType.ZOMBIE;
        if (timeManager.isNight()) {
          // 夜間は敵対70%、友好30%
          const rand = Math.random();
          if (rand < 0.7) {
            const enemyRand = Math.random();
            if (enemyRand < 0.4) type = MobType.ZOMBIE;
            else if (enemyRand < 0.7) type = MobType.CREEPER;
            else if (enemyRand < 0.9) type = MobType.SLIME;
            else type = MobType.ZOMBIE_VILLAGER;
          } else {
            const friendlyTypes = [MobType.CHICKEN, MobType.PIG, MobType.SHEEP, MobType.COW, MobType.VILLAGER];
            type = friendlyTypes[Math.floor(Math.random() * friendlyTypes.length)];
          }
        } else {
          // 昼間は友好モブのみ
          const friendlyTypes = [MobType.CHICKEN, MobType.PIG, MobType.SHEEP, MobType.COW, MobType.VILLAGER];
          type = friendlyTypes[Math.floor(Math.random() * friendlyTypes.length)];
        }

        const mob = new Mob(new THREE.Vector3(sx, sy, sz), renderer.scene, physics.world, type);
        mobs.push(mob);
      }
    }
  }

  // 昼間は敵対モブを自動消滅（日光で消滅）
  if (!timeManager.isNight()) {
    for (let i = mobs.length - 1; i >= 0; i--) {
      if (!mobs[i].isFriendly()) {
        mobs[i].destroy();
        mobs.splice(i, 1);
      }
    }
  }

  // Mobの更新（フラストラムを使ったデスポーン制御）
  // 視錐台（カメラに映っている範囲）の計算
  const frustum = new THREE.Frustum();
  const projScreenMatrix = new THREE.Matrix4();
  projScreenMatrix.multiplyMatrices(renderer.camera.projectionMatrix, renderer.camera.matrixWorldInverse);
  frustum.setFromProjectionMatrix(projScreenMatrix);

  for (let i = mobs.length - 1; i >= 0; i--) {
    const isDespawned = mobs[i].update(deltaTime, player, world, frustum);
    if (isDespawned) {
      mobs.splice(i, 1);
    }
  }

  // HUDの更新
  updateHPUI();

  // 必要に応じて周辺ワールド生成
  if (input.isLocked) {
    world.generateWorldAround(player.position.x, player.position.z);
  }

  // 5秒に1回自動セーブを実行（GC負荷を抑えるため時間経過で行う）
  autoSaveTimer += deltaTime;
  if (autoSaveTimer > 5.0) {
    autoSaveTimer = 0;
    autoSaveGame();
  }

  // キーバインドによる設置・破壊の検知
  const config = configStore.getConfig();
  if (input.consumeJustPressed(config.keyPlaceBlock)) {
    performBlockAction(false, true);
  }
  // キーバインドによる破壊の単発トリガーは廃止（長押しに移行）
  // if (input.consumeJustPressed(config.keyBreakBlock)) { ... }

  // --- 連続破壊（長押し）ロジック ---
  const currentShouldBreak = config.invertClicks ? input.isRightClickDown : input.isLeftClickDown;
  let shouldBreak = currentShouldBreak;
  
  if (config.easyMode) {
    // イージーモードの時は、今回新しく押された瞬間にのみ破壊判定を行い、かつクールダウン中（連打防止）でないことを確認する
    shouldBreak = currentShouldBreak && !prevShouldBreak && (easyModeBreakTimer <= 0);
  }
  prevShouldBreak = currentShouldBreak;
  
  let hitValidBlock = false;

  if (input.isLocked) {
    raycaster.setFromCamera(new THREE.Vector2(0, 0), player.camera);
    const chunkMeshes = world.getChunkMeshes();
    const intersects = raycaster.intersectObjects(chunkMeshes);

    if (intersects.length > 0 && intersects[0].distance <= maxInteractDistance) {
      const intersect = intersects[0];
      const point = intersect.point;
      const normal = intersect.face?.normal;
      
      if (normal) {
        const target = point.clone().sub(normal.clone().multiplyScalar(0.1));
        const bx = Math.floor(target.x);
        const by = Math.floor(target.y);
        const bz = Math.floor(target.z);
        const targetBlockType = world.getBlock(bx, by, bz);

        if (targetBlockType !== BlockType.AIR && targetBlockType !== BlockType.BEDROCK) {
          hitValidBlock = true;
          const currentTargetPos = new THREE.Vector3(bx, by, bz);

          if (isBreakingBlock && !breakingTargetPos.equals(currentTargetPos)) {
            // 別のブロックを見たらリセット
            isBreakingBlock = false;
            crackMesh.visible = false;
            breakingProgress = 0.0;
          }

          if (shouldBreak) {
            player.swing(); // 破壊アクション
            
            if (!isBreakingBlock) {
              // 新しいブロックを破壊開始
              isBreakingBlock = true;
              breakingTargetPos.copy(currentTargetPos);
              breakingProgress = 0.0;
              crackMesh.position.set(bx + 0.5, by + 0.5, bz + 0.5);
              crackMesh.visible = true;
              updateCrackTexture(0);
            }

            if (config.easyMode) {
              // イージーモード：クリックごとに進行度を進める (約3回で破壊)
              breakingProgress += 0.34;
              if (breakingProgress >= 1.0) {
                executeBlockDestroy(targetBlockType, bx, by, bz);
                isBreakingBlock = false;
                crackMesh.visible = false;
                breakingProgress = 0.0;
              } else {
                updateCrackTexture(breakingProgress);
              }
              easyModeBreakTimer = 0.25; // 連打防止クールダウン
            } else {
              // ノーマルモード：長押しで破壊進行
              const blockProps = BLOCKS[targetBlockType];
              const toolProps = BLOCKS[activeBlockType] || {};
              
              let hardness = blockProps.hardness || 1.0;
              let speed = 1.0; // 基準速度
              
              // 手持ちのツール適性チェック
              const isAppropriateTool = !blockProps.requiredToolCategory || blockProps.requiredToolCategory === 'none' || toolProps.toolCategory === blockProps.requiredToolCategory;
              
              if (isAppropriateTool && toolProps.isTool) {
                speed *= (toolProps.speedMultiplier || 1.0);
              } else if (!isAppropriateTool && blockProps.requiredToolCategory && blockProps.requiredToolCategory !== 'none') {
                // 適性ツールでない場合は極端に遅くなる（10分の1）
                speed *= 0.1;
              }
              
              // 破壊にかかる時間 = hardness * 1.5 (基準係数) / speed
              const requiredTime = (hardness * 1.5) / speed;
              breakingProgress += deltaTime / requiredTime;
              
              updateCrackTexture(breakingProgress);

              if (breakingProgress >= 1.0) {
                // 破壊完了
                executeBlockDestroy(targetBlockType, bx, by, bz);
                isBreakingBlock = false;
                crackMesh.visible = false;
                breakingProgress = 0.0;
              }
            }
          }
        }
      }
    }
  }

  // ブロックに当たっていない、またはノーマルモードでボタンを離した場合はリセット
  if (!hitValidBlock || (!shouldBreak && !config.easyMode)) {
    isBreakingBlock = false;
    crackMesh.visible = false;
    breakingProgress = 0.0;
  }

  // レンダリング実行
  renderer.render();
}

// 農業用ユーティリティ：周囲4マス以内に水があるかチェック
function isWaterNearby(world: World, startX: number, startY: number, startZ: number): boolean {
  for (let dx = -4; dx <= 4; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      for (let dz = -4; dz <= 4; dz++) {
        if (world.getBlock(startX + dx, startY + dy, startZ + dz) === BlockType.WATER) {
          return true;
        }
      }
    }
  }
  return false;
}

// 農業アップデートタイマーとロジック
let farmingTimer = 0;
function updateFarming(deltaTime: number, world: World, playerPos: THREE.Vector3) {
  farmingTimer += deltaTime;
  if (farmingTimer < 1.0) return; // 1秒ごとに実行
  farmingTimer = 0;

  const px = Math.floor(playerPos.x);
  const py = Math.floor(playerPos.y);
  const pz = Math.floor(playerPos.z);

  // 1秒ごとにプレイヤー周囲のランダムな位置をチェック
  const numTicks = 30;
  for (let i = 0; i < numTicks; i++) {
    const rx = px + Math.floor((Math.random() - 0.5) * 48);
    const ry = py + Math.floor((Math.random() - 0.5) * 16);
    const rz = pz + Math.floor((Math.random() - 0.5) * 48);

    const blockType = world.getBlock(rx, ry, rz);
    const blockProp = BLOCKS[blockType];

    // 1. 農地の水分と状態の更新
    if (blockProp && blockProp.isFarmland) {
      const hasWater = isWaterNearby(world, rx, ry, rz);
      if (hasWater && blockType === BlockType.FARMLAND) {
        world.setBlock(rx, ry, rz, BlockType.FARMLAND_WET);
      } else if (!hasWater && blockType === BlockType.FARMLAND_WET) {
        if (Math.random() < 0.15) {
          world.setBlock(rx, ry, rz, BlockType.FARMLAND);
        }
      }

      // 上が空気の乾燥農地は低確率で土に戻る
      if (blockType === BlockType.FARMLAND) {
        const aboveType = world.getBlock(rx, ry + 1, rz);
        if (aboveType === BlockType.AIR && Math.random() < 0.05) {
          world.setBlock(rx, ry, rz, BlockType.DIRT);
        }
      }
    }

    // 2. 小麦の成長
    if (blockProp && blockProp.isCrop) {
      const currentStage = blockProp.growthStage ?? 0;
      if (currentStage < 7) {
        const belowType = world.getBlock(rx, ry - 1, rz);
        if (belowType === BlockType.FARMLAND_WET) {
          if (Math.random() < 0.20) {
            const nextBlock = (BlockType.WHEAT_0 + currentStage + 1) as BlockType;
            world.setBlock(rx, ry, rz, nextBlock);
          }
        } else if (belowType === BlockType.FARMLAND) {
          if (Math.random() < 0.03) {
            const nextBlock = (BlockType.WHEAT_0 + currentStage + 1) as BlockType;
            world.setBlock(rx, ry, rz, nextBlock);
          }
        } else {
          // 土台が農地でなければアイテム化
          world.setBlock(rx, ry, rz, BlockType.AIR);
          spawnDroppedItem(BlockType.SEEDS, new THREE.Vector3(rx + 0.5, ry + 0.5, rz + 0.5), playerPos);
        }
      }
    }
  }
}

// ブロック破壊処理を実行する関数
function executeBlockDestroy(targetBlockType: BlockType, bx: number, by: number, bz: number) {
  // 岩盤は壊せない
  if (targetBlockType === BlockType.BEDROCK) return;
  
  world.setBlock(bx, by, bz, BlockType.AIR);
  // ブロック破壊音の再生
  SoundManager.playBreak(targetBlockType);

  // 扉ブロックの場合、上マスも同時に削除する（2マス扉対応）
  if (targetBlockType === BlockType.DOOR_CLOSED || targetBlockType === BlockType.DOOR_OPEN) {
    const aboveType = world.getBlock(bx, by + 1, bz);
    if (aboveType === BlockType.DOOR_CLOSED || aboveType === BlockType.DOOR_OPEN) {
      world.setBlock(bx, by + 1, bz, BlockType.AIR);
    }
    const belowType = world.getBlock(bx, by - 1, bz);
    if (belowType === BlockType.DOOR_CLOSED || belowType === BlockType.DOOR_OPEN) {
      world.setBlock(bx, by - 1, bz, BlockType.AIR);
      world.removeDoorOrientation(bx, by - 1, bz);
    }
    world.removeDoorOrientation(bx, by, bz);
  }

  // ベッドブロックの場合、隐接に配置されたペアブロックも同時に削除（1BEDアイテムのみドロップ）
  if (targetBlockType === BlockType.BED_HEAD || targetBlockType === BlockType.BED_FOOT) {
    const pairType = targetBlockType === BlockType.BED_HEAD ? BlockType.BED_FOOT : BlockType.BED_HEAD;
    const neighbors: [number, number][] = [[bx+1, bz], [bx-1, bz], [bx, bz+1], [bx, bz-1]];
    for (const [nx, nz] of neighbors) {
      if (world.getBlock(nx, by, nz) === pairType) {
        world.setBlock(nx, by, nz, BlockType.AIR);
        break;
      }
    }
    // ベッドアイテムを必ず1個ドロップ
    spawnDroppedItem(BlockType.BED_HEAD, new THREE.Vector3(bx + 0.5, by + 0.5, bz + 0.5), player.position);
  } else {
    const blockProps = BLOCKS[targetBlockType];

    // 作物（小麦）の特別なドロップロジック
    if (blockProps && blockProps.isCrop) {
      const dropPos = new THREE.Vector3(bx + 0.5, by + 0.5, bz + 0.5);
      if (targetBlockType === BlockType.WHEAT_7) {
        // 完熟：小麦1個＋タネ1〜3個
        spawnDroppedItem(BlockType.WHEAT_ITEM, dropPos, player.position);
        const seedsCount = Math.floor(Math.random() * 3) + 1; // 1〜3個
        for (let i = 0; i < seedsCount; i++) {
          spawnDroppedItem(BlockType.SEEDS, dropPos, player.position);
        }
      } else {
        // 未熟：タネ1個
        spawnDroppedItem(BlockType.SEEDS, dropPos, player.position);
      }
    } else {
      // 適性ツールによるドロップ判定
      const toolProps = BLOCKS[activeBlockType];
      const minTier = blockProps.minToolTier || 0;
      const toolTier = toolProps.isTool ? (toolProps.toolTier || 0) : 0;
      
      // ツールのティアが足りている場合のみドロップ
      if (toolTier >= minTier) {
        // 通常ブロックのドロップ（扉は上下2マス分でドロップは1個のみ）
        if (targetBlockType !== BlockType.DOOR_OPEN) {
          let dropType = blockProps.drops ?? targetBlockType;

          // 葉っぱ特有のドロップロジック（低確率でリンゴ）
          if (targetBlockType === BlockType.LEAVES) {
            const r = Math.random();
            if (r < 0.05) dropType = BlockType.APPLE;
            else dropType = BlockType.AIR; // 基本は何も落ちない
          }

          if (dropType !== BlockType.AIR) {
            spawnDroppedItem(dropType, new THREE.Vector3(bx + 0.5, by + 0.5, bz + 0.5), player.position);
          }
        }
      }
    }
  }
}

function performBlockAction(shouldDestroy: boolean, shouldPlace: boolean) {
  if (!shouldDestroy && !shouldPlace) return;

  // 画面中央からレイを飛ばす
  raycaster.setFromCamera(new THREE.Vector2(0, 0), player.camera);
  
  const chunkMeshes = world.getChunkMeshes();
  const intersects = raycaster.intersectObjects(chunkMeshes);

  if (intersects.length > 0) {
    const intersect = intersects[0];

    // 操作距離の制限チェック
    if (intersect.distance > maxInteractDistance) return;

    const point = intersect.point;
    const normal = intersect.face?.normal;
    if (!normal) return;

    if (shouldDestroy) {
      // 破壊/攻撃時は常に武器を振る
      player.swing();

      // まず敵Mobへの攻撃当たり判定を行う
      const mobMeshes: THREE.Object3D[] = [];
      mobs.forEach(m => {
        m.mesh.traverse(child => {
          if (child instanceof THREE.Mesh) mobMeshes.push(child);
        });
      });

      const mobIntersects = raycaster.intersectObjects(mobMeshes);
      if (mobIntersects.length > 0 && mobIntersects[0].distance < maxInteractDistance) {
        const hitMesh = mobIntersects[0].object;
        let hitMob: Mob | null = null;
        for (const mob of mobs) {
          let found = false;
          mob.mesh.traverse(child => {
            if (child === hitMesh) found = true;
          });
          if (found) {
            hitMob = mob;
            break;
          }
        }

        if (hitMob) {
          // プレイヤー視線の正面をノックバック方向とする
          const kbDir = new THREE.Vector3(0, 0, -1).applyQuaternion(renderer.camera.quaternion);
          kbDir.y = 0.2; // 上方向へ弾む
          kbDir.normalize();

          // ダイヤの剣なら6ダメージ、ハンマーなら5ダメージ、石の剣なら4ダメージ（ゾンビを一撃）、素手等なら2ダメージ
          const damage = (activeBlockType === BlockType.DIAMOND_SWORD) ? 6 :
                         (activeBlockType === BlockType.HAMMER) ? 5 :
                         (activeBlockType === BlockType.SWORD) ? 4 : 2;
          const isDead = hitMob.takeDamage(damage, kbDir);
          if (isDead) {
            let dropType = BlockType.STONE;
            if (hitMob.type === MobType.ZOMBIE) {
              dropType = Math.random() < 0.4 ? BlockType.COAL_ORE : BlockType.STONE;
            } else if (hitMob.type === MobType.CHICKEN) {
              dropType = BlockType.APPLE;
            } else if (hitMob.type === MobType.PIG) {
              dropType = BlockType.APPLE;
            } else if (hitMob.type === MobType.SHEEP) {
              dropType = BlockType.BIRCH_LEAVES;
            } else if (hitMob.type === MobType.COW) {
              dropType = BlockType.LEATHER_ARMOR_SET;
            } else if (hitMob.type === MobType.SLIME) {
              dropType = BlockType.GROUND;
            } else if (hitMob.type === MobType.CREEPER) {
              dropType = BlockType.COAL_ORE;
            } else if (hitMob.type === MobType.VILLAGER || hitMob.type === MobType.ZOMBIE_VILLAGER) {
              dropType = BlockType.APPLE;
            }
            spawnDroppedItem(dropType, new THREE.Vector3(hitMob.body.position.x, hitMob.body.position.y, hitMob.body.position.z), player.position);
            const idx = mobs.indexOf(hitMob);
            if (idx > -1) mobs.splice(idx, 1);
          }
          return; // 攻撃ヒット時はスキップ
        }
      }
      
    } else if (shouldPlace) {
      // 設置前に、近接するMobへの右クリックインタラクションをチェック
      const mobMeshes: THREE.Object3D[] = [];
      mobs.forEach(m => {
        m.mesh.traverse(child => {
          if (child instanceof THREE.Mesh) mobMeshes.push(child);
        });
      });

      const mobIntersects = raycaster.intersectObjects(mobMeshes);
      if (mobIntersects.length > 0 && mobIntersects[0].distance < maxInteractDistance) {
        const hitMesh = mobIntersects[0].object;
        let hitMob: Mob | null = null;
        for (const mob of mobs) {
          let found = false;
          mob.mesh.traverse(child => {
            if (child === hitMesh) found = true;
          });
          if (found) {
            hitMob = mob;
            break;
          }
        }

        if (hitMob) {
          // 牛をバケツで右クリック
          if (hitMob.type === MobType.COW && activeBlockType === BlockType.BUCKET) {
            inventory[BlockType.BUCKET]--;
            inventory[BlockType.WATER_BUCKET] = (inventory[BlockType.WATER_BUCKET] || 0) + 1;
            if (slotBlocks[activeSlotIndex] === BlockType.BUCKET) {
              slotBlocks[activeSlotIndex] = BlockType.WATER_BUCKET;
              activeBlockType = BlockType.WATER_BUCKET;
            }
            SoundManager.playPlace(BlockType.WATER);
            syncHotbarUI();
            return;
          }
          // トロッコに乗車/下車する
          if (hitMob.type === MobType.MINECART) {
            if (ridingCart === hitMob) {
              ridingCart = null;
              player.body.position.y += 1.0;
            } else {
              ridingCart = hitMob;
            }
            return;
          }
          // 村人ゾンビをリンゴで治療
          if (hitMob.type === MobType.ZOMBIE_VILLAGER && activeBlockType === BlockType.APPLE) {
            if (!hitMob.isCuring) {
              hitMob.isCuring = true;
              hitMob.cureTimer = 0;
              inventory[BlockType.APPLE]--;
              syncHotbarUI();
              SoundManager.playPlace(BlockType.TORCH);
            }
            return;
          }
          // 村人に話しかける（右クリック → 挨拶文をランダムに表示）
          if (hitMob.type === MobType.VILLAGER) {
            // 挨拶文リスト
            const greetings = [
              'こんにちは！',
              'やあ、元気？',
              'いい天気だね！',
              'また会えてうれしいよ！',
              'よろしくね！',
              'いっしょに遊ぼう！',
            ];
            const text = greetings[Math.floor(Math.random() * greetings.length)];
            showMobSpeechBubble(hitMob, text);
            return;
          }
          
          if (hitMob.isFriendly()) {
            return;
          }
        }
      }

      // NPC（他プレイヤーのアバター）に対する話しかけ判定
      const activeNPCs = npcManager.getActiveNPCs();
      if (activeNPCs.size > 0) {
        const npcMeshes: THREE.Object3D[] = [];
        for (const npc of activeNPCs.values()) {
          npc.mesh.traverse(child => {
            if (child instanceof THREE.Mesh) npcMeshes.push(child);
          });
        }
        const npcIntersects = raycaster.intersectObjects(npcMeshes);
        if (npcIntersects.length > 0 && npcIntersects[0].distance < maxInteractDistance) {
          const hitMesh = npcIntersects[0].object;
          for (const npc of activeNPCs.values()) {
            let found = false;
            npc.mesh.traverse(child => { if (child === hitMesh) found = true; });
            if (found) {
              npc.speak();
              return;
            }
          }
        }
      }

      // 武器は設置できない
      if (activeBlockType === BlockType.SWORD || activeBlockType === BlockType.DIAMOND_SWORD || activeBlockType === BlockType.HAMMER) return;

      // クリックした対象のブロックを特定する
      const clickedTarget = point.clone().sub(normal.clone().multiplyScalar(0.1));
      const ctx_x = Math.floor(clickedTarget.x);
      const cty_y = Math.floor(clickedTarget.y);
      const ctz_z = Math.floor(clickedTarget.z);
      const clickedBlockType = world.getBlock(ctx_x, cty_y, ctz_z);

      // 右クリックした対象がドアの場合、開閉をトグルする（2マス同時切替）
      if (clickedBlockType === BlockType.DOOR_CLOSED) {
        world.setBlock(ctx_x, cty_y, ctz_z, BlockType.DOOR_OPEN);
        // 上マスも扉なら同時に開く
        const aboveType = world.getBlock(ctx_x, cty_y + 1, ctz_z);
        if (aboveType === BlockType.DOOR_CLOSED) {
          world.setBlock(ctx_x, cty_y + 1, ctz_z, BlockType.DOOR_OPEN);
        }
        SoundManager.playPlace(BlockType.DOOR_OPEN);
        return;
      } else if (clickedBlockType === BlockType.DOOR_OPEN) {
        world.setBlock(ctx_x, cty_y, ctz_z, BlockType.DOOR_CLOSED);
        // 上マスも扉なら同時に閉じる
        const aboveType = world.getBlock(ctx_x, cty_y + 1, ctz_z);
        if (aboveType === BlockType.DOOR_OPEN) {
          world.setBlock(ctx_x, cty_y + 1, ctz_z, BlockType.DOOR_CLOSED);
        }
        SoundManager.playPlace(BlockType.DOOR_CLOSED);
        return;
      }

      // 右クリックした対象がかまどの場合、UIを開く
      if (clickedBlockType === BlockType.FURNACE) {
        openFurnace();
        return;
      }

      // 空のバケツで水やマグマブロックを汲む
      if (activeBlockType === BlockType.BUCKET) {
        if (clickedBlockType === BlockType.WATER) {
          world.setBlock(ctx_x, cty_y, ctz_z, BlockType.AIR);
          inventory[BlockType.BUCKET]--;
          inventory[BlockType.WATER_BUCKET] = (inventory[BlockType.WATER_BUCKET] || 0) + 1;
          if (slotBlocks[activeSlotIndex] === BlockType.BUCKET) {
            slotBlocks[activeSlotIndex] = BlockType.WATER_BUCKET;
            activeBlockType = BlockType.WATER_BUCKET;
          }
          SoundManager.playPlace(BlockType.WATER);
          syncHotbarUI();
          return;
        } else if (clickedBlockType === BlockType.MAGMA_BLOCK) {
          world.setBlock(ctx_x, cty_y, ctz_z, BlockType.AIR);
          inventory[BlockType.BUCKET]--;
          inventory[BlockType.MAGMA_BUCKET] = (inventory[BlockType.MAGMA_BUCKET] || 0) + 1;
          if (slotBlocks[activeSlotIndex] === BlockType.BUCKET) {
            slotBlocks[activeSlotIndex] = BlockType.MAGMA_BUCKET;
            activeBlockType = BlockType.MAGMA_BUCKET;
          }
          SoundManager.playPlace(BlockType.MAGMA_BLOCK);
          syncHotbarUI();
          return;
        }
      }

      // クワによる耕地化
      const isHoe = BLOCKS[activeBlockType]?.toolCategory === 'hoe';
      if (isHoe && (clickedBlockType === BlockType.GROUND || clickedBlockType === BlockType.DIRT)) {
        const hasWater = isWaterNearby(world, ctx_x, cty_y, ctz_z);
        const farmlandType = hasWater ? BlockType.FARMLAND_WET : BlockType.FARMLAND;
        world.setBlock(ctx_x, cty_y, ctz_z, farmlandType);
        SoundManager.playPlace(BlockType.DIRT); // 耕す音
        player.swing();
        return;
      }

      // タネの植え付け
      if (activeBlockType === BlockType.SEEDS) {
        if (clickedBlockType === BlockType.FARMLAND || clickedBlockType === BlockType.FARMLAND_WET) {
          const cropY = cty_y + 1;
          if (world.getBlock(ctx_x, cropY, ctz_z) === BlockType.AIR) {
            world.setBlock(ctx_x, cropY, ctz_z, BlockType.WHEAT_0);
            SoundManager.playPlace(BlockType.GROUND); // 草の設置音
            inventory[BlockType.SEEDS]--;
            syncHotbarUI();
            player.swing();
          }
        }
        return; // タネは通常のブロックとして設置しない
      }

      // 骨粉による成長促進
      if (activeBlockType === BlockType.BONE_MEAL) {
        let targetCropX = ctx_x;
        let targetCropY = cty_y;
        let targetCropZ = ctz_z;
        let targetCropType: BlockType = clickedBlockType;

        // 耕地をクリックした場合はその上のブロックを調べる
        if (clickedBlockType === BlockType.FARMLAND || clickedBlockType === BlockType.FARMLAND_WET) {
          targetCropY = cty_y + 1;
          targetCropType = world.getBlock(targetCropX, targetCropY, targetCropZ);
        }

        if (BLOCKS[targetCropType]?.isCrop) {
          const currentStage = BLOCKS[targetCropType].growthStage ?? 0;
          if (currentStage < 7) {
            const nextStage = Math.min(7, currentStage + Math.floor(Math.random() * 3) + 2);
            const nextBlockType = (BlockType.WHEAT_0 + nextStage) as BlockType;
            world.setBlock(targetCropX, targetCropY, targetCropZ, nextBlockType);
            SoundManager.playPlace(BlockType.GLASS); // キラキラした音（ガラスの音を代用）
            inventory[BlockType.BONE_MEAL]--;
            syncHotbarUI();
            player.swing();
          }
        }
        return; // 骨粉は通常のブロックとして設置しない
      }

      // その他のアイテム（小麦、パン）やツールは設置しない
      if (activeBlockType === BlockType.WHEAT_ITEM || activeBlockType === BlockType.BREAD || BLOCKS[activeBlockType]?.isTool) {
        return;
      }

      // インベントリの残個数チェック
      if (inventory[activeBlockType] <= 0) return;

      // ブロック設置
      // 法線方向に少し進んだ点が、設置する空気ブロックの内部座標
      const target = point.clone().add(normal.clone().multiplyScalar(0.1));
      const bx = Math.floor(target.x);
      const by = Math.floor(target.y);
      const bz = Math.floor(target.z);

      const halfHeight = CONFIG.PLAYER_HEIGHT / 2;
      const px = Math.floor(player.position.x);
      const py = Math.floor(player.position.y - halfHeight);
      const pz = Math.floor(player.position.z);

      // プレイヤーが完全に占有している2マス（足元と頭）
      const isOccupiedSpace = (bx === px && bz === pz && (by === py || by === py + 1));

      // 縦積み（足元への直接設置）の特別許可判定
      const allowTowerPlace = (bx === px && bz === pz && by === py);
      
      // 頭と同じ位置（真上）への設置も許可する
      const allowHeadPlace = (bx === px && bz === pz && by === py + 1);

      const isTorch = (activeBlockType === BlockType.TORCH);
      const isDoor  = (activeBlockType === BlockType.DOOR_CLOSED);
      const isBed   = (activeBlockType === BlockType.BED_HEAD);

      if (isTorch || !isOccupiedSpace || allowTowerPlace || allowHeadPlace) {
        if (isDoor) {
          // 扉の設置：下マスに扉を置き、上マスが空気なら上マスにも扉を設置（2マス扉）
          world.setBlock(bx, by, bz, BlockType.DOOR_CLOSED);

          const yaw = player.getYaw();
          const isNS = Math.abs(Math.sin(yaw)) < 0.707;
          const orientation: 'NS' | 'EW' = isNS ? 'NS' : 'EW';
          world.setDoorOrientation(bx, by, bz, orientation);

          // 上マスが空気なら上マスにも扉を設置（2マス分の高さを確保）
          const aboveType = world.getBlock(bx, by + 1, bz);
          if (aboveType === BlockType.AIR) {
            world.setBlock(bx, by + 1, bz, BlockType.DOOR_CLOSED);
            world.setDoorOrientation(bx, by + 1, bz, orientation);
          }

          SoundManager.playPlace(activeBlockType);
          inventory[activeBlockType]--;
          syncHotbarUI();
        } else if (isBed) {
          // ベッドの設置：枝鞠側（BED_HEAD）を設置地に配置し、足元側（BED_FOOT）をプレイヤーの前方向に配置
          world.setBlock(bx, by, bz, BlockType.BED_HEAD);

          // プレイヤーの向きから足元方向を決定（前方に足元を配置）
          const yaw = player.getYaw();
          let footDX = 0;
          let footDZ = 0;
          const sinDir = -Math.sin(yaw);
          const cosDir = -Math.cos(yaw);
          
          // 斜め設置を防ぐため、絶対値が大きい方の軸を主軸とする（縦か横のみ）
          if (Math.abs(sinDir) > Math.abs(cosDir)) {
            footDX = Math.sign(sinDir);
          } else {
            footDZ = Math.sign(cosDir);
          }
          
          const footX = bx + footDX;
          const footZ = bz + footDZ;

          // 足元マスが空気ならBED_FOOTを配置
          if (world.getBlock(footX, by, footZ) === BlockType.AIR) {
            world.setBlock(footX, by, footZ, BlockType.BED_FOOT);
          }

          SoundManager.playPlace(activeBlockType);
          inventory[BlockType.BED_HEAD]--;
          syncHotbarUI();
        } else if (activeBlockType === BlockType.WATER_BUCKET) {
          // 水バケツの設置
          world.setBlock(bx, by, bz, BlockType.WATER);
          SoundManager.playPlace(BlockType.WATER);
          inventory[BlockType.WATER_BUCKET]--;
          inventory[BlockType.BUCKET] = (inventory[BlockType.BUCKET] || 0) + 1;
          if (slotBlocks[activeSlotIndex] === BlockType.WATER_BUCKET) {
            slotBlocks[activeSlotIndex] = BlockType.BUCKET;
            activeBlockType = BlockType.BUCKET;
          }
          syncHotbarUI();
        } else if (activeBlockType === BlockType.MAGMA_BUCKET) {
          // マグマバケツの設置
          world.setBlock(bx, by, bz, BlockType.MAGMA_BLOCK);
          SoundManager.playPlace(BlockType.MAGMA_BLOCK);
          inventory[BlockType.MAGMA_BUCKET]--;
          inventory[BlockType.BUCKET] = (inventory[BlockType.BUCKET] || 0) + 1;
          if (slotBlocks[activeSlotIndex] === BlockType.MAGMA_BUCKET) {
            slotBlocks[activeSlotIndex] = BlockType.BUCKET;
            activeBlockType = BlockType.BUCKET;
          }
          syncHotbarUI();
        } else if (activeBlockType === BlockType.SPONGE) {
          // スポンジの設置と吸水処理
          let absorbedAny = false;
          const radius = 2; // 周囲2マス (5x5x5)
          for (let dx = -radius; dx <= radius; dx++) {
            for (let dy = -radius; dy <= radius; dy++) {
              for (let dz = -radius; dz <= radius; dz++) {
                const tx = bx + dx;
                const ty = by + dy;
                const tz = bz + dz;
                if (dx === 0 && dy === 0 && dz === 0) continue;
                if (world.getBlock(tx, ty, tz) === BlockType.WATER) {
                  world.setBlock(tx, ty, tz, BlockType.AIR);
                  absorbedAny = true;
                }
              }
            }
          }
          const finalSpongeType = absorbedAny ? BlockType.WET_SPONGE : BlockType.SPONGE;
          world.setBlock(bx, by, bz, finalSpongeType);
          SoundManager.playPlace(activeBlockType);
          inventory[BlockType.SPONGE]--;
          syncHotbarUI();
        } else if (activeBlockType === BlockType.MINECART) {
          // トロッコの設置
          const cart = new Mob(new THREE.Vector3(bx, by, bz), renderer.scene, physics.world, MobType.MINECART);
          mobs.push(cart);
          inventory[BlockType.MINECART]--;
          syncHotbarUI();
        } else if (activeBlockType === BlockType.STAIRS) {
          world.setBlock(bx, by, bz, BlockType.STAIRS);
          let yaw = player.getYaw();
          // yawを -PI 〜 PI に正規化する
          yaw = yaw % (2 * Math.PI);
          if (yaw > Math.PI) yaw -= 2 * Math.PI;
          if (yaw < -Math.PI) yaw += 2 * Math.PI;

          let dir: 'N'|'S'|'E'|'W' = 'N';
          if (yaw >= -Math.PI/4 && yaw < Math.PI/4) {
            dir = 'N';
          } else if (yaw >= Math.PI/4 && yaw < 3*Math.PI/4) {
            dir = 'W';
          } else if (yaw >= -3*Math.PI/4 && yaw < -Math.PI/4) {
            dir = 'E';
          } else {
            dir = 'S';
          }
          world.setDoorOrientation(bx, by, bz, dir);
          SoundManager.playPlace(activeBlockType);
          inventory[activeBlockType]--;
          syncHotbarUI();
        } else {
          // 通常ブロックの設置
          world.setBlock(bx, by, bz, activeBlockType);
          SoundManager.playPlace(activeBlockType);
          inventory[activeBlockType]--;
          syncHotbarUI();
        }

        // 縦積みの場合は、プレイヤーを設置ブロックの上に押し上げる
        if (allowTowerPlace) {
          player.body.position.y = by + 1.0 + halfHeight + 0.05;
          player.position.y = player.body.position.y;
          if (player.body.velocity.y < 0) {
            player.body.velocity.y = 0; // 落下速度をリセット
          }
        }
      }
    }
  }
}

// メニュー・モーダルの開閉キー（ユーザーアクティベーションが必要なアクション）の直接処理
window.addEventListener('keydown', (e) => {
  // テキスト入力欄（ログイン時のID入力など）フォーカス時はショートカットキーを無効化する
  if (document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement) {
    return;
  }

  const config = configStore.getConfig();

  // Fキーによるダンス開始（トグル）
  if (e.code === 'KeyF') {
    if (input.isLocked) {
      player.startDance();
      e.preventDefault();
      input.consumeJustPressed('KeyF');
    }
  }

  // Escapeキーで開いているモーダルを閉じる処理
  if (e.code === 'Escape') {
    let closedAny = false;

    const inventoryModal = document.getElementById('inventory-modal');
    const isInventoryOpen = inventoryModal && inventoryModal.style.display === 'flex';
    if (isInventoryOpen) {
      closeInventory();
      closedAny = true;
    }

    const furnaceModal = document.getElementById('furnace-modal');
    const isFurnaceOpen = furnaceModal && furnaceModal.style.display === 'flex';
    if (!closedAny && isFurnaceOpen) {
      closeFurnace();
      closedAny = true;
    }

    const craftingModal = document.getElementById('crafting-modal');
    const isCraftingOpen = craftingModal && craftingModal.style.display === 'flex';
    if (!closedAny && isCraftingOpen) {
      closeCrafting();
      closedAny = true;
    }

    const manualModal = document.getElementById('manual-modal');
    const isManualOpen = manualModal && manualModal.style.display === 'flex';
    if (!closedAny && isManualOpen) {
      closeManual();
      closedAny = true;
    }

    const mapModal = document.getElementById('world-map-modal');
    const isMapOpen = mapModal && mapModal.style.display === 'flex';
    if (!closedAny && isMapOpen) {
      closeMap();
      closedAny = true;
    }

    const configModal = document.getElementById('config-modal');
    const isConfigOpen = configModal && configModal.style.display === 'flex';
    if (!closedAny && isConfigOpen) {
      configModal.style.display = 'none';
      input.lastModalCloseTime = performance.now();
      input.requestLock();
      closedAny = true;
    }

    if (closedAny) {
      e.preventDefault();
      // イベントを消費して、InputHandler側での多重入力を防ぐ
      input.consumeJustPressed('Escape');
    }
  }

  // Eキー等押下時のインベントリ開閉アクション
  if (e.code === config.keyOpenInventory) {
    const inventoryModal = document.getElementById('inventory-modal');
    const isInventoryOpen = inventoryModal && inventoryModal.style.display === 'flex';
    if (isInventoryOpen) {
      closeInventory();
      e.preventDefault();
      input.consumeJustPressed(config.keyOpenInventory);
    } else if (input.isLocked) {
      openInventory();
      e.preventDefault();
      input.consumeJustPressed(config.keyOpenInventory);
    }
  }

  // Cキー等押下時のクラフト画面開閉アクション
  if (e.code === config.keyOpenCrafting) {
    const craftingModal = document.getElementById('crafting-modal');
    const isCraftingOpen = craftingModal && craftingModal.style.display === 'flex';
    if (isCraftingOpen) {
      closeCrafting();
      e.preventDefault();
      input.consumeJustPressed(config.keyOpenCrafting);
    } else if (input.isLocked) {
      openCrafting();
      e.preventDefault();
      input.consumeJustPressed(config.keyOpenCrafting);
    }
  }

  // Nキー等押下時のマニュアル画面開閉アクション
  if (e.code === config.keyOpenManual) {
    const manualModal = document.getElementById('manual-modal');
    const isManualOpen = manualModal && manualModal.style.display === 'flex';
    if (isManualOpen) {
      closeManual();
      e.preventDefault();
      input.consumeJustPressed(config.keyOpenManual);
    } else if (input.isLocked) {
      openManual();
      e.preventDefault();
      input.consumeJustPressed(config.keyOpenManual);
    }
  }

  // Mキー等押下時の広域マップ開閉アクション
  if (e.code === config.keyOpenMap) {
    const mapModal = document.getElementById('world-map-modal');
    const isMapOpen = mapModal && mapModal.style.display === 'flex';
    if (isMapOpen) {
      closeMap();
      e.preventDefault();
      input.consumeJustPressed(config.keyOpenMap);
    } else if (input.isLocked) {
      openMap();
      e.preventDefault();
      input.consumeJustPressed(config.keyOpenMap);
    }
  }
});

// ポインターロックエラー（拒否など）時のセーフティネット
document.addEventListener('pointerlockerror', () => {
  const menuOverlay = document.getElementById('menu-overlay');
  const inventoryModal = document.getElementById('inventory-modal');
  const craftingModal = document.getElementById('crafting-modal');
  const manualModal = document.getElementById('manual-modal');
  const mapModal = document.getElementById('world-map-modal');

  const isInventoryOpen = inventoryModal && inventoryModal.style.display === 'flex';
  const isCraftingOpen = craftingModal && craftingModal.style.display === 'flex';
  const isManualOpen = manualModal && manualModal.style.display === 'flex';
  const isMapOpen = mapModal && mapModal.style.display === 'flex';

  // モーダルがどれも開いていない、かつポインターロックが失敗した場合は、
  // 操作不能（フリーズ）を防ぐために一時停止メニュー（初期画面）を強制表示する
  if (!isInventoryOpen && !isCraftingOpen && !isManualOpen && !isMapOpen) {
    if (menuOverlay) {
      menuOverlay.style.display = 'flex';
      menuOverlay.style.opacity = '1';
    }
  }
});

// マウスクリックによるブロックの設置・破壊
window.addEventListener('mousedown', (e) => {
  if (!input.isLocked) return;

  const config = configStore.getConfig();
  const isLeftClick = e.button === 0;
  const isRightClick = e.button === 2;

  const shouldDestroy = config.invertClicks ? isRightClick : isLeftClick;
  const shouldPlace = config.invertClicks ? isLeftClick : isRightClick;

  performBlockAction(shouldDestroy, shouldPlace);
});

// コンテキストメニュー（右クリックメニュー）を無効化
window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

// キャラクター選択ボタンのインタラクション設定
const charButtons = document.querySelectorAll('.char-select-btn');
const initialCharType = configStore.getConfig().characterType || 'boy1';

// 初期状態の反映
charButtons.forEach(btn => {
  const charType = btn.getAttribute('data-char');
  if (charType === initialCharType) {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }
});

// イベントリスナーの登録
charButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const charType = btn.getAttribute('data-char');
    if (charType) {
      // 選択状態のUI更新
      charButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // 設定を保存してプレイヤーのアバターを更新
      configStore.save({ characterType: charType });
      player.changeCharacter(charType);
    }
  });
});

// UIのインタラクション設定
const startBtn = document.getElementById('start-btn');
const menuOverlay = document.getElementById('menu-overlay');

let loopStarted = false; // ループ開始フラグを外出し

if (startBtn && menuOverlay) {
  startBtn.addEventListener('click', async () => {
    // ワールドIDのセット（将来用）
    if (worldIdInput && worldIdInput.value.trim() !== '') {
      saveManager.setWorldId(worldIdInput.value.trim());
    }

    // ログイン時にアカウントIDをセット
    if (accountIdInput && accountIdInput.value.trim() !== '') {
      const id = accountIdInput.value.trim();
      saveManager.setAccountId(id);
      console.log('[main.ts] startBtn: Login with input account ID:', id);
      updateAccountIdList(id); // 履歴に追加
      localStorage.setItem('maikurafu_last_account_id', id); // 最後に使用したアカウントIDを保存
      
      startBtn.textContent = 'データをロード中...';
      startBtn.setAttribute('disabled', 'true');
      
      const success = await saveManager.loadData();
      if (!success) {
        startBtn.textContent = 'ゲームスタート';
        startBtn.removeAttribute('disabled');
        return; // ロード失敗またはキャンセル時はスタートしない
      }
      
      startBtn.textContent = 'ゲームスタート';
      startBtn.removeAttribute('disabled');
      
      saveManager.startAutoSave(3); // 3分ごとのクラウドオートセーブを開始

      // 他プレイヤーのアカウントNPC情報をロード
      const worldId = worldIdInput ? worldIdInput.value.trim() || 'shared_world_1' : 'shared_world_1';
      npcManager.fetchOtherPlayers(id, worldId);
    } else {
      // アカウントID入力欄が空の場合
      const lastAccountId = localStorage.getItem('maikurafu_last_account_id');
      if (lastAccountId && lastAccountId.trim() !== '') {
        // LocalStorageに前回のアカウント情報があれば、それを使ってバックグラウンドでクラウド保存を有効化
        saveManager.setAccountId(lastAccountId);
        console.log('[main.ts] startBtn: Login with lastAccountId:', lastAccountId);
        saveManager.startAutoSave(3); // 3分ごとのクラウドオートセーブを開始
        
        // 初回のみ現在のローカルの最新状態をクラウドにアップロードしてアップデート
        saveManager.saveData().catch(e => console.error('Initial auto cloud save failed:', e));
        
        // 他プレイヤーのアカウントNPC情報をロード
        const worldId = worldIdInput ? worldIdInput.value.trim() || 'shared_world_1' : 'shared_world_1';
        npcManager.fetchOtherPlayers(lastAccountId, worldId);
      } else {
        saveManager.setAccountId('');
        console.log('[main.ts] startBtn: Login as guest (offline mode).');
        saveManager.stopAutoSave(); // オフラインプレイ時はオートセーブ停止
        npcManager.clearAll();
      }
    }

    input.requestLock();
    SoundManager.init();
    
    // ループが開始していなければ、ポインターロックの成否に関わらずゲームループを開始する
    if (!loopStarted) {
      loopStarted = true;
      requestAnimationFrame(animate);
    }
  });

  const hotbar = document.getElementById('hotbar');
  const hud = document.getElementById('hud');

  document.addEventListener('pointerlockchange', () => {
    const lockEl = document.pointerLockElement;
    console.log('[main.ts] pointerlockchange fired. pointerLockElement:', lockEl ? lockEl.tagName : 'null');
    if (document.pointerLockElement === document.body) {
      if (hotbar) hotbar.style.display = 'flex';
      if (hud) hud.style.display = 'block';
      if (inventoryModal) inventoryModal.style.display = 'none';
    } else {
      const isInventoryOpen = inventoryModal && inventoryModal.style.display === 'flex';
      if (!isInventoryOpen) {
        if (hotbar) hotbar.style.display = 'none';
        if (hud) hud.style.display = 'none';
        
        // プレイヤーが死亡している場合は自動セーブを実行しない（死亡時の壊れた座標が上書きされるのを防ぐ）
        if (player && !player.isDead && player.hp > 0) {
          // Escキー等でポインターロックが解除された場合にオートセーブを実行
          autoSaveGame();
          const activeAccountId = saveManager.getAccountId();
          console.log('[main.ts] pointerlockchange: Esc detected. activeAccountId:', activeAccountId);
          if (activeAccountId) {
            saveManager.saveData().catch(e => console.error('Cloud save failed:', e));
          } else {
            console.log('[main.ts] pointerlockchange: Cloud save skipped (no active account ID).');
          }
        }
      }
    }
  });
}

// キーボードでのスロット切り替え
window.addEventListener('keydown', (e) => {
  if (!input.isLocked) return;

  if (e.code.startsWith('Digit')) {
    const num = parseInt(e.code.substring(5));
    if (num >= 1 && num <= 9) {
      selectSlot(num - 1);
    }
  }
});

// マウスホイールでのスロット切り替え
window.addEventListener('wheel', (e) => {
  if (!input.isLocked) return;

  if (e.deltaY > 0) {
    const nextIndex = (activeSlotIndex + 1) % slotBlocks.length;
    selectSlot(nextIndex);
  } else if (e.deltaY < 0) {
    const prevIndex = (activeSlotIndex - 1 + slotBlocks.length) % slotBlocks.length;
    selectSlot(prevIndex);
  }
}, { passive: true });

// 設定変更イベントの監視（影のON/OFFなどの即時反映用）
window.addEventListener('config-changed', () => {
  const config = configStore.getConfig();
  
  // レンダラーの影有効状態を変更
  renderer.renderer.shadowMap.enabled = config.enableShadows;
  
  // TimeManagerの影有効状態を変更
  timeManager.setShadowsEnabled(config.enableShadows);
  
  // 既存のメッシュのマテリアルに更新をかける
  renderer.scene.traverse((child) => {
    if (child instanceof THREE.Mesh && child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach(m => {
          m.needsUpdate = true;
        });
      } else {
        child.material.needsUpdate = true;
      }
    }
  });
});

// インベントリ画面の関連要素の取得と制御ロジック
const inventoryModal = document.getElementById('inventory-modal');
const inventoryItemList = document.getElementById('inventory-item-list');
const inventoryHotbarSlots = document.getElementById('inventory-hotbar-slots');
const inventoryCloseBtn = document.getElementById('inventory-close-btn');

let selectedInventoryBlock: BlockType | null = null;

const allBlocks = [
  BlockType.GROUND,
  BlockType.DIRT,
  BlockType.STONE,
  BlockType.WOOD,
  BlockType.LEAVES,
  BlockType.PLANK,
  BlockType.BRICK,
  BlockType.SAND,
  BlockType.COAL_ORE,
  BlockType.TORCH,
  BlockType.GLASS,
  BlockType.DOOR_CLOSED,
  BlockType.STAIRS, // 木の階段
  BlockType.SWORD,
  BlockType.FENCE,
  BlockType.BED_HEAD,
  BlockType.FURNACE,
  BlockType.CHEST,
  BlockType.WATER,
  BlockType.DIAMOND_SWORD,
  BlockType.HAMMER,
  BlockType.BEDROCK,
  BlockType.IRON_ORE,
  BlockType.GOLD_ORE,
  BlockType.DIAMOND_ORE,
  BlockType.STICK,
  BlockType.IRON_INGOT,
  BlockType.GOLD_INGOT,
  BlockType.DIAMOND,
  BlockType.COBBLESTONE,
  BlockType.COAL,
  BlockType.APPLE,
  BlockType.WOODEN_PICKAXE,
  BlockType.STONE_PICKAXE,
  BlockType.IRON_PICKAXE,
  BlockType.DIAMOND_PICKAXE,
  BlockType.WOODEN_AXE,
  BlockType.STONE_AXE,
  BlockType.IRON_AXE,
  BlockType.DIAMOND_AXE,
  BlockType.WOODEN_SHOVEL,
  BlockType.STONE_SHOVEL,
  BlockType.IRON_SHOVEL,
  BlockType.DIAMOND_SHOVEL,
  BlockType.LEATHER_ARMOR_SET,
  BlockType.IRON_ARMOR_SET,
  BlockType.DIAMOND_ARMOR_SET,
  BlockType.BIRCH_WOOD,
  BlockType.BIRCH_LEAVES,
  BlockType.BIRCH_PLANK,
  BlockType.FLOWER_DANDELION,
  BlockType.FLOWER_ROSE,
  BlockType.LAPIS_ORE,
  BlockType.LAPIS_LAZULI,
  BlockType.LAPIS_BLOCK,
  BlockType.SEA_LANTERN,
  BlockType.MAGMA_BLOCK,
  BlockType.LADDER,
  BlockType.CHAIN,
  BlockType.BUCKET,
  BlockType.WATER_BUCKET,
  BlockType.MAGMA_BUCKET,
  BlockType.SPONGE,
  BlockType.WET_SPONGE,
  BlockType.RAIL,
  BlockType.MINECART,
];

function syncArmorUI() {
  const armorType = player.armorType;
  const buttons = document.querySelectorAll('.armor-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-armor') === armorType) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function openInventory() {
  if (!inventoryModal) return;
  document.exitPointerLock();
  inventoryModal.style.display = 'flex';
  selectedInventoryBlock = null;
  renderInventoryItemList();
  renderInventoryHotbarSlots();
  syncArmorUI();
}

function closeInventory() {
  if (!inventoryModal) return;
  inventoryModal.style.display = 'none';
  input.lastModalCloseTime = performance.now();
  input.requestLock();
}

if (inventoryCloseBtn) {
  inventoryCloseBtn.addEventListener('click', closeInventory);
}

// かまどUI要素の取得
const furnaceModal = document.getElementById('furnace-modal');
const furnaceInputSlot = document.getElementById('furnace-input-slot');
const furnaceInputEmpty = document.getElementById('furnace-input-empty');
const furnaceInputIcon = document.getElementById('furnace-input-icon');
const furnaceInputCountEl = document.getElementById('furnace-input-count');
const furnaceInputName = document.getElementById('furnace-input-name');

const furnaceFuelSlot = document.getElementById('furnace-fuel-slot');
const furnaceFuelEmpty = document.getElementById('furnace-fuel-empty');
const furnaceFuelIcon = document.getElementById('furnace-fuel-icon');
const furnaceFuelCountEl = document.getElementById('furnace-fuel-count');
const furnaceFuelName = document.getElementById('furnace-fuel-name');

const furnaceOutputSlot = document.getElementById('furnace-output-slot');
const furnaceOutputIcon = document.getElementById('furnace-output-icon');
const furnaceOutputCountEl = document.getElementById('furnace-output-count');
const furnaceOutputName = document.getElementById('furnace-output-name');

const furnaceSmeltBtn = document.getElementById('furnace-smelt-btn');
const furnaceCloseBtn = document.getElementById('furnace-close-btn');

function openFurnace() {
  if (!furnaceModal) return;
  document.exitPointerLock();
  furnaceModal.style.display = 'flex';
  renderFurnaceUI();
}

function closeFurnace() {
  if (!furnaceModal) return;
  furnaceModal.style.display = 'none';
  input.lastModalCloseTime = performance.now();
  input.requestLock();
}

function renderFurnaceUI() {
  // 材料
  if (furnaceInputBlock !== null && furnaceInputCount > 0) {
    if (furnaceInputEmpty) furnaceInputEmpty.style.display = 'none';
    if (furnaceInputIcon) {
      furnaceInputIcon.style.display = 'block';
      furnaceInputIcon.className = `slot-icon ${getSlotIconClass(furnaceInputBlock)}`;
    }
    if (furnaceInputCountEl) {
      furnaceInputCountEl.style.display = 'block';
      furnaceInputCountEl.textContent = furnaceInputCount.toString();
    }
    if (furnaceInputName) {
      furnaceInputName.textContent = BLOCKS[furnaceInputBlock]?.name || '不明';
    }
  } else {
    if (furnaceInputEmpty) furnaceInputEmpty.style.display = 'block';
    if (furnaceInputIcon) furnaceInputIcon.style.display = 'none';
    if (furnaceInputCountEl) furnaceInputCountEl.style.display = 'none';
    if (furnaceInputName) furnaceInputName.textContent = 'なし';
  }

  // 燃料
  if (furnaceFuelBlock !== null && furnaceFuelCount > 0) {
    if (furnaceFuelEmpty) furnaceFuelEmpty.style.display = 'none';
    if (furnaceFuelIcon) {
      furnaceFuelIcon.style.display = 'block';
      furnaceFuelIcon.className = `slot-icon ${getSlotIconClass(furnaceFuelBlock)}`;
    }
    if (furnaceFuelCountEl) {
      furnaceFuelCountEl.style.display = 'block';
      furnaceFuelCountEl.textContent = furnaceFuelCount.toString();
    }
    if (furnaceFuelName) {
      furnaceFuelName.textContent = BLOCKS[furnaceFuelBlock]?.name || '不明';
    }
  } else {
    if (furnaceFuelEmpty) furnaceFuelEmpty.style.display = 'block';
    if (furnaceFuelIcon) furnaceFuelIcon.style.display = 'none';
    if (furnaceFuelCountEl) furnaceFuelCountEl.style.display = 'none';
    if (furnaceFuelName) furnaceFuelName.textContent = 'なし';
  }

  // 成果物
  if (furnaceOutputBlock !== null && furnaceOutputCount > 0) {
    if (furnaceOutputIcon) {
      furnaceOutputIcon.style.display = 'block';
      furnaceOutputIcon.className = `slot-icon ${getSlotIconClass(furnaceOutputBlock)}`;
    }
    if (furnaceOutputCountEl) {
      furnaceOutputCountEl.style.display = 'block';
      furnaceOutputCountEl.textContent = furnaceOutputCount.toString();
    }
    if (furnaceOutputName) {
      furnaceOutputName.textContent = BLOCKS[furnaceOutputBlock]?.name || '不明';
    }
  } else {
    if (furnaceOutputIcon) furnaceOutputIcon.style.display = 'none';
    if (furnaceOutputCountEl) furnaceOutputCountEl.style.display = 'none';
    if (furnaceOutputName) furnaceOutputName.textContent = 'なし';
  }

  // 進行度と炎
  const burnIndicator = document.getElementById('furnace-burn-indicator');
  const progressBar = document.getElementById('furnace-progress-bar');
  if (isSmelting) {
    if (burnIndicator) {
      burnIndicator.style.color = '#f97316';
      burnIndicator.style.filter = 'none';
    }
    if (progressBar) {
      const percentage = Math.min((smeltProgress / smeltDuration) * 100, 100);
      progressBar.style.width = `${percentage}%`;
    }
  } else {
    if (burnIndicator) {
      burnIndicator.style.color = 'rgba(255,255,255,0.1)';
      burnIndicator.style.filter = 'grayscale(100%)';
    }
    if (progressBar) progressBar.style.width = '0%';
  }
}

function checkStartSmelting() {
  if (isSmelting) return;
  if (furnaceInputBlock === null || furnaceInputCount <= 0) return;
  if (furnaceFuelBlock === null || furnaceFuelCount <= 0) return;

  const recipeOutput = SMELT_RECIPES[furnaceInputBlock];
  if (recipeOutput === undefined) return;

  if (furnaceOutputBlock !== null && (furnaceOutputBlock !== recipeOutput || furnaceOutputCount >= 64)) {
    return;
  }

  isSmelting = true;
  smeltProgress = 0;
  renderFurnaceUI();
}

function stopSmelting() {
  isSmelting = false;
  smeltProgress = 0;
  renderFurnaceUI();
}

function updateFurnace(deltaTime: number) {
  if (!isSmelting) return;

  if (furnaceInputBlock === null || furnaceInputCount <= 0 ||
      furnaceFuelBlock === null || furnaceFuelCount <= 0) {
    stopSmelting();
    return;
  }

  const recipeOutput = SMELT_RECIPES[furnaceInputBlock];
  if (recipeOutput === undefined) {
    stopSmelting();
    return;
  }

  if (furnaceOutputBlock !== null && (furnaceOutputBlock !== recipeOutput || furnaceOutputCount >= 64)) {
    stopSmelting();
    return;
  }

  smeltProgress += deltaTime;
  
  if (furnaceModal && furnaceModal.style.display === 'flex') {
    const progressBar = document.getElementById('furnace-progress-bar');
    if (progressBar) {
      const percentage = Math.min((smeltProgress / smeltDuration) * 100, 100);
      progressBar.style.width = `${percentage}%`;
    }
  }

  if (smeltProgress >= smeltDuration) {
    furnaceInputCount--;
    if (furnaceInputCount <= 0) {
      furnaceInputBlock = null;
    }

    furnaceFuelCount--;
    if (furnaceFuelCount <= 0) {
      furnaceFuelBlock = null;
    }

    if (furnaceOutputBlock === null) {
      furnaceOutputBlock = recipeOutput;
      furnaceOutputCount = 1;
    } else {
      furnaceOutputCount++;
    }

    SoundManager.playPlace(BlockType.GLASS);
    smeltProgress = 0;
    isSmelting = false;

    if (furnaceModal && furnaceModal.style.display === 'flex') {
      renderFurnaceUI();
    }
    
    checkStartSmelting();
  }
}

// かまどスロットクリックイベント
if (furnaceInputSlot) {
  furnaceInputSlot.addEventListener('click', () => {
    if (activeBlockType !== null && SMELT_RECIPES[activeBlockType] !== undefined) {
      if (furnaceInputBlock === null || furnaceInputBlock === activeBlockType) {
        const transferCount = Math.min(inventory[activeBlockType] || 0, 64 - furnaceInputCount);
        if (transferCount > 0) {
          furnaceInputBlock = activeBlockType;
          furnaceInputCount += transferCount;
          inventory[activeBlockType] -= transferCount;
          syncHotbarUI();
          renderFurnaceUI();
          checkStartSmelting();
        }
      }
    } else if (furnaceInputBlock !== null) {
      inventory[furnaceInputBlock] = (inventory[furnaceInputBlock] || 0) + furnaceInputCount;
      furnaceInputBlock = null;
      furnaceInputCount = 0;
      stopSmelting();
      syncHotbarUI();
      renderFurnaceUI();
    }
  });
}

if (furnaceFuelSlot) {
  furnaceFuelSlot.addEventListener('click', () => {
    if (activeBlockType !== null && FUEL_ITEMS.includes(activeBlockType)) {
      if (furnaceFuelBlock === null || furnaceFuelBlock === activeBlockType) {
        const transferCount = Math.min(inventory[activeBlockType] || 0, 64 - furnaceFuelCount);
        if (transferCount > 0) {
          furnaceFuelBlock = activeBlockType;
          furnaceFuelCount += transferCount;
          inventory[activeBlockType] -= transferCount;
          syncHotbarUI();
          renderFurnaceUI();
          checkStartSmelting();
        }
      }
    } else if (furnaceFuelBlock !== null) {
      inventory[furnaceFuelBlock] = (inventory[furnaceFuelBlock] || 0) + furnaceFuelCount;
      furnaceFuelBlock = null;
      furnaceFuelCount = 0;
      stopSmelting();
      syncHotbarUI();
      renderFurnaceUI();
    }
  });
}

if (furnaceOutputSlot) {
  furnaceOutputSlot.addEventListener('click', () => {
    if (furnaceOutputBlock !== null && furnaceOutputCount > 0) {
      inventory[furnaceOutputBlock] = (inventory[furnaceOutputBlock] || 0) + furnaceOutputCount;
      furnaceOutputBlock = null;
      furnaceOutputCount = 0;
      syncHotbarUI();
      renderFurnaceUI();
      checkStartSmelting();
    }
  });
}

if (furnaceSmeltBtn) {
  furnaceSmeltBtn.addEventListener('click', () => {
    checkStartSmelting();
  });
}

if (furnaceCloseBtn) {
  furnaceCloseBtn.addEventListener('click', closeFurnace);
}

const craftingModal = document.getElementById('crafting-modal');
const recipeListEl = document.getElementById('recipe-list');
const craftingCloseBtn = document.getElementById('crafting-close-btn');

function openCrafting() {
  if (!craftingModal) return;
  document.exitPointerLock();
  craftingModal.style.display = 'flex';
  renderCraftingUI();
}

function closeCrafting() {
  if (!craftingModal) return;
  craftingModal.style.display = 'none';
  input.lastModalCloseTime = performance.now();
  input.requestLock();
}

if (craftingCloseBtn) {
  craftingCloseBtn.addEventListener('click', closeCrafting);
}

const manualModal = document.getElementById('manual-modal');
const manualCloseBtn = document.getElementById('manual-close-btn');
const manualToggleKidsBtn = document.getElementById('manual-toggle-kids-btn');
const manualContentNormal = document.getElementById('manual-content');
const manualContentKids = document.getElementById('manual-content-kids');
let isKidsMode = false;

function openManual() {
  if (!manualModal) return;
  document.exitPointerLock();
  manualModal.style.display = 'flex';
}

function closeManual() {
  if (!manualModal) return;
  manualModal.style.display = 'none';
  input.lastModalCloseTime = performance.now();
  input.requestLock();
}

if (manualCloseBtn) {
  manualCloseBtn.addEventListener('click', closeManual);
}

const mapModal = document.getElementById('world-map-modal');

function openMap() {
  if (!mapModal) return;
  document.exitPointerLock();
  mapModal.style.display = 'flex';
  navigation.renderMap(world, player.position);
}

function closeMap() {
  if (!mapModal) return;
  mapModal.style.display = 'none';
  input.lastModalCloseTime = performance.now();
  input.requestLock();
}

if (manualToggleKidsBtn && manualContentNormal && manualContentKids) {
  manualToggleKidsBtn.addEventListener('click', () => {
    isKidsMode = !isKidsMode;
    if (isKidsMode) {
      manualContentNormal.style.display = 'none';
      manualContentKids.style.display = 'block';
      manualToggleKidsBtn.textContent = 'もとの文字にもどす';
      manualToggleKidsBtn.style.backgroundColor = 'rgba(139, 92, 246, 0.2)';
      manualToggleKidsBtn.style.borderColor = 'rgba(139, 92, 246, 0.5)';
      manualToggleKidsBtn.style.color = '#a78bfa';
    } else {
      manualContentNormal.style.display = 'block';
      manualContentKids.style.display = 'none';
      manualToggleKidsBtn.textContent = 'ひらがなモードにする';
      manualToggleKidsBtn.style.backgroundColor = 'rgba(59, 130, 246, 0.2)';
      manualToggleKidsBtn.style.borderColor = 'rgba(59, 130, 246, 0.5)';
      manualToggleKidsBtn.style.color = '#60a5fa';
    }
  });
}

function renderCraftingUI() {
  if (!recipeListEl) return;
  recipeListEl.innerHTML = '';

  RECIPES.forEach(recipe => {
    const canCraft = recipe.inputs.every(input => (inventory[input.type] || 0) >= input.count);

    const recipeEl = document.createElement('div');
    recipeEl.className = 'recipe-item';

    const outputEl = document.createElement('div');
    outputEl.className = 'recipe-output';
    outputEl.innerHTML = `<div class="slot-icon ${getSlotIconClass(recipe.output.type)}"></div> <span>${BLOCKS[recipe.output.type].name} x${recipe.output.count}</span>`;
    
    const inputsEl = document.createElement('div');
    inputsEl.className = 'recipe-inputs';
    
    recipe.inputs.forEach(input => {
      const hasCount = inventory[input.type] || 0;
      const isSufficient = hasCount >= input.count;
      const inputEl = document.createElement('div');
      inputEl.className = `recipe-input-item ${isSufficient ? 'sufficient' : 'lacking'}`;
      inputEl.innerHTML = `<div class="slot-icon ${getSlotIconClass(input.type)}" style="width:24px;height:24px;"></div> <span>${hasCount}/${input.count}</span>`;
      inputsEl.appendChild(inputEl);
    });

    const craftBtn = document.createElement('button');
    craftBtn.className = 'craft-btn';
    craftBtn.textContent = '作成';
    craftBtn.disabled = !canCraft;
    craftBtn.addEventListener('click', () => {
      if (!craftBtn.disabled) {
        // 消費
        recipe.inputs.forEach(input => {
          inventory[input.type] -= input.count;
        });
        // 獲得
        inventory[recipe.output.type] = (inventory[recipe.output.type] || 0) + recipe.output.count;
        
        SoundManager.playPlace(recipe.output.type);
        syncHotbarUI();
        renderCraftingUI(); // UI更新
      }
    });

    recipeEl.appendChild(outputEl);
    recipeEl.appendChild(inputsEl);
    recipeEl.appendChild(craftBtn);
    recipeListEl.appendChild(recipeEl);
  });
}

// 装備切り替えボタンのイベントリスナー登録
const armorButtons = document.querySelectorAll('.armor-btn');
armorButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const armor = btn.getAttribute('data-armor') as any;
    if (armor) {
      player.setArmor(armor);
      syncArmorUI();
    }
  });
});

function renderInventoryItemList() {
  if (!inventoryItemList) return;
  inventoryItemList.innerHTML = '';

  allBlocks.forEach(type => {
    const prop = BLOCKS[type];
    const itemEl = document.createElement('div');
    itemEl.className = 'inventory-item';
    if (selectedInventoryBlock === type) {
      itemEl.classList.add('selected');
    }

    const iconEl = document.createElement('div');
    iconEl.className = `slot-icon ${getSlotIconClass(type)}`;
    itemEl.appendChild(iconEl);

    const nameEl = document.createElement('div');
    nameEl.className = 'item-name';
    nameEl.textContent = prop.name;
    itemEl.appendChild(nameEl);

    itemEl.addEventListener('click', () => {
      selectedInventoryBlock = type;
      renderInventoryItemList();
    });

    inventoryItemList.appendChild(itemEl);
  });
}

function renderInventoryHotbarSlots() {
  if (!inventoryHotbarSlots) return;
  inventoryHotbarSlots.innerHTML = '';

  hotbarPages.forEach((pageArray, pageIndex) => {
    pageArray.forEach((type, slotIndex) => {
      const slotEl = document.createElement('div');
      slotEl.className = 'inventory-hotbar-slot';
      
      // 現在アクティブなページを少し明るくして区別しやすくする
      if (pageIndex === activePage) {
        slotEl.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        slotEl.style.background = 'rgba(255, 255, 255, 0.05)';
      }

      const iconEl = document.createElement('div');
      iconEl.className = `slot-icon ${getSlotIconClass(type)}`;
      slotEl.appendChild(iconEl);

      const numEl = document.createElement('div');
      numEl.className = 'slot-num';
      numEl.textContent = (slotIndex + 1).toString();
      slotEl.appendChild(numEl);

      slotEl.addEventListener('click', () => {
        if (selectedInventoryBlock !== null) {
          hotbarPages[pageIndex][slotIndex] = selectedInventoryBlock;
          syncHotbarUI();
          renderInventoryHotbarSlots();
        }
      });

      inventoryHotbarSlots.appendChild(slotEl);
    });
  });
}

// ==========================================
// セーブ＆ロードシステム (LocalStorage & Cloud)
// ==========================================

// LocalStorage オートセーブデータのロード
function loadAutoSave(): boolean {
  const jsonText = localStorage.getItem('maikurafu_autosave');
  if (!jsonText) return false;
  try {
    const data = JSON.parse(jsonText);
    if (data.player) {
      player.loadSaveData(data.player);
    }
    if (data.inventory) {
      const inv = data.inventory;
      if (inv.blocks) {
        Object.assign(inventory, inv.blocks);
      }
      if (inv.hotbarPages) {
        hotbarPages[0] = [...inv.hotbarPages[0]];
        hotbarPages[1] = [...inv.hotbarPages[1]];
      }
      if (typeof inv.activePage === 'number') {
        activePage = inv.activePage;
        slotBlocks = hotbarPages[activePage];
      }
      if (typeof inv.activeSlotIndex === 'number') {
        activeSlotIndex = inv.activeSlotIndex;
      }
      syncHotbarUI();
    }
    if (data.homePosition) {
      navigation.setHome(new THREE.Vector3(data.homePosition.x, data.homePosition.y, data.homePosition.z));
    }
    // クラウドロード時はワールド差分をクラウドから読むため、
    // ここではLocalのワールド復元は行わないか、補助的に行う
    if (data.world) {
      world.setModifiedBlocksData(data.world);
    }
    console.log('Game auto-saved state successfully loaded from localStorage.');
    return true;
  } catch (e) {
    console.warn('Failed to parse autosave data:', e);
    return false;
  }
}

// LocalStorage へのオートセーブ実行 (ローカル用バックアップ)
function autoSaveGame() {
  const homePos = navigation.getHome();
  const saveData = {
    version: '1.0.0',
    timestamp: Date.now(),
    player: player.getSaveData(),
    inventory: {
      blocks: inventory,
      hotbarPages: hotbarPages,
      activePage: activePage,
      activeSlotIndex: activeSlotIndex
    },
    homePosition: homePos ? { x: homePos.x, y: homePos.y, z: homePos.z } : null,
    world: world.getModifiedBlocksData()
  };
  localStorage.setItem('maikurafu_autosave', JSON.stringify(saveData));
  console.log('Game auto-saved to localStorage.');
}

// UIイベントの登録 (Cloud Save)
const cloudSaveBtn = document.getElementById('cloud-save-btn');
const cloudLoadBtn = document.getElementById('cloud-load-btn');

if (cloudSaveBtn) {
  cloudSaveBtn.addEventListener('click', async () => {
    // 押下時にアカウントIDとワールドIDをセット
    let id = accountIdInput ? accountIdInput.value.trim() : '';
    if (id === '') {
      id = saveManager.getAccountId() || '';
      if (id !== '' && accountIdInput) {
        accountIdInput.value = id;
      }
    }

    if (id !== '') {
      saveManager.setAccountId(id);
      updateAccountIdList(id);
      if (worldIdInput) saveManager.setWorldId(worldIdInput.value.trim());
      
      autoSaveGame(); // バックアップとしてローカルにも保存
      
      const prevText = cloudSaveBtn.textContent;
      cloudSaveBtn.textContent = 'セーブ中...';
      cloudSaveBtn.setAttribute('disabled', 'true');
      
      await saveManager.saveData();
      
      cloudSaveBtn.textContent = prevText;
      cloudSaveBtn.removeAttribute('disabled');
    } else {
      alert('アカウントIDを入力してください');
    }
  });
}

if (cloudLoadBtn) {
  cloudLoadBtn.addEventListener('click', async () => {
    let id = accountIdInput ? accountIdInput.value.trim() : '';
    if (id === '') {
      id = saveManager.getAccountId() || '';
      if (id !== '' && accountIdInput) {
        accountIdInput.value = id;
      }
    }

    if (id !== '') {
      saveManager.setAccountId(id);
      updateAccountIdList(id);
      if (worldIdInput) saveManager.setWorldId(worldIdInput.value.trim());
      
      const prevText = cloudLoadBtn.textContent;
      cloudLoadBtn.textContent = 'ロード中...';
      cloudLoadBtn.setAttribute('disabled', 'true');
      
      await saveManager.loadData(true);
      
      cloudLoadBtn.textContent = prevText;
      cloudLoadBtn.removeAttribute('disabled');
    } else {
      alert('アカウントIDを入力してください');
    }
  });
}

const cloudSyncBtn = document.getElementById('cloud-sync-btn');
if (cloudSyncBtn) {
  cloudSyncBtn.addEventListener('click', async () => {
    if (worldIdInput) saveManager.setWorldId(worldIdInput.value.trim());
    
    let id = accountIdInput ? accountIdInput.value.trim() : '';
    if (id === '') {
      id = saveManager.getAccountId() || '';
      if (id !== '' && accountIdInput) {
        accountIdInput.value = id;
      }
    }

    if (id !== '') {
      saveManager.setAccountId(id);
    }
    
    const prevText = cloudSyncBtn.textContent;
    cloudSyncBtn.textContent = '同期中...';
    cloudSyncBtn.setAttribute('disabled', 'true');
    
    await saveManager.syncWorldData();
    
    cloudSyncBtn.textContent = prevText;
    cloudSyncBtn.removeAttribute('disabled');
  });
}



