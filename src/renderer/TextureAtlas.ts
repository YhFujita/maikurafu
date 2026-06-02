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

  // 4: 木（原木）の側面 - 樹皮 (col: 0, row: 1)
  drawNoiseRect(0, 1, 100, 70, 45, 15);
  // 縦の濃い茶色の樹皮ライン
  const barkStartX = 0 * tileSize;
  const barkStartY = 1 * tileSize;
  for (let x = 0; x < tileSize; x++) {
    for (let y = 0; y < tileSize; y++) {
      if ((x + y * 2) % 5 === 0) {
        ctx.fillStyle = `rgb(${70 + Math.random() * 10}, ${50 + Math.random() * 10}, ${30 + Math.random() * 10})`;
        ctx.fillRect(barkStartX + x, barkStartY + y, 1, 1);
      }
    }
  }

  // 5: 木の断面 - 年輪 (col: 1, row: 1)
  drawNoiseRect(1, 1, 185, 150, 105, 10);
  const ringStartX = 1 * tileSize;
  const ringStartY = 1 * tileSize;
  ctx.fillStyle = 'rgb(115, 80, 50)';
  // 同心円の年輪模様を描画
  for (let x = 0; x < tileSize; x++) {
    for (let y = 0; y < tileSize; y++) {
      const dx = x - 7.5;
      const dy = y - 7.5;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (Math.abs(dist - 3) < 0.6 || Math.abs(dist - 6) < 0.6) {
        ctx.fillRect(ringStartX + x, ringStartY + y, 1, 1);
      }
    }
  }

  // 6: 葉 (col: 2, row: 1)
  drawNoiseRect(2, 1, 35, 115, 30, 20);
  const leafStartX = 2 * tileSize;
  const leafStartY = 1 * tileSize;
  for (let i = 0; i < 30; i++) {
    const lx = Math.floor(Math.random() * tileSize);
    const ly = Math.floor(Math.random() * tileSize);
    ctx.fillStyle = `rgb(${15 + Math.random() * 10}, ${45 + Math.random() * 10}, ${10 + Math.random() * 10})`;
    ctx.fillRect(leafStartX + lx, leafStartY + ly, 1, 1);
  }

  // 7: レンガ (col: 3, row: 1)
  drawNoiseRect(3, 1, 155, 75, 55, 15);
  const brickStartX = 3 * tileSize;
  const brickStartY = 1 * tileSize;
  ctx.fillStyle = 'rgb(205, 200, 195)';
  ctx.fillRect(brickStartX, brickStartY + 4, tileSize, 1);
  ctx.fillRect(brickStartX, brickStartY + 9, tileSize, 1);
  ctx.fillRect(brickStartX, brickStartY + 14, tileSize, 1);
  ctx.fillRect(brickStartX + 4, brickStartY, 1, 4);
  ctx.fillRect(brickStartX + 12, brickStartY, 1, 4);
  ctx.fillRect(brickStartX + 8, brickStartY + 5, 1, 4);
  ctx.fillRect(brickStartX + 4, brickStartY + 10, 1, 4);
  ctx.fillRect(brickStartX + 12, brickStartY + 10, 1, 4);
  ctx.fillRect(brickStartX + 8, brickStartY + 15, 1, 1);

  // 8: 砂 (col: 0, row: 2)
  drawNoiseRect(0, 2, 220, 205, 150, 30);

  // 9: 木材 (col: 1, row: 2)
  drawNoiseRect(1, 2, 190, 145, 85, 12);
  const plankStartX = 1 * tileSize;
  const plankStartY = 2 * tileSize;
  ctx.fillStyle = 'rgb(140, 100, 55)';
  ctx.fillRect(plankStartX, plankStartY + 4, tileSize, 1);
  ctx.fillRect(plankStartX, plankStartY + 8, tileSize, 1);
  ctx.fillRect(plankStartX, plankStartY + 12, tileSize, 1);

  // 10: 石炭鉱石 (col: 2, row: 2)
  drawNoiseRect(2, 2, 120, 120, 120, 20);
  const coalStartX = 2 * tileSize;
  const coalStartY = 2 * tileSize;
  ctx.fillStyle = 'rgb(40, 40, 40)';
  const coalSpots = [
    [2, 3], [3, 3], [3, 4],
    [8, 8], [9, 8], [9, 9], [8, 9],
    [11, 2], [12, 3],
    [4, 12], [5, 11], [5, 12]
  ];
  coalSpots.forEach(([sx, sy]) => {
    ctx.fillRect(coalStartX + sx, coalStartY + sy, 1, 1);
  });

  // キャンバスからテクスチャを作成
  const texture = new THREE.CanvasTexture(canvas);
  
  // マイクラ風のクッキリしたピクセル感を出すためにNearestFilterを適用
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  return texture;
}
