import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    category: "Programming Languages",
    icon: "💻",
    accent: "#0284c7",
    skills: ["C#", "JavaScript", "TypeScript", "Python", "SQL / T-SQL", "HTML", "CSS"],
  },
  {
    category: "Backend Development",
    icon: "⚡",
    accent: "#7c3aed",
    skills: [
      "ASP.NET Core",
      ".NET",
      "ASP.NET Core MVC",
      "Razor Pages",
      "Node.js",
      "Express.js",
      "FastAPI",
    ],
  },
  {
    category: "Frontend Development",
    icon: "🎨",
    accent: "#0891b2",
    skills: ["React", "Angular", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    accent: "#059669",
    skills: [
      "Microsoft SQL Server",
      "MySQL",
      "Stored Procedures",
      "Query Optimization",
      "Dapper",
    ],
  },
  {
    category: "Authentication and Security",
    icon: "🔐",
    accent: "#d97706",
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
    accent: "#db2777",
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
    accent: "#9333ea",
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
    <section id="skills" className="section-bg-light-cream" style={{ position: "relative" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            RESUME-VERIFIED TECHNICAL SKILLS
          </div>
          <h2 className="section-title">
            TECHNICAL <span className="gradient-cyan-purple">COMPETENCIES.</span>
          </h2>
          <p className="section-subtitle">
            7 structured domains derived strictly from verified production and internship experience. No arbitrary percentages or unverified claims.
          </p>
        </div>

        {/* 7 Categories Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
          className="skills-categories-grid"
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="cyber-panel clipped-corner skills-card"
              style={{
                padding: "1.8rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: `1px solid ${cat.accent}44`,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cat.accent;
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 12px 30px ${cat.accent}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${cat.accent}44`;
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
                      className="skills-category-heading"
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        marginBottom: "0.2rem",
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
                        fontWeight: 600,
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
                      className="skills-tag-pill"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        padding: "0.32rem 0.65rem",
                        borderRadius: "6px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        transition: "all 0.2s ease",
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
  );
}
