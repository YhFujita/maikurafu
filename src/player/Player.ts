import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { CONFIG } from '../config.ts';
import { InputHandler } from '../input/InputHandler.ts';
import { World } from '../world/World.ts';
import { SoundManager } from '../system/SoundManager.ts';

export type CameraMode = '1PV' | '3PV_BACK' | '3PV_FRONT';

export class Player {
  public position: THREE.Vector3;
  public camera: THREE.PerspectiveCamera;
  public body: CANNON.Body;

  // アバター関連
  public avatar: THREE.Group;
  private head!: THREE.Mesh;
  private bodyMesh!: THREE.Mesh;
  private leftArm!: THREE.Group;
  private rightArm!: THREE.Group;
  private leftLeg!: THREE.Group;
  private rightLeg!: THREE.Group;
  private cameraMode: CameraMode = '1PV';

  // 武器（剣）関連
  private sword1PV!: THREE.Group;
  private sword3PV!: THREE.Group;
  private swingTime: number = 0;

  // サバイバル関連
  public hp: number = CONFIG.PLAYER_MAX_HP;
  private isDead: boolean = false;
  private spawnPosition: THREE.Vector3;

  // 回転状態 (ラジアン)
  private pitch: number = 0;
  private yaw: number = 0;

  private sensitivity: number = 0.002;
  private speed: number = CONFIG.PLAYER_SPEED;
  private jumpForce: number = CONFIG.PLAYER_JUMP_FORCE;

  // 接地判定用の簡易フラグ
  private isGrounded: boolean = false;
  private lastVelocityY: number = 0; // 落下ダメージ計算用

  // メモリ4GB最適化のための使い回し用オブジェクト（GC削減）
  private static tempVec3 = new THREE.Vector3();
  private static tempVec3_2 = new THREE.Vector3();
  private static tempQuat = new THREE.Quaternion();
  private static tempQuat_2 = new THREE.Quaternion();
  private static tempDirection = new THREE.Vector3();

  constructor(camera: THREE.PerspectiveCamera, startPos: THREE.Vector3, world: CANNON.World, scene: THREE.Scene) {
    this.camera = camera;
    this.position = startPos.clone();
    this.spawnPosition = startPos.clone();

    // プレイヤーの物理剛体 (Box) を作成
    const halfWidth = CONFIG.PLAYER_RADIUS;
    const halfHeight = CONFIG.PLAYER_HEIGHT / 2;
    const shape = new CANNON.Box(new CANNON.Vec3(halfWidth, halfHeight, halfWidth));

    this.body = new CANNON.Body({
      mass: 60, // 質量 (kg)
      shape: shape,
      position: new CANNON.Vec3(startPos.x, startPos.y + halfHeight, startPos.z),
      fixedRotation: true, // 回転を固定 (倒れないようにする)
      linearDamping: 0.1,  // 空気抵抗
    });

    world.addBody(this.body);

    // アバターの構築
    this.avatar = new THREE.Group();
    this.buildAvatar();
    scene.add(this.avatar);

    // 剣モデルの構築とアタッチ
    this.sword1PV = this.buildSword();
    this.sword1PV.position.set(0.24, -0.24, -0.38);
    this.sword1PV.rotation.set(
      (-30 * Math.PI) / 180, // 前に少し倒す
      (45 * Math.PI) / 180,  // 斜めに向ける
      (15 * Math.PI) / 180
    );
    this.camera.add(this.sword1PV);

    this.sword3PV = this.buildSword();
    this.sword3PV.position.set(0, -0.6, 0.1);
    this.sword3PV.rotation.x = Math.PI / 2; // 前方に持たせる
    this.rightArm.add(this.sword3PV);

    // カメラの初期同期
    this.syncCamera();
  }

  // マインクラフト風アバターの構築
  private buildAvatar(): void {
    // マテリアルの定義（使い回しでGC削減）
    const headMat = new THREE.MeshStandardMaterial({ color: 0xffdbac, roughness: 0.9 }); // 肌色
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x0080ff, roughness: 0.9 }); // 青シャツ
    const armMat = new THREE.MeshStandardMaterial({ color: 0xffdbac, roughness: 0.9 });  // 肌色
    const legMat = new THREE.MeshStandardMaterial({ color: 0x2b2b80, roughness: 0.9 });  // 青ズボン
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x5a3d28, roughness: 0.9 }); // 髪

    // 頭（頭＋髪の二重構造で立体的に）
    const headGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.y = 0.5;
    this.head.castShadow = true;
    this.head.receiveShadow = true;

    const hairGeo = new THREE.BoxGeometry(0.42, 0.15, 0.42);
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.y = 0.15;
    this.head.add(hair);
    this.avatar.add(this.head);

    // 胴体
    const bodyGeo = new THREE.BoxGeometry(0.4, 0.6, 0.2);
    this.bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    this.bodyMesh.position.y = 0.0;
    this.bodyMesh.castShadow = true;
    this.bodyMesh.receiveShadow = true;
    this.avatar.add(this.bodyMesh);

    // 腕と脚は肩・股関節を軸に回転させるため、Pivot用Groupを噛ませる
    const limbGeo = new THREE.BoxGeometry(0.2, 0.6, 0.2);
    // ジオメトリの原点を下部にオフセットすることで、PivotGroupの回転中心が肩・股関節になる
    limbGeo.translate(0, -0.3, 0);

    // 左腕
    this.leftArm = new THREE.Group();
    const leftArmMesh = new THREE.Mesh(limbGeo, armMat);
    leftArmMesh.castShadow = true;
    leftArmMesh.receiveShadow = true;
    this.leftArm.add(leftArmMesh);
    this.leftArm.position.set(0.3, 0.3, 0);
    this.avatar.add(this.leftArm);

    // 右腕
    this.rightArm = new THREE.Group();
    const rightArmMesh = new THREE.Mesh(limbGeo, armMat);
    rightArmMesh.castShadow = true;
    rightArmMesh.receiveShadow = true;
    this.rightArm.add(rightArmMesh);
    this.rightArm.position.set(-0.3, 0.3, 0);
    this.avatar.add(this.rightArm);

    // 左脚
    this.leftLeg = new THREE.Group();
    const leftLegMesh = new THREE.Mesh(limbGeo, legMat);
    leftLegMesh.castShadow = true;
    leftLegMesh.receiveShadow = true;
    this.leftLeg.add(leftLegMesh);
    this.leftLeg.position.set(0.1, -0.3, 0);
    this.avatar.add(this.leftLeg);

    // 右脚
    this.rightLeg = new THREE.Group();
    const rightLegMesh = new THREE.Mesh(limbGeo, legMat);
    rightLegMesh.castShadow = true;
    rightLegMesh.receiveShadow = true;
    this.rightLeg.add(rightLegMesh);
    this.rightLeg.position.set(-0.1, -0.3, 0);
    this.avatar.add(this.rightLeg);
  }

  private buildSword(): THREE.Group {
    const sword = new THREE.Group();

    // マテリアル定義
    const bladeMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.3, metalness: 0.8 });
    const guardMat = new THREE.MeshStandardMaterial({ color: 0xeab308, roughness: 0.5, metalness: 0.5 });
    const gripMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });

    // 刃
    const bladeGeo = new THREE.BoxGeometry(0.06, 0.45, 0.02);
    bladeGeo.translate(0, 0.225, 0);
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.castShadow = true;
    blade.receiveShadow = true;
    blade.position.y = 0.02;
    sword.add(blade);

    // 鍔
    const guardGeo = new THREE.BoxGeometry(0.16, 0.04, 0.04);
    const guard = new THREE.Mesh(guardGeo, guardMat);
    guard.castShadow = true;
    guard.receiveShadow = true;
    guard.position.y = 0;
    sword.add(guard);

    // 柄
    const gripGeo = new THREE.BoxGeometry(0.04, 0.12, 0.04);
    gripGeo.translate(0, -0.06, 0);
    const grip = new THREE.Mesh(gripGeo, gripMat);
    grip.castShadow = true;
    grip.receiveShadow = true;
    grip.position.y = -0.02;
    sword.add(grip);

    return sword;
  }

  public update(input: InputHandler, deltaTime: number, voxelWorld: World, activeBlockType: number): void {
    // 死亡時は更新処理を行わない
    if (this.isDead) return;

    // F5キーで視点モード切り替え
    if (input.consumeJustPressed('F5')) {
      if (this.cameraMode === '1PV') {
        this.cameraMode = '3PV_BACK';
      } else if (this.cameraMode === '3PV_BACK') {
        this.cameraMode = '3PV_FRONT';
      } else {
        this.cameraMode = '1PV';
      }
    }

    // 物理ボディから位置を同期
    this.position.set(this.body.position.x, this.body.position.y, this.body.position.z);

    if (!input.isLocked) {
      this.body.velocity.x *= 0.8;
      this.body.velocity.z *= 0.8;
      return;
    }

    // 剣の可視化状態の同期 (BlockType.SWORD = 14)
    const hasSword = (activeBlockType === 14);
    if (this.cameraMode === '1PV') {
      this.sword1PV.visible = hasSword;
      this.sword3PV.visible = false;
    } else {
      this.sword1PV.visible = false;
      this.sword3PV.visible = hasSword;
    }

    this.handleRotation(input);
    this.checkGrounded(voxelWorld);
    this.handleMovement(input, deltaTime);
    this.animateAvatar(deltaTime);
    this.syncCamera();
    this.updateHUD();
  }

  // マウス入力による視点回転
  private handleRotation(input: InputHandler): void {
    const mouseDelta = input.consumeMouseDelta();

    this.yaw -= mouseDelta.x * this.sensitivity;
    this.pitch -= mouseDelta.y * this.sensitivity;

    const limit = (85 * Math.PI) / 180;
    this.pitch = Math.max(-limit, Math.min(limit, this.pitch));
  }

  // 接地状態の判定と落下ダメージの処理
  private checkGrounded(voxelWorld: World): void {
    const feetY = this.position.y - CONFIG.PLAYER_HEIGHT / 2 - 0.1;
    
    const checkPoints = [
      { x: this.position.x, z: this.position.z },
      { x: this.position.x - 0.3, z: this.position.z - 0.3 },
      { x: this.position.x + 0.3, z: this.position.z - 0.3 },
      { x: this.position.x - 0.3, z: this.position.z + 0.3 },
      { x: this.position.x + 0.3, z: this.position.z + 0.3 }
    ];

    let onSolidBlock = false;
    for (const pt of checkPoints) {
      const blockX = Math.floor(pt.x);
      const blockY = Math.floor(feetY);
      const blockZ = Math.floor(pt.z);
      
      if (voxelWorld.getBlock(blockX, blockY, blockZ) !== 0) {
        onSolidBlock = true;
        break;
      }
    }

    const currentGrounded = onSolidBlock || Math.abs(this.body.velocity.y) < 0.05;

    // 着地した瞬間に落下ダメージ判定
    if (currentGrounded && !this.isGrounded) {
      // 直前の落下速度が一定以上であればダメージ
      if (this.lastVelocityY < CONFIG.FALL_DAMAGE_MIN_SPEED) {
        const damage = Math.floor((CONFIG.FALL_DAMAGE_MIN_SPEED - this.lastVelocityY) * CONFIG.FALL_DAMAGE_FACTOR);
        if (damage > 0) {
          this.takeDamage(damage);
        }
      }
    }

    this.isGrounded = currentGrounded;
    this.lastVelocityY = this.body.velocity.y; // 落下速度を記録
  }

  public takeDamage(amount: number): void {
    if (this.isDead) return;
    this.hp = Math.max(0, this.hp - amount);
    
    // ダメージ効果音の再生
    SoundManager.playDamage();

    // 赤く点滅するフラッシュ表現（簡易）
    const overlay = document.getElementById('damage-overlay');
    if (overlay) {
      overlay.style.opacity = '0.5';
      setTimeout(() => { overlay.style.opacity = '0'; }, 150);
    }

    if (this.hp <= 0) {
      this.die();
    }
  }

  private die(): void {
    this.isDead = true;
    this.body.velocity.set(0, 0, 0);

    const deathScreen = document.getElementById('death-screen');
    if (deathScreen) deathScreen.style.display = 'flex';
    
    document.exitPointerLock();
  }

  public respawn(): void {
    this.hp = CONFIG.PLAYER_MAX_HP;
    this.isDead = false;
    this.body.position.set(this.spawnPosition.x, this.spawnPosition.y + CONFIG.PLAYER_HEIGHT / 2, this.spawnPosition.z);
    this.body.velocity.set(0, 0, 0);
    this.lastVelocityY = 0;
    this.pitch = 0;
    this.yaw = 0;

    const deathScreen = document.getElementById('death-screen');
    if (deathScreen) deathScreen.style.display = 'none';

    const overlay = document.getElementById('menu-overlay');
    if (overlay) overlay.style.display = 'flex';
  }

  // キー入力による移動 (物理ボディへの速度設定)
  private handleMovement(input: InputHandler, _deltaTime: number): void {
    const moveVector = Player.tempVec3.set(0, 0, 0);

    if (input.isActionActive('forward')) moveVector.z -= 1;
    if (input.isActionActive('backward')) moveVector.z += 1;
    if (input.isActionActive('left')) moveVector.x -= 1;
    if (input.isActionActive('right')) moveVector.x += 1;

    moveVector.normalize();

    const direction = Player.tempDirection.copy(moveVector);
    direction.applyAxisAngle(Player.tempVec3_2.set(0, 1, 0), this.yaw);

    // ダッシュ判定 (Shiftキーが押されている間は1.5倍速)
    const isSprinting = input.keys['ShiftLeft'] || input.keys['ShiftRight'];
    const currentSpeed = isSprinting ? this.speed * 1.5 : this.speed;

    this.body.velocity.x = direction.x * currentSpeed;
    this.body.velocity.z = direction.z * currentSpeed;

    // ジャンプ
    if (input.isActionActive('jump') && this.isGrounded) {
      this.body.velocity.y = this.jumpForce;
      this.isGrounded = false;
      SoundManager.playJump();
    }
  }


  private animateAvatar(deltaTime: number): void {
    // アバターグループの位置をプレイヤー座標に同期
    this.avatar.position.copy(this.position);
    
    // アバターの向きをヨー回転（左右）に同期
    this.avatar.rotation.y = this.yaw;

    // 頭のピッチ（上下）の同期
    this.head.rotation.x = this.pitch;

    // 歩行アニメーションの計算
    const speedSq = this.body.velocity.x * this.body.velocity.x + this.body.velocity.z * this.body.velocity.z;
    const isMoving = speedSq > 0.1 && this.isGrounded;

    if (isMoving) {
      const time = performance.now() * 0.01;
      const angle = Math.sin(time) * 0.8; // スイング幅の最大値

      this.leftArm.rotation.x = angle;
      if (this.swingTime <= 0) {
        this.rightArm.rotation.x = -angle;
      }
      this.leftLeg.rotation.x = -angle;
      this.rightLeg.rotation.x = angle;
    } else {
      // 立ち止まっている時は手足を滑らかに直立に戻す
      const lerpFactor = 10 * deltaTime;
      this.leftArm.rotation.x += (0 - this.leftArm.rotation.x) * lerpFactor;
      if (this.swingTime <= 0) {
        this.rightArm.rotation.x += (0 - this.rightArm.rotation.x) * lerpFactor;
      }
      this.leftLeg.rotation.x += (0 - this.leftLeg.rotation.x) * lerpFactor;
      this.rightLeg.rotation.x += (0 - this.rightLeg.rotation.x) * lerpFactor;
    }

    // スイングアニメーションの更新
    if (this.swingTime > 0) {
      this.swingTime -= deltaTime;
      const progress = (0.15 - this.swingTime) / 0.15; // 0.0 -> 1.0
      const swingAngle = Math.sin(progress * Math.PI) * 1.2; // スイング幅

      if (this.cameraMode === '1PV') {
        // 一人称：画面右下の剣を前に突き出すように振る
        this.sword1PV.rotation.x = (-30 * Math.PI) / 180 + swingAngle;
        this.sword1PV.rotation.y = (45 * Math.PI) / 180 - swingAngle * 0.5;
        this.sword1PV.position.z = -0.38 + swingAngle * 0.15;
      } else {
        // 三人称：アバターの右腕を前方に大きくスイング
        this.rightArm.rotation.x = -Math.PI / 3 - swingAngle * 1.5;
        this.rightArm.rotation.y = -swingAngle * 0.5;
      }
    } else {
      // 待機時の位置補正 (一人称用)
      if (this.cameraMode === '1PV') {
        this.sword1PV.rotation.set(
          (-30 * Math.PI) / 180,
          (45 * Math.PI) / 180,
          (15 * Math.PI) / 180
        );
        this.sword1PV.position.set(0.24, -0.24, -0.38);
      }
    }
  }

  // カメラの位置と回転をプレイヤーに同期
  private syncCamera(): void {
    const qYaw = Player.tempQuat.setFromAxisAngle(Player.tempVec3.set(0, 1, 0), this.yaw);
    const qPitch = Player.tempQuat_2.setFromAxisAngle(Player.tempVec3_2.set(1, 0, 0), this.pitch);
    const cameraRotation = Player.tempQuat.multiplyQuaternions(qYaw, qPitch);
    this.camera.quaternion.copy(cameraRotation);

    const eyeHeight = CONFIG.PLAYER_HEIGHT / 2 - 0.2;

    if (this.cameraMode === '1PV') {
      // 一人称視点
      this.camera.position.set(
        this.position.x,
        this.position.y + eyeHeight,
        this.position.z
      );
      this.avatar.visible = false;
    } else {
      // 三人称視点
      this.avatar.visible = true;
      this.head.visible = (this.cameraMode !== '3PV_FRONT'); // 前方から自分を見る時は頭が見えるように

      const dist = 4.0;
      const offset = Player.tempVec3.set(0, eyeHeight + 0.4, 0);
      
      // カメラ方向ベクトル
      const lookDir = Player.tempVec3_2.set(0, 0, -1).applyQuaternion(cameraRotation);
      
      if (this.cameraMode === '3PV_BACK') {
        // 後方から追従
        this.camera.position.copy(this.position).add(offset).sub(lookDir.multiplyScalar(dist));
      } else {
        // 前方から対面
        this.camera.position.copy(this.position).add(offset).add(lookDir.multiplyScalar(dist));
        this.camera.lookAt(this.position.x, this.position.y + eyeHeight, this.position.z);
      }
    }
  }

  private updateHUD(): void {
    const posDisplay = document.getElementById('pos-display');
    if (posDisplay) {
      posDisplay.textContent = `${this.position.x.toFixed(1)}, ${this.position.y.toFixed(1)}, ${this.position.z.toFixed(1)}`;
    }
  }

  public swing(): void {
    if (this.swingTime <= 0) {
      this.swingTime = 0.15; // 0.15秒のタイマーを設定
    }
  }

  public getYaw(): number {
    return this.yaw;
  }

  // セーブデータ用：プレイヤーの位置、HP、向きを取得
  public getSaveData(): {
    x: number;
    y: number;
    z: number;
    hp: number;
    yaw: number;
    pitch: number;
  } {
    return {
      x: this.body.position.x,
      y: this.body.position.y,
      z: this.body.position.z,
      hp: this.hp,
      yaw: this.yaw,
      pitch: this.pitch,
    };
  }

  // ロードデータ用：プレイヤーの位置、HP、向きを復元・同期
  public loadSaveData(data: {
    x: number;
    y: number;
    z: number;
    hp: number;
    yaw: number;
    pitch: number;
  }): void {
    if (!data) return;

    this.hp = typeof data.hp === 'number' ? data.hp : CONFIG.PLAYER_MAX_HP;
    this.isDead = this.hp <= 0;

    // 死亡画面の表示状態を更新
    const deathScreen = document.getElementById('death-screen');
    if (deathScreen) {
      deathScreen.style.display = this.isDead ? 'flex' : 'none';
    }

    this.yaw = typeof data.yaw === 'number' ? data.yaw : 0;
    this.pitch = typeof data.pitch === 'number' ? data.pitch : 0;

    // 物理剛体の位置と速度を同期
    this.body.position.set(data.x, data.y, data.z);
    this.body.velocity.set(0, 0, 0);
    this.lastVelocityY = 0;

    // プレイヤーのグラフィック表現位置の同期
    this.position.set(data.x, data.y, data.z);

    // カメラとアバター描画の即時更新
    this.syncCamera();
    this.updateHUD();
  }
}

