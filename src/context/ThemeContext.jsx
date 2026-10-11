import { createContext, useContext, useEffect, useState } from "react";

// Curated master palettes extracted directly from the user's reference sheet
export const PALETTES = {
  aurora: {
    id: "aurora",
    name: "Aurora Violet",
    badge: "UI/UX Expert Pick · #6",
    description: "Electric Violet & Cyber Sky with Hyper Mint accents",
    // 4 colors from Row 2, Column 2 of reference
    colors: ["#7A56D0", "#4FC0E8", "#5BE7C4", "#F6F7FB"],
    primary: "#7A56D0",
    secondary: "#4FC0E8",
    accent: "#5BE7C4",
    lightSurface: "#F6F7FB",
    darkBg: "#070914",
    darkGradient: "radial-gradient(ellipse at 50% 0%, #15132d 0%, #080a15 55%, #04050b 100%)",
  },
  oceanic: {
    id: "oceanic",
    name: "Cosmic Indigo",
    badge: "Deep Space · #2",
    description: "Midnight Indigo & Vibrant Cyan Oceanic glow",
    // 4 colors from Row 1, Column 2 of reference
    colors: ["#43D9E7", "#3EC4D0", "#393C83", "#2A2C5F"],
    primary: "#393C83",
    secondary: "#43D9E7",
    accent: "#3EC4D0",
    lightSurface: "#F3F7FD",
    darkBg: "#050818",
    darkGradient: "radial-gradient(ellipse at 50% 0%, #121c3b 0%, #060919 55%, #02040c 100%)",
  },
  sunset: {
    id: "sunset",
    name: "Solar Sunset",
    badge: "Synthwave · #15",
    description: "Royal Plum with Warm Solar Amber and Orange",
    // 4 colors from Row 4, Column 3 of reference
    colors: ["#ED743F", "#FFAF50", "#423465", "#824C97"],
    primary: "#824C97",
    secondary: "#ED743F",
    accent: "#FFAF50",
    lightSurface: "#FCF8F5",
    darkBg: "#120817",
    darkGradient: "radial-gradient(ellipse at 50% 0%, #261132 0%, #130718 55%, #08020b 100%)",
  },
  matrix: {
    id: "matrix",
    name: "Bio Emerald",
    badge: "Cyber Tech · #4",
    description: "Deep Navy with Cyber Lime & Golden highlights",
    // 4 colors from Row 1, Column 4 of reference
    colors: ["#FFD716", "#0DA574", "#073358", "#001F3E"],
    primary: "#0DA574",
    secondary: "#38bdf8",
    accent: "#FFD716",
    lightSurface: "#F3FAF7",
    darkBg: "#03121b",
    darkGradient: "radial-gradient(ellipse at 50% 0%, #072836 0%, #03141e 55%, #01080d 100%)",
  },
  crimson: {
    id: "crimson",
    name: "Crimson Rose",
    badge: "High-Voltage · #3",
    description: "Noir Charcoal with Bold Berry & Neon Crimson",
    // 4 colors from Row 1, Column 3 of reference
    colors: ["#2B2024", "#A80139", "#FD0053", "#FFFFFF"],
    primary: "#A80139",
    secondary: "#FD0053",
    accent: "#4FC0E8",
    lightSurface: "#FDF5F7",
    darkBg: "#14060c",
    darkGradient: "radial-gradient(ellipse at 50% 0%, #2b0c19 0%, #14050d 55%, #080205 100%)",
  },
};

function hexToRgb(hex) {
  let c = hex.replace("#", "");
  if (c.length === 3) c = c.split("").map((x) => x + x).join("");
  const num = parseInt(c, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const [paletteId, setPaletteId] = useState(() => {
    return localStorage.getItem("portfolio-palette") || "aurora";
  });

  const currentPalette = PALETTES[paletteId] || PALETTES.aurora;

  // Apply theme and palette to DOM and CSS root variables
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-palette", paletteId);
    localStorage.setItem("portfolio-theme", theme);
    localStorage.setItem("portfolio-palette", paletteId);

    const isLight = theme === "light";
    const p = hexToRgb(currentPalette.primary);
    const s = hexToRgb(currentPalette.secondary);
    const a = hexToRgb(currentPalette.accent);

    // Accent variables
    root.style.setProperty("--purple", currentPalette.primary);
    root.style.setProperty("--cyan", currentPalette.secondary);
    root.style.setProperty("--emerald", currentPalette.accent);
    root.style.setProperty("--purple-glow", `rgba(${p.r}, ${p.g}, ${p.b}, 0.35)`);
    root.style.setProperty("--cyan-glow", `rgba(${s.r}, ${s.g}, ${s.b}, 0.35)`);
    root.style.setProperty("--glow-cyan", `0 0 35px rgba(${s.r}, ${s.g}, ${s.b}, 0.28)`);
    root.style.setProperty("--glow-purple", `0 0 35px rgba(${p.r}, ${p.g}, ${p.b}, 0.28)`);

    // Borders & Dividers
    root.style.setProperty("--border", `rgba(${s.r}, ${s.g}, ${s.b}, ${isLight ? 0.22 : 0.16})`);
    root.style.setProperty("--border-strong", `rgba(${s.r}, ${s.g}, ${s.b}, 0.5)`);
    root.style.setProperty("--border-purple", `rgba(${p.r}, ${p.g}, ${p.b}, ${isLight ? 0.3 : 0.28})`);

    if (isLight) {
      // Light Mode Surfaces & Typography
      root.style.setProperty("--bg", currentPalette.lightSurface);
      root.style.setProperty(
        "--bg-gradient",
        `radial-gradient(ellipse at 50% 0%, #ffffff 0%, ${currentPalette.lightSurface} 65%, #e6ecf8 100%)`
      );
      root.style.setProperty("--bg-surface", "rgba(255, 255, 255, 0.88)");
      root.style.setProperty("--bg-surface-elevated", "rgba(255, 255, 255, 0.98)");
      root.style.setProperty("--bg-surface-hover", "#ffffff");
      root.style.setProperty("--nav-bg", "rgba(246, 248, 252, 0.86)");
      root.style.setProperty("--nav-bg-scrolled", "rgba(246, 248, 252, 0.96)");
      root.style.setProperty("--mobile-nav-bg", "rgba(246, 248, 252, 0.98)");
      root.style.setProperty("--marquee-bg", "rgba(240, 244, 252, 0.95)");
      root.style.setProperty("--footer-bg", "rgba(238, 243, 252, 0.95)");
      root.style.setProperty("--text-primary", "#0c1124");
      root.style.setProperty("--text-secondary", "#334155");
      root.style.setProperty("--text-muted", "#64748b");
      root.style.setProperty("--text-dim", "#94a3b8");
      root.style.setProperty("--card-shadow", "0 18px 40px rgba(12, 17, 36, 0.08)");
    } else {
      // Dark Mode Surfaces & Typography
      root.style.setProperty("--bg", currentPalette.darkBg);
      root.style.setProperty("--bg-gradient", currentPalette.darkGradient);
      root.style.setProperty("--bg-surface", "rgba(12, 17, 34, 0.75)");
      root.style.setProperty("--bg-surface-elevated", "rgba(17, 24, 46, 0.92)");
      root.style.setProperty("--bg-surface-hover", "rgba(22, 32, 60, 0.98)");
      root.style.setProperty("--nav-bg", "rgba(7, 10, 18, 0.7)");
      root.style.setProperty("--nav-bg-scrolled", "rgba(7, 10, 18, 0.94)");
      root.style.setProperty("--mobile-nav-bg", "rgba(7, 10, 18, 0.98)");
      root.style.setProperty("--marquee-bg", "rgba(10, 13, 22, 0.95)");
      root.style.setProperty("--footer-bg", "rgba(4, 6, 11, 0.9)");
      root.style.setProperty("--text-primary", "#f8fafc");
      root.style.setProperty("--text-secondary", "#94a3b8");
      root.style.setProperty("--text-muted", "#64748b");
      root.style.setProperty("--text-dim", "#475569");
      root.style.setProperty("--card-shadow", "0 25px 60px rgba(0, 0, 0, 0.75)");
    }
  }, [theme, paletteId, currentPalette]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const changePalette = (newPaletteId) => {
    if (PALETTES[newPaletteId]) {
      setPaletteId(newPaletteId);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        paletteId,
        currentPalette,
        changePalette,
        palettes: Object.values(PALETTES),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
