import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cyberAudio } from "../utils/cyberAudio";

const LAB_TABS = [
  { id: "api-lifecycle", label: "API Lifecycle", title: "API Request / Response Lifecycle" },
  { id: "auth-flow", label: "Auth & OAuth2", title: "JWT & Google OAuth2 Authentication Flow" },
  { id: "saas-licensing", label: "SaaS Multi-Tenancy", title: "Multi-Tenant SaaS Licensing Architecture" },
  { id: "ai-wellness", label: "AI Backend Pipeline", title: "FastAPI & AI Telemetry Architecture" },
];

export default function EngineeringLab() {
  const [activeTab, setActiveTab] = useState("api-lifecycle");
  const [selectedNode, setSelectedNode] = useState(0);

  // Tab A: API Request Lifecycle
  const apiSteps = [
    { name: "Client Browser / App", role: "Dispatches HTTP request (GET/POST/PUT) with JSON payload and Authorization Bearer header." },
    { name: "HTTP Routing", role: "Matches URL pattern and HTTP verb to the appropriate controller action route table." },
    { name: "Middleware Pipeline", role: "CORS policies, global exception handler, request logging, and rate-limiting inspection." },
    { name: "Auth & RBAC Filter", role: "Validates JWT signature, claims, expiry, and evaluates role-based policy requirements." },
    { name: "Controller / Endpoint", role: "Validates incoming model state (Data Annotations/Pydantic) and delegates to service layer." },
    { name: "Domain Service Layer", role: "Executes business logic, transactional rules, data transformations, and calculations." },
    { name: "Data Access / ORM", role: "Entity Framework Core / Dapper / ADO.NET executes parameterized queries or stored procedures." },
    { name: "Database Engine", role: "SQL Server / MySQL commits ACID transaction, reads indices, and returns dataset." },
    { name: "Serialized Response", role: "Formats HTTP status code (200/201/400) and serializes JSON payload back to client." },
  ];

  // Tab B: Auth Flow
  const authSteps = [
    { name: "1. User / SSO Request", role: "Client submits login credentials OR initiates Google OAuth2 redirect flow." },
    { name: "2. Identity Verification", role: "Backend verifies password hash (PBKDF2/BCrypt) OR validates Google OAuth2 IdToken via Google API." },
    { name: "3. Token Generation", role: "Issues signed JWT containing user ID, tenant ID, and RBAC roles with cryptographic HMAC-SHA256 signature." },
    { name: "4. Client Session Storage", role: "Client securely stores token in memory/HttpOnly cookies and attaches it to subsequent API requests." },
    { name: "5. Protected Route Authorization", role: "Server decrypts claims on each call, validating tenant isolation and role permissions without re-querying passwords." },
  ];

  // Tab C: Multi-Tenant SaaS Licensing
  const saasSteps = [
    { name: "Tenant Workspace Node", role: "Tenant identified via header/subdomain (e.g. Org-ID), isolating DB execution scope." },
    { name: "License Assignment Tier", role: "Active subscription plan evaluated (Enterprise / Pro / Starter) with seat count limits." },
    { name: "Feature Entitlement Guard", role: "System verifies whether specific feature modules (e.g., Export, Analytics) are enabled for this tenant." },
    { name: "RBAC Permission Matrix", role: "User's internal organization role (Admin, Manager, Member) checked against action." },
    { name: "Protected Feature Access", role: "Enforces 40% reduction in manual effort by automating license provisioning and entitlement checks." },
  ];

  // Tab D: AI Wellness Pipeline
  const aiSteps = [
    { name: "Client Telemetry Feed", role: "Smart devices & mobile app post continuous health telemetry (steps, heart-rate, sleep)." },
    { name: "FastAPI Gateway", role: "Asynchronous Python ASGI server ingests telemetry payloads with strict Pydantic validation." },
    { name: "Health DB Persistence", role: "Structured biometric time-series data saved to relational tables with indexed timestamp keys." },
    { name: "ML Recommendation Engine", role: "Algorithmic trend analyzer calculates rolling averages, sleep-consistency scores, and activity habits." },
    { name: "Adaptive Goal Triggers", role: "Dynamic suggestion generator adjusts daily activity targets and dispatches smart notifications." },
  ];

  let currentSteps = apiSteps;
  if (activeTab === "auth-flow") currentSteps = authSteps;
  if (activeTab === "saas-licensing") currentSteps = saasSteps;
  if (activeTab === "ai-wellness") currentSteps = aiSteps;

  const currentStep = currentSteps[selectedNode] || currentSteps[0];

  return (
    <section id="lab" style={{ position: "relative" }}>
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="dot" />
            ENGINEERING LAB // UNDER THE HOOD
          </div>
          <h2 className="section-title">
            ARCHITECTURAL <span className="gradient-cyan-purple">DEEP DIVES.</span>
          </h2>
          <p className="section-subtitle">
            How systems really work beneath the surface: explore the request lifecycles, authentication boundaries, multi-tenant partitioning, and AI data flows I design.
          </p>
        </div>

        {/* Tab Switcher */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.6rem",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          {LAB_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  cyberAudio.playClick();
                  setActiveTab(tab.id);
                  setSelectedNode(0);
                }}
                style={{
                  padding: "0.55rem 1.2rem",
                  borderRadius: "8px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  background: isActive ? "rgba(72, 229, 255, 0.15)" : "rgba(12, 18, 34, 0.7)",
                  color: isActive ? "var(--cyan)" : "var(--text-secondary)",
                  border: `1px solid ${isActive ? "var(--cyan)" : "rgba(72, 229, 255, 0.18)"}`,
                  boxShadow: isActive ? "0 0 20px rgba(72, 229, 255, 0.25)" : "none",
                  transition: "all 0.2s ease",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Visualizer Container */}
        <div
          className="cyber-panel"
          style={{
            padding: "2.2rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Active Flow Title */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid rgba(72, 229, 255, 0.15)",
              paddingBottom: "1rem",
              flexWrap: "wrap",
              gap: "0.5rem",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "var(--cyan)",
                  letterSpacing: "0.15em",
                }}
              >
                ACTIVE DIAGRAM //
              </span>
              <h3
                style={{
                  fontSize: "1.3rem",
                  color: "#ffffff",
                  fontWeight: 700,
                  marginTop: "0.2rem",
                }}
              >
                {LAB_TABS.find((t) => t.id === activeTab)?.title}
              </h3>
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--text-muted)",
              }}
            >
              CLICK ANY NODE TO INSPECT LAYER
            </span>
          </div>

          {/* Interactive Flow Nodes */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              overflowX: "auto",
              padding: "1rem 0",
              scrollbarWidth: "thin",
            }}
          >
            {currentSteps.map((step, idx) => {
              const isSelected = selectedNode === idx;
              return (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexShrink: 0 }}>
                  <button
                    onClick={() => {
                      cyberAudio.playNodeSelect();
                      setSelectedNode(idx);
                    }}
                    style={{
                      padding: "0.85rem 1.1rem",
                      borderRadius: "10px",
                      background: isSelected
                        ? "linear-gradient(135deg, rgba(72, 229, 255, 0.25), rgba(139, 92, 255, 0.25))"
                        : "rgba(12, 18, 34, 0.85)",
                      border: `1px solid ${isSelected ? "var(--cyan)" : "rgba(72, 229, 255, 0.2)"}`,
                      boxShadow: isSelected ? "0 0 20px rgba(72, 229, 255, 0.35)" : "none",
                      color: isSelected ? "#ffffff" : "var(--text-secondary)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                      cursor: "pointer",
                      textAlign: "center",
                      minWidth: "140px",
                      maxWidth: "180px",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ fontSize: "0.7rem", color: isSelected ? "var(--cyan)" : "var(--text-muted)", marginBottom: "0.3rem" }}>
                      STEP {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div style={{ fontWeight: 600, lineHeight: 1.3 }}>{step.name}</div>
                  </button>

                  {idx < currentSteps.length - 1 && (
                    <span
                      style={{
                        color: "var(--cyan)",
                        opacity: 0.5,
                        fontSize: "1.1rem",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      →
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Node Inspector Detail Panel */}
          <div
            style={{
              background: "rgba(7, 10, 18, 0.8)",
              border: "1px solid rgba(72, 229, 255, 0.25)",
              borderRadius: "12px",
              padding: "1.6rem",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.8rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--cyan)",
                  letterSpacing: "0.15em",
                }}
              >
                // ARCHITECTURAL LAYER INSPECTOR [STEP {String(selectedNode + 1).padStart(2, "0")}]
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  color: "#34d399",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#34d399",
                    boxShadow: "0 0 6px #34d399",
                  }}
                />
                VERIFIED FLOW
              </div>
            </div>

            <h4
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "0.6rem",
              }}
            >
              {currentStep.name}
            </h4>

            <p
              style={{
                color: "var(--text-primary)",
                fontSize: "0.95rem",
                lineHeight: 1.65,
                fontFamily: "var(--font-body)",
              }}
            >
              {currentStep.role}
            </p>

            <div
              style={{
                marginTop: "1.2rem",
                display: "flex",
                gap: "0.6rem",
              }}
            >
              <button
                disabled={selectedNode === 0}
                onClick={() => {
                  cyberAudio.playClick();
                  setSelectedNode((prev) => Math.max(0, prev - 1));
                }}
                style={{
                  padding: "0.4rem 0.9rem",
                  borderRadius: "6px",
                  background: "rgba(12, 18, 34, 0.7)",
                  border: "1px solid rgba(72, 229, 255, 0.2)",
                  color: selectedNode === 0 ? "var(--text-dim)" : "var(--cyan)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  cursor: selectedNode === 0 ? "not-allowed" : "pointer",
                }}
              >
                ◀ PREV STAGE
              </button>

              <button
                disabled={selectedNode === currentSteps.length - 1}
                onClick={() => {
                  cyberAudio.playClick();
                  setSelectedNode((prev) => Math.min(currentSteps.length - 1, prev + 1));
                }}
                style={{
                  padding: "0.4rem 0.9rem",
                  borderRadius: "6px",
                  background: "rgba(12, 18, 34, 0.7)",
                  border: "1px solid rgba(72, 229, 255, 0.2)",
                  color: selectedNode === currentSteps.length - 1 ? "var(--text-dim)" : "var(--cyan)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  cursor: selectedNode === currentSteps.length - 1 ? "not-allowed" : "pointer",
                }}
              >
                NEXT STAGE ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
