import { motion } from "framer-motion";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Achievements from "../components/Achievements";
import TechConstellation from "../components/TechConstellation";

export default function ExperiencePage() {
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
              CAREER TRAJECTORY & TELEMETRY
            </div>
            <h1 className="section-title">
              EXPERIENCE & <span className="gradient-cyan-purple">PROVEN VALUE.</span>
            </h1>
            <p className="section-subtitle">
              Documented professional engineering history, verified system gains, and the comprehensive interactive technology constellation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Verified Metric Highlights */}
      <Achievements />

      {/* Career Timeline */}
      <ExperienceTimeline />

      {/* Technology Constellation */}
      <TechConstellation />
    </main>
  );
}
