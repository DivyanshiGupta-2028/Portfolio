import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cyberAudio } from "../utils/cyberAudio";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "identity", label: "Expertise" },
  { id: "constellation", label: "Constellation" },
  { id: "projects", label: "Projects" },
  { id: "lab", label: "Engineering Lab" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
      setScrolled(currentScroll > 40);

      // Determine active section
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    cyberAudio.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSound = () => {
    const newState = cyberAudio.toggle();
    setSoundEnabled(newState);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "76px",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
          background: scrolled ? "rgba(7, 10, 18, 0.88)" : "rgba(7, 10, 18, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(72, 229, 255, 0.15)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        {/* Monogram / Brand Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <button
            onClick={() => scrollTo("hero")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, rgba(72, 229, 255, 0.2), rgba(139, 92, 255, 0.2))",
                border: "1px solid var(--cyan)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "1.1rem",
                color: "#ffffff",
                boxShadow: "0 0 15px rgba(72, 229, 255, 0.3)",
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
              }}
            >
              DG
            </div>
            <div style={{ textAlign: "left", lineHeight: 1.2 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "-0.01em",
                  color: "#ffffff",
                }}
              >
                DIVYANSHI<span style={{ color: "var(--cyan)" }}>.GUPTA</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.15em",
                }}
              >
                DIGITAL REALM // 2026
              </div>
            </div>
          </button>

          {/* Status Indicator */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.3rem 0.8rem",
              borderRadius: "999px",
              background: "rgba(16, 185, 129, 0.08)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: "#34d399",
              letterSpacing: "0.08em",
            }}
            className="desktop-status-pill"
          >
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
            OPEN TO OPPORTUNITIES
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "1.5rem",
          }}
          className="desktop-nav-menu"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={() => cyberAudio.playHover()}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--cyan)" : "var(--text-secondary)",
                  cursor: "pointer",
                  padding: "0.4rem 0.2rem",
                  position: "relative",
                  transition: "color 0.2s ease",
                }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, var(--cyan), var(--purple))",
                      boxShadow: "0 0 10px var(--cyan)",
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Sound Toggle + Connect CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Cyber Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Mute Cyber Audio FX" : "Enable Cyber Audio FX"}
            style={{
              background: soundEnabled ? "rgba(72, 229, 255, 0.15)" : "rgba(12, 18, 34, 0.7)",
              border: `1px solid ${soundEnabled ? "var(--cyan)" : "rgba(72, 229, 255, 0.2)"}`,
              borderRadius: "8px",
              padding: "0.45rem 0.75rem",
              color: soundEnabled ? "var(--cyan)" : "var(--text-muted)",
              cursor: "pointer",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "all 0.2s ease",
            }}
          >
            <span>{soundEnabled ? "🔊" : "🔇"}</span>
            <span style={{ display: "none" }} className="sound-text">
              {soundEnabled ? "AUDIO ON" : "AUDIO OFF"}
            </span>
          </button>

          {/* Let's Connect CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="btn-cyber-primary"
            style={{
              padding: "0.55rem 1.3rem",
              fontSize: "0.82rem",
              display: "none",
            }}
            id="nav-connect-btn"
          >
            LET'S CONNECT
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              cyberAudio.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            style={{
              background: "none",
              border: "1px solid rgba(72, 229, 255, 0.3)",
              borderRadius: "6px",
              padding: "0.45rem 0.65rem",
              color: "var(--cyan)",
              cursor: "pointer",
              fontSize: "1.2rem",
              display: "block",
            }}
            className="mobile-hamburger-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              top: "76px",
              left: 0,
              right: 0,
              background: "rgba(7, 10, 18, 0.98)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(72, 229, 255, 0.2)",
              padding: "1.5rem 2rem 2.5rem",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--cyan)",
                letterSpacing: "0.15em",
                borderBottom: "1px solid rgba(72, 229, 255, 0.15)",
                paddingBottom: "0.5rem",
              }}
            >
              // COMMAND NAVIGATION
            </div>

            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: activeSection === item.id ? "var(--cyan)" : "var(--text-primary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.4rem 0",
                }}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span style={{ color: "var(--cyan)", fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}>
                    ◀ ACTIVE
                  </span>
                )}
              </button>
            ))}

            <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(72, 229, 255, 0.15)" }}>
              <button
                onClick={() => scrollTo("contact")}
                className="btn-cyber-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                LET'S CONNECT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav-menu { display: flex !important; }
          .desktop-status-pill { display: flex !important; }
          #nav-connect-btn { display: inline-flex !important; }
          .mobile-hamburger-btn { display: none !important; }
          .sound-text { display: inline !important; }
        }
      `}</style>
    </>
  );
}
