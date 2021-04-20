export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NuxtLover',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'NuxtLover' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxtlover' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://res.cloudinary.com/schleidens/image/upload/v1618954178/Frame_1nuxtlove_xy9cq0.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://res.cloudinary.com/schleidens/image/upload/v1618954178/Frame_1nuxtlove_xy9cq0.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'NuxtLover'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://res.cloudinary.com/schleidens/image/upload/v1618954178/Frame_1nuxtlove_xy9cq0.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-vite',
    '@nuxtjs/date-fns'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'NuxtLover',
      description: 'By Nuxters for Nuxt lover',
      theme_color: '#00c58e'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
