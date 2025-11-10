// server/api/private/cart.put.ts
import { defineEventHandler, getCookie, readBody, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const { apiBase, cartSessionCookie } = useRuntimeConfig().public
  const cookieName = cartSessionCookie || 'cart_session_id'

  let sessionId = getCookie(event, cookieName) || 'none'
  const cookieHeader = `${cookieName}=${encodeURIComponent(sessionId)}`

  const body = await readBody<{ product_slug?: string; quantity?: number }>(event)
  
  if (!body?.product_slug) {
    throw createError({ statusCode: 400, statusMessage: 'Missing product_slug' })
  }
  if (!body?.quantity || body.quantity < 1) {
    throw createError({ statusCode: 400, statusMessage: 'Quantity must be 1 or more' })
  }

  console.log('🔍 PUT /cart - Got from Nuxt:', { product_slug: body.product_slug, quantity: body.quantity })

  try {
    // Django expects "product_variant_slug"
    const data = await $fetch(`${apiBase}/public/cart/item/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        cookie: cookieHeader,
      },
      body: {
        product_variant_slug: body.product_slug,  // Django field name
        quantity: body.quantity,
      },
    })
    
    console.log('✅ PUT /cart - Success')
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