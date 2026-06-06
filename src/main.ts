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
import { Mob } from './mob/Mob.ts';
import { SaveManager } from './system/SaveManager.ts';
import { NavigationManager } from './ui/NavigationManager.ts';

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
  opacity: 0.8,
  depthTest: true,
  depthWrite: false,
});
const crackGeometry = new THREE.BoxGeometry(1.01, 1.01, 1.01);
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
  ]
];

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

saveManager.onSaveCustomData = () => {
  return {
    inventory: {
      blocks: inventory,
      hotbarPages: hotbarPages,
      activePage: activePage,
      activeSlotIndex: activeSlotIndex
    }
  };
};

saveManager.onLoadCustomData = (data: any) => {
  if (data && data.inventory) {
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

  // プレイヤーの周辺ブロックの物理ボディを同期
  physics.updateBlockBodies(player.position, world);

  // 物理世界のステップ実行
  physics.step(deltaTime);

  // プレイヤーと入力の更新
  player.update(input, deltaTime, world, activeBlockType);
  
  // コンパスの更新
  navigation.updateCompass({ position: player.position, camera: renderer.camera });

  // 昼夜サイクルの更新
  timeManager.update(deltaTime, player.position);

  // Tabキー押下時のホットバーページ切り替え
  if (input.consumeJustPressed('Tab')) {
    activePage = 1 - activePage;
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
  
  if (shouldBreak && input.isLocked) {
    player.swing(); // 長押し中はスイングを繰り返しトリガー
    raycaster.setFromCamera(new THREE.Vector2(0, 0), player.camera);
    const chunkMeshes = world.getChunkMeshes();
    const intersects = raycaster.intersectObjects(chunkMeshes);
    let hitValidBlock = false;

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
          if (!isBreakingBlock || !breakingTargetPos.equals(currentTargetPos)) {
            // 新しいブロックを破壊開始
            isBreakingBlock = true;
            breakingTargetPos.copy(currentTargetPos);
            breakingProgress = 0.0;
            crackMesh.position.set(bx + 0.5, by + 0.5, bz + 0.5);
            crackMesh.visible = true;
            updateCrackTexture(0);

            // イージーモードなら即座に破壊を実行
            if (config.easyMode) {
              executeBlockDestroy(targetBlockType, bx, by, bz);
              isBreakingBlock = false;
              crackMesh.visible = false;
              breakingProgress = 0.0;
              easyModeBreakTimer = 0.25; // 0.25秒の連打防止クールダウンを設定
            }
          } else {
            // 破壊継続中
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
    
    if (!hitValidBlock) {
      isBreakingBlock = false;
      crackMesh.visible = false;
      breakingProgress = 0.0;
    }
  } else {
    isBreakingBlock = false;
    crackMesh.visible = false;
    breakingProgress = 0.0;
  }

  // レンダリング実行
  renderer.render();
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
    // 適性ツールによるドロップ判定
    const blockProps = BLOCKS[targetBlockType];
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
            // ゾンビ死亡時に確率で石炭や石などをドロップ
            const dropType = Math.random() < 0.4 ? BlockType.COAL_ORE : BlockType.STONE;
            spawnDroppedItem(dropType, new THREE.Vector3(hitMob.body.position.x, hitMob.body.position.y, hitMob.body.position.z), player.position);
            const idx = mobs.indexOf(hitMob);
            if (idx > -1) mobs.splice(idx, 1);
          }
          return; // 攻撃ヒット時はスキップ
        }
      }
      
    } else if (shouldPlace) {
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

  // Escapeキーで開いているモーダルを閉じる処理
  if (e.code === 'Escape') {
    let closedAny = false;

    const inventoryModal = document.getElementById('inventory-modal');
    const isInventoryOpen = inventoryModal && inventoryModal.style.display === 'flex';
    if (isInventoryOpen) {
      closeInventory();
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
      updateAccountIdList(id); // 履歴に追加
      
      startBtn.textContent = 'データをロード中...';
      startBtn.setAttribute('disabled', 'true');
      
      await saveManager.loadData();
      startBtn.textContent = 'ゲームスタート';
      startBtn.removeAttribute('disabled');
      
      saveManager.startAutoSave(3); // 3分ごとのクラウドオートセーブを開始
    } else {
      saveManager.setAccountId('');
      saveManager.stopAutoSave(); // オフラインプレイ時はオートセーブ停止
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
    if (document.pointerLockElement === document.body) {
      if (hotbar) hotbar.style.display = 'flex';
      if (hud) hud.style.display = 'block';
      if (inventoryModal) inventoryModal.style.display = 'none';
    } else {
      const isInventoryOpen = inventoryModal && inventoryModal.style.display === 'flex';
      if (!isInventoryOpen) {
        if (hotbar) hotbar.style.display = 'none';
        if (hud) hud.style.display = 'none';
        
        // Escキー等でポインターロックが解除された場合にオートセーブを実行
        autoSaveGame();
        if (accountIdInput && accountIdInput.value.trim() !== '') {
          saveManager.saveData().catch(e => console.error('Cloud save failed:', e));
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

// UIイベントの登録 (Cloud Save)
const cloudSaveBtn = document.getElementById('cloud-save-btn');
const cloudLoadBtn = document.getElementById('cloud-load-btn');

if (cloudSaveBtn) {
  cloudSaveBtn.addEventListener('click', async () => {
    // 押下時にアカウントIDとワールドIDをセット
    if (accountIdInput && accountIdInput.value.trim() !== '') {
      const id = accountIdInput.value.trim();
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
    if (accountIdInput && accountIdInput.value.trim() !== '') {
      const id = accountIdInput.value.trim();
      saveManager.setAccountId(id);
      updateAccountIdList(id);
      if (worldIdInput) saveManager.setWorldId(worldIdInput.value.trim());
      
      const prevText = cloudLoadBtn.textContent;
      cloudLoadBtn.textContent = 'ロード中...';
      cloudLoadBtn.setAttribute('disabled', 'true');
      
      await saveManager.loadData();
      
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
    if (accountIdInput && accountIdInput.value.trim() !== '') {
      const id = accountIdInput.value.trim();
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



