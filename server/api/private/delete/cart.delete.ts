// server/api/private/delete/cart.delete.ts
import {
  defineEventHandler, getCookie, setCookie, readBody, getRequestHeader, createError
} from 'h3'

export default defineEventHandler(async (event) => {
  const { apiBase, cartSessionCookie } = useRuntimeConfig().public
  const cookieName = cartSessionCookie || 'cart_session_id'

  let sessionId = getCookie(event, cookieName) || 'none'
  // Only forward the ONE cookie
  const cookieHeader = `${cookieName}=${encodeURIComponent(sessionId)}`

  // Validate body
  const { product_variant_slug } = await readBody<{ product_variant_slug?: string }>(event)
  if (!product_variant_slug) {
    throw createError({ statusCode: 400, statusMessage: 'Missing product_variant_slug' })
  }

  // Proxy to Django
  try {
    const data = await $fetch(`${apiBase}/public/cart/item/delete/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        cookie: cookieHeader,
      },
      body: { product_variant_slug },
    })
    return data
  } catch (err: any) {
    throw createError({
      statusCode: err?.status || 500,
      statusMessage: err?.statusText || 'Delete failed',
      data: err?.data || null,
    })
  }
})
