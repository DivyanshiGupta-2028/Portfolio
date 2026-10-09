// Procedural Cyberpunk Audio FX using Web Audio API
// Lightweight, zero-external-assets, default silent.

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
      this.playBeep(880, 0.08, "triangle");
    }
    return this.enabled;
  }

  playBeep(freq = 600, duration = 0.06, type = "sine", gainVal = 0.04) {
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
      // Audio context error handle silently
    }
  }

  playClick() {
    this.playBeep(1200, 0.04, "triangle", 0.03);
  }

  playHover() {
    this.playBeep(440, 0.03, "sine", 0.015);
  }

  playSuccess() {
    if (!this.enabled || !this.ctx) return;
    setTimeout(() => this.playBeep(523.25, 0.06, "sine", 0.03), 0);
    setTimeout(() => this.playBeep(659.25, 0.06, "sine", 0.03), 80);
    setTimeout(() => this.playBeep(783.99, 0.12, "sine", 0.03), 160);
  }

  playNodeSelect() {
    this.playBeep(920, 0.08, "sine", 0.03);
  }
}

export const cyberAudio = new CyberAudioSystem();
