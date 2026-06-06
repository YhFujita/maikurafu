const SPREADSHEET_ID = '10M77ibJcQiqc08nqqv3ZWhzmFhee2--uSzQ-krD_pXc'; // ここにスプレッドシートのIDを貼り付けてください
const CHUNK_SIZE = 49000; // 1セルあたりの最大文字数(50,000文字制限の対策)

// 複数セルに分割された文字列を結合してJSONに戻す
function reconstructData(sheet, rowIndex) {
  const lastCol = sheet.getLastColumn();
  if (lastCol < 3) return null;
  // C列(3列目)以降のデータを取得
  const chunks = sheet.getRange(rowIndex, 3, 1, lastCol - 2).getValues()[0];
  let jsonString = '';
  for (let i = 0; i < chunks.length; i++) {
    if (chunks[i]) {
      jsonString += chunks[i];
    }
  }
  if (!jsonString) return null;
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return null;
  }
}

// 既存のワールドデータと新規のデータをマージする
function mergeWorldData(existing, incoming) {
  if (!existing) return incoming;
  if (!incoming) return existing;

  const merged = {
    blocks: existing.blocks || {},
    doorOrientations: existing.doorOrientations || {},
    chunkVersions: existing.chunkVersions || {}
  };

  // 既存データが古い形式（blocksキーなし）の場合の救済
  if (!existing.blocks) {
    merged.blocks = {};
    for (const chunkKey of Object.keys(existing)) {
      if (chunkKey !== 'doorOrientations' && chunkKey !== 'chunkVersions') {
        merged.blocks[chunkKey] = existing[chunkKey];
      }
    }
  }

  // 1. blocks のマージ
  const incomingBlocks = incoming.blocks || incoming;
  for (const chunkKey of Object.keys(incomingBlocks)) {
    if (chunkKey === 'doorOrientations' || chunkKey === 'chunkVersions' || chunkKey === 'blocks') continue;

    if (!merged.blocks[chunkKey]) {
      merged.blocks[chunkKey] = {};
    }
    const mods = incomingBlocks[chunkKey];
    for (const localIndex of Object.keys(mods)) {
      merged.blocks[chunkKey][localIndex] = mods[localIndex];
    }
  }

  // 2. doorOrientations のマージ
  if (incoming.doorOrientations) {
    for (const key of Object.keys(incoming.doorOrientations)) {
      merged.doorOrientations[key] = incoming.doorOrientations[key];
    }
  }

  // 3. chunkVersions のマージ
  if (incoming.chunkVersions) {
    for (const key of Object.keys(incoming.chunkVersions)) {
      merged.chunkVersions[key] = incoming.chunkVersions[key];
    }
  }

  return merged;
}

// データを文字列化し、49,000文字ごとに分割して複数セルに保存する
function saveChunkedData(sheet, rowIndex, data) {
  const jsonString = JSON.stringify(data);
  const chunks = [];
  for (let i = 0; i < jsonString.length; i += CHUNK_SIZE) {
    chunks.push(jsonString.substring(i, i + CHUNK_SIZE));
  }

  const lastCol = sheet.getLastColumn();
  // 古いデータが残らないように、C列以降の該当行をクリア
  if (lastCol >= 3) {
    sheet.getRange(rowIndex, 3, 1, lastCol - 2).clearContent();
  }

  // 新しいチャンクを書き込む
  sheet.getRange(rowIndex, 3, 1, chunks.length).setValues([chunks]);
}

function doGet(e) {
  const worldId = e.parameter.worldId || 'shared_world_1'; // 将来の拡張用：デフォルトワールドID

  if (e.parameter.action === 'listAccounts') {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const playerSheet = ss.getSheetByName('PlayerData');
    let accounts = [];
    if (playerSheet && playerSheet.getLastRow() >= 2) {
      const ids = playerSheet.getRange(2, 1, playerSheet.getLastRow() - 1, 1).getValues();
      const suffix = '_' + worldId;
      for (let i = 0; i < ids.length; i++) {
        const fullId = ids[i][0];
        if (fullId && fullId.endsWith(suffix)) {
          const accId = fullId.substring(0, fullId.length - suffix.length);
          if (accId && !accounts.includes(accId)) {
            accounts.push(accId);
          }
        }
      }
    }
    return ContentService.createTextOutput(JSON.stringify({ accounts: accounts })).setMimeType(ContentService.MimeType.JSON);
  }

  if (e.parameter.action === 'listOtherPlayers') {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const playerSheet = ss.getSheetByName('PlayerData');
    let players = [];
    const currentAccountId = e.parameter.accountId;
    if (playerSheet && playerSheet.getLastRow() >= 2) {
      const rows = playerSheet.getRange(2, 1, playerSheet.getLastRow() - 1, playerSheet.getLastColumn()).getValues();
      const suffix = '_' + worldId;
      for (let i = 0; i < rows.length; i++) {
        const fullId = rows[i][0];
        if (fullId && fullId.endsWith(suffix)) {
          const accId = fullId.substring(0, fullId.length - suffix.length);
          if (accId && accId !== currentAccountId) {
            const chunks = rows[i].slice(2);
            let jsonString = '';
            for (let j = 0; j < chunks.length; j++) {
              if (chunks[j]) jsonString += chunks[j];
            }
            try {
              const playerData = JSON.parse(jsonString);
              players.push({
                accountId: accId,
                characterType: playerData.characterType || 'boy1',
                homePosition: playerData.customData ? playerData.customData.homePosition : null,
                position: (playerData.x !== undefined && playerData.y !== undefined && playerData.z !== undefined) ? 
                          { x: playerData.x, y: playerData.y, z: playerData.z } : null
              });
            } catch (err) {
              // スキップ
            }
          }
        }
      }
    }
    return ContentService.createTextOutput(JSON.stringify({ players: players })).setMimeType(ContentService.MimeType.JSON);
  }

  const accountId = e.parameter.accountId;

  if (!accountId) {
    return ContentService.createTextOutput(JSON.stringify({ error: 'accountId is required' })).setMimeType(ContentService.MimeType.JSON);
  }

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  // 1. WorldDataの取得
  const worldSheet = ss.getSheetByName('WorldData');
  let worldData = null;
  let worldLastUpdated = null;
  if (worldSheet && worldSheet.getLastRow() >= 2) {
    const ids = worldSheet.getRange(2, 1, worldSheet.getLastRow() - 1, 1).getValues();
    for (let i = 0; i < ids.length; i++) {
      if (ids[i][0] === worldId) {
        worldData = reconstructData(worldSheet, i + 2);
        worldLastUpdated = worldSheet.getRange(i + 2, 2).getValue();
        break;
      }
    }
  }

  // 2. PlayerDataの取得 (accountId + worldId で一意にする)
  // ワールドごとにプレイヤーの座標や持ち物が変わるため、複合キーを使用
  const playerKey = accountId + '_' + worldId;
  const playerSheet = ss.getSheetByName('PlayerData');
  let playerData = null;
  let playerLastUpdated = null;
  if (playerSheet && playerSheet.getLastRow() >= 2) {
    const ids = playerSheet.getRange(2, 1, playerSheet.getLastRow() - 1, 1).getValues();
    for (let i = 0; i < ids.length; i++) {
      if (ids[i][0] === playerKey) {
        playerData = reconstructData(playerSheet, i + 2);
        playerLastUpdated = playerSheet.getRange(i + 2, 2).getValue();
        break;
      }
    }
  }

  const worldTime = worldLastUpdated instanceof Date ? worldLastUpdated.getTime() : (worldLastUpdated ? new Date(worldLastUpdated).getTime() : null);
  const playerTime = playerLastUpdated instanceof Date ? playerLastUpdated.getTime() : (playerLastUpdated ? new Date(playerLastUpdated).getTime() : null);

  return ContentService.createTextOutput(JSON.stringify({
    worldData: worldData,
    playerData: playerData,
    worldId: worldId,
    accountId: accountId,
    worldLastUpdated: worldTime,
    playerLastUpdated: playerTime
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const accountId = payload.accountId;
    const worldId = payload.worldId || 'shared_world_1';
    const worldData = payload.worldData;
    const playerData = payload.playerData;

    if (!accountId) throw new Error('accountId is required');

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let latestWorldData = null;

    // 1. WorldDataの保存
    if (worldData) {
      let worldSheet = ss.getSheetByName('WorldData');
      if (!worldSheet) {
        worldSheet = ss.insertSheet('WorldData');
        worldSheet.appendRow(['id', 'lastUpdated', 'data_chunk_1', 'data_chunk_2...']);
      }

      const lastRow = worldSheet.getLastRow();
      let rowIndex = -1;

      if (lastRow >= 2) {
        const ids = worldSheet.getRange(2, 1, lastRow - 1, 1).getValues();
        for (let i = 0; i < ids.length; i++) {
          if (ids[i][0] === worldId) {
            rowIndex = i + 2;
            break;
          }
        }
      }

      if (rowIndex === -1) {
        rowIndex = lastRow + 1; // 新規追加
        worldSheet.getRange(rowIndex, 1).setValue(worldId);
      }

      // 既存のデータを取得してマージする
      const existingWorldData = reconstructData(worldSheet, rowIndex);
      const mergedWorldData = mergeWorldData(existingWorldData, worldData);
      latestWorldData = mergedWorldData;

      worldSheet.getRange(rowIndex, 2).setValue(new Date());
      saveChunkedData(worldSheet, rowIndex, mergedWorldData);
    }

    // 2. PlayerDataの保存 (accountId + worldId で一意にする)
    if (playerData) {
      let playerSheet = ss.getSheetByName('PlayerData');
      if (!playerSheet) {
        playerSheet = ss.insertSheet('PlayerData');
        playerSheet.appendRow(['account_world_id', 'lastUpdated', 'data_chunk_1', 'data_chunk_2...']);
      }

      const playerKey = accountId + '_' + worldId;
      const lastRow = playerSheet.getLastRow();
      let rowIndex = -1;

      if (lastRow >= 2) {
        const ids = playerSheet.getRange(2, 1, lastRow - 1, 1).getValues();
        for (let i = 0; i < ids.length; i++) {
          if (ids[i][0] === playerKey) {
            rowIndex = i + 2;
            break;
          }
        }
      }

      if (rowIndex === -1) {
        rowIndex = lastRow + 1; // 新規追加
        playerSheet.getRange(rowIndex, 1).setValue(playerKey);
      }

      playerSheet.getRange(rowIndex, 2).setValue(new Date());
      saveChunkedData(playerSheet, rowIndex, playerData);
    }

    // もし最新のワールドデータが取得されていない場合、必要に応じてデータベースからロード
    if (!latestWorldData) {
      let worldSheet = ss.getSheetByName('WorldData');
      if (worldSheet && worldSheet.getLastRow() >= 2) {
        const lastRow = worldSheet.getLastRow();
        const ids = worldSheet.getRange(2, 1, lastRow - 1, 1).getValues();
        for (let i = 0; i < ids.length; i++) {
          if (ids[i][0] === worldId) {
            latestWorldData = reconstructData(worldSheet, i + 2);
            break;
          }
        }
      }
    }

    return ContentService.createTextOutput(JSON.stringify({ success: true, worldData: latestWorldData })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ==========================================
// スプレッドシートUIからのJSONインポート機能
// ==========================================
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🛠️ Maikurafu 管理')
    .addItem('ローカルセーブデータ(JSON)をインポート', 'showImportDialog')
    .addToUi();
}

function showImportDialog() {
  const html = HtmlService.createHtmlOutput(`
    <!DOCTYPE html>
    <html>
    <head>
      <base target="_top">
      <style>
        body { font-family: sans-serif; padding: 10px; color: #333; }
        label { display: block; margin-top: 15px; font-weight: bold; font-size: 0.9em; }
        input[type="text"] { width: 100%; padding: 8px; margin-top: 5px; box-sizing: border-box; border: 1px solid #ccc; border-radius: 4px; }
        textarea { width: 100%; height: 180px; margin-top: 5px; box-sizing: border-box; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-family: monospace; }
        button { margin-top: 20px; padding: 12px 15px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; width: 100%; font-weight: bold; font-size: 1em; }
        button:hover { background: #2563eb; }
        #status { margin-top: 15px; color: #d97706; font-size: 0.95em; font-weight: bold; text-align: center; }
      </style>
    </head>
    <body>
      <h3 style="margin-top:0;">ローカルセーブ移行ツール</h3>
      <p style="font-size: 0.85em; color: #555;">以前ダウンロードした <code>maikurafu_save_xxxx.json</code> をメモ帳等で開き、中身のテキストを下の枠にすべて貼り付けてください。</p>
      
      <label>アカウントID:</label>
      <input type="text" id="accountId" placeholder="例: user_A" value="user_A">

      <label>ワールドID (将来用・通常はそのまま):</label>
      <input type="text" id="worldId" placeholder="例: shared_world_1" value="shared_world_1">
      
      <label>JSONデータ貼り付け欄:</label>
      <textarea id="jsonText" placeholder='{"version": "1.0.0", ...}'></textarea>
      
      <button onclick="submitData()">インポート実行</button>
      <div id="status"></div>
      
      <script>
        function submitData() {
          const accountId = document.getElementById('accountId').value.trim();
          const worldId = document.getElementById('worldId').value.trim() || 'shared_world_1';
          const jsonText = document.getElementById('jsonText').value.trim();
          
          if(!accountId || !jsonText) {
            document.getElementById('status').innerText = 'アカウントIDとJSONデータを両方入力してください。';
            return;
          }
          
          document.getElementById('status').innerText = 'インポート中... (画面を閉じないでください)';
          document.querySelector('button').disabled = true;
          
          google.script.run
            .withSuccessHandler(function(msg) {
              document.getElementById('status').style.color = '#15803d';
              document.getElementById('status').innerText = '✅ ' + msg;
              setTimeout(() => google.script.host.close(), 3000);
            })
            .withFailureHandler(function(err) {
              document.querySelector('button').disabled = false;
              document.getElementById('status').style.color = '#dc2626';
              document.getElementById('status').innerText = '❌ エラー: ' + err.message;
            })
            .processImportedJson(accountId, worldId, jsonText);
        }
      </script>
    </body>
    </html>
  `)
    .setWidth(450)
    .setHeight(580);

  SpreadsheetApp.getUi().showModalDialog(html, 'データのインポート');
}

function processImportedJson(targetAccountId, targetWorldId, jsonText) {
  try {
    const oldData = JSON.parse(jsonText);

    const worldData = oldData.world;
    const playerData = oldData.player;

    if (oldData.inventory) {
      playerData.customData = {
        inventory: oldData.inventory
      };
    }

    const mockEvent = {
      postData: {
        contents: JSON.stringify({
          accountId: targetAccountId,
          worldId: targetWorldId,
          worldData: worldData,
          playerData: playerData
        })
      }
    };

    const resultJson = doPost(mockEvent).getContent();
    const result = JSON.parse(resultJson);

    if (result.success) {
      return '移行が完了しました！3秒後に閉じます。';
    } else {
      throw new Error(result.error);
    }
  } catch (e) {
    throw new Error('JSONの読み込みに失敗しました。ファイルの中身が正しいか確認してください。 (' + e.message + ')');
  }
}
