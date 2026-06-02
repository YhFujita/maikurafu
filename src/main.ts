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

// レンダラーの初期化
const renderer = new Renderer('canvas-container');

// 物理ワールドの初期化
const physics = new PhysicsWorld();

// 入力ハンドリングの初期化
const input = new InputHandler(document.body);

// プレイヤーの初期化
const player = new Player(renderer.camera, new THREE.Vector3(8, 5, 8), physics.world, renderer.scene);

// 昼夜サイクルマネージャーの初期化
const timeManager = new TimeManager(renderer.scene);

// ドロップアイテムの管理
const droppedItems: DroppedItem[] = [];

// 敵Mobの管理
const mobs: Mob[] = [];


// インベントリの管理（初期状態で各64個所持）
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
  });
}

// 選択されているブロックの管理
let activeBlockType = BlockType.GROUND;
let activeSlotIndex = 0;

const slotBlocks = [
  BlockType.GROUND,  // 1: 草
  BlockType.DIRT,    // 2: 土
  BlockType.STONE,   // 3: 石
  BlockType.WOOD,    // 4: 木
  BlockType.LEAVES,  // 5: 葉
  BlockType.PLANK,   // 6: 木材
  BlockType.BRICK,   // 7: レンガ
  BlockType.SAND,    // 8: 砂
  BlockType.TORCH,   // 9: 松明
];

const hotbarSlots = document.querySelectorAll('.hotbar-slot');
const hotbarLabel = document.getElementById('hotbar-label');
const slotCountElements = slotBlocks.map((_, i) => document.getElementById(`count-${i}`));

function updateInventoryUI() {
  slotBlocks.forEach((type, index) => {
    const countEl = slotCountElements[index];
    if (countEl) {
      countEl.textContent = inventory[type].toString();
    }
  });
}

// 初期インベントリ数の同期
updateInventoryUI();


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
world.generateWorldAround(player.position.x, player.position.z);

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
  player.update(input, deltaTime, world);
  
  // 昼夜サイクルの更新
  timeManager.update(deltaTime, player.position);

  // Qキー押下時のアイテム投棄アクション
  if (input.consumeJustPressed('KeyQ')) {
    if (inventory[activeBlockType] > 0) {
      inventory[activeBlockType]--;
      updateInventoryUI();

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

  // ドロップアイテム的更新・回収
  for (let i = droppedItems.length - 1; i >= 0; i--) {
    const item = droppedItems[i];
    const isDone = item.update(deltaTime, player.position);
    if (isDone) {
      const dist = item.mesh.position.distanceTo(player.position);
      if (dist < 0.8) {
        inventory[item.blockType] = (inventory[item.blockType] || 0) + 1;
        updateInventoryUI();
      }
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

          const isDead = hitMob.takeDamage(2, kbDir);
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
        
        // 破壊ブロックの中央座標にドロップアイテムをスポーン
        spawnDroppedItem(targetBlockType, new THREE.Vector3(bx + 0.5, by + 0.5, bz + 0.5));
      }

      
    } else if (shouldPlace) {
      // インベントリの残個数チェック
      if (inventory[activeBlockType] <= 0) return;

      // ブロック設置
      // 法線方向に少し進んだ点が、設置する空気ブロックの内部座標
      const target = point.clone().add(normal.clone().multiplyScalar(0.1));
      const bx = Math.floor(target.x);
      const by = Math.floor(target.y);
      const bz = Math.floor(target.z);

      // プレイヤーの身体と重なっていないか衝突判定 (AABB)
      const pMinX = player.position.x - CONFIG.PLAYER_RADIUS;
      const pMaxX = player.position.x + CONFIG.PLAYER_RADIUS;
      const pMinY = player.position.y - CONFIG.PLAYER_HEIGHT / 2;
      const pMaxY = player.position.y + CONFIG.PLAYER_HEIGHT / 2;
      const pMinZ = player.position.z - CONFIG.PLAYER_RADIUS;
      const pMaxZ = player.position.z + CONFIG.PLAYER_RADIUS;

      const bMinX = bx;
      const bMaxX = bx + 1;
      const bMinY = by;
      const bMaxY = by + 1;
      const bMinZ = bz;
      const bMaxZ = bz + 1;

      const collides = (
        pMinX < bMaxX && pMaxX > bMinX &&
        pMinY < bMaxY && pMaxY > bMinY &&
        pMinZ < bMaxZ && pMaxZ > bMinZ
      );

      // 松明(TORCH)などはソリッドでないため、プレイヤーとの重なり衝突判定をスキップして設置可能にする
      const isTorch = (activeBlockType === BlockType.TORCH);

      if (!collides || isTorch) {
        // 選択されたブロックを設置し、インベントリから消費
        world.setBlock(bx, by, bz, activeBlockType);
        inventory[activeBlockType]--;
        updateInventoryUI();
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

if (startBtn && menuOverlay) {
  startBtn.addEventListener('click', () => {
    input.requestLock();
  });

  const hotbar = document.getElementById('hotbar');
  const hud = document.getElementById('hud');

  let loopStarted = false;
  document.addEventListener('pointerlockchange', () => {
    if (document.pointerLockElement === document.body) {
      if (!loopStarted) {
        loopStarted = true;
        requestAnimationFrame(animate);
      }
      if (hotbar) hotbar.style.display = 'flex';
      if (hud) hud.style.display = 'block';
    } else {
      if (hotbar) hotbar.style.display = 'none';
      if (hud) hud.style.display = 'none';
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

