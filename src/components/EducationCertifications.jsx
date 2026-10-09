import { motion } from "framer-motion";

export default function EducationCertifications() {
  return (
    <section id="education" style={{ position: "relative" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            ACADEMIC FOUNDATION // CERTIFICATIONS
          </div>
          <h2 className="section-title">
            EDUCATION & <span className="gradient-cyan-purple">CREDENTIALS.</span>
          </h2>
          <p className="section-subtitle">
            Formal computer science engineering foundation backed by verified Microsoft Azure cloud and AI technical certifications.
          </p>
        </div>

        {/* 3 Column Grid: Degree + 2 MS Certs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="cyber-panel clipped-corner"
            style={{
              padding: "2.2rem 2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.2rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--cyan)",
                    letterSpacing: "0.15em",
                  }}
                >
                  DEGREE // CS ENGINEERING
                </span>
                <span style={{ fontSize: "1.5rem" }}>🎓</span>
              </div>

              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "0.4rem",
                }}
              >
                B.Tech in Computer Science & Engineering
              </h3>

              <div
                style={{
                  fontSize: "0.95rem",
                  color: "var(--purple)",
                  fontWeight: 600,
                  marginBottom: "0.8rem",
                }}
              >
                Meerut Institute of Engineering and Technology
              </div>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Four-year engineering curriculum focused on Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering methodologies.
              </p>
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(72, 229, 255, 0.15)",
                paddingTop: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
              }}
            >
              <span>PERIOD:</span>
              <span style={{ color: "var(--cyan)" }}>August 2020 – June 2024</span>
            </div>
          </motion.div>

          {/* Microsoft AZ-900 Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="cyber-panel clipped-corner"
            style={{
              padding: "2.2rem 2rem",
              border: "1px solid rgba(72, 229, 255, 0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "linear-gradient(135deg, rgba(72, 229, 255, 0.05) 0%, rgba(12, 18, 34, 0.8) 100%)",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.2rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--cyan)",
                    letterSpacing: "0.15em",
                  }}
                >
                  MICROSOFT CERTIFIED
                </span>
                <span
                  style={{
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                    background: "rgba(72, 229, 255, 0.15)",
                    border: "1px solid var(--cyan)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--cyan)",
                  }}
                >
                  AZ-900
                </span>
              </div>

              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "0.4rem",
                }}
              >
                Microsoft Azure Fundamentals
              </h3>

              <div
                style={{
                  fontSize: "0.95rem",
                  color: "var(--cyan)",
                  fontWeight: 600,
                  marginBottom: "0.8rem",
                }}
              >
                Microsoft Corporation
              </div>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Validates core knowledge of cloud computing concepts, Microsoft Azure architectural services, virtual machines, cloud governance, and security compliance standards.
              </p>
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(72, 229, 255, 0.15)",
                paddingTop: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "#34d399",
              }}
            >
              <span>STATUS:</span>
              <span>✔ VERIFIED CREDENTIAL</span>
            </div>
          </motion.div>

          {/* Microsoft AI-900 Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="cyber-panel clipped-corner"
            style={{
              padding: "2.2rem 2rem",
              border: "1px solid rgba(139, 92, 255, 0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background: "linear-gradient(135deg, rgba(139, 92, 255, 0.05) 0%, rgba(12, 18, 34, 0.8) 100%)",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1.2rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "var(--purple)",
                    letterSpacing: "0.15em",
                  }}
                >
                  MICROSOFT CERTIFIED
                </span>
                <span
                  style={{
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                    background: "rgba(139, 92, 255, 0.15)",
                    border: "1px solid var(--purple)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--purple)",
                  }}
                >
                  AI-900
                </span>
              </div>

              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "0.4rem",
                }}
              >
                Microsoft Azure AI Fundamentals
              </h3>

              <div
                style={{
                  fontSize: "0.95rem",
                  color: "var(--purple)",
                  fontWeight: 600,
                  marginBottom: "0.8rem",
                }}
              >
                Microsoft Corporation
              </div>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Demonstrates foundational understanding of Machine Learning (ML), Artificial Intelligence (AI) workloads, computer vision, natural language processing, and responsible AI principles on Azure.
              </p>
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(139, 92, 255, 0.15)",
                paddingTop: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "#34d399",
              }}
            >
              <span>STATUS:</span>
              <span>✔ VERIFIED CREDENTIAL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
