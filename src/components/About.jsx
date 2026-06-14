import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="section-inner">
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            <motion.div variants={itemVariants} className="section-label">
              About Me
            </motion.div>
            <motion.h2 variants={itemVariants} className="section-title">
              I build systems that <em>actually ship</em>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "0.82rem",
              }}
            >
              I'm a Full-Stack Software Engineer currently at{" "}
              <strong style={{ color: "var(--cream)" }}>
                Sanskriti IT Solutions, Noida
              </strong>{" "}
              — architecting production systems across SaaS, dating apps,
              e-commerce, and AI-powered health platforms.
            </motion.p>
            <motion.p
              variants={itemVariants}
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "0.82rem",
              }}
            >
              My stack is deep on the backend (.NET 7+, ASP.NET Core, FastAPI)
              and sharp on the frontend (Angular 19, React). I've shipped
              multi-tenant licensing systems, real-time matching APIs, and
              enterprise inventory platforms — not just side projects.
            </motion.p>
            <motion.p
              variants={itemVariants}
              style={{
                color: "var(--muted)",
                lineHeight: 1.9,
                fontSize: "0.82rem",
              }}
            >
              Microsoft Certified in{" "}
              <strong style={{ color: "var(--teal)" }}>
                Azure Fundamentals (AZ-900)
              </strong>{" "}
              and{" "}
              <strong style={{ color: "var(--teal)" }}>
                Azure AI Fundamentals (AI-900)
              </strong>
              . B.Tech CSE from MIET, Meerut.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              marginTop: "2rem",
            }}
          >
            {[
              {
                icon: "⚡",
                title: "40% Less Manual Work",
                desc: "Built multi-tenant SaaS License Admin System — cut manual assignment effort by 40%.",
              },
              {
                icon: "🚀",
                title: "35% Faster UI Load",
                desc: "Delivered Angular 19 CMS with lazy loading + API caching — 35% reduction in load time.",
              },
              {
                icon: "🤖",
                title: "AI/ML Pipeline Architect",
                desc: "Building intelligent wellness backend with personalized recommendations via FastAPI + ML.",
              },
              {
                icon: "☁️",
                title: "Microsoft Certified",
                desc: "AZ-900 Azure Fundamentals · AI-900 Azure AI Fundamentals — verified cloud expertise.",
              },
            ].map((highlight, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1.2rem",
                  border: "1px solid var(--border)",
                  background: "var(--bg3)",
                  transition: "border-color 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--blue)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border)")
                }
              >
                <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>
                  {highlight.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {highlight.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "1rem",
                      color: "var(--dim)",
                    }}
                  >
                    {highlight.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
