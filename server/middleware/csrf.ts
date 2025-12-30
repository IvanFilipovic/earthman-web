import { createError, getCookie, setCookie, getHeader } from 'h3'
import { randomBytes } from 'crypto'

/**
 * CSRF Protection Middleware
 *
 * Generates and validates CSRF tokens for state-changing operations (POST, PUT, DELETE).
 * Tokens are stored in httpOnly cookies and must be sent in the X-CSRF-Token header.
 */
export default defineEventHandler(async (event) => {
  const method = event.method
  const path = event.path

  // Skip CSRF for GET and HEAD requests (safe methods)
  if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
    // Always ensure a CSRF token cookie exists for future requests
    const existingToken = getCookie(event, 'csrf_token')
    if (!existingToken) {
      const newToken = generateCsrfToken()
      setCookie(event, 'csrf_token', newToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/'
      })
    }
    return
  }

  // For state-changing methods, validate CSRF token
  if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)) {
    const cookieToken = getCookie(event, 'csrf_token')
    const headerToken = getHeader(event, 'x-csrf-token')

    // Check if both tokens exist
    if (!cookieToken) {
      throw createError({
        statusCode: 403,
        statusMessage: 'CSRF token missing in cookie'
      })
    }

    if (!headerToken) {
      throw createError({
        statusCode: 403,
        statusMessage: 'CSRF token missing in request header'
      })
    }

    // Validate tokens match (timing-safe comparison)
    if (!timingSafeEqual(cookieToken, headerToken)) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Invalid CSRF token'
      })
    }
  }
})

/**
 * Generate a cryptographically secure random CSRF token
 */
function generateCsrfToken(): string {
  return randomBytes(32).toString('hex')
}

/**
 * Timing-safe string comparison to prevent timing attacks
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false
  }

  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)

  let result = 0
  for (let i = 0; i < bufA.length; i++) {
    result |= bufA[i] ^ bufB[i]
  }

  return result === 0
}
