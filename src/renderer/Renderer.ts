import * as THREE from 'three';
import { CONFIG } from '../config.ts';

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
    this.initLights();

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
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // 4GB環境向けにピクセル比上限を2に制限
    
    // シャドウマップの有効化（低負荷に設定）
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.appendChild(this.renderer.domElement);
  }

  private initLights(): void {
    // 環境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);

    // 平行光源（太陽光）
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(20, 40, 20);
    dirLight.castShadow = true;

    // シャドウマップの解像度を抑えてメモリ消費を低減
    dirLight.shadow.mapSize.width = 512;
    dirLight.shadow.mapSize.height = 512;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 150;
    
    const d = 40;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;

    this.scene.add(dirLight);
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
