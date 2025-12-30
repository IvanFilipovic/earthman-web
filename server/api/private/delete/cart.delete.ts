// server/api/private/cart.delete.ts
import {
  defineEventHandler, getCookie, getQuery, readBody, createError
} from 'h3'

export default defineEventHandler(async (event) => {
  const { apiBase, cartSessionCookie } = useRuntimeConfig().public
  const cookieName = cartSessionCookie || 'cart_session_id'
  let sessionId = getCookie(event, cookieName) || 'none'

  const cookieHeader = `${cookieName}=${encodeURIComponent(sessionId)}`
  const query = getQuery(event)
  let product_slug = query.product_slug as string
  if (!product_slug) {
    try {
      const body = await readBody(event)
      product_slug = body?.product_slug
    } catch (e) {
      // Body read failed, continue with validation
    }
  }

  // Validate product_slug exists
  if (!product_slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing product_slug',
    })
  }

  // Validate product_slug type and format
  if (typeof product_slug !== 'string' || product_slug.trim().length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid product_slug format'
    })
  }

  // Validate product_slug length (prevent excessively long inputs)
  if (product_slug.length > 200) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Product slug too long'
    })
  }
  
  try {
    const data = await $fetch(`${apiBase}/public/cart/item/delete/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        cookie: cookieHeader,
      },
      body: {
        product_variant_slug: product_slug,
      },
    })
    return data
  } catch (err: any) {
    console.error('❌ DELETE /cart - Django error:', err)
    throw createError({
      statusCode: err?.status || 500,
      statusMessage: err?.statusText || 'Delete failed',
      data: err?.data || null,
    })
  }
})