// server/api/private/cart.put.ts
import { defineEventHandler, getCookie, readBody, createError } from 'h3'

// Validation constants
const MIN_QUANTITY = 1
const MAX_QUANTITY = 99

export default defineEventHandler(async (event) => {
  const { apiBase, cartSessionCookie } = useRuntimeConfig().public
  const cookieName = cartSessionCookie || 'cart_session_id'

  let sessionId = getCookie(event, cookieName) || 'none'
  const cookieHeader = `${cookieName}=${encodeURIComponent(sessionId)}`

  const body = await readBody<{ product_slug?: string; quantity?: number }>(event)

  // Validate product_slug
  if (!body?.product_slug) {
    throw createError({ statusCode: 400, statusMessage: 'Missing product_slug' })
  }

  // Validate quantity exists
  if (body?.quantity === undefined || body?.quantity === null) {
    throw createError({ statusCode: 400, statusMessage: 'Missing quantity' })
  }

  // Validate quantity type (must be a number)
  if (typeof body.quantity !== 'number' || isNaN(body.quantity)) {
    throw createError({ statusCode: 400, statusMessage: 'Quantity must be a valid number' })
  }

  // Validate quantity is an integer (no decimals)
  if (!Number.isInteger(body.quantity)) {
    throw createError({ statusCode: 400, statusMessage: 'Quantity must be a whole number' })
  }

  // Validate minimum quantity
  if (body.quantity < MIN_QUANTITY) {
    throw createError({
      statusCode: 400,
      statusMessage: `Quantity must be at least ${MIN_QUANTITY}`
    })
  }

  // Validate maximum quantity (prevents abuse)
  if (body.quantity > MAX_QUANTITY) {
    throw createError({
      statusCode: 400,
      statusMessage: `Quantity cannot exceed ${MAX_QUANTITY} per item`
    })
  }

  // Validate product_slug format (basic sanitization)
  if (typeof body.product_slug !== 'string' || body.product_slug.trim().length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid product_slug format' })
  }

  // Validate product_slug length (prevent excessively long inputs)
  if (body.product_slug.length > 200) {
    throw createError({ statusCode: 400, statusMessage: 'Product slug too long' })
  }


  try {
    const data = await $fetch(`${apiBase}/public/cart/item/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        cookie: cookieHeader,
      },
      body: {
        product_variant_slug: body.product_slug,
        quantity: body.quantity,
      },
    })
    
    return data
  } catch (err: any) {
    console.error('❌ PUT /cart - Django error:', err)
    throw createError({
      statusCode: err?.status || 500,
      statusMessage: err?.statusText || 'Add to cart failed',
      data: err?.data || null,
    })
  }
})