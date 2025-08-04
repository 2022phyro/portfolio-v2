"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 transition-all duration-300"
        disabled
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 animate-pulse rounded" />
      </button>
    );
  }

  // Use resolvedTheme to get the actual theme being used
  const isDark = resolvedTheme === "dark";
  
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    
    // Store in localStorage as backup
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full border border-gray-300 dark:border-gray-600  hover:bg-primary/20 transition-all duration-300 group shadow-sm bg-secondary/20 "
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun
          className={`absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-500 transform ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        {/* Moon Icon */}
        <Moon
          className={`absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-500 transform ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
      
      {/* Tooltip */}
      <span className="font-ml absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
        {isDark ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
}
