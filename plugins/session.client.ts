interface CartSessionCookieOptions {
  name: string
  sameSite: 'lax' | 'none' | 'strict'
  secure: boolean
  path: string
  httpOnly: boolean
  maxAge: number
}

const SECONDS_PER_DAY = 60 * 60 * 24
const CART_SESSION_MAX_AGE_DAYS = 7

/**
 * Generates a cryptographically secure session identifier
 * Falls back to timestamp-based UUID if crypto.randomUUID is unavailable
 */
function generateSessionId(): string {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID()
  }
  
  const timestamp = Date.now().toString(36)
  const randomPart = Math.random().toString(36).substring(2, 15)
  const additionalEntropy = Math.random().toString(36).substring(2, 15)
  
  return `${timestamp}-${randomPart}-${additionalEntropy}`
}

/**
 * Determines cookie configuration based on environment
 * Uses secure cookies for production, lax cookies for local development
 */
function getCookieOptions(cookieName: string): CartSessionCookieOptions {
  const isLocalhost = 
    typeof window !== 'undefined' && 
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')

  return {
    name: cookieName,
    sameSite: isLocalhost ? 'lax' : 'none',
    secure: !isLocalhost,
    path: '/',
    httpOnly: false,
    maxAge: SECONDS_PER_DAY * CART_SESSION_MAX_AGE_DAYS,
  }
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const cookieName = config.public.cartSessionCookie || 'cart_session_id'
  const options = getCookieOptions(cookieName)

  const cartSessionId = useCookie<string>(cookieName, {
    default: generateSessionId,
    sameSite: options.sameSite,
    secure: options.secure,
    path: options.path,
    httpOnly: options.httpOnly,
    maxAge: options.maxAge,
  })

  return {
    provide: {
      cartSessionId: readonly(cartSessionId),
    },
  }
})