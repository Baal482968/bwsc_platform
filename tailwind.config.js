const NAVBAR_HEIGHT = '7rem'

module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '1/5': '20%',
        '1/6': '16.67%',
        '1/7': '14.28%',
        '1/8': '12.5%',
        '1/9': '11.11%',
        '1/10': '10%',
      },
      height: {
        navbar: NAVBAR_HEIGHT,
        content: `calc(100vh - ${NAVBAR_HEIGHT})`,
        'slogan-section': '60rem',
        'shopping-section': '40rem',
        'menu-link': '40rem',
        'mobile-menu-link': '30rem',
      },
      backgroundImage: () => ({
        'shopping-background': "url('assets/shopping-background.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover'],
      textAlign: ['hover'],
    },
  },
  plugins: [],
}
