import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import GamingVideoTheater from "../components/GamingVideoTheater";
import EngineeringIdentity from "../components/EngineeringIdentity";
import Achievements from "../components/Achievements";
import { cyberAudio } from "../utils/cyberAudio";

const PORTALS = [
  {
    num: "01",
    to: "/work",
    label: "Projects Universe",
    eyebrow: "PORTAL_01",
    desc: "7 complete production applications: License SaaS (40% gain), Dating Platform with live recordings, BellezBuy e-commerce, WellMove AI system.",
    cta: "OPEN PROJECTS UNIVERSE",
    accent: "var(--cyan)",
    accentRgb: "72,229,255",
    bg: "linear-gradient(135deg, rgba(72,229,255,0.06) 0%, rgba(12,18,34,0.9) 100%)",
    icon: "⚡",
    stats: ["7 Products", "40% Gain", "3 Live Demos"],
    btnClass: "btn-cyber-primary",
  },
  {
    num: "02",
    to: "/lab",
    label: "Engineering Lab",
    eyebrow: "PORTAL_02",
    desc: "Interactive system architecture diagrams: API request lifecycles, JWT/OAuth2 flows, multi-tenant RBAC partitioning, and AI telemetry pipelines.",
    cta: "LAUNCH ENGINEERING LAB",
    accent: "var(--purple)",
    accentRgb: "139,92,255",
    bg: "linear-gradient(135deg, rgba(139,92,255,0.06) 0%, rgba(12,18,34,0.9) 100%)",
    icon: "🔬",
    stats: ["4 Diagrams", "JWT Flow", "AI Pipeline"],
    btnClass: "btn-cyber-secondary",
  },
  {
    num: "03",
    to: "/experience",
    label: "Experience & Skills",
    eyebrow: "PORTAL_03",
    desc: "Career timeline at Sanskriti IT Solutions, verified 40% & 35% benchmark improvements, and interactive technology constellation graph.",
    cta: "VIEW EXPERIENCE",
    accent: "var(--cyan)",
    accentRgb: "72,229,255",
    bg: "linear-gradient(135deg, rgba(72,229,255,0.06) 0%, rgba(12,18,34,0.9) 100%)",
    icon: "📡",
    stats: ["3 Yrs XP", "AZ-900", "RBAC Expert"],
    btnClass: "btn-cyber-primary",
  },
  {
    num: "04",
    to: "/about",
    label: "About & 3D Workstation",
    eyebrow: "PORTAL_04",
    desc: "Interactive 3D isometric workstation rig, engineering narrative, B.Tech CSE at MIET, and Microsoft Azure & AI certifications.",
    cta: "MEET THE ENGINEER",
    accent: "var(--purple)",
    accentRgb: "139,92,255",
    bg: "linear-gradient(135deg, rgba(139,92,255,0.06) 0%, rgba(12,18,34,0.9) 100%)",
    icon: "🖥️",
    stats: ["3D Workstation", "B.Tech MIET", "AZ-900 & AI-900"],
    btnClass: "btn-cyber-secondary",
  },
];

export default function Home() {
  const [hoveredPortal, setHoveredPortal] = useState(null);

  return (
    <main style={{ position: "relative", overflowX: "hidden" }}>
      {/* 01. Hero with 3D Atom Core & Gaming Telemetry */}
      <Hero />

      {/* 02. Gaming Video Holo-Theater */}
      <GamingVideoTheater />

      {/* 03. Engineering Identity & Capabilities */}
      <EngineeringIdentity />

      {/* 04. Verified Achievements */}
      <Achievements />

      {/* 05. Multi-Page Exploration Portals (Command Grid) */}
      <section style={{ position: "relative" }}>
        <div className="section-container">
          <div className="section-header">
            <div className="section-eyebrow">
              <span className="dot" />
              SYSTEM PORTALS // EXPLORE REALM
            </div>
            <h2 className="section-title">
              EXPLORE THE{" "}
              <span className="gradient-cyan-purple">FULL ARCHITECTURE.</span>
            </h2>
            <p className="section-subtitle">
              Dive into dedicated deep-dive sections showcasing production case studies, system architecture diagrams, experience telemetry, and formal credentials.
            </p>
          </div>

          {/* Portal Grid — 2x2 gaming mission selection */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {PORTALS.map((portal, idx) => {
              const isHovered = hoveredPortal === portal.num;
              return (
                <motion.div
                  key={portal.num}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onMouseEnter={() => {
                    cyberAudio.playHover();
                    setHoveredPortal(portal.num);
                  }}
                  onMouseLeave={() => setHoveredPortal(null)}
                  style={{
                    background: portal.bg,
                    border: `1px solid ${isHovered ? portal.accent : `rgba(${portal.accentRgb},0.18)`}`,
                    borderRadius: "16px",
                    padding: "2.4rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backdropFilter: "blur(18px)",
                    boxShadow: isHovered
                      ? `0 0 45px rgba(${portal.accentRgb},0.22), 0 25px 60px rgba(0,0,0,0.7)`
                      : "0 15px 40px rgba(0,0,0,0.55)",
                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                    transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                    clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px))",
                    position: "relative",
                    cursor: "pointer",
                    minHeight: "320px",
                  }}
                >
                  {/* Animated corner accent on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "2px",
                          background: `linear-gradient(90deg, transparent, ${portal.accent}, transparent)`,
                          transformOrigin: "left",
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Card top row */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "1.2rem",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          letterSpacing: "0.18em",
                          color: portal.accent,
                          opacity: 0.9,
                        }}
                      >
                        {portal.eyebrow}
                      </div>
                      <span
                        style={{
                          fontSize: "1.5rem",
                          filter: isHovered ? `drop-shadow(0 0 10px rgba(${portal.accentRgb},0.8))` : "none",
                          transition: "filter 0.3s ease",
                        }}
                      >
                        {portal.icon}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.45rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginBottom: "0.7rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {portal.label}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.65,
                        marginBottom: "1.4rem",
                      }}
                    >
                      {portal.desc}
                    </p>

                    {/* Mini stat badges */}
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.6rem" }}>
                      {portal.stats.map((s) => (
                        <span
                          key={s}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.68rem",
                            color: portal.accent,
                            background: `rgba(${portal.accentRgb},0.08)`,
                            border: `1px solid rgba(${portal.accentRgb},0.22)`,
                            borderRadius: "999px",
                            padding: "0.25rem 0.65rem",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={portal.to}
                    onClick={() => cyberAudio.playLaser()}
                    className={portal.btnClass}
                    style={{ textDecoration: "none", width: "100%", justifyContent: "center" }}
                  >
                    {portal.cta} →
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              marginTop: "3rem",
              padding: "2rem 2.5rem",
              background: "rgba(12,18,34,0.7)",
              border: "1px solid rgba(72,229,255,0.12)",
              borderRadius: "14px",
              backdropFilter: "blur(16px)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "#10b981",
                  letterSpacing: "0.15em",
                  marginBottom: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#10b981",
                    boxShadow: "0 0 8px #10b981",
                  }}
                  className="cyber-pulse"
                />
                STATUS: OPEN TO OPPORTUNITIES · NOIDA/REMOTE
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                Available for full-time backend engineering, full-stack, or API architecture roles.
              </p>
            </div>
            <Link
              to="/contact"
              onClick={() => cyberAudio.playLaser()}
              className="btn-cyber-primary"
              style={{ textDecoration: "none", whiteSpace: "nowrap" }}
            >
              INITIATE CONTACT →
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
