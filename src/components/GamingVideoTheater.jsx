import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cyberAudio } from "../utils/cyberAudio";

const MISSIONS = [
  {
    id: "dating-platform",
    title: "Zinkr // Dating Engine",
    sub: "Real-Time Matchmaking · WebSockets · Google OAuth2 · ASP.NET Core",
    src: "/Record_2026-05-28-14-45-33.mp4",
    badge: "MISSION 01 · ACTIVE FEED",
    color: "#48E5FF",
    latency: "42ms",
    concurrency: "2,500+ WS Sessions",
    security: "JWT + OAuth2 SSO",
    details: "Unedited production footage of the real-time swipe discovery engine, user authentication, and high-concurrency matchmaking pipeline.",
  },
  {
    id: "bellezbuy-store",
    title: "BellezBuy // E-Commerce Store",
    sub: "Full-Stack Shopping · Razorpay Payments · Brevo Email Dispatch",
    src: "/Record_2026-05-28-14-40-29.mp4",
    badge: "MISSION 02 · CONSUMER UX",
    color: "#38bdf8",
    latency: "35ms",
    concurrency: "0% Dropped Orders",
    security: "SHA-256 Webhook Sig",
    details: "Direct screen capture of product catalog browsing, reactive shopping cart state, payment processing, and automated transactional email triggers.",
  },
  {
    id: "bellezbuy-admin",
    title: "BellezBuy // Admin Console",
    sub: "Inventory Telemetry · Stock Control · Role-Based Staff Auth",
    src: "/VID20260529105202.mp4",
    badge: "MISSION 03 · COMMAND PANEL",
    color: "#8B5CFF",
    latency: "28ms",
    concurrency: "Real-Time Inventory",
    security: "RBAC Security Layer",
    details: "Merchant dashboard demonstrating real-time inventory adjustments, order fulfillment status, and administrative control over live SKU records.",
  },
];

export default function GamingVideoTheater() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [glitching, setGlitching] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fps, setFps] = useState(60);
  const videoRef = useRef(null);

  const mission = MISSIONS[activeIdx];

  // Random micro FPS jitter for gaming realism
  useEffect(() => {
    const interval = setInterval(() => {
      setFps(Math.floor(59 + Math.random() * 2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const switchMission = (idx) => {
    cyberAudio.playGlitch();
    cyberAudio.playLaser();
    setGlitching(true);
    setActiveIdx(idx);
    setProgress(0);
    setTimeout(() => setGlitching(false), 300);
  };

  const togglePlay = () => {
    cyberAudio.playClick();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    cyberAudio.playClick();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const dur = videoRef.current.duration;
    const curr = videoRef.current.currentTime;
    if (dur > 0) {
      setProgress((curr / dur) * 100);
    }
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  return (
    <section style={{ position: "relative", padding: "5rem 1.5rem" }}>
      <div className="section-container" style={{ paddingBottom: 0 }}>
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            HOLOGRAPHIC THEATER // LIVE RECORDINGS
          </div>
          <h2 className="section-title">
            MISSION FOOTAGE & <span className="gradient-cyan-purple">REAL GAMEPLAY.</span>
          </h2>
          <p className="section-subtitle">
            Unedited screen recordings of production architectures in action. Switch mission feeds, inspect system telemetry, and witness real responsive performance.
          </p>
        </div>

        {/* Video Theater Console HUD */}
        <div
          className="cyber-panel clipped-corner"
          style={{
            background: "rgba(6, 10, 20, 0.94)",
            border: "1px solid rgba(72, 229, 255, 0.35)",
            boxShadow: "0 0 50px rgba(72, 229, 255, 0.18), 0 25px 60px rgba(0,0,0,0.8)",
            padding: "1.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Top Gaming Telemetry Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "1rem",
              borderBottom: "1px solid rgba(72, 229, 255, 0.18)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-muted)",
              flexWrap: "wrap",
              gap: "0.6rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <span style={{ color: "var(--cyan)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#ef4444",
                    boxShadow: "0 0 10px #ef4444",
                  }}
                  className="cyber-pulse"
                />
                REC // LIVE UPLINK
              </span>
              <span>|</span>
              <span style={{ color: "#34d399" }}>FPS: {fps}</span>
              <span>|</span>
              <span>LATENCY: {mission.latency}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ color: mission.color }}>{mission.badge}</span>
              <span style={{ color: "var(--text-dim)" }}>[1080p 60FPS]</span>
            </div>
          </div>

          {/* Mission Switcher Tabs */}
          <div
            style={{
              display: "flex",
              gap: "0.6rem",
              padding: "1rem 0",
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {MISSIONS.map((m, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={m.id}
                  onClick={() => switchMission(idx)}
                  onMouseEnter={() => cyberAudio.playHover()}
                  style={{
                    padding: "0.6rem 1.2rem",
                    borderRadius: "6px",
                    background: isActive ? "rgba(72, 229, 255, 0.18)" : "rgba(12, 18, 34, 0.7)",
                    border: `1px solid ${isActive ? m.color : "rgba(72, 229, 255, 0.15)"}`,
                    color: isActive ? "#ffffff" : "var(--text-secondary)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    whiteSpace: "nowrap",
                    boxShadow: isActive ? `0 0 15px ${m.color}33` : "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span style={{ color: m.color, fontSize: "0.9rem" }}>{isActive ? "▶" : "◇"}</span>
                  <span style={{ fontWeight: 600 }}>{m.title}</span>
                </button>
              );
            })}
          </div>

          {/* Video Screen Container with CRT Scanlines & Reticles */}
          <div
            style={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              border: `1px solid ${mission.color}66`,
              boxShadow: `0 0 35px ${mission.color}22`,
              backgroundColor: "#020408",
              minHeight: "360px",
              maxHeight: "560px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Corner Targeting Crosshairs */}
            {[
              { top: "12px", left: "12px" },
              { top: "12px", right: "12px" },
              { bottom: "12px", left: "12px" },
              { bottom: "12px", right: "12px" },
            ].map((pos, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  ...pos,
                  width: "16px",
                  height: "16px",
                  borderTop: i < 2 ? `2px solid ${mission.color}` : "none",
                  borderBottom: i >= 2 ? `2px solid ${mission.color}` : "none",
                  borderLeft: i % 2 === 0 ? `2px solid ${mission.color}` : "none",
                  borderRight: i % 2 === 1 ? `2px solid ${mission.color}` : "none",
                  zIndex: 4,
                  pointerEvents: "none",
                }}
              />
            ))}

            {/* CRT Scanline Sweeper Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)",
                backgroundSize: "100% 4px",
                pointerEvents: "none",
                zIndex: 3,
                opacity: 0.6,
              }}
            />

            {/* Moving Scanner Laser Bar */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${mission.color}, transparent)`,
                boxShadow: `0 0 15px ${mission.color}`,
                animation: "scannerMove 4s linear infinite",
                pointerEvents: "none",
                zIndex: 3,
              }}
            />

            {/* Glitch Overlay on Switch */}
            {glitching && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(72, 229, 255, 0.15)",
                  mixBlendMode: "difference",
                  zIndex: 5,
                  pointerEvents: "none",
                }}
              />
            )}

            {/* Video Element */}
            <video
              ref={videoRef}
              key={mission.src}
              src={mission.src}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "560px",
                objectFit: "contain",
                display: "block",
                filter: glitching ? "hue-rotate(90deg) contrast(150%)" : "none",
                transition: "filter 0.2s ease",
              }}
            />

            {/* Play/Pause Center Indicator on Click */}
            <div
              onClick={togglePlay}
              style={{
                position: "absolute",
                inset: 0,
                cursor: "pointer",
                zIndex: 2,
              }}
            />
          </div>

          {/* Progress Scrubber */}
          <div
            onClick={handleSeek}
            style={{
              height: "6px",
              background: "rgba(12, 18, 34, 0.8)",
              cursor: "pointer",
              position: "relative",
              marginTop: "0.8rem",
              borderRadius: "3px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${mission.color}, #ffffff)`,
                boxShadow: `0 0 8px ${mission.color}`,
                transition: "width 0.1s linear",
              }}
            />
          </div>

          {/* Bottom HUD Controls & Mission Telemetry */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "1.2rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {/* Playback Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
              <button
                onClick={togglePlay}
                style={{
                  background: "rgba(72, 229, 255, 0.1)",
                  border: "1px solid rgba(72, 229, 255, 0.3)",
                  color: "var(--cyan)",
                  borderRadius: "6px",
                  padding: "0.45rem 1rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <span>{isPlaying ? "❚❚ PAUSE" : "▶ PLAY"}</span>
              </button>

              <button
                onClick={toggleMute}
                style={{
                  background: "rgba(72, 229, 255, 0.1)",
                  border: "1px solid rgba(72, 229, 255, 0.3)",
                  color: "var(--cyan)",
                  borderRadius: "6px",
                  padding: "0.45rem 0.9rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  cursor: "pointer",
                }}
              >
                {isMuted ? "🔇 UNMUTE" : "🔊 MUTED"}
              </button>
            </div>

            {/* Live Stats Counters */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
              }}
            >
              <div>
                <span style={{ color: "var(--text-muted)" }}>CONCURRENCY: </span>
                <span style={{ color: "#ffffff", fontWeight: 700 }}>{mission.concurrency}</span>
              </div>
              <div>
                <span style={{ color: "var(--text-muted)" }}>SECURITY: </span>
                <span style={{ color: "var(--cyan)", fontWeight: 700 }}>{mission.security}</span>
              </div>
            </div>
          </div>

          {/* Mission Intel Description */}
          <div
            style={{
              marginTop: "1.2rem",
              padding: "1rem 1.2rem",
              background: "rgba(7, 10, 18, 0.7)",
              borderRadius: "8px",
              border: "1px solid rgba(72, 229, 255, 0.12)",
              fontSize: "0.88rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            <span style={{ color: mission.color, fontWeight: 700, fontFamily: "var(--font-mono)" }}>
              // MISSION INTEL:{" "}
            </span>
            {mission.details}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scannerMove {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
