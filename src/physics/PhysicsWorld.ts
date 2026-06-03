import * as CANNON from 'cannon-es';
import * as THREE from 'three';
import { CONFIG } from '../config.ts';
import { World } from '../world/World.ts';
import { BLOCKS } from '../world/Block.ts';

export class PhysicsWorld {
  public world: CANNON.World;
  public playerMaterial: CANNON.Material;
  
  // アクティブなブロックの物理ボディを座標キー "x,y,z" で保持
  private blockBodies: Map<string, CANNON.Body> = new Map();
  // 共通のブロック形状 (ハーフサイズ 0.5m)
  private blockShape: CANNON.Box;

  constructor() {
    this.world = new CANNON.World();
    this.world.gravity.set(0, CONFIG.GRAVITY, 0);

    this.world.broadphase = new CANNON.SAPBroadphase(this.world);
    (this.world.solver as any).iterations = 5;

    const defaultMaterial = new CANNON.Material('default');
    const defaultContactMaterial = new CANNON.ContactMaterial(
      defaultMaterial,
      defaultMaterial,
      {
        friction: 0.1,
        restitution: 0.0,
      }
    );
    this.world.addContactMaterial(defaultContactMaterial);
    this.world.defaultContactMaterial = defaultContactMaterial;

    // プレイヤー専用マテリアルと接触マテリアル（段差引っかかり防止）
    this.playerMaterial = new CANNON.Material('player');
    const playerContactMaterial = new CANNON.ContactMaterial(
      this.playerMaterial,
      defaultMaterial,
      {
        friction: 0.0, // 摩擦ゼロ
        restitution: 0.0,
      }
    );
    this.world.addContactMaterial(playerContactMaterial);

    // 1辺1mのブロック用衝突形状
    this.blockShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));

    // 万が一の奈落落下防止プレート (Y = -50)
    const groundBody = new CANNON.Body({
      mass: 0,
      shape: new CANNON.Plane(),
    });
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    groundBody.position.set(0, -50, 0);
    this.world.addBody(groundBody);
  }

  // プレイヤー周辺のソリッドブロックに対して、物理ボディを動的に追加・削除する (超軽量化)
  public updateBlockBodies(playerPos: THREE.Vector3, voxelWorld: World): void {
    // プレイヤーの周辺検出範囲 (半径数マス)
    // 範囲が広すぎると重くなり、狭すぎると衝突前にすり抜ける。3〜4マスが適切。
    const radius = 3;
    const px = Math.floor(playerPos.x);
    const py = Math.floor(playerPos.y);
    const pz = Math.floor(playerPos.z);

    const activeKeys = new Set<string>();

    for (let x = px - radius; x <= px + radius; x++) {
      for (let y = py - radius - 1; y <= py + radius; y++) { // 足元カバーのため下方向は1マス広め
        for (let z = pz - radius; z <= pz + radius; z++) {
          const blockType = voxelWorld.getBlock(x, y, z);
          const blockProp = BLOCKS[blockType];

          if (blockProp && blockProp.isSolid) {
            const key = `${x},${y},${z}`;
            activeKeys.add(key);

            // まだ剛体が作成されていなければ作成して追加
            if (!this.blockBodies.has(key)) {
              const body = new CANNON.Body({
                mass: 0, // 静的ボディ
                shape: this.blockShape,
                // ブロックの中心に配置 (グリッドの左手前下が基準なので、+0.5オフセット)
                position: new CANNON.Vec3(x + 0.5, y + 0.5, z + 0.5),
              });
              this.world.addBody(body);
              this.blockBodies.set(key, body);
            }
          }
        }
      }
    }

    // 範囲外になった剛体を削除
    for (const [key, body] of this.blockBodies.entries()) {
      if (!activeKeys.has(key)) {
        this.world.removeBody(body);
        this.blockBodies.delete(key);
      }
    }
  }

  public step(deltaTime: number): void {
    this.world.step(1 / 60, deltaTime, 3);
    
    const bodiesDisplay = document.getElementById('bodies-display');
    if (bodiesDisplay) {
      bodiesDisplay.textContent = this.world.bodies.length.toString();
    }
  }
}
