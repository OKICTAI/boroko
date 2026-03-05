/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FFFAF3',
          200: '#FFF5E8',
          300: '#FFEDD4',
        },
        sage: {
          50: '#F0F5F1',
          100: '#DCE8DF',
          200: '#BBD2C2',
          300: '#8FB69D',
          400: '#6A9B7D',
          500: '#4A7C5F',
          600: '#3A634C',
          700: '#30503F',
          800: '#284034',
          900: '#22362C',
        },
        clay: {
          50: '#FDF5EE',
          100: '#F9E7D5',
          200: '#F2CCAA',
          300: '#E9AB76',
          400: '#E09050',
          500: '#D47634',
          600: '#C15E29',
        },
        warm: {
          50: '#FAF8F5',
          100: '#F5F0EA',
          200: '#EBE3D9',
          300: '#DDD2C4',
          400: '#C4B5A2',
          500: '#A99882',
          600: '#8C7D68',
          700: '#6B5F4E',
          800: '#4A4238',
          900: '#2C2622',
          950: '#1A1613',
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
