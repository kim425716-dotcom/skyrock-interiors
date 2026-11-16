/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF5',
          100: '#FAF4E3',
          200: '#F3E4BF',
          300: '#EBD19B',
          400: '#DFC075',
          500: '#D4AF37', // Primary Luxury Gold
          600: '#B89225',
          700: '#917119',
          800: '#6A5212',
          900: '#43340B',
        },
        obsidian: {
          950: '#07090E',
          900: '#0C0F17',
          850: '#111520',
          800: '#171D2A',
          700: '#232A3B',
          600: '#333D52',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 40px -5px rgba(212, 175, 55, 0.45)',
        'luxury-card': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        }
      }
    },
  },
  plugins: [],
}
