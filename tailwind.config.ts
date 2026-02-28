import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: '#E2E8F0',
        'border-strong': '#CBD5E1',
        primary: {
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
        },
        accent: {
          DEFAULT: '#8B5CF6',
        },
        text: {
          primary: '#0F172A',
          secondary: '#334155',
          muted: '#64748B',
          subtle: '#94A3B8',
        },
        bg: {
          primary: '#FFFFFF',
          secondary: '#F8FAFC',
          tertiary: '#F1F5F9',
          hover: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Geist', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        display: ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 8px 24px rgba(15, 23, 42, 0.12)',
        'button': '0 4px 12px rgba(14, 165, 233, 0.3)',
        'button-hover': '0 8px 24px rgba(14, 165, 233, 0.4)',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
