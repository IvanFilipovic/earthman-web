import { decryptPaymentToken } from '../../utils/paymentToken'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (!body.payment_id) {
    throw createError({
      statusCode: 400,
      message: 'Payment ID is required'
    })
  }
  
  // Decrypt and validate payment token
  const paymentData = decryptPaymentToken(body.payment_id)
  
  // Return appropriate data based on payment method
  if (paymentData.paymentMethod === 'card') {
    return {
      type: 'card',
      order_reference: paymentData.orderReference,
      amount: paymentData.amount,
      currency: paymentData.currency
    }
  } 
  else if (paymentData.paymentMethod === 'paypal') {
    if (!paymentData.paypalApprovalUrl) {
      throw createError({
        statusCode: 500,
        message: 'PayPal approval URL not found'
      })
    }
    
    return {
      type: 'paypal',
      approval_url: paymentData.paypalApprovalUrl,
      order_reference: paymentData.orderReference,
      amount: paymentData.amount,
      currency: paymentData.currency
    }
  }
  
  throw createError({
    statusCode: 400,
    message: 'Invalid payment method'
  })
})