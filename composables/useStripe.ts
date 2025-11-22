// composables/useStripe.ts
export function useStripe() {
  const config = useRuntimeConfig()

  async function getStripe() {
    if (typeof window === 'undefined') return null
    
    const { loadStripe } = await import('@stripe/stripe-js')
    return await loadStripe(config.public.stripePublishableKey)
  }

  return {
    getStripe,
  }
}