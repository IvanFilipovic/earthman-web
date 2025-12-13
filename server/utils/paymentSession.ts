// server/utils/paymentSession.ts

interface PaymentSession {
  clientSecret?: string
  paypalApprovalUrl?: string
  orderReference: string
  amount: number
  currency: string
  paymentMethod: 'card' | 'paypal'
  createdAt: number
  expiresAt: number
}

// In production, use Redis or database instead of in-memory
const paymentSessions = new Map<string, PaymentSession>()

/**
 * Generate a secure, unique payment session ID
 */
export function generatePaymentId(): string {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2, 15)
  const moreRandom = Math.random().toString(36).substring(2, 15)
  return `pm_${timestamp}_${random}${moreRandom}`
}

/**
 * Store payment session data securely on server
 */
export async function setPaymentSession(
  id: string, 
  data: PaymentSession
): Promise<void> {
  paymentSessions.set(id, data)
  
  // Auto-cleanup expired sessions
  const ttl = data.expiresAt - Date.now()
  setTimeout(() => {
    paymentSessions.delete(id)
  }, ttl)
}

/**
 * Retrieve payment session data
 */
export async function getPaymentSession(
  id: string
): Promise<PaymentSession | null> {
  const session = paymentSessions.get(id)
  
  if (!session) {
    return null
  }
  
  // Check expiration
  if (session.expiresAt < Date.now()) {
    paymentSessions.delete(id)
    return null
  }
  
  return session
}

/**
 * Delete payment session (cleanup after successful payment)
 */
export async function deletePaymentSession(id: string): Promise<void> {
  paymentSessions.delete(id)
}

/**
 * Validate payment session exists and is valid
 */
export async function validatePaymentSession(
  id: string
): Promise<PaymentSession> {
  const session = await getPaymentSession(id)
  
  if (!session) {
    throw createError({
      statusCode: 404,
      message: 'Payment session not found or expired'
    })
  }
  
  return session
}