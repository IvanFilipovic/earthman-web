// stores/cart.ts
import { defineStore } from 'pinia'

interface CartItem {
  product: string
  product_slug: string
  product_variant_slug?: string
  avatar_image: string
  size?: string
  quantity: number
  unit_price_original: string
  unit_price_discounted: string
}

interface CartData {
  items: CartItem[]
  cart_total_to_pay: string
  cart_total_original_price?: string
  cart_total_discounted_price?: string
  cart_total_savings?: string
}

interface CartState {
  items: CartItem[]
  totals: {
    toPay: string
  }
  loading: boolean
  lastFetched: number | null
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: [],
    totals: {
      toPay: '0.00'
    },
    loading: false,
    lastFetched: null
  }),

  getters: {
    itemCount: (state): number => {
      return state.items.reduce((sum, item) => sum + item.quantity, 0)
    },

    getVariantQuantity: (state) => {
      return (variantSlug: string): number => {
        const item = state.items.find(i => 
          i.product_slug === variantSlug || i.product_variant_slug === variantSlug
        )
        return item?.quantity || 0
      }
    },

    merchandiseTotal: (state): number => {
      return state.items.reduce((sum, item) => {
        const price = parseFloat(item.unit_price_discounted || item.unit_price_original)
        return sum + (price * item.quantity)
      }, 0)
    },

    hasItems: (state): boolean => {
      return state.items.length > 0
    }
  },

  actions: {
    async fetchCart(force = false): Promise<void> {
      const now = Date.now()
      const CACHE_TIME = 30000 // 30 seconds
      
      if (!force && this.lastFetched && (now - this.lastFetched) < CACHE_TIME) {
        return
      }

      this.loading = true
      
      try {
        const data = await $fetch<any>('/api/private/get/cart')
        this.items = data?.items || []
        this.totals = { toPay: data?.cart_total_to_pay || '0.00' }
        this.lastFetched = now
      } catch (error) {
        console.error('Failed to fetch cart:', error)
        this.items = []
        this.totals = { toPay: '0.00' }
      } finally {
        this.loading = false
      }
    },

    async addToCart(variantSlug: string, quantity: number): Promise<void> {
      const existingQuantity = this.getVariantQuantity(variantSlug)
      const totalQuantity = existingQuantity + quantity
      
      const existingItem = this.items.find(i => 
        i.product_slug === variantSlug || i.product_variant_slug === variantSlug
      )
      const oldQuantity = existingItem?.quantity || 0

      if (existingItem) {
        existingItem.quantity = totalQuantity
      }

      const newTotal = this.merchandiseTotal.toFixed(2)
      this.totals.toPay = newTotal

      try {
        await $fetch('/api/private/put/cart', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: {
            product_slug: variantSlug,
            quantity: totalQuantity,
          },
        })

        if (import.meta.client) {
          window.dispatchEvent(new CustomEvent('cart:updated', {
            detail: { source: 'store', variant: variantSlug, quantity: totalQuantity }
          }))
        }
      } catch (error) {
        if (existingItem) {
          if (oldQuantity > 0) {
            existingItem.quantity = oldQuantity
          } else {
            const index = this.items.findIndex(i => 
              i.product_slug === variantSlug || i.product_variant_slug === variantSlug
            )
            if (index > -1) this.items.splice(index, 1)
          }
        }
        const revertTotal = this.merchandiseTotal.toFixed(2)
        this.totals.toPay = revertTotal
        throw error
      }
    },

    async removeFromCart(item: CartItem): Promise<void> {
      const variantSlug = item.product_slug || item.product_variant_slug
      if (!variantSlug) {
        console.error('No slug found in item:', item)
        return
      }
      
      const index = this.items.findIndex(i => 
        i.product_slug === variantSlug || i.product_variant_slug === variantSlug
      )
      
      if (index === -1) return

      const removedItem = this.items.splice(index, 1)[0]

      try {
        await $fetch(`/api/private/delete/cart?product_slug=${encodeURIComponent(variantSlug)}`, {
          method: 'DELETE',
        })

        const newTotal = this.merchandiseTotal.toFixed(2)
        this.totals.toPay = newTotal

        if (import.meta.client) {
          window.dispatchEvent(new CustomEvent('cart:updated', {
            detail: { source: 'store', variant: variantSlug, action: 'remove' }
          }))
        }
      } catch (error) {
        console.error('❌ removeFromCart - Error:', error)
        this.items.splice(index, 0, removedItem)
        throw error
      }
    },

    async updateQuantity(variantSlug: string, quantity: number): Promise<void> {
      const item = this.items.find(i => 
        i.product_slug === variantSlug || i.product_variant_slug === variantSlug
      )
      if (!item) return

      const oldQuantity = item.quantity
      item.quantity = quantity

      const newTotal = this.merchandiseTotal.toFixed(2)
      this.totals.toPay = newTotal

      try {
        await $fetch('/api/private/put/cart', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: {
            product_slug: variantSlug,
            quantity,
          },
        })

        if (import.meta.client) {
          window.dispatchEvent(new CustomEvent('cart:updated', {
            detail: { source: 'store', variant: variantSlug, quantity }
          }))
        }
      } catch (error) {
        item.quantity = oldQuantity
        const revertTotal = this.merchandiseTotal.toFixed(2)
        this.totals.toPay = revertTotal
        throw error
      }
    },

    clearCache(): void {
      this.lastFetched = null
    },

    async clearCart(): Promise<void> {
      const itemsBackup = [...this.items]
      const totalsBackup = { ...this.totals }

      this.items = []
      this.totals = { toPay: '0.00' }

      try {
        await $fetch('/api/private/cart/clear', {
          method: 'DELETE',
        })

        if (import.meta.client) {
          window.dispatchEvent(new CustomEvent('cart:updated', {
            detail: { source: 'store', action: 'clear' }
          }))
        }
      } catch (error) {
        this.items = itemsBackup
        this.totals = totalsBackup
        throw error
      }
    }
  }
})