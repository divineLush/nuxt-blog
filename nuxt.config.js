export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // loading bar
  // loading: {
  //   color: '#39ff14',
  //   failedColor: '#fcfcfc',
  //   height: '4px',
  //   duration: 4000,
  // },

  // built in spinner
  // shown during the initial rendering
  // which happens on the client
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#39ff14',
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // dev setting
  // takes a boolean
  // defines whether you are in development mode
  // will always be overwritten by the nuxt script you are executing
  // dev: true,

  // set environment variables that will be injected into project
  // you can reference global env variables from node environment
  // and forward them into an app
  env: {
    // baseUrl:  process.env.BASE_URL || 'https://nuxt-blog-3ae83-default-rtdb.firebaseio.com',
    baseUrl: 'https://nuxt-blog-3ae83-default-rtdb.firebaseio.com',
  },
}
