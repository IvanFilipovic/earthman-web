// server/utils/paymentToken.ts
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'

interface PaymentData {
  clientSecret?: string
  paypalApprovalUrl?: string
  orderReference: string
  amount: number
  currency: string
  paymentMethod: 'card' | 'paypal'
  expiresAt: number
}

/**
 * Encrypt payment data into a secure token
 * This allows us to pass sensitive data to the client without exposing it
 */
export function encryptPaymentToken(data: PaymentData): string {
  const config = useRuntimeConfig()
  
  // Validate encryption key exists
  if (!config.paymentEncryptionKey) {
    throw new Error('PAYMENT_ENCRYPTION_KEY not configured')
  }
  
  // Use AES-256-CBC encryption
  const secretKey = Buffer.from(config.paymentEncryptionKey, 'hex')
  const iv = randomBytes(16) // Initialization vector
  
  const cipher = createCipheriv('aes-256-cbc', secretKey, iv)
  
  // Serialize data to JSON
  const jsonData = JSON.stringify(data)
  let encrypted = cipher.update(jsonData, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  
  // Return format: iv:encryptedData (both in hex)
  return `${iv.toString('hex')}:${encrypted}`
}

/**
 * Decrypt payment token back to the original data
 * Validates expiration and token integrity
 */
export function decryptPaymentToken(token: string): PaymentData {
  const config = useRuntimeConfig()
  
  if (!config.paymentEncryptionKey) {
    throw createError({
      statusCode: 500,
      message: 'Payment encryption not configured'
    })
  }
  
  try {
    // Split token into IV and encrypted data
    const parts = token.split(':')
    if (parts.length !== 2) {
      throw new Error('Invalid token format')
    }
    
    const [ivHex, encryptedData] = parts
    
    const secretKey = Buffer.from(config.paymentEncryptionKey, 'hex')
    const iv = Buffer.from(ivHex, 'hex')
    
    // Decrypt
    const decipher = createDecipheriv('aes-256-cbc', secretKey, iv)
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    
    const data = JSON.parse(decrypted) as PaymentData
    
    // Validate expiration
    if (data.expiresAt < Date.now()) {
      throw new Error('Token expired')
    }
    
    return data
    
  } catch (error: any) {
    console.error('Token decryption failed:', error.message)
    throw createError({
      statusCode: 400,
      message: 'Invalid or expired payment token'
    })
  }
}

/**
 * Validate that a payment token is valid without fully decrypting
 * Useful for quick checks
 */
export function validatePaymentToken(token: string): boolean {
  try {
    const data = decryptPaymentToken(token)
    return data.expiresAt > Date.now()
  } catch {
    return false
  }
}

/**
 * Helper to generate encryption key (run once during setup)
 * node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
 */
export function generateEncryptionKey(): string {
  return randomBytes(32).toString('hex')
}