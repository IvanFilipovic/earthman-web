/**
 * Global Vue Error Handler
 * Catches runtime errors to prevent blank pages and provide user feedback
 */

export default defineNuxtPlugin((nuxtApp) => {
  // Vue error handler for component errors
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    // Log error in development only
    if (process.dev) {
      console.error('Vue Error:', error)
      console.error('Component:', instance)
      console.error('Error Info:', info)
    }

    // In production, silently handle the error
    // You could send to error tracking service here (e.g., Sentry)
  }

  // Handle errors during SSR/client hydration
  nuxtApp.hook('vue:error', (error, instance, info) => {
    // Log error in development only
    if (process.dev) {
      console.error('Nuxt Error:', error)
      console.error('Error Info:', info)
    }

    // In production, silently handle the error
    // You could send to error tracking service here (e.g., Sentry)
  })

  // Handle unhandled promise rejections
  if (process.client) {
    window.addEventListener('unhandledrejection', (event) => {
      // Log error in development only
      if (process.dev) {
        console.error('Unhandled Promise Rejection:', event.reason)
      }

      // Prevent default browser error display
      event.preventDefault()

      // In production, silently handle the error
      // You could send to error tracking service here (e.g., Sentry)
    })
  }
})
