/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', 'SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'SF Mono', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        geist: {
          bg: '#0a0a0a',
          'bg-secondary': '#141414',
          fg: '#ededed',
          'fg-secondary': '#a1a1aa',
          'fg-tertiary': '#71717a',
          border: 'rgba(255,255,255,0.1)',
          'border-hover': 'rgba(255,255,255,0.2)',
          accent: '#3b82f6',
          'accent-hover': '#60a5fa',
          'accent-bg': 'rgba(59, 130, 246, 0.1)',
          red: '#ef4444',
          'red-bg': 'rgba(239, 68, 68, 0.1)',
          amber: '#f59e0b',
          'amber-bg': 'rgba(245, 158, 11, 0.1)',
          green: '#10b981',
          'green-bg': 'rgba(16, 185, 129, 0.1)',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        geist: '8px',
        'geist-md': '12px',
        'geist-lg': '16px',
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(0,0,0,0.5)',
        popover: '0 8px 32px -4px rgba(0,0,0,0.6)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        wide: '0.05em',
      },
    },
  },
  plugins: [],
};
