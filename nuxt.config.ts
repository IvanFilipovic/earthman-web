// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // ==================== Runtime Configuration ====================
  runtimeConfig: {
    // Private keys (only available on the server)
    apiSecret: '',
    apiBase: process.env.INTERNAL_API_BASE || 'https://earthmanweb.pythonanywhere.com',
    
    // Public keys (exposed to client-side)
    public: {
      cartSessionCookie: process.env.NUXT_PUBLIC_CART_SESSION_COOKIE || 'cart_session_id',
      apiBase: 'https://earthmanweb.pythonanywhere.com',
    },
  },

  // ==================== App Configuration ====================
  app: {
    head: {
      title: 'Earthman • webshop',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Automation and custom software that make your business faster, simpler, and smarter.' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Earthman' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@exitthree' },
      ],
      link: [
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/neue-einstellung/NeueEinstellung-Regular.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/neue-einstellung/NeueEinstellung-Medium.woff2', crossorigin: 'anonymous' },
        { rel: 'preconnect', href: 'https://earthmanweb.pythonanywhere.com' },
        { rel: 'preconnect', href: 'https://www.google-analytics.com' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon_e3.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ]
    }
  },

  // ==================== CSS ====================
  css: [
    '~/assets/css/components/buttons.css',
  ],

  // ==================== Modules ====================
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    'nuxt-headlessui',
    '@pinia/nuxt',
    'nuxt-gtag',
    '@hypernym/nuxt-gsap',
    '@nuxtjs/color-mode',
  ],

  // ==================== Tailwind Configuration ====================
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    viewer: false, // Disable in production
  },

  // ==================== Google Analytics ====================
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

  // ==================== GSAP Configuration ====================
  gsap: {
    composables: true,
    provide: false,
  },

  // ==================== Image Optimization ====================
  image: {
    quality: 80,
    formats: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    domains: [
      'static.zara.net',
      'earthmanweb.pythonanywhere.com'
    ],
    provider: 'ipx',
    ipx: {
      maxAge: 60 * 60 * 24 * 365, // Cache for 1 year
    }
  },

  // ==================== Fonts Configuration ====================
  fonts: {
    families: [
      { name: 'Neue Einstellung', provider: 'local' }
    ],
    defaults: {
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
    }
  },

  // ==================== Icon Configuration ====================
  icon: {
    serverBundle: {
      collections: ['lucide'] // Only bundle icons you use
    }
  },

  // ==================== Build Configuration ====================
  vite: {
    build: {
      // Increase chunk size warning limit
      chunkSizeWarningLimit: 1000,
      
      // Enable CSS code splitting
      cssCodeSplit: true,
      
      // Optimize dependencies
      rollupOptions: {
        output: {
          manualChunks: {
            'gsap-core': ['gsap'],
            'gsap-plugins': ['gsap/ScrollTrigger', 'gsap/ScrollSmoother'],
            'vendor': ['vue', 'vue-router'],
          }
        }
      }
    },
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger']
    }
  },

  // ==================== Nitro Configuration ====================
  nitro: {
    preset: 'node-server', // Change based on your hosting
    
    // Compression
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },

    // Minify
    minify: true,

    // Prerendering for static pages
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },

    // Cache configuration
    routeRules: {
      // Homepage - cache for 1 hour
      '/': { 
        swr: 3600,
        headers: {
          'Cache-Control': 'public, max-age=3600, s-maxage=3600'
        }
      },
      
      // Shop pages - cache for 5 minutes
      '/shop/**': { 
        swr: 300,
        headers: {
          'Cache-Control': 'public, max-age=300, s-maxage=300'
        }
      },
      
      // Product pages - cache for 10 minutes
      '/product/**': { 
        swr: 600,
        headers: {
          'Cache-Control': 'public, max-age=600, s-maxage=600'
        }
      },

      // API routes - no cache
      '/api/**': { 
        cors: true,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      },

      // Static assets - cache for 1 year
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/fonts/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/images/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
    },
  },

  // ==================== Experimental Features ====================
  experimental: {
    payloadExtraction: true, // Extract payload for better caching
    renderJsonPayloads: true,
    // viewTransition: false, // Disabled - causes issues with GSAP animations
  },

  // ==================== Router Configuration ====================
  router: {
    options: {
      strict: true,
      hashMode: false,
      scrollBehaviorType: 'smooth'
    }
  },

  // ==================== Typescript Configuration ====================
  typescript: {
    strict: true,
    typeCheck: false, // Disable in dev for speed, enable in CI/CD
    shim: false,
  },

  // ==================== Hooks for Production Build ====================
  hooks: {
    'build:manifest': (manifest) => {
      // Remove prefetch links for better performance
      for (const key in manifest) {
        const file = manifest[key]
        if (file.assets) {
          file.assets = file.assets.filter(
            (asset: string) => !asset.endsWith('.webp') && !asset.endsWith('.png')
          )
        }
      }
    }
  },
})