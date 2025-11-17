// server/api/private/cart/clear.delete.ts
import { defineEventHandler, getCookie, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const { apiBase, cartSessionCookie } = useRuntimeConfig().public
  const cookieName = cartSessionCookie || 'cart_session_id'
  let sessionId = getCookie(event, cookieName) || 'none'
  
  const cookieHeader = `${cookieName}=${encodeURIComponent(sessionId)}`
  
  try {
    const data = await $fetch(`${apiBase}/public/cart/clear/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        cookie: cookieHeader,
      },
    })
    
    return data
  } catch (err: any) {
    console.error('❌ DELETE /cart/clear - Django error:', err)
    throw createError({
      statusCode: err?.status || 500,
      statusMessage: err?.statusText || 'Clear cart failed',
      data: err?.data || null,
    })
  }
})