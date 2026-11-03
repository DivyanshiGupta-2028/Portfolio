import { useState } from "react";
import { cyberAudio } from "../utils/cyberAudio";

const SKILL_CATEGORIES = [
  {
    id: "languages",
    label: "Programming Languages",
    icon: "💻",
    color: "#0284c7",
    colorLight: "#0284c7",
    colorDark: "#38bdf8",
    skills: [
      { name: "C#", role: "Primary language for ASP.NET Core Web APIs, multi-tenant services, and business logic", projects: ["License Admin", "Dating Platform", "ASP.NET Calculators"] },
      { name: "JavaScript", role: "Modern asynchronous ES6+ execution, DOM APIs, and full-stack event handling", projects: ["BellezBuy", "Dating Platform"] },
      { name: "TypeScript", role: "Compile-time type safety across Angular enterprise modules and React components", projects: ["License Admin", "Sales Inventory"] },
      { name: "Python", role: "Asynchronous backend development and algorithmic data processing with FastAPI", projects: ["WellMove Wellness"] },
      { name: "SQL / T-SQL", role: "Relational querying, stored procedures, joins, and database constraints", projects: ["License Admin", "Sales Inventory", "ASP.NET Calculators"] },
      { name: "HTML", role: "Semantic, accessible document structures and SEO optimization", projects: ["All Projects"] },
      { name: "CSS", role: "Responsive styling, Flexbox, CSS Grid, media queries, and design systems", projects: ["All Projects"] },
    ],
  },
  {
    id: "backend",
    label: "Backend Development",
    icon: "⚡",
    color: "#7c3aed",
    colorLight: "#7c3aed",
    colorDark: "#a78bfa",
    skills: [
      { name: "ASP.NET Core", role: "High-throughput Web APIs, dependency injection, and middleware orchestration", projects: ["License Admin", "Dating Platform"] },
      { name: ".NET", role: "Unified cross-platform framework powering enterprise microservices and desktop-grade speed", projects: ["License Admin", "Sales Inventory"] },
      { name: "ASP.NET Core MVC", role: "Server-side MVC controllers, ViewModels, and razor views for business applications", projects: ["ASP.NET Calculators Suite"] },
      { name: "Razor Pages", role: "Page-based web UI scenarios and financial form computation", projects: ["ASP.NET Calculators Suite"] },
      { name: "Node.js", role: "Asynchronous I/O runtime powering full-stack backends and lightweight services", projects: ["BellezBuy", "Dating Platform"] },
      { name: "Express.js", role: "Routing, middleware pipelines, and API endpoints for web platforms", projects: ["BellezBuy", "Dating Platform"] },
      { name: "FastAPI", role: "Modern asynchronous Python REST APIs with automatic OpenAPI documentation", projects: ["WellMove Wellness"] },
    ],
  },
  {
    id: "frontend",
    label: "Frontend Development",
    icon: "🎨",
    color: "#0891b2",
    colorLight: "#0891b2",
    colorDark: "#22d3ee",
    skills: [
      { name: "React", role: "Component architecture, hooks, state orchestration, and responsive SPAs", projects: ["BellezBuy", "Dating Platform", "Sales Inventory"] },
      { name: "Angular", role: "Enterprise modular frontend with TypeScript, lazy loading, and reactive services", projects: ["License Admin", "Sales Inventory"] },
      { name: "HTML", role: "Structured markup, semantic landmarks, and WCAG accessibility", projects: ["All Projects"] },
      { name: "CSS", role: "Responsive layouts, animations, transitions, and CSS custom properties", projects: ["All Projects"] },
      { name: "JavaScript", role: "Client-side scripting, event handling, and asynchronous API calls", projects: ["BellezBuy", "Dating Platform"] },
      { name: "TypeScript", role: "Strict type checking, interfaces, and maintainable frontend architecture", projects: ["License Admin", "Sales Inventory"] },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "🗄️",
    color: "#059669",
    colorLight: "#059669",
    colorDark: "#34d399",
    skills: [
      { name: "Microsoft SQL Server", role: "Enterprise relational database design, indexing, transactions, and ACID compliance", projects: ["License Admin", "Dating Platform", "Sales Inventory", "ASP.NET Calculators"] },
      { name: "MySQL", role: "Relational database modeling, schema design, and query optimization", projects: ["BellezBuy", "WellMove Wellness", "Sales Inventory"] },
      { name: "Stored Procedures", role: "Precompiled database queries ensuring atomic updates, security, and low latency", projects: ["License Admin", "Sales Inventory"] },
      { name: "Query Optimization", role: "Execution plan analysis, index tuning, and deadlock elimination", projects: ["License Admin", "Sales Inventory"] },
      { name: "Dapper", role: "High-performance micro-ORM for low-overhead database querying", projects: ["License Admin System"] },
    ],
  },
  {
    id: "security",
    label: "Authentication and Security",
    icon: "🔐",
    color: "#d97706",
    colorLight: "#d97706",
    colorDark: "#fbbf24",
    skills: [
      { name: "REST APIs", role: "Stateless HTTP service contracts, status codes, and JSON schemas", projects: ["All Projects"] },
      { name: "API Integration", role: "Integrating third-party payment gateways, messaging, and identity services", projects: ["BellezBuy", "WellMove", "Dating Platform"] },
      { name: "JWT Authentication", role: "Stateless token-based authorization with claims verification", projects: ["License Admin", "Dating Platform", "Sales Inventory", "WellMove"] },
      { name: "Google OAuth 2.0", role: "Single sign-on identity verification and OAuth 2.0 handshake", projects: ["Dating Platform", "License Admin"] },
      { name: "Role-Based Access Control (RBAC)", role: "Granular authorization partitioning user permissions across organizational roles", projects: ["License Admin", "Sales Inventory"] },
      { name: "Multi-Tenancy", role: "SaaS organizational tenant isolation and partitioned database scoping", projects: ["License Admin System"] },
      { name: "Authentication and Authorization", role: "Policy-based access, permission filters, and secure session management", projects: ["All Projects"] },
      { name: "Audit Logging", role: "Structured activity tracking and compliance records for sensitive operations", projects: ["License Admin System"] },
    ],
  },
  {
    id: "devops",
    label: "DevOps and Tools",
    icon: "🛠️",
    color: "#db2777",
    colorLight: "#db2777",
    colorDark: "#f472b6",
    skills: [
      { name: "Git", role: "Distributed version control, branching strategies, and commit hygiene", projects: ["All Projects"] },
      { name: "GitHub", role: "Remote repository management, pull requests, and collaborative code reviews", projects: ["All Projects"] },
      { name: "Azure DevOps", role: "Automated CI/CD build pipelines, release gates, and board tracking", projects: ["License Admin", "Sanskriti IT"] },
      { name: "Docker", role: "Containerization of microservices for consistent development and staging", projects: ["WellMove", "Backend Systems"] },
      { name: "Postman", role: "API contract testing, environment variables, and endpoint validation", projects: ["All Projects"] },
      { name: "CI/CD", role: "Continuous integration and automated delivery pipelines", projects: ["License Admin"] },
      { name: "OOP", role: "Object-oriented programming, encapsulation, inheritance, and polymorphism", projects: ["All .NET Systems"] },
      { name: "SOLID Principles", role: "Clean architecture design principles for maintainable codebases", projects: ["All .NET Systems"] },
      { name: "Agile / Scrum", role: "Sprint planning, daily standups, backlog refinement, and retrospectives", projects: ["Professional Workflows"] },
      { name: "Code Reviews", role: "Peer review of pull requests for code quality, security, and standards", projects: ["Sanskriti IT Solutions"] },
      { name: "Testing and Debugging", role: "Regression testing, defect isolation, runtime debugging, and profiling", projects: ["All Projects"] },
    ],
  },
  {
    id: "ai",
    label: "AI Integration",
    icon: "🤖",
    color: "#9333ea",
    colorLight: "#9333ea",
    colorDark: "#c084fc",
    skills: [
      { name: "ML Model Integration", role: "Connecting predictive models and algorithmic inference with backend REST APIs", projects: ["WellMove Wellness"] },
      { name: "Trend Analysis", role: "Time-series data aggregation and multi-week trend calculation algorithms", projects: ["WellMove Wellness"] },
      { name: "Personalization Workflows", role: "Tailoring recommendations and interfaces based on historical user patterns", projects: ["WellMove Wellness"] },
      { name: "Adaptive Goals", role: "Dynamically recalculating user targets based on real-time activity inputs", projects: ["WellMove Wellness"] },
      { name: "Smart Notification Triggers", role: "Automated event-driven alerts based on milestone progress and streaks", projects: ["WellMove Wellness"] },
    ],
  },
];

export default function TechConstellation() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeSkill, setActiveSkill] = useState({
    ...SKILL_CATEGORIES[0].skills[0],
    category: SKILL_CATEGORIES[0].label,
    color: SKILL_CATEGORIES[0].color,
    icon: SKILL_CATEGORIES[0].icon,
  });

  const displayedCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section id="constellation" className="section-bg-light-cream" style={{ position: "relative" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            TECHNICAL CONSTELLATION // SKILL MATRIX
          </div>
          <h2 className="section-title">
            TECHNICAL <span className="gradient-cyan-purple">SKILLS MATRIX.</span>
          </h2>
          <p className="section-subtitle">
            Explore 7 distinct engineering categories. Select any technology to inspect its architectural role and verified project implementations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.55rem",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          <button
            onClick={() => {
              cyberAudio.playClick();
              setSelectedCategory("all");
            }}
            className={`constellation-cat-btn ${selectedCategory === "all" ? "active" : ""}`}
            style={{ "--active-color": "var(--cyan)" }}
          >
            <span>🌐</span>
            <span>ALL CATEGORIES</span>
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  cyberAudio.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`constellation-cat-btn ${isSelected ? "active" : ""}`}
                style={{ "--active-color": cat.color }}
              >
                <span className="cat-icon">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Constellation Grid & Inspector Panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
          className="constellation-layout tech-constellation-layout"
        >
          {/* Left: Star Map / Clustered Nodes */}
          <div
            className="cyber-panel constellation-nodes-container"
            style={{
              padding: "2rem",
              minHeight: "440px",
              display: "flex",
              flexDirection: "column",
              gap: "1.8rem",
            }}
          >
            {displayedCategories.map((cat) => (
              <div key={cat.id} className="constellation-cluster-group">
                <div
                  className="constellation-cluster-title"
                  style={{ color: cat.color }}
                >
                  <span style={{ fontSize: "1rem" }}>{cat.icon}</span>
                  <span>CLUSTER // {cat.label}</span>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
                  {cat.skills.map((skill) => {
                    const isSelected = activeSkill?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => {
                          cyberAudio.playNodeSelect();
                          setActiveSkill({
                            ...skill,
                            category: cat.label,
                            color: cat.color,
                            icon: cat.icon,
                          });
                        }}
                        onMouseEnter={() => cyberAudio.playHover()}
                        className={`constellation-node-btn ${isSelected ? "active" : ""}`}
                        style={{ "--node-accent": cat.color }}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Selected Node Telemetry Inspector */}
          <div
            className="cyber-panel clipped-corner constellation-inspector-panel"
            style={{
              padding: "2rem",
              "--inspector-accent": activeSkill?.color || "var(--cyan)",
            }}
          >
            <div className="constellation-inspector-eyebrow">
              // TELEMETRY INSPECTOR
            </div>

            <h3 className="constellation-inspector-title">
              {activeSkill?.name || "Select a Skill"}
            </h3>

            <div className="constellation-inspector-badge">
              CATEGORY: {activeSkill?.category?.toUpperCase() || "SYSTEM NODE"}
            </div>

            <div style={{ marginBottom: "1.6rem" }}>
              <div className="constellation-inspector-label">
                ARCHITECTURAL ROLE & APPLICATION:
              </div>
              <p className="constellation-inspector-role">
                {activeSkill?.role}
              </p>
            </div>

            {activeSkill?.projects && (
              <div>
                <div className="constellation-inspector-label" style={{ marginBottom: "0.6rem" }}>
                  VERIFIED IMPLEMENTATIONS:
                </div>
                <div className="constellation-impl-tags">
                  {activeSkill.projects.map((proj, i) => (
                    <span key={i} className="constellation-impl-tag">
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .constellation-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
