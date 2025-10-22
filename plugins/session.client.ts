// plugins/cart-session.client.ts
export default defineNuxtPlugin(() => {
  const name = useRuntimeConfig().public.cartSessionCookie || 'cart_session_id'

  // In dev on http://localhost, use lax + NOT secure — otherwise the cookie won't set.
  const isLocalhost = typeof window !== 'undefined' && location.hostname === 'localhost'

  const session = useCookie<string | null>(name, {
    default: () => null,
    sameSite: isLocalhost ? 'lax' : 'none', // 'none' requires HTTPS
    secure: isLocalhost ? false : true,     // must be false on http://
    path: '/',
    httpOnly: false,
    maxAge: 60 * 60 * 24 * 180,
    // DO NOT set `domain` on localhost
    // watch: false is fine, but not needed
  })

  if (!session.value) {
    session.value = (globalThis.crypto?.randomUUID?.()
      ?? Math.random().toString(36).slice(2)) as string
  }
})
