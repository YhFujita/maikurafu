import * as THREE from 'three';
import { World } from '../world/World.ts';
import { BlockType } from '../world/Block.ts';
import { CONFIG } from '../config.ts';

const BLOCK_COLORS: Record<number, string> = {
  [BlockType.AIR]: '#000000',
  [BlockType.GROUND]: '#4ade80',
  [BlockType.DIRT]: '#854d0e',
  [BlockType.STONE]: '#9ca3af',
  [BlockType.WOOD]: '#78350f',
  [BlockType.LEAVES]: '#22c55e',
  [BlockType.PLANK]: '#f59e0b',
  [BlockType.BRICK]: '#ef4444',
  [BlockType.SAND]: '#fef08a',
  [BlockType.COAL_ORE]: '#374151',
  [BlockType.IRON_ORE]: '#d4d4d8',
  [BlockType.GOLD_ORE]: '#fde047',
  [BlockType.DIAMOND_ORE]: '#67e8f9',
  [BlockType.WATER]: '#3b82f6',
  [BlockType.BEDROCK]: '#111827',
  [BlockType.COBBLESTONE]: '#6b7280',
};

export class NavigationManager {
  private homePosition: THREE.Vector3 | null = null;
  private compassBar: HTMLElement | null;
  private homeMarker: HTMLElement | null;
  private homeDistance: HTMLElement | null;
  private mapCanvas: HTMLCanvasElement | null;
  private mapPlayerIcon: HTMLElement | null;
  private mapHomeIcon: HTMLElement | null;
  
  // マップ設定
  private mapRadius = 64; // 表示する半径（ブロック数）

  constructor() {
    this.compassBar = document.getElementById('compass-bar');
    this.homeMarker = document.getElementById('home-marker');
    this.homeDistance = document.getElementById('home-distance');
    this.mapCanvas = document.getElementById('world-map-canvas') as HTMLCanvasElement;
    this.mapPlayerIcon = document.getElementById('map-player-icon');
    this.mapHomeIcon = document.getElementById('map-home-icon');
    
    this.initCompassUI();
  }

  private initCompassUI() {
    if (!this.compassBar) return;
    
    const directions = [
      { label: 'N', deg: 0 },
      { label: 'NE', deg: 45, minor: true },
      { label: 'E', deg: 90 },
      { label: 'SE', deg: 135, minor: true },
      { label: 'S', deg: 180 },
      { label: 'SW', deg: 225, minor: true },
      { label: 'W', deg: 270 },
      { label: 'NW', deg: 315, minor: true },
      // ループ描画用
      { label: 'N', deg: 360 },
      { label: 'NE', deg: 405, minor: true },
      { label: 'E', deg: 450 },
    ];

    directions.forEach(dir => {
      const el = document.createElement('div');
      el.className = `compass-tick ${dir.minor ? 'minor' : ''}`;
      // 方位を均等に配置 (-180度〜+180度以上の余裕を持つためピクセルマッピングする)
      // 360度 = 800px にする
      const pos = (dir.deg / 360) * 800;
      el.style.left = `${pos}px`;
      el.innerHTML = `<span>${dir.label}</span>`;
      this.compassBar!.appendChild(el);
    });
  }

  public setHome(pos: THREE.Vector3) {
    this.homePosition = pos.clone();
    if (this.homeMarker) this.homeMarker.style.display = 'block';
    if (this.homeDistance) this.homeDistance.style.display = 'block';
    if (this.mapHomeIcon) this.mapHomeIcon.style.display = 'block';
  }

  public updateCompass(player: { position: THREE.Vector3, camera: THREE.Camera }) {
    if (!this.compassBar) return;

    // プレイヤーの向きを取得（ラジアンから度に変換）
    const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(player.camera.quaternion);
    const angleRad = Math.atan2(dir.x, -dir.z); // -Z方向をN(0度)とする
    let angleDeg = angleRad * (180 / Math.PI);
    if (angleDeg < 0) angleDeg += 360;

    // コンパスバーのスライド (360度 = 800px幅とする)
    const offset = (angleDeg / 360) * 800;
    this.compassBar.style.transform = `translateX(${-offset}px)`;

    // ホームアイコンの更新
    if (this.homePosition && this.homeMarker && this.homeDistance) {
      const toHome = this.homePosition.clone().sub(player.position);
      const dist = toHome.length();
      
      // ホームへの角度を計算
      const homeRad = Math.atan2(toHome.x, -toHome.z);
      let homeDeg = homeRad * (180 / Math.PI);
      if (homeDeg < 0) homeDeg += 360;

      // ホームアイコンの位置計算（コンパス上での位置）
      // プレイヤーの向いている角度とホームの角度の差を計算 (-180 〜 180)
      let diffDeg = homeDeg - angleDeg;
      if (diffDeg > 180) diffDeg -= 360;
      if (diffDeg < -180) diffDeg += 360;

      // 常に表示するため、クランプする角度を設定
      const maxVisibleAngle = 90; // コンパスの端（90度）
      const clampAngle = 85;      // 端から少し内側にクランプ（表示が切れないように）
      
      const isOutOfView = diffDeg < -maxVisibleAngle || diffDeg > maxVisibleAngle;
      const clampedDiff = Math.max(-clampAngle, Math.min(clampAngle, diffDeg));
      const markerOffset = (clampedDiff / 360) * 800;

      this.homeMarker.style.left = `calc(50% + ${markerOffset}px)`;

      if (isOutOfView) {
        // 視野外の場合は矢印を追加する
        if (diffDeg < 0) {
          this.homeMarker.textContent = '◀🏠';
        } else {
          this.homeMarker.textContent = '🏠▶';
        }
        // 視野外のときは不透明度を少し下げる
        this.homeMarker.style.opacity = '0.7';
      } else {
        this.homeMarker.textContent = '🏠';
        this.homeMarker.style.opacity = '1';
      }

      // 距離表示は視野外でも表示し続ける
      this.homeDistance.textContent = `${Math.floor(dist)}m`;
      this.homeDistance.style.display = 'block';
    }
  }

  public renderMap(world: World, playerPos: THREE.Vector3) {
    if (!this.mapCanvas) return;

    const ctx = this.mapCanvas.getContext('2d');
    if (!ctx) return;

    const size = this.mapRadius * 2;
    this.mapCanvas.width = size;
    this.mapCanvas.height = size;

    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, size, size);

    const px = Math.floor(playerPos.x);
    const pz = Math.floor(playerPos.z);

    // チャンク情報を基にマップを描画
    const chunks = Array.from(world.getLoadedChunks()).sort((a, b) => a.y - b.y);
    for (const chunk of chunks) {
      const cx = chunk.x * CONFIG.CHUNK_SIZE;
      const cz = chunk.z * CONFIG.CHUNK_SIZE;

      for (let x = 0; x < CONFIG.CHUNK_SIZE; x++) {
        for (let z = 0; z < CONFIG.CHUNK_SIZE; z++) {
          const worldX = cx + x;
          const worldZ = cz + z;

          // プレイヤーの表示範囲内かチェック
          const mapX = worldX - px + this.mapRadius;
          const mapZ = worldZ - pz + this.mapRadius;

          if (mapX >= 0 && mapX < size && mapZ >= 0 && mapZ < size) {
            // 一番高いブロックを見つける (Y方向ソート済みなので上書きでOK)
            let highestBlock = BlockType.AIR;
            for (let y = CONFIG.CHUNK_SIZE - 1; y >= 0; y--) {
              const b = chunk.getBlock(x, y, z);
              if (b !== BlockType.AIR && b !== BlockType.WATER) { // 水より上のブロックを優先
                highestBlock = b;
                break;
              } else if (b === BlockType.WATER && highestBlock === BlockType.AIR) {
                highestBlock = b;
              }
            }

            if (highestBlock !== BlockType.AIR) {
              const color = BLOCK_COLORS[highestBlock] || '#555555';
              ctx.fillStyle = color;
              ctx.fillRect(mapX, mapZ, 1, 1);
            }
          }
        }
      }
    }

    // アイコンの配置
    if (this.mapPlayerIcon) {
      this.mapPlayerIcon.style.left = '50%';
      this.mapPlayerIcon.style.top = '50%';
    }

    if (this.homePosition && this.mapHomeIcon) {
      const mapX = this.homePosition.x - px + this.mapRadius;
      const mapZ = this.homePosition.z - pz + this.mapRadius;

      // マップ内に収まるか（CSS%で表現）
      const percentX = (mapX / size) * 100;
      const percentY = (mapZ / size) * 100;
      
      const isOutOfMap = percentX < 0 || percentX > 100 || percentY < 0 || percentY > 100;
      
      // 枠線に重なりすぎないよう 2% 〜 98% にクランプ
      this.mapHomeIcon.style.left = `${Math.min(Math.max(percentX, 2), 98)}%`;
      this.mapHomeIcon.style.top = `${Math.min(Math.max(percentY, 2), 98)}%`;
      
      if (isOutOfMap) {
        // プレイヤーから拠点への方向角を計算して矢印を決定
        const dx = this.homePosition.x - px;
        const dz = this.homePosition.z - pz;
        const angle = Math.atan2(dz, dx); // ラジアン (-PI to PI)
        let deg = angle * (180 / Math.PI); // 度 (-180 to 180)
        if (deg < 0) deg += 360; // 0 to 360
        
        // 0度は右（東 ➡）、90度は下（南 ⬇）、180度は左（西 ⬅）、270度は上（北 ⬆）
        let arrow = '🏠';
        if (deg >= 337.5 || deg < 22.5) arrow = '➡';
        else if (deg >= 22.5 && deg < 67.5) arrow = '↘';
        else if (deg >= 67.5 && deg < 112.5) arrow = '⬇';
        else if (deg >= 112.5 && deg < 157.5) arrow = '↙';
        else if (deg >= 157.5 && deg < 202.5) arrow = '⬅';
        else if (deg >= 202.5 && deg < 247.5) arrow = '↖';
        else if (deg >= 247.5 && deg < 292.5) arrow = '⬆';
        else if (deg >= 292.5 && deg < 337.5) arrow = '↗';
        
        this.mapHomeIcon.textContent = arrow;
      } else {
        this.mapHomeIcon.textContent = '🏠';
      }
    }
  }
}
