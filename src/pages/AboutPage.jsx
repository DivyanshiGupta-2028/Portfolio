import { motion } from "framer-motion";
import Workstation3DCanvas from "../components/Workstation3DCanvas";
import AboutSection from "../components/AboutSection";
import EducationCertifications from "../components/EducationCertifications";

export default function AboutPage() {
  return (
    <main style={{ position: "relative", overflowX: "hidden", paddingTop: "80px" }}>
      {/* Page Hero Banner */}
      <section style={{ padding: "4rem 1.5rem 1rem", position: "relative" }}>
        <div className="section-container" style={{ paddingBottom: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center" }}
          >
            <div className="section-eyebrow">
              <span className="dot" />
              ENGINEERING DOSSIER // BIOGRAPHY
            </div>
            <h1 className="section-title">
              THE ENGINEER BEHIND <span className="gradient-cyan-purple">THE CODE.</span>
            </h1>
            <p className="section-subtitle">
              Learn about my engineering mindset, problem-solving philosophies, workstation setup, and Microsoft certifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D Developer Workstation Desk (Dribbble 3D Desk Inspiration) */}
      <section style={{ padding: "2rem 1.5rem 1rem", position: "relative" }}>
        <div className="section-container" style={{ paddingBottom: 0 }}>
          <div className="cyber-panel clipped-corner" style={{ padding: "2rem", overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1rem",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--cyan)", letterSpacing: "0.15em" }}>
                  ISOMETRIC LAB RIG // 3D DESK ENVIRONMENT
                </span>
                <h3 style={{ fontSize: "1.25rem", color: "#ffffff", fontWeight: 700, marginTop: "0.2rem" }}>
                  Developer Workstation & Telemetry Center
                </h3>
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                INTERACTIVE 3D ENVIRONMENT · MOUSE PARALLAX
              </span>
            </div>

            <Workstation3DCanvas />
          </div>
        </div>
      </section>

      {/* Narrative & Dossier */}
      <AboutSection />

      {/* Education & Certifications */}
      <EducationCertifications />
    </main>
  );
}
