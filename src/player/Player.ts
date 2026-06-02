import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { CONFIG } from '../config.ts';
import { InputHandler } from '../input/InputHandler.ts';
import { World } from '../world/World.ts';

export class Player {
  public position: THREE.Vector3;
  public camera: THREE.PerspectiveCamera;
  public body: CANNON.Body;

  // 回転状態 (ラジアン)
  private pitch: number = 0;
  private yaw: number = 0;

  private sensitivity: number = 0.002;
  private speed: number = CONFIG.PLAYER_SPEED;
  private jumpForce: number = CONFIG.PLAYER_JUMP_FORCE;

  // 接地判定用の簡易フラグ
  private isGrounded: boolean = false;

  constructor(camera: THREE.PerspectiveCamera, startPos: THREE.Vector3, world: CANNON.World) {
    this.camera = camera;
    this.position = startPos.clone();

    // プレイヤーの物理剛体 (Box) を作成
    // CANNON.Boxのサイズは中心からの半分の長さ（ハーフエクステント）
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

    // カメラの初期同期
    this.syncCamera();
  }

  public update(input: InputHandler, deltaTime: number, voxelWorld: World): void {
    // 物理ボディから位置を同期
    this.position.set(this.body.position.x, this.body.position.y, this.body.position.z);

    if (!input.isLocked) {
      // ポインターロックが外れている時は物理ボディの速度を減衰させ静止させる
      this.body.velocity.x *= 0.8;
      this.body.velocity.z *= 0.8;
      return;
    }

    this.handleRotation(input);
    this.checkGrounded(voxelWorld);
    this.handleMovement(input, deltaTime);
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

  // 接地状態の簡易判定
  private checkGrounded(voxelWorld: World): void {
    // 物理エンジンの速度Yがほぼ0で、かつ足元のブロックがSolidかどうかをチェック
    // プレイヤーの足元座標は (position.y - PLAYER_HEIGHT / 2)
    const feetY = this.position.y - CONFIG.PLAYER_HEIGHT / 2 - 0.1;
    
    // 足元の4角＋中心をサンプリング
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
      
      // 足元のブロックがAIR以外であれば設置とみなす
      // 後でBLOCKS[type].isSolidを見ても良い
      if (voxelWorld.getBlock(blockX, blockY, blockZ) !== 0) {
        onSolidBlock = true;
        break;
      }
    }

    // 物理エンジンの接触判定と足元ブロック判定の組み合わせ
    // velocity.yがほぼ下向きに止まっている場合
    this.isGrounded = onSolidBlock || Math.abs(this.body.velocity.y) < 0.05;
  }

  // キー入力による移動 (物理ボディへの速度設定)
  private handleMovement(input: InputHandler, _deltaTime: number): void {
    const moveVector = new THREE.Vector3();

    if (input.keys['KeyW']) moveVector.z -= 1;
    if (input.keys['KeyS']) moveVector.z += 1;
    if (input.keys['KeyA']) moveVector.x -= 1;
    if (input.keys['KeyD']) moveVector.x += 1;

    moveVector.normalize();

    // ヨー（左右回転）の向きにベクトルを回転させる
    const direction = new THREE.Vector3();
    direction.copy(moveVector);
    direction.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);

    // 物理ボディの水平速度を直接書き換える (キビキビ動くマイクラ風の操作性)
    this.body.velocity.x = direction.x * this.speed;
    this.body.velocity.z = direction.z * this.speed;

    // ジャンプ
    if (input.keys['Space'] && this.isGrounded) {
      this.body.velocity.y = this.jumpForce;
      this.isGrounded = false;
    }
  }

  // カメラの位置と回転をプレイヤーに同期
  private syncCamera(): void {
    const cameraRotation = new THREE.Quaternion();
    const qYaw = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.yaw);
    const qPitch = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), this.pitch);
    cameraRotation.multiplyQuaternions(qYaw, qPitch);
    this.camera.quaternion.copy(cameraRotation);

    // カメラの高さは、プレイヤーの中心座標から目線分だけ上げる
    // center of player box = body.position
    // eyes height = body.position.y + halfHeight * 0.8
    const eyeHeight = CONFIG.PLAYER_HEIGHT / 2 - 0.2;
    this.camera.position.set(
      this.position.x,
      this.position.y + eyeHeight,
      this.position.z
    );
  }

  private updateHUD(): void {
    const posDisplay = document.getElementById('pos-display');
    if (posDisplay) {
      posDisplay.textContent = `${this.position.x.toFixed(1)}, ${this.position.y.toFixed(1)}, ${this.position.z.toFixed(1)}`;
    }
  }

  public getYaw(): number {
    return this.yaw;
  }
}
