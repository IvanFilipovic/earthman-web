// composables/useCart.ts
interface CartItem {
  product: string
  product_slug?: string
  product_variant_slug?: string
  avatar_image: string
  size?: string
  product_size?: string
  quantity: number
  unit_price_original: string
  unit_price_discounted: string
}

interface CartData {
  items: CartItem[]
  cart_total_original_price: string
  cart_total_discounted_price: string
  cart_total_to_pay: string
}

interface CartState {
  data: CartData
  loading: boolean
  error: Error | null
}

let abortController: AbortController | null = null

export function useCart() {
  // Move useState INSIDE the composable function
  const cartState = useState<CartState>('cart', () => ({
    data: {
      items: [],
      cart_total_original_price: '0.00',
      cart_total_discounted_price: '0.00',
      cart_total_to_pay: '0.00'
    },
    loading: false,
    error: null
  }))

  const items = computed(() => 
    cartState.value.data.items.map((item) => ({
      ...item,
      size: item.size ?? item.product_size
    }))
  )

  const itemCount = computed(() => items.value.length)

  const totals = computed(() => ({
    original: cartState.value.data.cart_total_original_price,
    discounted: cartState.value.data.cart_total_discounted_price,
    toPay: cartState.value.data.cart_total_to_pay
  }))

  async function fetchCart(): Promise<void> {
    if (abortController) {
      abortController.abort()
    }
    
    abortController = new AbortController()
    cartState.value.loading = true
    cartState.value.error = null

    try {
      const response = await $fetch<CartData>('/api/private/get/cart', {
        signal: abortController.signal
      })
      
      cartState.value.data = response
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        cartState.value.error = error
        console.warn('Cart fetch failed:', error)
      }
    } finally {
      cartState.value.loading = false
      abortController = null
    }
  }

  async function removeItem(item: CartItem): Promise<boolean> {
    const slug = item.product_variant_slug ?? item.product_slug
    if (!slug) return false

    const previousData = { ...cartState.value.data }
    
    // Optimistic update
    cartState.value.data = {
      ...cartState.value.data,
      items: cartState.value.data.items.filter(
        (x) => (x.product_variant_slug ?? x.product_slug) !== slug
      )
    }

    try {
      await $fetch('/api/private/delete/cart', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: { product_variant_slug: slug }
      })

      await fetchCart()

      if (import.meta.client) {
        window.dispatchEvent(
          new CustomEvent('cart:updated', {
            detail: { source: 'cart', removed: slug }
          })
        )
      }

      return true
    } catch (error) {
      cartState.value.data = previousData
      console.error('Remove item failed:', error)
      return false
    }
  }

  function toNumber(value: unknown): number {
    const num = Number.parseFloat(String(value ?? '0').replace(',', '.'))
    return Number.isFinite(num) ? num : 0
  }

  function formatMoney(amount: number): string {
    return Number.isInteger(amount) ? amount.toString() : amount.toFixed(2)
  }

  const FREE_THRESHOLD = 200
  const FLAT_SHIPPING = 12.99

  const merchandiseTotal = computed(() => toNumber(totals.value.toPay))

  const shippingFee = computed(() => 
    merchandiseTotal.value >= FREE_THRESHOLD ? 0 : FLAT_SHIPPING
  )

  const grandTotal = computed(() => merchandiseTotal.value + shippingFee.value)

  const shippingLabel = computed(() => 
    shippingFee.value === 0 ? 'Free shipping' : 'Shipping'
  )

  const freeShippingHint = computed(() => {
    if (shippingFee.value === 0) {
      return 'Free shipping applied'
    }
    const remaining = Math.max(0, FREE_THRESHOLD - merchandiseTotal.value)
    return `You're €${formatMoney(remaining)} away from free shipping`
  })

  return {
    // State
    items,
    itemCount,
    totals,
    loading: computed(() => cartState.value.loading),
    error: computed(() => cartState.value.error),
    
    // Actions
    fetchCart,
    removeItem,
    
    // Computed values
    merchandiseTotal,
    shippingFee,
    grandTotal,
    shippingLabel,
    freeShippingHint,
    
    // Utilities
    formatMoney,
    toNumber
  }
}