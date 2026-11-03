import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cyberAudio } from "../utils/cyberAudio";

const PROJECTS = [
  {
    id: "license-admin",
    num: "01",
    title: "License Administration System",
    category: ".NET Backend",
    subCategory: "MULTI-TENANT SAAS // BACKEND ENGINEERING",
    accent: "#48E5FF",
    badge: "VERIFIED 40% GAIN",
    desc: "Multi-tenant SaaS platform for centralized license administration and feature-based access control.",
    stack: ["C#", "ASP.NET Core", "Angular", "SQL Server"],
    metric: "40% reduction in manual license assignment effort",
    problemStatement:
      "Enterprise software deployments previously required error-prone manual license provisioning across multiple client organizations, leading to billing discrepancies, delayed onboardings, and untracked feature entitlements.",
    myContribution:
      "Contributed backend REST APIs, licensing workflows, and database operations in ASP.NET Core and SQL Server for centralized license administration and feature-based access control.",
    keyFeatures: [
      "Centralized license management.",
      "Feature-based SaaS licensing.",
      "Multi-tenancy.",
      "Role-Based Access Control.",
      "License administration workflows.",
    ],
    technicalImplementation:
      "Engineered multi-tenant database partitioning on Microsoft SQL Server with precompiled atomic stored procedures. Implemented policy-based authorization filters and centralized license assignment flows in ASP.NET Core.",
    challenges:
      "Preventing license over-allocation race conditions during simultaneous user checkouts. Solved with optimistic concurrency control and database transaction isolation levels.",
    verifiedOutcomes: [
      "Helped reduce manual license assignment effort by 40%",
      "Guaranteed multi-tenant isolation and robust access control",
      "Sub-45ms average response times across entitlement checks",
    ],
  },
  {
    id: "dating-platform",
    num: "02",
    title: "Dating Platform – Full Stack and .NET Backend",
    category: "Full-Stack",
    subCategory: "FULL-STACK PRODUCT // SECURE API DESIGN",
    accent: "#ec4899",
    badge: "LIVE RECORDING",
    liveLink: "https://play.google.com/apps/internaltest/4701291796801878386",
    liveLinkLabel: "PLAY STORE (INTERNAL BETA)",
    liveLinkType: "playstore",
    video: "/Zinkr_Ad_v6_full_edit.mp4",
    desc: "Dating platform with user authentication, profile management, discovery, matching workflows, and premium subscription features.",
    stack: ["React", "Node.js", "Express.js", "ASP.NET Core", "SQL Server", "MySQL", "JWT", "OAuth 2.0"],
    metric: "Dual OAuth 2.0 + JWT auth with low-latency matching",
    problemStatement:
      "Dating applications require fast real-time profile discovery, secure user credential handling, and reliable subscription tier workflows.",
    myContribution:
      "Developed backend REST endpoints in ASP.NET Core and Node.js; implemented Google OAuth 2.0 SSO and stateless JWT authentication; built user profile management, matching workflows, and React discovery UI.",
    keyFeatures: [
      "User authentication.",
      "Profile management.",
      "Discovery and matching.",
      "Google OAuth 2.0.",
      "JWT-based sessions.",
      "Premium subscription workflows.",
    ],
    technicalImplementation:
      "Utilized ASP.NET Core Web APIs for authentication and subscription tiers, paired with Express.js microservices for lightweight profile feeds. Implemented indexing on SQL Server and MySQL to ensure low-latency query results.",
    challenges:
      "Managing bi-directional matching state when two users swipe each other asynchronously without generating duplicate notification events.",
    verifiedOutcomes: [
      "Smooth profile discovery flows verified on live production screen recording",
      "Zero unauthorized access incidents across protected profile endpoints",
    ],
  },
  {
    id: "sales-inventory",
    num: "03",
    title: "Sales Inventory Management System",
    category: ".NET Backend",
    subCategory: "BUSINESS APPLICATION // INVENTORY AUTOMATION",
    accent: "#38bdf8",
    badge: "INVOICE AUTOMATION",
    desc: "Inventory management application with stock tracking, invoicing, modular APIs, and role-based access control.",
    stack: [".NET", "Angular", "React", "SQL Server", "MySQL", "JWT"],
    metric: "< 3s dynamic invoice generation with automated tax breakdown",
    problemStatement:
      "Businesses struggled with inventory discrepancies between sales points and warehouses, along with complex statutory compliance regarding GST calculations.",
    myContribution:
      "Developed modular REST APIs for stock tracking, inventory updates, and GST/non-GST invoice generation with role-based access control.",
    keyFeatures: [
      "Inventory and stock tracking.",
      "GST invoice generation.",
      "Non-GST invoice generation.",
      "Modular REST APIs.",
      "Role-based access control.",
    ],
    technicalImplementation:
      "Built with C# and .NET backend services utilizing modular REST APIs. Formulated stored procedures in SQL Server and MySQL with transaction locks during checkout to prevent negative inventory allocations.",
    challenges:
      "Handling split-second concurrent checkouts of the last remaining stock item without creating orphaned records.",
    verifiedOutcomes: [
      "Eliminated manual inventory reconciliation bottlenecks",
      "Generated compliant GST and non-GST commercial invoices in under 3 seconds",
    ],
  },
  {
    id: "bellezbuy",
    num: "04",
    title: "BellezBuy – E-Commerce Platform",
    category: "Full-Stack",
    subCategory: "E-COMMERCE // FULL-STACK INTEGRATION",
    accent: "#10b981",
    badge: "LIVE ON PLAY STORE",
    liveLink: "https://play.google.com/store/apps/details?id=com.Bellezbuy.app&hl=en",
    liveLinkLabel: "DOWNLOAD ON PLAY STORE",
    liveLinkType: "playstore",
    video: "/Record_2026-05-28-14-40-29.mp4",
    videoAdmin: "/VID20260529105202.mp4",
    desc: "E-commerce platform with product catalogue, order management, payment API integration, and transactional email workflows.",
    stack: ["React", "Node.js", "MySQL", "Brevo"],
    metric: "Automated OTP verification & zero duplicate order entries",
    problemStatement:
      "Online shoppers required an intuitive shopping experience with instant order receipts and secure checkout, while store administrators required real-time inventory management.",
    myContribution:
      "Built the full-stack shopping and admin experience with React and Node.js; integrated payment APIs with webhook validation; configured automated Brevo email services for OTPs and notifications.",
    keyFeatures: [
      "Product catalogue.",
      "Order management.",
      "Payment API integration.",
      "OTP verification emails.",
      "Password reset emails.",
      "Transactional notifications.",
    ],
    technicalImplementation:
      "Client frontend built in React with optimized state management. Node.js backend connects to MySQL through parameterized queries. Webhook handlers verify signatures before committing order records to prevent duplicate fulfillment.",
    challenges:
      "Handling network drops during customer checkout. Webhooks reconcile payment confirmation asynchronously even if the client disconnects.",
    verifiedOutcomes: [
      "Shipped production platform with verified customer and admin video recordings",
      "100% reliable transactional email dispatch powered by Brevo",
    ],
  },
  {
    id: "wellmove",
    num: "05",
    title: "WellMove – AI-Powered Wellness Platform",
    category: "AI Integration",
    subCategory: "AI-INTEGRATED WELLNESS // TELEMETRY",
    accent: "#a855f7",
    badge: "LIVE WEB PORTAL",
    liveLink: "https://wellnessphysioportal.sanskriti-tech.cloud/",
    liveLinkLabel: "LAUNCH PHYSIO PORTAL",
    liveLinkType: "web",
    desc: "AI-integrated wellness platform providing user management, health-data APIs, personalized recommendations, trend analysis, adaptive goals, and smart notification triggers.",
    stack: ["Python", "FastAPI", "MySQL", "JWT", "AI/ML"],
    metric: "Sub-50ms health telemetry ingestion & adaptive goal triggers",
    problemStatement:
      "Wellness platforms often present static advice rather than adapting to an individual's evolving biometric data, activity consistency, and health patterns over time.",
    myContribution:
      "Engineered FastAPI backend services for user management and health-data APIs; designed machine learning recommendation routines that calculate activity trends and trigger smart notifications.",
    keyFeatures: [
      "User management.",
      "Health-data APIs.",
      "JWT authentication.",
      "Personalized recommendations.",
      "Trend analysis.",
      "Adaptive goals.",
      "Smart notification triggers.",
    ],
    technicalImplementation:
      "FastAPI backend leverages asynchronous Python coroutines. Ingested time-series records in MySQL are analyzed by trend analysis routines to calculate personalized advice without blocking the event loop.",
    challenges:
      "Maintaining high API responsiveness while processing statistical trend calculations on user health histories.",
    verifiedOutcomes: [
      "Asynchronous non-blocking architecture handling concurrent health telemetry feeds",
      "Adaptive goal calculations based strictly on real user data inputs",
    ],
  },
  {
    id: "aspnet-calculators",
    num: "06",
    title: "ASP.NET Calculators Suite",
    category: ".NET Backend",
    subCategory: "FINANCIAL ENGINES // BUSINESS LOGIC",
    accent: "#f59e0b",
    badge: "FINANCIAL ENGINES",
    desc: "Collection of web-based financial calculators implementing precise mathematical business logic in C#.",
    stack: ["ASP.NET Core MVC", "Razor Pages", "C#", "SQL"],
    metric: "6 Production Financial & Tax Calculation Engines",
    problemStatement:
      "Financial calculators often suffer from rounding errors, inconsistent client-side math, and poor validation of boundary inputs.",
    myContribution:
      "Engineered server-side calculation engines in C# covering EMI, HRA, GST, TDS, Auto Loan, and Net Worth computations with strict decimal precision and comprehensive validation.",
    keyFeatures: [
      "EMI Calculator.",
      "HRA Calculator.",
      "GST Calculator.",
      "TDS Calculator.",
      "Auto Loan Calculator.",
      "Net Worth Calculator.",
    ],
    technicalImplementation:
      "Utilized ASP.NET Core MVC controllers and Razor Pages with strict ViewModel validation attributes. Computations executed using high-precision C# decimal types to avoid floating-point inaccuracies.",
    challenges:
      "Implementing boundary condition validation across extreme financial loan tenors and tiered tax brackets.",
    verifiedOutcomes: [
      "100% mathematical accuracy conforming to banking and tax formulas",
      "Responsive, clean UI accessible across desktop and mobile devices",
    ],
  },
];

const CATEGORIES = ["All Projects", ".NET Backend", "Full-Stack", "AI Integration"];

export default function ProjectsUniverse() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-bg-light-cream" style={{ position: "relative" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            PROJECT ARCHIVE // PRODUCTION BUILDS
          </div>
          <h2 className="section-title">
            FEATURED <span className="gradient-cyan-purple">PROJECTS.</span>
          </h2>
          <p className="section-subtitle">
            Explore 6 production applications, APIs, and systems. Each project represents verified engineering problem-solving, architectural considerations, and documented outcomes.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.6rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  cyberAudio.playClick();
                  setActiveCategory(cat);
                }}
                style={{
                  padding: "0.5rem 1.2rem",
                  borderRadius: "999px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  background: isSelected ? "var(--cyan)" : "var(--bg-surface)",
                  color: isSelected ? "#040711" : "var(--text-secondary)",
                  border: `1px solid ${isSelected ? "var(--cyan)" : "var(--border)"}`,
                  boxShadow: isSelected ? "0 0 20px var(--cyan-glow)" : "none",
                  transition: "all 0.25s ease",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div
          className="projects-universe-grid"
          style={{
            display: "grid",
            gap: "2rem",
          }}
        >
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="cyber-panel clipped-corner"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "2rem",
                cursor: "pointer",
              }}
              onClick={() => {
                cyberAudio.playClick();
                setSelectedProject(project);
              }}
              onMouseEnter={() => cyberAudio.playHover()}
            >
              <div>
                {/* Card Top Metadata */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: project.accent,
                      letterSpacing: "0.15em",
                    }}
                  >
                    PROJECT // {project.num}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          cyberAudio.playClick();
                        }}
                        style={{
                          padding: "0.25rem 0.65rem",
                          borderRadius: "4px",
                          background: "rgba(16, 185, 129, 0.15)",
                          border: "1px solid rgba(16, 185, 129, 0.5)",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.68rem",
                          color: "#34d399",
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          transition: "all 0.2s ease",
                          cursor: "pointer",
                        }}
                        title="Open live deployment in new tab"
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "#10b981",
                            boxShadow: "0 0 8px #10b981",
                            display: "inline-block",
                          }}
                        />
                        {project.liveLinkType === "playstore" ? "PLAY STORE ↗" : "LIVE PORTAL ↗"}
                      </a>
                    )}
                    <span
                      style={{
                        padding: "0.25rem 0.65rem",
                        borderRadius: "4px",
                        background: "rgba(72, 229, 255, 0.08)",
                        border: `1px solid ${project.accent}55`,
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        color: project.accent,
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Subcategory */}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.subCategory}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "0.8rem",
                    lineHeight: 1.25,
                  }}
                >
                  {project.title}
                </h3>

                {/* Video Preview if available */}
                {project.video && (
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "8px",
                      overflow: "hidden",
                      marginBottom: "1rem",
                      border: "1px solid rgba(72, 229, 255, 0.2)",
                      maxHeight: "160px",
                      background: "#000",
                    }}
                  >
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        opacity: 0.85,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "6px",
                        left: "8px",
                        background: "rgba(0,0,0,0.75)",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        color: "#48E5FF",
                      }}
                    >
                      ▶ FOOTAGE
                    </div>
                  </div>
                )}

                {/* Description */}
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    marginBottom: "1.4rem",
                  }}
                >
                  {project.desc}
                </p>

                {/* Key Features Bullet List */}
                <div style={{ marginBottom: "1.4rem" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--cyan)",
                      marginBottom: "0.5rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    KEY FEATURES:
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem", padding: 0 }}>
                    {project.keyFeatures.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        style={{
                          fontSize: "0.84rem",
                          color: "var(--text-primary)",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.45rem",
                        }}
                      >
                        <span style={{ color: "var(--cyan)", fontSize: "0.75rem" }}>▹</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginBottom: "1.6rem",
                  }}
                >
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "0.25rem 0.55rem",
                        borderRadius: "4px",
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Metric & Action */}
              <div
                style={{
                  borderTop: "1px solid rgba(72, 229, 255, 0.12)",
                  paddingTop: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--cyan)",
                  }}
                >
                  ★ {project.metric}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        cyberAudio.playClick();
                      }}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "#34d399",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        padding: "0.2rem 0.55rem",
                        borderRadius: "4px",
                        border: "1px solid rgba(16, 185, 129, 0.4)",
                        background: "rgba(16, 185, 129, 0.1)",
                      }}
                    >
                      <span>{project.liveLinkType === "playstore" ? "▶" : "🌐"}</span> LIVE ↗
                    </a>
                  )}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: project.accent,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    DETAILS <span>→</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal / Detail Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(4, 6, 12, 0.85)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1.5rem",
            }}
            onClick={() => {
              cyberAudio.playClick();
              setSelectedProject(null);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              style={{
                width: "100%",
                maxWidth: "880px",
                maxHeight: "90vh",
                overflowY: "auto",
                background: "rgba(9, 14, 28, 0.98)",
                border: "1px solid var(--cyan)",
                boxShadow: "0 0 50px rgba(72, 229, 255, 0.35)",
                borderRadius: "16px",
                padding: "2.5rem",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  cyberAudio.playClick();
                  setSelectedProject(null);
                }}
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  background: "rgba(72, 229, 255, 0.1)",
                  border: "1px solid rgba(72, 229, 255, 0.3)",
                  color: "var(--cyan)",
                  borderRadius: "8px",
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                }}
              >
                ✕
              </button>

              {/* Modal Eyebrow */}
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: selectedProject.accent,
                  letterSpacing: "0.15em",
                  marginBottom: "0.4rem",
                }}
              >
                PROJECT SPECIFICATION // {selectedProject.num} · {selectedProject.subCategory}
              </div>

              {/* Modal Title */}
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                  fontWeight: 800,
                  marginBottom: "0.8rem",
                  color: "var(--text-primary)",
                }}
              >
                {selectedProject.title}
              </h2>

              {/* Description */}
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  marginBottom: "1.4rem",
                }}
              >
                {selectedProject.desc}
              </p>

              {/* Stack Pills */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: selectedProject.liveLink ? "1.2rem" : "1.8rem",
                }}
              >
                {selectedProject.stack.map((t, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "0.3rem 0.75rem",
                      borderRadius: "6px",
                      background: "rgba(72, 229, 255, 0.08)",
                      border: "1px solid rgba(72, 229, 255, 0.25)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      color: "var(--cyan)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Live Link Action Bar */}
              {selectedProject.liveLink && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                    padding: "0.9rem 1.2rem",
                    marginBottom: "1.8rem",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(72, 229, 255, 0.08))",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                    boxShadow: "0 0 30px rgba(16, 185, 129, 0.15)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: "#10b981",
                        boxShadow: "0 0 10px #10b981",
                      }}
                    />
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "#34d399",
                          letterSpacing: "0.1em",
                        }}
                      >
                        VERIFIED PRODUCTION DEPLOYMENT
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                        {selectedProject.liveLinkType === "playstore"
                          ? "Official Google Play release"
                          : "Production web application & live portal"}
                      </div>
                    </div>
                  </div>

                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      cyberAudio.playClick();
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.6rem 1.3rem",
                      borderRadius: "6px",
                      background: "linear-gradient(135deg, #10b981, #06b6d4)",
                      color: "#040711",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textDecoration: "none",
                      boxShadow: "0 0 20px rgba(16, 185, 129, 0.4)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      cursor: "pointer",
                    }}
                  >
                    <span>{selectedProject.liveLinkType === "playstore" ? "▶" : "🌐"}</span>
                    <span>{selectedProject.liveLinkLabel}</span>
                    <span style={{ fontSize: "0.9rem" }}>↗</span>
                  </a>
                </div>
              )}

              {/* Video Player if available */}
              {selectedProject.video && (
                <div style={{ marginBottom: "2rem" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--cyan)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    // PRODUCTION SCREEN RECORDING
                  </div>
                  <video
                    src={selectedProject.video}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      borderRadius: "10px",
                      border: "1px solid rgba(72, 229, 255, 0.3)",
                      maxHeight: "360px",
                      backgroundColor: "#000",
                    }}
                  />
                  {selectedProject.videoAdmin && (
                    <div style={{ marginTop: "1rem" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          color: "var(--cyan)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        // ADMIN DASHBOARD FOOTAGE
                      </div>
                      <video
                        src={selectedProject.videoAdmin}
                        controls
                        muted
                        playsInline
                        style={{
                          width: "100%",
                          borderRadius: "10px",
                          border: "1px solid rgba(72, 229, 255, 0.3)",
                          maxHeight: "360px",
                          backgroundColor: "#000",
                        }}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Case Study Grid Sections */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Key Features */}
                <div
                  style={{
                    background: "var(--bg-surface-elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    padding: "1.2rem 1.4rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                      color: "var(--cyan)",
                      marginBottom: "0.8rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    KEY FEATURES
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", padding: 0 }}>
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.95rem", color: "var(--text-primary)" }}>
                        <span style={{ color: "var(--cyan)" }}>▹</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Problem Statement */}
                <div
                  style={{
                    background: "var(--bg-surface-elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    padding: "1.2rem 1.4rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                      color: "var(--cyan)",
                      marginBottom: "0.5rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    PROBLEM STATEMENT & CONTEXT
                  </h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {selectedProject.problemStatement}
                  </p>
                </div>

                {/* Engineering Role & Contribution */}
                <div
                  style={{
                    background: "var(--bg-surface-elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    padding: "1.2rem 1.4rem",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                      color: "var(--cyan)",
                      marginBottom: "0.5rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    ENGINEERING CONTRIBUTIONS
                  </h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {selectedProject.myContribution}
                  </p>
                </div>

                {/* Technical Implementation & Challenges */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.2rem",
                  }}
                  className="modal-dual-col"
                >
                  <div
                    style={{
                      background: "var(--bg-surface-elevated)",
                      border: "1px solid var(--border)",
                      borderRadius: "10px",
                      padding: "1.2rem 1.4rem",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.82rem",
                        color: "var(--cyan)",
                        marginBottom: "0.5rem",
                        letterSpacing: "0.08em",
                      }}
                    >
                      TECHNICAL IMPLEMENTATION
                    </h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.55 }}>
                      {selectedProject.technicalImplementation}
                    </p>
                  </div>

                  <div
                    style={{
                      background: "var(--bg-surface-elevated)",
                      border: "1px solid var(--border)",
                      borderRadius: "10px",
                      padding: "1.2rem 1.4rem",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.82rem",
                        color: "var(--purple)",
                        marginBottom: "0.5rem",
                        letterSpacing: "0.08em",
                      }}
                    >
                      CHALLENGES & RESOLUTION
                    </h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.55 }}>
                      {selectedProject.challenges}
                    </p>
                  </div>
                </div>

                {/* Verified Outcomes */}
                {selectedProject.verifiedOutcomes && (
                  <div
                    style={{
                      background: "rgba(16, 185, 129, 0.08)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      borderRadius: "10px",
                      padding: "1.2rem 1.4rem",
                    }}
                  >
                    <h4
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.82rem",
                        color: "#34d399",
                        marginBottom: "0.6rem",
                        letterSpacing: "0.08em",
                      }}
                    >
                      VERIFIED OUTCOMES
                    </h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem", padding: 0 }}>
                      {selectedProject.verifiedOutcomes.map((outc, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.9rem", color: "#e2e8f0" }}>
                          <span style={{ color: "#34d399" }}>✔</span>
                          <span>{outc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .modal-dual-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}