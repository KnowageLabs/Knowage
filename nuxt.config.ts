// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image'
  ],
  devtools: {
    enabled: true
  },

  devServer: {
    host: '127.0.0.1'
  },

  app: {
    baseURL: process?.env?.NUXT_APP_BASE_URL || '/',
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css', 'leaflet/dist/leaflet.css'],

  // Public runtime config used at runtime (client + server)
  runtimeConfig: {
    public: {
      // Set NUXT_PUBLIC_SITE_URL in production to your full site URL (including protocol and hostname),
      // e.g. https://your-username.github.io or https://example.com
      siteUrl: process?.env?.NUXT_PUBLIC_SITE_URL || process?.env?.NUXT_APP_BASE_URL || '/'
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  image: {
    domains: ['images.unsplash.com', 'www.eng.it', 's7g10.scene7.com']
  }
})
