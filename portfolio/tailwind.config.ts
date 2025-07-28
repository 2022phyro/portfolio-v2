import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-pri-dark)',
        },
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        bg: {
          DEFAULT: 'var(--color-bg)',
          alt: 'var(--color-bg-alt)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          alt: 'var(--color-text-alt)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        mulish: ['var(--font-mulish)', 'sans-serif'],
        ms: ['var(--font-ms)', 'sans-serif'],
        'medieval-sharp': ['var(--font-medieval-sharp)', 'serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        'card-heading': ['var(--font-card-heading)', 'sans-serif'],
        style: ['var(--font-style)', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
