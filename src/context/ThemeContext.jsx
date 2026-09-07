import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const THEMES = [
  { id: "cyber", label: "Dark Cyan", icon: "💎", color: "#38bdf8" },
  { id: "gold", label: "Dark Gold", icon: "👑", color: "#eab308" },
  { id: "light", label: "Pure Light", icon: "☀️", color: "#f8fafc" },
  { id: "system", label: "System Auto", icon: "💻", color: "#94a3b8" },
];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "cyber";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-cyber", "theme-gold", "theme-light");

    if (theme === "system") {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(systemDark ? "theme-cyber" : "theme-light");
    } else {
      root.classList.add(`theme-${theme}`);
    }

    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);