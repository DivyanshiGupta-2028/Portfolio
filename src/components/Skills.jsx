import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    icon: "💻",
    accent: "#48E5FF",
    skills: ["C#", "JavaScript", "TypeScript", "Python", "SQL / T-SQL", "HTML", "CSS"],
  },
  {
    category: "Backend Development",
    icon: "⚡",
    accent: "#8B5CFF",
    skills: ["ASP.NET Core", ".NET", "ASP.NET Core MVC", "Razor Pages", "Node.js", "Express.js", "FastAPI"],
  },
  {
    category: "Frontend Development",
    icon: "🎨",
    accent: "#38bdf8",
    skills: ["React", "Angular", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    accent: "#10b981",
    skills: ["Microsoft SQL Server", "MySQL", "Stored Procedures", "Query Optimization", "Dapper"],
  },
  {
    category: "Authentication and Security",
    icon: "🔐",
    accent: "#f59e0b",
    skills: [
      "REST APIs",
      "API Integration",
      "JWT Authentication",
      "Google OAuth 2.0",
      "Role-Based Access Control (RBAC)",
      "Multi-Tenancy",
      "Authentication and Authorization",
      "Audit Logging",
    ],
  },
  {
    category: "DevOps and Tools",
    icon: "🛠️",
    accent: "#ec4899",
    skills: [
      "Git",
      "GitHub",
      "Azure DevOps",
      "Docker",
      "Postman",
      "CI/CD",
      "OOP",
      "SOLID Principles",
      "Agile / Scrum",
      "Code Reviews",
      "Testing and Debugging",
    ],
  },
  {
    category: "AI Integration",
    icon: "🤖",
    accent: "#a855f7",
    skills: [
      "ML Model Integration",
      "Trend Analysis",
      "Personalization Workflows",
      "Adaptive Goals",
      "Smart Notification Triggers",
    ],
  },
];

export default function Skills() {
  return (
    <>
      <div className="section-divider" />
      <section id="skills" className="section-bg-light-cream" style={{ position: "relative" }}>
        <div className="section-container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-eyebrow">
              <span className="dot" />
              TECHNICAL COMPETENCIES // CORE STACK
            </div>
            <h2 className="section-title">
              TECHNICAL <span className="gradient-cyan-purple">SKILLS & ARCHITECTURE.</span>
            </h2>
            <p className="section-subtitle">
              Verified technical capabilities organized across 7 core software engineering disciplines, based directly on verified professional experience.
            </p>
          </div>

          {/* 7 Distinguishable Category Cards */}
          <div
            className="skills-categories-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {SKILL_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className="cyber-panel clipped-corner"
                style={{
                  padding: "1.8rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "var(--bg-surface)",
                  border: `1px solid ${cat.accent}33`,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = cat.accent;
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 12px 30px ${cat.accent}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${cat.accent}33`;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div>
                  {/* Category Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.5rem",
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: `${cat.accent}15`,
                        border: `1px solid ${cat.accent}44`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {cat.icon}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {cat.category}
                      </h3>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: cat.accent,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {cat.skills.length} VERIFIED TECHNOLOGIES
                      </span>
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          padding: "0.3rem 0.65rem",
                          borderRadius: "6px",
                          background: "var(--bg-surface-elevated)",
                          border: "1px solid var(--border)",
                          color: "var(--text-secondary)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          transition: "color 0.2s ease, border-color 0.2s ease",
                        }}
                      >
                        <span style={{ color: cat.accent, fontSize: "0.65rem" }}>●</span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}