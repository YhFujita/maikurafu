import * as THREE from 'three';

export function createProceduralTextureAtlas(): THREE.Texture {
  const canvas = document.createElement('canvas');
  const tileSize = 16;
  const atlasCols = 4;
  const atlasRows = 22; // 22 * 4 = 88 blocks capacity
  canvas.width  = tileSize * atlasCols;
  canvas.height = tileSize * atlasRows;
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

  // 11: 松明 (col: 3, row: 2)
  // 背景を透明にクリア
  const torchStartX = 3 * tileSize;
  const torchStartY = 2 * tileSize;
  ctx.fillStyle = 'rgba(0, 0, 0, 0)'; // 透明でクリア
  ctx.clearRect(torchStartX, torchStartY, tileSize, tileSize);
  
  // 木の棒部分 (幅2, 高さ8) -> Y: 8~16 (UV的には下部)
  ctx.fillStyle = 'rgb(101, 67, 33)'; // 濃い茶色
  ctx.fillRect(torchStartX + 7, torchStartY + 8, 2, 8);
  
  // 側面の炎部分 (幅2, 高さ2) -> Y: 6~8
  ctx.fillStyle = 'rgb(255, 120, 0)'; // オレンジ
  ctx.fillRect(torchStartX + 7, torchStartY + 6, 2, 2);
  ctx.fillStyle = 'rgb(255, 230, 0)'; // 黄色の芯
  ctx.fillRect(torchStartX + 7, torchStartY + 7, 2, 1);
  
  // 上面の炎部分 (幅2, 高さ2) -> Y: 4~6
  ctx.fillStyle = 'rgb(255, 240, 100)'; // 明るい黄色
  ctx.fillRect(torchStartX + 7, torchStartY + 4, 2, 2);
  
  // 底面部分 (幅2, 高さ2) -> Y: 14~16
  ctx.fillStyle = 'rgb(60, 40, 20)'; // 暗い茶色
  ctx.fillRect(torchStartX + 7, torchStartY + 14, 2, 2);

  // 12: ガラス (col: 0, row: 3)
  const glassStartX = 0 * tileSize;
  const glassStartY = 3 * tileSize;
  ctx.clearRect(glassStartX, glassStartY, tileSize, tileSize);

  // 外枠 (白っぽく、少し半透明)
  ctx.fillStyle = 'rgba(240, 248, 255, 0.8)';
  ctx.fillRect(glassStartX, glassStartY, tileSize, 1);
  ctx.fillRect(glassStartX, glassStartY + tileSize - 1, tileSize, 1);
  ctx.fillRect(glassStartX, glassStartY, 1, tileSize);
  ctx.fillRect(glassStartX + tileSize - 1, glassStartY, 1, tileSize);

  // 反射光の斜線
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.fillRect(glassStartX + 3, glassStartY + 3, 1, 1);
  ctx.fillRect(glassStartX + 4, glassStartY + 2, 1, 1);
  ctx.fillRect(glassStartX + 2, glassStartY + 4, 1, 1);

  ctx.fillRect(glassStartX + 10, glassStartY + 10, 1, 1);
  ctx.fillRect(glassStartX + 11, glassStartY + 9, 1, 1);
  ctx.fillRect(glassStartX + 9, glassStartY + 11, 1, 1);

  // 13: ドア (col: 1, row: 3)
  const doorStartX = 1 * tileSize;
  const doorStartY = 3 * tileSize;
  ctx.clearRect(doorStartX, doorStartY, tileSize, tileSize);

  // ベースの木の色 (茶色)
  ctx.fillStyle = 'rgb(130, 85, 45)';
  ctx.fillRect(doorStartX, doorStartY, tileSize, tileSize);

  // 木目や影の枠線
  ctx.fillStyle = 'rgb(90, 55, 25)';
  ctx.fillRect(doorStartX, doorStartY, tileSize, 1); // 上枠
  ctx.fillRect(doorStartX, doorStartY + tileSize - 1, tileSize, 1); // 下枠
  ctx.fillRect(doorStartX, doorStartY, 1, tileSize); // 左枠
  ctx.fillRect(doorStartX + tileSize - 1, doorStartY, 1, tileSize); // 右枠
  ctx.fillRect(doorStartX + (tileSize / 2) - 1, doorStartY, 2, tileSize); // 中央の縦線

  // 小窓 (左右に1つずつ、透明化)
  ctx.clearRect(doorStartX + 2, doorStartY + 2, 4, 5);
  ctx.clearRect(doorStartX + 10, doorStartY + 2, 4, 5);

  // 小窓のガラス枠（薄いグレーの反射光）
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.fillRect(doorStartX + 2, doorStartY + 2, 4, 1);
  ctx.fillRect(doorStartX + 10, doorStartY + 2, 4, 1);

  // ドアノブ (金色のピクセル)
  ctx.fillStyle = 'rgb(230, 190, 50)';
  ctx.fillRect(doorStartX + 13, doorStartY + 9, 2, 2); // 黄色いノブ
  ctx.fillStyle = 'rgb(180, 140, 20)';
  ctx.fillRect(doorStartX + 14, doorStartY + 11, 1, 1); // 鍵穴

  // 14: 剣 (col: 2, row: 3)
  const swordStartX = 2 * tileSize;
  const swordStartY = 3 * tileSize;
  ctx.clearRect(swordStartX, swordStartY, tileSize, tileSize);

  // 柄 (茶色)
  ctx.fillStyle = 'rgb(120, 80, 40)';
  ctx.fillRect(swordStartX + 2, swordStartY + 13, 1, 1);
  ctx.fillRect(swordStartX + 3, swordStartY + 12, 1, 1);
  ctx.fillRect(swordStartX + 4, swordStartY + 11, 1, 1);
  ctx.fillStyle = 'rgb(90, 60, 30)'; // 柄頭
  ctx.fillRect(swordStartX + 1, swordStartY + 14, 1, 1);

  // 鍔 (金色/黄色)
  ctx.fillStyle = 'rgb(230, 190, 50)';
  ctx.fillRect(swordStartX + 5, swordStartY + 10, 1, 1);
  ctx.fillRect(swordStartX + 3, swordStartY + 11, 1, 1);
  ctx.fillRect(swordStartX + 4, swordStartY + 12, 1, 1);
  ctx.fillRect(swordStartX + 5, swordStartY + 12, 1, 1);
  ctx.fillRect(swordStartX + 2, swordStartY + 12, 1, 1);
  ctx.fillRect(swordStartX + 3, swordStartY + 13, 1, 1);

  // 刃の影 (濃いグレー)
  ctx.fillStyle = 'rgb(120, 120, 120)';
  const shadowSpots = [
    [5, 11], [6, 10], [7, 9], [8, 8], [9, 7], [10, 6], [11, 5], [12, 4], [13, 3]
  ];
  shadowSpots.forEach(([sx, sy]) => {
    ctx.fillRect(swordStartX + sx, swordStartY + sy, 1, 1);
  });

  // 刃の本体 (明るいグレー)
  ctx.fillStyle = 'rgb(180, 180, 180)';
  const bladeSpots = [
    [5, 10], [6, 9], [7, 8], [8, 7], [9, 6], [10, 5], [11, 4], [12, 3], [13, 2], [14, 1]
  ];
  bladeSpots.forEach(([sx, sy]) => {
    ctx.fillRect(swordStartX + sx, swordStartY + sy, 1, 1);
  });

  // 刃の光沢/エッジ (白色)
  ctx.fillStyle = 'rgb(240, 240, 240)';
  const highlightSpots = [
    [4, 9], [5, 8], [6, 7], [7, 6], [8, 5], [9, 4], [10, 3], [11, 2], [12, 1], [13, 0]
  ];
  highlightSpots.forEach(([sx, sy]) => {
    ctx.fillRect(swordStartX + sx, swordStartY + sy, 1, 1);
  });

  // ===== row4・row5: 新規ブロック用テクスチャ =====

  // 16: 柵（さく） (col: 0, row: 4) — 木材と同じ色調
  drawNoiseRect(0, 4, 190, 145, 85, 12);
  const fenceTexX = 0 * tileSize;
  const fenceTexY = 4 * tileSize;
  ctx.fillStyle = 'rgb(140, 100, 55)';
  ctx.fillRect(fenceTexX,     fenceTexY + 4,  tileSize, 1);
  ctx.fillRect(fenceTexX,     fenceTexY + 8,  tileSize, 1);
  ctx.fillRect(fenceTexX,     fenceTexY + 12, tileSize, 1);

  // 17: ベッド枕部 (col: 1, row: 4) — 白い枕
  const bedHeadX = 1 * tileSize;
  const bedHeadY = 4 * tileSize;
  ctx.fillStyle = 'rgb(255, 255, 255)'; // 白
  ctx.fillRect(bedHeadX, bedHeadY, tileSize, tileSize);
  ctx.fillStyle = 'rgb(101, 67, 33)'; // フレーム茶色
  ctx.fillRect(bedHeadX,              bedHeadY,              tileSize, 1);
  ctx.fillRect(bedHeadX,              bedHeadY + tileSize-1, tileSize, 1);
  ctx.fillRect(bedHeadX,              bedHeadY,              1, tileSize);
  ctx.fillRect(bedHeadX + tileSize-1, bedHeadY,              1, tileSize);
  ctx.fillStyle = 'rgb(220, 220, 220)';
  ctx.fillRect(bedHeadX + 2, bedHeadY + 6,  tileSize-4, 1);
  ctx.fillRect(bedHeadX + 2, bedHeadY + 10, tileSize-4, 1);

  // 18: ベッド本体・側面 (col: 2, row: 4) — 赤ウール
  const bedBodyX = 2 * tileSize;
  const bedBodyY = 4 * tileSize;
  ctx.fillStyle = 'rgb(200, 30, 30)'; // 赤
  ctx.fillRect(bedBodyX, bedBodyY, tileSize, tileSize);
  ctx.fillStyle = 'rgb(101, 67, 33)'; // フレーム茶色
  ctx.fillRect(bedBodyX,              bedBodyY,              tileSize, 1);
  ctx.fillRect(bedBodyX,              bedBodyY + tileSize-1, tileSize, 1);
  ctx.fillRect(bedBodyX,              bedBodyY,              1, tileSize);
  ctx.fillRect(bedBodyX + tileSize-1, bedBodyY,              1, tileSize);

  // 19: かまど正面 (col: 3, row: 4) — 黒い開口部とオレンジの炎
  drawNoiseRect(3, 4, 120, 115, 110, 15);
  const furnaceX = 3 * tileSize;
  const furnaceY = 4 * tileSize;
  ctx.fillStyle = 'rgb(75, 75, 85)';
  ctx.fillRect(furnaceX + 1, furnaceY + 1, tileSize-2, 2);
  ctx.fillStyle = 'rgb(25, 20, 15)';
  ctx.fillRect(furnaceX + 3, furnaceY + 5, 10, 8);
  ctx.fillStyle = 'rgb(255, 120, 0)';
  ctx.fillRect(furnaceX + 5, furnaceY + 7, 3, 4);
  ctx.fillRect(furnaceX + 8, furnaceY + 8, 3, 3);
  ctx.fillStyle = 'rgb(255, 220, 0)';
  ctx.fillRect(furnaceX + 6, furnaceY + 8, 2, 2);

  // 20: チェスト正面 (col: 0, row: 5) — 錠前と仕切り線
  drawNoiseRect(0, 5, 160, 115, 65, 12);
  const chestFX = 0 * tileSize;
  const chestFY = 5 * tileSize;
  ctx.fillStyle = 'rgb(100, 65, 30)';
  ctx.fillRect(chestFX,              chestFY,              tileSize, 1);
  ctx.fillRect(chestFX,              chestFY + tileSize-1, tileSize, 1);
  ctx.fillRect(chestFX,              chestFY,              1, tileSize);
  ctx.fillRect(chestFX + tileSize-1, chestFY,              1, tileSize);
  ctx.fillRect(chestFX + 1, chestFY + 5, tileSize-2, 1); // 蓋の境界線
  ctx.fillStyle = 'rgb(220, 180, 40)';
  ctx.fillRect(chestFX + 6, chestFY + 2, 4, 3);          // 錠前
  ctx.fillStyle = 'rgb(160, 120, 20)';
  ctx.fillRect(chestFX + 7, chestFY + 4, 2, 2);           // 鍵穴

  // 21: チェスト側面・上面 (col: 1, row: 5) — 木材調
  drawNoiseRect(1, 5, 160, 115, 65, 12);
  const chestSX = 1 * tileSize;
  const chestSY = 5 * tileSize;
  ctx.fillStyle = 'rgb(100, 65, 30)';
  ctx.fillRect(chestSX,              chestSY,              tileSize, 1);
  ctx.fillRect(chestSX,              chestSY + tileSize-1, tileSize, 1);
  ctx.fillRect(chestSX,              chestSY,              1, tileSize);
  ctx.fillRect(chestSX + tileSize-1, chestSY,              1, tileSize);
  ctx.fillRect(chestSX + 1, chestSY + 5, tileSize-2, 1);  // 蓋の境界線

  // ===== row6: 追加ブロック（水など） =====
  
  // 22: 水 (col: 2, row: 5)
  // 半透明の青色
  const waterX = 2 * tileSize;
  const waterY = 5 * tileSize;
  // 水は少しノイズを混ぜた青
  drawNoiseRect(2, 5, 40, 100, 200, 20);
  ctx.fillStyle = 'rgba(20, 80, 220, 0.4)'; // 全体的に青みをかけて少し透明感（CanvasTextureではアルファは反映されづらいが色味で表現）
  ctx.fillRect(waterX, waterY, tileSize, tileSize);
  // 水面の波紋のような白いハイライト
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fillRect(waterX + 2, waterY + 3, 4, 1);
  ctx.fillRect(waterX + 8, waterY + 7, 5, 1);
  ctx.fillRect(waterX + 4, waterY + 12, 3, 1);

  // 23: ダイヤの剣 (col: 3, row: 5)
  const dswordStartX = 3 * tileSize;
  const dswordStartY = 5 * tileSize;
  ctx.clearRect(dswordStartX, dswordStartY, tileSize, tileSize);
  ctx.fillStyle = 'rgb(120, 80, 40)'; // 柄
  ctx.fillRect(dswordStartX + 2, dswordStartY + 13, 1, 1);
  ctx.fillRect(dswordStartX + 3, dswordStartY + 12, 1, 1);
  ctx.fillRect(dswordStartX + 4, dswordStartY + 11, 1, 1);
  ctx.fillStyle = 'rgb(0, 136, 255)'; // 鍔
  ctx.fillRect(dswordStartX + 5, dswordStartY + 10, 1, 1);
  ctx.fillRect(dswordStartX + 3, dswordStartY + 11, 1, 1);
  ctx.fillRect(dswordStartX + 4, dswordStartY + 12, 1, 1);
  ctx.fillRect(dswordStartX + 5, dswordStartY + 12, 1, 1);
  ctx.fillRect(dswordStartX + 2, dswordStartY + 12, 1, 1);
  ctx.fillRect(dswordStartX + 3, dswordStartY + 13, 1, 1);
  ctx.fillStyle = 'rgb(0, 255, 255)'; // 刃
  bladeSpots.forEach(([sx, sy]) => { ctx.fillRect(dswordStartX + sx, dswordStartY + sy, 1, 1); });
  ctx.fillStyle = 'rgb(240, 255, 255)'; // ハイライト
  highlightSpots.forEach(([sx, sy]) => { ctx.fillRect(dswordStartX + sx, dswordStartY + sy, 1, 1); });

  // 24: ハンマー (col: 0, row: 6)
  const hammerStartX = 0 * tileSize;
  const hammerStartY = 6 * tileSize;
  ctx.clearRect(hammerStartX, hammerStartY, tileSize, tileSize);
  ctx.fillStyle = 'rgb(120, 80, 40)'; // 柄
  ctx.fillRect(hammerStartX + 7, hammerStartY + 6, 2, 8);
  ctx.fillStyle = 'rgb(85, 85, 85)'; // ヘッド
  ctx.fillRect(hammerStartX + 4, hammerStartY + 2, 8, 4);
  ctx.fillStyle = 'rgb(120, 120, 120)'; // ヘッドハイライト
  ctx.fillRect(hammerStartX + 4, hammerStartY + 2, 8, 1);

  // 25: 岩盤 (col: 1, row: 6)
  const bedrockStartX = 1 * tileSize;
  const bedrockStartY = 6 * tileSize;
  // 暗いグレーと黒のノイズ模様
  ctx.fillStyle = 'rgb(30, 30, 30)';
  ctx.fillRect(bedrockStartX, bedrockStartY, tileSize, tileSize);
  for (let i = 0; i < tileSize; i++) {
    for (let j = 0; j < tileSize; j++) {
      if (Math.random() > 0.5) {
        ctx.fillStyle = Math.random() > 0.5 ? 'rgb(15, 15, 15)' : 'rgb(45, 45, 45)';
        ctx.fillRect(bedrockStartX + i, bedrockStartY + j, 1, 1);
      }
    }
  }

  // 鉱石のベース描画関数（石テクスチャベース）
  const drawOre = (index: number, speckColor: string) => {
    const col = index % 4;
    const row = Math.floor(index / 4);
    const startX = col * tileSize;
    const startY = row * tileSize;

    // 石ベース
    ctx.fillStyle = 'rgb(120, 120, 120)';
    ctx.fillRect(startX, startY, tileSize, tileSize);
    ctx.fillStyle = 'rgb(100, 100, 100)';
    ctx.fillRect(startX, startY, tileSize, tileSize / 2);
    ctx.fillStyle = 'rgb(140, 140, 140)';
    ctx.fillRect(startX, startY + tileSize / 2, tileSize, tileSize / 2);
    ctx.fillStyle = 'rgb(90, 90, 90)';
    for (let i = 0; i < 5; i++) {
      ctx.fillRect(startX + i * 2, startY + i * 2, 2, 2);
    }
    
    // 鉱石の斑点
    ctx.fillStyle = speckColor;
    // ランダムではなく固定位置でそれっぽく
    const spots = [[2,2], [10,3], [5,7], [12,9], [4,13], [10,14], [7,10]];
    spots.forEach(([sx, sy]) => {
      ctx.fillRect(startX + sx, startY + sy, 2, 2);
    });
  };

  // 26: 鉄鉱石
  drawOre(26, 'rgb(240, 200, 180)');
  
  // 27: 金鉱石
  drawOre(27, 'rgb(255, 215, 0)');
  
  // 28: ダイヤ鉱石
  drawOre(28, 'rgb(0, 255, 255)');

  // 29: 木の棒 (STICK)
  ctx.fillStyle = 'rgba(0, 0, 0, 0)';
  ctx.fillRect(1 * tileSize, 7 * tileSize, tileSize, tileSize);
  ctx.fillStyle = 'rgb(139, 69, 19)';
  ctx.beginPath();
  ctx.moveTo(1 * tileSize + 4, 7 * tileSize + 12);
  ctx.lineTo(1 * tileSize + 12, 7 * tileSize + 4);
  ctx.lineWidth = 2;
  ctx.stroke();

  // インゴット描画関数
  const drawIngot = (index: number, color: string) => {
    const col = index % 4;
    const row = Math.floor(index / 4);
    const startX = col * tileSize;
    const startY = row * tileSize;
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(startX, startY, tileSize, tileSize);
    
    ctx.fillStyle = color;
    ctx.fillRect(startX + 3, startY + 6, 10, 4);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.fillRect(startX + 3, startY + 6, 10, 1);
  };

  // 30: 鉄インゴット
  drawIngot(30, 'rgb(220, 220, 220)');
  // 31: 金インゴット
  drawIngot(31, 'rgb(255, 215, 0)');

  // 32: ダイヤモンド
  ctx.fillStyle = 'rgba(0, 0, 0, 0)';
  ctx.fillRect(0 * tileSize, 8 * tileSize, tileSize, tileSize);
  ctx.fillStyle = 'rgb(0, 255, 255)';
  ctx.beginPath();
  ctx.moveTo(0 * tileSize + 8, 8 * tileSize + 2);
  ctx.lineTo(0 * tileSize + 14, 8 * tileSize + 8);
  ctx.lineTo(0 * tileSize + 8, 8 * tileSize + 14);
  ctx.lineTo(0 * tileSize + 2, 8 * tileSize + 8);
  ctx.fill();

  // 33: 丸石 (COBBLESTONE)
  drawNoiseRect(1, 8, 140, 140, 140, 30);
  // 丸石特有の粗い線を少し追加
  ctx.fillStyle = 'rgba(100, 100, 100, 0.5)';
  ctx.fillRect(1 * tileSize + 2, 8 * tileSize + 2, 4, 4);
  ctx.fillRect(1 * tileSize + 10, 8 * tileSize + 8, 4, 4);

  // 34: 石炭アイテム (COAL)
  ctx.fillStyle = 'rgba(0, 0, 0, 0)';
  ctx.fillRect(2 * tileSize, 8 * tileSize, tileSize, tileSize);
  ctx.fillStyle = 'rgb(30, 30, 30)';
  ctx.beginPath();
  ctx.arc(2 * tileSize + 8, 8 * tileSize + 8, 5, 0, Math.PI * 2);
  ctx.fill();

  // 35: リンゴ (APPLE)
  ctx.fillStyle = 'rgba(0, 0, 0, 0)';
  ctx.fillRect(3 * tileSize, 8 * tileSize, tileSize, tileSize);
  ctx.fillStyle = 'rgb(220, 20, 20)';
  ctx.beginPath();
  ctx.arc(3 * tileSize + 8, 8 * tileSize + 9, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgb(34, 139, 34)'; // 葉っぱ部分
  ctx.fillRect(3 * tileSize + 7, 8 * tileSize + 3, 2, 3);

  // ツールの共通描画関数 (ツルハシ、斧、シャベル、クワ)
  const drawTool = (index: number, headColor: string, type: 'pickaxe' | 'axe' | 'shovel' | 'hoe') => {
    const col = index % 4;
    const row = Math.floor(index / 4);
    const startX = col * tileSize;
    const startY = row * tileSize;

    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(startX, startY, tileSize, tileSize);

    // 柄 (Stick)
    ctx.strokeStyle = 'rgb(139, 69, 19)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(startX + 3, startY + 13);
    ctx.lineTo(startX + 11, startY + 5);
    ctx.stroke();

    // ヘッド部分
    ctx.fillStyle = headColor;
    if (type === 'pickaxe') {
      ctx.beginPath();
      ctx.moveTo(startX + 2, startY + 6);
      ctx.lineTo(startX + 10, startY + 2);
      ctx.lineTo(startX + 14, startY + 6);
      ctx.lineTo(startX + 10, startY + 10);
      ctx.fill();
    } else if (type === 'axe') {
      ctx.beginPath();
      ctx.moveTo(startX + 8, startY + 2);
      ctx.lineTo(startX + 14, startY + 4);
      ctx.lineTo(startX + 12, startY + 10);
      ctx.lineTo(startX + 6, startY + 6);
      ctx.fill();
    } else if (type === 'shovel') {
      ctx.beginPath();
      ctx.moveTo(startX + 10, startY + 2);
      ctx.lineTo(startX + 14, startY + 6);
      ctx.lineTo(startX + 12, startY + 8);
      ctx.lineTo(startX + 8, startY + 4);
      ctx.fill();
    } else if (type === 'hoe') {
      ctx.beginPath();
      ctx.moveTo(startX + 6, startY + 6);
      ctx.lineTo(startX + 12, startY + 2);
      ctx.lineTo(startX + 14, startY + 4);
      ctx.lineTo(startX + 8, startY + 8);
      ctx.fill();
    }
  };

  const woodColor = 'rgb(160, 82, 45)';
  const stoneColor = 'rgb(169, 169, 169)';
  const ironColor = 'rgb(220, 220, 220)';
  const diamondColor = 'rgb(0, 255, 255)';

  // 36~39: ツルハシ
  drawTool(36, woodColor, 'pickaxe');
  drawTool(37, stoneColor, 'pickaxe');
  drawTool(38, ironColor, 'pickaxe');
  drawTool(39, diamondColor, 'pickaxe');

  // 40~43: 斧
  drawTool(40, woodColor, 'axe');
  drawTool(41, stoneColor, 'axe');
  drawTool(42, ironColor, 'axe');
  drawTool(43, diamondColor, 'axe');

  // 44~47: シャベル
  drawTool(44, woodColor, 'shovel');
  drawTool(45, stoneColor, 'shovel');
  drawTool(46, ironColor, 'shovel');
  drawTool(47, diamondColor, 'shovel');

  // 48~50: 防具一式アイテム
  const drawArmorItem = (index: number, color: string) => {
    const col = index % 4;
    const row = Math.floor(index / 4);
    const startX = col * tileSize;
    const startY = row * tileSize;

    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(startX, startY, tileSize, tileSize);

    ctx.fillStyle = color;
    ctx.fillRect(startX + 4, startY + 3, 8, 10);
    ctx.clearRect(startX + 6, startY + 10, 4, 3); // 脚の間の隙間
  };

  drawArmorItem(48, 'rgb(160, 82, 45)'); // LEATHER_ARMOR_SET
  drawArmorItem(49, ironColor);           // IRON_ARMOR_SET
  drawArmorItem(50, diamondColor);        // DIAMOND_ARMOR_SET

  // ===== row12・row13・row14・row15: 新規追加ブロックテクスチャ =====

  // 51: 白樺の原木（側面） (col: 3, row: 12)
  drawNoiseRect(3, 12, 235, 235, 230, 10);
  const bwoodX = 3 * tileSize;
  const bwoodY = 12 * tileSize;
  // 黒・濃いグレーの白樺特有の樹皮の模様
  ctx.fillStyle = 'rgb(60, 60, 65)';
  for (let y = 1; y < tileSize; y += 4) {
    const w = 3 + Math.floor(Math.random() * 5);
    const x = Math.floor(Math.random() * (tileSize - w));
    ctx.fillRect(bwoodX + x, bwoodY + y, w, 2);
  }

  // 52: 白樺の原木（年輪・断面） (col: 0, row: 13)
  drawNoiseRect(0, 13, 225, 205, 170, 10);
  const bringX = 0 * tileSize;
  const bringY = 13 * tileSize;
  ctx.fillStyle = 'rgb(180, 150, 110)';
  // 同心円の年輪
  for (let x = 0; x < tileSize; x++) {
    for (let y = 0; y < tileSize; y++) {
      const dx = x - 7.5;
      const dy = y - 7.5;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (Math.abs(dist - 3) < 0.6 || Math.abs(dist - 6) < 0.6) {
        ctx.fillRect(bringX + x, bringY + y, 1, 1);
      }
    }
  }

  // 53: 白樺の葉 (col: 1, row: 13)
  drawNoiseRect(1, 13, 60, 160, 50, 25);
  const bleavesX = 1 * tileSize;
  const bleavesY = 13 * tileSize;
  for (let i = 0; i < 30; i++) {
    const lx = Math.floor(Math.random() * tileSize);
    const ly = Math.floor(Math.random() * tileSize);
    ctx.fillStyle = `rgb(${30 + Math.random() * 20}, ${95 + Math.random() * 20}, ${20 + Math.random() * 10})`;
    ctx.fillRect(bleavesX + lx, bleavesY + ly, 1, 1);
  }

  // 54: 白樺の木材 (col: 2, row: 13)
  drawNoiseRect(2, 13, 240, 220, 170, 10);
  const bplankX = 2 * tileSize;
  const bplankY = 13 * tileSize;
  ctx.fillStyle = 'rgb(190, 170, 120)';
  ctx.fillRect(bplankX, bplankY + 4, tileSize, 1);
  ctx.fillRect(bplankX, bplankY + 8, tileSize, 1);
  ctx.fillRect(bplankX, bplankY + 12, tileSize, 1);

  // 55: タンポポ (col: 3, row: 13)
  const dandelionX = 3 * tileSize;
  const dandelionY = 13 * tileSize;
  ctx.clearRect(dandelionX, dandelionY, tileSize, tileSize);
  // 茎
  ctx.fillStyle = 'rgb(34, 139, 34)';
  ctx.fillRect(dandelionX + 7, dandelionY + 6, 2, 10);
  // 花（黄色）
  ctx.fillStyle = 'rgb(255, 215, 0)';
  ctx.fillRect(dandelionX + 6, dandelionY + 3, 4, 3);
  ctx.fillRect(dandelionX + 5, dandelionY + 4, 6, 1);
  ctx.fillStyle = 'rgb(255, 235, 50)';
  ctx.fillRect(dandelionX + 7, dandelionY + 4, 2, 1);

  // 56: バラ (col: 0, row: 14)
  const roseX = 0 * tileSize;
  const roseY = 14 * tileSize;
  ctx.clearRect(roseX, roseY, tileSize, tileSize);
  // 茎
  ctx.fillStyle = 'rgb(34, 139, 34)';
  ctx.fillRect(roseX + 7, roseY + 6, 2, 10);
  ctx.fillRect(roseX + 5, roseY + 8, 2, 1); // 葉
  ctx.fillRect(roseX + 9, roseY + 11, 2, 1);
  // 花（赤）
  ctx.fillStyle = 'rgb(220, 20, 60)';
  ctx.fillRect(roseX + 6, roseY + 2, 4, 4);
  ctx.fillStyle = 'rgb(180, 10, 40)'; // 影
  ctx.fillRect(roseX + 7, roseY + 3, 2, 2);

  // 57: ラピスラズリ鉱石 (col: 1, row: 14)
  drawNoiseRect(1, 14, 120, 120, 120, 20);
  const lapisOreX = 1 * tileSize;
  const lapisOreY = 14 * tileSize;
  ctx.fillStyle = 'rgb(20, 60, 180)';
  const lapisSpots = [
    [2, 3], [3, 2], [3, 3],
    [8, 8], [9, 8], [9, 9],
    [11, 4], [12, 4],
    [4, 11], [5, 12]
  ];
  lapisSpots.forEach(([sx, sy]) => {
    ctx.fillRect(lapisOreX + sx, lapisOreY + sy, 1, 1);
  });

  // 58: ラピスラズリ宝石（アイテム） (col: 2, row: 14)
  const lapisGemX = 2 * tileSize;
  const lapisGemY = 14 * tileSize;
  ctx.clearRect(lapisGemX, lapisGemY, tileSize, tileSize);
  ctx.fillStyle = 'rgb(20, 60, 180)';
  ctx.fillRect(lapisGemX + 5, lapisGemY + 4, 6, 8);
  ctx.clearRect(lapisGemX + 5, lapisGemY + 4, 1, 1);
  ctx.clearRect(lapisGemX + 10, lapisGemY + 4, 1, 1);
  ctx.clearRect(lapisGemX + 5, lapisGemY + 11, 1, 1);
  ctx.clearRect(lapisGemX + 10, lapisGemY + 11, 1, 1);
  ctx.fillStyle = 'rgb(0, 100, 255)'; // ハイライト
  ctx.fillRect(lapisGemX + 6, lapisGemY + 5, 2, 4);

  // 59: ラピスラズリブロック (col: 3, row: 14)
  drawNoiseRect(3, 14, 20, 60, 180, 20);
  const lapisBlockX = 3 * tileSize;
  const lapisBlockY = 14 * tileSize;
  // 金色の斑点（パイライト）を少し入れる
  ctx.fillStyle = 'rgb(220, 180, 40)';
  ctx.fillRect(lapisBlockX + 3, lapisBlockY + 4, 1, 1);
  ctx.fillRect(lapisBlockX + 11, lapisBlockY + 10, 1, 1);
  // タイル状の枠線
  ctx.strokeStyle = 'rgb(10, 35, 110)';
  ctx.strokeRect(lapisBlockX, lapisBlockY, tileSize, tileSize);

  // 60: シーランタン (col: 0, row: 15)
  drawNoiseRect(0, 15, 200, 240, 240, 10);
  const seaLanternX = 0 * tileSize;
  const seaLanternY = 15 * tileSize;
  // 暗い水色の枠線
  ctx.strokeStyle = 'rgb(130, 180, 180)';
  ctx.strokeRect(seaLanternX + 1, seaLanternY + 1, tileSize - 2, tileSize - 2);
  // ほんのり光るハイライト
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.fillRect(seaLanternX + 5, seaLanternY + 5, 6, 6);

  // 61: マグマブロック (col: 1, row: 15)
  drawNoiseRect(1, 15, 90, 30, 10, 15);
  const magmaX = 1 * tileSize;
  const magmaY = 15 * tileSize;
  // オレンジ・赤の発光するヒビ
  ctx.fillStyle = 'rgb(255, 90, 0)';
  ctx.fillRect(magmaX + 2, magmaY + 2, 2, 1);
  ctx.fillRect(magmaX + 3, magmaY + 3, 4, 1);
  ctx.fillRect(magmaX + 6, magmaY + 4, 1, 6);
  ctx.fillRect(magmaX + 10, magmaY + 7, 3, 2);
  ctx.fillStyle = 'rgb(255, 200, 0)'; // 黄色い中心部
  ctx.fillRect(magmaX + 4, magmaY + 3, 2, 1);
  ctx.fillRect(magmaX + 6, magmaY + 6, 1, 2);

  // ===== row15・row16・row17: はしご・チェーン・バケツ類・スポンジ =====

  // 62: はしご (col: 2, row: 15)
  const ladderX = 2 * tileSize;
  const ladderY = 15 * tileSize;
  ctx.clearRect(ladderX, ladderY, tileSize, tileSize);
  ctx.fillStyle = 'rgb(139, 69, 19)'; // 茶色の縦木
  ctx.fillRect(ladderX + 2, ladderY, 2, tileSize);
  ctx.fillRect(ladderX + 12, ladderY, 2, tileSize);
  // 横棒（ステップ）
  for (let y = 2; y < tileSize; y += 3) {
    ctx.fillRect(ladderX + 4, ladderY + y, 8, 1);
    // 横棒の影
    ctx.fillStyle = 'rgb(90, 45, 10)';
    ctx.fillRect(ladderX + 4, ladderY + y + 1, 8, 1);
    ctx.fillStyle = 'rgb(139, 69, 19)';
  }

  // 63: チェーン (col: 3, row: 15)
  const chainX = 3 * tileSize;
  const chainY = 15 * tileSize;
  ctx.clearRect(chainX, chainY, tileSize, tileSize);
  ctx.fillStyle = 'rgb(120, 120, 120)'; // 金属グレー
  ctx.fillRect(chainX + 7, chainY, 2, tileSize);
  // チェーンリンクの輪っか（膨らみと影）
  ctx.fillStyle = 'rgb(160, 160, 160)'; // 金属ハイライト
  for (let y = 1; y < tileSize; y += 4) {
    ctx.fillRect(chainX + 6, chainY + y, 4, 2);
    ctx.fillStyle = 'rgb(80, 80, 80)'; // 影
    ctx.fillRect(chainX + 7, chainY + y + 1, 2, 1);
    ctx.fillStyle = 'rgb(160, 160, 160)';
  }

  // バケツのベースを描画する関数
  const drawBucketBase = (bx: number, by: number) => {
    ctx.fillStyle = 'rgb(140, 140, 140)';
    // バケツのふちと輪郭
    ctx.fillRect(bx + 3, by + 3, 10, 1); // 上縁
    ctx.fillRect(bx + 3, by + 4, 2, 4);   // 左壁
    ctx.fillRect(bx + 11, by + 4, 2, 4);  // 右壁
    ctx.fillRect(bx + 5, by + 8, 6, 2);   // 底
    ctx.fillStyle = 'rgb(100, 100, 100)'; // 影
    ctx.fillRect(bx + 4, by + 5, 1, 3);
    ctx.fillRect(bx + 11, by + 5, 1, 3);
    ctx.fillRect(bx + 5, by + 9, 6, 1);
  };

  // 64: 空のバケツ (col: 0, row: 16)
  const bucketX = 0 * tileSize;
  const bucketY = 16 * tileSize;
  ctx.clearRect(bucketX, bucketY, tileSize, tileSize);
  drawBucketBase(bucketX, bucketY);

  // 65: 水入りバケツ (col: 1, row: 16)
  const wbucketX = 1 * tileSize;
  const wbucketY = 16 * tileSize;
  ctx.clearRect(wbucketX, wbucketY, tileSize, tileSize);
  // 中身の水
  ctx.fillStyle = 'rgb(30, 100, 240)';
  ctx.fillRect(wbucketX + 5, wbucketY + 4, 6, 4);
  drawBucketBase(wbucketX, wbucketY);

  // 66: マグマ入りバケツ (col: 2, row: 16)
  const mbucketX = 2 * tileSize;
  const mbucketY = 16 * tileSize;
  ctx.clearRect(mbucketX, mbucketY, tileSize, tileSize);
  // 中身のマグマ
  ctx.fillStyle = 'rgb(255, 100, 0)';
  ctx.fillRect(mbucketX + 5, mbucketY + 4, 6, 4);
  ctx.fillStyle = 'rgb(255, 200, 0)';
  ctx.fillRect(mbucketX + 7, mbucketY + 5, 2, 2);
  drawBucketBase(mbucketX, mbucketY);

  // 67: スポンジ (col: 3, row: 16)
  drawNoiseRect(3, 16, 220, 200, 80, 20);
  const spongeX = 3 * tileSize;
  const spongeY = 16 * tileSize;
  // 暗い黄色の穴ドット
  ctx.fillStyle = 'rgb(150, 130, 40)';
  const spongeSpots = [
    [2, 3], [4, 7], [9, 2], [11, 6], [12, 11], [5, 12], [8, 9], [3, 14]
  ];
  spongeSpots.forEach(([sx, sy]) => {
    ctx.fillRect(spongeX + sx, spongeY + sy, 1, 1);
  });

  // 68: 濡れたスポンジ (col: 0, row: 17)
  drawNoiseRect(0, 17, 140, 160, 60, 20); // 少し緑がかった暗い黄色
  const wspongeX = 0 * tileSize;
  const wspongeY = 17 * tileSize;
  // 暗い黄色の穴ドット
  ctx.fillStyle = 'rgb(100, 110, 30)';
  spongeSpots.forEach(([sx, sy]) => {
    ctx.fillRect(wspongeX + sx, wspongeY + sy, 1, 1);
  });
  // 青い水滴ドット
  ctx.fillStyle = 'rgb(30, 120, 230)';
  ctx.fillRect(wspongeX + 5, wspongeY + 5, 1, 1);
  ctx.fillRect(wspongeX + 11, wspongeY + 3, 1, 1);
  ctx.fillRect(wspongeX + 3, wspongeY + 11, 1, 1);
  ctx.fillRect(wspongeX + 9, wspongeY + 13, 1, 1);

  // 69: レール (col: 1, row: 17)
  const railX = 1 * tileSize;
  const railY = 17 * tileSize;
  ctx.clearRect(railX, railY, tileSize, tileSize);
  // 木製の枕木 (茶色)
  ctx.fillStyle = 'rgb(120, 70, 30)';
  ctx.fillRect(railX + 1, railY + 2, 14, 2);
  ctx.fillRect(railX + 1, railY + 7, 14, 2);
  ctx.fillRect(railX + 1, railY + 12, 14, 2);
  // 鉄のレール (グレー)
  ctx.fillStyle = 'rgb(180, 180, 180)';
  ctx.fillRect(railX + 3, railY, 2, tileSize);
  ctx.fillRect(railX + 11, railY, 2, tileSize);
  // 鉄のレールのシャドウ
  ctx.fillStyle = 'rgb(110, 110, 110)';
  ctx.fillRect(railX + 5, railY, 1, tileSize);
  ctx.fillRect(railX + 13, railY, 1, tileSize);

  // 70: トロッコ (col: 2, row: 17)
  drawNoiseRect(2, 17, 160, 160, 165, 20);
  const cartX = 2 * tileSize;
  const cartY = 17 * tileSize;
  ctx.fillStyle = 'rgb(100, 100, 105)';
  ctx.fillRect(cartX, cartY, tileSize, 2);
  ctx.fillRect(cartX, cartY + tileSize - 2, tileSize, 2);
  ctx.fillRect(cartX, cartY, 2, tileSize);
  ctx.fillRect(cartX + tileSize - 2, cartY, 2, tileSize);

  // 71: パン (col: 3, row: 17)
  const breadX = 3 * tileSize;
  const breadY = 17 * tileSize;
  ctx.clearRect(breadX, breadY, tileSize, tileSize);
  ctx.fillStyle = 'rgb(200, 130, 40)';
  ctx.fillRect(breadX + 3, breadY + 5, 10, 6);
  ctx.fillStyle = 'rgb(140, 80, 20)';
  ctx.fillRect(breadX + 3, breadY + 8, 10, 3);
  ctx.fillStyle = 'rgb(240, 180, 80)';
  ctx.fillRect(breadX + 5, breadY + 5, 2, 2);
  ctx.fillRect(breadX + 9, breadY + 5, 2, 2);

  // 72: 耕地(乾燥) (col: 0, row: 18)
  drawNoiseRect(0, 18, 110, 75, 45, 15);
  ctx.fillStyle = 'rgb(80, 50, 20)';
  for(let i=0; i<tileSize; i+=4) ctx.fillRect(0*tileSize, 18*tileSize + i, tileSize, 1);

  // 73: 耕地(湿潤) (col: 1, row: 18)
  drawNoiseRect(1, 18, 80, 50, 30, 10);
  ctx.fillStyle = 'rgb(50, 30, 10)';
  for(let i=0; i<tileSize; i+=4) ctx.fillRect(1*tileSize, 18*tileSize + i, tileSize, 1);

  // 小麦成長段階の描画関数
  const drawWheat = (col: number, row: number, height: number, color: string) => {
    const x = col * tileSize;
    const y = row * tileSize;
    ctx.clearRect(x, y, tileSize, tileSize);
    ctx.fillStyle = color;
    ctx.fillRect(x + 7, y + tileSize - height, 2, height);
    if(height > 4) {
      ctx.fillRect(x + 4, y + tileSize - height + 2, 2, height - 2);
      ctx.fillRect(x + 10, y + tileSize - height + 2, 2, height - 2);
    }
  };

  // 74: 小麦0 (col: 2, row: 18)
  drawWheat(2, 18, 3, 'rgb(34, 139, 34)');
  // 75: 小麦1 (col: 3, row: 18)
  drawWheat(3, 18, 5, 'rgb(40, 160, 40)');
  // 76: 小麦2 (col: 0, row: 19)
  drawWheat(0, 19, 7, 'rgb(50, 180, 50)');
  // 77: 小麦3 (col: 1, row: 19)
  drawWheat(1, 19, 9, 'rgb(120, 200, 40)');
  // 78: 小麦4 (col: 2, row: 19)
  drawWheat(2, 19, 11, 'rgb(160, 210, 30)');
  // 79: 小麦5 (col: 3, row: 19)
  drawWheat(3, 19, 13, 'rgb(200, 220, 20)');
  // 80: 小麦6 (col: 0, row: 20)
  drawWheat(0, 20, 15, 'rgb(220, 210, 20)');
  // 81: 小麦完熟 (col: 1, row: 20)
  drawWheat(1, 20, 16, 'rgb(240, 220, 30)');

  // 82: 小麦アイテム (col: 2, row: 20)
  const wheatItemX = 2 * tileSize;
  const wheatItemY = 20 * tileSize;
  ctx.clearRect(wheatItemX, wheatItemY, tileSize, tileSize);
  ctx.fillStyle = 'rgb(220, 190, 30)';
  ctx.fillRect(wheatItemX+6, wheatItemY+4, 4, 10);
  ctx.fillStyle = 'rgb(180, 140, 20)';
  ctx.fillRect(wheatItemX+5, wheatItemY+6, 6, 2);
  ctx.fillRect(wheatItemX+5, wheatItemY+10, 6, 2);

  // 83: 種 (col: 3, row: 20)
  const seedX = 3 * tileSize;
  const seedY = 20 * tileSize;
  ctx.clearRect(seedX, seedY, tileSize, tileSize);
  ctx.fillStyle = 'rgb(80, 150, 40)';
  ctx.fillRect(seedX+6, seedY+8, 2, 2);
  ctx.fillRect(seedX+9, seedY+7, 2, 2);
  ctx.fillRect(seedX+7, seedY+11, 2, 2);

  // 84: 木のクワ (col: 0, row: 21)
  drawTool(84, woodColor, 'hoe');
  // 85: 石のクワ (col: 1, row: 21)
  drawTool(85, stoneColor, 'hoe');
  // 86: 鉄のクワ (col: 2, row: 21)
  drawTool(86, ironColor, 'hoe');
  
  // 87: 骨粉 (col: 3, row: 21)
  const boneX = 3 * tileSize;
  const boneY = 21 * tileSize;
  ctx.clearRect(boneX, boneY, tileSize, tileSize);
  ctx.fillStyle = 'rgb(240, 240, 240)';
  ctx.fillRect(boneX+6, boneY+6, 4, 4);
  ctx.fillStyle = 'rgb(200, 200, 200)';
  ctx.fillRect(boneX+7, boneY+7, 2, 2);

  // キャンバスからテクスチャを作成
  const texture = new THREE.CanvasTexture(canvas);

  // マイクラ風のクッキリしたピクセル感を出すためにNearestFilterを適用
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;

  return texture;
}
