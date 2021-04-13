module.exports = {
  theme: {
    screens: {
      xs: '475px',

      sm: '640px',

      md: '768px',

      lg: '1024px',

      lx: '1280px'
    },
    colors: {
      nuxt: '#00c58e'
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      nuxt: '#011b31',
      secondary: 'fff'
    })
  }
}
