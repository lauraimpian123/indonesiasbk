import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0C10',
        secondary: '#1A1D29',
        elevated: '#252A3A',
        brand: '#FF3366',
        'brand-secondary': '#FF6B9D',
        accent: '#FFD700',
        muted: '#6B7280',
        subtle: '#B8C5D6',
        default: '#374151',
        tertiary: '#1F2937',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
