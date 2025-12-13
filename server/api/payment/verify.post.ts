import { decryptPaymentToken } from '../../utils/paymentToken'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  
  if (!body.payment_intent_id || !body.order_reference) {
    throw createError({
      statusCode: 400,
      message: 'Payment intent ID and order reference are required'
    })
  }
  
  // Optional: Validate payment token if provided
  if (body.payment_id) {
    try {
      const paymentData = decryptPaymentToken(body.payment_id)
      
      // Verify order reference matches
      if (paymentData.orderReference !== body.order_reference) {
        throw createError({
          statusCode: 400,
          message: 'Order reference mismatch'
        })
      }
    } catch (error) {
      // Token validation failed, but continue with server verification
      console.warn('Payment token validation failed, proceeding with server verification')
    }
  }
  
  try {
    // Verify payment with Django backend (which verifies with Stripe)
    const response = await $fetch<{
      success: boolean
      order_reference: string
      total_price: string
      payment_status: string
    }>(
      `${config.apiBase}/api/stripe/verify-payment/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          payment_intent_id: body.payment_intent_id,
          order_reference: body.order_reference
        }
      }
    )
    
    return response
    
  } catch (error: any) {
    console.error('Payment verification failed:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.data?.detail || 'Payment verification failed'
    })
  }
})