import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { CONFIG } from '../config.ts';
import { InputHandler } from '../input/InputHandler.ts';
import { World } from '../world/World.ts';
import { BlockType } from '../world/Block.ts';
import { SoundManager } from '../system/SoundManager.ts';
import { PhysicsWorld } from '../physics/PhysicsWorld.ts';

export type CameraMode = '1PV' | '3PV_BACK' | '3PV_FRONT';
export type ArmorType = 'none' | 'leather' | 'iron' | 'diamond';

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

  // 防具（着せ替え）関連
  public armorType: ArmorType = 'none';
  private armorMat!: THREE.MeshStandardMaterial;

  // 武器（剣・ハンマー）関連
  private weapons1PV: Record<number, THREE.Group> = {};
  private weapons3PV: Record<number, THREE.Group> = {};
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

  // 接地判定用の簡易フラグ
  private isGrounded: boolean = false;
  private isInWater: boolean = false; // 水中判定フラグを追加
  public isSprintingToggle: boolean = false; // ダッシュのトグルフラグ
  private jumpForce: number = 7.5;
  private lastVelocityY: number = 0; // 落下ダメージ計算用
  
  // ライフ自動回復用タイマー
  public lastDamageTime: number = 0;
  private lastRegenTime: number = 0;

  // ボクセルワールドへの参照（カメラ壁抜け判定に使用）
  private voxelWorld!: World;

  // メモリ4GB最適化のための使い回し用オブジェクト（GC削減）
  private static tempVec3 = new THREE.Vector3();
  private static tempVec3_2 = new THREE.Vector3();
  private static tempQuat = new THREE.Quaternion();
  private static tempQuat_2 = new THREE.Quaternion();
  private static tempDirection = new THREE.Vector3();

  constructor(camera: THREE.PerspectiveCamera, startPos: THREE.Vector3, physics: PhysicsWorld, scene: THREE.Scene) {
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
      material: physics.playerMaterial, // 摩擦ゼロマテリアルをアサイン
    });

    physics.world.addBody(this.body);

    // アバターの構築
    this.avatar = new THREE.Group();
    this.avatar.rotation.order = 'YXZ'; // ヨー(Y)で向きを合わせてからピッチ(X)で倒れるようにする
    this.buildAvatar();
    scene.add(this.avatar);
    scene.add(this.camera); // 一人称武器表示のためにカメラをシーンに追加

    // ボクセルワールド参照は後からsetWorldで設定
    // 武器・ツールモデルの構築とアタッチ
    const toolConfigs: Record<number, { creator: () => THREE.Group }> = {
      14: { creator: () => this.buildSword(0xcccccc, 0x78350f, 0xeab308) }, // 石の剣
      22: { creator: () => this.buildSword(0x00ffff, 0x78350f, 0x0088ff) }, // ダイヤの剣
      23: { creator: () => this.buildHammer() }, // ハンマー
      // ツルハシ
      35: { creator: () => this.buildPickaxe(0x8b5a2b) }, // 木のツルハシ
      36: { creator: () => this.buildPickaxe(0x888888) }, // 石のツルハシ
      37: { creator: () => this.buildPickaxe(0xdddddd) }, // 鉄のツルハシ
      38: { creator: () => this.buildPickaxe(0x00ffff) }, // ダイヤのツルハシ
      // 斧
      39: { creator: () => this.buildAxe(0x8b5a2b) }, // 木の斧
      40: { creator: () => this.buildAxe(0x888888) }, // 石の斧
      41: { creator: () => this.buildAxe(0xdddddd) }, // 鉄の斧
      42: { creator: () => this.buildAxe(0x00ffff) }, // ダイヤの斧
      // シャベル
      43: { creator: () => this.buildShovel(0x8b5a2b) }, // 木のシャベル
      44: { creator: () => this.buildShovel(0x888888) }, // 石のシャベル
      45: { creator: () => this.buildShovel(0xdddddd) }, // 鉄のシャベル
      46: { creator: () => this.buildShovel(0x00ffff) }, // ダイヤのシャベル
    };

    for (const typeStr of Object.keys(toolConfigs)) {
      const type = Number(typeStr);
      this.weapons1PV[type] = toolConfigs[type].creator();
      this.weapons3PV[type] = toolConfigs[type].creator();

      this.weapons1PV[type].position.set(0.24, -0.24, -0.38);
      this.weapons1PV[type].rotation.set((-30 * Math.PI) / 180, (45 * Math.PI) / 180, (15 * Math.PI) / 180);
      this.weapons1PV[type].visible = false;
      this.camera.add(this.weapons1PV[type]);

      this.weapons3PV[type].position.set(0, -0.6, 0.1);
      this.weapons3PV[type].rotation.x = Math.PI / 2;
      this.weapons3PV[type].visible = false;
      this.rightArm.add(this.weapons3PV[type]);
    }

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

    // 防具マテリアルの初期化（初期状態は非表示）
    this.armorMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.8,
      metalness: 0.1,
      visible: false
    });

    // 防具用ジオメトリの定義
    const helmetGeo = new THREE.BoxGeometry(0.44, 0.44, 0.44);
    const chestBodyGeo = new THREE.BoxGeometry(0.44, 0.62, 0.24);
    
    // 肩・股関節を軸に動かすため、ジオメトリの原点をオフセット
    const sleeveGeo = new THREE.BoxGeometry(0.24, 0.35, 0.24);
    sleeveGeo.translate(0, -0.175, 0); // 肩〜上腕
    
    const leggingLegGeo = new THREE.BoxGeometry(0.23, 0.4, 0.23);
    leggingLegGeo.translate(0, -0.2, 0); // 脚の上部
    
    const bootGeo = new THREE.BoxGeometry(0.24, 0.2, 0.24);
    bootGeo.translate(0, -0.5, 0); // 脚の下部（足先）

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

    // 兜 (ヘルメット) を頭に追加
    const helmet = new THREE.Mesh(helmetGeo, this.armorMat);
    helmet.castShadow = true;
    helmet.receiveShadow = true;
    this.head.add(helmet);

    this.avatar.add(this.head);

    // 胴体
    const bodyGeo = new THREE.BoxGeometry(0.4, 0.6, 0.2);
    this.bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    this.bodyMesh.position.y = 0.0;
    this.bodyMesh.castShadow = true;
    this.bodyMesh.receiveShadow = true;

    // 鎧 (チェストプレート) の胴体を胴体に追加
    const chestBody = new THREE.Mesh(chestBodyGeo, this.armorMat);
    chestBody.castShadow = true;
    chestBody.receiveShadow = true;
    this.bodyMesh.add(chestBody);

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

    // 鎧の左袖を追加
    const leftSleeve = new THREE.Mesh(sleeveGeo, this.armorMat);
    leftSleeve.castShadow = true;
    leftSleeve.receiveShadow = true;
    leftArmMesh.add(leftSleeve);

    this.leftArm.add(leftArmMesh);
    this.leftArm.position.set(0.3, 0.3, 0);
    this.avatar.add(this.leftArm);

    // 右腕
    this.rightArm = new THREE.Group();
    const rightArmMesh = new THREE.Mesh(limbGeo, armMat);
    rightArmMesh.castShadow = true;
    rightArmMesh.receiveShadow = true;

    // 鎧の右袖を追加
    const rightSleeve = new THREE.Mesh(sleeveGeo, this.armorMat);
    rightSleeve.castShadow = true;
    rightSleeve.receiveShadow = true;
    rightArmMesh.add(rightSleeve);

    this.rightArm.add(rightArmMesh);
    this.rightArm.position.set(-0.3, 0.3, 0);
    this.avatar.add(this.rightArm);

    // 左脚
    this.leftLeg = new THREE.Group();
    const leftLegMesh = new THREE.Mesh(limbGeo, legMat);
    leftLegMesh.castShadow = true;
    leftLegMesh.receiveShadow = true;

    // レギンスの左脚を追加
    const leftLegging = new THREE.Mesh(leggingLegGeo, this.armorMat);
    leftLegging.castShadow = true;
    leftLegging.receiveShadow = true;
    leftLegMesh.add(leftLegging);

    // ブーツの左足を追加
    const leftBoot = new THREE.Mesh(bootGeo, this.armorMat);
    leftBoot.castShadow = true;
    leftBoot.receiveShadow = true;
    leftLegMesh.add(leftBoot);

    this.leftLeg.add(leftLegMesh);
    this.leftLeg.position.set(0.1, -0.3, 0);
    this.avatar.add(this.leftLeg);

    // 右脚
    this.rightLeg = new THREE.Group();
    const rightLegMesh = new THREE.Mesh(limbGeo, legMat);
    rightLegMesh.castShadow = true;
    rightLegMesh.receiveShadow = true;

    // レギンスの右脚を追加
    const rightLegging = new THREE.Mesh(leggingLegGeo, this.armorMat);
    rightLegging.castShadow = true;
    rightLegging.receiveShadow = true;
    rightLegMesh.add(rightLegging);

    // ブーツの右足を追加
    const rightBoot = new THREE.Mesh(bootGeo, this.armorMat);
    rightBoot.castShadow = true;
    rightBoot.receiveShadow = true;
    rightLegMesh.add(rightBoot);

    this.rightLeg.add(rightLegMesh);
    this.rightLeg.position.set(-0.1, -0.3, 0);
    this.avatar.add(this.rightLeg);
  }

  private buildSword(bladeColor: number = 0xcccccc, gripColor: number = 0x78350f, guardColor: number = 0xeab308): THREE.Group {
    const sword = new THREE.Group();

    // マテリアル定義
    const bladeMat = new THREE.MeshStandardMaterial({ color: bladeColor, roughness: 0.3, metalness: 0.8 });
    const guardMat = new THREE.MeshStandardMaterial({ color: guardColor, roughness: 0.5, metalness: 0.5 });
    const gripMat = new THREE.MeshStandardMaterial({ color: gripColor, roughness: 0.9 });

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

  private buildHammer(): THREE.Group {
    const hammer = new THREE.Group();

    // マテリアル定義
    const headMat = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.7, metalness: 0.5 });
    const gripMat = new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 });

    // ヘッド
    const headGeo = new THREE.BoxGeometry(0.15, 0.15, 0.3);
    headGeo.translate(0, 0.3, 0);
    const head = new THREE.Mesh(headGeo, headMat);
    head.castShadow = true;
    head.receiveShadow = true;
    hammer.add(head);

    // 柄
    const gripGeo = new THREE.BoxGeometry(0.04, 0.4, 0.04);
    gripGeo.translate(0, 0.05, 0);
    const grip = new THREE.Mesh(gripGeo, gripMat);
    grip.castShadow = true;
    grip.receiveShadow = true;
    hammer.add(grip);

    return hammer;
  }

  public update(input: InputHandler, deltaTime: number, voxelWorld: World, activeBlockType: number): void {
    // 死亡時は更新処理を行わない
    if (this.isDead) return;

    // 自動回復ロジック（ダメージを受けてから5秒経過で、1秒ごとに1回復）
    const now = performance.now();
    if (this.hp < CONFIG.PLAYER_MAX_HP && (now - this.lastDamageTime) > 5000) {
      if ((now - this.lastRegenTime) > 1000) {
        this.hp = Math.min(CONFIG.PLAYER_MAX_HP, this.hp + 1);
        this.lastRegenTime = now;
      }
    }

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

    // Shiftキーでダッシュのトグル（ON/OFF切り替え）
    if (input.consumeJustPressed('ShiftLeft') || input.consumeJustPressed('ShiftRight')) {
      this.isSprintingToggle = !this.isSprintingToggle;
    }

    // 物理ボディから位置を同期
    this.position.set(this.body.position.x, this.body.position.y, this.body.position.z);
    this.handleStepClimb(voxelWorld);

    // 水中判定（足元付近が水かどうかをチェック）
    this.isInWater = false;
    if (this.voxelWorld) {
      const bx = Math.floor(this.position.x);
      const by = Math.floor(this.position.y - CONFIG.PLAYER_HEIGHT / 2 + 0.1);
      const bz = Math.floor(this.position.z);
      if (this.voxelWorld.getBlock(bx, by, bz) === BlockType.WATER) {
        this.isInWater = true;
      }
    }

    if (!input.isLocked) {
      this.body.velocity.x *= 0.8;
      this.body.velocity.z *= 0.8;
      return;
    }

    // 武器・ツールの可視化状態の同期
    for (const typeStr of Object.keys(this.weapons1PV)) {
      const type = Number(typeStr);
      const isActive = (activeBlockType === type);
      if (this.cameraMode === '1PV') {
        this.weapons1PV[type].visible = isActive;
        this.weapons3PV[type].visible = false;
      } else {
        this.weapons1PV[type].visible = false;
        this.weapons3PV[type].visible = isActive;
      }
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
    const halfHeight = CONFIG.PLAYER_HEIGHT / 2;
    const feetY = this.position.y - halfHeight - 0.05;
    
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

    // 着地した瞬間に落下ダメージ判定（水の中では落下ダメージを無効化）
    if (currentGrounded && !this.isGrounded && !this.isInWater) {
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

  // 自動段差上り（ステップアシスト）処理
  private handleStepClimb(voxelWorld: World): void {
    // プレイヤーが水平方向に移動しているかチェック
    const velocityX = this.body.velocity.x;
    const velocityZ = this.body.velocity.z;
    const speedSq = velocityX * velocityX + velocityZ * velocityZ;
    if (speedSq < 0.01) return; // ほとんど移動していない場合は何もしない

    const halfHeight = CONFIG.PLAYER_HEIGHT / 2;
    const feetY = this.position.y - halfHeight;

    // 進行方向ベクトル
    const speed = Math.sqrt(speedSq);
    const dirX = velocityX / speed;
    const dirZ = velocityZ / speed;

    // 進行方向の少し前（衝突半径 + 検知マージン。約0.55m前）
    const checkDist = CONFIG.PLAYER_RADIUS + 0.15;
    const checkX = this.position.x + dirX * checkDist;
    const checkZ = this.position.z + dirZ * checkDist;

    const gx = Math.floor(checkX);
    const gz = Math.floor(checkZ);

    // プレイヤーが現在立っている足元の高さのグリッド
    const currentGridY = Math.floor(feetY + 0.15);

    // 進行方向の「足元（段差）」と「頭の上（空気2マス分）」をチェック
    const stepBlock = voxelWorld.getBlock(gx, currentGridY, gz);
    const headSpaceBlock = voxelWorld.getBlock(gx, currentGridY + 1, gz);
    const headSpaceBlock2 = voxelWorld.getBlock(gx, currentGridY + 2, gz);

    // 目の前がソリッドブロックで、その上の空間が空いている場合
    if (stepBlock !== 0 && headSpaceBlock === 0 && headSpaceBlock2 === 0) {
      let stepHeight = 1.0;
      if (stepBlock === BlockType.BED_HEAD || stepBlock === BlockType.BED_FOOT) {
        stepHeight = 0.5625;
      }
      const stepTopY = currentGridY + stepHeight;
      const heightDiff = stepTopY - feetY;

      // 段差の高さが1m以下の場合、スムーズに押し上げる
      if (heightDiff > 0.05 && heightDiff <= 1.05) {
        if (stepBlock === BlockType.STAIRS) {
          // 階段の場合はジャンプではなく滑らかに登るためにY速度を加える
          this.body.velocity.y = 4.0;
        } else {
          // 通常のブロックは瞬時に押し上げる
          this.body.position.y = stepTopY + halfHeight + 0.05;
          this.position.y = this.body.position.y;
          if (this.body.velocity.y < 0) {
            this.body.velocity.y = 0;
          }
        }
      }
    }
  }

  // 装備の切り替え（マテリアルの色と表示フラグを変更）
  public setArmor(type: ArmorType): void {
    this.armorType = type;
    if (type === 'none') {
      this.armorMat.visible = false;
    } else {
      this.armorMat.visible = true;
      if (type === 'leather') {
        this.armorMat.color.setHex(0x8b5a2b);
        this.armorMat.roughness = 0.9;
        this.armorMat.metalness = 0.0;
      } else if (type === 'iron') {
        this.armorMat.color.setHex(0xd8d8d8);
        this.armorMat.roughness = 0.4;
        this.armorMat.metalness = 0.8;
      } else if (type === 'diamond') {
        this.armorMat.color.setHex(0x22d3ee);
        this.armorMat.roughness = 0.3;
        this.armorMat.metalness = 0.6;
      }
      this.armorMat.needsUpdate = true;
    }
  }

  public takeDamage(amount: number): void {
    if (this.isDead) return;

    this.lastDamageTime = performance.now();

    // 防具によるダメージ軽減
    if (amount > 0) {
      if (this.armorType === 'leather') {
        amount = Math.max(1, Math.floor(amount * 0.9));
      } else if (this.armorType === 'iron') {
        amount = Math.max(1, Math.floor(amount * 0.7));
      } else if (this.armorType === 'diamond') {
        amount = Math.max(1, Math.floor(amount * 0.4));
      }
    }

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
  private handleMovement(input: InputHandler, deltaTime: number): void {
    const moveVector = Player.tempVec3.set(0, 0, 0);

    if (input.isActionActive('forward')) moveVector.z -= 1;
    if (input.isActionActive('backward')) moveVector.z += 1;
    if (input.isActionActive('left')) moveVector.x -= 1;
    if (input.isActionActive('right')) moveVector.x += 1;

    moveVector.normalize();

    const direction = Player.tempDirection.copy(moveVector);
    direction.applyAxisAngle(Player.tempVec3_2.set(0, 1, 0), this.yaw);

    // ダッシュ判定 (トグル式)
    let currentSpeed = this.isSprintingToggle ? this.speed * 1.5 : this.speed;

    // 水中では歩く速度を遅くする
    if (this.isInWater) {
      currentSpeed *= 0.6;
    }

    const targetVelX = direction.x * currentSpeed;
    const targetVelZ = direction.z * currentSpeed;

    if (this.isGrounded) {
      // 地上では速度を直接設定する（物理エンジンの衝突応答による減速を打ち消す）
      this.body.velocity.x = targetVelX;
      this.body.velocity.z = targetVelZ;
    } else {
      // 空中では慣性を維持し、弱い空中制御のみ
      const accel = 3.0;
      this.body.velocity.x += (targetVelX - this.body.velocity.x) * accel * deltaTime;
      this.body.velocity.z += (targetVelZ - this.body.velocity.z) * accel * deltaTime;
    }

    // ジャンプ・浮上
    if (input.isActionActive('jump')) {
      if (this.isInWater) {
        // 水中ではジャンプの代わりにゆっくり浮上する（浮力）
        this.body.velocity.y = this.jumpForce * 0.4;
      } else if (this.isGrounded) {
        // 地上での通常ジャンプ
        this.body.velocity.y = this.jumpForce;
        this.isGrounded = false;
        SoundManager.playJump();
      }
    }

    // 水中ではゆっくり沈む（落下速度の制限）
    if (this.isInWater && this.body.velocity.y < -2) {
      this.body.velocity.y *= 0.8;
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

    // ベッドで寝ているかどうかの判定 (静止時かつ足元がベッド)
    let isSleeping = false;
    let bedYaw = 0;
    if (!isMoving && this.isGrounded && this.voxelWorld) {
      const bx = Math.floor(this.position.x);
      // 足元のブロックを確認（少しめり込むことも考慮し、足元付近をチェック）
      const halfHeight = CONFIG.PLAYER_HEIGHT / 2;
      const by = Math.floor(this.position.y - halfHeight - 0.1);
      const bz = Math.floor(this.position.z);
      const belowBlock = this.voxelWorld.getBlock(bx, by, bz);
      if (belowBlock === BlockType.BED_HEAD || belowBlock === BlockType.BED_FOOT) {
        isSleeping = true;
        
        // ベッドの向きを判定する
        const targetType = belowBlock === BlockType.BED_HEAD ? BlockType.BED_FOOT : BlockType.BED_HEAD;
        if (this.voxelWorld.getBlock(bx + 1, by, bz) === targetType) {
          bedYaw = belowBlock === BlockType.BED_HEAD ? -Math.PI / 2 : Math.PI / 2; // East/West
        } else if (this.voxelWorld.getBlock(bx - 1, by, bz) === targetType) {
          bedYaw = belowBlock === BlockType.BED_HEAD ? Math.PI / 2 : -Math.PI / 2;
        } else if (this.voxelWorld.getBlock(bx, by, bz + 1) === targetType) {
          bedYaw = belowBlock === BlockType.BED_HEAD ? Math.PI : 0; // South/North
        } else if (this.voxelWorld.getBlock(bx, by, bz - 1) === targetType) {
          bedYaw = belowBlock === BlockType.BED_HEAD ? 0 : Math.PI;
        }
      }
    }

    // 寝るモーション（横に倒れる）
    if (isSleeping) {
      // 仰向けに倒れる (X軸 -90度)
      const targetRotX = -Math.PI / 2;
      this.avatar.rotation.x += (targetRotX - this.avatar.rotation.x) * 10 * deltaTime;
      // アバターの向きをベッドに合わせる
      this.avatar.rotation.y = bedYaw;
      // 少し浮かせる（ベッドの表面に乗るように調整）
      this.avatar.position.y -= 0.7;
    } else {
      // 通常時は直立 (X軸 0度)
      this.avatar.rotation.x += (0 - this.avatar.rotation.x) * 10 * deltaTime;
    }

    // スイングアニメーションの更新
    if (this.swingTime > 0) {
      this.swingTime -= deltaTime;
      const progress = (0.15 - this.swingTime) / 0.15; // 0.0 -> 1.0
      const swingAngle = Math.sin(progress * Math.PI) * 1.2; // スイング幅

      if (this.cameraMode === '1PV') {
        // 一人称：画面右下の武器を前に突き出すように振る
        for (const typeStr of Object.keys(this.weapons1PV)) {
          const type = Number(typeStr);
          this.weapons1PV[type].rotation.x = (-30 * Math.PI) / 180 + swingAngle;
          this.weapons1PV[type].rotation.y = (45 * Math.PI) / 180 - swingAngle * 0.5;
          this.weapons1PV[type].position.z = -0.38 + swingAngle * 0.15;
        }
      } else {
        // 三人称：アバターの右腕を前方に大きくスイング
        this.rightArm.rotation.x = -Math.PI / 3 - swingAngle * 1.5;
        this.rightArm.rotation.y = -swingAngle * 0.5;
      }
    } else {
      // 待機時の位置補正 (一人称用)
      if (this.cameraMode === '1PV') {
        for (const typeStr of Object.keys(this.weapons1PV)) {
          const type = Number(typeStr);
          this.weapons1PV[type].rotation.set(
            (-30 * Math.PI) / 180,
            (45 * Math.PI) / 180,
            (15 * Math.PI) / 180
          );
          this.weapons1PV[type].position.set(0.24, -0.24, -0.38);
        }
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
      this.head.visible = true; // 3人称視点では常に頭を表示する

      const maxDist = 4.0;
      const offset = Player.tempVec3.set(0, eyeHeight + 0.4, 0);

      // カメラ方向ベクトル
      const lookDir = Player.tempVec3_2.set(0, 0, -1).applyQuaternion(cameraRotation);

      // プレイヤーの目の位置（レイキャスト起点）
      const eyePos = new THREE.Vector3(
        this.position.x + offset.x,
        this.position.y + offset.y,
        this.position.z + offset.z
      );

      // カメラの理想位置を計算
      let cameraDir: THREE.Vector3;
      if (this.cameraMode === '3PV_BACK') {
        cameraDir = lookDir.clone().negate(); // 後方
      } else {
        // 前方 (Y軸を反転させることで、3PV_BACKと同じように上下アングルを保つ)
        cameraDir = new THREE.Vector3(lookDir.x, -lookDir.y, lookDir.z).normalize();
      }

      // 壁抜け防止：目の位置 → カメラ理想位置の間でDDAレイキャスト
      const safeDist = this.calcSafeCameraDist(eyePos, cameraDir, maxDist);

      if (this.cameraMode === '3PV_BACK') {
        // 後方から追従
        this.camera.position.copy(eyePos).addScaledVector(cameraDir, safeDist);
      } else {
        // 前方から対面
        this.camera.position.copy(eyePos).addScaledVector(cameraDir, safeDist);
        this.camera.lookAt(this.position.x, this.position.y + eyeHeight, this.position.z);
      }
    }
  }

  /**
   * 視点位置からカメラ方向にレイキャストし、
   * 壁・屋根ブロックに遮られない安全な距離を返す。
   * @param origin - レイの起点（プレイヤーの目の高さ）
   * @param dir    - レイの方向（正規化済み）
   * @param maxDist - カメラの最大距離
   * @returns 壁に当たる前の安全な距離
   */
  private calcSafeCameraDist(origin: THREE.Vector3, dir: THREE.Vector3, maxDist: number): number {
    // WorldがまだセットされていなければmaxDistをそのまま返す（フォールバック）
    if (!this.voxelWorld) return maxDist;

    // DDA（デジタル差分解析）でボクセルグリッドをトレース
    const MARGIN = 0.2; // ブロック手前のマージン
    const STEP_SIZE = 0.1; // 1ステップの距離
    const steps = Math.ceil(maxDist / STEP_SIZE);

    for (let i = 1; i <= steps; i++) {
      const t = Math.min(i * STEP_SIZE, maxDist);
      const x = origin.x + dir.x * t;
      const y = origin.y + dir.y * t;
      const z = origin.z + dir.z * t;

      const bx = Math.floor(x);
      const by = Math.floor(y);
      const bz = Math.floor(z);

      if (this.voxelWorld.getBlock(bx, by, bz) !== 0) {
        // ブロックに当たった → マージン分手前の距離を返す
        return Math.max(0, t - MARGIN);
      }
    }

    return maxDist;
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
      SoundManager.playSwing(); // スイング音を再生
    }
  }

  public getYaw(): number {
    return this.yaw;
  }

  /**
   * ボクセルワールドの参照を設定する。
   * カメラの壁抜け防止に使用するため、Worldの初期化後に呼び出すこと。
   */
  public setWorld(world: World): void {
    this.voxelWorld = world;
  }

  // セーブデータ用：プレイヤーの位置、HP、向き、装備状態を取得
  public getSaveData(): {
    x: number;
    y: number;
    z: number;
    hp: number;
    yaw: number;
    pitch: number;
    armorType: ArmorType;
  } {
    return {
      x: this.body.position.x,
      y: this.body.position.y,
      z: this.body.position.z,
      hp: this.hp,
      yaw: this.yaw,
      pitch: this.pitch,
      armorType: this.armorType,
    };
  }

  // ロードデータ用：プレイヤーの位置、HP、向き、装備状態を復元・同期
  public loadSaveData(data: {
    x: number;
    y: number;
    z: number;
    hp: number;
    yaw: number;
    pitch: number;
    armorType?: ArmorType;
  }): void {
    if (!data) return;

    this.hp = typeof data.hp === 'number' ? data.hp : CONFIG.PLAYER_MAX_HP;
    this.isDead = this.hp <= 0;

    // 装備のロード
    if (data.armorType) {
      this.setArmor(data.armorType);
    } else {
      this.setArmor('none');
    }

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

  private buildPickaxe(headColor: number, gripColor: number = 0x78350f): THREE.Group {
    const pickaxe = new THREE.Group();
    const handleMat = new THREE.MeshStandardMaterial({ color: gripColor, roughness: 0.9 });
    const headMat = new THREE.MeshStandardMaterial({ color: headColor, roughness: 0.5, metalness: 0.5 });

    // 柄
    const handleGeo = new THREE.BoxGeometry(0.03, 0.45, 0.03);
    handleGeo.translate(0, 0.1, 0);
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.castShadow = true;
    handle.receiveShadow = true;
    pickaxe.add(handle);

    // 頭部 (T字型の刃)
    const headGeo = new THREE.BoxGeometry(0.24, 0.04, 0.04);
    headGeo.translate(0, 0.3, 0);
    const head = new THREE.Mesh(headGeo, headMat);
    head.castShadow = true;
    head.receiveShadow = true;
    pickaxe.add(head);

    return pickaxe;
  }

  private buildAxe(headColor: number, gripColor: number = 0x78350f): THREE.Group {
    const axe = new THREE.Group();
    const handleMat = new THREE.MeshStandardMaterial({ color: gripColor, roughness: 0.9 });
    const headMat = new THREE.MeshStandardMaterial({ color: headColor, roughness: 0.5, metalness: 0.5 });

    // 柄
    const handleGeo = new THREE.BoxGeometry(0.03, 0.45, 0.03);
    handleGeo.translate(0, 0.1, 0);
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.castShadow = true;
    handle.receiveShadow = true;
    axe.add(handle);

    // 刃
    const headGeo = new THREE.BoxGeometry(0.12, 0.12, 0.04);
    headGeo.translate(0.05, 0.26, 0);
    const head = new THREE.Mesh(headGeo, headMat);
    head.castShadow = true;
    head.receiveShadow = true;
    axe.add(head);

    return axe;
  }

  private buildShovel(headColor: number, gripColor: number = 0x78350f): THREE.Group {
    const shovel = new THREE.Group();
    const handleMat = new THREE.MeshStandardMaterial({ color: gripColor, roughness: 0.9 });
    const headMat = new THREE.MeshStandardMaterial({ color: headColor, roughness: 0.5, metalness: 0.5 });

    // 柄
    const handleGeo = new THREE.BoxGeometry(0.03, 0.45, 0.03);
    handleGeo.translate(0, 0.1, 0);
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.castShadow = true;
    handle.receiveShadow = true;
    shovel.add(handle);

    // 先端
    const headGeo = new THREE.BoxGeometry(0.08, 0.12, 0.02);
    headGeo.translate(0, 0.31, 0);
    const head = new THREE.Mesh(headGeo, headMat);
    head.castShadow = true;
    head.receiveShadow = true;
    shovel.add(head);

    return shovel;
  }
}

