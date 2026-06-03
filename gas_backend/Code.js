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
  const accountId = e.parameter.accountId;
  if (!accountId) {
    return ContentService.createTextOutput(JSON.stringify({ error: 'accountId is required' })).setMimeType(ContentService.MimeType.JSON);
  }

  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  // 1. WorldDataの取得
  const worldSheet = ss.getSheetByName('WorldData');
  let worldData = null;
  if (worldSheet && worldSheet.getLastRow() >= 2) {
    worldData = reconstructData(worldSheet, 2); // 2行目が shared_world_1
  }

  // 2. PlayerDataの取得
  const playerSheet = ss.getSheetByName('PlayerData');
  let playerData = null;
  if (playerSheet && playerSheet.getLastRow() >= 2) {
    const ids = playerSheet.getRange(2, 1, playerSheet.getLastRow() - 1, 1).getValues();
    for (let i = 0; i < ids.length; i++) {
      if (ids[i][0] === accountId) {
        playerData = reconstructData(playerSheet, i + 2);
        break;
      }
    }
  }

  return ContentService.createTextOutput(JSON.stringify({
    worldData: worldData,
    playerData: playerData
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const accountId = payload.accountId;
    const worldData = payload.worldData;
    const playerData = payload.playerData;

    if (!accountId) throw new Error('accountId is required');

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

    // 1. WorldDataの保存
    if (worldData) {
      let worldSheet = ss.getSheetByName('WorldData');
      if (!worldSheet) {
        worldSheet = ss.insertSheet('WorldData');
        worldSheet.appendRow(['id', 'lastUpdated', 'data_chunk_1', 'data_chunk_2...']);
      }

      const lastRow = worldSheet.getLastRow();
      let rowIndex = 2; // shared_world_1 は 2行目固定とする
      if (lastRow < 2) {
        worldSheet.getRange(2, 1).setValue('shared_world_1');
      }
      worldSheet.getRange(rowIndex, 2).setValue(new Date());
      saveChunkedData(worldSheet, rowIndex, worldData);
    }

    // 2. PlayerDataの保存
    if (playerData) {
      let playerSheet = ss.getSheetByName('PlayerData');
      if (!playerSheet) {
        playerSheet = ss.insertSheet('PlayerData');
        playerSheet.appendRow(['accountId', 'lastUpdated', 'data_chunk_1', 'data_chunk_2...']);
      }

      const lastRow = playerSheet.getLastRow();
      let rowIndex = -1;

      if (lastRow >= 2) {
        const ids = playerSheet.getRange(2, 1, lastRow - 1, 1).getValues();
        for (let i = 0; i < ids.length; i++) {
          if (ids[i][0] === accountId) {
            rowIndex = i + 2;
            break;
          }
        }
      }

      if (rowIndex === -1) {
        rowIndex = lastRow + 1; // 新規追加
        playerSheet.getRange(rowIndex, 1).setValue(accountId);
      }

      playerSheet.getRange(rowIndex, 2).setValue(new Date());
      saveChunkedData(playerSheet, rowIndex, playerData);
    }

    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ==========================================
// スプレッドシートUIからのJSONインポート機能
// ==========================================

// --- スプレッドシート起動時のメニュー追加 ---
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🛠️ Maikurafu 管理')
    .addItem('ローカルセーブデータ(JSON)をインポート', 'showImportDialog')
    .addToUi();
}

// --- インポートダイアログの表示 ---
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
        textarea { width: 100%; height: 220px; margin-top: 5px; box-sizing: border-box; padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-family: monospace; }
        button { margin-top: 20px; padding: 12px 15px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; width: 100%; font-weight: bold; font-size: 1em; }
        button:hover { background: #2563eb; }
        #status { margin-top: 15px; color: #d97706; font-size: 0.95em; font-weight: bold; text-align: center; }
      </style>
    </head>
    <body>
      <h3 style="margin-top:0;">ローカルセーブ移行ツール</h3>
      <p style="font-size: 0.85em; color: #555;">以前ダウンロードした <code>maikurafu_save_xxxx.json</code> をメモ帳等で開き、中身のテキストを下の枠にすべて貼り付けてください。</p>
      
      <label>どのアカウントのデータとして保存しますか？</label>
      <input type="text" id="accountId" placeholder="例: user_A" value="user_A">
      
      <label>JSONデータ貼り付け欄:</label>
      <textarea id="jsonText" placeholder='{"version": "1.0.0", ...}'></textarea>
      
      <button onclick="submitData()">インポート実行</button>
      <div id="status"></div>
      
      <script>
        function submitData() {
          const accountId = document.getElementById('accountId').value.trim();
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
            .processImportedJson(accountId, jsonText);
        }
      </script>
    </body>
    </html>
  `)
    .setWidth(450)
    .setHeight(550);

  SpreadsheetApp.getUi().showModalDialog(html, 'データのインポート');
}

// --- インポートされたJSONを処理して保存する関数 ---
function processImportedJson(targetAccountId, jsonText) {
  try {
    const oldData = JSON.parse(jsonText);

    // 互換性を持たせるためのデータ変換
    const worldData = oldData.world;
    const playerData = oldData.player;

    // 旧仕様ではインベントリが外にあったので、playerDataのcustomData内に格納する
    if (oldData.inventory) {
      playerData.customData = {
        inventory: oldData.inventory
      };
    }

    // doPostをシミュレートして保存処理を実行
    const mockEvent = {
      postData: {
        contents: JSON.stringify({
          accountId: targetAccountId,
          worldData: worldData,
          playerData: playerData
        })
      }
    };

    // 既存の保存ロジックを利用する
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
