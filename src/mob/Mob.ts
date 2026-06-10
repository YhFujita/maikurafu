import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { CONFIG } from '../config.ts';
import { Player } from '../player/Player.ts';
import { SoundManager } from '../system/SoundManager.ts';
import { World } from '../world/World.ts';
import { BlockType } from '../world/Block.ts';

export enum MobType {
  ZOMBIE = 0,
  CHICKEN = 1,
  PIG = 2,
  SHEEP = 3,
  COW = 4,
  SLIME = 5,
  CREEPER = 6,
  VILLAGER = 7,
  ZOMBIE_VILLAGER = 8,
  MINECART = 9
}

export class Mob {
  public mesh: THREE.Group;
  public body: CANNON.Body;
  public hp: number = 4;
  public type: MobType;

  private scene: THREE.Scene;
  private physicsWorld: CANNON.World;
  
  // アバターパーツ
  private head!: THREE.Mesh;
  private leftLeg!: THREE.Group;
  private rightLeg!: THREE.Group;
  private leftFrontLeg!: THREE.Group;
  private rightFrontLeg!: THREE.Group;
  private leftWing!: THREE.Group;
  private rightWing!: THREE.Group;
  
  // 状態管理
  private speed: number = 3.0;
  private jumpForce: number = 6.0;
  private attackCooldown: number = 0;
  private damageFlashTime: number = 0;

  // 友好・逃走用
  private roamTimer: number = 0;
  private roamDirection = new THREE.Vector3();
  private isFleeing: boolean = false;
  private fleeTimer: number = 0;

  // クリーパー自爆用
  public isPrimed: boolean = false;
  public fuseTimer: number = 0;
  private readonly fuseDuration: number = 1.5;

  // 村人ゾンビ治療用
  public isCuring: boolean = false;
  public cureTimer: number = 0;
  private readonly cureDuration: number = 5.0;
  
  // マップ上のマテリアル（最適化のため一元管理）
  private static sharedMaterials = {
    zombieGreen: new THREE.MeshStandardMaterial({ color: 0x55aa55, roughness: 0.9 }),
    zombieBlue: new THREE.MeshStandardMaterial({ color: 0x334e68, roughness: 0.9 }),
    zombiePurple: new THREE.MeshStandardMaterial({ color: 0x482c5b, roughness: 0.9 }),
    chickenWhite: new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.9 }),
    chickenRed: new THREE.MeshStandardMaterial({ color: 0xcc2222, roughness: 0.9 }),
    chickenYellow: new THREE.MeshStandardMaterial({ color: 0xffaa00, roughness: 0.9 }),
    pigPink: new THREE.MeshStandardMaterial({ color: 0xffa0b0, roughness: 0.9 }),
    pigDarkPink: new THREE.MeshStandardMaterial({ color: 0xff6080, roughness: 0.9 }),
    sheepWool: new THREE.MeshStandardMaterial({ color: 0xf0f0f0, roughness: 0.9 }),
    sheepSkin: new THREE.MeshStandardMaterial({ color: 0xffdbac, roughness: 0.9 }),
    cowBrown: new THREE.MeshStandardMaterial({ color: 0x5c4033, roughness: 0.9 }),
    cowWhite: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 }),
    slimeGreen: new THREE.MeshStandardMaterial({ color: 0x55ff55, transparent: true, opacity: 0.6, roughness: 0.4 }),
    slimeCore: new THREE.MeshStandardMaterial({ color: 0x22aa22, roughness: 0.4 }),
    creeperGreen: new THREE.MeshStandardMaterial({ color: 0x22aa22, roughness: 0.9 }),
    creeperBlack: new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 }),
    villagerBrown: new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.9 }),
    villagerNose: new THREE.MeshStandardMaterial({ color: 0xffb6c1, roughness: 0.9 }),
    villagerGreen: new THREE.MeshStandardMaterial({ color: 0x558855, roughness: 0.9 }),
    damage: new THREE.MeshStandardMaterial({ color: 0xff3333, roughness: 0.5 }),
  };

  private static tempVec3 = new THREE.Vector3();
  private static tempDirection = new THREE.Vector3();

  constructor(
    pos: THREE.Vector3,
    scene: THREE.Scene,
    physicsWorld: CANNON.World,
    type: MobType = MobType.ZOMBIE
  ) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.type = type;

    this.setupProperties();

    // 物理ボディのサイズ
    let halfWidth = 0.35;
    let halfHeight = 0.9;
    if (this.type === MobType.CHICKEN) {
      halfWidth = 0.2;
      halfHeight = 0.3;
    } else if (this.type === MobType.SLIME) {
      halfWidth = 0.3;
      halfHeight = 0.3;
    } else if (this.type === MobType.PIG) {
      halfWidth = 0.35;
      halfHeight = 0.4;
    } else if (this.type === MobType.SHEEP) {
      halfWidth = 0.4;
      halfHeight = 0.5;
    } else if (this.type === MobType.COW) {
      halfWidth = 0.45;
      halfHeight = 0.65;
    }

    const shape = new CANNON.Box(new CANNON.Vec3(halfWidth, halfHeight, halfWidth));

    this.body = new CANNON.Body({
      mass: (this.type === MobType.CHICKEN) ? 5 : 50,
      shape: shape,
      position: new CANNON.Vec3(pos.x, pos.y + halfHeight, pos.z),
      fixedRotation: true,
      linearDamping: 0.1,
    });

    this.physicsWorld.addBody(this.body);

    this.mesh = new THREE.Group();
    this.buildAvatar();
    this.scene.add(this.mesh);
  }

  private setupProperties(): void {
    switch (this.type) {
      case MobType.CHICKEN:
        this.hp = 2;
        this.speed = 1.5;
        this.jumpForce = 4.0;
        break;
      case MobType.PIG:
        this.hp = 3;
        this.speed = 2.0;
        this.jumpForce = 5.0;
        break;
      case MobType.SHEEP:
        this.hp = 3;
        this.speed = 1.8;
        this.jumpForce = 5.0;
        break;
      case MobType.COW:
        this.hp = 4;
        this.speed = 1.6;
        this.jumpForce = 5.0;
        break;
      case MobType.SLIME:
        this.hp = 3;
        this.speed = 1.5;
        this.jumpForce = 6.0;
        break;
      case MobType.CREEPER:
        this.hp = 4;
        this.speed = 2.5;
        this.jumpForce = 5.5;
        break;
      case MobType.VILLAGER:
        this.hp = 5;
        this.speed = 1.8;
        this.jumpForce = 5.0;
        break;
      case MobType.ZOMBIE_VILLAGER:
        this.hp = 5;
        this.speed = 2.2;
        this.jumpForce = 5.0;
        break;
      case MobType.MINECART:
        this.hp = 6;
        this.speed = 8.0;
        this.jumpForce = 0.0;
        break;
      default: // ZOMBIE
        this.hp = 4;
        this.speed = 3.0;
        this.jumpForce = 6.0;
        break;
    }
  }

  private buildMesh(geometry: THREE.BufferGeometry, material: THREE.Material, name: string): THREE.Mesh {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.originalMaterial = material;
    return mesh;
  }

  private buildAvatar(): void {
    const mats = Mob.sharedMaterials;

    if (this.type === MobType.ZOMBIE) {
      this.head = this.buildMesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), mats.zombieGreen, 'head');
      this.head.position.y = 0.5;
      this.mesh.add(this.head);

      const bodyMesh = this.buildMesh(new THREE.BoxGeometry(0.4, 0.6, 0.2), mats.zombieBlue, 'body');
      this.mesh.add(bodyMesh);

      const limbGeo = new THREE.BoxGeometry(0.2, 0.6, 0.2);
      limbGeo.translate(0, -0.3, 0);

      const leftArm = this.buildMesh(limbGeo, mats.zombieGreen, 'leftArm');
      leftArm.position.set(0.3, 0.3, 0);
      leftArm.rotation.x = -Math.PI / 2;
      this.mesh.add(leftArm);

      const rightArm = this.buildMesh(limbGeo, mats.zombieGreen, 'rightArm');
      rightArm.position.set(-0.3, 0.3, 0);
      rightArm.rotation.x = -Math.PI / 2;
      this.mesh.add(rightArm);

      this.leftLeg = new THREE.Group();
      this.leftLeg.add(this.buildMesh(limbGeo, mats.zombiePurple, 'leftLeg'));
      this.leftLeg.position.set(0.1, -0.3, 0);
      this.mesh.add(this.leftLeg);

      this.rightLeg = new THREE.Group();
      this.rightLeg.add(this.buildMesh(limbGeo, mats.zombiePurple, 'rightLeg'));
      this.rightLeg.position.set(-0.1, -0.3, 0);
      this.mesh.add(this.rightLeg);
    }
    else if (this.type === MobType.CHICKEN) {
      const bodyMesh = this.buildMesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), mats.chickenWhite, 'body');
      bodyMesh.position.y = 0.05;
      this.mesh.add(bodyMesh);

      this.head = this.buildMesh(new THREE.BoxGeometry(0.2, 0.2, 0.2), mats.chickenWhite, 'head');
      this.head.position.set(0, 0.25, 0.1);
      this.mesh.add(this.head);

      const beak = this.buildMesh(new THREE.BoxGeometry(0.1, 0.05, 0.08), mats.chickenYellow, 'beak');
      beak.position.set(0, 0.22, 0.22);
      this.mesh.add(beak);

      const wattle = this.buildMesh(new THREE.BoxGeometry(0.04, 0.06, 0.04), mats.chickenRed, 'wattle');
      wattle.position.set(0, 0.16, 0.18);
      this.mesh.add(wattle);

      const legGeo = new THREE.BoxGeometry(0.04, 0.15, 0.04);
      legGeo.translate(0, -0.075, 0);
      
      this.leftLeg = new THREE.Group();
      this.leftLeg.add(this.buildMesh(legGeo, mats.chickenYellow, 'leftLeg'));
      this.leftLeg.position.set(0.08, -0.1, 0);
      this.mesh.add(this.leftLeg);

      this.rightLeg = new THREE.Group();
      this.rightLeg.add(this.buildMesh(legGeo, mats.chickenYellow, 'rightLeg'));
      this.rightLeg.position.set(-0.08, -0.1, 0);
      this.mesh.add(this.rightLeg);

      const wingGeo = new THREE.BoxGeometry(0.02, 0.15, 0.2);
      wingGeo.translate(0, -0.075, 0);

      this.leftWing = new THREE.Group();
      this.leftWing.add(this.buildMesh(wingGeo, mats.chickenWhite, 'leftWing'));
      this.leftWing.position.set(0.16, 0.08, 0);
      this.mesh.add(this.leftWing);

      this.rightWing = new THREE.Group();
      this.rightWing.add(this.buildMesh(wingGeo, mats.chickenWhite, 'rightWing'));
      this.rightWing.position.set(-0.16, 0.08, 0);
      this.mesh.add(this.rightWing);
    }
    else if (this.type === MobType.PIG) {
      const bodyMesh = this.buildMesh(new THREE.BoxGeometry(0.5, 0.4, 0.7), mats.pigPink, 'body');
      this.mesh.add(bodyMesh);

      this.head = this.buildMesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), mats.pigPink, 'head');
      this.head.position.set(0, 0.2, 0.38);
      this.mesh.add(this.head);

      const snout = this.buildMesh(new THREE.BoxGeometry(0.12, 0.08, 0.06), mats.pigDarkPink, 'snout');
      snout.position.set(0, 0.12, 0.54);
      this.mesh.add(snout);

      const legGeo = new THREE.BoxGeometry(0.12, 0.3, 0.12);
      legGeo.translate(0, -0.15, 0);

      this.leftLeg = new THREE.Group();
      this.leftLeg.add(this.buildMesh(legGeo, mats.pigPink, 'leftLeg'));
      this.leftLeg.position.set(0.18, -0.2, -0.2);
      this.mesh.add(this.leftLeg);

      this.rightLeg = new THREE.Group();
      this.rightLeg.add(this.buildMesh(legGeo, mats.pigPink, 'rightLeg'));
      this.rightLeg.position.set(-0.18, -0.2, -0.2);
      this.mesh.add(this.rightLeg);

      this.leftFrontLeg = new THREE.Group();
      this.leftFrontLeg.add(this.buildMesh(legGeo, mats.pigPink, 'leftFrontLeg'));
      this.leftFrontLeg.position.set(0.18, -0.2, 0.2);
      this.mesh.add(this.leftFrontLeg);

      this.rightFrontLeg = new THREE.Group();
      this.rightFrontLeg.add(this.buildMesh(legGeo, mats.pigPink, 'rightFrontLeg'));
      this.rightFrontLeg.position.set(-0.18, -0.2, 0.2);
      this.mesh.add(this.rightFrontLeg);
    }
    else if (this.type === MobType.SHEEP) {
      const bodyMesh = this.buildMesh(new THREE.BoxGeometry(0.55, 0.45, 0.75), mats.sheepWool, 'body');
      this.mesh.add(bodyMesh);

      this.head = this.buildMesh(new THREE.BoxGeometry(0.25, 0.25, 0.25), mats.sheepSkin, 'head');
      this.head.position.set(0, 0.22, 0.4);
      this.mesh.add(this.head);

      const woolHat = this.buildMesh(new THREE.BoxGeometry(0.27, 0.1, 0.27), mats.sheepWool, 'woolHat');
      woolHat.position.y = 0.1;
      this.head.add(woolHat);

      const legGeo = new THREE.BoxGeometry(0.12, 0.3, 0.12);
      legGeo.translate(0, -0.15, 0);

      this.leftLeg = new THREE.Group();
      this.leftLeg.add(this.buildMesh(legGeo, mats.sheepWool, 'leftLeg'));
      this.leftLeg.position.set(0.18, -0.22, -0.25);
      this.mesh.add(this.leftLeg);

      this.rightLeg = new THREE.Group();
      this.rightLeg.add(this.buildMesh(legGeo, mats.sheepWool, 'rightLeg'));
      this.rightLeg.position.set(-0.18, -0.22, -0.25);
      this.mesh.add(this.rightLeg);

      this.leftFrontLeg = new THREE.Group();
      this.leftFrontLeg.add(this.buildMesh(legGeo, mats.sheepWool, 'leftFrontLeg'));
      this.leftFrontLeg.position.set(0.18, -0.22, 0.25);
      this.mesh.add(this.leftFrontLeg);

      this.rightFrontLeg = new THREE.Group();
      this.rightFrontLeg.add(this.buildMesh(legGeo, mats.sheepWool, 'rightFrontLeg'));
      this.rightFrontLeg.position.set(-0.18, -0.22, 0.25);
      this.mesh.add(this.rightFrontLeg);
    }
    else if (this.type === MobType.COW) {
      const bodyMesh = this.buildMesh(new THREE.BoxGeometry(0.6, 0.55, 0.85), mats.cowBrown, 'body');
      this.mesh.add(bodyMesh);

      const patch = this.buildMesh(new THREE.BoxGeometry(0.61, 0.2, 0.3), mats.cowWhite, 'patch');
      patch.position.set(0, 0.1, -0.1);
      this.mesh.add(patch);

      this.head = this.buildMesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), mats.cowBrown, 'head');
      this.head.position.set(0, 0.25, 0.45);
      this.mesh.add(this.head);

      const hornL = this.buildMesh(new THREE.BoxGeometry(0.04, 0.1, 0.04), mats.cowWhite, 'hornL');
      hornL.position.set(0.13, 0.2, 0);
      this.head.add(hornL);

      const hornR = this.buildMesh(new THREE.BoxGeometry(0.04, 0.1, 0.04), mats.cowWhite, 'hornR');
      hornR.position.set(-0.13, 0.2, 0);
      this.head.add(hornR);

      const legGeo = new THREE.BoxGeometry(0.14, 0.4, 0.14);
      legGeo.translate(0, -0.2, 0);

      this.leftLeg = new THREE.Group();
      this.leftLeg.add(this.buildMesh(legGeo, mats.cowBrown, 'leftLeg'));
      this.leftLeg.position.set(0.2, -0.27, -0.3);
      this.mesh.add(this.leftLeg);

      this.rightLeg = new THREE.Group();
      this.rightLeg.add(this.buildMesh(legGeo, mats.cowBrown, 'rightLeg'));
      this.rightLeg.position.set(-0.2, -0.27, -0.3);
      this.mesh.add(this.rightLeg);

      this.leftFrontLeg = new THREE.Group();
      this.leftFrontLeg.add(this.buildMesh(legGeo, mats.cowBrown, 'leftFrontLeg'));
      this.leftFrontLeg.position.set(0.2, -0.27, 0.3);
      this.mesh.add(this.leftFrontLeg);

      this.rightFrontLeg = new THREE.Group();
      this.rightFrontLeg.add(this.buildMesh(legGeo, mats.cowBrown, 'rightFrontLeg'));
      this.rightFrontLeg.position.set(-0.2, -0.27, 0.3);
      this.mesh.add(this.rightFrontLeg);
    }
    else if (this.type === MobType.SLIME) {
      const outerMesh = this.buildMesh(new THREE.BoxGeometry(0.6, 0.6, 0.6), mats.slimeGreen, 'outer');
      this.mesh.add(outerMesh);

      const coreMesh = this.buildMesh(new THREE.BoxGeometry(0.25, 0.25, 0.25), mats.slimeCore, 'core');
      this.mesh.add(coreMesh);

      const eyeL = this.buildMesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), mats.creeperBlack, 'eyeL');
      eyeL.position.set(0.14, 0.1, 0.301);
      this.mesh.add(eyeL);

      const eyeR = this.buildMesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), mats.creeperBlack, 'eyeR');
      eyeR.position.set(-0.14, 0.1, 0.301);
      this.mesh.add(eyeR);
    }
    else if (this.type === MobType.CREEPER) {
      this.head = this.buildMesh(new THREE.BoxGeometry(0.38, 0.38, 0.38), mats.creeperGreen, 'head');
      this.head.position.y = 0.4;
      this.mesh.add(this.head);

      const eyeL = this.buildMesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), mats.creeperBlack, 'eyeL');
      eyeL.position.set(0.09, 0.05, -0.191);
      this.head.add(eyeL);

      const eyeR = this.buildMesh(new THREE.BoxGeometry(0.08, 0.08, 0.02), mats.creeperBlack, 'eyeR');
      eyeR.position.set(-0.09, 0.05, -0.191);
      this.head.add(eyeR);

      const mouth = this.buildMesh(new THREE.BoxGeometry(0.14, 0.16, 0.02), mats.creeperBlack, 'mouth');
      mouth.position.set(0, -0.07, -0.191);
      this.head.add(mouth);

      const bodyMesh = this.buildMesh(new THREE.BoxGeometry(0.28, 0.48, 0.18), mats.creeperGreen, 'body');
      bodyMesh.position.y = -0.03;
      this.mesh.add(bodyMesh);

      const footGeo = new THREE.BoxGeometry(0.14, 0.18, 0.14);
      footGeo.translate(0, -0.09, 0);

      this.leftLeg = new THREE.Group();
      this.leftLeg.add(this.buildMesh(footGeo, mats.creeperGreen, 'leftLeg'));
      this.leftLeg.position.set(0.1, -0.27, -0.12);
      this.mesh.add(this.leftLeg);

      this.rightLeg = new THREE.Group();
      this.rightLeg.add(this.buildMesh(footGeo, mats.creeperGreen, 'rightLeg'));
      this.rightLeg.position.set(-0.1, -0.27, -0.12);
      this.mesh.add(this.rightLeg);

      this.leftFrontLeg = new THREE.Group();
      this.leftFrontLeg.add(this.buildMesh(footGeo, mats.creeperGreen, 'leftFrontLeg'));
      this.leftFrontLeg.position.set(0.1, -0.27, 0.12);
      this.mesh.add(this.leftFrontLeg);

      this.rightFrontLeg = new THREE.Group();
      this.rightFrontLeg.add(this.buildMesh(footGeo, mats.creeperGreen, 'rightFrontLeg'));
      this.rightFrontLeg.position.set(-0.1, -0.27, 0.12);
      this.mesh.add(this.rightFrontLeg);
    }
    else if (this.type === MobType.VILLAGER || this.type === MobType.ZOMBIE_VILLAGER) {
      const skinMat = (this.type === MobType.ZOMBIE_VILLAGER) ? mats.villagerGreen : mats.sheepSkin;
      const bodyMat = (this.type === MobType.ZOMBIE_VILLAGER) ? mats.zombiePurple : mats.villagerBrown;

      this.head = this.buildMesh(new THREE.BoxGeometry(0.35, 0.4, 0.35), skinMat, 'head');
      this.head.position.y = 0.5;
      this.mesh.add(this.head);

      const nose = this.buildMesh(new THREE.BoxGeometry(0.08, 0.16, 0.08), mats.villagerNose, 'nose');
      nose.position.set(0, -0.05, 0.2);
      this.head.add(nose);

      const bodyMesh = this.buildMesh(new THREE.BoxGeometry(0.4, 0.7, 0.3), bodyMat, 'body');
      this.mesh.add(bodyMesh);

      const armsFolded = this.buildMesh(new THREE.BoxGeometry(0.46, 0.15, 0.22), mats.villagerBrown, 'armsFolded');
      armsFolded.position.set(0, 0.1, 0.18);
      this.mesh.add(armsFolded);

      const legGeo = new THREE.BoxGeometry(0.16, 0.35, 0.16);
      legGeo.translate(0, -0.175, 0);

      this.leftLeg = new THREE.Group();
      this.leftLeg.add(this.buildMesh(legGeo, mats.zombieBlue, 'leftLeg'));
      this.leftLeg.position.set(0.1, -0.35, 0);
      this.mesh.add(this.leftLeg);

      this.rightLeg = new THREE.Group();
      this.rightLeg.add(this.buildMesh(legGeo, mats.zombieBlue, 'rightLeg'));
      this.rightLeg.position.set(-0.1, -0.35, 0);
      this.mesh.add(this.rightLeg);
    }
    else if (this.type === MobType.MINECART) {
      // 底板 (スチールグレー)
      const bottom = this.buildMesh(new THREE.BoxGeometry(0.7, 0.08, 0.7), mats.creeperBlack, 'bottom');
      this.mesh.add(bottom);

      // 前後の壁
      const wallFront = this.buildMesh(new THREE.BoxGeometry(0.7, 0.35, 0.08), mats.zombieBlue, 'wallFront');
      wallFront.position.set(0, 0.15, 0.31);
      this.mesh.add(wallFront);

      const wallBack = this.buildMesh(new THREE.BoxGeometry(0.7, 0.35, 0.08), mats.zombieBlue, 'wallBack');
      wallBack.position.set(0, 0.15, -0.31);
      this.mesh.add(wallBack);

      // 左右の壁
      const wallLeft = this.buildMesh(new THREE.BoxGeometry(0.08, 0.35, 0.54), mats.zombieBlue, 'wallLeft');
      wallLeft.position.set(0.31, 0.15, 0);
      this.mesh.add(wallLeft);

      const wallRight = this.buildMesh(new THREE.BoxGeometry(0.08, 0.35, 0.54), mats.zombieBlue, 'wallRight');
      wallRight.position.set(-0.31, 0.15, 0);
      this.mesh.add(wallRight);

      // 車輪 (黒い小さなボックス)
      const wheelGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
      const wheelFL = this.buildMesh(wheelGeo, mats.creeperBlack, 'wheelFL');
      wheelFL.position.set(0.25, -0.1, 0.25);
      this.mesh.add(wheelFL);

      const wheelFR = this.buildMesh(wheelGeo, mats.creeperBlack, 'wheelFR');
      wheelFR.position.set(-0.25, -0.1, 0.25);
      this.mesh.add(wheelFR);

      const wheelBL = this.buildMesh(wheelGeo, mats.creeperBlack, 'wheelBL');
      wheelBL.position.set(0.25, -0.1, -0.25);
      this.mesh.add(wheelBL);

      const wheelBR = this.buildMesh(wheelGeo, mats.creeperBlack, 'wheelBR');
      wheelBR.position.set(-0.25, -0.1, -0.25);
      this.mesh.add(wheelBR);
    }
  }

  public isFriendly(): boolean {
    return (
      this.type === MobType.CHICKEN ||
      this.type === MobType.PIG ||
      this.type === MobType.SHEEP ||
      this.type === MobType.COW ||
      this.type === MobType.VILLAGER ||
      this.type === MobType.MINECART
    );
  }

  public update(deltaTime: number, player: Player, world: World, frustum?: THREE.Frustum): boolean {
    const pPos = player.position;
    const mobPos = Mob.tempVec3.set(this.body.position.x, this.body.position.y, this.body.position.z);
    const dist = mobPos.distanceTo(pPos);

    // 画面外（フラストラム外）かつ一定距離以上離れた場合のみデスポーン
    // 画面内に映っているモブは消えない
    if (dist > CONFIG.MOB_DESPAWN_RADIUS) {
      const isVisible = frustum ? frustum.containsPoint(mobPos) : false;
      if (!isVisible) {
        this.destroy();
        return true; // デスポーン
      }
    }

    if (this.damageFlashTime > 0) {
      this.damageFlashTime -= deltaTime;
      if (this.damageFlashTime <= 0) {
        this.setMaterials(false);
      }
    }

    // にわとりの羽ばたき落下
    if (this.type === MobType.CHICKEN && this.body.velocity.y < -1.5) {
      this.body.velocity.y = -1.5;
    }

    if (player.hp > 0) {
      this.runAI(deltaTime, pPos, dist, player, world);
    } else {
      this.body.velocity.x *= 0.8;
      this.body.velocity.z *= 0.8;
    }

    this.mesh.position.set(this.body.position.x, this.body.position.y, this.body.position.z);
    
    // 歩行アニメーション
    const speedSq = this.body.velocity.x * this.body.velocity.x + this.body.velocity.z * this.body.velocity.z;
    if (speedSq > 0.05) {
      const time = performance.now() * 0.01;
      const angle = Math.sin(time) * 0.6;
      
      if (this.leftLeg) this.leftLeg.rotation.x = -angle;
      if (this.rightLeg) this.rightLeg.rotation.x = angle;
      if (this.leftFrontLeg) this.leftFrontLeg.rotation.x = angle;
      if (this.rightFrontLeg) this.rightFrontLeg.rotation.x = -angle;

      if (this.type === MobType.CHICKEN && this.leftWing && this.rightWing) {
        this.leftWing.rotation.z = Math.sin(time * 3) * 0.4;
        this.rightWing.rotation.z = -Math.sin(time * 3) * 0.4;
      }
    } else {
      if (this.leftLeg) this.leftLeg.rotation.x = 0;
      if (this.rightLeg) this.rightLeg.rotation.x = 0;
      if (this.leftFrontLeg) this.leftFrontLeg.rotation.x = 0;
      if (this.rightFrontLeg) this.rightFrontLeg.rotation.x = 0;
      if (this.leftWing) this.leftWing.rotation.z = 0;
      if (this.rightWing) this.rightWing.rotation.z = 0;
    }

    // スライムの伸縮
    if (this.type === MobType.SLIME) {
      const isGrounded = Math.abs(this.body.velocity.y) < 0.1;
      if (!isGrounded) {
        this.mesh.scale.set(0.8, 1.3, 0.8);
      } else {
        this.mesh.scale.set(1.0, 1.0, 1.0);
      }
    }

    return false;
  }

  private runAI(deltaTime: number, pPos: THREE.Vector3, dist: number, player: Player, world: World): void {
    if (this.type === MobType.MINECART) {
      this.body.velocity.x *= 0.95;
      this.body.velocity.z *= 0.95;
      return;
    }

    if (this.isCuring) {
      this.body.velocity.x *= 0.5;
      this.body.velocity.z *= 0.5;
      
      this.cureTimer += deltaTime;
      const flash = Math.floor(this.cureTimer * 10) % 2 === 0;
      this.setMaterials(flash);
      
      if (this.cureTimer >= this.cureDuration) {
        this.type = MobType.VILLAGER;
        this.hp = 5;
        this.isCuring = false;
        this.setupProperties();
        
        this.scene.remove(this.mesh);
        this.mesh = new THREE.Group();
        this.buildAvatar();
        this.scene.add(this.mesh);
        SoundManager.playPlace(BlockType.TORCH);
      }
      return;
    }

    if (this.type === MobType.CREEPER && this.isPrimed) {
      this.body.velocity.x = 0;
      this.body.velocity.z = 0;
      this.fuseTimer += deltaTime;

      const flash = Math.floor(this.fuseTimer * 8) % 2 === 0;
      this.setMaterials(flash);
      
      if (this.fuseTimer >= this.fuseDuration) {
        this.explode(player, world);
      }
      return;
    }

    if (this.isFriendly()) {
      this.roamTimer -= deltaTime;
      
      if (this.isFleeing) {
        this.fleeTimer -= deltaTime;
        if (this.fleeTimer <= 0) {
          this.isFleeing = false;
        }
      }

      if (this.roamTimer <= 0) {
        this.roamTimer = 2.0 + Math.random() * 4.0;
        const angle = Math.random() * Math.PI * 2;
        this.roamDirection.set(Math.sin(angle), 0, Math.cos(angle)).normalize();
      }

      const currentSpeed = this.isFleeing ? this.speed * 2.0 : this.speed;
      this.body.velocity.x = this.roamDirection.x * currentSpeed;
      this.body.velocity.z = this.roamDirection.z * currentSpeed;

      if (this.body.velocity.x !== 0 || this.body.velocity.z !== 0) {
        const targetAngle = Math.atan2(this.body.velocity.x, this.body.velocity.z);
        this.mesh.rotation.y = targetAngle;
      }

      const isBlocked = (this.body.velocity.x === 0 && this.body.velocity.z === 0) || 
                        (Math.abs(this.body.velocity.x) < currentSpeed * 0.2 && Math.abs(this.body.velocity.z) < currentSpeed * 0.2);
      const isGrounded = Math.abs(this.body.velocity.y) < 0.02;
      if (isBlocked && isGrounded && Math.random() < 0.1) {
        this.body.velocity.y = this.jumpForce;
      }
    } 
    else {
      const dir = Mob.tempDirection.set(pPos.x - this.body.position.x, 0, pPos.z - this.body.position.z);
      dir.normalize();

      const targetAngle = Math.atan2(dir.x, dir.z);
      this.mesh.rotation.y = targetAngle;

      if (this.type === MobType.SLIME) {
        this.roamTimer -= deltaTime;
        const isGrounded = Math.abs(this.body.velocity.y) < 0.05;

        if (this.roamTimer <= 0 && isGrounded) {
          this.roamTimer = 1.0 + Math.random() * 1.5;
          this.body.velocity.y = this.jumpForce;
          this.body.velocity.x = dir.x * this.speed * 2.0;
          this.body.velocity.z = dir.z * this.speed * 2.0;
        } else if (isGrounded) {
          this.body.velocity.x *= 0.8;
          this.body.velocity.z *= 0.8;
        }
      } 
      else if (this.type === MobType.CREEPER) {
        if (dist < 2.0) {
          this.isPrimed = true;
          this.fuseTimer = 0;
          SoundManager.playPlace(BlockType.TORCH);
        } else if (dist < CONFIG.MOB_SPAWN_RADIUS) {
          this.body.velocity.x = dir.x * this.speed;
          this.body.velocity.z = dir.z * this.speed;
        } else {
          this.body.velocity.x *= 0.8;
          this.body.velocity.z *= 0.8;
        }
      } 
      else {
        // ZOMBIE, ZOMBIE_VILLAGER
        if (dist < CONFIG.MOB_SPAWN_RADIUS) {
          this.body.velocity.x = dir.x * this.speed;
          this.body.velocity.z = dir.z * this.speed;

          const currentSpeedSq = this.body.velocity.x * this.body.velocity.x + this.body.velocity.z * this.body.velocity.z;
          const targetSpeedSq = this.speed * this.speed;
          const isBlocked = (currentSpeedSq < targetSpeedSq * 0.25);
          const isGrounded = Math.abs(this.body.velocity.y) < 0.02;

          if (isBlocked && isGrounded) {
            this.body.velocity.y = this.jumpForce;
          }
        } else {
          this.body.velocity.x *= 0.8;
          this.body.velocity.z *= 0.8;
        }
      }

      if (this.type !== MobType.CREEPER) {
        if (this.attackCooldown > 0) {
          this.attackCooldown -= deltaTime;
        }

        if (dist < 1.3 && this.attackCooldown <= 0) {
          player.takeDamage(2);
          this.attackCooldown = 1.2;
        }
      }
    }
  }

  private explode(player: Player, world: World): void {
    const px = Math.floor(this.body.position.x);
    const py = Math.floor(this.body.position.y);
    const pz = Math.floor(this.body.position.z);
    const radius = 3;

    for (let dx = -radius; dx <= radius; dx++) {
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dz = -radius; dz <= radius; dz++) {
          if (dx * dx + dy * dy + dz * dz <= radius * radius) {
            const tx = px + dx;
            const ty = py + dy;
            const tz = pz + dz;
            if (world.getBlock(tx, ty, tz) !== BlockType.BEDROCK) {
              world.setBlock(tx, ty, tz, BlockType.AIR);
            }
          }
        }
      }
    }

    const dist = this.body.position.distanceTo(new CANNON.Vec3(player.position.x, player.position.y, player.position.z));
    if (dist < 4.0) {
      const damage = Math.max(1, Math.floor((4.0 - dist) * 3));
      player.takeDamage(damage * 2);
    }

    SoundManager.playPlace(BlockType.GLASS);

    this.hp = 0;
    this.destroy();
  }

  public takeDamage(amount: number, knockbackDir: THREE.Vector3): boolean {
    this.hp -= amount;
    this.damageFlashTime = 0.2;
    this.setMaterials(true);

    SoundManager.playHit();

    if (this.isFriendly()) {
      this.isFleeing = true;
      this.fleeTimer = 3.0;
      this.roamDirection.set(knockbackDir.x, 0, knockbackDir.z).normalize();
      this.roamTimer = 3.0;
    }

    this.body.velocity.y = 4.0;
    this.body.velocity.x = knockbackDir.x * 6.0;
    this.body.velocity.z = knockbackDir.z * 6.0;

    if (this.hp <= 0) {
      this.destroy();
      return true;
    }
    return false;
  }

  private setMaterials(isDamaged: boolean): void {
    const mats = Mob.sharedMaterials;
    this.mesh.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (isDamaged) {
          child.material = mats.damage;
        } else {
          child.material = child.userData.originalMaterial || mats.zombieGreen;
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
