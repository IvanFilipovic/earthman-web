// server/api/cart/private/put/cart.put.ts
import { defineEventHandler, getCookie, setCookie, readBody, getRequestHeader } from 'h3'

export default defineEventHandler(async (event) => {
  const { apiBase, cartSessionCookie } = useRuntimeConfig().public
  const cookieName = cartSessionCookie || 'cart_session_id'

  // Ensure session cookie exists (Nuxt owns it)
  let sessionId = getCookie(event, cookieName) || 'none'
  const cookieHeader = `${cookieName}=${encodeURIComponent(sessionId)}`

  const body = await readBody<{ product_variant_slug?: string; quantity?: number }>(event)
  if (!body?.product_variant_slug) {
    throw createError({ statusCode: 400, statusMessage: 'Missing product_variant_slug' })
  }
  if (!body?.quantity || body.quantity < 1) {
    throw createError({ statusCode: 400, statusMessage: 'Quantity must be 1 or more' })
  }

  try {
    const data = await $fetch(`${apiBase}/public/cart/item/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        cookie: cookieHeader,
      },
      body,
    })
    return data
  } catch (err: any) {
    throw createError({
      statusCode: err?.status || 500,
      statusMessage: err?.statusText || 'Add to cart failed',
      data: err?.data || null,
    })
  }
})
