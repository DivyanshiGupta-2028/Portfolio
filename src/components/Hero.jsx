import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero3DCanvas from "./Hero3DCanvas";
import { cyberAudio } from "../utils/cyberAudio";

const TECH_MARQUEE = [
  "ASP.NET Core", ".NET 7+", "C#", "SQL Server", "React", "Angular",
  "Node.js", "Express.js", "FastAPI", "Python", "JWT", "OAuth2",
  "Azure DevOps", "AZ-900", "REST APIs", "RBAC", "Microservices", "MySQL"
];

export default function Hero() {
  const [glitchActive, setGlitchActive] = useState(false);

  // Periodic glitch on the name
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 350);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "90px",
        paddingBottom: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Deep atmospheric depth glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "-5%",
          left: "-8%",
          width: "680px",
          height: "680px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(72, 229, 255, 0.10) 0%, rgba(72,229,255,0.03) 40%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          animation: "levitate 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-10%",
          width: "750px",
          height: "750px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 255, 0.10) 0%, rgba(139,92,255,0.03) 40%, transparent 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          animation: "levitate 10s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "35%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217, 70, 239, 0.06) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div className="section-container" style={{ paddingBottom: 0 }}>
        {/* Top Gamer System Telemetry Strip */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.55rem 1.2rem",
            borderRadius: "10px",
            background: "rgba(12, 18, 34, 0.7)",
            border: "1px solid rgba(72, 229, 255, 0.14)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
            gap: "0.5rem",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--cyan)",
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  width: "7px", height: "7px", borderRadius: "50%",
                  background: "var(--cyan)", boxShadow: "0 0 10px var(--cyan)",
                }}
                className="cyber-pulse"
              />
              GAME LOBBY // RANK: SENIOR FULL-STACK
            </span>
            <span>|</span>
            <span style={{ color: "#34d399" }}>SYSTEM INTEGRITY: 100%</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
            <span>REGION: ASIA-SOUTH // NOIDA, INDIA</span>
            <span style={{ color: "var(--purple)" }}>ENGINE: .NET 7+ · THREE.JS · REACT</span>
          </div>
        </motion.div>

        {/* Main Hero Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: Identity */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                letterSpacing: "0.15em",
                color: "var(--cyan)",
                background: "rgba(72, 229, 255, 0.07)",
                border: "1px solid rgba(72, 229, 255, 0.25)",
                padding: "0.42rem 1.1rem",
                borderRadius: "999px",
                marginBottom: "1.3rem",
              }}
            >
              <span
                style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)",
                }}
                className="cyber-pulse"
              />
              FULL-STACK SOFTWARE ENGINEER // INDIA
            </motion.div>

            {/* Main Headline with Glitch */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 4.8vw, 4.4rem)",
                fontWeight: 800,
                lineHeight: 1.07,
                letterSpacing: "-0.03em",
                marginBottom: "1.5rem",
              }}
            >
              I BUILD THE{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--cyan) 0%, #20b4d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 28px rgba(72, 229, 255, 0.4))",
                  display: "inline-block",
                  ...(glitchActive ? {
                    animation: "glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
                  } : {}),
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
                  filter: "drop-shadow(0 0 28px rgba(139, 92, 255, 0.4))",
                }}
              >
                DIGITAL EXPERIENCES.
              </span>
            </h1>

            {/* Pitch */}
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
                lineHeight: 1.8,
                maxWidth: "560px",
                marginBottom: "2.5rem",
              }}
            >
              Nearly 3 years building secure APIs, enterprise applications, full-stack products, and AI-integrated backend systems at Sanskriti IT Solutions — delivering{" "}
              <span style={{ color: "var(--cyan)", fontWeight: 600 }}>40% efficiency gains</span> and{" "}
              <span style={{ color: "var(--purple)", fontWeight: 600 }}>sub-45ms latency</span>.
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "1.1rem",
                flexWrap: "wrap",
                marginBottom: "3rem",
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
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <span>SYSTEM LAB</span>
                <span>↗</span>
              </Link>
            </div>

            {/* Social/contact strip */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/divyanshi-gupta-dev", icon: "🔗" },
                { label: "GitHub", href: "https://github.com/divyanshi-gupta", icon: "⌨️" },
                { label: "Email", href: "mailto:divyanshigupta2028@gmail.com", icon: "📡" },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    padding: "0.35rem 0.8rem",
                    border: "1px solid rgba(72,229,255,0.14)",
                    borderRadius: "999px",
                    background: "rgba(12,18,34,0.5)",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.2s ease",
                    letterSpacing: "0.05em",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "var(--cyan)";
                    e.currentTarget.style.borderColor = "rgba(72,229,255,0.4)";
                    e.currentTarget.style.background = "rgba(72,229,255,0.08)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.borderColor = "rgba(72,229,255,0.14)";
                    e.currentTarget.style.background = "rgba(12,18,34,0.5)";
                  }}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: 3D Atom Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ width: "100%", position: "relative" }}
          >
            <Hero3DCanvas />
          </motion.div>
        </div>

        {/* Capability Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            marginTop: "2.5rem",
            padding: "1.4rem 2rem",
            background: "rgba(12, 18, 34, 0.65)",
            border: "1px solid rgba(72, 229, 255, 0.14)",
            backdropFilter: "blur(16px)",
            borderRadius: "14px",
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
                borderLeft: "2px solid rgba(72, 229, 255, 0.28)",
                paddingLeft: "1rem",
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--cyan)", letterSpacing: "0.15em" }}>
                [{item.tag}]
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.95rem", color: "#ffffff" }}>
                {item.title}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                {item.desc}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scrolling Tech Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            marginTop: "2rem",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "80px",
              background: "linear-gradient(to right, var(--bg) 0%, transparent 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "80px",
              background: "linear-gradient(to left, var(--bg) 0%, transparent 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            className="tech-marquee-track"
            style={{
              display: "flex",
              gap: "0.75rem",
              width: "max-content",
              animation: "marqueeScroll 30s linear infinite",
            }}
          >
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
              <span
                key={i}
                className="tech-badge"
                style={{ whiteSpace: "nowrap", flexShrink: 0 }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
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
