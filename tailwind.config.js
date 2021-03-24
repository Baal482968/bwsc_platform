const NAVBAR_HEIGHT = '6rem'
const NAVBAR_HEIGHT_MOBILE = '4rem'

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
        '1/20': '5%',
      },
      spacing: {
        navbar: NAVBAR_HEIGHT,
        'navbar-mobile': NAVBAR_HEIGHT_MOBILE,
      },
      height: {
        'slogan-section': '60rem',
        'slogan-section-mobile': '30rem',
        'shopping-section': '40rem',
        'menu-link': '40rem',
        'mobile-menu-link': '30rem',
        'shopping-section-mobile': '20rem',
      },
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
