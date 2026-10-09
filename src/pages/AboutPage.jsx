import { motion } from "framer-motion";
import PageHero3D from "../components/PageHero3D";
import Workstation3DCanvas from "../components/Workstation3DCanvas";
import AboutSection from "../components/AboutSection";
import EducationCertifications from "../components/EducationCertifications";

export default function AboutPage() {
  return (
    <main style={{ position: "relative", overflowX: "hidden", paddingTop: "80px" }}>

      {/* ── Cinematic 3D Hero ── */}
      <section
        style={{
          position: "relative",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <PageHero3D accentColor={0x38bdf8} secondColor={0x8b5cff} height={400} />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(7,10,18,0.88) 0%, rgba(7,10,18,0.5) 60%, transparent 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "140px",
            background: "linear-gradient(to bottom, transparent 0%, #070A12 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div
          className="section-container"
          style={{ position: "relative", zIndex: 3, paddingBottom: "2rem", paddingTop: "2rem" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "#38bdf8",
                letterSpacing: "0.2em",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#38bdf8",
                  boxShadow: "0 0 12px #38bdf8",
                }}
                className="cyber-pulse"
              />
              ENGINEERING DOSSIER // BIOGRAPHY · DEVELOPER STORY
            </div>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "1.2rem",
                maxWidth: "680px",
              }}
            >
              THE ENGINEER{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #38bdf8 0%, var(--purple) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(56,189,248,0.4))",
                }}
              >
                BEHIND THE CODE.
              </span>
            </h1>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                lineHeight: 1.7,
                maxWidth: "560px",
              }}
            >
              Explore my engineering mindset, problem-solving philosophies, 3D developer workstation, B.Tech education, and Microsoft certifications.
            </p>

            {/* Identity chips */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.8rem", flexWrap: "wrap" }}>
              {["B.Tech CSE · MIET 2024", "AZ-900 & AI-900 Certified", ".NET Specialist", "Backend-First Engineer"].map((chip) => (
                <span
                  key={chip}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "#38bdf8",
                    background: "rgba(56,189,248,0.08)",
                    border: "1px solid rgba(56,189,248,0.3)",
                    borderRadius: "999px",
                    padding: "0.35rem 0.85rem",
                    letterSpacing: "0.06em",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D Developer Workstation */}
      <section style={{ padding: "2rem 1.5rem 1rem", position: "relative" }}>
        <div className="section-container" style={{ paddingBottom: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-header" style={{ textAlign: "left", marginBottom: "1.5rem" }}>
              <div className="section-eyebrow" style={{ display: "inline-flex" }}>
                <span className="dot" />
                ISOMETRIC LAB RIG // 3D DESK ENVIRONMENT
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 700,
                  marginTop: "0.5rem",
                  color: "#ffffff",
                }}
              >
                Developer Workstation & Telemetry Center
              </h2>
            </div>

            <div className="cyber-panel clipped-corner" style={{ padding: "2rem", overflow: "hidden" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                  }}
                >
                  INTERACTIVE 3D · MOUSE PARALLAX
                </span>
              </div>
              <Workstation3DCanvas />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Narrative & Dossier */}
      <AboutSection />

      {/* Education & Certifications */}
      <EducationCertifications />
    </main>
  );
}
