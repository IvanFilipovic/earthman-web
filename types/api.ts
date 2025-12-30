/**
 * Shared API Type Definitions
 * Used for type-safe API requests and responses
 */

/**
 * Standard error response structure
 */
export interface ApiError {
  statusCode: number
  statusMessage?: string
  message?: string
  data?: unknown
}

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T = unknown> {
  data?: T
  error?: ApiError
  success?: boolean
}

/**
 * Fetch options type (replacement for 'any' in fetch calls)
 */
export interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: Record<string, string>
  body?: unknown
  params?: Record<string, string | number | boolean>
  query?: Record<string, string | number | boolean>
}

/**
 * Order creation request body
 */
export interface OrderCreateRequest {
  email: string
  country: string
  address: string
  city: string
  postal_code: string
  phone_number: string
  delivery_address: string
  delivery_city: string
  delivery_postal_code: string
  payment_method: 'card' | 'paypal'
  session_id?: string
}

/**
 * Order creation response
 */
export interface OrderCreateResponse {
  payment_id: string
  order_reference: string
  total_price: string
  payment_method: string
}

/**
 * Contact form request body
 */
export interface ContactFormRequest {
  name: string
  email: string
  subject: string
  message: string
}

/**
 * Contact form response
 */
export interface ContactFormResponse {
  success: boolean
}
