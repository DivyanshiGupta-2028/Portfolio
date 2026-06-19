import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: "zinkr",
      num: "01 / Active — May 2026",
      name: "Zinkr — Dating Platform",
      desc: "Architected the full backend for a modern dating platform. Built Google OAuth2 SSO, JWT session management, and a real-time intelligent matching API using ASP.NET Core. Handles profile discovery, match scoring, swipe events, and secure chat initiation — all under a production-ready microservices-style architecture.",
      stack: [
        "ASP.NET Core",
        "Google OAuth2",
        "JWT Auth",
        "Real-time Matching API",
        "SQL Server",
        "C#",
      ],
      video: "https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/one-by-one-person-detection.mp4",
      emoji: "💘",
      featured: true,
      color: "#ff5078",
      gradient: "linear-gradient(135deg, #1a0a2e, #2d1b4e, #0d1f3c)",
    },
    {
      id: "wellness",
      num: "02 / Active — May 2026",
      name: "Wellness App — AI Backend",
      desc: "FastAPI backend with user management, health-data APIs, and JWT auth. AI/ML pipeline for personalized recommendations via trend analysis and adaptive goal-setting.",
      stack: ["FastAPI", "Python", "AI/ML Pipeline", "JWT"],
      emoji: "🏥",
      featured: false,
    },
    {
      id: "inventory",
      num: "03 / Active — May 2026",
      name: "Sales Inventory System",
      desc: "Enterprise-grade inventory platform with GST/non-GST invoicing, real-time stock tracking, RBAC, and modular API architecture. Live on Azure.",
      stack: [".NET", "Angular 18", "SQL Server", "Azure"],
      emoji: "📦",
      featured: false,
    },
    {
      id: "bellezbuy",
      num: "04 / Shipped — Feb–May 2026",
      name: "BellezBuy — E-Commerce",
      desc: "Full-stack e-commerce with product catalogue, order management, payment APIs, and Brevo transactional email (OTP, password reset, notifications).",
      stack: ["Node.js", "React", "SQL Server", "Brevo"],
      emoji: "🛍️",
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      style={{
        background: "var(--bg2)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Featured <em>Projects</em>
          </h2>
        </motion.div>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{
                gridColumn: proj.featured ? "1 / -1" : "auto",
                background: "var(--bg3)",
                border: "1px solid var(--border)",
                overflow: "hidden",
                position: "relative",
                display: proj.featured ? "grid" : "block",
                gridTemplateColumns: proj.featured ? "1.2fr 1fr" : "1fr",
              }}
              className="project-card-wrap"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 60px rgba(0,0,0,0.4), var(--glow-teal)";
                e.currentTarget.style.borderColor = "var(--teal)";
                const overlay = e.currentTarget.querySelector(".project-overlay");
                if (overlay) overlay.style.opacity = 1;
                const vid = e.currentTarget.querySelector("video");
                if (vid) vid.play();
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--border)";
                const overlay = e.currentTarget.querySelector(".project-overlay");
                if (overlay) overlay.style.opacity = 0;
                const vid = e.currentTarget.querySelector("video");
                if (vid) {
                  vid.pause();
                  vid.currentTime = 0;
                }
              }}
            >
              <div
                style={{
                  height: proj.featured ? "100%" : "200px",
                  minHeight: proj.featured ? "320px" : "auto",
                  position: "relative",
                  overflow: "hidden",
                  background: proj.gradient || "linear-gradient(135deg, var(--bg), var(--bg2))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Fallback emoji / design */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "0.5rem",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: proj.featured ? "5rem" : "4rem",
                      filter: proj.featured
                        ? "drop-shadow(0 0 30px rgba(255,80,120,0.8))"
                        : "drop-shadow(0 0 20px rgba(38,139,210,0.4))",
                      animation: proj.featured
                        ? "float 4s ease-in-out infinite"
                        : "none",
                    }}
                  >
                    {proj.emoji}
                  </div>
                </div>

                {proj.featured && (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        border: "1px solid rgba(255,80,120,0.15)",
                        animation: "spin 12s linear infinite",
                        zIndex: 1,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        width: "280px",
                        height: "280px",
                        borderRadius: "50%",
                        border: "1px solid rgba(255,80,120,0.08)",
                        animation: "spin 20s linear infinite reverse",
                        zIndex: 1,
                      }}
                    />
                  </>
                )}

                {/* Optional Video on hover */}
                {proj.video && (
                  <video
                    src={proj.video}
                    muted
                    loop
                    playsInline
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 2,
                      opacity: 0,
                      transition: "opacity 0.4s ease, filter 0.4s ease",
                      filter: "brightness(0.8) contrast(1.05) saturate(1.15)"
                    }}
                    onPlay={(e) => { e.currentTarget.style.opacity = 1.0; }}
                    onPause={(e) => { e.currentTarget.style.opacity = 0; }}
                  />
                )}

                {/* Overlay */}
                <div
                  className="project-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: proj.featured
                      ? "linear-gradient(to top, rgba(10,5,20,0.85) 0%, rgba(10,5,20,0.3) 40%, transparent 80%)"
                      : "linear-gradient(to top, rgba(10,25,30,0.85) 0%, rgba(10,25,30,0.3) 40%, transparent 80%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    zIndex: 3,
                    backdropFilter: "blur(2px)",
                  }}
                >
                  <a
                    href="#contact"
                    style={{
                      padding: "0.6rem 1.2rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "1rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      background: proj.featured
                        ? "linear-gradient(135deg,#ff5078,#c2185b)"
                        : "var(--blue)",
                      color: proj.featured ? "white" : "var(--bg)",
                    }}
                  >
                    {proj.featured ? "Request Demo" : "Request Access"}
                  </a>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      padding: "0.6rem 1.2rem",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "1rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      transition: "all 0.2s",
                      border: "1px solid var(--teal)",
                      color: "var(--teal)",
                    }}
                  >
                    Full Details
                  </a>
                </div>
              </div>

              <div style={{ padding: "2rem", zIndex: 4, position: "relative" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                  }}
                >
                  {proj.featured && (
                    <span
                      style={{
                        background: "linear-gradient(135deg,#ff5078,#c2185b)",
                        color: "white",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "1rem",
                        padding: "0.2rem 0.6rem",
                        letterSpacing: "0.1em",
                      }}
                    >
                      ★ FLAGSHIP
                    </span>
                  )}
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "1.08rem",
                      color: "var(--dim)",
                    }}
                  >
                    {proj.num}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: proj.featured ? "1.6rem" : "1.15rem",
                    marginTop: "0.6rem",
                    marginBottom: "0.6rem",
                    background: proj.featured
                      ? "linear-gradient(135deg,#ff5078,#4dffd9)"
                      : "none",
                    WebkitBackgroundClip: proj.featured ? "text" : "border-box",
                    WebkitTextFillColor: proj.featured
                      ? "transparent"
                      : "inherit",
                  }}
                >
                  {proj.name}
                </div>
                <p
                  style={{
                    fontSize: "1.08rem",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {proj.desc}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginTop: "1rem",
                  }}
                >
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.82rem",
                        padding: "0.25rem 0.6rem",
                        background: proj.featured
                          ? "rgba(255,80,120,0.08)"
                          : "rgba(38,139,210,0.1)",
                        border: `1px solid ${
                          proj.featured
                            ? "rgba(255,80,120,0.4)"
                            : "rgba(38,139,210,0.3)"
                        }`,
                        color: proj.featured ? "#ff5078" : "var(--blue)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card-wrap {
          transition: all 0.4s ease;
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .project-card-wrap { grid-template-columns: 1fr !important; display: flex !important; flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
