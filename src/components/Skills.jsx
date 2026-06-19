import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      icon: "🔷",
      name: "ASP.NET Core / C#",
      pct: 93,
      label: "93% — Primary Stack",
      techs: [".NET 7+", "Web API", "EF Core", "RBAC", "Multi-Tenancy"],
    },
    {
      icon: "🅰️",
      name: "Angular 19",
      pct: 88,
      label: "88% — Production Use",
      techs: ["TypeScript", "Lazy Loading", "RxJS", "CMS"],
    },
    {
      icon: "🐍",
      name: "FastAPI / Python",
      pct: 80,
      label: "80% — AI Backend",
      techs: ["FastAPI", "ML Integration", "REST", "JWT"],
    },
    {
      icon: "⚛️",
      name: "React / Node.js",
      pct: 82,
      label: "82%",
      techs: ["React", "Node.js", "Express", "SQL Server"],
    },
    {
      icon: "🔐",
      name: "Auth & Security",
      pct: 90,
      label: "90%",
      techs: ["JWT", "OAuth2", "Google Auth", "RBAC", "Audit Logs"],
    },
    {
      icon: "☁️",
      name: "Azure & DevOps",
      pct: 78,
      label: "78% — Certified",
      techs: ["Azure DevOps", "CI/CD", "Docker", "AZ-900", "AI-900"],
    },
  ];

  return (
    <section id="skills">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Tech Stack</div>
          <h2 className="section-title">
            What I <em>work with</em>
          </h2>
        </motion.div>

        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="skill-card-wrap"
              style={{
                padding: "2rem",
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                transition: "all 0.3s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--blue)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--glow-blue)";
                e.currentTarget.querySelector(".skill-hover-line").style.transform = "scaleY(1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.querySelector(".skill-hover-line").style.transform = "scaleY(0)";
              }}
            >
              <div
                className="skill-hover-line"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "3px",
                  height: "100%",
                  background: "linear-gradient(to bottom, var(--blue), var(--teal))",
                  transform: "scaleY(0)",
                  transformOrigin: "top",
                  transition: "transform 0.3s",
                }}
              />
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {skill.icon}
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {skill.name}
              </div>
              
              {/* Animated Bar */}
              <div
                style={{
                  height: "3px",
                  background: "var(--border)",
                  borderRadius: "2px",
                  margin: "1rem 0 0.5rem",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.pct}%` }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  style={{
                    height: "100%",
                    background: "linear-gradient(90deg, var(--blue), var(--teal))",
                    borderRadius: "2px",
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "1.08rem",
                  color: "var(--teal)",
                }}
              >
                {skill.label}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginTop: "0.8rem",
                }}
              >
                {skill.techs.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.82rem",
                      color: "var(--dim)",
                      padding: "0.2rem 0.6rem",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
