/**
 * Shared Cart Type Definitions
 * Used across stores, components, and API responses
 */

export interface CartItem {
  product: string
  product_slug: string
  product_variant_slug?: string
  avatar_image: string
  size?: string
  quantity: number
  unit_price_original: string
  unit_price_discounted: string
}

export interface CartData {
  items: CartItem[]
  cart_total_to_pay: string
  cart_total_original_price?: string
  cart_total_discounted_price?: string
  cart_total_savings?: string
}

export interface CartState {
  items: CartItem[]
  totals: {
    toPay: string
  }
  loading: boolean
  lastFetched: number | null
}
