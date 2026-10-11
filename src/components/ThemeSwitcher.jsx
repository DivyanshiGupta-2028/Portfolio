import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { cyberAudio } from "../utils/cyberAudio";

export default function ThemeSwitcher({ isMobile = false }) {
  const { theme, toggleTheme, paletteId, currentPalette, changePalette, palettes } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleTheme = () => {
    cyberAudio.playClick();
    toggleTheme();
  };

  const handleSelectPalette = (id) => {
    cyberAudio.playLaser();
    changePalette(id);
    setDropdownOpen(false);
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      {/* Light / Dark Mode Toggle Pill */}
      <button
        onClick={handleToggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
        title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.45rem",
          padding: isMobile ? "0.6rem 1rem" : "0.45rem 0.8rem",
          borderRadius: "8px",
          background: theme === "dark" ? "rgba(12, 18, 34, 0.7)" : "rgba(255, 255, 255, 0.85)",
          border: `1px solid var(--border)`,
          color: "var(--text-primary)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.75rem",
          cursor: "pointer",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transition: "all 0.25s ease",
          boxShadow: theme === "light" ? "0 2px 10px rgba(0,0,0,0.06)" : "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--cyan)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border)";
        }}
      >
        <motion.span
          key={theme}
          initial={{ rotate: -45, scale: 0.7, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{ fontSize: "0.95rem", display: "inline-flex" }}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </motion.span>
        <span style={{ fontWeight: 600, letterSpacing: "0.05em" }}>
          {theme === "dark" ? "DARK" : "LIGHT"}
        </span>
      </button>

      {/* Palette Picker Trigger */}
      <button
        onClick={() => {
          cyberAudio.playClick();
          setDropdownOpen((prev) => !prev);
        }}
        aria-label="Choose Creative Color Palette"
        title="Choose Creative Color Palette (Reference Palettes)"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: isMobile ? "0.6rem 0.85rem" : "0.45rem 0.7rem",
          borderRadius: "8px",
          background: dropdownOpen
            ? "rgba(122, 86, 208, 0.2)"
            : theme === "dark"
            ? "rgba(12, 18, 34, 0.7)"
            : "rgba(255, 255, 255, 0.85)",
          border: `1px solid ${dropdownOpen ? "var(--cyan)" : "var(--border)"}`,
          color: "var(--text-primary)",
          cursor: "pointer",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          transition: "all 0.25s ease",
        }}
      >
        <span style={{ fontSize: "0.95rem" }}>🎨</span>
        {/* Swatch mini preview dots */}
        <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
          {currentPalette.colors.slice(0, 3).map((col, idx) => (
            <span
              key={idx}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: col,
                boxShadow: `0 0 5px ${col}`,
              }}
            />
          ))}
        </div>
      </button>

      {/* Palette Selector Popover */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 0 : 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isMobile ? 0 : 10, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            style={{
              position: isMobile ? "fixed" : "absolute",
              top: isMobile ? "auto" : "calc(100% + 10px)",
              bottom: isMobile ? "80px" : "auto",
              right: isMobile ? "1.5rem" : 0,
              left: isMobile ? "1.5rem" : "auto",
              width: isMobile ? "auto" : "330px",
              background: theme === "dark" ? "rgba(10, 13, 24, 0.98)" : "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid var(--border-strong)",
              borderRadius: "14px",
              padding: "1.1rem",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.55), var(--glow-cyan)",
              zIndex: 1100,
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.8rem",
                paddingBottom: "0.5rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    color: "var(--cyan)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  // MASTER PALETTE SUITE
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    color: "var(--text-primary)",
                  }}
                >
                  Curated Creative Schemes
                </div>
              </div>
              <button
                onClick={() => setDropdownOpen(false)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--text-muted)",
                  fontSize: "1rem",
                  cursor: "pointer",
                  padding: "0.2rem",
                }}
              >
                ✕
              </button>
            </div>

            {/* List of Palettes */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
              {palettes.map((p) => {
                const isSelected = p.id === paletteId;
                return (
                  <button
                    key={p.id}
                    onClick={() => handleSelectPalette(p.id)}
                    style={{
                      background: isSelected
                        ? theme === "dark"
                          ? "rgba(122, 86, 208, 0.18)"
                          : "rgba(122, 86, 208, 0.12)"
                        : theme === "dark"
                        ? "rgba(18, 24, 44, 0.5)"
                        : "rgba(240, 244, 252, 0.8)",
                      border: `1px solid ${isSelected ? "var(--cyan)" : "var(--border)"}`,
                      borderRadius: "10px",
                      padding: "0.65rem 0.85rem",
                      cursor: "pointer",
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = "var(--border-strong)";
                        e.currentTarget.style.transform = "translateX(3px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.transform = "none";
                      }
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            fontSize: "0.85rem",
                            color: "var(--text-primary)",
                          }}
                        >
                          {p.name}
                        </span>
                        {isSelected && (
                          <span
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "0.65rem",
                              color: "var(--cyan)",
                              fontWeight: 700,
                            }}
                          >
                            ✓ ACTIVE
                          </span>
                        )}
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.62rem",
                          color: isSelected ? "var(--cyan)" : "var(--text-muted)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {p.badge}
                      </span>
                    </div>

                    {/* 4-Stripe Color Bar from User's Sheet */}
                    <div
                      style={{
                        display: "flex",
                        height: "10px",
                        width: "100%",
                        borderRadius: "5px",
                        overflow: "hidden",
                        border: "1px solid rgba(0,0,0,0.15)",
                      }}
                    >
                      {p.colors.map((c, i) => (
                        <div
                          key={i}
                          style={{
                            flex: 1,
                            background: c,
                          }}
                          title={c}
                        />
                      ))}
                    </div>

                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.68rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.3,
                      }}
                    >
                      {p.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
