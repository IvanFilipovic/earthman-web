// composables/useCartSession.ts
export function useCartSession() {
  const sessionId = useCookie('cart_session_id')  // Read cookie client-side
  
  return {
    sessionId: computed(() => sessionId.value)
  }
}