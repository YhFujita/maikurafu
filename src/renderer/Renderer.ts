import * as THREE from 'three';
import { CONFIG } from '../config.ts';
import { configStore } from '../configStore.ts';

export class Renderer {
  public scene!: THREE.Scene;
  public camera!: THREE.PerspectiveCamera;
  public renderer!: THREE.WebGLRenderer;
  
  private container: HTMLElement;

  constructor(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container element with id "${containerId}" not found.`);
    }
    this.container = container;

    this.initScene();
    this.initCamera();
    this.initRenderer();

    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private initScene(): void {
    this.scene = new THREE.Scene();
    // 空の色（薄い水色）
    this.scene.background = new THREE.Color(0x7ec0ee);
    // フォグ（霧）を追加して、描画限界の境目を滑らかにする（軽量化にも貢献）
    this.scene.fog = new THREE.FogExp2(0x7ec0ee, 0.015);
  }

  private initCamera(): void {
    const aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(
      CONFIG.FOVY,
      aspect,
      CONFIG.NEAR,
      CONFIG.FAR
    );
    // 初期カメラ位置
    this.camera.position.set(0, 5, 10);
    this.camera.lookAt(0, 0, 0);
  }

  private initRenderer(): void {
    const config = configStore.getConfig();

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // 4GB環境向けにピクセル比上限を2に制限
    
    // シャドウマップの有効化（設定から読み込む）
    this.renderer.shadowMap.enabled = config.enableShadows;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.appendChild(this.renderer.domElement);
  }

  private onWindowResize(): void {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }

  public render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}
