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
        black: '#060608',
        void: '#0a0a0f',
        dark: '#0f0f16',
        panel: '#14141e',
        surface: '#1a1a26',
        line: '#252535',
        muted: '#3a3a52',
        red: '#e8001a',
        'red-hot': '#ff1a30',
        'red-deep': '#8a0010',
        'red-glow': 'rgba(232,0,26,0.15)',
        white: '#f0f0f5',
        silver: '#b8b8cc',
        dim: '#6a6a88',
        gold: '#c8a020',
        'gold-light': '#f0c030',
        
        // Aliases for compatibility
        primary: '#060608',
        secondary: '#0f0f16',
        tertiary: '#14141e',
        brand: '#e8001a',
        'brand-secondary': '#ff1a30',
        default: '#252535',
        subtle: '#b8b8cc',
      },
      fontFamily: {
        head: ['var(--font-barlow-condensed)', 'sans-serif'],
        body: ['var(--font-barlow)', 'sans-serif'],
        mono: ['var(--font-share-tech)', 'monospace'],
        sans: ['var(--font-barlow)', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s infinite',
        'ticker': 'ticker 30s linear infinite',
        'float': 'float 2s ease-in-out infinite',
        'float2': 'float2 4s ease-in-out infinite',
        'loader-fill': 'loader-fill 1.2s ease forwards',
        'loader-pulse': 'loader-pulse 0.8s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        ticker: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%': { transform: 'translateX(-50%) translateY(6px)' },
        },
        float2: {
          '0%, 100%': { transform: 'rotate(-15deg) translateY(0)' },
          '50%': { transform: 'rotate(-15deg) translateY(-12px)' },
        },
        'loader-fill': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'loader-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
