import { createContext, useContext, useEffect, useState } from "react";

// ── Graphite + Electric Orange — single fixed palette ──
export const PALETTES = {
  graphite: {
    id: "graphite",
    name: "Graphite + Electric Orange",
    badge: "Bold · Developer-focused · High contrast",
    description: "Graphite dark with Electric Orange accents",
    colors: ["#FF793F", "#FF793F", "#E9E9E7", "#F4F2EF"],
    // primary = orange accent, secondary = orange (same, used as glow source)
    primary: "#FF793F",
    secondary: "#FF793F",
    accent: "#E9E9E7",
    // Light mode surface — warm off-white
    lightSurface: "#F4F2EF",
    // Dark mode backgrounds
    darkBg: "#17191C",
    darkGradient: "radial-gradient(ellipse at 50% 0%, #25292E 0%, #1C1F23 55%, #17191C 100%)",
  },
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  // Fixed palette — Graphite + Electric Orange
  const paletteId = "graphite";
  const currentPalette = PALETTES.graphite;

  // Apply theme to DOM and update CSS custom properties
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-palette", "graphite");
    localStorage.setItem("portfolio-theme", theme);

    const isLight = theme === "light";

    // ── Orange accent vars (same in both themes) ──
    root.style.setProperty("--orange", "#FF793F");
    root.style.setProperty("--orange-dim", "#d4602e");
    root.style.setProperty("--orange-glow", "rgba(255, 121, 63, 0.35)");
    // Map legacy --cyan / --purple aliases → orange so existing glow classes work
    root.style.setProperty("--cyan", "#FF793F");
    root.style.setProperty("--cyan-dim", "#d4602e");
    root.style.setProperty("--cyan-glow", "rgba(255, 121, 63, 0.35)");
    root.style.setProperty("--purple", "#FF793F");
    root.style.setProperty("--purple-glow", "rgba(255, 121, 63, 0.30)");
    root.style.setProperty("--emerald", "#FF793F");
    root.style.setProperty("--glow-cyan", "0 0 35px rgba(255, 121, 63, 0.28)");
    root.style.setProperty("--glow-purple", "0 0 35px rgba(255, 121, 63, 0.22)");

    if (isLight) {
      // ── Light Mode — warm off-white surfaces, dark graphite text ──
      root.style.setProperty("--bg", "#F4F2EF");
      root.style.setProperty("--bg-gradient",
        "radial-gradient(ellipse at 50% 0%, #FFFFFF 0%, #F4F2EF 65%, #EAE8E4 100%)");
      root.style.setProperty("--bg-surface", "rgba(255, 255, 255, 0.90)");
      root.style.setProperty("--bg-surface-elevated", "rgba(255, 255, 255, 0.98)");
      root.style.setProperty("--bg-surface-hover", "#ffffff");
      root.style.setProperty("--nav-bg", "rgba(244, 242, 239, 0.88)");
      root.style.setProperty("--nav-bg-scrolled", "rgba(244, 242, 239, 0.97)");
      root.style.setProperty("--mobile-nav-bg", "rgba(244, 242, 239, 0.99)");
      root.style.setProperty("--marquee-bg", "rgba(234, 232, 228, 0.96)");
      root.style.setProperty("--footer-bg", "rgba(234, 232, 228, 0.98)");
      root.style.setProperty("--text-primary", "#17191C");
      root.style.setProperty("--text-secondary", "#3D4047");
      root.style.setProperty("--text-muted", "#6B7280");
      root.style.setProperty("--text-dim", "#9298A1");
      root.style.setProperty("--border", "rgba(255, 121, 63, 0.18)");
      root.style.setProperty("--border-strong", "rgba(255, 121, 63, 0.45)");
      root.style.setProperty("--border-purple", "rgba(255, 121, 63, 0.25)");
      root.style.setProperty("--card-shadow", "0 18px 40px rgba(23, 25, 28, 0.08)");
    } else {
      // ── Dark Mode — graphite backgrounds, electric orange accents ──
      root.style.setProperty("--bg", "#17191C");
      root.style.setProperty("--bg-gradient",
        "radial-gradient(ellipse at 50% 0%, #25292E 0%, #1C1F23 55%, #17191C 100%)");
      root.style.setProperty("--bg-surface", "rgba(37, 41, 46, 0.78)");
      root.style.setProperty("--bg-surface-elevated", "rgba(42, 47, 54, 0.94)");
      root.style.setProperty("--bg-surface-hover", "rgba(50, 56, 64, 0.98)");
      root.style.setProperty("--nav-bg", "rgba(23, 25, 28, 0.72)");
      root.style.setProperty("--nav-bg-scrolled", "rgba(23, 25, 28, 0.96)");
      root.style.setProperty("--mobile-nav-bg", "rgba(23, 25, 28, 0.99)");
      root.style.setProperty("--marquee-bg", "rgba(20, 22, 25, 0.97)");
      root.style.setProperty("--footer-bg", "rgba(18, 19, 22, 0.97)");
      root.style.setProperty("--text-primary", "#E9E9E7");
      root.style.setProperty("--text-secondary", "#9298A1");
      root.style.setProperty("--text-muted", "#6B7280");
      root.style.setProperty("--text-dim", "#4B5563");
      root.style.setProperty("--border", "rgba(255, 121, 63, 0.14)");
      root.style.setProperty("--border-strong", "rgba(255, 121, 63, 0.45)");
      root.style.setProperty("--border-purple", "rgba(255, 121, 63, 0.22)");
      root.style.setProperty("--card-shadow", "0 25px 60px rgba(0, 0, 0, 0.65)");
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
