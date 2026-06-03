import { CONFIG } from '../config.ts';
import { Player } from '../player/Player.ts';
import { World } from '../world/World.ts';

export class SaveManager {
  private player: Player;
  private world: World;
  private accountId: string | null = null;
  private worldId: string = 'shared_world_1';
  private autoSaveInterval: number | null = null;
  private isSaving: boolean = false;
  
  public onSaveCustomData?: () => any;
  public onLoadCustomData?: (data: any) => void;

  constructor(player: Player, world: World) {
    this.player = player;
    this.world = world;
  }

  public setAccountId(id: string) {
    this.accountId = id;
  }

  public getAccountId(): string | null {
    return this.accountId;
  }
  
  public setWorldId(id: string) {
    this.worldId = id || 'shared_world_1';
  }

  public async loadData(): Promise<boolean> {
    if (!this.accountId) {
      console.error('Account ID is not set.');
      return false;
    }

    if (!CONFIG.GAS_WEB_APP_URL) {
      console.warn('GAS_WEB_APP_URL is not configured.');
      return false;
    }

    try {
      this.showToast('データをロード中...');
      const response = await fetch(`${CONFIG.GAS_WEB_APP_URL}?accountId=${encodeURIComponent(this.accountId)}&worldId=${encodeURIComponent(this.worldId)}`);
      const data = await response.json();

      if (data.worldData) {
        this.world.setModifiedBlocksData(data.worldData);
      }
      
      if (data.playerData) {
        this.player.loadSaveData(data.playerData);
        if (this.onLoadCustomData && data.playerData.customData) {
          this.onLoadCustomData(data.playerData.customData);
        }
      }
      
      // ワールド再描画
      this.world.clearAndRebuild(this.player.position.x, this.player.position.z);
      this.showToast('ロードが完了しました');
      return true;
    } catch (error) {
      console.error('Failed to load data:', error);
      this.showToast('ロードに失敗しました', true);
      return false;
    }
  }

  public async saveData(): Promise<boolean> {
    if (!this.accountId) {
      console.error('Account ID is not set.');
      return false;
    }

    if (!CONFIG.GAS_WEB_APP_URL) {
      console.warn('GAS_WEB_APP_URL is not configured.');
      return false;
    }

    if (this.isSaving) return false;
    this.isSaving = true;

    try {
      this.showToast('セーブ中...');
      const worldData = this.world.getModifiedBlocksData();
      const playerData: any = this.player.getSaveData();
      
      if (this.onSaveCustomData) {
        playerData.customData = this.onSaveCustomData();
      }

      const payload = {
        accountId: this.accountId,
        worldId: this.worldId,
        worldData: worldData,
        playerData: playerData
      };

      const response = await fetch(CONFIG.GAS_WEB_APP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain', // GASのCORS制約回避のためにtext/plainを使用
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      this.isSaving = false;

      if (result.success) {
        this.showToast('セーブしました');
        return true;
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error('Failed to save data:', error);
      this.showToast('セーブに失敗しました', true);
      this.isSaving = false;
      return false;
    }
  }

  public startAutoSave(intervalMinutes: number = 3): void {
    this.stopAutoSave();
    // 指定された分数（ミリ秒）ごとにオートセーブを実行
    this.autoSaveInterval = window.setInterval(() => {
      if (this.accountId) {
        this.saveData();
      }
    }, intervalMinutes * 60 * 1000);
  }

  public stopAutoSave(): void {
    if (this.autoSaveInterval !== null) {
      window.clearInterval(this.autoSaveInterval);
      this.autoSaveInterval = null;
    }
  }

  private showToast(message: string, isError: boolean = false): void {
    const toast = document.getElementById('save-toast');
    if (toast) {
      toast.textContent = message;
      toast.style.backgroundColor = isError ? 'rgba(220, 53, 69, 0.9)' : 'rgba(40, 167, 69, 0.9)';
      toast.style.opacity = '1';
      toast.style.transform = 'translateY(0)';
      
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
      }, 3000);
    }
  }
}
