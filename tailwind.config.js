/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      screens: {
      'sm': '480px',
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '976px',
      'xl': '1440px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [],
}
