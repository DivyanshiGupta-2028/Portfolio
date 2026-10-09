import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
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
              TRANSMISSION LINK // COMMUNICATIONS
            </div>
            <h1 className="section-title">
              LET'S INITIATE <span className="gradient-cyan-purple">TRANSMISSION.</span>
            </h1>
            <p className="section-subtitle">
              Reach out regarding software engineering roles, backend consulting, API architecture reviews, or full-stack collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Communications Array & Form */}
      <ContactSection />
    </main>
  );
}
