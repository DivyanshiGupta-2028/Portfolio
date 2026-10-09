import { motion } from "framer-motion";
import EngineeringLab from "../components/EngineeringLab";

export default function EngineeringLabPage() {
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
              SYSTEM LABORATORY // ARCHITECTURE INTERNALS
            </div>
            <h1 className="section-title">
              THE ENGINEERING <span className="gradient-cyan-purple">LABORATORY.</span>
            </h1>
            <p className="section-subtitle">
              Inspect how the systems work beneath the hood: interactive lifecycle traces, security authentication token flows, multi-tenant partitioning, and AI data pipelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Visualizers */}
      <EngineeringLab />
    </main>
  );
}
