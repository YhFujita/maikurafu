import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { CONFIG } from '../config.ts';
import { BlockType } from '../world/Block.ts';

// 各ブロックタイプに応じたミニブロックの色の定義
const ITEM_COLORS: Record<number, number> = {
  [BlockType.GROUND]: 0x4ade80,
  [BlockType.DIRT]: 0x854d0e,
  [BlockType.STONE]: 0x9ca3af,
  [BlockType.WOOD]: 0x78350f,
  [BlockType.LEAVES]: 0x22c55e,
  [BlockType.PLANK]: 0xf59e0b,
  [BlockType.BRICK]: 0xef4444,
  [BlockType.SAND]: 0xfef08a,
  [BlockType.COAL_ORE]: 0x374151,
  [BlockType.TORCH]: 0xf97316,
  [BlockType.GLASS]: 0xe0f2fe,
  [BlockType.DOOR_CLOSED]: 0xb45309,
  [BlockType.SWORD]: 0xcccccc,
};

export class DroppedItem {
  public blockType: BlockType;
  public mesh: THREE.Mesh;
  public body: CANNON.Body;
  
  private scene: THREE.Scene;
  private physicsWorld: CANNON.World;
  private age: number = 0;
  private isAttracted: boolean = false; // プレイヤーに引き寄せられている状態

  // メモリ最適化：共有ジオメトリとマテリアルプールでGCを極限まで低減
  private static sharedGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  private static materialPool = new Map<number, THREE.Material>();

  // 一時的なベクトル（GC削減のため静的メンバーで再利用）
  private static tempVec3 = new THREE.Vector3();
  private static tempVec3_2 = new THREE.Vector3();

  constructor(
    blockType: BlockType,
    pos: THREE.Vector3,
    scene: THREE.Scene,
    physicsWorld: CANNON.World
  ) {
    this.blockType = blockType;
    this.scene = scene;
    this.physicsWorld = physicsWorld;

    // マテリアルの共有プールからの取得または新規作成
    let mat = DroppedItem.materialPool.get(blockType);
    if (!mat) {
      const color = ITEM_COLORS[blockType] || 0xffffff;
      mat = new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.8,
        metalness: 0.1,
      });
      DroppedItem.materialPool.set(blockType, mat);
    }

    // メッシュの作成
    this.mesh = new THREE.Mesh(DroppedItem.sharedGeometry, mat);
    this.mesh.position.copy(pos);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.scene.add(this.mesh);

    // 物理ボディの作成
    const shape = new CANNON.Box(new CANNON.Vec3(0.1, 0.1, 0.1));
    this.body = new CANNON.Body({
      mass: 1.0,
      shape: shape,
      position: new CANNON.Vec3(pos.x, pos.y, pos.z),
    });

    // 飛び散るような初期ランダム初速度を追加
    this.body.velocity.set(
      (Math.random() - 0.5) * 4,
      Math.random() * 4 + 2,
      (Math.random() - 0.5) * 4
    );

    this.physicsWorld.addBody(this.body);
  }

  public update(deltaTime: number, playerPosition: THREE.Vector3): boolean {
    this.age += deltaTime;

    // 消滅時間の上限を超えていたら消去対象にする (メモリリーク防止)
    if (this.age > CONFIG.ITEM_DESPAWN_TIME) {
      this.destroy();
      return true;
    }

    // プレイヤーとの距離を計算
    const itemPos = DroppedItem.tempVec3.set(this.body.position.x, this.body.position.y, this.body.position.z);
    const dist = itemPos.distanceTo(playerPosition);

    if (dist < CONFIG.ITEM_PICKUP_RADIUS) {
      // 引き寄せ処理
      this.isAttracted = true;
      
      // 物理エンジンから除外（手動でプレイヤーに引き寄せるため）
      if (this.body.world) {
        this.physicsWorld.removeBody(this.body);
      }

      // プレイヤーへの方向ベクトル
      const dir = DroppedItem.tempVec3_2.copy(playerPosition).sub(itemPos).normalize();
      
      // 徐々に加速してプレイヤーに吸い込まれる
      const speed = 22.0; // プレイヤーの移動速度（最大18m/s）に対抗するため22.0m/sに向上
      itemPos.add(dir.multiplyScalar(speed * deltaTime));
      this.mesh.position.copy(itemPos);

      // 回収判定（非常に近い位置に到達）
      if (dist < 0.5) {
        this.destroy();
        return true; // 回収されたので配列から削除するフラグ
      }
    } else {
      // 通常の物理挙動同期
      if (this.isAttracted) {
        // 万が一、引き寄せ中にプレイヤーから離れてしまった場合は物理ボディを再追加
        this.isAttracted = false;
        this.body.position.set(this.mesh.position.x, this.mesh.position.y, this.mesh.position.z);
        this.body.velocity.set(0, 0, 0);
        this.physicsWorld.addBody(this.body);
      } else {
        this.mesh.position.set(this.body.position.x, this.body.position.y, this.body.position.z);
        
        // 少し回転アニメーションを加えて可愛らしく見せる
        this.mesh.rotation.x += deltaTime * 2.0;
        this.mesh.rotation.y += deltaTime * 1.5;
      }
    }

    return false;
  }

  // メモリ解放と削除処理の徹底（4GBメモリ最適化）
  public destroy(): void {
    if (this.mesh) {
      this.scene.remove(this.mesh);
      // 注: 共有ジオメトリと共有マテリアルはプールしているため dispose しない。
      // 個別に dispose すると他のが消える。これで正常。
    }
    if (this.body.world) {
      this.physicsWorld.removeBody(this.body);
    }
  }
}
