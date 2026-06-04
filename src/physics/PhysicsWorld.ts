import * as CANNON from 'cannon-es';
import * as THREE from 'three';
import { CONFIG } from '../config.ts';
import { World } from '../world/World.ts';
import { BLOCKS, BlockType } from '../world/Block.ts';

export class PhysicsWorld {
  public world: CANNON.World;
  public playerMaterial: CANNON.Material;
  public defaultMaterial: CANNON.Material;
  
  // アクティブなブロックの物理ボディを座標キー "x,y,z" で保持
  private blockBodies: Map<string, CANNON.Body> = new Map();
  // 共通のブロック形状 (ハーフサイズ 0.5m)
  private blockShape: CANNON.Box;
  private bedShape: CANNON.Box;

  constructor() {
    this.world = new CANNON.World();
    this.world.gravity.set(0, CONFIG.GRAVITY, 0);

    this.world.broadphase = new CANNON.SAPBroadphase(this.world);
    (this.world.solver as any).iterations = 5;

    this.defaultMaterial = new CANNON.Material('default');
    const defaultContactMaterial = new CANNON.ContactMaterial(
      this.defaultMaterial,
      this.defaultMaterial,
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
      this.defaultMaterial,
      {
        friction: 0.0, // 摩擦ゼロ
        restitution: 0.0,
      }
    );
    this.world.addContactMaterial(playerContactMaterial);

    // 1辺1mのブロック用衝突形状
    this.blockShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
    // ベッド用衝突形状 (高さ 9/16 = 0.5625)
    this.bedShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5625 / 2, 0.5));

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
              let shape = this.blockShape;
              let yOffset = 0.5;

              if (blockType === BlockType.BED_HEAD || blockType === BlockType.BED_FOOT) {
                shape = this.bedShape;
                yOffset = 0.5625 / 2;
              }

              const body = new CANNON.Body({
                mass: 0, // 静的ボディ
                shape: shape,
                // ブロックの中心に配置
                position: new CANNON.Vec3(x + 0.5, y + yOffset, z + 0.5),
                material: this.defaultMaterial,
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
