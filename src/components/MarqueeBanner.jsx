export default function MarqueeBanner() {
  const message = "⚡ FULL-STACK SOFTWARE ENGINEER // SANSKRITI IT SOLUTIONS · ASP.NET CORE · REACT · NODE.JS · SQL SERVER · 40% VERIFIED SAAS EFFICIENCY GAIN · AZ-900 & AI-900 CERTIFIED · OPEN TO FULL-STACK & BACKEND OPPORTUNITIES";

  return (
    <div
      role="status"
      aria-label="Engineering status"
      style={{
        position: "relative",
        height: "32px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        background: "rgba(10, 13, 22, 0.95)",
        backdropFilter: "blur(8px)",
        zIndex: 100,
        color: "var(--text-muted)",
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        letterSpacing: "0.08em",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "bannerScroll 38s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ display: "flex", gap: "3rem", paddingRight: "3rem", alignItems: "center" }}>
          <span>{message}</span>
          <span style={{ color: "var(--cyan)" }}>★</span>
          <span>{message}</span>
          <span style={{ color: "#f59e0b" }}>★</span>
        </div>
        <div style={{ display: "flex", gap: "3rem", paddingRight: "3rem", alignItems: "center" }} aria-hidden="true">
          <span>{message}</span>
          <span style={{ color: "var(--cyan)" }}>★</span>
          <span>{message}</span>
          <span style={{ color: "#f59e0b" }}>★</span>
        </div>
      </div>

      <style>{`
        @keyframes bannerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
