// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  typescript: {
    strict: true,
    shim: false
  },
  css: ['@/assets/stylesheets/reset.css'],
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    logLevel: 'info'
  },
  routeRules: {
    '/': { static: true }
  }
})
