export default defineNuxtPlugin((nuxtApp) => {
  // Intercept all $fetch calls
  nuxtApp.$fetch = (url: string, options: { headers?: Record<string, string> } = {}) => {
    options.headers = {
      ...(options.headers || {}),
      'ngrok-skip-browser-warning': 'true',
    }
    return $fetch(url, options)
  }
})