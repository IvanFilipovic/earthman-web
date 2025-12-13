// server/api/paypal/execute.post.ts
import { decryptPaymentToken } from '../../utils/paymentToken'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  
  // Validate required parameters
  if (!body.payment_id || !body.payer_id || !body.order_reference) {
    throw createError({
      statusCode: 400,
      message: 'Payment ID, Payer ID, and order reference are required'
    })
  }
  
  // Validate order reference format (alphanumeric and hyphens only)
  if (!/^[A-Z0-9-]+$/.test(body.order_reference)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid order reference format'
    })
  }
  
  // Optional: Validate payment token if provided
  if (body.payment_session_id) {
    try {
      const paymentData = decryptPaymentToken(body.payment_session_id)
      
      // Verify order reference matches
      if (paymentData.orderReference !== body.order_reference) {
        throw createError({
          statusCode: 400,
          message: 'Order reference mismatch'
        })
      }
      
      // Verify payment method
      if (paymentData.paymentMethod !== 'paypal') {
        throw createError({
          statusCode: 400,
          message: 'Invalid payment method for this endpoint'
        })
      }
    } catch (error) {
      console.warn('Payment token validation failed, proceeding with server verification')
    }
  }
  
  try {
    // Execute PayPal payment via Django
    const response = await $fetch<{
      success: boolean
      order_reference: string
      total_price: string
      payment_status?: string
    }>(
      `${config.apiBase}/api/paypal/execute/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          payment_id: body.payment_id,
          payer_id: body.payer_id,
          order_reference: body.order_reference
        }
      }
    )
    
    return response
    
  } catch (error: any) {
    console.error('PayPal execution failed:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.data?.detail || 'PayPal payment execution failed'
    })
  }
})