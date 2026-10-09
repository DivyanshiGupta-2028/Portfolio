import { motion } from "framer-motion";
import PageHero3D from "../components/PageHero3D";
import EngineeringLab from "../components/EngineeringLab";

export default function EngineeringLabPage() {
  return (
    <main style={{ position: "relative", overflowX: "hidden", paddingTop: "80px" }}>

      {/* ── Cinematic 3D Page Hero ── */}
      <section
        style={{
          position: "relative",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <PageHero3D accentColor={0x10b981} secondColor={0x48e5ff} height={400} />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(7,10,18,0.9) 0%, rgba(7,10,18,0.55) 65%, transparent 100%)",
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
                color: "#10b981",
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
                  background: "#10b981",
                  boxShadow: "0 0 12px #10b981",
                }}
                className="cyber-pulse"
              />
              SYSTEM LABORATORY // ARCHITECTURE INTERNALS
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
              THE ENGINEERING{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #10b981 0%, var(--cyan) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(16,185,129,0.4))",
                }}
              >
                LABORATORY.
              </span>
            </h1>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              Inspect how the systems work beneath the hood: interactive lifecycle traces, JWT/OAuth2 security flows, multi-tenant partitioning diagrams, and AI data pipelines.
            </p>

            {/* System stats */}
            <div style={{ display: "flex", gap: "2rem", marginTop: "1.8rem", flexWrap: "wrap" }}>
              {[
                { val: "4", label: "ARCHITECTURE DIAGRAMS" },
                { val: "JWT", label: "AUTH FLOW VISUALIZED" },
                { val: "RBAC", label: "MULTI-TENANT SECURITY" },
                { val: "FastAPI", label: "AI PIPELINE" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "1.6rem",
                      color: "#10b981",
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

      {/* Interactive Visualizers */}
      <EngineeringLab />
    </main>
  );
}
