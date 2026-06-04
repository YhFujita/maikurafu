export interface GameConfig {
  keyForward: string;  // 前進 (デフォルト: KeyW)
  keyBackward: string; // 後退 (デフォルト: KeyS)
  keyLeft: string;     // 左移動 (デフォルト: KeyA)
  keyRight: string;    // 右移動 (デフォルト: KeyD)
  keyJump: string;     // ジャンプ (デフォルト: Space)
  keyPlaceBlock: string; // ブロック設置 (デフォルト: KeyV)
  keyBreakBlock: string; // ブロック破壊 (デフォルト: KeyB)
  keyOpenMap: string; // マップを開く (デフォルト: KeyM)
  keyOpenInventory: string; // インベントリ (デフォルト: KeyE)
  keyOpenCrafting: string; // クラフト (デフォルト: KeyC)
  keyOpenManual: string; // マニュアル (デフォルト: KeyN)
  keyRegisterHome: string; // 拠点登録 (デフォルト: KeyH)
  invertClicks: boolean; // 左右クリック反転 (デフォルト: false)
  enableShadows: boolean; // 影のON/OFF (デフォルト: true)
}

export const DEFAULT_CONFIG: GameConfig = {
  keyForward: 'KeyW',
  keyBackward: 'KeyS',
  keyLeft: 'KeyA',
  keyRight: 'KeyD',
  keyJump: 'Space',
  keyPlaceBlock: 'KeyV',
  keyBreakBlock: 'KeyB',
  keyOpenMap: 'KeyM',
  keyOpenInventory: 'KeyE',
  keyOpenCrafting: 'KeyC',
  keyOpenManual: 'KeyN',
  keyRegisterHome: 'KeyH',
  invertClicks: false,
  enableShadows: true,
};

const STORAGE_KEY = 'maikurafu_config';

class ConfigStore {
  private currentConfig: GameConfig;

  constructor() {
    this.currentConfig = { ...DEFAULT_CONFIG };
    this.load();
  }

  // 設定のロード
  public load(): GameConfig {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.currentConfig = { ...DEFAULT_CONFIG, ...parsed };
      }
    } catch (e) {
      console.error('設定の読み込みに失敗しました。デフォルト設定を使用します。', e);
      this.currentConfig = { ...DEFAULT_CONFIG };
    }
    return this.currentConfig;
  }

  // 現在の設定を取得
  public getConfig(): GameConfig {
    return this.currentConfig;
  }

  // 設定の保存
  public save(config: Partial<GameConfig>): void {
    this.currentConfig = { ...this.currentConfig, ...config };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.currentConfig));
    } catch (e) {
      console.error('設定の保存に失敗しました。', e);
    }
  }

  // デフォルト設定にリセット
  public reset(): GameConfig {
    this.currentConfig = { ...DEFAULT_CONFIG };
    this.save(this.currentConfig);
    return this.currentConfig;
  }
}

export const configStore = new ConfigStore();
