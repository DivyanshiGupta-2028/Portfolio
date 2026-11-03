import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { cyberAudio } from "../utils/cyberAudio";

const PROJECTS_DATA = [
  {
    id: "license-admin",
    num: "01",
    title: "License Administration System",
    category: ".NET Backend",
    role: "Full-Stack Software Engineer",
    company: "Sanskriti IT Solutions",
    period: "2024 – 2026",
    desc: "Multi-tenant SaaS platform for centralized license administration, assignment, and feature-based access control. Helped reduce manual license assignment effort by 40%.",
    metrics: [
      { label: "Admin Effort Reduction", val: "40%", highlight: true },
      { label: "API Latency", val: "Sub-45ms" },
      { label: "Isolation Level", val: "Multi-Tenant" },
    ],
    tags: ["C#", "ASP.NET Core", "Angular", "SQL Server"],
    badge: "VERIFIED 40% GAIN",
    badgeColor: "#48E5FF",
    demoUrl: null,
    githubUrl: null,
    overview:
      "Contributed to a multi-tenant License Administration System with feature-based SaaS licensing and RBAC. Developed REST APIs, backend services, authentication workflows, and atomic stored procedures on Microsoft SQL Server. Helped reduce manual license assignment effort by 40%.",
  },
  {
    id: "dating-platform",
    num: "02",
    title: "Dating Platform – Full Stack and .NET Backend",
    category: "Fullstack",
    role: "Full-Stack Developer",
    company: "Sanskriti IT Solutions",
    period: "2024",
    desc: "Dating platform with user authentication, profile management, discovery, matching workflows, and premium subscription features.",
    video: "/Zinkr_Ad_v6_full_edit.mp4",
    metrics: [
      { label: "Auth Architecture", val: "Google OAuth 2.0 + JWT", highlight: true },
      { label: "Discovery Engine", val: "Preference & Matching" },
      { label: "Status", val: "Play Store Beta" },
    ],
    tags: ["React", "Node.js", "Express.js", "ASP.NET Core", "SQL Server", "MySQL", "JWT", "OAuth 2.0"],
    badge: "LIVE RECORDING",
    badgeColor: "#ec4899",
    demoUrl: "https://play.google.com/apps/internaltest/4701291796801878386",
    githubUrl: null,
    overview:
      "Engineered backend REST endpoints in ASP.NET Core and Node.js with Google OAuth 2.0 SSO and stateless JWT authentication. Implemented profile discovery, matching algorithms, and responsive React frontend interfaces.",
  },
  {
    id: "sales-inventory",
    num: "03",
    title: "Sales Inventory Management System",
    category: ".NET Backend",
    role: "Full-Stack Developer",
    company: "Sanskriti IT Solutions",
    period: "2024",
    desc: "Inventory management application with stock tracking, invoicing, modular APIs, and role-based access control.",
    metrics: [
      { label: "Invoice Engine", val: "GST & Non-GST Engine", highlight: true },
      { label: "Security", val: "Role-Based Access Control" },
      { label: "Architecture", val: ".NET + Angular + React" },
    ],
    tags: [".NET", "Angular", "React", "SQL Server", "MySQL", "JWT"],
    badge: "INVOICE AUTOMATION",
    badgeColor: "#38bdf8",
    demoUrl: null,
    githubUrl: null,
    overview:
      "Developed modular REST APIs for inventory and stock tracking, automated GST/non-GST invoice generation, and role-based access control partitioning cashiers from warehouse managers.",
  },
  {
    id: "bellezbuy",
    num: "04",
    title: "BellezBuy – E-Commerce Platform",
    category: "Fullstack",
    role: "Full-Stack Developer",
    company: "Sanskriti IT Solutions",
    period: "2024",
    desc: "E-commerce platform with product catalogue, order management, payment API integration, and transactional email workflows.",
    video: "/Record_2026-05-28-14-40-29.mp4",
    metrics: [
      { label: "Store Status", val: "Live On Play Store", highlight: true },
      { label: "Transactional Email", val: "Brevo API Automation" },
      { label: "Database", val: "MySQL Relational Schema" },
    ],
    tags: ["React", "Node.js", "MySQL", "Brevo"],
    badge: "LIVE ON PLAY STORE",
    badgeColor: "#10b981",
    demoUrl: "https://play.google.com/store/apps/details?id=com.Bellezbuy.app&hl=en",
    githubUrl: null,
    overview:
      "Built full-stack e-commerce solution with React frontend and Node.js backend. Integrated payment APIs, product catalogue, order management, OTP verification emails, password resets, and transactional notifications via Brevo.",
  },
  {
    id: "wellmove",
    num: "05",
    title: "WellMove – AI-Powered Wellness Platform",
    category: "AI Integration",
    role: "AI-Integrated Backend Developer",
    company: "Sanskriti IT Solutions",
    period: "2024",
    desc: "AI-integrated wellness platform providing user management, health-data APIs, personalized recommendations, trend analysis, adaptive goals, and smart notification triggers.",
    metrics: [
      { label: "AI Workflows", val: "Personalized Recommendations", highlight: true },
      { label: "Telemetry", val: "Trend Analysis & Goals" },
      { label: "Deployment", val: "Live Web Portal" },
    ],
    tags: ["Python", "FastAPI", "MySQL", "JWT", "AI/ML"],
    badge: "AI-INTEGRATED",
    badgeColor: "#a855f7",
    demoUrl: "https://wellnessphysioportal.sanskriti-tech.cloud/",
    githubUrl: null,
    overview:
      "Engineered asynchronous FastAPI backend services for user management and health-data ingestion. Developed algorithmic trend analysis, adaptive goals, and smart notification triggers based on user progress.",
  },
  {
    id: "aspnet-calculators",
    num: "06",
    title: "ASP.NET Calculators Suite",
    category: ".NET Backend",
    role: "Backend Developer",
    company: "Sanskriti IT Solutions",
    period: "2024",
    desc: "Collection of web-based financial calculators: EMI Calculator, HRA Calculator, GST Calculator, TDS Calculator, Auto Loan Calculator, and Net Worth Calculator.",
    metrics: [
      { label: "Precision", val: "Strict Decimal Accuracy", highlight: true },
      { label: "Calculators", val: "6 Financial Engines" },
      { label: "Framework", val: "ASP.NET Core MVC" },
    ],
    tags: ["ASP.NET Core MVC", "Razor Pages", "C#", "SQL"],
    badge: "FINANCIAL ENGINES",
    badgeColor: "#f59e0b",
    demoUrl: null,
    githubUrl: null,
    overview:
      "Collection of interactive web-based financial calculators built with ASP.NET Core MVC and Razor Pages. Features server-side validation and high-precision C# decimal business logic for banking, loan, and tax computation.",
  },
];

const CATEGORIES = [
  "All Tracks",
  ".NET Backend",
  "Fullstack",
  "AI Integration",
];

export default function UberDiscoveryEngine() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Tracks");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((p) => {
      const matchesCat =
        activeCategory === "All Tracks" || p.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const getCategoryCount = (cat) => {
    if (cat === "All Tracks") return PROJECTS_DATA.length;
    return PROJECTS_DATA.filter((p) => p.category === cat).length;
  };

  return (
    <>
    <div className="section-divider" />
    <section
      id="discovery-matrix"
      className="section-bg-obsidian"
      style={{
        position: "relative",
        padding: "5rem 0 6rem",
      }}
    >
      <div className="uber-discovery-container">
        {/* Section Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--cyan)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--cyan)",
                boxShadow: "0 0 10px var(--cyan)",
              }}
            />
            DISCOVERY ENGINE // PROJECT ARCHIVES
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            SEARCH ARCHITECTURE &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PRODUCTION WORKS.
            </span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              maxWidth: "680px",
              lineHeight: 1.6,
            }}
          >
            Explore verified .NET backends, full-stack applications, database-driven systems, and AI integrations. Filter by domain or search tech stack keywords.
          </p>
        </div>

        {/* Search Box */}
        <div className="uber-search-box">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="uber-search-input"
            placeholder="Search ASP.NET Core, React, SQL Server, Python, Node.js, JWT, RBAC..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
              }}
            >
              ✕ Clear
            </button>
          )}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--cyan)",
              background: "rgba(72, 229, 255, 0.08)",
              padding: "0.25rem 0.65rem",
              borderRadius: "6px",
              whiteSpace: "nowrap",
            }}
          >
            {filteredProjects.length} {filteredProjects.length === 1 ? "Project" : "Projects"}
          </span>
        </div>

        {/* Filter Pills */}
        <div className="uber-filter-pills">
          {CATEGORIES.map((cat) => {
            const count = getCategoryCount(cat);
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                className={`uber-pill ${isActive ? "active" : ""}`}
                onClick={() => {
                  cyberAudio.playClick();
                  setActiveCategory(cat);
                }}
              >
                <span>{cat}</span>
                <span className="uber-pill-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid */}
        <div className="uber-bento-grid">
          {filteredProjects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="uber-card"
              onClick={() => {
                cyberAudio.playClick();
                setSelectedProject(p);
              }}
            >
              <div>
                <div className="uber-card-header">
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      padding: "0.2rem 0.55rem",
                      border: `1px solid ${p.badgeColor}55`,
                      borderRadius: "4px",
                      color: p.badgeColor,
                      background: `${p.badgeColor}12`,
                    }}
                  >
                    {p.badge}
                  </span>
                  <div className="uber-card-arrow">↗</div>
                </div>

                <div className="uber-card-meta">
                  {p.company} · {p.period}
                </div>

                <h3 className="uber-card-title">{p.title}</h3>
                <p className="uber-card-desc">{p.desc}</p>

                {/* Metrics row */}
                <div className="uber-card-metrics">
                  {p.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="uber-metric-badge"
                      style={{
                        background: m.highlight ? "rgba(72, 229, 255, 0.12)" : "rgba(255, 255, 255, 0.05)",
                        border: m.highlight ? "1px solid rgba(72, 229, 255, 0.3)" : "1px solid rgba(255, 255, 255, 0.08)",
                        color: m.highlight ? "var(--cyan)" : "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      <span>{m.val}</span>
                      <span style={{ opacity: 0.6, fontSize: "0.62rem" }}>({m.label})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack chips */}
              <div className="uber-tech-chips">
                {p.tags.map((t) => (
                  <span key={t} className="uber-chip">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "4rem 2rem",
              background: "rgba(15, 18, 28, 0.5)",
              border: "1px dashed rgba(255, 255, 255, 0.12)",
              borderRadius: "16px",
            }}
          >
            <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", marginBottom: "1rem" }}>
              No production works found matching "{searchQuery}".
            </p>
            <button
              className="uber-pill active"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All Tracks");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Detailed Modal / Deep-Dive Drawer */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="uber-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="uber-modal-content"
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: "absolute",
                    top: "1.5rem",
                    right: "1.5rem",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    color: "var(--text-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  ✕
                </button>

                {/* Badge & Meta */}
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "0.25rem 0.65rem",
                      border: `1px solid ${selectedProject.badgeColor}`,
                      borderRadius: "4px",
                      color: selectedProject.badgeColor,
                      background: `${selectedProject.badgeColor}15`,
                    }}
                  >
                    {selectedProject.badge}
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    {selectedProject.company} · {selectedProject.period}
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "var(--text-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {selectedProject.title}
                </h2>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "var(--cyan)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Role: {selectedProject.role}
                </div>

                {/* Metrics Box */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                    gap: "1rem",
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "1.2rem",
                    marginBottom: "1.8rem",
                  }}
                >
                  {selectedProject.metrics.map((m) => (
                    <div key={m.label}>
                      <div
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: 800,
                          color: m.highlight ? "var(--cyan)" : "var(--text-primary)",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {m.val}
                      </div>
                      <div
                        style={{
                          fontSize: "0.68rem",
                          fontFamily: "var(--font-mono)",
                          color: "var(--text-muted)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technical Overview */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <h4
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    // System Architecture & Impact
                  </h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.98rem", lineHeight: 1.7 }}>
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Live Video Demo if available */}
                {selectedProject.video && (
                  <div style={{ marginBottom: "1.8rem" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--cyan)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          margin: 0,
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 8px #ef4444" }} />
                        LIVE PRODUCTION RECORDING FEED
                      </h4>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)" }}>
                        1080p · MP4 Feed
                      </span>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid rgba(72, 229, 255, 0.25)",
                        background: "#080c14",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                      }}
                    >
                      <video
                        src={selectedProject.video}
                        controls
                        playsInline
                        style={{
                          width: "100%",
                          maxHeight: "360px",
                          display: "block",
                          objectFit: "contain",
                          background: "#000",
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div style={{ marginBottom: "2rem" }}>
                  <h4
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.75rem",
                    }}
                  >
                    // Technologies Utilized
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.74rem",
                          color: "var(--text-primary)",
                          background: "var(--bg-surface)",
                          border: "1px solid var(--border)",
                          padding: "0.3rem 0.75rem",
                          borderRadius: "6px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cyber-primary"
                      style={{ padding: "0.8rem 1.8rem", fontSize: "0.85rem" }}
                    >
                      <span>Open Live Production App ↗</span>
                    </a>
                  )}
                  <Link
                    to="/work"
                    className="btn-cyber-secondary"
                    style={{ padding: "0.8rem 1.8rem", fontSize: "0.85rem" }}
                    onClick={() => setSelectedProject(null)}
                  >
                    <span>View in Full Project Universe →</span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
    </>
  );
}