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

  public async loadData(force: boolean = false): Promise<boolean> {
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

      // 競合チェック (forceがfalseの場合のみ)
      // ローカルデータが新しければ自動的にローカルデータを採用（クラウドへ同期）し、
      // クラウドデータの方が新しければ自動的にクラウドデータをロードする
      if (!force) {
        const localAutosaveText = localStorage.getItem('maikurafu_autosave');
        if (localAutosaveText) {
          try {
            const localData = JSON.parse(localAutosaveText);
            const localTime = localData.timestamp || 0;
            // クラウドの最終更新日時（プレイヤーデータかワールドデータのうち新しい方）
            const cloudTime = Math.max(data.playerLastUpdated || 0, data.worldLastUpdated || 0);

            // ローカルの方が新しく、かつクラウドに既存のデータが存在する場合は自動的にローカル優先
            if (cloudTime > 0 && localTime > cloudTime) {
              console.log(`[SaveManager] Local save is newer (${localTime}) than cloud save (${cloudTime}). Auto-uploading local save.`);
              this.showToast('ローカルデータが新しいため、クラウドにアップロード中...');
              const saveSuccess = await this.saveData();
              if (saveSuccess) {
                this.showToast('ローカルデータをクラウドに保存しました');
                return true;
              } else {
                this.showToast('アップロードに失敗しました', true);
                return false;
              }
            }
          } catch (e) {
            console.warn('Failed to parse local autosave for conflict check:', e);
          }
        }
      }

      if (data.worldData) {
        this.world.setModifiedBlocksData(data.worldData);
      }
      
      if (data.playerData) {
        this.player.loadSaveData(data.playerData);
        if (this.onLoadCustomData && data.playerData.customData) {
          this.onLoadCustomData(data.playerData.customData);
        }
      } else {
        // 新規プレイヤーの場合、既存の建物（初期位置）を避けるためにランダムな遠方へスポーンさせる
        const spawnRange = 300; // ±300ブロックの範囲
        // 初期リスポーン位置は(8,8)なので、そこから大きく離す
        const randX = Math.floor(Math.random() * spawnRange * 2) - spawnRange + 100;
        const randZ = Math.floor(Math.random() * spawnRange * 2) - spawnRange + 100;
        
        // 少し高めの位置から落下させる
        this.player.position.set(randX, 30, randZ);
        this.player.body.position.set(randX, 30, randZ);
        this.player.body.velocity.set(0, 0, 0);
        
        // リスポーン地点も更新しておく
        (this.player as any).spawnPosition.set(randX, 30, randZ);
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
    console.log('[SaveManager] saveData started. accountId:', this.accountId, 'worldId:', this.worldId);
    if (!this.accountId) {
      console.error('[SaveManager] Account ID is not set.');
      alert('[SaveManager] アカウントIDが設定されていません。');
      return false;
    }

    if (!CONFIG.GAS_WEB_APP_URL) {
      console.warn('[SaveManager] GAS_WEB_APP_URL is not configured.');
      alert('[SaveManager] GASのURLが設定されていません。');
      return false;
    }

    if (this.isSaving) {
      console.log('[SaveManager] Already saving, skip.');
      return false;
    }
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

      console.log('[SaveManager] Sending payload to GAS...');
      const response = await fetch(CONFIG.GAS_WEB_APP_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain', // GASのCORS制約回避のためにtext/plainを使用
        },
        body: JSON.stringify(payload)
      });

      console.log('[SaveManager] Response received, status:', response.status);
      const result = await response.json();
      console.log('[SaveManager] Response JSON parsed:', result);
      this.isSaving = false;

      if (result.success) {
        if (result.worldData) {
          const updatedChunks = this.world.mergeModifiedBlocksData(result.worldData);
          if (updatedChunks.size > 0) {
            for (const chunkKey of updatedChunks) {
              const parts = chunkKey.split(',');
              const cx = parseInt(parts[0], 10);
              const cy = parseInt(parts[1], 10);
              const cz = parseInt(parts[2], 10);
              this.world.updateChunkMesh(cx, cy, cz);
            }
          }
        }
        this.showToast('セーブしました');
        return true;
      } else {
        throw new Error(result.error || 'GAS側でエラーが発生しました');
      }
    } catch (error: any) {
      console.error('[SaveManager] Failed to save data:', error);
      alert(`[SaveManager] セーブに失敗しました:\n${error.message || error}`);
      this.showToast('セーブに失敗しました', true);
      this.isSaving = false;
      return false;
    }
  }

  public async syncWorldData(): Promise<boolean> {
    if (!CONFIG.GAS_WEB_APP_URL) {
      console.warn('GAS_WEB_APP_URL is not configured.');
      return false;
    }

    try {
      this.showToast('ワールドデータを同期中...');
      const accId = this.accountId || 'anonymous';
      const response = await fetch(`${CONFIG.GAS_WEB_APP_URL}?accountId=${encodeURIComponent(accId)}&worldId=${encodeURIComponent(this.worldId)}`);
      const data = await response.json();

      if (data.worldData) {
        const updatedChunks = this.world.mergeModifiedBlocksData(data.worldData);
        if (updatedChunks.size > 0) {
          for (const chunkKey of updatedChunks) {
            const parts = chunkKey.split(',');
            const cx = parseInt(parts[0], 10);
            const cy = parseInt(parts[1], 10);
            const cz = parseInt(parts[2], 10);
            this.world.updateChunkMesh(cx, cy, cz);
          }
          this.showToast('同期が完了しました（建築物が更新されました）');
        } else {
          this.showToast('すでに最新の状態です');
        }
        return true;
      } else {
        this.showToast('同期データがありません');
        return false;
      }
    } catch (error) {
      console.error('Failed to sync world data:', error);
      this.showToast('同期に失敗しました', true);
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
