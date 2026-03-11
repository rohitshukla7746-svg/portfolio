import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed max-sm:hidden top-5 right-5 z-50 p-2.5 rounded-full transition-all duration-300"
      style={
        isDarkMode
          ? {
              // Dark mode — aurora green glow (night/aurora theme)
              background: "rgba(0,255,150,0.08)",
              border: "1px solid rgba(0,255,150,0.3)",
              boxShadow: "0 0 16px rgba(0,255,150,0.2)",
            }
          : {
              // Light mode — warm sun glow (day theme)
              background: "rgba(255,200,50,0.12)",
              border: "1px solid rgba(255,200,50,0.4)",
              boxShadow: "0 0 16px rgba(255,200,50,0.25)",
            }
      }
      onMouseEnter={(e) => {
        if (isDarkMode) {
          e.currentTarget.style.boxShadow = "0 0 28px rgba(0,255,150,0.4)";
          e.currentTarget.style.background = "rgba(0,255,150,0.15)";
        } else {
          e.currentTarget.style.boxShadow = "0 0 28px rgba(255,200,50,0.5)";
          e.currentTarget.style.background = "rgba(255,200,50,0.2)";
        }
      }}
      onMouseLeave={(e) => {
        if (isDarkMode) {
          e.currentTarget.style.boxShadow = "0 0 16px rgba(0,255,150,0.2)";
          e.currentTarget.style.background = "rgba(0,255,150,0.08)";
        } else {
          e.currentTarget.style.boxShadow = "0 0 16px rgba(255,200,50,0.25)";
          e.currentTarget.style.background = "rgba(255,200,50,0.12)";
        }
      }}
    >
      {isDarkMode ? (
        // Night mode — show Sun to switch to day
        <Sun
          className="h-5 w-5 transition-transform duration-300 hover:rotate-45"
          style={{
            color: "#ffd700",
            filter: "drop-shadow(0 0 6px rgba(255,215,0,0.8))",
          }}
        />
      ) : (
        // Day mode — show Moon to switch to night
        <Moon
          className="h-5 w-5 transition-transform duration-300"
          style={{
            color: "#00ffaa",
            filter: "drop-shadow(0 0 6px rgba(0,255,150,0.8))",
          }}
        />
      )}
    </button>
  );
};
