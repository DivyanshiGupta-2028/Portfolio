import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { cyberAudio } from "../utils/cyberAudio";

const PROJECTS_DATA = [
  {
    id: "license-admin",
    num: "01",
    title: "License Administration System",
    category: "Enterprise SaaS",
    role: "Lead Backend & Architecture Engineer",
    company: "Sanskriti IT Solutions",
    period: "2024 – 2025",
    desc: "Multi-tenant SaaS licensing platform with granular RBAC, feature-tier entitlements, and atomic SQL Server stored procedures. Delivered 40% reduction in manual admin intervention.",
    metrics: [
      { label: "Admin Effort Reduction", val: "40%", highlight: true },
      { label: "API Latency", val: "Sub-45ms" },
      { label: "Isolation Level", val: "Multi-Tenant" },
    ],
    tags: ["ASP.NET Core", ".NET 7+", "Angular", "SQL Server", "RBAC", "Azure DevOps"],
    badge: "VERIFIED 40% GAIN",
    badgeColor: "#48E5FF",
    demoUrl: null,
    githubUrl: null,
    overview: "Architected enterprise licensing system supporting multi-tier customer provisioning, automated subscription renew triggers, and RBAC matrix. Integrated with ASP.NET Core asynchronous controllers and optimized T-SQL query plans.",
  },
  {
    id: "dating-platform",
    num: "02",
    title: "Dating Platform & Real-Time Discovery",
    category: "Fullstack",
    role: "Full-Stack Architect",
    company: "Sanskriti IT Solutions",
    period: "2024",
    desc: "Bidirectional swipe-match platform with Google OAuth2 SSO, JWT refresh-token rotation, geo-distance discovery, and subscription tiers. Live on Play Store (internal beta).",
    metrics: [
      { label: "Auth Flow", val: "OAuth2 + JWT", highlight: true },
      { label: "Discovery Engine", val: "Geo-Spatial" },
      { label: "Status", val: "Play Store Beta" },
    ],
    tags: ["React", "Node.js", "ASP.NET Core", "SQL Server", "JWT", "OAuth2", "MySQL"],
    badge: "LIVE RECORDING",
    badgeColor: "#ec4899",
    demoUrl: "https://play.google.com/apps/internaltest/4701291796801878386",
    githubUrl: null,
    overview: "Built complete matching and messaging subsystem with token-rotation security, profile verification flows, and low-latency API contracts.",
  },
  {
    id: "bellezbuy",
    num: "03",
    title: "BellezBuy E-Commerce Mobile App",
    category: "Mobile Apps",
    role: "Mobile & Backend Developer",
    company: "Sanskriti IT Solutions",
    period: "2024",
    desc: "Full-featured beauty e-commerce app with AI-powered recommendations, wishlist, coupon engine, and Razorpay payment gateway. Live in production on Google Play Store.",
    metrics: [
      { label: "Store Status", val: "Live On Play Store", highlight: true },
      { label: "Payment Engine", val: "Razorpay Webhooks" },
      { label: "Engine", val: "FastAPI + React Native" },
    ],
    tags: ["React Native", "FastAPI", "Python", "MySQL", "Razorpay", "REST APIs"],
    badge: "LIVE ON PLAY STORE",
    badgeColor: "#f59e0b",
    demoUrl: "https://play.google.com/store/apps/details?id=com.Bellezbuy.app&hl=en",
    githubUrl: null,
    overview: "Engineered mobile storefront, catalog search, order lifecycle management, and secure webhook validation for payment callbacks.",
  },
  {
    id: "wellmove",
    num: "04",
    title: "WellMove – Physiotherapy AI Portal",
    category: "AI & Healthcare",
    role: "Full-Stack AI Integration",
    company: "Sanskriti IT Solutions",
    period: "2024",
    desc: "Exercise prescription platform with AI-driven form analysis, therapist portal with RBAC dashboards, telehealth session scheduling, and real-time progress analytics.",
    metrics: [
      { label: "AI Integration", val: "Computer Vision Form Analysis", highlight: true },
      { label: "Portal Access", val: "Therapist & Patient RBAC" },
      { label: "Deployment", val: "Live Production Cloud" },
    ],
    tags: ["React", "FastAPI", "Node.js", "Python", "AI/ML", "JWT", "MySQL"],
    badge: "AI-INTEGRATED",
    badgeColor: "#10b981",
    demoUrl: "https://wellnessphysioportal.sanskriti-tech.cloud/",
    githubUrl: null,
    overview: "Bridged Python/FastAPI computer-vision processing pipelines with React dashboards to allow clinical staff to review patient rehabilitation compliance.",
  },
  {
    id: "sales-inventory",
    num: "05",
    title: "Sales & Inventory Automation Engine",
    category: "Enterprise SaaS",
    role: "Backend Engineer",
    company: "Sanskriti IT Solutions",
    period: "2024",
    desc: "Real-time inventory tracking with dynamic GST/non-GST tax calculation engine, automated reorder triggers, and RBAC for cashiers vs. warehouse managers.",
    metrics: [
      { label: "Tax Calculation", val: "GST & Non-GST Engine", highlight: true },
      { label: "Reorder Trigger", val: "Real-Time Thresholds" },
      { label: "Architecture", val: "ASP.NET Core + SQL Server" },
    ],
    tags: [".NET", "ASP.NET Core", "Angular", "SQL Server", "JWT", "Stored Procedures"],
    badge: "INVOICE AUTOMATION",
    badgeColor: "#38bdf8",
    demoUrl: null,
    githubUrl: null,
    overview: "Implemented atomic stock deduction, ledger updates, and complex multi-item invoice generation with instant tax breakdowns.",
  },
  {
    id: "sanskriti-cms",
    num: "06",
    title: "Sanskriti Enterprise CMS & CDN Engine",
    category: "Enterprise SaaS",
    role: "Fullstack Engineer",
    company: "Sanskriti IT Solutions",
    period: "2023",
    desc: "High-performance CMS with dynamic content modules, role-based editorial workflow, and aggressive CDN caching strategy achieving 35% page load reduction.",
    metrics: [
      { label: "Load Time Reduction", val: "35%", highlight: true },
      { label: "Caching", val: "CDN Edge + In-Memory" },
      { label: "Workflow", val: "Editorial Approval Tiers" },
    ],
    tags: [".NET", "ASP.NET Core", "SQL Server", "Angular", "CDN Caching", "REST APIs"],
    badge: "35% LOAD REDUCTION",
    badgeColor: "#8b5cff",
    demoUrl: null,
    githubUrl: null,
    overview: "Built modular block architecture and caching layer that drastically lowered database round-trips for high-traffic media pages.",
  },
  {
    id: "hrms",
    num: "07",
    title: "Internal HR Management & Payroll Suite",
    category: "Enterprise SaaS",
    role: "Fullstack Engineer",
    company: "Sanskriti IT Solutions",
    period: "2023",
    desc: "Employee lifecycle management with attendance tracking, leave requests, payroll summaries, and manager-approval workflows. Deployed internally at Sanskriti IT Solutions.",
    metrics: [
      { label: "Adoption", val: "100% Internal Staff", highlight: true },
      { label: "Security", val: "Hierarchical RBAC" },
      { label: "Stack", val: ".NET Core + Angular" },
    ],
    tags: [".NET", "ASP.NET Core", "SQL Server", "Angular", "RBAC", "Reporting"],
    badge: "INTERNAL DEPLOY",
    badgeColor: "#94a3b8",
    demoUrl: null,
    githubUrl: null,
    overview: "Streamlined corporate leave requests, automated month-end payroll calculation, and integrated role-based security hierarchy.",
  },
];

const CATEGORIES = [
  "All Tracks",
  "Enterprise SaaS",
  "Fullstack",
  "Mobile Apps",
  "AI & Healthcare",
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
    <section
      id="discovery-matrix"
      style={{
        position: "relative",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        background: "radial-gradient(ellipse at 50% 0%, #0d1222 0%, #05070e 60%)",
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
            DISCOVERY ENGINE // UBER CAREERS & PRODUCT.INC MATRIX
          </div>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            SEARCH ARCHITECTURE &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)",
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
            Explore verified backend architectures, fullstack applications, and AI integrations. Filter by domain or search tech stack keywords.
          </p>
        </div>

        {/* Uber Search Box */}
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
            placeholder="Search ASP.NET Core, React, SQL Server, AI/ML, RBAC, latency..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.5)",
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
            {filteredProjects.length} {filteredProjects.length === 1 ? "Result" : "Results"}
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

        {/* Detailed Modal / Deep-Dive Drawer (Uber + Product.inc style) */}
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
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    color: "#ffffff",
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
                    color: "#ffffff",
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
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
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
                          color: m.highlight ? "var(--cyan)" : "#ffffff",
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
                      color: "rgba(255, 255, 255, 0.5)",
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

                {/* Tech Stack Chips */}
                <div style={{ marginBottom: "2rem" }}>
                  <h4
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "rgba(255, 255, 255, 0.5)",
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
                          color: "#ffffff",
                          background: "rgba(255, 255, 255, 0.08)",
                          border: "1px solid rgba(255, 255, 255, 0.14)",
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
  );
}
