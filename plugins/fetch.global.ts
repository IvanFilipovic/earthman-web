export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  // Create a wrapper around $fetch
  const apiFetch = $fetch.create({
    baseURL: config.public.apiBase,
    headers: {
      'ngrok-skip-browser-warning': 'true',
    },
  })

  return {
    provide: {
      api: apiFetch,
    },
  }
})
