import { configStore } from '../configStore.ts';

export class InputHandler {
  public keys: Record<string, boolean> = {};
  private justPressedKeys: Record<string, boolean> = {};
  public mouseDelta = { x: 0, y: 0 };
  public isLocked = false;

  public isActionActive(action: 'forward' | 'backward' | 'left' | 'right' | 'jump'): boolean {
    const config = configStore.getConfig();
    switch (action) {
      case 'forward': return !!this.keys[config.keyForward];
      case 'backward': return !!this.keys[config.keyBackward];
      case 'left': return !!this.keys[config.keyLeft];
      case 'right': return !!this.keys[config.keyRight];
      case 'jump': return !!this.keys[config.keyJump];
      default: return false;
    }
  }

  private targetElement: HTMLElement;

  constructor(targetElement: HTMLElement) {
    this.targetElement = targetElement;

    // キーボードイベント
    window.addEventListener('keydown', this.onKeyDown.bind(this));
    window.addEventListener('keyup', this.onKeyUp.bind(this));

    // マウス移動イベント
    document.addEventListener('mousemove', this.onMouseMove.bind(this));

    // ポインターロックのステータス変更イベント
    document.addEventListener('pointerlockchange', this.onPointerLockChange.bind(this));
  }

  // ポインターロックの要求
  public requestLock(): void {
    if (!this.isLocked) {
      this.targetElement.requestPointerLock();
    }
  }

  private onKeyDown(e: KeyboardEvent): void {
    const key = e.code;
    
    // ポインターロック中またはゲーム内のブラウザデフォルト動作防止（F5:更新, Tab:フォーカス移動, Eキーなど）
    if (key === 'Tab') {
      e.preventDefault();
    }
    if (this.isLocked && (key === 'F5' || key === 'KeyQ' || key === 'KeyE')) {
      if (key === 'KeyE' || key === 'F5') {
        e.preventDefault();
      }
    }

    if (!this.keys[key]) {
      this.justPressedKeys[key] = true;
    }
    this.keys[key] = true;
  }

  private onKeyUp(e: KeyboardEvent): void {
    const key = e.code;
    this.keys[key] = false;
    this.justPressedKeys[key] = false;
  }

  private onMouseMove(e: MouseEvent): void {
    if (!this.isLocked) return;
    // マウスの移動量を蓄積
    this.mouseDelta.x += e.movementX;
    this.mouseDelta.y += e.movementY;
  }

  private onPointerLockChange(): void {
    const menuOverlay = document.getElementById('menu-overlay');
    const crosshair = document.getElementById('crosshair');
    const inventoryModal = document.getElementById('inventory-modal');

    if (document.pointerLockElement === this.targetElement) {
      this.isLocked = true;
      if (menuOverlay) menuOverlay.style.display = 'none';
      if (crosshair) crosshair.style.display = 'block';
    } else {
      this.isLocked = false;
      this.clearKeys();
      
      const isInventoryOpen = inventoryModal && inventoryModal.style.display === 'flex';
      if (!isInventoryOpen) {
        if (menuOverlay) {
          menuOverlay.style.display = 'flex';
          menuOverlay.style.opacity = '1';
        }
      }
      if (crosshair) crosshair.style.display = 'none';
    }
  }

  private clearKeys(): void {
    this.keys = {};
    this.justPressedKeys = {};
  }

  // キーが押された瞬間を判定して消費する
  public consumeJustPressed(code: string): boolean {
    if (this.justPressedKeys[code]) {
      this.justPressedKeys[code] = false;
      return true;
    }
    return false;
  }

  // 毎フレームの終わりにマウス移動量を消費（リセット）する
  public consumeMouseDelta(): { x: number; y: number } {
    const delta = { ...this.mouseDelta };
    this.mouseDelta.x = 0;
    this.mouseDelta.y = 0;
    return delta;
  }
}

