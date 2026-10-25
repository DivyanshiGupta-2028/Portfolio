import { Link } from "react-router-dom";
import { cyberAudio } from "../utils/cyberAudio";

export default function Footer() {
  const scrollToTop = () => {
    cyberAudio.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      style={{
        position: "relative",
        zIndex: 10,
        backgroundColor: "#050811",
        borderTop: "1px solid rgba(255, 255, 255, 0.12)",
        color: "#ffffff",
        overflow: "hidden",
      }}
    >
      {/* Background Cinematic Tech Graphic (Exact NeurolinkX Footer Image) */}
      <img
        src="/footer-bg.png"
        alt=""
        role="presentation"
        aria-hidden="true"
        loading="lazy"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          filter: "blur(4px)",
          transform: "scale(1.06)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Dark tint overlay for pristine contrast & readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(5, 8, 17, 0.78) 0%, rgba(4, 7, 14, 0.88) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Subtle Dot Grid Accent */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1260px", margin: "0 auto", padding: "0 1.75rem" }}>
        {/* ── TOP: 5-Column Grid (NeurolinkX Layout) ── */}
        <div
          className="nlx-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
            gap: "2.5rem",
            paddingTop: "4.5rem",
            paddingBottom: "3.5rem",
          }}
        >
          {/* Column 1: Brand & Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Logo */}
            <Link
              to="/"
              onClick={() => cyberAudio.playClick()}
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.45rem",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #FF5722 0%, #FF3D00 50%, #EC4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Divyanshi
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.45rem",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                }}
              >
                Gupta
              </span>
              <span
                style={{
                  display: "inline-block",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #FF5722, #EC4899)",
                  boxShadow: "0 0 10px #FF5722",
                  marginLeft: "0.2rem",
                }}
                className="cyber-pulse"
              />
            </Link>

            <p style={{ color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>
              Full-Stack Software Engineer specializing in .NET Core microservices, reactive frontend architectures, and high-performance cloud APIs.
            </p>

            {/* Address & Direct Channels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontSize: "0.82rem" }}>
              <a
                href="mailto:divyanshi2028@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "#94a3b8",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF793F")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                divyanshi2028@gmail.com
              </a>

              <a
                href="tel:+917017796542"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "#94a3b8",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF793F")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91-7017796542
              </a>

              <span style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: "#64748b" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Noida, Uttar Pradesh, India
              </span>
            </div>

            {/* Circular Social Buttons (like NeurolinkX) */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.25rem" }}>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/divyanshi-gupta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#0077b5",
                  color: "#ffffff",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(0, 119, 181, 0.35)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.12)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 119, 181, 0.55)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(0, 119, 181, 0.35)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/divyanshi-gupta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#24292e",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.4)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.12)";
                  e.currentTarget.style.borderColor = "#FF793F";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:divyanshi2028@gmail.com"
                aria-label="Email"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #f43f5e, #e11d48)",
                  color: "#ffffff",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(244, 63, 94, 0.35)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.12)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(244, 63, 94, 0.55)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(244, 63, 94, 0.35)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>

              {/* Resume */}
              <a
                href="/divyanshi-gupta-resume.pdf"
                download="divyanshi-gupta-resume.pdf"
                aria-label="Download Resume"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #FF793F, #d4602e)",
                  color: "#ffffff",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(255, 121, 63, 0.35)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.12)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 121, 63, 0.55)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(255, 121, 63, 0.35)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Core Engineering Expertise */}
          <div>
            <h3 style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#ffffff", marginBottom: "1.2rem" }}>
              Core Stack
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                { name: "C# & .NET 7+", to: "/experience" },
                { name: "ASP.NET Core APIs", to: "/work" },
                { name: "React & Next.js", to: "/work" },
                { name: "SQL Server & Multi-Tenancy", to: "/lab" },
                { name: "AI / FastAPI Integration", to: "/lab" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    onClick={() => cyberAudio.playClick()}
                    className="nlx-footer-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.84rem",
                      color: "#94a3b8",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>{item.name}</span>
                    <span className="nlx-arrow" style={{ opacity: 0, transform: "translateX(-4px)", transition: "all 0.2s ease" }}>↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Portals */}
          <div>
            <h3 style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#ffffff", marginBottom: "1.2rem" }}>
              Portals
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                { name: "Projects Archive", to: "/work" },
                { name: "Engineering Lab", to: "/lab" },
                { name: "Career Timeline", to: "/experience" },
                { name: "3D Workstation", to: "/about" },
                { name: "Contact Engineer", to: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    onClick={() => cyberAudio.playClick()}
                    className="nlx-footer-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.84rem",
                      color: "#94a3b8",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>{item.name}</span>
                    <span className="nlx-arrow" style={{ opacity: 0, transform: "translateX(-4px)", transition: "all 0.2s ease" }}>↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Credentials & Proof */}
          <div>
            <h3 style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#ffffff", marginBottom: "1.2rem" }}>
              Credentials
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                { name: "Microsoft AZ-900", to: "/about" },
                { name: "Microsoft AI-900", to: "/about" },
                { name: "B.Tech CSE · MIET", to: "/about" },
                { name: "Sanskriti IT Solutions", to: "/experience" },
                { name: "40% Verified SaaS Gain", to: "/work" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    onClick={() => cyberAudio.playClick()}
                    className="nlx-footer-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.84rem",
                      color: "#94a3b8",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>{item.name}</span>
                    <span className="nlx-arrow" style={{ opacity: 0, transform: "translateX(-4px)", transition: "all 0.2s ease" }}>↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Direct Inquiries */}
          <div>
            <h3 style={{ fontSize: "0.85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#ffffff", marginBottom: "1.2rem" }}>
              Opportunities
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                { name: "Full-Time Backend", to: "/contact" },
                { name: "Full-Stack Roles", to: "/contact" },
                { name: "API Architecture", to: "/lab" },
                { name: "Download CV (PDF)", to: "/divyanshi-gupta-resume.pdf", download: true },
                { name: "Immediate Joiner", to: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  {item.download ? (
                    <a
                      href={item.to}
                      download="divyanshi-gupta-resume.pdf"
                      className="nlx-footer-link"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.84rem",
                        color: "#FF793F",
                        fontWeight: 600,
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span>{item.name}</span>
                      <span className="nlx-arrow" style={{ opacity: 1, transform: "translateX(0)" }}>↓</span>
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={() => cyberAudio.playClick()}
                      className="nlx-footer-link"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontSize: "0.84rem",
                        color: "#94a3b8",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span>{item.name}</span>
                      <span className="nlx-arrow" style={{ opacity: 0, transform: "translateX(-4px)", transition: "all 0.2s ease" }}>↗</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── MID-TIER: NeurolinkX Call to Action Banner ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.10)",
            padding: "2.2rem 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <p style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", margin: "0 0 0.3rem" }}>
              Ready to build something extraordinary?
            </p>
            <p style={{ fontSize: "0.85rem", color: "#94a3b8", margin: 0 }}>
              Available for full-time engineering roles, backend consulting, or API architecture reviews.
            </p>
          </div>

          <Link
            to="/contact"
            onClick={() => cyberAudio.playLaser()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              padding: "0.75rem 1.6rem",
              borderRadius: "8px",
              fontSize: "0.88rem",
              fontWeight: 700,
              color: "#ffffff",
              background: "linear-gradient(135deg, #FF5722 0%, #FF3D00 50%, #EC4899 100%)",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(255, 87, 34, 0.4)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(255, 87, 34, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(255, 87, 34, 0.4)";
            }}
          >
            Initiate Contact
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Link>
        </div>

        {/* ── BOTTOM: Copyright & Status Strip ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "1.6rem 0 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.75rem",
            color: "#64748b",
          }}
        >
          <div>
            © {new Date().getFullYear()} Divyanshi Gupta. Engineered with React, Three.js & Modern CSS.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.45rem", color: "#34d399", fontFamily: "var(--font-mono)" }}>
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                }}
                className="cyber-pulse"
              />
              STATUS: OPEN TO WORK
            </span>

            <button
              onClick={scrollToTop}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "6px",
                color: "#94a3b8",
                padding: "0.35rem 0.75rem",
                fontSize: "0.72rem",
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#FF793F";
                e.currentTarget.style.borderColor = "#FF793F";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.12)";
              }}
            >
              ↑ BACK TO TOP
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .nlx-footer-link:hover {
          color: #FF793F !important;
        }
        .nlx-footer-link:hover .nlx-arrow {
          opacity: 1 !important;
          transform: translateX(0) !important;
          color: #FF793F !important;
        }
        @media (max-width: 1024px) {
          .nlx-footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 640px) {
          .nlx-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
