// server/api/private/cart.delete.ts
import {
  defineEventHandler, getCookie, getQuery, readBody, createError
} from 'h3'

export default defineEventHandler(async (event) => {
  const { apiBase, cartSessionCookie } = useRuntimeConfig().public
  const cookieName = cartSessionCookie || 'cart_session_id'
  let sessionId = getCookie(event, cookieName) || 'none'
  
  const cookieHeader = `${cookieName}=${encodeURIComponent(sessionId)}`
  
  // Get product_slug from query (Nuxt sends this)
  const query = getQuery(event)
  let product_slug = query.product_slug as string
  
  // Fallback to body
  if (!product_slug) {
    try {
      const body = await readBody(event)
      product_slug = body?.product_slug
    } catch (e) {
      // Ignore
    }
  }
  
  if (!product_slug) {
    throw createError({ 
      statusCode: 400, 
      statusMessage: 'Missing product_slug',
    })
  }
  
  console.log('🔍 DELETE /cart - Got product_slug from Nuxt:', product_slug)
  
  // Django expects "product_variant_slug" in body
  try {
    console.log('🚀 Sending to Django with product_variant_slug:', product_slug)
    
    const data = await $fetch(`${apiBase}/public/cart/item/delete/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        cookie: cookieHeader,
      },
      body: {
        product_variant_slug: product_slug,  // Django field name
      },
    })
    
    console.log('✅ DELETE /cart - Success')
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