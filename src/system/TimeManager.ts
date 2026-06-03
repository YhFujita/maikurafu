import * as THREE from 'three';
import { configStore } from '../configStore.ts';

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

    const config = configStore.getConfig();

    // 太陽光の作成
    this.sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
    this.sunLight.castShadow = config.enableShadows;
    
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
    // 太陽が地平線の上（昼）か下（夜）かによって時間の進む速度を変える
    const currentAngle = this.time * Math.PI * 2;
    const currentSin = Math.sin(currentAngle);
    let speedFactor = 1.0;
    if (currentSin > -0.1) {
      speedFactor = 0.35; // 昼はゆっくり進める（昼が約3倍長くなる）
    } else {
      speedFactor = 2.5;  // 夜は早く進める（夜が早く明ける）
    }

    // 時間を進める
    this.time = (this.time + this.timeScale * speedFactor * deltaTime) % 1.0;

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
    // 昼：明るい白 (0.45) 夜：薄暗い月明かりの青 (0.22)
    const ambIntensity = THREE.MathUtils.lerp(0.22, 0.45, dayFactor);
    this.ambientLight.intensity = ambIntensity;
    const ambR = THREE.MathUtils.lerp(0.15, 1.0, dayFactor);
    const ambG = THREE.MathUtils.lerp(0.18, 1.0, dayFactor);
    const ambB = THREE.MathUtils.lerp(0.35, 1.0, dayFactor);

    this.ambientColor.setRGB(ambR, ambG, ambB);

    this.ambientLight.color.copy(this.ambientColor);
  }

  // 外部から影の有効・無効を切り替える
  public setShadowsEnabled(enabled: boolean): void {
    this.sunLight.castShadow = enabled;
  }

  // 現在の時間帯が「夜」であるかどうかを判定（Mobスポーン判定に使用）
  public isNight(): boolean {
    const angle = this.time * Math.PI * 2;
    return Math.sin(angle) < -0.1;
  }
}
