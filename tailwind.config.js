/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '673px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
};
