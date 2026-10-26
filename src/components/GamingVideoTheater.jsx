import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { cyberAudio } from "../utils/cyberAudio";

const MISSIONS = [
  {
    id: "dating-platform",
    title: "Zinkr // Dating Engine",
    sub: "Real-Time Matchmaking · WebSockets · Google OAuth2 · ASP.NET Core",
    src: "/Zinkr_Ad_v6_full_edit.mp4",
    aspect: "portrait",
    badge: "MISSION 01 · ACTIVE FEED",
    color: "#48E5FF",
    latency: "42ms",
    concurrency: "2,500+ WS Sessions",
    security: "JWT + OAuth2 SSO",
    details: "Unedited production footage of the real-time swipe discovery engine, user authentication, and high-concurrency matchmaking pipeline.",
    liveUrl: "https://play.google.com/apps/internaltest/4701291796801878386",
    liveLabel: "Play Store (Internal Beta)",
    tags: ["ASP.NET Core", "WebSockets", "OAuth2 SSO", "SQL Server"],
    highlights: [
      "Real-time bidirectional swipe matching engine",
      "Stateless JWT tokens with refresh-token rotation",
      "High-throughput WebSocket messaging pipeline",
    ],
  },
  {
    id: "bellezbuy-store",
    title: "BellezBuy // E-Commerce Store",
    sub: "Full-Stack Shopping · Razorpay Payments · Brevo Email Dispatch",
    src: "/Record_2026-05-28-14-40-29.mp4",
    aspect: "portrait",
    badge: "MISSION 02 · CONSUMER UX",
    color: "#38bdf8",
    latency: "35ms",
    concurrency: "0% Dropped Orders",
    security: "SHA-256 Webhook Sig",
    details: "Direct screen capture of product catalog browsing, reactive shopping cart state, payment processing, and automated transactional email triggers.",
    liveUrl: "https://play.google.com/store/apps/details?id=com.Bellezbuy.app&hl=en",
    liveLabel: "Google Play Store",
    tags: ["React Native", "FastAPI", "Razorpay", "MySQL"],
    highlights: [
      "Instantaneous checkout & dynamic cart state management",
      "Cryptographic webhook signature verification for payments",
      "Automated transactional dispatch via Brevo triggers",
    ],
  },
  {
    id: "bellezbuy-admin",
    title: "BellezBuy // Admin Console",
    sub: "Inventory Telemetry · Stock Control · Role-Based Staff Auth",
    src: "/VID20260529105202.mp4",
    aspect: "landscape",
    badge: "MISSION 03 · COMMAND PANEL",
    color: "#8B5CFF",
    latency: "28ms",
    concurrency: "Real-Time Inventory",
    security: "RBAC Security Layer",
    details: "Merchant dashboard demonstrating real-time inventory adjustments, order fulfillment status, and administrative control over live SKU records.",
    liveUrl: null,
    liveLabel: null,
    tags: [".NET 7+", "Angular", "SQL Server", "RBAC Matrix"],
    highlights: [
      "Real-time SKU stock level telemetry with zero sync drops",
      "Strict role-based privilege isolation across employees",
      "Automated fulfillment order status state machine",
    ],
  },
];

const formatTime = (seconds) => {
  if (isNaN(seconds) || seconds <= 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
};

export default function GamingVideoTheater() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [glitching, setGlitching] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [fps, setFps] = useState(60);
  const videoRef = useRef(null);

  const mission = MISSIONS[activeIdx];
  const isPortrait = mission.aspect === "portrait";

  // Micro FPS jitter for cyber realism
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
    setCurrentTime("0:00");
    setIsPlaying(true);
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
      setCurrentTime(formatTime(curr));
      setDuration(formatTime(dur));
    }
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  return (
    <>
      <div className="section-divider" />
      <section className="gaming-theater-section section-bg-light-cream" style={{ position: "relative" }}>
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
                <span style={{ color: mission.color, fontWeight: 700 }}>{mission.badge}</span>
                <span style={{ color: "var(--text-dim)" }}>
                  [{isPortrait ? "9:16 MOBILE FEED" : "16:9 DESKTOP FEED"}]
                </span>
              </div>
            </div>

            {/* Mission Switcher Tabs */}
            <div
              style={{
                display: "flex",
                gap: "0.6rem",
                padding: "1rem 0 1.5rem",
                overflowX: "auto",
                maxWidth: "100%",
                width: "100%",
                boxSizing: "border-box",
                scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch",
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
                      background: isActive ? "rgba(72, 229, 255, 0.18)" : "var(--bg-surface)",
                      border: `1px solid ${isActive ? m.color : "var(--border)"}`,
                      color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
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

            {/* ADAPTIVE LAYOUT: Two-Column Cockpit for Portrait, Cinema Terminal for Landscape */}
            <div
              className={isPortrait ? "theater-portrait-cockpit" : "theater-landscape-cockpit"}
              style={{
                display: "grid",
                gridTemplateColumns: isPortrait ? "minmax(280px, 340px) 1fr" : "1fr",
                gap: "2rem",
                alignItems: "start",
              }}
            >
              {/* VIDEO RIG WRAPPER */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Visual Ambient Glow behind device */}
                <div
                  style={{
                    position: "absolute",
                    inset: isPortrait ? "10px" : "0",
                    background: `radial-gradient(circle at center, ${mission.color}25 0%, transparent 70%)`,
                    filter: "blur(40px)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                {isPortrait ? (
                  /* CYBER SMARTPHONE RIG (Fits 9:16 portrait video edge-to-edge without side black bars!) */
                  <div
                    className="gaming-phone-rig"
                    style={{
                      position: "relative",
                      zIndex: 1,
                      width: "100%",
                      maxWidth: "340px",
                      aspectRatio: "9 / 18",
                      borderRadius: "32px",
                      padding: "8px",
                      background: "linear-gradient(145deg, rgba(25, 30, 48, 0.95), rgba(7, 10, 18, 0.98))",
                      border: `2px solid ${mission.color}55`,
                      boxShadow: `0 0 35px ${mission.color}25, 0 25px 60px rgba(0,0,0,0.8), inset 0 0 12px rgba(255,255,255,0.06)`,
                    }}
                  >
                    {/* Top Phone Camera / Speaker Notch */}
                    <div
                      style={{
                        position: "absolute",
                        top: "14px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "80px",
                        height: "16px",
                        borderRadius: "10px",
                        background: "#020408",
                        border: "1px solid rgba(255,255,255,0.08)",
                        zIndex: 6,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                      }}
                    >
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1a1a24" }} />
                      <div style={{ width: "28px", height: "3px", borderRadius: "2px", background: "#1a1a24" }} />
                    </div>

                    {/* Phone Screen Viewport */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        borderRadius: "24px",
                        overflow: "hidden",
                        background: "#010204",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* CRT Scanline Sweeper Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.22) 50%)",
                          backgroundSize: "100% 4px",
                          pointerEvents: "none",
                          zIndex: 3,
                          opacity: 0.5,
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
                            background: "rgba(72, 229, 255, 0.2)",
                            mixBlendMode: "difference",
                            zIndex: 5,
                            pointerEvents: "none",
                          }}
                        />
                      )}

                      {/* Video Element (Fills the phone chassis without side black pillarbox void) */}
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
                          objectFit: "cover",
                          display: "block",
                          filter: glitching ? "hue-rotate(90deg) contrast(150%)" : "none",
                          transition: "filter 0.2s ease",
                        }}
                      />

                      {/* Center Play/Pause Indicator on click */}
                      <div
                        onClick={togglePlay}
                        style={{
                          position: "absolute",
                          inset: 0,
                          cursor: "pointer",
                          zIndex: 4,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {!isPlaying && (
                          <div
                            style={{
                              width: "56px",
                              height: "56px",
                              borderRadius: "50%",
                              background: "rgba(0,0,0,0.65)",
                              backdropFilter: "blur(6px)",
                              border: `2px solid ${mission.color}`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: mission.color,
                              fontSize: "1.4rem",
                              boxShadow: `0 0 25px ${mission.color}55`,
                            }}
                          >
                            ▶
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* LANDSCAPE WIDESCREEN CINEMA TERMINAL (For 16:9 desktop recordings) */
                  <div
                    className="gaming-video-screen-wrap"
                    style={{
                      position: "relative",
                      zIndex: 1,
                      width: "100%",
                      borderRadius: "8px",
                      overflow: "hidden",
                      border: `1px solid ${mission.color}66`,
                      boxShadow: `0 0 35px ${mission.color}22`,
                      backgroundColor: "#020408",
                      aspectRatio: "16 / 9",
                      maxHeight: "520px",
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
                        objectFit: "contain",
                        display: "block",
                        filter: glitching ? "hue-rotate(90deg) contrast(150%)" : "none",
                        transition: "filter 0.2s ease",
                      }}
                    />

                    {/* Play/Pause overlay */}
                    <div
                      onClick={togglePlay}
                      style={{
                        position: "absolute",
                        inset: 0,
                        cursor: "pointer",
                        zIndex: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {!isPlaying && (
                        <div
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            background: "rgba(0,0,0,0.7)",
                            border: `2px solid ${mission.color}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: mission.color,
                            fontSize: "1.5rem",
                          }}
                        >
                          ▶
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* COCKPIT TELEMETRY & COMMAND STATION (Takes right column in portrait, bottom in landscape) */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.2rem",
                  width: "100%",
                }}
              >
                {/* Mission Header Card */}
                <div
                  style={{
                    background: "rgba(10, 14, 26, 0.7)",
                    borderRadius: "10px",
                    border: "1px solid rgba(72, 229, 255, 0.15)",
                    padding: "1.2rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      marginBottom: "0.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: mission.color,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {mission.badge}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: "#34d399",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        background: "rgba(16, 185, 129, 0.12)",
                        border: "1px solid rgba(16, 185, 129, 0.3)",
                        padding: "0.2rem 0.55rem",
                        borderRadius: "4px",
                      }}
                    >
                      ● 100% PRODUCTION RUNTIME
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {mission.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--cyan)",
                      margin: 0,
                    }}
                  >
                    {mission.sub}
                  </p>
                </div>

                {/* Live Telemetry HUD Metrics (4 Cards) */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                    gap: "0.8rem",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(8, 12, 22, 0.8)",
                      border: "1px solid rgba(72, 229, 255, 0.2)",
                      borderRadius: "8px",
                      padding: "0.8rem 1rem",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      NETWORK LATENCY
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--cyan)", fontFamily: "var(--font-display)" }}>
                      {mission.latency}
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(8, 12, 22, 0.8)",
                      border: "1px solid rgba(72, 229, 255, 0.2)",
                      borderRadius: "8px",
                      padding: "0.8rem 1rem",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      CONCURRENCY LOAD
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                      {mission.concurrency}
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(8, 12, 22, 0.8)",
                      border: "1px solid rgba(72, 229, 255, 0.2)",
                      borderRadius: "8px",
                      padding: "0.8rem 1rem",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      SECURITY PROTOCOL
                    </div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#34d399", fontFamily: "var(--font-mono)", marginTop: "0.2rem" }}>
                      {mission.security}
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(8, 12, 22, 0.8)",
                      border: "1px solid rgba(72, 229, 255, 0.2)",
                      borderRadius: "8px",
                      padding: "0.8rem 1rem",
                    }}
                  >
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                      FRAME SYNCHRONY
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: mission.color, fontFamily: "var(--font-display)" }}>
                      {fps} FPS
                    </div>
                  </div>
                </div>

                {/* Key Architecture Highlights */}
                {mission.highlights && (
                  <div
                    style={{
                      background: "rgba(8, 12, 22, 0.6)",
                      border: "1px solid rgba(72, 229, 255, 0.12)",
                      borderRadius: "8px",
                      padding: "0.9rem 1.2rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "0.6rem",
                      }}
                    >
                      // Architecture Highlights
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                      {mission.highlights.map((h, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            fontSize: "0.82rem",
                            color: "var(--text-secondary)",
                          }}
                        >
                          <span style={{ color: mission.color, fontSize: "0.7rem" }}>◆</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mission Intel Narrative */}
                <div
                  style={{
                    padding: "0.9rem 1.2rem",
                    background: "rgba(7, 10, 18, 0.75)",
                    borderRadius: "8px",
                    border: "1px solid rgba(72, 229, 255, 0.12)",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: mission.color, fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                    // MISSION INTEL:{" "}
                  </span>
                  {mission.details}
                </div>

                {/* Video Playback Controls & Scrubber */}
                <div
                  style={{
                    background: "rgba(10, 14, 26, 0.8)",
                    border: "1px solid rgba(72, 229, 255, 0.2)",
                    borderRadius: "10px",
                    padding: "1rem 1.2rem",
                  }}
                >
                  {/* Progress Scrubber */}
                  <div
                    onClick={handleSeek}
                    style={{
                      height: "6px",
                      background: "rgba(255, 255, 255, 0.1)",
                      cursor: "pointer",
                      position: "relative",
                      borderRadius: "3px",
                      overflow: "hidden",
                      marginBottom: "0.8rem",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${progress}%`,
                        background: `linear-gradient(90deg, ${mission.color}, #ffffff)`,
                        boxShadow: `0 0 10px ${mission.color}`,
                        transition: "width 0.1s linear",
                      }}
                    />
                  </div>

                  {/* Buttons & Time row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.8rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <button
                        onClick={togglePlay}
                        style={{
                          background: "rgba(72, 229, 255, 0.12)",
                          border: "1px solid rgba(72, 229, 255, 0.35)",
                          color: "var(--cyan)",
                          borderRadius: "6px",
                          padding: "0.45rem 0.95rem",
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
                          background: "rgba(72, 229, 255, 0.12)",
                          border: "1px solid rgba(72, 229, 255, 0.35)",
                          color: "var(--cyan)",
                          borderRadius: "6px",
                          padding: "0.45rem 0.85rem",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.78rem",
                          cursor: "pointer",
                        }}
                      >
                        {isMuted ? "🔇 UNMUTE" : "🔊 MUTED"}
                      </button>

                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", marginLeft: "0.4rem" }}>
                        {currentTime} / {duration}
                      </span>
                    </div>

                    {/* Direct CTAs */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      {mission.liveUrl && (
                        <a
                          href={mission.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-cyber-primary"
                          style={{
                            padding: "0.45rem 0.95rem",
                            fontSize: "0.76rem",
                            textDecoration: "none",
                          }}
                        >
                          <span>{mission.liveLabel} ↗</span>
                        </a>
                      )}
                      <Link
                        to="/work"
                        className="btn-cyber-secondary"
                        style={{
                          padding: "0.45rem 0.95rem",
                          fontSize: "0.76rem",
                          textDecoration: "none",
                        }}
                      >
                        <span>Project Universe →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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
          @media (max-width: 960px) {
            .theater-portrait-cockpit {
              grid-template-columns: 1fr !important;
              justify-items: center;
            }
          }
        `}</style>
      </section>
    </>
  );
}
