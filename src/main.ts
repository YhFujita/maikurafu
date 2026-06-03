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
import { TimeManager } from './system/TimeManager.ts';
import { DroppedItem } from './item/DroppedItem.ts';
import { Mob } from './mob/Mob.ts';
import { SoundManager } from './system/SoundManager.ts';

// レンダラーの初期化
const renderer = new Renderer('canvas-container');

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
  [BlockType.SWORD]: 1, // 初期状態で1個所持
  [BlockType.STAIRS]: 64, // 階段を追加
};

// 設定UIの初期化
const configUI = new ConfigUIHandler();
configUI.updateInstructionsUI(); // 現在の設定をメイン画面に適用

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
    BlockType.GLASS,       // 10: ガラス
    BlockType.DOOR_CLOSED, // 11: ドア（しめる）
    BlockType.COAL_ORE,    // 12: 石炭
    BlockType.SWORD,       // 13: いしのけん
    BlockType.STAIRS,      // 14: きのかいだん
    BlockType.DIRT,
    BlockType.STONE,
    BlockType.WOOD,
    BlockType.TORCH,
  ]
];

let activePage = 0;
let slotBlocks = hotbarPages[activePage];

const hotbarSlots = document.querySelectorAll('.hotbar-slot');
const hotbarLabel = document.getElementById('hotbar-label');

function getSlotIconClass(type: BlockType): string {
  switch (type) {
    case BlockType.GROUND: return 'slot-grass';
    case BlockType.DIRT: return 'slot-dirt';
    case BlockType.STONE: return 'slot-stone';
    case BlockType.WOOD: return 'slot-wood';
    case BlockType.LEAVES: return 'slot-leaves';
    case BlockType.PLANK: return 'slot-plank';
    case BlockType.BRICK: return 'slot-brick';
    case BlockType.SAND: return 'slot-sand';
    case BlockType.TORCH: return 'slot-torch';
    case BlockType.GLASS: return 'slot-glass';
    case BlockType.DOOR_CLOSED: return 'slot-door';
    case BlockType.COAL_ORE: return 'slot-coal';
    case BlockType.STAIRS: return 'slot-stairs';
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

// オートセーブデータがあれば自動ロード
const hasAutosave = loadAutoSave();
if (hasAutosave) {
  // 自動ロードした座標を中心に世界を初期構築
  world.clearAndRebuild(player.position.x, player.position.z);
} else {
  // 初回起動時はデフォルト位置で世界を初期構築
  world.generateWorldAround(player.position.x, player.position.z);
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

// ドロップアイテムの生成処理
function spawnDroppedItem(type: BlockType, pos: THREE.Vector3) {
  if (droppedItems.length >= CONFIG.MAX_DROPPED_ITEMS) {
    const oldest = droppedItems.shift();
    if (oldest) oldest.destroy();
  }
  const item = new DroppedItem(type, pos, renderer.scene, physics.world);
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

  // プレイヤーの周辺ブロックの物理ボディを同期
  physics.updateBlockBodies(player.position, world);

  // 物理世界のステップ実行
  physics.step(deltaTime);

  // プレイヤーと入力の更新
  player.update(input, deltaTime, world, activeBlockType);
  
  // 昼夜サイクルの更新
  timeManager.update(deltaTime, player.position);

  // Tabキー押下時のホットバーページ切り替え
  if (input.consumeJustPressed('Tab')) {
    activePage = 1 - activePage;
    slotBlocks = hotbarPages[activePage];
    syncHotbarUI();
  }

  // Eキー押下時のインベントリ開閉アクション
  if (input.consumeJustPressed('KeyE')) {
    const isInventoryOpen = inventoryModal && inventoryModal.style.display === 'flex';
    if (isInventoryOpen) {
      closeInventory();
    } else {
      openInventory();
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

  // Mobの自動スポーン（夜間のみ）
  if (timeManager.isNight()) {
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
          const mob = new Mob(new THREE.Vector3(sx, sy, sz), renderer.scene, physics.world);
          mobs.push(mob);
        }
      }
    }
  } else {
    // 昼間はMobを自動消滅（日光で消滅）
    for (let i = mobs.length - 1; i >= 0; i--) {
      mobs[i].destroy();
      mobs.splice(i, 1);
    }
  }

  // Mobの更新
  for (let i = mobs.length - 1; i >= 0; i--) {
    const isDespawned = mobs[i].update(deltaTime, player);
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

  // レンダリング実行
  renderer.render();
}

// マウスクリックによるブロックの設置・破壊
window.addEventListener('mousedown', (e) => {
  if (!input.isLocked) return;

  // 画面中央からレイを飛ばす
  raycaster.setFromCamera(new THREE.Vector2(0, 0), renderer.camera);
  
  const chunkMeshes = world.getChunkMeshes();
  const intersects = raycaster.intersectObjects(chunkMeshes);

  if (intersects.length > 0) {
    const intersect = intersects[0];

    // 操作距離の制限チェック
    if (intersect.distance > maxInteractDistance) return;

    const point = intersect.point;
    const normal = intersect.face?.normal;
    if (!normal) return;

    const config = configStore.getConfig();
    const isLeftClick = e.button === 0;
    const isRightClick = e.button === 2;

    const shouldDestroy = config.invertClicks ? isRightClick : isLeftClick;
    const shouldPlace = config.invertClicks ? isLeftClick : isRightClick;

    if (shouldDestroy) {
      // 破壊/攻撃時は常に剣を振る
      player.swing();
      SoundManager.playSwing();

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

          // 剣なら4ダメージ（ゾンビを一撃）、素手なら2ダメージ
          const damage = (activeBlockType === BlockType.SWORD) ? 4 : 2;
          const isDead = hitMob.takeDamage(damage, kbDir);
          if (isDead) {
            // ゾンビ死亡時に確率で石炭や石などをドロップ
            const dropType = Math.random() < 0.4 ? BlockType.COAL_ORE : BlockType.STONE;
            spawnDroppedItem(dropType, new THREE.Vector3(hitMob.body.position.x, hitMob.body.position.y, hitMob.body.position.z));
            const idx = mobs.indexOf(hitMob);
            if (idx > -1) mobs.splice(idx, 1);
          }
          return; // 攻撃ヒット時はブロックの破壊処理をスキップ
        }
      }

      // ブロック破壊
      // 法線の逆方向に少し進んだ点が、交差したブロックの内部座標
      const target = point.clone().sub(normal.clone().multiplyScalar(0.1));
      const bx = Math.floor(target.x);
      const by = Math.floor(target.y);
      const bz = Math.floor(target.z);

      const targetBlockType = world.getBlock(bx, by, bz);
      if (targetBlockType !== BlockType.AIR) {
        world.setBlock(bx, by, bz, BlockType.AIR);
        // ブロック破壊音の再生
        SoundManager.playBreak(targetBlockType);
        
        // 破壊ブロックの中央座標にドロップアイテムをスポーン
        spawnDroppedItem(targetBlockType, new THREE.Vector3(bx + 0.5, by + 0.5, bz + 0.5));
      }

      
    } else if (shouldPlace) {
      // 剣は設置できない
      if (activeBlockType === BlockType.SWORD) return;

      // クリックした対象のブロックを特定する
      const clickedTarget = point.clone().sub(normal.clone().multiplyScalar(0.1));
      const ctx_x = Math.floor(clickedTarget.x);
      const cty_y = Math.floor(clickedTarget.y);
      const ctz_z = Math.floor(clickedTarget.z);
      const clickedBlockType = world.getBlock(ctx_x, cty_y, ctz_z);

      // 右クリックした対象がドアの場合、開閉をトグルする
      if (clickedBlockType === BlockType.DOOR_CLOSED) {
        world.setBlock(ctx_x, cty_y, ctz_z, BlockType.DOOR_OPEN);
        SoundManager.playPlace(BlockType.DOOR_OPEN);
        return;
      } else if (clickedBlockType === BlockType.DOOR_OPEN) {
        world.setBlock(ctx_x, cty_y, ctz_z, BlockType.DOOR_CLOSED);
        SoundManager.playPlace(BlockType.DOOR_CLOSED);
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
      const feetY = player.position.y - halfHeight;

      // プレイヤーが完全に占有している2マス（足元と頭）
      const isOccupiedSpace = (bx === px && bz === pz && (by === py || by === py + 1));

      // 縦積み（ジャンプ設置）の特別許可判定（足元の少し上にいる場合）
      const isJumpingAbove = (!player.body.velocity.y || Math.abs(player.body.velocity.y) > 0.05) && feetY >= by + 0.15;
      const allowTowerPlace = (isJumpingAbove && bx === px && bz === pz && by === py);

      // 松明(TORCH)などはソリッドでないため、占有判定をスキップして設置可能にする
      const isTorch = (activeBlockType === BlockType.TORCH);

      if (isTorch || !isOccupiedSpace || allowTowerPlace) {
        // 選択されたブロックを設置し、インベントリから消費
        world.setBlock(bx, by, bz, activeBlockType);
        SoundManager.playPlace(activeBlockType);
        inventory[activeBlockType]--;
        syncHotbarUI();

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
});

// コンテキストメニュー（右クリックメニュー）を無効化
window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

// UIのインタラクション設定
const startBtn = document.getElementById('start-btn');
const menuOverlay = document.getElementById('menu-overlay');

let loopStarted = false; // ループ開始フラグを外出し

if (startBtn && menuOverlay) {
  startBtn.addEventListener('click', () => {
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
    if (document.pointerLockElement === document.body) {
      if (hotbar) hotbar.style.display = 'flex';
      if (hud) hud.style.display = 'block';
      if (inventoryModal) inventoryModal.style.display = 'none';
    } else {
      const isInventoryOpen = inventoryModal && inventoryModal.style.display === 'flex';
      if (!isInventoryOpen) {
        if (hotbar) hotbar.style.display = 'none';
        if (hud) hud.style.display = 'none';
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
  BlockType.STAIRS, // 木の階段を追加
  BlockType.SWORD,
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
  input.requestLock();
}

if (inventoryCloseBtn) {
  inventoryCloseBtn.addEventListener('click', closeInventory);
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

  slotBlocks.forEach((type, index) => {
    const slotEl = document.createElement('div');
    slotEl.className = 'inventory-hotbar-slot';
    slotEl.setAttribute('data-index', index.toString());

    const iconEl = document.createElement('div');
    iconEl.className = `slot-icon ${getSlotIconClass(type)}`;
    slotEl.appendChild(iconEl);

    const numEl = document.createElement('div');
    numEl.className = 'slot-num';
    numEl.textContent = (index + 1).toString();
    slotEl.appendChild(numEl);

    slotEl.addEventListener('click', () => {
      if (selectedInventoryBlock !== null) {
        slotBlocks[index] = selectedInventoryBlock;
        syncHotbarUI();
        renderInventoryHotbarSlots();
      }
    });

    inventoryHotbarSlots.appendChild(slotEl);
  });
}

// ==========================================
// セーブ＆ロードシステム (LocalStorage & JSON)
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

// LocalStorage へのオートセーブ実行
function autoSaveGame() {
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
    world: world.getModifiedBlocksData()
  };
  localStorage.setItem('maikurafu_autosave', JSON.stringify(saveData));
  console.log('Game auto-saved to localStorage.');
}

// JSONファイルとしてのゲーム状態のダウンロード（セーブ）
function saveGameToJSON() {
  // セーブ実行前にオートセーブも実行しておく
  autoSaveGame();

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
    world: world.getModifiedBlocksData()
  };

  const jsonStr = JSON.stringify(saveData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `maikurafu_save_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  
  URL.revokeObjectURL(url);
}

// アップロードされたJSONテキストからのゲーム状態ロード
function loadGameFromJSON(jsonText: string) {
  try {
    const data = JSON.parse(jsonText);
    
    // プレイヤーのロード
    if (data.player) {
      player.loadSaveData(data.player);
    }

    // インベントリのロード
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

    // ワールドブロック差分のロード
    if (data.world) {
      world.setModifiedBlocksData(data.world);
      // 世界の再構築
      world.clearAndRebuild(player.position.x, player.position.z);
    }

    // ロード成功時にオートセーブデータも上書き更新しておく
    autoSaveGame();
    alert('セーブデータを正常にロードしました！');
  } catch (err) {
    console.error('Failed to load save data:', err);
    alert('セーブデータのロードに失敗しました。正しいJSONファイルか確認してください。');
  }
}

// UIイベントの登録
const saveBtn = document.getElementById('save-json-btn');
const loadBtn = document.getElementById('load-json-btn');
const fileInput = document.getElementById('load-file-input') as HTMLInputElement;

if (saveBtn) {
  saveBtn.addEventListener('click', () => {
    saveGameToJSON();
  });
}

if (loadBtn && fileInput) {
  loadBtn.addEventListener('click', () => {
    fileInput.click();
  });
  fileInput.addEventListener('change', () => {
    const file = fileInput.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      if (text) {
        loadGameFromJSON(text);
      }
      fileInput.value = ''; // 連続選択を可能にするためクリア
    };
    reader.readAsText(file);
  });
}


