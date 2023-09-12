import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'danger': {
          DEFAULT: '#EF4444',
          50: '#FDEDED',
          100: '#FCDADA',
          200: '#F9B5B5',
          300: '#F58F8F',
          400: '#F26A6A',
          500: '#EF4444',
          600: '#E71414',
          700: '#B30F0F',
          800: '#800B0B',
          900: '#4C0707'
        },
        'primary': {
          DEFAULT: '#68c4c6',
          50: '#f0fbfb',
          100: '#daf3f2',
          200: '#bae7e6',
          300: '#8ad6d6',
          400: '#68c4c6',
          500: '#379fa3',
          600: '#30828a',
          700: '#2d6b71',
          800: '#2c585e',
          900: '#284b51',
        },
        'secondary': {
          DEFAULT: '#6C757D',
          50: '#F5F7FA',
          100: '#C2C6CA',
          200: '#ACB2B7',
          300: '#969EA4',
          400: '#808992',
          500: '#6C757D',
          600: '#52595F',
          700: '#383D41',
          800: '#1E2023',
          900: '#040405'
        }
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
    require('@tailwindcss/typography')
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#68c4c6",
          secondary: "#6C757D",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
        dark: {
          "base-100": "#1e232a"
        }
      }
    ]
  }
}
export default config
