// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: '9naj3yz0',
    dataset: 'production',
    visualEditing: undefined
  }
})
