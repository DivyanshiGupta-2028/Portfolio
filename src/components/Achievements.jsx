import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" style={{ position: "relative" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            MEASURABLE IMPACT // PROVEN VALUE
          </div>
          <h2 className="section-title">
            IMPACT, NOT JUST <span className="gradient-cyan-purple">IMPLEMENTATION.</span>
          </h2>
          <p className="section-subtitle">
            Engineering isn't measured in lines of code — it is proven by reduced operational latency, automated workflows, and verified system gains.
          </p>
        </div>

        {/* 2 Prominent Verified Metric Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "3rem",
          }}
          className="metric-cards-grid"
        >
          {/* Metric 1 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cyber-panel clipped-corner"
            style={{
              padding: "2.8rem 2.2rem",
              background: "linear-gradient(135deg, rgba(72, 229, 255, 0.08) 0%, rgba(12, 18, 34, 0.85) 100%)",
              border: "1px solid var(--cyan)",
              boxShadow: "0 0 35px rgba(72, 229, 255, 0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--cyan)",
                  letterSpacing: "0.15em",
                  marginBottom: "1rem",
                }}
              >
                // VERIFIED METRIC · LICENSE ADMIN SYSTEM
              </div>

              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(3.5rem, 7vw, 5.2rem)",
                  lineHeight: 1,
                  background: "linear-gradient(135deg, #48E5FF 0%, #38bdf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(72, 229, 255, 0.4))",
                  marginBottom: "1rem",
                }}
              >
                40%
              </div>

              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "0.8rem",
                }}
              >
                Reduction in Manual License Assignment Effort
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                }}
              >
                Automated multi-tenant licensing workflows, feature entitlement toggles, and atomic SQL Server allocation stored procedures, replacing laborious manual spreadsheet entries.
              </p>
            </div>

            <div
              style={{
                marginTop: "1.8rem",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(72, 229, 255, 0.15)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "#34d399",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>✔</span>
              <span>DOCUMENTED IN PROFESSIONAL RESUME</span>
            </div>
          </motion.div>

          {/* Metric 2 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="cyber-panel clipped-corner"
            style={{
              padding: "2.8rem 2.2rem",
              background: "linear-gradient(135deg, rgba(139, 92, 255, 0.08) 0%, rgba(12, 18, 34, 0.85) 100%)",
              border: "1px solid var(--purple)",
              boxShadow: "0 0 35px rgba(139, 92, 255, 0.2)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--purple)",
                  letterSpacing: "0.15em",
                  marginBottom: "1rem",
                }}
              >
                // VERIFIED METRIC · ANGULAR CMS PLATFORM
              </div>

              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(3.5rem, 7vw, 5.2rem)",
                  lineHeight: 1,
                  background: "linear-gradient(135deg, #8B5CFF 0%, #c084fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(139, 92, 255, 0.4))",
                  marginBottom: "1rem",
                }}
              >
                35%
              </div>

              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "0.8rem",
                }}
              >
                Improvement in Angular CMS Load Time
              </h3>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.65,
                }}
              >
                Re-architected enterprise CMS frontend leveraging Angular lazy-loaded route modules, RxJS reactive stream caching, and server-side response caching headers.
              </p>
            </div>

            <div
              style={{
                marginTop: "1.8rem",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(139, 92, 255, 0.15)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "#34d399",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>✔</span>
              <span>BENCHMARKED LOAD PERFORMANCE GAIN</span>
            </div>
          </motion.div>
        </div>

        {/* 5 Core Capability Highlights */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.2rem",
          }}
        >
          {[
            { title: "Enterprise API Architecture", desc: "Contract-first REST services, middleware validation, and high-concurrency endpoints." },
            { title: "Authentication & Authorization", desc: "Multi-tenant RBAC policies, JWT session life-cycles, and Google OAuth2 integration." },
            { title: "Database Optimization", desc: "Complex T-SQL stored procedures, execution plan profiling, and index strategies." },
            { title: "Full-Stack Product Delivery", desc: "End-to-end integration between modern SPAs (React/Angular) and resilient backends." },
            { title: "AI-Integrated API Workflows", desc: "Python & FastAPI asynchronous services processing health metrics and recommendations." },
          ].map((cap, i) => (
            <div
              key={i}
              className="cyber-panel"
              style={{
                padding: "1.4rem",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--cyan)",
                }}
              >
                [CAPABILITY // {String(i + 1).padStart(2, "0")}]
              </div>
              <h4
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                {cap.title}
              </h4>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                }}
              >
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .metric-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
