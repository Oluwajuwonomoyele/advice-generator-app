/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px'
    },
    extend: {
      colors: {
        primary: {
          'light-cyan': 'hsl(193, 38%, 86%)',
          'neon-green': 'hsl(150, 100%, 66%)'
        },
        neutral: {
          'grayish-blue': 'hsl(217, 19%, 38%)',
          'dark-grayish-blue': 'hsl(217, 19%, 24%)',
          'dark-blue': 'hsl(218, 23%, 16%)'
        }
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}
