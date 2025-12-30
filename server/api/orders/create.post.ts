import { encryptPaymentToken } from '../../utils/paymentToken'
import validator from 'validator'

// Server-side shipping cost (flat rate)
const SHIPPING_COST = 10.00

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  // Validate required fields (shipping_cost removed - calculated server-side)
  const requiredFields = [
    'email', 'country', 'address', 'city', 'postal_code',
    'phone_number', 'delivery_address', 'delivery_city',
    'delivery_postal_code', 'payment_method'
  ]

  for (const field of requiredFields) {
    if (!body[field]) {
      throw createError({
        statusCode: 400,
        message: `Missing required field: ${field}`
      })
    }
  }

  // Email validation using validator library
  if (!validator.isEmail(body.email)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid email address'
    })
  }

  // Validate payment method
  if (!['card', 'paypal'].includes(body.payment_method)) {
    throw createError({
      statusCode: 400,
      message: 'Invalid payment method. Must be "card" or "paypal"'
    })
  }
  
  // Sanitize input data and add server-calculated shipping cost
  const sanitizedBody = {
    email: body.email.trim().toLowerCase(),
    country: body.country.trim(),
    address: body.address.trim(),
    city: body.city.trim(),
    postal_code: body.postal_code.trim(),
    phone_number: body.phone_number.trim(),
    delivery_address: body.delivery_address.trim(),
    delivery_city: body.delivery_city.trim(),
    delivery_postal_code: body.delivery_postal_code.trim(),
    payment_method: body.payment_method,
    shipping_cost: SHIPPING_COST, // Server-side calculated flat rate
    session_id: body.session_id
  }
  
  try {
    // Forward cookies to Django for session management
    const cookies = getHeader(event, 'cookie')
    
    // Create order in Django backend
    const response = await $fetch<{
      order_reference: string
      total_price: string
      payment_method: string
      client_secret?: string
      paypal_approval_url?: string
    }>(
      `${config.apiBase}/api/orders/create/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(cookies && { 'Cookie': cookies })
        },
        body: sanitizedBody
      }
    )
    
    // Create encrypted token with payment data
    const paymentToken = encryptPaymentToken({
      clientSecret: response.client_secret,
      paypalApprovalUrl: response.paypal_approval_url,
      orderReference: response.order_reference,
      amount: parseFloat(response.total_price),
      currency: 'EUR',
      paymentMethod: response.payment_method as 'card' | 'paypal',
      expiresAt: Date.now() + 3600000 // 1 hour expiration
    })
    
    // Return only safe data to client
    return {
      payment_id: paymentToken, // Encrypted token
      order_reference: response.order_reference,
      total_price: response.total_price,
      payment_method: response.payment_method
    }
    
  } catch (error: any) {
    console.error('Order creation failed:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      message: error.data?.detail || 'Failed to create order'
    })
  }
})