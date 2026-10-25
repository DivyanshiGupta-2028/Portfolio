import { createContext, useContext, useEffect, useState } from "react";

// ── NeurolinkX High-Impact Flame + Midnight Theme ──
export const PALETTES = {
  graphite: {
    id: "graphite",
    name: "NeurolinkX Midnight + Flame",
    badge: "High-impact · Agency-grade · Ultra-crisp",
    description: "Deep #070A12 midnight with flame orange-to-red gradients",
    colors: ["#ff4e00", "#ff3b30", "#3b82f6", "#070A12"],
    primary: "#ff4e00",
    secondary: "#ff3b30",
    accent: "#f1f5f9",
    blue: "#3b82f6",
    indigo: "#6366f1",
    lightSurface: "#F8F9FA",
    darkBg: "#070A12",
    darkGradient: "radial-gradient(1200px 600px at 15% 10%, rgba(99, 102, 241, 0.18), transparent 60%), radial-gradient(900px 500px at 88% 28%, rgba(255, 59, 48, 0.14), transparent 62%), #070A12",
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const paletteId = "graphite";
  const currentPalette = PALETTES.graphite;

  // Apply theme to DOM and update CSS custom properties
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-palette", "graphite");
    localStorage.setItem("portfolio-theme", theme);

    const isLight = theme === "light";

    // ── Flame accents & gradients ──
    root.style.setProperty("--orange", "#ff4e00");
    root.style.setProperty("--orange-red", "#ff3b30");
    root.style.setProperty("--orange-dim", "#e64600");
    root.style.setProperty("--orange-glow", "rgba(255, 78, 0, 0.45)");
    root.style.setProperty("--blue-accent", "#3b82f6");
    root.style.setProperty("--indigo-accent", "#6366f1");
    root.style.setProperty("--gradient-flame", "linear-gradient(135deg, #ff4e00 0%, #ff3b30 50%, #f97316 100%)");

    // Legacy aliases mapped gracefully
    root.style.setProperty("--cyan", "#ff4e00");
    root.style.setProperty("--cyan-dim", "#e64600");
    root.style.setProperty("--cyan-glow", "rgba(255, 78, 0, 0.40)");
    root.style.setProperty("--purple", "#3b82f6");
    root.style.setProperty("--purple-glow", "rgba(59, 130, 246, 0.35)");
    root.style.setProperty("--emerald", "#10b981");
    root.style.setProperty("--glow-cyan", "0 0 35px rgba(255, 78, 0, 0.32)");
    root.style.setProperty("--glow-purple", "0 0 35px rgba(59, 130, 246, 0.28)");
    root.style.setProperty("--gold", "#f59e0b");
    root.style.setProperty("--teal", "#06b6d4");

    if (isLight) {
      // Light Mode
      root.style.setProperty("--bg", "#F8F9FA");
      root.style.setProperty("--bg-gradient",
        "radial-gradient(ellipse at 50% 0%, #FFFFFF 0%, #F1F5F9 65%, #E2E8F0 100%)");
      root.style.setProperty("--bg-surface", "rgba(255, 255, 255, 0.90)");
      root.style.setProperty("--bg-surface-elevated", "rgba(255, 255, 255, 0.98)");
      root.style.setProperty("--bg-surface-hover", "#ffffff");
      root.style.setProperty("--nav-bg", "rgba(248, 249, 250, 0.92)");
      root.style.setProperty("--nav-bg-scrolled", "rgba(248, 249, 250, 0.98)");
      root.style.setProperty("--mobile-nav-bg", "rgba(248, 249, 250, 0.99)");
      root.style.setProperty("--marquee-bg", "rgba(241, 245, 249, 0.96)");
      root.style.setProperty("--footer-bg", "rgba(241, 245, 249, 0.98)");
      root.style.setProperty("--text-primary", "#0f172a");
      root.style.setProperty("--text-secondary", "#334155");
      root.style.setProperty("--text-muted", "#64748b");
      root.style.setProperty("--text-dim", "#94a3b8");
      root.style.setProperty("--cream", "#0f172a");
      root.style.setProperty("--dim", "#64748b");
      root.style.setProperty("--muted", "#475569");
      root.style.setProperty("--surface", "rgba(255, 255, 255, 0.90)");
      root.style.setProperty("--surface2", "rgba(241, 245, 249, 0.96)");
      root.style.setProperty("--border", "rgba(255, 78, 0, 0.16)");
      root.style.setProperty("--border-strong", "rgba(255, 78, 0, 0.40)");
      root.style.setProperty("--border-purple", "rgba(59, 130, 246, 0.25)");
      root.style.setProperty("--card-shadow", "0 18px 40px rgba(15, 23, 42, 0.08)");
    } else {
      // ── Dark Mode (NeurolinkX Midnight) ──
      root.style.setProperty("--bg", "#070A12");
      root.style.setProperty("--bg-secondary", "#0a0e1a");
      root.style.setProperty("--bg-darker", "#050810");
      root.style.setProperty("--bg-gradient",
        "radial-gradient(1200px 600px at 15% 10%, rgba(99, 102, 241, 0.16), transparent 60%), radial-gradient(900px 500px at 88% 28%, rgba(255, 59, 48, 0.14), transparent 62%), #070A12");
      root.style.setProperty("--bg-surface", "rgba(255, 255, 255, 0.035)");
      root.style.setProperty("--bg-surface-elevated", "rgba(13, 21, 37, 0.85)");
      root.style.setProperty("--bg-surface-hover", "rgba(255, 255, 255, 0.07)");
      root.style.setProperty("--nav-bg", "rgba(7, 10, 18, 0.82)");
      root.style.setProperty("--nav-bg-scrolled", "rgba(7, 10, 18, 0.97)");
      root.style.setProperty("--mobile-nav-bg", "rgba(7, 10, 18, 0.99)");
      root.style.setProperty("--marquee-bg", "#050810");
      root.style.setProperty("--footer-bg", "#050810");
      root.style.setProperty("--text-primary", "#f1f5f9");
      root.style.setProperty("--text-secondary", "rgba(255, 255, 255, 0.72)");
      root.style.setProperty("--text-muted", "rgba(255, 255, 255, 0.45)");
      root.style.setProperty("--text-dim", "rgba(255, 255, 255, 0.30)");
      root.style.setProperty("--cream", "#f1f5f9");
      root.style.setProperty("--dim", "rgba(255, 255, 255, 0.45)");
      root.style.setProperty("--muted", "rgba(255, 255, 255, 0.72)");
      root.style.setProperty("--surface", "rgba(255, 255, 255, 0.035)");
      root.style.setProperty("--surface2", "rgba(13, 21, 37, 0.75)");
      root.style.setProperty("--border", "rgba(255, 255, 255, 0.10)");
      root.style.setProperty("--border-strong", "rgba(255, 78, 0, 0.50)");
      root.style.setProperty("--border-purple", "rgba(99, 102, 241, 0.25)");
      root.style.setProperty("--card-shadow", "0 25px 60px rgba(0, 0, 0, 0.75)");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Palette is fixed; this is a no-op kept for API compatibility
  const changePalette = () => {};

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        paletteId,
        currentPalette,
        changePalette,
        palettes: Object.values(PALETTES), // single palette
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
