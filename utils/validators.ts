/**
 * API Response Validation Utilities
 * Provides runtime validation for API responses to prevent errors from unexpected data
 */

import type { CartData, CartItem } from '~/types/cart'
import type { OrderCreateResponse } from '~/types/api'

/**
 * Type guard to check if value is a non-null object
 */
function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/**
 * Type guard to check if value is an array
 */
function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value)
}

/**
 * Validate CartItem structure
 */
export function isValidCartItem(item: unknown): item is CartItem {
  if (!isObject(item)) return false

  return (
    typeof item.product === 'string' &&
    typeof item.product_slug === 'string' &&
    typeof item.quantity === 'number' &&
    typeof item.unit_price_original === 'string' &&
    typeof item.unit_price_discounted === 'string' &&
    typeof item.avatar_image === 'string' &&
    item.quantity > 0
  )
}

/**
 * Validate CartData structure
 */
export function isValidCartData(data: unknown): data is CartData {
  if (!isObject(data)) return false

  const hasValidItems = isArray(data.items) && data.items.every(isValidCartItem)
  const hasValidTotal = typeof data.cart_total_to_pay === 'string'

  return hasValidItems && hasValidTotal
}

/**
 * Validate OrderCreateResponse structure
 */
export function isValidOrderResponse(data: unknown): data is OrderCreateResponse {
  if (!isObject(data)) return false

  return (
    typeof data.payment_id === 'string' &&
    typeof data.order_reference === 'string' &&
    typeof data.total_price === 'string' &&
    typeof data.payment_method === 'string' &&
    data.payment_id.length > 0 &&
    data.order_reference.length > 0
  )
}

/**
 * Validate cart data or throw error
 */
export function validateCartData(data: unknown): CartData {
  if (!isValidCartData(data)) {
    throw new Error('Invalid cart data received from API')
  }
  return data
}

/**
 * Validate order response or throw error
 */
export function validateOrderResponse(data: unknown): OrderCreateResponse {
  if (!isValidOrderResponse(data)) {
    throw new Error('Invalid order response received from API')
  }
  return data
}

/**
 * Safely parse numeric string from API
 */
export function parseApiNumber(value: unknown): number {
  if (typeof value === 'number') return value
  if (typeof value === 'string') {
    const parsed = parseFloat(value)
    if (isNaN(parsed)) return 0
    return parsed
  }
  return 0
}

/**
 * Safely parse string from API
 */
export function parseApiString(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value : fallback
}
