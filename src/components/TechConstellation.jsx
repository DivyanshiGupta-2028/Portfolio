import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cyberAudio } from "../utils/cyberAudio";

const SKILL_CATEGORIES = [
  {
    id: "backend",
    label: "Backend",
    color: "#48E5FF",
    skills: [
      { name: "C#", role: "Primary language for enterprise microservices, domain services & business rules", projects: ["License Admin", "Dating Platform", "Sales Inventory", "ASP.NET Calculators"] },
      { name: ".NET 7+", role: "Core backend framework providing unified async HTTP pipelines and high throughput", projects: ["License Admin", "Sales Inventory", "Dating Platform"] },
      { name: "ASP.NET Core", role: "REST APIs, dependency injection, and middleware orchestration", projects: ["License Admin", "Dating Platform", "Sales Inventory"] },
      { name: "ASP.NET Core MVC", role: "Server-rendered MVC controller patterns with strict separation of concerns", projects: ["ASP.NET Calculators Suite"] },
      { name: "Razor Pages", role: "Page-focused scenarios and form calculation interfaces", projects: ["ASP.NET Calculators Suite"] },
      { name: "Node.js", role: "Asynchronous I/O runtime powering full-stack backends and API services", projects: ["BellezBuy", "Boutique Management", "Dating Platform"] },
      { name: "Express.js", role: "Lightweight routing and middleware framework for microservices", projects: ["BellezBuy", "Boutique Management"] },
      { name: "Python", role: "Data analysis, asynchronous processing, and ML model pipelines", projects: ["WellMove Wellness"] },
      { name: "FastAPI", role: "High-performance asynchronous REST endpoints with Pydantic validation", projects: ["WellMove Wellness"] },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    color: "#8B5CFF",
    skills: [
      { name: "React", role: "Component architecture, hooks, state orchestration, and responsive SPAs", projects: ["BellezBuy", "Boutique Management", "Dating Platform"] },
      { name: "Angular", role: "Modular enterprise CMS, TypeScript services, RxJS reactive patterns", projects: ["License Admin", "Sales Inventory"] },
      { name: "JavaScript", role: "Modern ES6+ execution, asynchronous promises, DOM interfaces", projects: ["BellezBuy", "Dating Platform"] },
      { name: "TypeScript", role: "Strict compile-time type safety across Angular & React apps", projects: ["License Admin", "Sales Inventory"] },
      { name: "HTML5", role: "Semantic document layouts, accessible landmarks, and SEO foundation", projects: ["All Projects"] },
      { name: "CSS3", role: "Vanilla CSS, animations, glassmorphism, responsive flex/grid layouts", projects: ["All Projects"] },
      { name: "Bootstrap", role: "Responsive grid layouts and rapid administrative utility styling", projects: ["Sales Inventory", "ASP.NET Calculators"] },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    color: "#38bdf8",
    skills: [
      { name: "Microsoft SQL Server", role: "Enterprise relational database design, transactions, indexing, ACID compliance", projects: ["License Admin", "Dating Platform", "Sales Inventory", "Boutique Management"] },
      { name: "MySQL", role: "Relational data persistence, schema relations, and indexing", projects: ["BellezBuy", "WellMove Wellness"] },
      { name: "T-SQL", role: "Procedural SQL, advanced joins, aggregation routines, and constraints", projects: ["License Admin", "Sales Inventory"] },
      { name: "Stored Procedures", role: "Precompiled database queries ensuring atomic updates and execution speed", projects: ["License Admin", "Sales Inventory"] },
      { name: "Dapper", role: "High-performance micro-ORM for low-overhead database querying", projects: ["License Admin"] },
      { name: "Query Optimization", role: "Execution plan analysis, index tuning, and deadlock resolution", projects: ["License Admin", "Sales Inventory"] },
    ],
  },
  {
    id: "security",
    label: "Security & Architecture",
    color: "#f59e0b",
    skills: [
      { name: "REST APIs", role: "Stateless HTTP service contracts, status codes, and JSON schemas", projects: ["All Projects"] },
      { name: "JWT Authentication", role: "Stateless token-based authorization and signature validation", projects: ["License Admin", "Dating Platform", "Sales Inventory", "WellMove"] },
      { name: "Google OAuth2", role: "Third-party single sign-on identity provider integration", projects: ["Dating Platform", "License Admin"] },
      { name: "RBAC", role: "Granular Role-Based Access Control partitioning user privileges", projects: ["License Admin", "Sales Inventory"] },
      { name: "Multi-Tenancy", role: "SaaS organizational tenant isolation and schema separation", projects: ["License Admin System"] },
      { name: "Dependency Injection", role: "Loose coupling, interface contracts, and lifecycle management", projects: ["License Admin", "ASP.NET Calculators"] },
      { name: "Middleware", role: "Custom request/response interception, auth checks, and error handlers", projects: ["License Admin", "Dating Platform"] },
      { name: "OOP & SOLID", role: "Object-oriented design patterns, maintainability, and clean code", projects: ["All .NET Systems"] },
    ],
  },
  {
    id: "tools",
    label: "Tools & Delivery",
    color: "#10b981",
    skills: [
      { name: "Git", role: "Distributed version control, branching models, and clean commit history", projects: ["All Projects"] },
      { name: "GitHub", role: "Remote repository management, pull requests, and code reviews", projects: ["All Projects"] },
      { name: "Azure DevOps", role: "Automated CI/CD build pipelines and cloud deployments", projects: ["License Admin", "Sales Inventory"] },
      { name: "CI/CD", role: "Continuous integration, automated testing, and release delivery", projects: ["License Admin"] },
      { name: "Docker", role: "Containerized environments ensuring environment parity", projects: ["FastAPI Systems", "Microservices"] },
      { name: "Postman", role: "API contract testing, environment variables, and mocking", projects: ["All Projects"] },
      { name: "Jira / Scrum", role: "Agile sprint workflows, backlog tracking, and team standups", projects: ["Professional Workflows"] },
    ],
  },
  {
    id: "ai",
    label: "AI & Integration",
    color: "#ec4899",
    skills: [
      { name: "AI/ML Integration", role: "Integrating predictive models and ML algorithms with REST APIs", projects: ["WellMove Wellness"] },
      { name: "Trend Analysis", role: "Time-series health trend calculations and data aggregation", projects: ["WellMove Wellness"] },
      { name: "Personalization Workflows", role: "Adaptive recommendation pipelines tailored to user habits", projects: ["WellMove Wellness"] },
      { name: "Adaptive Recommendation", role: "Dynamic suggestion engines updating based on daily targets", projects: ["WellMove Wellness"] },
    ],
  },
];

export default function TechConstellation() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeSkill, setActiveSkill] = useState(SKILL_CATEGORIES[0].skills[0]);

  const displayedCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section id="constellation" style={{ position: "relative" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            SYSTEM MAP // CONSTELLATION
          </div>
          <h2 className="section-title">
            INTERACTIVE <span className="gradient-cyan-purple">TECHNOLOGY CONSTELLATION.</span>
          </h2>
          <p className="section-subtitle">
            Explore the connected engineering graph: backend frameworks, database optimizations, security layers, and AI integrations verified by real implementations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.6rem",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          <button
            onClick={() => {
              cyberAudio.playClick();
              setSelectedCategory("all");
            }}
            style={{
              padding: "0.45rem 1rem",
              borderRadius: "999px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              cursor: "pointer",
              background: selectedCategory === "all" ? "var(--cyan)" : "rgba(12, 18, 34, 0.7)",
              color: selectedCategory === "all" ? "#040711" : "var(--text-secondary)",
              border: `1px solid ${selectedCategory === "all" ? "var(--cyan)" : "rgba(72, 229, 255, 0.2)"}`,
              transition: "all 0.2s ease",
            }}
          >
            ALL CLUSTERS
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
                style={{
                  padding: "0.45rem 1rem",
                  borderRadius: "999px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  cursor: "pointer",
                  background: isSelected ? cat.color : "rgba(12, 18, 34, 0.7)",
                  color: isSelected ? "#040711" : "var(--text-secondary)",
                  border: `1px solid ${isSelected ? cat.color : "rgba(72, 229, 255, 0.2)"}`,
                  transition: "all 0.2s ease",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Constellation Grid & Inspector Panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "2rem",
            alignItems: "start",
          }}
          className="constellation-layout"
        >
          {/* Left: Star Map / Clustered Nodes */}
          <div
            className="cyber-panel"
            style={{
              padding: "2rem",
              minHeight: "440px",
              display: "flex",
              flexDirection: "column",
              gap: "1.8rem",
            }}
          >
            {displayedCategories.map((cat) => (
              <div key={cat.id}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: cat.color,
                    letterSpacing: "0.15em",
                    marginBottom: "0.85rem",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: cat.color,
                      boxShadow: `0 0 10px ${cat.color}`,
                    }}
                  />
                  CLUSTER // {cat.label}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                  {cat.skills.map((skill) => {
                    const isSelected = activeSkill?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => {
                          cyberAudio.playNodeSelect();
                          setActiveSkill({ ...skill, category: cat.label, color: cat.color });
                        }}
                        onMouseEnter={() => cyberAudio.playHover()}
                        style={{
                          padding: "0.45rem 0.9rem",
                          borderRadius: "8px",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.82rem",
                          cursor: "pointer",
                          background: isSelected
                            ? `${cat.color}22`
                            : "rgba(7, 10, 18, 0.75)",
                          color: isSelected ? "#ffffff" : "var(--text-secondary)",
                          border: `1px solid ${isSelected ? cat.color : "rgba(72, 229, 255, 0.15)"}`,
                          boxShadow: isSelected ? `0 0 15px ${cat.color}44` : "none",
                          transform: isSelected ? "scale(1.05)" : "scale(1)",
                          transition: "all 0.2s ease",
                        }}
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
            className="cyber-panel clipped-corner"
            style={{
              padding: "2rem",
              background: "rgba(12, 18, 34, 0.9)",
              border: `1px solid ${activeSkill?.color || "var(--cyan)"}`,
              boxShadow: `0 0 30px ${activeSkill?.color || "var(--cyan)"}22`,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: activeSkill?.color || "var(--cyan)",
                letterSpacing: "0.15em",
                marginBottom: "0.6rem",
              }}
            >
              // TELEMETRY INSPECTOR
            </div>

            <h3
              style={{
                fontSize: "1.7rem",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "0.4rem",
              }}
            >
              {activeSkill?.name || "Select a Node"}
            </h3>

            <div
              style={{
                display: "inline-block",
                padding: "0.2rem 0.6rem",
                borderRadius: "4px",
                background: `${activeSkill?.color || "#48e5ff"}18`,
                color: activeSkill?.color || "#48e5ff",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                marginBottom: "1.4rem",
              }}
            >
              CATEGORY: {activeSkill?.category || "SYSTEM NODE"}
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  marginBottom: "0.3rem",
                }}
              >
                ARCHITECTURAL ROLE:
              </div>
              <p
                style={{
                  color: "var(--text-primary)",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                {activeSkill?.role}
              </p>
            </div>

            {activeSkill?.projects && (
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    marginBottom: "0.6rem",
                  }}
                >
                  VERIFIED IMPLEMENTATIONS:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {activeSkill.projects.map((proj, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "0.3rem 0.65rem",
                        borderRadius: "4px",
                        background: "rgba(72, 229, 255, 0.08)",
                        border: "1px solid rgba(72, 229, 255, 0.2)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "var(--cyan)",
                      }}
                    >
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
