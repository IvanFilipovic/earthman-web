// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  runtimeConfig: {
    pageTransition: { name: 'page', mode: 'out-in' },
    // Private keys (only available on the server)
    apiSecret: '',
    apiBase: process.env.INTERNAL_API_BASE || 'https://earthmanweb.pythonanywhere.com',
    // Public keys (exposed to client-side)
    public: {
      cartSessionCookie: process.env.NUXT_PUBLIC_CART_SESSION_COOKIE || 'cart_session_id',
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
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/neue-einstellung/NeueEinstellung-Regular.woff2', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/neue-einstellung/NeueEinstellung-Medium.woff2', crossorigin: '' },
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
    '@pinia/nuxt',
    'nuxt-aos',
    'nuxt-gtag',
    '@hypernym/nuxt-gsap'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  gtag: {
    initMode: 'manual',
    id: 'G-8ZJRJ8ZDQ1',
    initCommands: [
      ['consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        wait_for_update: 500
      }]
    ]
  },
  gsap: {
    composables: true,
    provide: false,
  },
})