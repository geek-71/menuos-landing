import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper:    '#FBF7F0',
        ink:      '#000000ff',
        tandoor:  '#e42436',
        'tandoor-dark': '#ce0c1fff',
        curry:    '#166534',
        muted:    '#8A7560',
        line:     '#E5DDD0',
      },
      fontFamily: {
        display: [ 'ui-sans-serif','system-ui', 'sans-serif'],
        body:    ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease-out forwards',
        'fade-in':   'fadeIn 0.6s ease-out forwards',
        'scan-line': 'scanLine 2.4s ease-in-out infinite',
        'float':     'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scanLine: {
          '0%, 100%': { transform: 'translateY(0%)' },
          '50%':      { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%':      { transform: 'translateY(-10px) rotate(1deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
