import { motion } from "framer-motion";
import GamingVideoTheater from "../components/GamingVideoTheater";
import ProjectsUniverse from "../components/ProjectsUniverse";

export default function WorkPage() {
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
              PORTFOLIO // MISSION ARCHIVES
            </div>
            <h1 className="section-title">
              PRODUCTION SYSTEMS & <span className="gradient-cyan-purple">FEATURED PROJECTS.</span>
            </h1>
            <p className="section-subtitle">
              Comprehensive architectural case studies, live screen recordings, and benchmarked metrics from enterprise backends to consumer platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gaming Video Holo-Theater (Live Production Footage) */}
      <GamingVideoTheater />

      {/* All 7 Real Projects Universe with Interactive Case Studies */}
      <ProjectsUniverse />
    </main>
  );
}
