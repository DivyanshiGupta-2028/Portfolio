import { useState } from "react";
import { motion } from "framer-motion";
import { cyberAudio } from "../utils/cyberAudio";

const CAPABILITIES = [
  {
    id: "backend",
    category: "CAPABILITY_01",
    title: "Backend Engineering",
    tagline: "High-throughput APIs, clean service boundaries & secure workflows.",
    accent: "var(--cyan)",
    icon: "⚡",
    points: [
      "ASP.NET Core & .NET 7+ enterprise service design",
      "Robust REST API development with OpenAPI/Swagger specifications",
      "Decoupled business logic & clean domain service layers",
      "Configurable Dependency Injection & custom middleware pipelines",
      "Enterprise authentication & granular authorization policies",
      "Secure application workflows and structured audit logging",
    ],
    technicalDeepDive:
      "Engineered high-concurrency microservices and monolithic backends using ASP.NET Core, employing C# record types, custom filter pipelines, and asynchronous async/await patterns to maintain sub-50ms latency profiles.",
  },
  {
    id: "data-arch",
    category: "CAPABILITY_02",
    title: "Data & Application Architecture",
    tagline: "Scalable schemas, high-efficiency queries & multi-tenant isolation.",
    accent: "var(--purple)",
    icon: "🗄️",
    points: [
      "Microsoft SQL Server & MySQL production data design",
      "Complex T-SQL stored procedures, triggers, and indices",
      "Query execution plan optimization and deadlock prevention",
      "Multi-tenant application partitioning and tenant isolation",
      "Role-Based Access Control (RBAC) across organizational tiers",
      "Structured data integrity and transaction rollbacks",
    ],
    technicalDeepDive:
      "Formulated schema models with partitioned tenant boundaries, indexing strategies that pruned query runtimes, and stored procedures delivering reliable state transitions for enterprise licensing and billing.",
  },
  {
    id: "fullstack",
    category: "CAPABILITY_03",
    title: "Full-Stack & Product Engineering",
    tagline: "End-to-end integration from reactive SPAs to AI-driven microservices.",
    accent: "#38bdf8",
    icon: "🌐",
    points: [
      "Modern React and Angular single-page architectures",
      "Node.js and Express.js scalable API gateways",
      "Responsive, accessible interfaces designed without bloat",
      "Seamless API contract integration and error boundaries",
      "Transactional e-commerce and real-time inventory flows",
      "AI-integrated backend endpoints powered by Python & FastAPI",
    ],
    technicalDeepDive:
      "Bridged enterprise backend capabilities with intuitive client interfaces, implementing lazy-loaded route architectures, reactive state stores, payment webhooks, and asynchronous AI pipeline triggers.",
  },
];

export default function EngineeringIdentity() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="identity" style={{ position: "relative" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            ENGINEERING IDENTITY
          </div>
          <h2 className="section-title">
            MORE THAN CODE.{" "}
            <span className="gradient-cyan-purple">SYSTEMS THAT SOLVE REAL PROBLEMS.</span>
          </h2>
          <p className="section-subtitle">
            Software engineer who works across backend systems, APIs, authentication, database operations, enterprise applications, and frontend integration.
          </p>
        </div>

        {/* 3 Capability Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {CAPABILITIES.map((cap, idx) => {
            const isHovered = activeCard === cap.id;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onMouseEnter={() => {
                  cyberAudio.playHover();
                  setActiveCard(cap.id);
                }}
                onMouseLeave={() => setActiveCard(null)}
                className="cyber-panel clipped-corner"
                style={{
                  padding: "2.2rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderColor: isHovered ? cap.accent : "rgba(72, 229, 255, 0.18)",
                  boxShadow: isHovered
                    ? `0 0 30px ${cap.accent}33, 0 20px 40px rgba(0,0,0,0.6)`
                    : "0 10px 30px rgba(0,0,0,0.5)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div>
                  {/* Card Header */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        letterSpacing: "0.15em",
                        color: cap.accent,
                      }}
                    >
                      {cap.category}
                    </span>
                    <span style={{ fontSize: "1.5rem" }}>{cap.icon}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 700,
                      marginBottom: "0.6rem",
                      color: "#ffffff",
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--text-secondary)",
                      marginBottom: "1.8rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {cap.tagline}
                  </p>

                  {/* Capability Points List */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                      marginBottom: "1.8rem",
                    }}
                  >
                    {cap.points.map((pt, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.65rem",
                          fontSize: "0.88rem",
                          color: "var(--text-primary)",
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            color: cap.accent,
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.85rem",
                            lineHeight: "1.3rem",
                          }}
                        >
                          ▹
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Deep-Dive Callout */}
                <div
                  style={{
                    background: "rgba(7, 10, 18, 0.75)",
                    border: `1px solid ${isHovered ? cap.accent : "rgba(72, 229, 255, 0.15)"}`,
                    borderRadius: "8px",
                    padding: "0.9rem 1rem",
                    fontSize: "0.82rem",
                    color: "var(--text-secondary)",
                    fontFamily: "var(--font-mono)",
                    lineHeight: 1.55,
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <span style={{ color: cap.accent, fontWeight: 700 }}>// DEEP DIVE: </span>
                  {cap.technicalDeepDive}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
