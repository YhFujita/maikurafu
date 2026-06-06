import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { CONFIG } from '../config.ts';
import { Player } from '../player/Player.ts';
import { World } from '../world/World.ts';
import { NPC } from './NPC.ts';

interface OtherPlayerMeta {
  accountId: string;
  characterType: string;
  homePosition: { x: number; y: number; z: number } | null;
}

export class NPCManager {
  private playersMeta: OtherPlayerMeta[] = [];
  private activeNPCs: Map<string, NPC> = new Map(); // accountId -> NPC

  private scene: THREE.Scene;
  private physicsWorld: CANNON.World;
  private voxelWorld: World;

  constructor(scene: THREE.Scene, physicsWorld: CANNON.World, voxelWorld: World) {
    this.scene = scene;
    this.physicsWorld = physicsWorld;
    this.voxelWorld = voxelWorld;
  }

  // 他プレイヤーのメタデータ一覧をサーバーから取得
  public async fetchOtherPlayers(accountId: string, worldId: string): Promise<void> {
    if (!CONFIG.GAS_WEB_APP_URL) return;
    try {
      const response = await fetch(`${CONFIG.GAS_WEB_APP_URL}?action=listOtherPlayers&accountId=${encodeURIComponent(accountId)}&worldId=${encodeURIComponent(worldId)}`);
      const data = await response.json();
      if (data && data.players) {
        this.playersMeta = data.players;
        console.log('Loaded other players metadata:', this.playersMeta);
      }
    } catch (e) {
      console.error('Failed to fetch other players info:', e);
    }
  }

  // プレイヤーの動きに応じてNPCのスポーン・デスポーンを管理
  public update(deltaTime: number, player: Player): void {
    const pPos = player.position;

    // 各他プレイヤーを監視
    for (const meta of this.playersMeta) {
      if (!meta.homePosition) continue;

      const homePos = new THREE.Vector3(meta.homePosition.x, meta.homePosition.y, meta.homePosition.z);
      const dist = pPos.distanceTo(homePos);
      const spawnRadius = 35.0;
      const despawnRadius = 45.0;

      const isActive = this.activeNPCs.has(meta.accountId);

      if (dist < spawnRadius && !isActive) {
        // スポーン
        const npc = new NPC(
          meta.accountId,
          meta.characterType,
          homePos,
          this.scene,
          this.physicsWorld,
          this.voxelWorld
        );
        this.activeNPCs.set(meta.accountId, npc);
        console.log(`NPC Spawned: ${meta.accountId} at home position.`);
      } else if (dist > despawnRadius && isActive) {
        // デスポーン
        const npc = this.activeNPCs.get(meta.accountId);
        if (npc) {
          npc.destroy();
          this.activeNPCs.delete(meta.accountId);
          console.log(`NPC Despawned: ${meta.accountId}`);
        }
      }
    }

    // 生成されている全NPCの更新
    for (const npc of this.activeNPCs.values()) {
      npc.update(deltaTime, player);
    }
  }

  // ワールド退室時などに全NPCをクリアする
  public clearAll(): void {
    for (const npc of this.activeNPCs.values()) {
      npc.destroy();
    }
    this.activeNPCs.clear();
    this.playersMeta = [];
  }
}
