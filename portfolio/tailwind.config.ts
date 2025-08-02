import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "leaf-vein":
          "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.05' stroke='%230b2f28' stroke-width='0.5'%3E%3Cpath d='M0 40 Q40 40 80 40 M40 0 Q40 40 40 80 M0 0 Q40 40 80 80 M80 0 Q40 40 0 80' /%3E%3C/g%3E%3C/svg%3E\")",
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-pri-dark)",
        },
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        bg: {
          DEFAULT: "var(--color-bg)",
          alt: "var(--color-bg-alt)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          alt: "var(--color-text-alt)",
        },
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
