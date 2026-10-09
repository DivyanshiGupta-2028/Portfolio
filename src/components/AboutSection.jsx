import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" style={{ position: "relative" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            ENGINEER IDENTITY // DOSSIER
          </div>
          <h2 className="section-title">
            THE ENGINEER BEHIND <span className="gradient-cyan-purple">THE INTERFACE.</span>
          </h2>
          <p className="section-subtitle">
            A software engineer focused on reliable backend foundations, high-speed data flow, and intuitive product execution.
          </p>
        </div>

        {/* 2-Column Content: Bio Narrative & Holographic Portrait Dossier */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left: First-Person Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="cyber-panel clipped-corner"
              style={{
                padding: "2.5rem 2.2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.3rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--cyan)",
                  letterSpacing: "0.15em",
                }}
              >
                // SYSTEM LOG // PERSPECTIVE
              </div>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.8,
                }}
              >
                I'm a software engineer who enjoys understanding how applications work beneath the surface — from API design and authentication to database operations and the user experiences built on top of them.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                }}
              >
                My work spans .NET backend development, full-stack JavaScript applications, enterprise workflows, and AI-integrated systems. I enjoy breaking down complex requirements into maintainable services, practical features, and reliable application flows.
              </p>

              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                }}
              >
                I believe good engineering is not just about making something work. It's about making it understandable, secure, maintainable, and useful.
              </p>

              {/* Engineering Principles */}
              <div
                style={{
                  marginTop: "0.8rem",
                  paddingTop: "1.2rem",
                  borderTop: "1px solid rgba(72, 229, 255, 0.15)",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--cyan)",
                    }}
                  >
                    CORE VALUE 01
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#ffffff",
                    }}
                  >
                    Resilient Architecture
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                    Stateless APIs, transaction safety, and clean boundaries.
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--purple)",
                    }}
                  >
                    CORE VALUE 02
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "#ffffff",
                    }}
                  >
                    Measurable Execution
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                    Automating manual tasks and shaving user wait times.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Holographic Profile Dossier */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ position: "relative" }}
          >
            <div
              className="cyber-panel clipped-corner"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                background: "linear-gradient(135deg, rgba(72, 229, 255, 0.05) 0%, rgba(12, 18, 34, 0.9) 100%)",
                border: "1px solid rgba(72, 229, 255, 0.25)",
              }}
            >
              {/* Avatar Frame */}
              <div
                style={{
                  position: "relative",
                  width: "180px",
                  height: "180px",
                  borderRadius: "50%",
                  padding: "4px",
                  background: "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%)",
                  boxShadow: "0 0 30px rgba(72, 229, 255, 0.35)",
                  marginBottom: "1.5rem",
                }}
              >
                <img
                  src="/avatar.jpg"
                  alt="Divyanshi Gupta"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(e) => {
                    // Fallback to geometric monogram if image fails
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Name & Title */}
              <h3
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  marginBottom: "0.2rem",
                }}
              >
                Divyanshi Gupta
              </h3>

              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  color: "var(--cyan)",
                  marginBottom: "1.2rem",
                }}
              >
                FULL-STACK SOFTWARE ENGINEER
              </div>

              {/* Quick Dossier Specs */}
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  background: "rgba(7, 10, 18, 0.8)",
                  padding: "1rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(72, 229, 255, 0.12)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  textAlign: "left",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>LOCATION:</span>
                  <span style={{ color: "#ffffff" }}>Noida / NCR, India</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>EXPERIENCE:</span>
                  <span style={{ color: "#ffffff" }}>~3 Yrs (Combined)</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>SPECIALTY:</span>
                  <span style={{ color: "var(--cyan)" }}>.NET · APIs · SQL · React</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>STATUS:</span>
                  <span style={{ color: "#34d399" }}>Open to Opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
