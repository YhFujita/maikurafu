import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { CONFIG } from '../config.ts';
import { Player } from '../player/Player.ts';
import { World } from '../world/World.ts';
import { BlockType } from '../world/Block.ts';

export class NPC {
  public accountId: string;
  public characterType: string;
  public homePosition: THREE.Vector3;
  
  public mesh: THREE.Group;
  public body: CANNON.Body;
  
  private scene: THREE.Scene;
  private physicsWorld: CANNON.World;
  private voxelWorld: World;

  // アバターパーツ
  private head!: THREE.Mesh;
  private bodyMesh!: THREE.Mesh;
  private leftArm!: THREE.Group;
  private rightArm!: THREE.Group;
  private leftLeg!: THREE.Group;
  private rightLeg!: THREE.Group;
  private nameTag!: THREE.Sprite;

  // AI & 移動状態
  private speed: number = 2.0; // プレイヤーより歩くのを遅くする
  private jumpForce: number = 6.0;
  
  private walkTimer: number = 0;
  private isWaiting: boolean = false;
  private targetDirection: THREE.Vector3 = new THREE.Vector3();
  private isGreeting: boolean = false;

  constructor(
    accountId: string,
    characterType: string,
    homePos: THREE.Vector3,
    scene: THREE.Scene,
    physicsWorld: CANNON.World,
    voxelWorld: World
  ) {
    this.accountId = accountId;
    this.characterType = characterType || 'boy1';
    this.homePosition = homePos.clone();
    
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.voxelWorld = voxelWorld;

    // 物理ボディ (プレイヤーと同サイズ: 高さ1.8m、半径0.4mの球体を3つ並べたカプセル形状)
    const radius = CONFIG.PLAYER_RADIUS;
    const halfHeight = CONFIG.PLAYER_HEIGHT / 2;

    this.body = new CANNON.Body({
      mass: 60,
      position: new CANNON.Vec3(homePos.x, homePos.y + halfHeight, homePos.z),
      fixedRotation: true,
      linearDamping: 0.1,
    });

    const sphereShape = new CANNON.Sphere(radius);
    this.body.addShape(sphereShape, new CANNON.Vec3(0, -0.5, 0));
    this.body.addShape(sphereShape, new CANNON.Vec3(0, 0, 0));
    this.body.addShape(sphereShape, new CANNON.Vec3(0, 0.5, 0));

    this.physicsWorld.addBody(this.body);

    // 3Dアバターグループの作成
    this.mesh = new THREE.Group();
    this.buildAvatar();
    
    // ネームプレートの作成
    this.nameTag = this.createNameTag(this.accountId);
    this.mesh.add(this.nameTag);
    
    this.scene.add(this.mesh);

    // 初期方向をランダムに設定
    this.chooseNextAction();
  }

  private buildAvatar(): void {
    // プレイヤーと同様のアバター構築
    let hairColor = 0x5a3d28;
    let bodyColor = 0x0080ff;
    let legColor = 0x2b2b80;
    let skinColor = 0xffdbac;
    let eyeColor = 0x333333;
    let isGirl = false;

    const type = this.characterType;
    if (type === 'boy1') {
      hairColor = 0x222222;
      bodyColor = 0x3b82f6;
      legColor = 0x1d4ed8;
      eyeColor = 0x1d4ed8;
    } else if (type === 'boy2') {
      hairColor = 0xd97706;
      bodyColor = 0x10b981;
      legColor = 0x1f2937;
      eyeColor = 0x047857;
    } else if (type === 'girl1') {
      hairColor = 0xdb2777;
      bodyColor = 0xfacc15;
      legColor = 0x4f46e5;
      eyeColor = 0xbe185d;
      isGirl = true;
    } else if (type === 'girl2') {
      hairColor = 0x06b6d4;
      bodyColor = 0x8b5cf6;
      legColor = 0x475569;
      eyeColor = 0x6d28d9;
      isGirl = true;
    }

    const headMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.9 });
    const bodyMat = new THREE.MeshStandardMaterial({ color: bodyColor, roughness: 0.9 });
    const armMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.9 });
    const legMat = new THREE.MeshStandardMaterial({ color: legColor, roughness: 0.9 });
    const hairMat = new THREE.MeshStandardMaterial({ color: hairColor, roughness: 0.9 });
    const eyeWhiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 });
    const eyePupilMat = new THREE.MeshStandardMaterial({ color: eyeColor, roughness: 0.9 });
    const mouthMat = new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.9 });

    // 頭
    const headGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    this.head = new THREE.Mesh(headGeo, headMat);
    this.head.position.y = 0.5;
    this.head.castShadow = true;
    this.head.receiveShadow = true;

    // 髪
    const hairGeo = new THREE.BoxGeometry(0.42, 0.15, 0.42);
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.y = 0.15;
    this.head.add(hair);

    if (isGirl) {
      const backHairGeo = new THREE.BoxGeometry(0.42, 0.32, 0.08);
      const backHair = new THREE.Mesh(backHairGeo, hairMat);
      backHair.position.set(0, -0.08, 0.17);
      backHair.castShadow = true;
      backHair.receiveShadow = true;
      this.head.add(backHair);

      const sideHairGeo = new THREE.BoxGeometry(0.08, 0.25, 0.42);
      const leftSideHair = new THREE.Mesh(sideHairGeo, hairMat);
      leftSideHair.position.set(0.17, -0.05, 0);
      leftSideHair.castShadow = true;
      leftSideHair.receiveShadow = true;
      this.head.add(leftSideHair);

      const rightSideHair = new THREE.Mesh(sideHairGeo, hairMat);
      rightSideHair.position.set(-0.17, -0.05, 0);
      rightSideHair.castShadow = true;
      rightSideHair.receiveShadow = true;
      this.head.add(rightSideHair);
    }

    // 目
    const eyeWhiteGeo = new THREE.BoxGeometry(0.08, 0.04, 0.01);
    const leftEyeWhite = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
    leftEyeWhite.position.set(0.08, 0.01, -0.201);
    this.head.add(leftEyeWhite);

    const pupilGeo = new THREE.BoxGeometry(0.04, 0.04, 0.012);
    const leftEyePupil = new THREE.Mesh(pupilGeo, eyePupilMat);
    leftEyePupil.position.set(0.06, 0.01, -0.202);
    this.head.add(leftEyePupil);

    const rightEyeWhite = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat);
    rightEyeWhite.position.set(-0.08, 0.01, -0.201);
    this.head.add(rightEyeWhite);

    const rightEyePupil = new THREE.Mesh(pupilGeo, eyePupilMat);
    rightEyePupil.position.set(-0.06, 0.01, -0.202);
    this.head.add(rightEyePupil);

    // 口
    const mouthGeo = new THREE.BoxGeometry(0.12, 0.04, 0.01);
    const mouth = new THREE.Mesh(mouthGeo, mouthMat);
    mouth.position.set(0, -0.09, -0.201);
    this.head.add(mouth);

    this.mesh.add(this.head);

    // 胴体
    const bodyGeo = new THREE.BoxGeometry(0.4, 0.6, 0.2);
    this.bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    this.bodyMesh.position.y = 0.0;
    this.bodyMesh.castShadow = true;
    this.bodyMesh.receiveShadow = true;
    this.mesh.add(this.bodyMesh);

    // 腕と脚
    const limbGeo = new THREE.BoxGeometry(0.2, 0.6, 0.2);
    limbGeo.translate(0, -0.3, 0);

    // 左腕
    this.leftArm = new THREE.Group();
    const leftArmMesh = new THREE.Mesh(limbGeo, armMat);
    leftArmMesh.castShadow = true;
    leftArmMesh.receiveShadow = true;
    this.leftArm.add(leftArmMesh);
    this.leftArm.position.set(0.3, 0.3, 0);
    this.mesh.add(this.leftArm);

    // 右腕
    this.rightArm = new THREE.Group();
    const rightArmMesh = new THREE.Mesh(limbGeo, armMat);
    rightArmMesh.castShadow = true;
    rightArmMesh.receiveShadow = true;
    this.rightArm.add(rightArmMesh);
    this.rightArm.position.set(-0.3, 0.3, 0);
    this.mesh.add(this.rightArm);

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

  private createNameTag(name: string): THREE.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 背景（半透明）
      ctx.fillStyle = 'rgba(11, 15, 25, 0.6)';
      // 丸角四角形
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(10, 5, 236, 54, 10) : ctx.rect(10, 5, 236, 54);
      ctx.fill();

      // ボーダー
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // テキスト
      ctx.font = 'bold 22px Outfit, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 4;
      ctx.fillText(name, 128, 32);
    }

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: true });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(1.6, 0.4, 1.0);
    sprite.position.set(0, 0.95, 0); // 頭上
    return sprite;
  }

  public update(deltaTime: number, player: Player): void {
    const pPos = player.position;
    const npcPos = new THREE.Vector3(this.body.position.x, this.body.position.y, this.body.position.z);
    const distToPlayer = npcPos.distanceTo(pPos);

    // 1. 接地判定 (簡易的にY速度でチェック)
    const isGrounded = Math.abs(this.body.velocity.y) < 0.1;

    // 2. プレイヤー接近時の挨拶AI
    this.isGreeting = distToPlayer < 4.0;

    if (this.isGreeting) {
      this.body.velocity.x = 0;
      this.body.velocity.z = 0;

      // プレイヤーの方向を向く
      const dirX = pPos.x - npcPos.x;
      const dirZ = pPos.z - npcPos.z;
      const targetAngle = Math.atan2(dirX, dirZ);
      this.mesh.rotation.y = targetAngle;

      // 首（頭）もプレイヤーの高さに合わせて少しピッチさせる
      const targetPitch = Math.max(-0.4, Math.min(0.4, (pPos.y - npcPos.y) / distToPlayer));
      this.head.rotation.x += (targetPitch - this.head.rotation.x) * 5 * deltaTime;

      // 挨拶時は右腕を少し上げて手を振る
      const waveAngle = Math.sin(performance.now() * 0.015) * 0.2 - 1.2;
      this.rightArm.rotation.x += (waveAngle - this.rightArm.rotation.x) * 5 * deltaTime;
      this.rightArm.rotation.z += (0.2 - this.rightArm.rotation.z) * 5 * deltaTime;

      // その他の手足は直立状態に戻す
      const lerpFactor = 10 * deltaTime;
      this.leftArm.rotation.x += (0 - this.leftArm.rotation.x) * lerpFactor;
      this.leftArm.rotation.z += (0 - this.leftArm.rotation.z) * lerpFactor;
      this.leftLeg.rotation.x += (0 - this.leftLeg.rotation.x) * lerpFactor;
      this.rightLeg.rotation.x += (0 - this.rightLeg.rotation.x) * lerpFactor;
    } else {
      // 3. 通常のランダムウォークAI
      this.head.rotation.x += (0 - this.head.rotation.x) * 5 * deltaTime; // 頭の角度をリセット
      
      // 腕のZ回転を戻す
      this.rightArm.rotation.z += (0 - this.rightArm.rotation.z) * 5 * deltaTime;
      
      this.walkTimer -= deltaTime;
      if (this.walkTimer <= 0) {
        this.chooseNextAction();
      }

      if (!this.isWaiting) {
        // 目標方向に進む
        this.body.velocity.x = this.targetDirection.x * this.speed;
        this.body.velocity.z = this.targetDirection.z * this.speed;

        // 進行方向を向く
        const targetAngle = Math.atan2(this.targetDirection.x, this.targetDirection.z);
        this.mesh.rotation.y = targetAngle;

        // 障害物の自動ジャンプ判定
        const currentSpeedSq = this.body.velocity.x * this.body.velocity.x + this.body.velocity.z * this.body.velocity.z;
        const targetSpeedSq = this.speed * this.speed;
        const isBlocked = currentSpeedSq < targetSpeedSq * 0.3; // 壁に引っかかっている

        if (isBlocked && isGrounded) {
          this.body.velocity.y = this.jumpForce;
        }

        // 歩行アニメーション
        const time = performance.now() * 0.008;
        const angle = Math.sin(time) * 0.6;
        this.leftArm.rotation.x = angle;
        this.rightArm.rotation.x = -angle;
        this.leftLeg.rotation.x = -angle;
        this.rightLeg.rotation.x = angle;
      } else {
        // 静止状態
        this.body.velocity.x *= 0.8;
        this.body.velocity.z *= 0.8;

        const lerpFactor = 10 * deltaTime;
        this.leftArm.rotation.x += (0 - this.leftArm.rotation.x) * lerpFactor;
        this.rightArm.rotation.x += (0 - this.rightArm.rotation.x) * lerpFactor;
        this.leftLeg.rotation.x += (0 - this.leftLeg.rotation.x) * lerpFactor;
        this.rightLeg.rotation.x += (0 - this.rightLeg.rotation.x) * lerpFactor;
      }
    }

    // メッシュ位置の同期
    this.mesh.position.set(this.body.position.x, this.body.position.y, this.body.position.z);
    this.handleStepClimb();
  }

  private chooseNextAction(): void {
    // 待機するか歩くかを決定 (50% の確率)
    this.isWaiting = Math.random() < 0.5;
    this.walkTimer = 3.0 + Math.random() * 5.0; // 3〜8秒間のアクション期間

    if (!this.isWaiting) {
      // 拠点(homePosition)からの距離を測定
      const npcPos = new THREE.Vector3(this.body.position.x, this.body.position.y, this.body.position.z);
      const distFromHome = npcPos.distanceTo(this.homePosition);
      const maxHomeRadius = 12.0; // ホームから離れてよい最大半径

      if (distFromHome > maxHomeRadius) {
        // ホームから離れすぎている場合はホームの方向へ歩かせる
        this.targetDirection.copy(this.homePosition).sub(npcPos);
        this.targetDirection.y = 0;
        this.targetDirection.normalize();
      } else {
        // ランダムな方向を決定
        const angle = Math.random() * Math.PI * 2;
        this.targetDirection.set(Math.sin(angle), 0, Math.cos(angle)).normalize();
      }
    }
  }

  // 自動段差上り (ステップアシスト) 処理
  private handleStepClimb(): void {
    const velocityX = this.body.velocity.x;
    const velocityZ = this.body.velocity.z;
    const speedSq = velocityX * velocityX + velocityZ * velocityZ;
    if (speedSq < 0.01) return;

    const halfHeight = CONFIG.PLAYER_HEIGHT / 2;
    const feetY = this.body.position.y - halfHeight;

    const speed = Math.sqrt(speedSq);
    const dirX = velocityX / speed;
    const dirZ = velocityZ / speed;

    const checkDist = CONFIG.PLAYER_RADIUS + 0.15;
    const checkX = this.body.position.x + dirX * checkDist;
    const checkZ = this.body.position.z + dirZ * checkDist;

    const gx = Math.floor(checkX);
    const gz = Math.floor(checkZ);
    const currentGridY = Math.floor(feetY + 0.15);

    const stepBlock = this.voxelWorld.getBlock(gx, currentGridY, gz);
    const headSpaceBlock = this.voxelWorld.getBlock(gx, currentGridY + 1, gz);
    const headSpaceBlock2 = this.voxelWorld.getBlock(gx, currentGridY + 2, gz);

    if (stepBlock !== 0 && headSpaceBlock === 0 && headSpaceBlock2 === 0) {
      const stepHeight = (stepBlock === BlockType.BED_HEAD || stepBlock === BlockType.BED_FOOT) ? 0.5625 : 1.0;
      const stepTopY = currentGridY + stepHeight;
      const heightDiff = stepTopY - feetY;

      if (heightDiff > 0.05 && heightDiff <= 1.05) {
        if (stepBlock === BlockType.STAIRS) {
          this.body.velocity.y = 4.0;
        } else {
          this.body.position.y = stepTopY + halfHeight + 0.05;
          if (this.body.velocity.y < 0) {
            this.body.velocity.y = 0;
          }
        }
      }
    }
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
