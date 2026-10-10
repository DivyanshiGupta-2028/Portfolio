import { motion } from "framer-motion";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Achievements from "../components/Achievements";
import TechConstellation from "../components/TechConstellation";

const METRICS = [
  { val: "40%", label: "LICENSE EFFICIENCY GAIN", color: "var(--cyan)" },
  { val: "35%", label: "CMS LOAD REDUCTION", color: "var(--purple)" },
  { val: "3 YRS", label: "ENGINEERING EXPERIENCE", color: "#10b981" },
  { val: "AZ-900", label: "AZURE CERTIFIED", color: "#f59e0b" },
];

export default function ExperiencePage() {
  return (
    <main style={{ position: "relative", overflowX: "hidden", paddingTop: "80px" }}>

      {/* ── Product.inc style hero ── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-10%", right: "0",
          width: "700px", height: "700px",
          background: "radial-gradient(ellipse, rgba(139,92,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "5rem 1.75rem 3rem" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.16em", marginBottom: "1.5rem" }}>
              // EXPERIENCE · SANSKRITI IT SOLUTIONS
            </div>

            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1.0,
              letterSpacing: "-0.045em", marginBottom: "1.5rem", maxWidth: "900px"
            }}>
              Experience &{" "}
              <span style={{ background: "linear-gradient(135deg, var(--purple) 0%, var(--cyan) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                proven value.
              </span>
            </h1>

            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "520px" }}>
              3 years building enterprise systems at Sanskriti IT Solutions. Verified 40% and 35% benchmark improvements, AZ-900 Azure certified, and a full-stack tech constellation spanning 20+ technologies.
            </p>
          </motion.div>
        </div>

        {/* Metrics band */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "2.5rem 1.75rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem" }}>
            {METRICS.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} className="pi-stat-block">
                <div className="pi-stat-value" style={{ background: `linear-gradient(135deg, ${m.color}, var(--cyan))`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{m.val}</div>
                <div className="pi-stat-label">{m.label}</div>
              </motion.div>
            ))}
          </div>
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
