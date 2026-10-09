// Procedural Cyberpunk & Gaming Audio FX using Web Audio API
// Zero external files, ultra-low latency, default silent until user toggles or interacts.

class CyberAudioSystem {
  constructor() {
    this.ctx = null;
    this.enabled = false;
  }

  init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.init();
      this.playPowerUp();
    }
    return this.enabled;
  }

  playBeep(freq = 600, duration = 0.06, type = "sine", gainVal = 0.035) {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio error silenced
    }
  }

  playClick() {
    this.playBeep(1400, 0.04, "triangle", 0.03);
  }

  playHover() {
    this.playBeep(520, 0.025, "sine", 0.012);
  }

  playLaser() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch {}
  }

  playTargetLock() {
    if (!this.enabled || !this.ctx) return;
    try {
      this.playBeep(1200, 0.04, "square", 0.02);
      setTimeout(() => this.playBeep(1600, 0.06, "square", 0.02), 60);
    } catch {}
  }

  playPowerUp() {
    if (!this.enabled || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    } catch {}
  }

  playGlitch() {
    if (!this.enabled || !this.ctx) return;
    try {
      this.playBeep(180 + Math.random() * 400, 0.03, "sawtooth", 0.03);
      setTimeout(() => this.playBeep(260 + Math.random() * 600, 0.04, "square", 0.025), 40);
    } catch {}
  }

  playSuccess() {
    if (!this.enabled || !this.ctx) return;
    setTimeout(() => this.playBeep(523.25, 0.06, "sine", 0.03), 0);
    setTimeout(() => this.playBeep(659.25, 0.06, "sine", 0.03), 80);
    setTimeout(() => this.playBeep(783.99, 0.14, "sine", 0.03), 160);
  }

  playNodeSelect() {
    this.playBeep(980, 0.08, "triangle", 0.03);
  }
}

export const cyberAudio = new CyberAudioSystem();
