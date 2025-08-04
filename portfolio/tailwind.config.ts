import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    extend: {
      backgroundImage: {
        "leaf-vein":
          "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.05' stroke='%230b2f28' stroke-width='0.5'%3E%3Cpath d='M0 40 Q40 40 80 40 M40 0 Q40 40 40 80 M0 0 Q40 40 80 80 M80 0 Q40 40 0 80' /%3E%3C/g%3E%3C/svg%3E\")",
      },      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-text-primary)",
        primary: {
          DEFAULT: "var(--color-primary)",
        },
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        surface: {
          DEFAULT: "var(--color-surface)",
          alt: "var(--color-surface-alt)",
          muted: "var(--color-surface-muted)",
        },
        bg: {
          DEFAULT: "var(--color-background)",
        },
        text: {
          DEFAULT: "var(--color-text-primary)",
          primary: "var(--color-text-primary)",
          muted: "var(--color-text-muted)",
          accent: "var(--color-text-accent)",
        },
        border: "var(--color-border)",
        shadow: "var(--color-shadow)",
        highlight: "var(--color-highlight)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        mulish: ["var(--font-mulish)", "sans-serif"],
        ms: ["var(--font-ms)", "sans-serif"],
        "medieval-sharp": ["var(--font-medieval-sharp)", "serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        "card-heading": ["var(--font-card-heading)", "sans-serif"],
        style: ["var(--font-style)", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
