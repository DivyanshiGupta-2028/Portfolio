import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const expertiseLinks = [
  { label: ".NET Core Backend", to: "/services" },
  { label: "React & Angular Frontends", to: "/services" },
  { label: "FastAPI / AI Integrations", to: "/services" },
  { label: "Azure Cloud & DevOps", to: "/services" },
];

const socials = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/divyanshi-gupta-774431252",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    url: "https://github.com/divyanshig1612",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:divyanshig1612@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Footer() {
  const location = useLocation();

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 2,
        borderTop: "1px solid var(--border)",
        background: "var(--nav-bg-scrolled)",
        backdropFilter: "blur(30px)",
        padding: "6rem 3rem 3rem 3rem",
        overflow: "hidden",
      }}
    >
      {/* Subtle bottom radial light to draw eyes */}
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 229, 196, 0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }} className="footer-container">
        
        {/* Massive Call To Action Block */}
        <div style={{ marginBottom: "5rem", borderBottom: "1px solid var(--border)", paddingBottom: "4rem" }} className="footer-cta-block">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "2rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#74d457", animation: "pulse-dot 2s infinite", display: "inline-block" }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--purple)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500 }}>
                  Available for new opportunities
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5.5vw, 4.2rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "var(--cream)",
                }}
              >
                LET'S BUILD SOMETHING<br />
                <span style={{ background: "linear-gradient(135deg, var(--purple-light), var(--pink))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  EXTRAORDINARY.
                </span>
              </h2>
            </div>
            
            <Link
              to="/contact"
              className="btn-primary"
              style={{
                padding: "1.1rem 2.8rem",
                fontSize: "0.82rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.8rem",
                boxShadow: "var(--glow-purple)",
                cursor: "none",
              }}
            >
              <span>Get In Touch</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.3s" }} className="cta-arrow">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </Link>
          </div>
        </div>

        {/* 4-Column Grid Section */}
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1.2fr 1.2fr", gap: "4rem", marginBottom: "5rem" }} className="footer-grid">
          
          {/* Column 1: Identity & Socials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <Link
                to="/"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.8rem",
                  background: "linear-gradient(135deg, var(--purple-light), var(--pink))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                  display: "inline-block",
                  marginBottom: "0.6rem",
                }}
              >
                Divyanshi.
              </Link>
              <p style={{ fontFamily: "'Inter', sans-serif", color: "var(--muted)", fontSize: "1.08rem", lineHeight: 1.85, maxWidth: "320px", fontWeight: 400 }}>
                High-performance Full-Stack Engineer designing beautiful SaaS platforms, AI backends, and modular cloud architectures.
              </p>
            </div>

            {/* Social Icons Hub */}
            <div style={{ display: "flex", gap: "0.8rem" }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--muted)",
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    cursor: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--purple)";
                    e.currentTarget.style.borderColor = "var(--purple)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "var(--glow-purple)";
                    e.currentTarget.style.background = "var(--surface2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--muted)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background = "var(--surface)";
                  }}
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--cream)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Sitemap
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.08rem",
                    color: location.pathname === to ? "var(--purple)" : "var(--muted)",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "all 0.25s",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--purple-light)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = location.pathname === to ? "var(--purple)" : "var(--muted)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Tech Focus */}
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--cream)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Expertise
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {expertiseLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.08rem",
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontWeight: 400,
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--purple)";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--muted)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Say Hello */}
          <div>
            <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--cream)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              Say Hello
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.83rem", color: "var(--dim)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                Direct Email
              </span>
              <a
                href="mailto:divyanshig1612@gmail.com"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "1.08rem",
                  color: "var(--purple)",
                  textDecoration: "none",
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--purple-light)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--purple)")}
              >
                divyanshig1612@gmail.com
              </a>
              
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.83rem", color: "var(--dim)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginTop: "1rem" }}>
                Location
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.08rem", color: "var(--muted)", fontWeight: 500 }}>
                Noida, India 🇮🇳
              </span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, var(--border), transparent)", marginBottom: "2rem" }} />

        {/* Bottom Row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }} className="footer-bottom">
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "1rem", color: "var(--dim)", letterSpacing: "0.02em" }}>
            © {new Date().getFullYear()} Divyanshi Gupta. Designed &amp; Engineered with Passion.
          </div>
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "1rem",
              color: "var(--muted)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "0.5rem 1.2rem",
              cursor: "none",
              transition: "all 0.25s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--purple)";
              e.currentTarget.style.borderColor = "var(--purple)";
              e.currentTarget.style.background = "var(--surface2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.background = "var(--surface)";
            }}
          >
            <span>Back to top</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5,12 12,5 19,12" />
            </svg>
          </button>
        </div>

      </div>

      {/* Embedded CSS rules for hover effects and media queries */}
      <style>{`
        .footer-cta-block .btn-primary:hover .cta-arrow {
          transform: translateX(5px);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .footer-cta-block h2 {
            font-size: 1.8rem !important;
          }
          footer {
            padding: 4rem 1.5rem 2rem 1.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
