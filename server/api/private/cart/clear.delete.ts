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
  } catch (err: unknown) {
    console.error('❌ DELETE /cart/clear - Django error:', err)
    const statusCode = (err && typeof err === 'object' && 'status' in err)
      ? (err as any).status
      : 500
    const statusMessage = (err && typeof err === 'object' && 'statusText' in err)
      ? (err as any).statusText
      : 'Clear cart failed'
    const data = (err && typeof err === 'object' && 'data' in err)
      ? (err as any).data
      : null

    throw createError({
      statusCode,
      statusMessage,
      data,
    })
  }
})