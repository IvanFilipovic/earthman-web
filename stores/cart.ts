// stores/cart.ts
import { defineStore } from 'pinia'
import type { CartItem, CartData, CartState } from '~/types/cart'
import { validateCartData } from '~/utils/validators'

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
        const response = await $fetch('/api/private/get/cart')
        const data = validateCartData(response)
        this.items = data.items
        this.totals = { toPay: data.cart_total_to_pay }
        this.lastFetched = now
      } catch (error: unknown) {
        // Error handling - reset cart state
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
        const { getCsrfHeaders } = useCsrf()
        await $fetch('/api/private/put/cart', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...getCsrfHeaders()
          },
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
        return
      }
      
      const index = this.items.findIndex(i => 
        i.product_slug === variantSlug || i.product_variant_slug === variantSlug
      )
      
      if (index === -1) return

      const removedItem = this.items.splice(index, 1)[0]

      try {
        const { getCsrfHeaders } = useCsrf()
        await $fetch(`/api/private/delete/cart?product_slug=${encodeURIComponent(variantSlug)}`, {
          method: 'DELETE',
          headers: getCsrfHeaders(),
        })

        const newTotal = this.merchandiseTotal.toFixed(2)
        this.totals.toPay = newTotal

        if (import.meta.client) {
          window.dispatchEvent(new CustomEvent('cart:updated', {
            detail: { source: 'store', variant: variantSlug, action: 'remove' }
          }))
        }
      } catch (error) {
        // Revert optimistic update on error
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
        const { getCsrfHeaders } = useCsrf()
        await $fetch('/api/private/put/cart', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            ...getCsrfHeaders()
          },
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
        const { getCsrfHeaders } = useCsrf()
        await $fetch('/api/private/cart/clear', {
          method: 'DELETE',
          headers: getCsrfHeaders(),
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