// server/api/private/get/cart.get.ts (or your cart.get.ts)
import { defineEventHandler, getCookie, setCookie, getRequestHeader, setHeader } from 'h3'

export default defineEventHandler(async (event) => {
  const { apiBase, cartSessionCookie } = useRuntimeConfig().public
  const cookieName = cartSessionCookie || 'cart_session_id'

  const sessionId = getCookie(event, cookieName) || 'none'

  const cookieHeader = `${cookieName}=${encodeURIComponent(sessionId)}`

  const data = await $fetch(`${apiBase}/public/cart/`, {
    method: 'GET',
    headers: {
      cookie: cookieHeader,
    },
  })
  return data
})
