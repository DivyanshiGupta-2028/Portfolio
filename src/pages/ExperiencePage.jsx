import { motion } from "framer-motion";
import PageHero3D from "../components/PageHero3D";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Achievements from "../components/Achievements";
import TechConstellation from "../components/TechConstellation";

export default function ExperiencePage() {
  return (
    <main style={{ position: "relative", overflowX: "hidden", paddingTop: "80px" }}>

      {/* ── Cinematic 3D Page Hero (Purple accent for Experience) ── */}
      <section
        style={{
          position: "relative",
          minHeight: "380px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <PageHero3D accentColor={0x8b5cff} secondColor={0x48e5ff} height={380} />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(7,10,18,0.88) 0%, rgba(7,10,18,0.45) 65%, transparent 100%)",
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
                color: "var(--purple)",
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
                  background: "var(--purple)",
                  boxShadow: "0 0 12px var(--purple)",
                }}
                className="cyber-pulse"
              />
              CAREER TRAJECTORY & TELEMETRY · SANSKRITI IT SOLUTIONS
            </div>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "1.2rem",
                maxWidth: "720px",
              }}
            >
              EXPERIENCE &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--purple) 0%, var(--cyan) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(139,92,255,0.4))",
                }}
              >
                PROVEN VALUE.
              </span>
            </h1>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                lineHeight: 1.7,
                maxWidth: "580px",
              }}
            >
              Professional engineering history at Sanskriti IT Solutions, verified system gains, and an interactive technology constellation showcasing full-stack depth.
            </p>

            {/* Achievement highlights */}
            <div style={{ display: "flex", gap: "2rem", marginTop: "1.8rem", flexWrap: "wrap" }}>
              {[
                { val: "40%", label: "LICENSE EFFICIENCY GAIN" },
                { val: "35%", label: "CMS LOAD TIME REDUCTION" },
                { val: "3 YRS", label: "ENGINEERING EXPERIENCE" },
                { val: "AZ-900", label: "AZURE CERTIFIED" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "1.6rem",
                      color: "var(--purple)",
                      lineHeight: 1,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements (metrics highlight) */}
      <Achievements />

      {/* Career Timeline */}
      <ExperienceTimeline />

      {/* Technology Constellation */}
      <TechConstellation />
    </main>
  );
}
