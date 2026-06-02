import * as THREE from 'three';

export class TimeManager {
  private time: number = 0; // 0.0 ~ 1.0 (0.0 = 正午, 0.5 = 真夜中)
  private timeScale: number = 0.01; // 時間の進む速度

  private sunLight: THREE.DirectionalLight;
  private ambientLight: THREE.AmbientLight;
  private scene: THREE.Scene;

  // メモリ最適化：GCを防ぐために色オブジェクトを1度だけアロケートして再利用する
  private skyColor = new THREE.Color();
  private sunColor = new THREE.Color();
  private ambientColor = new THREE.Color();

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // シーンの背景に色オブジェクトをセット（毎フレームインスタンス化するのを避ける）
    this.scene.background = this.skyColor;

    // 太陽光の作成
    this.sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
    this.sunLight.castShadow = true;
    
    // シャドウマップの解像度調整（4GBメモリ向けに低負荷に設定）
    this.sunLight.shadow.mapSize.width = 1024;
    this.sunLight.shadow.mapSize.height = 1024;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 80;
    
    const d = 30;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0005;

    this.scene.add(this.sunLight);

    // 環境光の作成
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(this.ambientLight);
  }

  public update(deltaTime: number, playerPosition: THREE.Vector3): void {
    // 時間を進める
    this.time = (this.time + this.timeScale * deltaTime) % 1.0;

    // 太陽の角度（角度 = time * 2 * PI）
    const angle = this.time * Math.PI * 2;
    const sinAngle = Math.sin(angle);
    const cosAngle = Math.cos(angle);

    // 太陽光の位置設定（常にプレイヤーの頭上に追従させることで、シャドウマップの範囲を有効活用する）
    this.sunLight.position.set(
      playerPosition.x + cosAngle * 40,
      playerPosition.y + sinAngle * 40,
      playerPosition.z + cosAngle * 20
    );
    this.sunLight.target.position.copy(playerPosition);
    this.sunLight.target.updateMatrixWorld();

    // 昼夜に応じた色の調整（sinAngleの高さに基づく）
    // sinAngle > 0 は昼、sinAngle < 0 は夜
    const dayFactor = Math.max(0, Math.min(1, sinAngle * 2 + 0.5)); // 0.0 (夜) ~ 1.0 (昼)

    // 1. 空の色の更新
    // 昼：薄い青色 (0.4, 0.6, 0.9)  夜：紺色 (0.02, 0.03, 0.08)
    const skyR = THREE.MathUtils.lerp(0.02, 0.45, dayFactor);
    const skyG = THREE.MathUtils.lerp(0.03, 0.65, dayFactor);
    const skyB = THREE.MathUtils.lerp(0.08, 0.95, dayFactor);
    this.skyColor.setRGB(skyR, skyG, skyB);

    // 2. 太陽光の強さと色の更新
    // 昼：明るい黄色 (1.0, 0.95, 0.8) 夜：ほぼ消す (0, 0, 0)
    const sunIntensity = THREE.MathUtils.lerp(0.0, 1.2, dayFactor);
    this.sunLight.intensity = sunIntensity;
    const sunR = THREE.MathUtils.lerp(0.1, 1.0, dayFactor);
    const sunG = THREE.MathUtils.lerp(0.1, 0.95, dayFactor);
    const sunB = THREE.MathUtils.lerp(0.2, 0.85, dayFactor);
    this.sunColor.setRGB(sunR, sunG, sunB);
    this.sunLight.color.copy(this.sunColor);

    // 3. 環境光の強さと色の更新
    // 昼：明るい白 (0.4) 夜：ほの暗い青 (0.08)
    const ambIntensity = THREE.MathUtils.lerp(0.08, 0.45, dayFactor);
    this.ambientLight.intensity = ambIntensity;
    const ambR = THREE.MathUtils.lerp(0.1, 1.0, dayFactor);
    const ambG = THREE.MathUtils.lerp(0.12, 1.0, dayFactor);
    const ambB = THREE.MathUtils.lerp(0.2, 1.0, dayFactor);
    this.ambientColor.setRGB(ambR, ambG, ambB);
    this.ambientLight.color.copy(this.ambientColor);
  }

  // 現在の時間帯が「夜」であるかどうかを判定（Mobスポーン判定に使用）
  public isNight(): boolean {
    const angle = this.time * Math.PI * 2;
    return Math.sin(angle) < -0.1;
  }
}
