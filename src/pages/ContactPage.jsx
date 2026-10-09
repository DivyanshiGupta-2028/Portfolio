import { motion } from "framer-motion";
import PageHero3D from "../components/PageHero3D";
import ContactSection from "../components/ContactSection";

export default function ContactPage() {
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
        <PageHero3D accentColor={0xd946ef} secondColor={0x48e5ff} height={360} />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, rgba(7,10,18,0.88) 0%, rgba(7,10,18,0.5) 65%, transparent 100%)",
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
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "#d946ef",
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
                  background: "#d946ef",
                  boxShadow: "0 0 12px #d946ef",
                }}
                className="cyber-pulse"
              />
              TRANSMISSION LINK // COMMUNICATIONS ARRAY
            </div>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "1.2rem",
                maxWidth: "680px",
              }}
            >
              LET'S INITIATE{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #d946ef 0%, var(--cyan) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(217,70,239,0.4))",
                }}
              >
                TRANSMISSION.
              </span>
            </h1>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
                lineHeight: 1.7,
                maxWidth: "560px",
                marginBottom: "1.5rem",
              }}
            >
              Reach out regarding software engineering roles, backend consulting, API architecture reviews, or full-stack collaborations.
            </p>

            {/* Status */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.45rem 1rem",
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(16,185,129,0.3)",
                borderRadius: "999px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "#34d399",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                }}
                className="cyber-pulse"
              />
              OPEN TO OPPORTUNITIES · IMMEDIATE JOIN AVAILABILITY
            </div>
          </motion.div>
        </div>
      </section>

      {/* Communications Array & Form */}
      <ContactSection />
    </main>
  );
}
