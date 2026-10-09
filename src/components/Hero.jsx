import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero3DCanvas from "./Hero3DCanvas";
import { cyberAudio } from "../utils/cyberAudio";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "90px",
        paddingBottom: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Holographic Depth Circles */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(72, 229, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ paddingBottom: 0 }}>
        {/* Top Gamer System Telemetry Strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            background: "rgba(12, 18, 34, 0.6)",
            border: "1px solid rgba(72, 229, 255, 0.15)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
            marginBottom: "2rem",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <span style={{ color: "var(--cyan)", fontWeight: 700 }}>[GAME LOBBY // RANK: SENIOR FULL-STACK]</span>
            <span>|</span>
            <span style={{ color: "#34d399" }}>SYSTEM INTEGRITY: 100%</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span>REGION: ASIA-SOUTH // NOIDA</span>
            <span style={{ color: "var(--purple)" }}>ENGINE: .NET 7+ · THREE.JS · REACT</span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: Identity, Headline, Pitch & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow with Gaming Rank */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                color: "var(--cyan)",
                background: "rgba(72, 229, 255, 0.08)",
                border: "1px solid rgba(72, 229, 255, 0.25)",
                padding: "0.4rem 1rem",
                borderRadius: "999px",
                marginBottom: "1.2rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--cyan)",
                  boxShadow: "0 0 8px var(--cyan)",
                }}
                className="cyber-pulse"
              />
              FULL-STACK SOFTWARE ENGINEER // INDIA
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(2.4rem, 4.6vw, 4.1rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: "1.4rem",
              }}
            >
              I BUILD THE{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--cyan) 0%, #20b4d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 25px rgba(72, 229, 255, 0.35))",
                }}
              >
                SYSTEMS
              </span>{" "}
              BEHIND GREAT{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--purple) 0%, #c084fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 25px rgba(139, 92, 255, 0.35))",
                }}
              >
                DIGITAL EXPERIENCES.
              </span>
            </h1>

            {/* Supporting Pitch */}
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                lineHeight: 1.75,
                maxWidth: "560px",
                marginBottom: "2.2rem",
              }}
            >
              Nearly 3 years of combined internship and professional experience building secure APIs, enterprise applications, full-stack products, and AI-integrated backend systems.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "1.1rem",
                flexWrap: "wrap",
                marginBottom: "2.8rem",
              }}
            >
              <Link
                to="/work"
                onClick={() => cyberAudio.playLaser()}
                className="btn-cyber-primary clipped-corner"
                style={{ textDecoration: "none" }}
              >
                <span>EXPLORE MISSIONS</span>
                <span style={{ fontSize: "1.1rem" }}>→</span>
              </Link>

              <a
                href="/divyanshi-gupta-resume.pdf"
                download="divyanshi-gupta-resume.pdf"
                className="btn-cyber-secondary clipped-corner"
                onClick={() => cyberAudio.playSuccess()}
              >
                <span>DOWNLOAD RESUME</span>
                <span>↓</span>
              </a>

              <Link
                to="/lab"
                onClick={() => cyberAudio.playTargetLock()}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.8rem 1rem",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <span>SYSTEM LAB</span>
                <span>↗</span>
              </Link>
            </div>
          </motion.div>

          {/* Right: Atom 3D Centerpiece */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "100%", position: "relative" }}
          >
            <Hero3DCanvas />
          </motion.div>
        </div>

        {/* Compact Hero Metadata Strip with Gaming Telemetry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: "2rem",
            padding: "1.2rem 1.6rem",
            background: "rgba(12, 18, 34, 0.6)",
            border: "1px solid rgba(72, 229, 255, 0.15)",
            backdropFilter: "blur(12px)",
            borderRadius: "12px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
          className="hero-meta-strip"
        >
          {[
            { tag: "SKILL_01", title: "Backend Engineering", desc: "ASP.NET Core · C# · APIs · Microservices" },
            { tag: "SKILL_02", title: "Data & Architecture", desc: "SQL Server · RBAC · Multi-Tenancy" },
            { tag: "SKILL_03", title: "Full-Stack Development", desc: "React · Angular · Node.js · Express" },
            { tag: "SKILL_04", title: "AI-Integrated Systems", desc: "FastAPI · Python · Health Telemetry" },
          ].map((item) => (
            <div
              key={item.tag}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.2rem",
                borderLeft: "2px solid rgba(72, 229, 255, 0.3)",
                paddingLeft: "0.9rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--cyan)",
                  letterSpacing: "0.15em",
                }}
              >
                [{item.tag}]
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#ffffff",
                }}
              >
                {item.title}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {item.desc}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-meta-strip {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .hero-meta-strip {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
