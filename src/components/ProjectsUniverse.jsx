import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cyberAudio } from "../utils/cyberAudio";

const PROJECTS = [
  {
    id: "license-admin",
    num: "01",
    title: "License Administration System",
    category: "Enterprise",
    subCategory: "ENTERPRISE SAAS / BACKEND ENGINEERING",
    accent: "#48E5FF",
    badge: "VERIFIED 40% GAIN",
    desc: "A multi-tenant SaaS licensing system designed for centralized license administration, assignment, and feature-based access control.",
    stack: ["C#", ".NET", "ASP.NET Core", "Angular", "SQL Server", "RBAC", "Azure DevOps"],
    metric: "40% reduction in manual license assignment effort",
    problemStatement:
      "Enterprise software deployments previously required error-prone manual license provisioning across multiple client organizations, leading to billing discrepancies, delayed onboardings, and untracked feature entitlements.",
    myContribution:
      "Architected backend micro-services and Web APIs in ASP.NET Core; engineered multi-tenant schema partitioning and stored procedures in SQL Server; implemented role-based authorization filters and centralized license assignment flows.",
    keyFeatures: [
      "Centralized multi-tenant license administration console",
      "Feature-based SaaS tier licensing and dynamic entitlement toggles",
      "Hierarchical Role-Based Access Control (RBAC) with audit trail",
      "Atomic SQL Server stored procedures preventing duplicate license allocations",
      "High-efficiency API endpoints integrated with Angular enterprise frontend",
      "Continuous deployment pipelines configured via Azure DevOps",
    ],
    technicalImplementation:
      "Developed using ASP.NET Core dependency injection and custom policy-based authorization middleware. Multi-tenancy was enforced at the query pipeline level, ensuring absolute tenant data isolation. Optimized SQL Server execution plans to process bulk tenant operations without table contention.",
    challenges:
      "Preventing license over-allocation race conditions during simultaneous user checkouts. Solved with optimistic concurrency tokens and database transaction isolation levels.",
    verifiedOutcomes: [
      "Reduced manual license assignment effort by 40% across administrative workflows",
      "Guaranteed tenant isolation with zero data leakage across multi-tenant boundaries",
      "Sub-45ms average response times on high-frequency entitlement checks",
    ],
  },
  {
    id: "dating-platform",
    num: "02",
    title: "Dating Platform",
    category: "Full-Stack",
    subCategory: "FULL-STACK PRODUCT / SECURE API DESIGN",
    accent: "#ec4899",
    badge: "LIVE RECORDING",
    liveLink: "https://play.google.com/apps/internaltest/4701291796801878386",
    liveLinkLabel: "PLAY STORE (INTERNAL BETA)",
    liveLinkType: "playstore",
    video: "/Record_2026-05-28-14-45-33.mp4",
    desc: "A dating platform with user authentication, profile management, discovery, matching workflows, and subscription-based premium features.",
    stack: ["React", "Node.js", "Express.js", "ASP.NET Core", "SQL Server", "MySQL", "JWT", "Google OAuth2"],
    metric: "Instant swipe-to-match & secure SSO token lifecycle",
    problemStatement:
      "Dating applications require high concurrency during peak evening hours, sub-second profile discovery based on preference algorithms, and rock-solid privacy protection around user chats and personal details.",
    myContribution:
      "Engineered backend REST endpoints in ASP.NET Core and Node.js; implemented Google OAuth2 SSO and stateless JWT authentication with refresh token rotation; created match-evaluation algorithms and responsive React discovery interfaces.",
    keyFeatures: [
      "Dual authentication: Google OAuth2 single sign-on + email verification",
      "JWT-based session authentication with protected route middleware",
      "Dynamic profile discovery with geo-distance and preference filtering",
      "Bidirectional swipe matching workflow with low-latency notification triggers",
      "Subscription tier permissions unlocking premium search filters",
    ],
    technicalImplementation:
      "Utilized ASP.NET Core 7 Web APIs for authentication and subscription tiers, paired with Express.js microservices for lightweight profile feeds. Implemented SQL Server indexing on geo-coordinates and preference attributes to ensure low-latency query results.",
    challenges:
      "Handling bi-directional matching state when two users swipe each other asynchronously without generating duplicate notification events.",
    verifiedOutcomes: [
      "Smooth profile discovery flows verified on live production screen recording",
      "Zero unauthorized access incidents across protected profile endpoints",
    ],
  },
  {
    id: "sales-inventory",
    num: "03",
    title: "Sales Inventory Management",
    category: "Backend",
    subCategory: "BUSINESS APPLICATION / INVENTORY AUTOMATION",
    accent: "#38bdf8",
    badge: "INVOICE AUTOMATION",
    desc: "An inventory management system supporting product and stock tracking, modular APIs, access control, and GST/non-GST invoice generation.",
    stack: [".NET", "ASP.NET Core", "Angular", "SQL Server", "JWT", "Stored Procedures"],
    metric: "< 3s dynamic invoice generation with automated tax breakdown",
    problemStatement:
      "Retail and wholesale distributors struggled with inventory discrepancies between point-of-sale terminals and back-office warehouses, along with complex statutory compliance regarding GST calculations.",
    myContribution:
      "Developed modular .NET Web API services for stock intake, barcode scanning, and invoice generation; created automated GST/non-GST tax calculation engines; optimized database queries for inventory transactions.",
    keyFeatures: [
      "Real-time product catalog & stock level telemetry",
      "Dynamic GST & non-GST tax calculation engine with PDF invoice compiling",
      "Automated low-inventory thresholds and reorder triggers",
      "Role-Based Access Control partitioning cashiers from warehouse managers",
      "Modular backend services designed for multi-store deployment",
    ],
    technicalImplementation:
      "Built with C# and .NET backend services utilizing Unit of Work and Repository design patterns. Formulated T-SQL stored procedures with row-level locks during checkout to prevent negative inventory allocations.",
    challenges:
      "Handling split-second concurrent checkouts of the last remaining stock item without creating orphaned payment records.",
    verifiedOutcomes: [
      "Eliminated manual inventory reconciliation bottlenecks",
      "Generated compliant GST and non-GST commercial invoices in under 3 seconds",
    ],
  },
  {
    id: "bellezbuy",
    num: "04",
    title: "BellezBuy — E-Commerce",
    category: "Full-Stack",
    subCategory: "E-COMMERCE / FULL-STACK INTEGRATION",
    accent: "#10b981",
    badge: "LIVE ON PLAY STORE",
    liveLink: "https://play.google.com/store/apps/details?id=com.Bellezbuy.app&hl=en",
    liveLinkLabel: "DOWNLOAD ON PLAY STORE",
    liveLinkType: "playstore",
    video: "/Record_2026-05-28-14-40-29.mp4",
    videoAdmin: "/VID20260529105202.mp4",
    desc: "An e-commerce platform focused on product catalogues, order management, payment integrations, and transactional communication.",
    stack: ["React", "Node.js", "MySQL", "Brevo API", "Razorpay / Payment Gateway", "CSS Modules"],
    metric: "Automated OTP verification & zero duplicate order entries",
    problemStatement:
      "Online boutique buyers required an intuitive shopping experience with instant order receipts and secure checkout, while store administrators required real-time inventory management.",
    myContribution:
      "Built the full-stack shopping and admin experience with React and Node.js; integrated payment gateways with cryptographic webhook verification; configured automated Brevo email services for OTPs and invoices.",
    keyFeatures: [
      "Interactive responsive product catalog with search, filter, and sorting",
      "Cart management and secure order checkout workflows",
      "Cryptographically verified payment gateway webhook integration",
      "Automated transactional emails: OTP authentication, password resets, and order confirmations via Brevo",
      "Dedicated merchant admin dashboard for inventory tracking and status updates",
    ],
    technicalImplementation:
      "Client frontend built in React with optimized component state. Node.js Express backend connects to MySQL through parameterized queries. Webhook handlers verify SHA-256 signatures before committing order records to prevent duplicate fulfillment.",
    challenges:
      "Handling network drops during customer checkout. Webhooks reconcile payment confirmation asynchronously even if the browser window closes.",
    verifiedOutcomes: [
      "Shipped production platform with verified customer and admin video recordings",
      "100% reliable transactional email dispatch powered by Brevo API",
    ],
  },
  {
    id: "wellmove",
    num: "05",
    title: "WellMove — AI Wellness Platform",
    category: "AI / Integration",
    subCategory: "AI-INTEGRATED BACKEND / PERSONALIZATION",
    accent: "#a855f7",
    badge: "LIVE WEB PORTAL",
    liveLink: "https://wellnessphysioportal.sanskriti-tech.cloud/",
    liveLinkLabel: "LAUNCH PHYSIO PORTAL",
    liveLinkType: "web",
    desc: "An AI-integrated wellness platform with user-management and health-data APIs, personalized recommendation workflows, adaptive goals, and smart notifications.",
    stack: ["Python", "FastAPI", "REST APIs", "AI/ML Integration", "MySQL", "JWT", "Pydantic"],
    metric: "Sub-50ms health telemetry ingestion & adaptive goal triggers",
    problemStatement:
      "Wellness applications often present static advice rather than adapting to an individual's evolving biometric data, activity consistency, and sleep patterns over time.",
    myContribution:
      "Engineered FastAPI backend services for user profiles and biometric metric ingestion; designed machine learning recommendation routines that calculate activity trends and trigger personalized wellness reminders.",
    keyFeatures: [
      "FastAPI asynchronous endpoints accepting continuous health metrics",
      "JWT-based security ensuring sensitive health telemetry remains private",
      "Trend analysis algorithms evaluating multi-week activity patterns",
      "Personalized recommendation workflows suggesting customized routines",
      "Adaptive goal-setting system that recalibrates daily targets based on progress",
      "Automated notification triggers based on user streaks and milestone completion",
    ],
    technicalImplementation:
      "FastAPI backend leverages asynchronous Python coroutines and Pydantic schema validation. Ingested time-series records are analyzed by algorithmic pipelines to generate personalized advice without blocking the main event loop.",
    challenges:
      "Maintaining high API responsiveness while processing complex statistical trend calculations on user health histories.",
    verifiedOutcomes: [
      "Asynchronous non-blocking architecture capable of handling concurrent health telemetry feeds",
      "Automated adaptive goal calculations based strictly on real user data inputs",
    ],
  },
  {
    id: "aspnet-calculators",
    num: "06",
    title: "ASP.NET Calculators Suite",
    category: "Backend",
    subCategory: "WEB APPLICATIONS / BUSINESS LOGIC",
    accent: "#f59e0b",
    badge: "FINANCIAL ENGINES",
    desc: "Interactive financial and tax utility suite powered by ASP.NET Core MVC & Razor Pages implementing precise mathematical business logic.",
    stack: ["ASP.NET Core MVC", "Razor Pages", "C#", "SQL Server", "Bootstrap"],
    metric: "6 Production Financial & Tax Calculation Engines",
    problemStatement:
      "Financial calculators often suffer from rounding errors, inconsistent client-side JavaScript math, and poor validation of negative or boundary inputs.",
    myContribution:
      "Engineered server-side calculation engines in C# covering EMI, HRA, GST, TDS, Auto Loan, and Net Worth computations with strict decimal precision and comprehensive server-side validation.",
    keyFeatures: [
      "EMI Calculator: Amortization schedules with compound interest algorithms",
      "HRA Calculator: Indian tax exemption clauses comparing salary components",
      "GST Calculator: Forward and reverse GST tax liability breakdown",
      "TDS Calculator: Section-wise withholding tax computation",
      "Auto Loan Calculator: Principal, interest, down-payment, and tenor optimization",
      "Net Worth Calculator: Asset and liability balance sheet aggregator",
    ],
    technicalImplementation:
      "Utilized ASP.NET Core MVC controllers with strict ViewModel validation attributes. Computations executed using high-precision C# decimal types to avoid floating-point inaccuracies.",
    challenges:
      "Implementing boundary condition validation across extreme financial loan tenors and tiered tax brackets.",
    verifiedOutcomes: [
      "100% mathematical accuracy conforming to banking and tax formulas",
      "Responsive, clean UI accessible across desktop and mobile devices",
    ],
  },
  {
    id: "boutique-management",
    num: "07",
    title: "Boutique Management System",
    category: "Enterprise",
    subCategory: "BUSINESS AUTOMATION / OPERATIONS",
    accent: "#8B5CFF",
    badge: "STORE OPERATIONS",
    desc: "A refined commerce operations dashboard with connected inventory, customer order processing, and sales tracking.",
    stack: ["React", "Node.js", "SQL Server", "REST APIs", "Express.js"],
    metric: "Unified customer order tracking & inventory sync",
    problemStatement:
      "Independent boutiques frequently handle custom alterations, advance deposits, and bespoke inventory orders using disjointed paper notebooks, resulting in lost customer history.",
    myContribution:
      "Created an operational dashboard uniting customer contact profiles, tailored order specs, fabric inventory, and payment milestones into a single relational database.",
    keyFeatures: [
      "Customer registry with order history and tailored sizing profiles",
      "Real-time fabric and garment inventory tracking",
      "Order processing with advance deposit and final settlement logging",
      "Administrative sales summaries and daily business insights",
      "Clean, modern UI designed for touchscreen store counter tablets",
    ],
    technicalImplementation:
      "React SPA communicating with Node.js Express endpoints, querying a structured Microsoft SQL Server schema. Implemented foreign key constraints and transactional saves to maintain relationship integrity between orders and customers.",
    challenges:
      "Designing a flexible schema capable of accommodating custom bespoke orders alongside off-the-rack inventory items.",
    verifiedOutcomes: [
      "Centralized store operations eliminating paper order slips",
      "Instant lookup of customer past measurements and transaction history",
    ],
  },
];

const CATEGORIES = ["All Projects", "Backend", "Full-Stack", "Enterprise", "AI / Integration"];

export default function ProjectsUniverse() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" style={{ position: "relative" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            MISSION ARCHIVES // PRODUCTION BUILDS
          </div>
          <h2 className="section-title">
            PROJECTS ARE <span className="gradient-cyan-purple">THE PROOF.</span>
          </h2>
          <p className="section-subtitle">
            Explore the applications, APIs, and systems I've worked on. Each project represents real problem-solving, architectural considerations, and verified outcomes.
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
                  background: isSelected ? "var(--cyan)" : "rgba(12, 18, 34, 0.7)",
                  color: isSelected ? "#040711" : "var(--text-secondary)",
                  border: `1px solid ${isSelected ? "var(--cyan)" : "rgba(72, 229, 255, 0.2)"}`,
                  boxShadow: isSelected ? "0 0 20px rgba(72, 229, 255, 0.3)" : "none",
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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
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
                    MISSION // {project.num}
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
                    color: "#ffffff",
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

                {/* Tech Stack Pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginBottom: "1.6rem",
                  }}
                >
                  {project.stack.slice(0, 5).map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "0.25rem 0.55rem",
                        borderRadius: "4px",
                        background: "rgba(12, 18, 34, 0.8)",
                        border: "1px solid rgba(72, 229, 255, 0.15)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span
                      style={{
                        padding: "0.25rem 0.55rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      +{project.stack.length - 5} more
                    </span>
                  )}
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
                    CASE STUDY <span>→</span>
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
                MISSION CASE STUDY // {selectedProject.num} · {selectedProject.subCategory}
              </div>

              {/* Modal Title */}
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                  fontWeight: 800,
                  marginBottom: "0.8rem",
                  color: "#ffffff",
                }}
              >
                {selectedProject.title}
              </h2>

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
                {/* Problem Statement */}
                <div
                  style={{
                    background: "rgba(12, 18, 34, 0.6)",
                    border: "1px solid rgba(72, 229, 255, 0.15)",
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
                    [01] PROBLEM STATEMENT
                  </h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {selectedProject.problemStatement}
                  </p>
                </div>

                {/* My Contribution */}
                <div
                  style={{
                    background: "rgba(12, 18, 34, 0.6)",
                    border: "1px solid rgba(72, 229, 255, 0.15)",
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
                    [02] ENGINEERING ROLE & CONTRIBUTIONS
                  </h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {selectedProject.myContribution}
                  </p>
                </div>

                {/* Key Features */}
                <div
                  style={{
                    background: "rgba(12, 18, 34, 0.6)",
                    border: "1px solid rgba(72, 229, 255, 0.15)",
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
                    [03] ARCHITECTURAL FEATURES
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--text-primary)" }}>
                        <span style={{ color: "var(--cyan)" }}>▹</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
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
                      background: "rgba(12, 18, 34, 0.6)",
                      border: "1px solid rgba(72, 229, 255, 0.15)",
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
                      [04] TECHNICAL IMPLEMENTATION
                    </h4>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.55 }}>
                      {selectedProject.technicalImplementation}
                    </p>
                  </div>

                  <div
                    style={{
                      background: "rgba(12, 18, 34, 0.6)",
                      border: "1px solid rgba(72, 229, 255, 0.15)",
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
                      [05] CHALLENGES & RESOLUTION
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
                      [06] VERIFIED OUTCOMES
                    </h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
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
