import { BlockType } from '../world/Block.ts';

export class SoundManager {
  private static audioCtx: AudioContext | null = null;
  private static noiseBuffer: AudioBuffer | null = null;

  // サウンドシステムの初期化（ユーザーのアクションにより再生制限を解除する）
  public static init(): void {
    if (this.audioCtx) {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      return;
    }

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
        this.createNoiseBuffer();
      }
    } catch (e) {
      console.warn('Failed to initialize AudioContext:', e);
    }
  }

  // ホワイトノイズ用のバッファを生成（生成は1回のみで使い回すことでGCを防止）
  private static createNoiseBuffer(): void {
    if (!this.audioCtx) return;
    const bufferSize = this.audioCtx.sampleRate * 1.0; // 1秒間のノイズバッファ
    this.noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
  }

  // 汎用ノイズ再生関数 (時間変化エンベロープとフィルターに対応)
  private static playNoise(duration: number, volume: number, filterFreq?: number, filterType: BiquadFilterType = 'lowpass'): void {
    if (!this.audioCtx || !this.noiseBuffer) return;

    const source = this.audioCtx.createBufferSource();
    source.buffer = this.noiseBuffer;

    const gainNode = this.audioCtx.createGain();
    gainNode.gain.setValueAtTime(volume, this.audioCtx.currentTime);
    // 音量を滑らかに指数関数的フェードアウトさせる
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

    let lastNode: AudioNode = source;

    if (filterFreq !== undefined) {
      const filter = this.audioCtx.createBiquadFilter();
      filter.type = filterType;
      filter.frequency.setValueAtTime(filterFreq, this.audioCtx.currentTime);
      source.connect(filter);
      lastNode = filter;
    }

    lastNode.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

    source.start();
    source.stop(this.audioCtx.currentTime + duration);
  }

  // 汎用トーン（オシレーター）再生関数 (周波数スイープ対応)
  private static playTone(
    type: OscillatorType,
    startFreq: number,
    endFreq: number,
    duration: number,
    volume: number
  ): void {
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    osc.type = type;

    const gainNode = this.audioCtx.createGain();
    gainNode.gain.setValueAtTime(volume, this.audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

    osc.frequency.setValueAtTime(startFreq, this.audioCtx.currentTime);
    if (startFreq !== endFreq) {
      osc.frequency.exponentialRampToValueAtTime(endFreq, this.audioCtx.currentTime + duration);
    }

    osc.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

    osc.start();
    osc.stop(this.audioCtx.currentTime + duration);
  }

  // 1. ブロック破壊音（材質ごとに音色を鳴らし分け）
  public static playBreak(blockType: BlockType): void {
    this.init();
    if (!this.audioCtx) return;

    switch (blockType) {
      case BlockType.STONE:
      case BlockType.COAL_ORE:
      case BlockType.BRICK:
        // 石系: 低めのノイズと三角形波をブレンドして重い破砕音を作る
        this.playNoise(0.18, 0.35, 450, 'bandpass');
        this.playTone('triangle', 130, 40, 0.15, 0.3);
        break;
      case BlockType.WOOD:
      case BlockType.PLANK:
      case BlockType.DOOR_CLOSED:
      case BlockType.DOOR_OPEN:
        // 木系: 低域フィルター付きノイズと中音トーン
        this.playNoise(0.12, 0.3, 600, 'lowpass');
        this.playTone('triangle', 180, 80, 0.12, 0.35);
        break;
      case BlockType.GROUND:
      case BlockType.DIRT:
      case BlockType.LEAVES:
        // 土・草・葉系: 高周波ノイズで「サクサク」感を出す
        this.playNoise(0.08, 0.25, 1200, 'bandpass');
        break;
      case BlockType.GLASS:
        // ガラス系: 高いキーンというトーンの重ね合わせとハイパスノイズ
        this.playTone('sine', 1600, 800, 0.25, 0.35);
        this.playTone('sine', 2200, 1000, 0.2, 0.2);
        this.playNoise(0.18, 0.15, 4000, 'highpass');
        break;
      default:
        // 砂などのその他
        this.playNoise(0.1, 0.25, 800, 'lowpass');
        break;
    }
  }

  // 2. ブロック設置音（破壊音より短く、乾いた高めの音）
  public static playPlace(blockType: BlockType): void {
    this.init();
    if (!this.audioCtx) return;

    switch (blockType) {
      case BlockType.STONE:
      case BlockType.COAL_ORE:
      case BlockType.BRICK:
        this.playNoise(0.08, 0.2, 700, 'bandpass');
        this.playTone('triangle', 180, 120, 0.08, 0.18);
        break;
      case BlockType.WOOD:
      case BlockType.PLANK:
      case BlockType.DOOR_CLOSED:
      case BlockType.DOOR_OPEN:
        this.playNoise(0.06, 0.2, 900, 'lowpass');
        this.playTone('triangle', 240, 180, 0.06, 0.2);
        break;
      case BlockType.GLASS:
        this.playTone('sine', 1900, 1700, 0.1, 0.2);
        break;
      default:
        this.playNoise(0.05, 0.18, 1400, 'lowpass');
        break;
    }
  }

  // 3. 剣を振る音（スイング）
  public static playSwing(): void {
    this.init();
    // 周波数を一気に低下させるサイン波に短いノイズを被せ、「ビュッ」と表現
    this.playTone('sine', 600, 90, 0.12, 0.25);
    this.playNoise(0.08, 0.1, 2500, 'bandpass');
  }

  // 4. 攻撃ヒット音（打撃・ダメージ音）
  public static playHit(): void {
    this.init();
    // 低域のノイズと短パルス波のブレンドで「バシッ」
    this.playNoise(0.12, 0.4, 250, 'lowpass');
    this.playTone('sawtooth', 120, 40, 0.1, 0.3);
  }

  // 5. プレイヤーダメージ音
  public static playDamage(): void {
    this.init();
    // 「ウッ」という低くこもったダメージ声
    this.playTone('sawtooth', 85, 45, 0.16, 0.45);
    this.playNoise(0.14, 0.25, 350, 'lowpass');
  }

  // 6. ジャンプ音
  public static playJump(): void {
    this.init();
    // 軽いピッチ上昇トーン「ヒュッ」
    this.playTone('triangle', 160, 280, 0.12, 0.2);
  }

  // 7. アイテム獲得音
  public static playPickup(): void {
    this.init();
    // ピコッと弾むようなコイン獲得音「ポンッ」
    this.playTone('sine', 950, 1400, 0.08, 0.22);
  }
}
