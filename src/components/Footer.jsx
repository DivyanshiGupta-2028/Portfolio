import { Link } from "react-router-dom";
import { cyberAudio } from "../utils/cyberAudio";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Projects" },
  { to: "/lab", label: "Engineering Lab" },
  { to: "/experience", label: "Experience" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/divyanshi-gupta" },
  { label: "GitHub", href: "https://github.com/divyanshi-gupta" },
  { label: "Resume", href: "/DivyanshiGupta (1).pdf", download: true },
];

export default function Footer() {
  const scrollToTop = () => {
    cyberAudio.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ position: "relative", zIndex: 2 }}>

      {/* ── Product.inc style large CTA ── */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "6rem 2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px", height: "400px",
          background: "radial-gradient(ellipse, rgba(72,229,255,0.055) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1260px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "rgba(255,255,255,0.28)", letterSpacing: "0.16em", marginBottom: "1.5rem" }}>
            // READY TO COLLABORATE?
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.02,
            letterSpacing: "-0.045em", color: "#ffffff",
            marginBottom: "2.5rem", maxWidth: "900px", margin: "0 auto 2.5rem",
          }}>
            Available for{" "}
            <span style={{ background: "linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              great work.
            </span>
          </h2>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              to="/contact"
              onClick={() => cyberAudio.playLaser()}
              className="btn-flat-primary"
              style={{ textDecoration: "none", fontSize: "0.9rem" }}
            >
              START A CONVERSATION →
            </Link>
            <a
              href="mailto:divyanshi2028@gmail.com"
              className="btn-flat-secondary"
              style={{ textDecoration: "none", fontSize: "0.9rem" }}
            >
              divyanshi2028@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* ── Footer nav + info bar ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(4,6,11,0.9)" }}>
        <div style={{ maxWidth: "1260px", margin: "0 auto", padding: "2.5rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem" }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem", color: "#ffffff", marginBottom: "0.2rem" }}>
              DIVYANSHI<span style={{ color: "var(--cyan)" }}>.GUPTA</span>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>
              FULL-STACK ENGINEER · NOIDA
            </div>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: "1.8rem", flexWrap: "wrap" }}>
            {NAV_LINKS.map(item => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => cyberAudio.playClick()}
                className="dashed-link"
                style={{ textDecoration: "none", fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "rgba(255,255,255,0.42)" }}
                onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.42)"; }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social + Back to top */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {SOCIAL_LINKS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.download ? undefined : "_blank"}
                rel="noopener noreferrer"
                download={s.download}
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--cyan)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.38)"; }}
              >
                {s.label} ↗
              </a>
            ))}
            <button
              onClick={scrollToTop}
              style={{ background: "none", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "4px", color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-mono)", fontSize: "0.72rem", padding: "0.4rem 0.8rem", cursor: "pointer", transition: "all 0.2s ease" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--cyan)"; e.currentTarget.style.borderColor = "rgba(72,229,255,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.38)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
            >
              ↑ TOP
            </button>
          </div>
        </div>

        {/* Bottom micro bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", maxWidth: "1260px", margin: "0 auto", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "rgba(255,255,255,0.18)" }}>
            © {new Date().getFullYear()} DIVYANSHI GUPTA · ALL RIGHTS RESERVED
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "#34d399" }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 6px #10b981" }} />
            ALL SYSTEMS ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
}
