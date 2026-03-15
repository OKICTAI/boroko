/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Inter Tight"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Inter Tight"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FAFAF8',
          100: '#F4F4F0',
          200: '#E8E8E3',
          300: '#D0D0CA',
        },
        sage: {
          50: '#EEF3F0',
          100: '#D0E2D8',
          200: '#A1C5B1',
          300: '#73A88A',
          400: '#3D7A5F',
          500: '#1F5C45',
          600: '#1A4D3A',
          700: '#143D2E',
          800: '#0E2C21',
          900: '#071A13',
        },
        clay: {
          50: '#FBF7EE',
          100: '#F5E9CC',
          200: '#EAD399',
          300: '#DABC66',
          400: '#C9A342',
          500: '#B08D57',
          600: '#8A6E40',
        },
        warm: {
          50: '#F8F8F7',
          100: '#EEEEEC',
          200: '#D8D8D5',
          300: '#B4B4AF',
          400: '#7E7E79',
          500: '#565652',
          600: '#424240',
          700: '#2E2E2C',
          800: '#1E1E1C',
          900: '#131311',
          950: '#0A0A09',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out infinite 3s',
        'breathe': 'breathe 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}
