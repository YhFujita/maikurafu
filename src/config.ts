export const CONFIG = {
  // チャンク設定
  CHUNK_SIZE: 16, // 16x16x16
  RENDER_DISTANCE: 3, // プレイヤーの周囲3x3(x3)チャンク

  // 物理設定
  GRAVITY: -19.8,
  PLAYER_SPEED: 8.0,
  PLAYER_JUMP_FORCE: 8.0,

  // プレイヤーのサイズ
  PLAYER_HEIGHT: 1.8,
  PLAYER_RADIUS: 0.4,

  // 描画設定
  FOVY: 75,
  NEAR: 0.1,
  FAR: 1000,

  // ゲームルールとサバイバル設定
  PLAYER_MAX_HP: 10,
  FALL_DAMAGE_MIN_SPEED: -12.0, // ダメージが入り始める落下速度の閾値
  FALL_DAMAGE_FACTOR: 1.5,       // 速度超過分のダメージ倍率
  
  // モンスター設定
  MAX_MOBS: 5,                  // 同時に存在できる敵Mobの最大数
  MOB_SPAWN_RADIUS: 25,         // スポーンさせるプレイヤーからの最大距離
  MOB_DESPAWN_RADIUS: 35,       // デスポーンさせるプレイヤーからの最小距離

  // ドロップアイテム設定
  MAX_DROPPED_ITEMS: 30,        // 存在できるドロップアイテムの最大数
  ITEM_DESPAWN_TIME: 30,        // 秒単位の消滅時間
  ITEM_PICKUP_RADIUS: 2.0,      // アイテムを吸い込む半径
};

