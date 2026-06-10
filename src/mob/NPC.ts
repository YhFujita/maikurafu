import * as THREE from 'three';
import { CONFIG } from '../config.ts';
import { Player } from '../player/Player.ts';
import { World } from '../world/World.ts';
import { BlockType } from '../world/Block.ts';

export class NPC {
  public accountId: string;
  public characterType: string;
  public homePosition: THREE.Vector3;
  public position: THREE.Vector3;
  
  public mesh: THREE.Group;
  
  private scene: THREE.Scene;
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
  
  private velocityY: number = 0;
  private walkTimer: number = 0;
  private isWaiting: boolean = false;
  private targetDirection: THREE.Vector3 = new THREE.Vector3();
  private isGreeting: boolean = false;

  // 吹き出し（会話）
  private speechBubble: THREE.Sprite | null = null;
  private speechTimer: number = 0;
  private readonly SPEECH_DURATION: number = 3.5;

  // ダンス
  private isDancing: boolean = false;
  private danceTimer: number = 0;
  private readonly DANCE_DURATION: number = 5.0;

  // ランダムダンスタイマー
  private randomDanceTimer: number = 20.0 + Math.random() * 30.0;

  constructor(
    accountId: string,
    characterType: string,
    homePos: THREE.Vector3,
    scene: THREE.Scene,
    voxelWorld: World
  ) {
    this.accountId = accountId;
    this.characterType = characterType || 'boy1';
    this.homePosition = homePos.clone();
    this.position = homePos.clone(); // 初期座標
    
    this.scene = scene;
    this.voxelWorld = voxelWorld;

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

  // 挨拶文リスト（ランダム選択）
  private static readonly GREETINGS = [
    'こんにちは！',
    'やあ、元気？',
    'いい天気だね！',
    '何か手伝えることある？',
    'また会えてうれしいよ！',
    '最近どう？',
    'よろしくね！',
    'いっしょに遊ぼう！',
  ];

  // 吹き出しスプライトの作成
  private buildSpeechBubble(text: string): THREE.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 80;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 吹き出し背景
      ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(8, 4, 296, 60, 12);
      } else {
        ctx.rect(8, 4, 296, 60);
      }
      ctx.fill();
      // 三角形（しっぽ）
      ctx.beginPath();
      ctx.moveTo(60, 64);
      ctx.lineTo(80, 64);
      ctx.lineTo(70, 76);
      ctx.closePath();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
      ctx.fill();
      // テキスト
      ctx.font = 'bold 24px Outfit, sans-serif';
      ctx.fillStyle = '#1a1a2e';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 160, 34);
    }
    const texture = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(2.0, 0.5, 1.0);
    sprite.position.set(0, 1.6, 0); // 頭上
    return sprite;
  }

  // 話しかける（吹き出し表示）
  public speak(): void {
    // 既存の吹き出しを削除
    if (this.speechBubble) {
      this.mesh.remove(this.speechBubble);
      this.speechBubble = null;
    }
    const text = NPC.GREETINGS[Math.floor(Math.random() * NPC.GREETINGS.length)];
    this.speechBubble = this.buildSpeechBubble(text);
    this.mesh.add(this.speechBubble);
    this.speechTimer = this.SPEECH_DURATION;
  }

  // ダンスを開始する
  public startDance(duration: number = this.DANCE_DURATION): void {
    this.isDancing = true;
    this.danceTimer = duration;
    // ダンス中は移動しない
    this.isWaiting = true;
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
    const distToPlayer = this.position.distanceTo(pPos);

    // 1. 重力と接地の計算 (キネマティック物理)
    const gravity = 20.0;
    this.velocityY -= gravity * deltaTime;
    if (this.velocityY < -20) this.velocityY = -20; // 落下速度限界

    // 次の予測座標（水平方向）
    const nextPos = this.position.clone();
    
    // ダンス中はカウントダウン
    if (this.isDancing) {
      this.danceTimer -= deltaTime;
      if (this.danceTimer <= 0) {
        this.isDancing = false;
        this.isWaiting = false;
      }
    }

    // 吹き出しのフェードアウト処理
    if (this.speechBubble && this.speechTimer > 0) {
      this.speechTimer -= deltaTime;
      // 最後の1秒でフェードアウト
      const opacity = Math.min(1.0, this.speechTimer);
      (this.speechBubble.material as THREE.SpriteMaterial).opacity = opacity;
      if (this.speechTimer <= 0) {
        this.mesh.remove(this.speechBubble);
        this.speechBubble = null;
      }
    }

    // ランダムダンスタイマー（プレイヤーが近すぎない場合のみ）
    if (!this.isDancing && distToPlayer > 5.0) {
      this.randomDanceTimer -= deltaTime;
      if (this.randomDanceTimer <= 0) {
        this.startDance();
        this.randomDanceTimer = 30.0 + Math.random() * 60.0;
      }
    }

    // 挨拶していないかつ待機していない場合のみ移動する
    this.isGreeting = distToPlayer < 4.0;
    
    if (!this.isGreeting && !this.isWaiting && !this.isDancing) {
      nextPos.x += this.targetDirection.x * this.speed * deltaTime;
      nextPos.z += this.targetDirection.z * this.speed * deltaTime;
    }
    
    // Y方向の予測座標
    nextPos.y += this.velocityY * deltaTime;

    // 接地判定 (足元のブロックをチェック)
    const halfHeight = CONFIG.PLAYER_HEIGHT / 2;
    const feetY = nextPos.y - halfHeight;
    const gx = Math.floor(nextPos.x);
    const gz = Math.floor(nextPos.z);
    
    // 足元のブロックグリッド
    const checkGridY = Math.floor(feetY);
    const belowBlock = this.voxelWorld.getBlock(gx, checkGridY, gz);
    const isSolidBelow = belowBlock !== BlockType.AIR && belowBlock !== BlockType.WATER;

    if (isSolidBelow) {
      // 接地！Y座標をブロックの上にクランプ
      nextPos.y = checkGridY + 1.0 + halfHeight;
      this.velocityY = 0;
    }

    // 2. 目の前のブロック（壁）に対する衝突解決とステップアシスト
    const bodyGridY = Math.floor(nextPos.y);
    const faceBlock = this.voxelWorld.getBlock(gx, bodyGridY, gz);
    const isSolidFace = faceBlock !== BlockType.AIR && faceBlock !== BlockType.WATER;

    if (isSolidFace) {
      // 目の前にブロックがある場合、上の2マスが空いていれば自動で乗り越える（ステップアシスト）
      const headSpace = this.voxelWorld.getBlock(gx, bodyGridY + 1, gz);
      const headSpace2 = this.voxelWorld.getBlock(gx, bodyGridY + 2, gz);
      
      if (headSpace === BlockType.AIR && headSpace2 === BlockType.AIR) {
        // 段差を上る (ベッドの場合は高さを調整)
        const stepHeight = (faceBlock === BlockType.BED_HEAD || faceBlock === BlockType.BED_FOOT) ? 0.5625 : 1.0;
        nextPos.y = bodyGridY + stepHeight + halfHeight;
        this.velocityY = 0;
      } else {
        // 乗り越えられないので、水平移動をキャンセル（元の座標に戻す）
        nextPos.x = this.position.x;
        nextPos.z = this.position.z;
      }
    }

    // 最新の座標をクラスメンバに適用
    this.position.copy(nextPos);
    this.mesh.position.copy(this.position);

    // 3. アニメーションと向きの更新
    if (this.isDancing) {
      // ダンスアニメーション
      const t = performance.now() * 0.003;
      // 体を左右に揺らす
      this.mesh.rotation.y += Math.sin(t * 4) * 0.05;
      // 腕を大きく振る（上下）
      this.leftArm.rotation.x = Math.sin(t * 6) * 1.2;
      this.rightArm.rotation.x = -Math.sin(t * 6) * 1.2;
      // 腕を外に広げる（Z軸）
      this.leftArm.rotation.z = Math.abs(Math.sin(t * 3)) * 0.5;
      this.rightArm.rotation.z = -Math.abs(Math.sin(t * 3)) * 0.5;
      // 脚を交互に上げる
      this.leftLeg.rotation.x = Math.sin(t * 6 + Math.PI) * 0.5;
      this.rightLeg.rotation.x = Math.sin(t * 6) * 0.5;
    } else if (this.isGreeting) {
      // プレイヤーの方向を向く
      const dirX = pPos.x - this.position.x;
      const dirZ = pPos.z - this.position.z;
      const targetAngle = Math.atan2(dirX, dirZ);
      this.mesh.rotation.y = targetAngle;

      // 首（頭）もプレイヤーの高さに合わせて少しピッチさせる
      const targetPitch = Math.max(-0.4, Math.min(0.4, (pPos.y - this.position.y) / distToPlayer));
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
      this.head.rotation.x += (0 - this.head.rotation.x) * 5 * deltaTime; // 頭の角度をリセット
      this.rightArm.rotation.z += (0 - this.rightArm.rotation.z) * 5 * deltaTime; // 腕のZ回転を戻す
      this.leftArm.rotation.z += (0 - this.leftArm.rotation.z) * 5 * deltaTime;

      this.walkTimer -= deltaTime;
      if (this.walkTimer <= 0) {
        this.chooseNextAction();
      }

      if (!this.isWaiting) {
        // 進行方向を向く
        const targetAngle = Math.atan2(this.targetDirection.x, this.targetDirection.z);
        this.mesh.rotation.y = targetAngle;

        // 歩行アニメーション
        const time = performance.now() * 0.008;
        const angle = Math.sin(time) * 0.6;
        this.leftArm.rotation.x = angle;
        this.rightArm.rotation.x = -angle;
        this.leftLeg.rotation.x = -angle;
        this.rightLeg.rotation.x = angle;
      } else {
        // 静止状態
        const lerpFactor = 10 * deltaTime;
        this.leftArm.rotation.x += (0 - this.leftArm.rotation.x) * lerpFactor;
        this.rightArm.rotation.x += (0 - this.rightArm.rotation.x) * lerpFactor;
        this.leftLeg.rotation.x += (0 - this.leftLeg.rotation.x) * lerpFactor;
        this.rightLeg.rotation.x += (0 - this.rightLeg.rotation.x) * lerpFactor;
      }
    }
  }

  private chooseNextAction(): void {
    // ダンス（10%の確率）
    if (Math.random() < 0.1) {
      this.startDance(3.0 + Math.random() * 4.0);
      this.walkTimer = this.danceTimer + 0.5;
      return;
    }
    // 待機するか歩くかを決定 (50% の確率)
    this.isWaiting = Math.random() < 0.5;
    this.walkTimer = 3.0 + Math.random() * 5.0; // 3〜8秒間のアクション期間

    if (!this.isWaiting) {
      // 拠点(homePosition)からの距離を測定
      const distFromHome = this.position.distanceTo(this.homePosition);
      const maxHomeRadius = 12.0; // ホームから離れてよい最大半径

      if (distFromHome > maxHomeRadius) {
        // ホームから離れすぎている場合はホームの方向へ歩かせる
        this.targetDirection.copy(this.homePosition).sub(this.position);
        this.targetDirection.y = 0;
        this.targetDirection.normalize();
      } else {
        // ランダムな方向を決定
        const angle = Math.random() * Math.PI * 2;
        this.targetDirection.set(Math.sin(angle), 0, Math.cos(angle)).normalize();
      }
    }
  }

  public destroy(): void {
    if (this.mesh) {
      this.scene.remove(this.mesh);
    }
  }
}
