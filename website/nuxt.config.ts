// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: '9naj3yz0',
    dataset: 'production',
    visualEditing: {
      studioUrl: "http://localhost:3333",
      token: "sk2zQ7v5kmSI3xErRZVyDrjJU4DkavD26SD8CY0UwBWePTd1eq33yLABVr4WyRTnt2PuGgL3d0WyEF06EaYyvtflbMoL4FXstN4aH71YpZtPTVzsjiJbYPX9XWpdFWYE1RMXSuBo6LOXYdP8l3mnY88cReB2ABGbr5sSXrDa9MzUXVlJJqLY"
    }
  }
})
