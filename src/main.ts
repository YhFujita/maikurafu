import * as THREE from 'three';
import { Renderer } from './renderer/Renderer.ts';
import { World } from './world/World.ts';
import { InputHandler } from './input/InputHandler.ts';
import { Player } from './player/Player.ts';
import { PhysicsWorld } from './physics/PhysicsWorld.ts';
import { BlockType } from './world/Block.ts';
import { CONFIG } from './config.ts';

// レンダラーの初期化
const renderer = new Renderer('canvas-container');

// 物理ワールドの初期化
const physics = new PhysicsWorld();

// 入力ハンドリングの初期化
const input = new InputHandler(document.body);

// プレイヤーの初期化
const player = new Player(renderer.camera, new THREE.Vector3(8, 5, 8), physics.world);

// ワールドの初期化
const world = new World(renderer.scene);
world.generateWorldAround(player.position.x, player.position.z);

// レイキャスターの設定（ブロックの設置・破壊用）
const raycaster = new THREE.Raycaster();
const maxInteractDistance = 6; // 操作可能距離 (m)

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

    if (e.button === 0) {
      // 左クリック: ブロック破壊
      // 法線の逆方向に少し進んだ点が、交差したブロックの内部座標
      const target = point.clone().sub(normal.clone().multiplyScalar(0.1));
      const bx = Math.floor(target.x);
      const by = Math.floor(target.y);
      const bz = Math.floor(target.z);

      world.setBlock(bx, by, bz, BlockType.AIR);
      
    } else if (e.button === 2) {
      // 右クリック: ブロック設置
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

      if (!collides) {
        // 土ブロックを設置
        world.setBlock(bx, by, bz, BlockType.DIRT);
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

  let loopStarted = false;
  document.addEventListener('pointerlockchange', () => {
    if (document.pointerLockElement === document.body && !loopStarted) {
      loopStarted = true;
      requestAnimationFrame(animate);
    }
  });
}
