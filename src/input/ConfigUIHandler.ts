import { configStore, GameConfig } from '../configStore.ts';

export class ConfigUIHandler {
  private overlay: HTMLElement;
  private modal: HTMLElement;
  private configBtn: HTMLElement;
  
  private keyButtons: {
    forward: HTMLButtonElement;
    backward: HTMLButtonElement;
    left: HTMLButtonElement;
    right: HTMLButtonElement;
    jump: HTMLButtonElement;
    place: HTMLButtonElement;
    break: HTMLButtonElement;
  };
  
  private invertClicksChk: HTMLInputElement;
  private enableShadowsChk: HTMLInputElement;
  private saveBtn: HTMLButtonElement;
  private defaultBtn: HTMLButtonElement;
  private closeBtn: HTMLButtonElement;

  private tempConfig: GameConfig;
  private activeBindingKey: keyof GameConfig | null = null;
  private globalKeydownListener: ((e: KeyboardEvent) => void) | null = null;

  constructor() {
    this.overlay = document.getElementById('menu-overlay')!;
    this.modal = document.getElementById('config-modal')!;
    this.configBtn = document.getElementById('config-btn')!;

    this.keyButtons = {
      forward: document.getElementById('key-forward-btn') as HTMLButtonElement,
      backward: document.getElementById('key-backward-btn') as HTMLButtonElement,
      left: document.getElementById('key-left-btn') as HTMLButtonElement,
      right: document.getElementById('key-right-btn') as HTMLButtonElement,
      jump: document.getElementById('key-jump-btn') as HTMLButtonElement,
      place: document.getElementById('key-place-btn') as HTMLButtonElement,
      break: document.getElementById('key-break-btn') as HTMLButtonElement,
    };

    this.invertClicksChk = document.getElementById('invert-clicks-chk') as HTMLInputElement;
    this.enableShadowsChk = document.getElementById('enable-shadows-chk') as HTMLInputElement;
    this.saveBtn = document.getElementById('config-save-btn') as HTMLButtonElement;
    this.defaultBtn = document.getElementById('config-default-btn') as HTMLButtonElement;
    this.closeBtn = document.getElementById('config-close-btn') as HTMLButtonElement;

    this.tempConfig = { ...configStore.getConfig() };

    this.initEvents();
  }

  private initEvents(): void {
    // 設定を開く
    this.configBtn.addEventListener('click', () => {
      this.openModal();
    });

    // キー割り当てボタン
    this.keyButtons.forward.addEventListener('click', () => this.startBinding('keyForward', this.keyButtons.forward));
    this.keyButtons.backward.addEventListener('click', () => this.startBinding('keyBackward', this.keyButtons.backward));
    this.keyButtons.left.addEventListener('click', () => this.startBinding('keyLeft', this.keyButtons.left));
    this.keyButtons.right.addEventListener('click', () => this.startBinding('keyRight', this.keyButtons.right));
    this.keyButtons.jump.addEventListener('click', () => this.startBinding('keyJump', this.keyButtons.jump));
    this.keyButtons.place.addEventListener('click', () => this.startBinding('keyPlaceBlock', this.keyButtons.place));
    this.keyButtons.break.addEventListener('click', () => this.startBinding('keyBreakBlock', this.keyButtons.break));

    // 保存ボタン
    this.saveBtn.addEventListener('click', () => {
      this.saveConfig();
    });

    // デフォルトに戻すボタン
    this.defaultBtn.addEventListener('click', () => {
      this.loadDefaultConfig();
    });

    // 閉じる (キャンセル)
    this.closeBtn.addEventListener('click', () => {
      this.closeModal();
    });
  }

  private openModal(): void {
    // 現在の設定をコピー
    this.tempConfig = { ...configStore.getConfig() };
    this.updateUI();
    this.modal.style.display = 'flex';
  }

  private closeModal(): void {
    this.stopBinding();
    this.modal.style.display = 'none';
  }

  private updateUI(): void {
    // キーテキストの更新
    this.keyButtons.forward.textContent = this.formatKeyName(this.tempConfig.keyForward);
    this.keyButtons.backward.textContent = this.formatKeyName(this.tempConfig.keyBackward);
    this.keyButtons.left.textContent = this.formatKeyName(this.tempConfig.keyLeft);
    this.keyButtons.right.textContent = this.formatKeyName(this.tempConfig.keyRight);
    this.keyButtons.jump.textContent = this.formatKeyName(this.tempConfig.keyJump);
    this.keyButtons.place.textContent = this.formatKeyName(this.tempConfig.keyPlaceBlock);
    this.keyButtons.break.textContent = this.formatKeyName(this.tempConfig.keyBreakBlock);

    // チェックボックス
    this.invertClicksChk.checked = this.tempConfig.invertClicks;
    this.enableShadowsChk.checked = this.tempConfig.enableShadows;
  }

  // キー名のフォーマット (例: "KeyW" -> "W", "Space" -> "Space")
  private formatKeyName(code: string): string {
    if (code.startsWith('Key')) {
      return code.substring(3);
    }
    if (code.startsWith('Digit')) {
      return code.substring(5);
    }
    if (code === 'Space') {
      return 'Space';
    }
    return code;
  }

  // キーバインディング待ち状態の開始
  private startBinding(configKey: keyof GameConfig, button: HTMLButtonElement): void {
    this.stopBinding();

    this.activeBindingKey = configKey;
    button.classList.add('waiting');
    button.textContent = 'キーを入力...';

    this.globalKeydownListener = (e: KeyboardEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const keyCode = e.code;
      
      // Escapeでキャンセル
      if (keyCode === 'Escape') {
        this.stopBinding();
        this.updateUI();
        return;
      }

      if (this.activeBindingKey) {
        // 一時設定に記録 (booleanではないためstringとしてキャスト)
        (this.tempConfig as any)[this.activeBindingKey] = keyCode;
      }

      this.stopBinding();
      this.updateUI();
    };

    // 一時的にウィンドウ全体でkeydownイベントを最優先でキャプチャ
    window.addEventListener('keydown', this.globalKeydownListener, true);
  }

  // キーバインディング待ちの停止
  private stopBinding(): void {
    if (this.globalKeydownListener) {
      window.removeEventListener('keydown', this.globalKeydownListener, true);
      this.globalKeydownListener = null;
    }

    // すべてのボタンの waiting クラスを除去
    Object.values(this.keyButtons).forEach(btn => {
      btn.classList.remove('waiting');
    });

    this.activeBindingKey = null;
  }

  private saveConfig(): void {
    this.tempConfig.invertClicks = this.invertClicksChk.checked;
    this.tempConfig.enableShadows = this.enableShadowsChk.checked;
    configStore.save(this.tempConfig);
    this.closeModal();

    // 説明テキスト（コントロール）を更新する
    this.updateInstructionsUI();

    // 他のモジュール（main.tsなど）に設定変更を通知するカスタムイベントをディスパッチ
    window.dispatchEvent(new CustomEvent('config-changed'));
  }

  private loadDefaultConfig(): void {
    // デフォルトの設定を一時変数にロード
    const defaults = {
      keyForward: 'KeyW',
      keyBackward: 'KeyS',
      keyLeft: 'KeyA',
      keyRight: 'KeyD',
      keyJump: 'Space',
      keyPlaceBlock: 'KeyV',
      keyBreakBlock: 'KeyB',
      invertClicks: false,
      enableShadows: true,
    };
    this.tempConfig = { ...defaults };
    this.updateUI();
  }

  // メイン画面のキーバッジ表示を更新する
  public updateInstructionsUI(): void {
    const config = configStore.getConfig();
    
    // index.html の instructions 要素内のキーバッジを動的に書き換える
    const badges = this.overlay.querySelectorAll('.key-badge');
    if (badges.length >= 5) {
      badges[0].textContent = this.formatKeyName(config.keyForward);
      badges[1].textContent = this.formatKeyName(config.keyLeft);
      badges[2].textContent = this.formatKeyName(config.keyBackward);
      badges[3].textContent = this.formatKeyName(config.keyRight);
      badges[4].textContent = this.formatKeyName(config.keyJump);
    }

    // クリック説明とキーバッジを更新
    const clickBreakBadge = this.overlay.querySelector('#click-break-badge');
    const keyBreakBadge = this.overlay.querySelector('#key-break-badge');
    if (clickBreakBadge && keyBreakBadge) {
      clickBreakBadge.textContent = config.invertClicks ? '右クリック' : '左クリック';
      keyBreakBadge.textContent = this.formatKeyName(config.keyBreakBlock);
    }
    const clickPlaceBadge = this.overlay.querySelector('#click-place-badge');
    const keyPlaceBadge = this.overlay.querySelector('#key-place-badge');
    if (clickPlaceBadge && keyPlaceBadge) {
      clickPlaceBadge.textContent = config.invertClicks ? '左クリック' : '右クリック';
      keyPlaceBadge.textContent = this.formatKeyName(config.keyPlaceBlock);
    }
  }
}
