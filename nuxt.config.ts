// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  runtimeConfig: {
    // Private keys (only available on the server)
    apiSecret: '',

    // Public keys (exposed to client-side)
    public: {
      apiBase: 'https://earthmanweb.pythonanywhere.com', // 👈 your backend endpoint
    },
  },
  app: {
    head: {
      title: 'Earthman • webshop',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Automation and custom software that make your business faster, simpler, and smarter.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Earthman' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@exitthree' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://www.google-analytics.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon_e3.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ]
    }
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'v-gsap-nuxt',
    '@nuxtjs/i18n',
    'nuxt-headlessui',
    '@pinia/nuxt'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  }
})