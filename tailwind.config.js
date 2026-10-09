/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7EEDC',
        beige: '#EADCC5',
        espresso: '#201A13',
        'espresso-light': '#2A241D',
        'burnt-orange': '#C87524',
        'burnt-orange-dark': '#A85F1A',
        terracotta: '#D99A5B',
        'muted-text': '#756E64',
        'border-warm': '#E3D8C7',
      },
      fontFamily: {
        bengali: ['"Noto Sans Bengali"', 'sans-serif'],
        sans: ['Inter', '"Noto Sans Bengali"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 7vw, 4.75rem)', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section': ['clamp(2rem, 5.5vw, 3.5rem)', { lineHeight: '1.18', letterSpacing: '-0.01em', fontWeight: '700' }],
        'cta': ['clamp(2.25rem, 6vw, 3.75rem)', { lineHeight: '1.12', letterSpacing: '-0.01em', fontWeight: '700' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
