import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { CONFIG } from '../config.ts';
import { Player } from '../player/Player.ts';

export class Mob {
  public mesh: THREE.Group;
  public body: CANNON.Body;
  public hp: number = 4; // ゾンビの体力

  private scene: THREE.Scene;
  private physicsWorld: CANNON.World;
  
  // アバターパーツ
  private head!: THREE.Mesh;
  private leftLeg!: THREE.Group;
  private rightLeg!: THREE.Group;
  
  // 状態管理
  private speed: number = 3.0; // プレイヤーより遅め
  private jumpForce: number = 6.0;
  private attackCooldown: number = 0;
  private damageFlashTime: number = 0;
  
  // メモリ4GB最適化：アセットの共有
  private static sharedHeadGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
  private static sharedBodyGeo = new THREE.BoxGeometry(0.4, 0.6, 0.2);
  private static sharedLimbGeo = new THREE.BoxGeometry(0.2, 0.6, 0.2);

  // ゾンビ用共有マテリアル
  private static zombieGreenMat = new THREE.MeshStandardMaterial({ color: 0x55aa55, roughness: 0.9 }); // 緑の肌
  private static zombieBlueMat = new THREE.MeshStandardMaterial({ color: 0x334e68, roughness: 0.9 });  // 青い服
  private static zombiePurpleMat = new THREE.MeshStandardMaterial({ color: 0x482c5b, roughness: 0.9 }); // 紫のズボン
  private static damageMat = new THREE.MeshStandardMaterial({ color: 0xff3333, roughness: 0.5 }); // 被ダメージ時の赤

  // 一時用オブジェクト（GC削減）
  private static tempVec3 = new THREE.Vector3();
  private static tempDirection = new THREE.Vector3();

  constructor(
    pos: THREE.Vector3,
    scene: THREE.Scene,
    physicsWorld: CANNON.World
  ) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;

    // 物理ボディの作成 (プレイヤーより少しスリムなBox)
    const halfWidth = 0.35;
    const halfHeight = 0.9;
    const shape = new CANNON.Box(new CANNON.Vec3(halfWidth, halfHeight, halfWidth));

    this.body = new CANNON.Body({
      mass: 50,
      shape: shape,
      position: new CANNON.Vec3(pos.x, pos.y + halfHeight, pos.z),
      fixedRotation: true,
      linearDamping: 0.1,
    });

    this.physicsWorld.addBody(this.body);

    // 3Dアバターの構築
    this.mesh = new THREE.Group();
    this.buildAvatar();
    this.scene.add(this.mesh);
  }

  private buildAvatar(): void {
    const headMat = Mob.zombieGreenMat;
    const bodyMat = Mob.zombieBlueMat;
    const limbMat = Mob.zombieGreenMat;
    const legMat = Mob.zombiePurpleMat;

    // 頭
    this.head = new THREE.Mesh(Mob.sharedHeadGeo, headMat);
    this.head.position.y = 0.5;
    this.head.castShadow = true;
    this.head.receiveShadow = true;
    this.mesh.add(this.head);

    // 胴体
    const bodyMesh = new THREE.Mesh(Mob.sharedBodyGeo, bodyMat);
    bodyMesh.position.y = 0.0;
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    this.mesh.add(bodyMesh);

    // 腕と脚（ピボット移動のためtranslate適用）
    const limbGeo = Mob.sharedLimbGeo.clone();
    limbGeo.translate(0, -0.3, 0);

    // 左腕（ゾンビらしく前へ突き出す）
    const leftArm = new THREE.Group();
    const leftArmMesh = new THREE.Mesh(limbGeo, limbMat);
    leftArmMesh.castShadow = true;
    leftArmMesh.receiveShadow = true;
    leftArm.add(leftArmMesh);
    leftArm.position.set(0.3, 0.3, 0);
    leftArm.rotation.x = -Math.PI / 2; // 前に突き出し
    this.mesh.add(leftArm);

    // 右腕（前へ突き出す）
    const rightArm = new THREE.Group();
    const rightArmMesh = new THREE.Mesh(limbGeo, limbMat);
    rightArmMesh.castShadow = true;
    rightArmMesh.receiveShadow = true;
    rightArm.add(rightArmMesh);
    rightArm.position.set(-0.3, 0.3, 0);
    rightArm.rotation.x = -Math.PI / 2; // 前に突き出し
    this.mesh.add(rightArm);

    // 左脚
    this.leftLeg = new THREE.Group();
    const leftLegMesh = new THREE.Mesh(limbGeo, legMat);
    leftLegMesh.castShadow = true;
    leftLegMesh.receiveShadow = true;
    this.leftLeg.add(leftLegMesh);
    this.leftLeg.position.set(0.1, -0.3, 0);
    this.mesh.add(this.leftLeg);

    // 右脚
    this.rightLeg = new THREE.Group();
    const rightLegMesh = new THREE.Mesh(limbGeo, legMat);
    rightLegMesh.castShadow = true;
    rightLegMesh.receiveShadow = true;
    this.rightLeg.add(rightLegMesh);
    this.rightLeg.position.set(-0.1, -0.3, 0);
    this.mesh.add(this.rightLeg);
  }

  public update(deltaTime: number, player: Player): boolean {
    // 遠すぎるMobは自動消滅（デスポーン：4GBメモリ負荷対策）
    const pPos = player.position;
    const mobPos = Mob.tempVec3.set(this.body.position.x, this.body.position.y, this.body.position.z);
    const dist = mobPos.distanceTo(pPos);

    if (dist > CONFIG.MOB_DESPAWN_RADIUS) {
      this.destroy();
      return true; // 配列から除外するフラグ
    }

    // ダメージフラッシュ（赤色）のタイマー更新
    if (this.damageFlashTime > 0) {
      this.damageFlashTime -= deltaTime;
      if (this.damageFlashTime <= 0) {
        // 元のマテリアルに戻す
        this.setMaterials(false);
      }
    }

    // プレイヤーが死んでいなければ追跡AIを実行
    if (player.hp > 0) {
      this.runAI(deltaTime, pPos, dist, player);
    } else {
      this.body.velocity.x *= 0.8;
      this.body.velocity.z *= 0.8;
    }

    // メッシュの位置と回転を同期
    this.mesh.position.set(this.body.position.x, this.body.position.y, this.body.position.z);
    
    // アニメーション（脚のスイング）
    const speedSq = this.body.velocity.x * this.body.velocity.x + this.body.velocity.z * this.body.velocity.z;
    if (speedSq > 0.1) {
      const time = performance.now() * 0.01;
      const angle = Math.sin(time) * 0.8;
      this.leftLeg.rotation.x = -angle;
      this.rightLeg.rotation.x = angle;
    } else {
      this.leftLeg.rotation.x = 0;
      this.rightLeg.rotation.x = 0;
    }

    return false;
  }

  private runAI(deltaTime: number, pPos: THREE.Vector3, dist: number, player: Player): void {
    // プレイヤーとの水平方向のベクトル
    const dir = Mob.tempDirection.set(pPos.x - this.body.position.x, 0, pPos.z - this.body.position.z);
    dir.normalize();

    // プレイヤーの方向を向く
    const targetAngle = Math.atan2(dir.x, dir.z);
    this.mesh.rotation.y = targetAngle;

    // 追跡範囲内（例：25マス以内）に入ったら移動する
    if (dist < CONFIG.MOB_SPAWN_RADIUS) {
      this.body.velocity.x = dir.x * this.speed;
      this.body.velocity.z = dir.z * this.speed;

      // 障害物の自動ジャンプ判定
      // 水平速度が目標よりも大幅に遅い＝壁に引っかかっているとみなす
      const currentSpeedSq = this.body.velocity.x * this.body.velocity.x + this.body.velocity.z * this.body.velocity.z;
      const targetSpeedSq = this.speed * this.speed;
      const isBlocked = (currentSpeedSq < targetSpeedSq * 0.25);
      
      // 接地状態のチェック（Y方向の速度がほぼ0の場合のみジャンプを許可）
      const isGrounded = Math.abs(this.body.velocity.y) < 0.02;

      if (isBlocked && isGrounded) {
        this.body.velocity.y = this.jumpForce;
      }
    } else {
      // 範囲外なら減速して停止
      this.body.velocity.x *= 0.8;
      this.body.velocity.z *= 0.8;
    }

    // 攻撃処理（接触したプレイヤーにダメージ）
    if (this.attackCooldown > 0) {
      this.attackCooldown -= deltaTime;
    }

    if (dist < 1.3 && this.attackCooldown <= 0) {
      player.takeDamage(2); // ハート1個分ダメージ
      this.attackCooldown = 1.2; // クールダウン1.2秒
    }
  }

  // プレイヤーからの被ダメージ
  public takeDamage(amount: number, knockbackDir: THREE.Vector3): boolean {
    this.hp -= amount;
    this.damageFlashTime = 0.2; // 0.2秒間赤くフラッシュ
    this.setMaterials(true);

    // ノックバック処理
    this.body.velocity.y = 4.0; // 少し上に弾む
    this.body.velocity.x = knockbackDir.x * 6.0;
    this.body.velocity.z = knockbackDir.z * 6.0;

    if (this.hp <= 0) {
      this.destroy();
      return true; // 死亡
    }
    return false;
  }

  // 被ダメージ時の赤フラッシュの切り替え
  private setMaterials(isDamaged: boolean): void {
    // 子メッシュ全てのカラーを一時的に赤に置き換える
    this.mesh.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (isDamaged) {
          child.material = Mob.damageMat;
        } else {
          // 元のマテリアルに戻す
          if (child === this.head || child.parent === this.head) {
            child.material = Mob.zombieGreenMat;
          } else if (child.name === 'hair') {
            child.material = new THREE.MeshStandardMaterial({ color: 0x5a3d28, roughness: 0.9 });
          } else if (child.position.y === 0.0) {
            child.material = Mob.zombieBlueMat; // 胴体
          } else if (child.position.y === -0.3 || child.parent?.position.y === -0.3) {
            child.material = Mob.zombiePurpleMat; // 脚
          } else {
            child.material = Mob.zombieGreenMat; // 腕
          }
        }
      }
    });
  }

  public destroy(): void {
    if (this.mesh) {
      this.scene.remove(this.mesh);
    }
    if (this.body.world) {
      this.physicsWorld.removeBody(this.body);
    }
  }
}
