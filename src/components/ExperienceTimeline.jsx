import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Software Engineer – Full Stack",
    company: "Sanskriti IT Solutions Pvt. Ltd.",
    location: "Noida, India",
    period: "June 2024 – Present",
    status: "CURRENT ROLE",
    verifiedBadges: ["40% MANUAL EFFORT REDUCTION", "35% CMS SPEED IMPROVEMENT"],
    bullets: [
      "Architected and deployed enterprise REST APIs and backend services utilizing C# and ASP.NET Core with strict domain separation.",
      "Engineered multi-tenant database operations, triggers, and atomic stored procedures on Microsoft SQL Server.",
      "Contributed core modules to the enterprise License Administration System, achieving a verified 40% reduction in manual license assignment effort.",
      "Implemented security architecture: stateless JWT authentication, Google OAuth2 SSO integration, granular RBAC policies, and structured audit logs.",
      "Optimized Angular CMS frontend performance by 35% utilizing lazy-loaded modules, reactive RxJS state pipelines, and intelligent API response caching.",
      "Automated continuous integration and delivery (CI/CD) pipelines inside Azure DevOps for reliable staging and production deployments.",
      "Conducted rigorous code reviews, automated regression tests, and performance profiling across microservices.",
    ],
    tech: ["C#", "ASP.NET Core", ".NET 7+", "Angular", "SQL Server", "JWT", "Google OAuth2", "Azure DevOps"],
  },
  {
    role: "Android Developer Intern",
    company: "Sanskriti IT Solutions Pvt. Ltd.",
    location: "Noida, India",
    period: "February 2024 – June 2024",
    status: "INTERNSHIP",
    verifiedBadges: ["API INTEGRATION & QA"],
    bullets: [
      "Integrated secure REST API endpoints for user authentication, registration, password recovery, and SMS OTP verification flows.",
      "Assisted in regression testing across multiple Android SDK versions and device form factors.",
      "Identified and resolved runtime edge-case bugs, collaborating in daily agile standups and code reviews.",
    ],
    tech: ["Android SDK", "Java/Kotlin", "REST API Integration", "Postman", "Git"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" style={{ position: "relative" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            CAREER TRAJECTORY // TIMELINE
          </div>
          <h2 className="section-title">
            THE JOURNEY <span className="gradient-cyan-purple">SO FAR.</span>
          </h2>
          <p className="section-subtitle">
            Documented professional engineering history delivering high-reliability backends, enterprise multi-tenancy, and measurable performance optimizations.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            position: "relative",
            maxWidth: "940px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          {/* Vertical Glowing Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "20px",
              width: "2px",
              background: "linear-gradient(180deg, var(--cyan) 0%, var(--purple) 70%, transparent 100%)",
              boxShadow: "0 0 10px var(--cyan)",
            }}
            className="timeline-spine"
          />

          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              style={{
                position: "relative",
                paddingLeft: "60px",
              }}
              className="timeline-item"
            >
              {/* Timeline Marker Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "24px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "#070A12",
                  border: "2px solid var(--cyan)",
                  boxShadow: "0 0 12px var(--cyan)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--cyan)",
                  }}
                />
              </div>

              {/* Experience Card */}
              <div className="cyber-panel clipped-corner" style={{ padding: "2.2rem" }}>
                {/* Header row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.8rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--cyan)",
                        letterSpacing: "0.15em",
                      }}
                    >
                      {exp.period} · {exp.location}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.45rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        marginTop: "0.2rem",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        fontSize: "1.05rem",
                        color: "var(--purple)",
                        fontWeight: 600,
                      }}
                    >
                      {exp.company}
                    </div>
                  </div>

                  <span
                    style={{
                      padding: "0.3rem 0.8rem",
                      borderRadius: "999px",
                      background: "rgba(72, 229, 255, 0.1)",
                      border: "1px solid rgba(72, 229, 255, 0.3)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      color: "var(--cyan)",
                    }}
                  >
                    {exp.status}
                  </span>
                </div>

                {/* Verified Achievement Badges */}
                {exp.verifiedBadges && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.6rem",
                      marginBottom: "1.4rem",
                    }}
                  >
                    {exp.verifiedBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        style={{
                          padding: "0.3rem 0.75rem",
                          borderRadius: "4px",
                          background: "rgba(16, 185, 129, 0.12)",
                          border: "1px solid rgba(16, 185, 129, 0.4)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "#34d399",
                          fontWeight: 700,
                        }}
                      >
                        ★ {badge}
                      </span>
                    ))}
                  </div>
                )}

                {/* Bullets */}
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.65rem",
                    marginBottom: "1.6rem",
                  }}
                >
                  {exp.bullets.map((b, bIdx) => (
                    <li
                      key={bIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.65rem",
                        fontSize: "0.92rem",
                        color: "var(--text-primary)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "var(--cyan)", fontFamily: "var(--font-mono)" }}>▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: "0.25rem 0.6rem",
                        borderRadius: "4px",
                        background: "rgba(12, 18, 34, 0.8)",
                        border: "1px solid rgba(72, 229, 255, 0.15)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
