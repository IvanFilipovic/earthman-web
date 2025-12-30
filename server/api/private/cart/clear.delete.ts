// server/api/private/cart/clear.delete.ts
import { defineEventHandler, getCookie, createError } from 'h3'
import { getSafeErrorMessage, getSafeStatusCode } from '~/server/utils/errors'

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
    // Log detailed error server-side, return generic message to client
    const safeMessage = getSafeErrorMessage(err, 'Failed to clear cart', 'DELETE /cart/clear')
    const safeStatus = getSafeStatusCode(err)

    throw createError({
      statusCode: safeStatus,
      statusMessage: safeMessage,
      // Never expose backend error data to client
    })
  }
})