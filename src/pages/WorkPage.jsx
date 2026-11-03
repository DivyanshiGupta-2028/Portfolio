import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero3D from "../components/PageHero3D";
import GamingVideoTheater from "../components/GamingVideoTheater";
import ProjectsUniverse from "../components/ProjectsUniverse";

/* ── Verified Case list data matching the 6 resume projects ── */
const CASES = [
  {
    num: "01",
    title: "License Administration System",
    meta: "Multi-Tenant SaaS · C# & ASP.NET Core · Angular · SQL Server",
    desc: "Multi-tenant SaaS platform for centralized license administration, assignment, and feature-based access control. Helped reduce manual license assignment effort by 40%.",
    tags: ["C#", "ASP.NET Core", "Angular", "SQL Server", "RBAC", "Multi-Tenancy"],
    badge: "VERIFIED 40% GAIN",
    badgeColor: "#48E5FF",
    accentRgb: "72,229,255",
    anchor: "#projects",
  },
  {
    num: "02",
    title: "Dating Platform – Full Stack and .NET Backend",
    meta: "Full-Stack Product · ASP.NET Core & Node.js · React · SQL Server & MySQL",
    desc: "Dating platform with user authentication, profile management, discovery, matching workflows, Google OAuth 2.0, JWT sessions, and premium subscription features.",
    tags: ["React", "Node.js", "Express.js", "ASP.NET Core", "SQL Server", "MySQL", "JWT", "OAuth 2.0"],
    badge: "LIVE RECORDING",
    badgeColor: "#ec4899",
    accentRgb: "236,72,153",
    liveLink: "https://play.google.com/apps/internaltest/4701291796801878386",
    anchor: "#projects",
  },
  {
    num: "03",
    title: "Sales Inventory Management System",
    meta: "Business Application · .NET & Angular · React · SQL Server & MySQL",
    desc: "Inventory management application with stock tracking, dynamic GST and non-GST invoice generation, modular REST APIs, and role-based access control.",
    tags: [".NET", "Angular", "React", "SQL Server", "MySQL", "JWT", "REST APIs"],
    badge: "INVOICE AUTOMATION",
    badgeColor: "#38bdf8",
    accentRgb: "56,189,248",
    anchor: "#projects",
  },
  {
    num: "04",
    title: "BellezBuy – E-Commerce Platform",
    meta: "E-Commerce System · React & Node.js · MySQL · Brevo Email Dispatch",
    desc: "E-commerce platform with product catalogue, order management, payment API integration, OTP verification emails, password resets, and transactional notifications.",
    tags: ["React", "Node.js", "MySQL", "Brevo", "Payment APIs"],
    badge: "LIVE ON PLAY STORE",
    badgeColor: "#10b981",
    accentRgb: "16,185,129",
    liveLink: "https://play.google.com/store/apps/details?id=com.Bellezbuy.app&hl=en",
    anchor: "#projects",
  },
  {
    num: "05",
    title: "WellMove – AI-Powered Wellness Platform",
    meta: "AI-Integrated Healthcare · Python & FastAPI · MySQL · JWT · AI/ML",
    desc: "AI-integrated wellness platform providing user management, health-data APIs, personalized recommendations, trend analysis, adaptive goals, and smart notification triggers.",
    tags: ["Python", "FastAPI", "MySQL", "JWT", "AI/ML", "Trend Analysis"],
    badge: "AI-INTEGRATED",
    badgeColor: "#a855f7",
    accentRgb: "168,85,247",
    liveLink: "https://wellnessphysioportal.sanskriti-tech.cloud/",
    anchor: "#projects",
  },
  {
    num: "06",
    title: "ASP.NET Calculators Suite",
    meta: "Financial Engines · ASP.NET Core MVC · Razor Pages · C# · SQL",
    desc: "Collection of web-based financial calculators: EMI, HRA, GST, TDS, Auto Loan, and Net Worth Calculators with strict decimal precision and validation.",
    tags: ["ASP.NET Core MVC", "Razor Pages", "C#", "SQL", "Financial Logic"],
    badge: "FINANCIAL ENGINES",
    badgeColor: "#f59e0b",
    accentRgb: "245,158,11",
    anchor: "#projects",
  },
];

/* ── Stats for top metrics band ── */
const STATS = [
  { val: "6", label: "PRODUCTION PROJECTS" },
  { val: "40%", label: "MANUAL EFFORT REDUCED" },
  { val: "35%", label: "CMS LOAD TIME IMPROVED" },
  { val: "Sub-45ms", label: "API LATENCY" },
];

export default function WorkPage() {
  const [openCase, setOpenCase] = useState(null);

  return (
    <main style={{ position: "relative", overflowX: "hidden", paddingTop: "80px" }}>

      {/* ── Cinematic 3D Page Hero ── */}
      <section className="section-bg-void" style={{ position: "relative", minHeight: "360px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <PageHero3D accentColor={0x48e5ff} secondColor={0x8b5cff} height={360} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(7,10,18,0.9) 0%, rgba(7,10,18,0.45) 60%, transparent 100%)", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, transparent 0%, #070A12 100%)", zIndex: 2, pointerEvents: "none" }} />

        <div className="section-container" style={{ position: "relative", zIndex: 3, paddingBottom: "2rem", paddingTop: "2rem" }}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--cyan)", letterSpacing: "0.2em", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--cyan)", boxShadow: "0 0 12px var(--cyan)" }} className="cyber-pulse" />
              CASE STUDIES // PRODUCTION ARCHIVE · 6 PROJECTS
            </div>

            <h1 style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.04em", marginBottom: "1.2rem", maxWidth: "720px" }}>
              SELECTED{" "}
              <span style={{ background: "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 22px rgba(72,229,255,0.4))" }}>
                PROJECTS.
              </span>
            </h1>

            <p style={{ color: "var(--text-secondary)", fontSize: "clamp(0.95rem, 1.6vw, 1.08rem)", lineHeight: 1.7, maxWidth: "560px" }}>
              Enterprise SaaS platforms, .NET backends, full-stack applications, and AI-integrated systems built with verified production impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Metrics Band ── */}
      <div className="section-bg-navy" style={{ borderTop: "1px solid rgba(255,121,63,0.1)", borderBottom: "1px solid rgba(255,121,63,0.1)" }}>
        <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "2.5rem 1.75rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem" }}>
          {STATS.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} className="pi-stat-block">
              <div className="pi-stat-value" style={{ background: "linear-gradient(135deg, var(--cyan), var(--purple))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.val}</div>
              <div className="pi-stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Tech Ticker ── */}
      <div className="pi-ticker-wrap">
        <div className="pi-ticker-inner">
          {[...Array(2)].flatMap(() => [
            "C#", "●", "ASP.NET Core", "●", ".NET", "●", "React", "●", "Angular", "●",
            "Node.js", "●", "Express.js", "●", "SQL Server", "●", "MySQL", "●", "FastAPI",
            "●", "JWT Authentication", "●", "OAuth 2.0", "●", "RBAC", "●", "Azure DevOps", "●",
          ]).map((item, i) => (
            item === "●"
              ? <span key={i} className="pi-ticker-dot" />
              : <span key={i} className="pi-ticker-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ── CASE STUDY LIST ── */}
      <section className="section-bg-light-cream" style={{ position: "relative" }}>
        <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 1.75rem" }}>

          {/* Section eyebrow */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "4rem", paddingBottom: "1rem" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.16em" }}>
              // ALL 6 PROJECTS
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-dim)", letterSpacing: "0.1em" }}>
              PORTFOLIO ARCHIVE
            </div>
          </div>

          {/* Case rows */}
          {CASES.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="pi-case-row"
              onClick={() => setOpenCase(openCase === c.num ? null : c.num)}
            >
              <div className="pi-case-num">{c.num}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.2rem", flexWrap: "wrap" }}>
                  <div className="pi-case-title">{c.title}</div>
                  {/* Live badge */}
                  <span style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 700,
                    letterSpacing: "0.08em", padding: "0.2rem 0.6rem",
                    border: `1px solid ${c.badgeColor}55`, borderRadius: "4px",
                    color: c.badgeColor, background: `${c.badgeColor}0f`,
                    whiteSpace: "nowrap",
                  }}>
                    {c.badge}
                  </span>
                </div>
                <div className="pi-case-meta">{c.meta}</div>
                <div className="pi-case-desc">{c.desc}</div>
                <div className="pi-case-tags">
                  {c.tags.map(t => (
                    <span key={t} className="pi-tag">{t}</span>
                  ))}
                </div>

                {/* Expandable detail row */}
                <AnimatePresence>
                  {openCase === c.num && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div style={{ paddingTop: "1.25rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        {c.liveLink && (
                          <a
                            href={c.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="btn-flat-primary"
                            style={{ textDecoration: "none", fontSize: "0.8rem", height: "38px", padding: "0 1.1rem" }}
                          >
                            ↗ OPEN LIVE
                          </a>
                        )}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            document.querySelector(c.anchor)?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="btn-flat-secondary"
                          style={{ fontSize: "0.8rem", height: "38px", padding: "0 1.1rem" }}
                        >
                          VIEW FULL SPECIFICATION ↓
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="pi-case-arrow">↗</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Gaming Video Holo-Theater (Production Screen Recordings) ── */}
      <GamingVideoTheater />

      {/* ── Deep Case Studies: Full Cards & Specifications ── */}
      <ProjectsUniverse />
    </main>
  );
}