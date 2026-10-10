import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero3D from "../components/PageHero3D";
import GamingVideoTheater from "../components/GamingVideoTheater";
import ProjectsUniverse from "../components/ProjectsUniverse";

/* ── product.inc style case list data ── */
const CASES = [
  {
    num: "01",
    title: "License Administration System",
    meta: "Enterprise SaaS · Backend Engineering · 2024–25",
    desc: "Multi-tenant SaaS licensing platform with RBAC, feature-tier entitlements, and atomic SQL Server stored procedures. Delivered 40% reduction in manual admin effort.",
    tags: [".NET", "ASP.NET Core", "Angular", "SQL Server", "RBAC", "Azure DevOps"],
    badge: "VERIFIED 40% GAIN",
    badgeColor: "#48E5FF",
    accentRgb: "72,229,255",
    anchor: "#license-admin",
  },
  {
    num: "02",
    title: "Dating Platform",
    meta: "Full-Stack Product · Secure API Design · 2024",
    desc: "Bidirectional swipe-match platform with Google OAuth2 SSO, JWT refresh-token rotation, geo-distance discovery, and subscription tiers. Live on Play Store (internal beta).",
    tags: ["React", "Node.js", "ASP.NET Core", "SQL Server", "JWT", "OAuth2", "MySQL"],
    badge: "LIVE RECORDING",
    badgeColor: "#ec4899",
    accentRgb: "236,72,153",
    liveLink: "https://play.google.com/apps/internaltest/4701291796801878386",
    anchor: "#dating-platform",
  },
  {
    num: "03",
    title: "Sales Inventory Management",
    meta: "Business Application · Inventory Automation · 2024",
    desc: "Real-time inventory tracking with dynamic GST/non-GST tax calculation engine, automated reorder triggers, and RBAC for cashiers vs. warehouse managers.",
    tags: [".NET", "ASP.NET Core", "Angular", "SQL Server", "JWT"],
    badge: "INVOICE AUTOMATION",
    badgeColor: "#38bdf8",
    accentRgb: "56,189,248",
    anchor: "#sales-inventory",
  },
  {
    num: "04",
    title: "BellezBuy E-Commerce",
    meta: "Consumer Mobile · React Native / FastAPI · 2024",
    desc: "Full-featured beauty e-commerce app with AI-powered recommendations, wishlist, coupon engine, and Razorpay payment gateway. Live on Play Store.",
    tags: ["React Native", "FastAPI", "Python", "MySQL", "Razorpay"],
    badge: "LIVE ON PLAY STORE",
    badgeColor: "#f59e0b",
    accentRgb: "245,158,11",
    liveLink: "https://play.google.com/store/apps/details?id=com.Bellezbuy.app&hl=en",
    anchor: "#bellezbuy",
  },
  {
    num: "05",
    title: "WellMove – Physiotherapy AI System",
    meta: "AI-Integrated Healthcare · 2024",
    desc: "Exercise prescription platform with AI-driven form analysis, therapist portal with RBAC dashboards, telehealth session scheduling, and real-time progress analytics.",
    tags: ["React", "FastAPI", "Node.js", "Python", "AI/ML", "JWT", "MySQL"],
    badge: "AI-INTEGRATED",
    badgeColor: "#10b981",
    accentRgb: "16,185,129",
    liveLink: "https://wellnessphysioportal.sanskriti-tech.cloud/",
    anchor: "#wellmove",
  },
  {
    num: "06",
    title: "Sanskriti CMS",
    meta: "Content Management System · 2023",
    desc: "High-performance CMS with dynamic content modules, role-based editorial workflow, and aggressive caching strategy achieving 35% page load reduction.",
    tags: [".NET", "ASP.NET Core", "SQL Server", "Angular", "CDN Caching"],
    badge: "35% LOAD REDUCTION",
    badgeColor: "#8b5cff",
    accentRgb: "139,92,255",
    anchor: "#cms",
  },
  {
    num: "07",
    title: "HR Management System",
    meta: "Enterprise Internal Tool · 2023",
    desc: "Employee lifecycle management with attendance tracking, leave requests, payroll summaries, and manager-approval workflows. Deployed internally at Sanskriti IT Solutions.",
    tags: [".NET", "ASP.NET Core", "SQL Server", "Angular", "RBAC"],
    badge: "INTERNAL DEPLOY",
    badgeColor: "#94a3b8",
    accentRgb: "148,163,184",
    anchor: "#hrms",
  },
];

/* ── Stats for the top metrics band ── */
const STATS = [
  { val: "7", label: "SHIPPED PRODUCTS" },
  { val: "40%", label: "VERIFIED EFFICIENCY GAIN" },
  { val: "3", label: "LIVE DEPLOYMENTS" },
  { val: "Sub-45ms", label: "API LATENCY" },
];

export default function WorkPage() {
  const [openCase, setOpenCase] = useState(null);

  return (
    <main style={{ position: "relative", overflowX: "hidden", paddingTop: "80px" }}>

      {/* ── Cinematic 3D Page Hero ── */}
      <section style={{ position: "relative", minHeight: "360px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <PageHero3D accentColor={0x48e5ff} secondColor={0x8b5cff} height={360} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(7,10,18,0.9) 0%, rgba(7,10,18,0.45) 60%, transparent 100%)", zIndex: 1, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "120px", background: "linear-gradient(to bottom, transparent 0%, #070A12 100%)", zIndex: 2, pointerEvents: "none" }} />

        <div className="section-container" style={{ position: "relative", zIndex: 3, paddingBottom: "2rem", paddingTop: "2rem" }}>
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--cyan)", letterSpacing: "0.2em", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--cyan)", boxShadow: "0 0 12px var(--cyan)" }} className="cyber-pulse" />
              CASE STUDIES // PRODUCTION ARCHIVE · 7 WORKS
            </div>

            <h1 style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.04em", marginBottom: "1.2rem", maxWidth: "720px" }}>
              SELECTED{" "}
              <span style={{ background: "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", filter: "drop-shadow(0 0 22px rgba(72,229,255,0.4))" }}>
                WORKS.
              </span>
            </h1>

            <p style={{ color: "var(--text-secondary)", fontSize: "clamp(0.95rem, 1.6vw, 1.08rem)", lineHeight: 1.7, maxWidth: "560px" }}>
              Enterprise backends, AI-integrated platforms, and consumer mobile apps — shipped to production with measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Metrics Band (product.inc style) ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
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
            ".NET 7", "●", "ASP.NET Core", "●", "React", "●", "Node.js", "●", "Angular", "●",
            "SQL Server", "●", "FastAPI", "●", "React Native", "●", "Azure", "●", "JWT/OAuth2",
            "●", "RBAC", "●", "AI/ML Pipeline", "●", "Razorpay", "●", "Docker",
          ]).map((item, i) => (
            item === "●"
              ? <span key={i} className="pi-ticker-dot" />
              : <span key={i} className="pi-ticker-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ── CASE STUDY LIST (product.inc rows) ── */}
      <section style={{ position: "relative" }}>
        <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "0 1.75rem" }}>

          {/* Section eyebrow */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "4rem", paddingBottom: "1rem" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.16em" }}>
              // ALL PROJECTS
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>
              2023 → PRESENT
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
                          onClick={(e) => { e.stopPropagation(); document.querySelector(c.anchor)?.scrollIntoView({ behavior: "smooth" }); }}
                          className="btn-flat-secondary"
                          style={{ fontSize: "0.8rem", height: "38px", padding: "0 1.1rem" }}
                        >
                          VIEW FULL CASE STUDY ↓
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

      {/* ── Gaming Video Holo-Theater ── */}
      <GamingVideoTheater />

      {/* ── Deep Case Studies: Full Cards ── */}
      <ProjectsUniverse />

      {/* ── Bottom CTA Band ── */}
      <div className="pi-cta-section">
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.16em", marginBottom: "1.5rem" }}>
          LOOKING TO COLLABORATE?
        </p>
        <h2 className="pi-cta-headline">
          Let's build something{" "}
          <span style={{ background: "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            that matters.
          </span>
        </h2>
        <Link to="/contact" className="btn-flat-primary" style={{ textDecoration: "none", fontSize: "0.9rem" }}>
          INITIATE CONTACT →
        </Link>
      </div>
    </main>
  );
}
