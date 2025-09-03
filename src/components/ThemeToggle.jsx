import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className={cn(
        "w-16 h-8 flex items-center rounded-full p-1 transition-transform duration-700",
        "overflow-hidden border-none",
        isScrolled 
          ? "sm:-translate-y-1 -translate-y-0"
          : "translate-y-0",
        isDarkMode
          ? "bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600"
          : "bg-gradient-to-r from-blue-200 via-indigo-200 to-yellow-200",
        "shadow-[0_0_10px_rgba(139,92,246,0.5)]"
      )}
    >
      {/* Slider ball */}
      <Motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 250, 
          damping: 28    
        }}
        className={cn(
          "w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-lg",
          "relative"
        )}
        style={{
          x: isDarkMode ? 32 : 0
        }}
      >
        {/* Sun & Moon */}
        <Sun
          className={cn(
            "absolute h-4 w-4 text-yellow-400 drop-shadow-[0_0_4px_rgb(250,204,21)]",
            isDarkMode ? "opacity-100" : "opacity-0"
          )}
          style={{ transition: "opacity 0.4s ease" }}
        />
        <Moon
          className={cn(
            "absolute h-4 w-4 text-blue-500 drop-shadow-[0_0_4px_rgb(59,130,246)]",
            isDarkMode ? "opacity-0" : "opacity-100"
          )}
          style={{ transition: "opacity 0.4s ease" }}
        />
      </Motion.div>
    </button>
  );
};
