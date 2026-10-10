import { motion } from "framer-motion";
import PageHero3D from "../components/PageHero3D";
import Workstation3DCanvas from "../components/Workstation3DCanvas";
import AboutSection from "../components/AboutSection";
import EducationCertifications from "../components/EducationCertifications";

const IDENTITY_CHIPS = [
  { label: "B.Tech CSE · MIET 2024", color: "#38bdf8" },
  { label: "AZ-900 & AI-900 Certified", color: "#10b981" },
  { label: ".NET Specialist", color: "var(--cyan)" },
  { label: "Backend-First Engineer", color: "var(--purple)" },
];

export default function AboutPage() {
  return (
    <main style={{ position: "relative", overflowX: "hidden", paddingTop: "80px" }}>

      {/* ── product.inc style hero — large editorial text ── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "-10%", right: "-5%",
          width: "600px", height: "600px",
          background: "radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "5rem 1.75rem 3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "start" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.16em", marginBottom: "1.5rem" }}>
                // ABOUT
              </div>

              <h1 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1.0,
                letterSpacing: "-0.045em", marginBottom: "1.5rem", maxWidth: "860px"
              }}>
                The engineer{" "}
                <span style={{ background: "linear-gradient(135deg, #38bdf8 0%, var(--purple) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  behind the code.
                </span>
              </h1>

              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "520px", marginBottom: "2rem" }}>
                Full-stack engineer with 3 years building enterprise SaaS backends, AI-integrated platforms, and consumer mobile apps. Specialist in .NET, ASP.NET Core, React, and multi-tenant architectures.
              </p>

              {/* Identity chips — product.inc flat tags */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {IDENTITY_CHIPS.map(chip => (
                  <span
                    key={chip.label}
                    className="pi-tag"
                    style={{ color: chip.color, borderColor: `${chip.color}40` }}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="pi-divider-cyan" style={{ margin: "0 1.75rem" }} />
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
