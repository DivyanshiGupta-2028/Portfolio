import { motion } from "framer-motion";
import PageHero3D from "../components/PageHero3D";
import GamingVideoTheater from "../components/GamingVideoTheater";
import ProjectsUniverse from "../components/ProjectsUniverse";

export default function WorkPage() {
  return (
    <main style={{ position: "relative", overflowX: "hidden", paddingTop: "80px" }}>

      {/* ── Cinematic 3D Page Hero ── */}
      <section
        style={{
          position: "relative",
          minHeight: "360px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* 3D Crystalline background canvas */}
        <PageHero3D accentColor={0x48e5ff} secondColor={0x8b5cff} height={360} />

        {/* Gradient overlay for text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(7,10,18,0.85) 0%, rgba(7,10,18,0.4) 60%, transparent 100%)",
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
            height: "120px",
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
            {/* System label */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--cyan)",
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
                  background: "var(--cyan)",
                  boxShadow: "0 0 12px var(--cyan)",
                }}
                className="cyber-pulse"
              />
              PORTFOLIO // MISSION ARCHIVES · 7 PRODUCTIONS
            </div>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "1.2rem",
                maxWidth: "700px",
              }}
            >
              PRODUCTION SYSTEMS &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(72,229,255,0.4))",
                }}
              >
                FEATURED PROJECTS.
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
              Comprehensive architectural case studies, live screen recordings, and benchmarked metrics from enterprise backends to consumer platforms.
            </p>

            {/* Quick stats row */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "1.8rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { val: "7", label: "SHIPPED PRODUCTS" },
                { val: "40%", label: "PERF GAIN" },
                { val: "3", label: "LIVE RECORDINGS" },
                { val: "Sub-45ms", label: "API LATENCY" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "1.6rem",
                      color: "var(--cyan)",
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

      {/* Gaming Video Holo-Theater */}
      <GamingVideoTheater />

      {/* All 7 Projects */}
      <ProjectsUniverse />
    </main>
  );
}
