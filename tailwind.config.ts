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
        // Pure Black Racing Backgrounds
        primary: '#000000',
        'deep-black': '#0A0A0A',
        secondary: '#121212',
        'charcoal': '#1C1C1C',
        elevated: '#1C1C1C',
        
        // Racing Red - Aggressive
        brand: '#FF0000',
        'brand-dark': '#CC0000',
        'brand-secondary': '#FF3333',
        
        // Performance Accents
        accent: '#FFD700',
        'speed-orange': '#FF8C00',
        
        // Text - High Contrast
        muted: '#999999',
        subtle: '#CCCCCC',
        'racing-white': '#F5F5F5',
        
        // Borders
        default: '#2A2A2A',
        tertiary: '#1A1A1A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 30px rgba(255, 0, 0, 0.5)',
        'glow-yellow': '0 0 30px rgba(255, 215, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
