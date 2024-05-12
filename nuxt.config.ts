// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/sanity",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    "nuxt-jsonld",
    "nuxt-icon",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap"
  ],

  //routeRules: {
  //  '/**': { isr: 600 },
  //},

  sanity: {
    globalHelper: true,
    projectId: '9naj3yz0',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: process.env.NUXT_SANITY_TOKEN,
    visualEditing: {
      stega: true,
      studioUrl: process.env.NUXT_SANITY_VISUAL_EDITING_STUDIO_URL,
      token: process.env.NUXT_SANITY_VISUAL_EDITING_TOKEN,
    }
  },

  image: {
    sanity: {
      projectId: '9naj3yz0',
    }
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 700] },
      { name: 'Afterglow', src: 'url(/Afterglow-Regular.woff)', fallbacks: ['Georgia'] }
    ]
  },

  site: {
    url: 'https://libreschatsenbastide.fr/',
  },

  sitemap: {
    sources: ['/api/sitemap'],
  },
})
