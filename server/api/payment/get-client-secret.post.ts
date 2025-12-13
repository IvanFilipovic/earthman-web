import { decryptPaymentToken } from '../../utils/paymentToken'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (!body.payment_id) {
    throw createError({
      statusCode: 400,
      message: 'Payment ID is required'
    })
  }
  
  // Decrypt payment token
  const paymentData = decryptPaymentToken(body.payment_id)
  
  // Ensure this is a card payment
  if (paymentData.paymentMethod !== 'card') {
    throw createError({
      statusCode: 400,
      message: 'This endpoint is only for card payments'
    })
  }
  
  if (!paymentData.clientSecret) {
    throw createError({
      statusCode: 500,
      message: 'Client secret not found in payment data'
    })
  }
  
  // Return client secret and payment details
  return {
    client_secret: paymentData.clientSecret,
    amount: paymentData.amount,
    currency: paymentData.currency
  }
})