import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      date: "JUL 2024 – PRESENT · NOIDA",
      role: "Software Engineer – .NET",
      company: "Sanskriti IT Solutions",
      highlights: [
        <>
          Architected backend for <strong style={{ color: "var(--cream)" }}>Zinkr</strong> (dating platform) — Google OAuth2, JWT session management, real-time matching APIs.
        </>,
        <>
          Engineered multi-tenant <strong style={{ color: "var(--cream)" }}>License Administration System</strong> (.NET + Angular) — reduced manual effort by <strong style={{ color: "var(--teal)" }}>40%</strong>.
        </>,
        <>
          Delivered Angular 19 CMS with lazy loading + API caching — <strong style={{ color: "var(--teal)" }}>35% reduction</strong> in UI load time.
        </>,
        "Established Azure DevOps CI/CD pipelines — significantly reduced release cycle time.",
      ],
      current: true,
    },
    {
      date: "FEB 2024 – JUN 2024 · NOIDA",
      role: "Android Developer Intern",
      company: "Sanskriti IT Solutions",
      highlights: [
        "Built secure auth flows (login, signup, OTP) with REST API integration — improved onboarding UX and reduced drop-off.",
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" style={{ padding: "0 3rem 6rem" }}>
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Work Experience</div>
          <h3
            className="section-title"
            style={{ fontSize: "1.8rem", marginBottom: "2rem" }}
          >
            Where I've <em>Made Impact</em>
          </h3>
        </motion.div>

        <div
          style={{
            borderLeft: "2px solid var(--border)",
            paddingLeft: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              style={{ position: "relative" }}
            >
              {exp.current ? (
                <div
                  style={{
                    position: "absolute",
                    left: "-2.6rem",
                    top: "0.3rem",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--blue)",
                    boxShadow: "var(--glow-blue)",
                  }}
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    left: "-2.6rem",
                    top: "0.3rem",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "var(--border)",
                    border: "2px solid var(--teal)",
                  }}
                />
              )}

              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "1rem",
                  color: exp.current ? "var(--teal)" : "var(--dim)",
                  letterSpacing: "0.1em",
                  marginBottom: "0.3rem",
                }}
              >
                {exp.date}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "0.82rem",
                  marginBottom: "0.8rem",
                }}
              >
                {exp.role} · {exp.company}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {exp.highlights.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.8rem",
                      alignItems: "flex-start",
                      color: "var(--muted)",
                      fontSize: "1.08rem",
                      lineHeight: 1.7,
                    }}
                  >
                    <span
                      style={{
                        color: exp.current ? "var(--blue)" : "var(--teal)",
                        flexShrink: 0,
                      }}
                    >
                      ▹
                    </span>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
