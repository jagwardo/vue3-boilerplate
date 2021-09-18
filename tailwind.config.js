module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        company: {
          secondary: '#73cd91',
          primary:  '#2392a8',
          dark: '#202e78',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
