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
          bg: '#ffffff',
          'bg-secondary': '#fafafa',
          fg: '#171717',
          'fg-secondary': '#4d4d4d',
          'fg-tertiary': '#8f8f8f',
          border: 'rgba(0,0,0,0.08)',
          'border-hover': 'rgba(0,0,0,0.14)',
          accent: '#006bff',
          'accent-hover': '#0059ec',
          'accent-bg': '#f0f7ff',
          red: '#fc0035',
          'red-bg': '#ffeeef',
          amber: '#ffae00',
          'amber-bg': '#fff6de',
          green: '#28a948',
          'green-bg': '#ecfdec',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        geist: '6px',
        'geist-md': '12px',
        'geist-lg': '16px',
      },
      boxShadow: {
        card: '0 2px 2px rgba(0,0,0,0.04)',
        popover: '0 1px 1px rgba(0,0,0,0.02), 0 4px 8px -4px rgba(0,0,0,0.04), 0 16px 24px -8px rgba(0,0,0,0.06)',
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
