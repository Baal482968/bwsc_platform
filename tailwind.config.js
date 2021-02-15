const NAVBAR_HEIGHT = '7rem'

module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        navbar: NAVBAR_HEIGHT,
        content: `calc(100vh - ${NAVBAR_HEIGHT})`,
        'slogan-section': '60rem',
        'shopping-section': '20rem',
      },
      backgroundImage: () => ({
        'shopping-background': "url('assets/shopping-background.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
