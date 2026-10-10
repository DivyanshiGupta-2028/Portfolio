import { motion } from "framer-motion";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
  return (
    <main style={{ position: "relative", overflowX: "hidden", paddingTop: "80px" }}>

      {/* ── Product.inc style — full-width hero text, no 3D ── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* Subtle background glow */}
        <div style={{
          position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)",
          width: "800px", height: "600px",
          background: "radial-gradient(ellipse, rgba(217,70,239,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "5rem 1.75rem 3rem" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
            {/* Status indicator */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "#34d399", marginBottom: "2rem" }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} className="cyber-pulse" />
              OPEN TO OPPORTUNITIES · IMMEDIATE JOIN AVAILABILITY
            </div>

            <h1 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 1.0,
              letterSpacing: "-0.045em", marginBottom: "1.5rem", maxWidth: "1000px"
            }}>
              Let's build
              <br />
              <span style={{ background: "linear-gradient(135deg, #d946ef 0%, var(--cyan) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 30px rgba(217,70,239,0.3))" }}>
                something great.
              </span>
            </h1>

            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "520px" }}>
              Reach out about software engineering roles, backend consulting, API architecture reviews, or full-stack collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="pi-divider-cyan" style={{ margin: "0 1.75rem" }} />

      {/* ── Contact Form + Channels ── */}
      <ContactSection />

      {/* ── Bottom spacing ── */}
      <div style={{ height: "6rem" }} />
    </main>
  );
}
