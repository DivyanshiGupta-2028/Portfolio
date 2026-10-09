import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import GamingVideoTheater from "../components/GamingVideoTheater";
import EngineeringIdentity from "../components/EngineeringIdentity";
import Achievements from "../components/Achievements";
import { cyberAudio } from "../utils/cyberAudio";

export default function Home() {
  return (
    <main style={{ position: "relative", overflowX: "hidden" }}>
      {/* 01. Hero with 3D Atom Core & Gaming Telemetry */}
      <Hero />

      {/* 02. Gaming Video Holo-Theater (Real Screen Recordings with CRT Scanlines) */}
      <GamingVideoTheater />

      {/* 03. Engineering Identity & Capabilities */}
      <EngineeringIdentity />

      {/* 04. Verified Achievements (40% & 35% Benchmark Highlights) */}
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
              EXPLORE THE <span className="gradient-cyan-purple">FULL ARCHITECTURE.</span>
            </h2>
            <p className="section-subtitle">
              Dive into dedicated deep-dive sections showcasing production case studies, system architecture diagrams, experience telemetry, and formal credentials.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.8rem",
            }}
          >
            {/* Portal 1: Projects */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="cyber-panel clipped-corner"
              style={{
                padding: "2.2rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "linear-gradient(135deg, rgba(72, 229, 255, 0.05) 0%, rgba(12, 18, 34, 0.85) 100%)",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--cyan)", marginBottom: "0.6rem" }}>
                  PORTAL // 01
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                  Projects Universe
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  7 complete production applications: License SaaS (40% gain), Dating Platform with video demos, Sales Inventory, BellezBuy, and WellMove.
                </p>
              </div>

              <Link
                to="/work"
                onClick={() => cyberAudio.playLaser()}
                className="btn-cyber-primary"
                style={{ textDecoration: "none", width: "100%", justifyContent: "center" }}
              >
                OPEN PROJECTS UNIVERSE →
              </Link>
            </motion.div>

            {/* Portal 2: Engineering Lab */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="cyber-panel clipped-corner"
              style={{
                padding: "2.2rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "linear-gradient(135deg, rgba(139, 92, 255, 0.05) 0%, rgba(12, 18, 34, 0.85) 100%)",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--purple)", marginBottom: "0.6rem" }}>
                  PORTAL // 02
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                  Engineering Lab
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  Interactive system architecture diagrams: API request lifecycles, JWT/OAuth2 flows, multi-tenant partitioning, and AI telemetry pipelines.
                </p>
              </div>

              <Link
                to="/lab"
                onClick={() => cyberAudio.playLaser()}
                className="btn-cyber-secondary"
                style={{ textDecoration: "none", width: "100%", justifyContent: "center" }}
              >
                LAUNCH ENGINEERING LAB →
              </Link>
            </motion.div>

            {/* Portal 3: Experience & Constellation */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="cyber-panel clipped-corner"
              style={{
                padding: "2.2rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "linear-gradient(135deg, rgba(72, 229, 255, 0.05) 0%, rgba(12, 18, 34, 0.85) 100%)",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--cyan)", marginBottom: "0.6rem" }}>
                  PORTAL // 03
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                  Experience & Skills
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  Career timeline at Sanskriti IT Solutions, verified 40% & 35% improvements, and the interactive technology constellation graph.
                </p>
              </div>

              <Link
                to="/experience"
                onClick={() => cyberAudio.playLaser()}
                className="btn-cyber-primary"
                style={{ textDecoration: "none", width: "100%", justifyContent: "center" }}
              >
                VIEW EXPERIENCE →
              </Link>
            </motion.div>

            {/* Portal 4: About & Workstation */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="cyber-panel clipped-corner"
              style={{
                padding: "2.2rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "linear-gradient(135deg, rgba(139, 92, 255, 0.05) 0%, rgba(12, 18, 34, 0.85) 100%)",
              }}
            >
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--purple)", marginBottom: "0.6rem" }}>
                  PORTAL // 04
                </div>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.5rem" }}>
                  About & 3D Workstation
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                  Interactive 3D isometric workstation rig, personal engineering narrative, B.Tech education, and Microsoft cloud certifications.
                </p>
              </div>

              <Link
                to="/about"
                onClick={() => cyberAudio.playLaser()}
                className="btn-cyber-secondary"
                style={{ textDecoration: "none", width: "100%", justifyContent: "center" }}
              >
                MEET THE ENGINEER →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
