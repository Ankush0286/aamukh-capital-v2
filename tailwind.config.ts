import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        snow: {
          DEFAULT: '#FFFAFA',
          50: '#FFFFFF',
          100: '#FFFAFA',
          200: '#F5EBEB',
          300: '#EAE0E0',
        },
        brand: {
          DEFAULT: '#4C6BE8',
          50: '#E8ECFB',
          100: '#D5DCF8',
          200: '#AEBCF1',
          300: '#869CE9',
          400: '#5F7CE2',
          500: '#4C6BE8',
          600: '#2A4ED9',
          700: '#1F3BA6',
          800: '#152873',
          900: '#0B1540',
        },
        background: {
          primary: '#ffffff',
          secondary: '#f6f6f6',
        },
        text: {
          primary: '#000000',
          secondary: '#666666',
          muted: 'rgba(0, 0, 0, 0.4)',
        },
        border: {
          DEFAULT: '#f3f3f3',
        }
      },
      fontFamily: {
        // WEBSITE 2 FONTS
        sans: ['"Inter Tight"', 'sans-serif'],
        display: ['"Inter Tight"', 'sans-serif'],
        editorial: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        // Aliasing geom to sans so existing classes update automatically
        geom: ['"Inter Tight"', 'sans-serif'],
      },
      borderRadius: {
        'card': '1rem',
        'pill': '10rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'section-gap': '10rem',
      }
    },
  },
  plugins: [],
}
export default config