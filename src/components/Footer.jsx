import { cyberAudio } from "../utils/cyberAudio";

const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "identity", label: "Expertise" },
  { id: "constellation", label: "Constellation" },
  { id: "projects", label: "Projects" },
  { id: "lab", label: "Engineering Lab" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id) => {
    cyberAudio.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 2,
        background: "rgba(5, 8, 16, 0.95)",
        borderTop: "1px solid rgba(72, 229, 255, 0.15)",
        padding: "3.5rem 2rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "2.5rem",
        }}
      >
        {/* Main Footer Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {/* Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.8rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "6px",
                  background: "linear-gradient(135deg, rgba(72, 229, 255, 0.25), rgba(139, 92, 255, 0.25))",
                  border: "1px solid var(--cyan)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  color: "#ffffff",
                  fontSize: "1rem",
                  clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
                }}
              >
                DG
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#ffffff", fontSize: "1.1rem" }}>
                  DIVYANSHI<span style={{ color: "var(--cyan)" }}>.GUPTA</span>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)" }}>
                  DIGITAL REALM // 2026 ARCHITECTURE
                </div>
              </div>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", maxWidth: "420px", lineHeight: 1.6 }}>
              Full-Stack Software Engineer with nearly 3 years combined experience architecting enterprise APIs, .NET backends, multi-tenant databases, and AI-integrated systems.
            </p>
          </div>

          {/* Quick Jump Links */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--cyan)",
                letterSpacing: "0.15em",
                marginBottom: "0.8rem",
              }}
            >
              // SYSTEM MODULES
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem 1.5rem",
              }}
            >
              {NAV_LINKS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    color: "var(--text-secondary)",
                    cursor: "pointer",
                    padding: "0.2rem 0",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  ▹ {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Verified Contacts & Back to Top */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--cyan)",
                letterSpacing: "0.15em",
                marginBottom: "0.2rem",
              }}
            >
              // CONNECT
            </div>
            <a
              href="https://www.linkedin.com/in/divyanshi-gupta"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontFamily: "var(--font-mono)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>LinkedIn</span> <span>↗</span>
            </a>
            <a
              href="mailto:divyanshi2028@gmail.com"
              style={{
                color: "var(--cyan)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontFamily: "var(--font-mono)",
              }}
            >
              divyanshi2028@gmail.com
            </a>
            <a
              href="tel:+917017796542"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.82rem",
                fontFamily: "var(--font-mono)",
              }}
            >
              +91-7017796542
            </a>

            <button
              onClick={() => scrollTo("hero")}
              className="btn-cyber-secondary"
              style={{
                padding: "0.45rem 1rem",
                fontSize: "0.75rem",
                marginTop: "0.6rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <span>▲ ELEVATE TO TOP</span>
            </button>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(72, 229, 255, 0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            © {new Date().getFullYear()} DIVYANSHI GUPTA · ALL RIGHTS RESERVED
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#34d399" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 6px #10b981",
              }}
            />
            SYSTEM TELEMETRY: NOMINAL // ALL ENGINES ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
}
