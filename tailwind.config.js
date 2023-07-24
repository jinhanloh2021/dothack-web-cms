/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        offBlack: '#222222',
        offWhite: '#F7F7F7',
        textSecondaryDark: '#919191',
        textSecondaryLight: '#7e7e7e',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        jetBrainsMono: ['JetBrains Mono', 'monospace'],
        EBGaramond: ['EB Garamond', 'serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
