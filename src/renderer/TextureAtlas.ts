import * as THREE from 'three';

export function createProceduralTextureAtlas(): THREE.Texture {
  const canvas = document.createElement('canvas');
  const tileSize = 16;
  const atlasCols = 4;
  const atlasRows = 4;
  canvas.width = tileSize * atlasCols;  // 64px
  canvas.height = tileSize * atlasRows; // 64px
  const ctx = canvas.getContext('2d')!;

  // ノイズを乗せたカラー描画関数
  const drawNoiseRect = (
    col: number,
    row: number,
    baseR: number,
    baseG: number,
    baseB: number,
    noiseRange: number
  ) => {
    const startX = col * tileSize;
    const startY = row * tileSize;

    for (let x = 0; x < tileSize; x++) {
      for (let y = 0; y < tileSize; y++) {
        const factor = (Math.random() - 0.5) * noiseRange;
        const r = Math.max(0, Math.min(255, Math.floor(baseR + factor)));
        const g = Math.max(0, Math.min(255, Math.floor(baseG + factor)));
        const b = Math.max(0, Math.min(255, Math.floor(baseB + factor)));
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fillRect(startX + x, startY + y, 1, 1);
      }
    }
  };

  // 0: 草 (上面) - 緑色ベース
  drawNoiseRect(0, 0, 100, 180, 70, 30);

  // 1: 土 (底面・土ブロック) - 茶色ベース
  drawNoiseRect(1, 0, 130, 95, 65, 20);

  // 2: 石 - 灰色ベース
  drawNoiseRect(2, 0, 120, 120, 120, 20);

  // 3: 草の側面 - 上部に草のギザギザ、下部は土
  // まず土で塗りつぶす
  drawNoiseRect(3, 0, 130, 95, 65, 20);
  // 上部に草のピクセルをノイズ入りで上書き
  const sideStartX = 3 * tileSize;
  for (let x = 0; x < tileSize; x++) {
    // ギザギザの高さをランダムに決める (3〜5ピクセル程度)
    const grassHeight = 3 + Math.floor(Math.random() * 3);
    for (let y = 0; y < grassHeight; y++) {
      const factor = (Math.random() - 0.5) * 30;
      const r = Math.max(0, Math.min(255, Math.floor(100 + factor)));
      const g = Math.max(0, Math.min(255, Math.floor(180 + factor)));
      const b = Math.max(0, Math.min(255, Math.floor(70 + factor)));
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(sideStartX + x, y, 1, 1);
    }
  }

  // キャンバスからテクスチャを作成
  const texture = new THREE.CanvasTexture(canvas);
  
  // マイクラ風のクッキリしたピクセル感を出すためにNearestFilterを適用
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  return texture;
}
