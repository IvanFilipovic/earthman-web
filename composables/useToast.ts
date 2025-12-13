// composables/useToast.ts
import { ref } from 'vue'

type ToastType = 'success' | 'error' | 'info' | 'cart'

interface Toast {
  id: number
  type: ToastType
  message: string
  timeout?: number
  // Cart-specific fields
  productName?: string
  productImage?: string
  quantity?: number
  action?: {
    label: string
    onClick: () => void
  }
}

const toastsState = ref<Toast[]>([])
let _id = 0

export function useToast() {
  /**
   * Remove a toast by ID
   */
  function remove(id: number) {
    toastsState.value = toastsState.value.filter(t => t.id !== id)
  }

  /**
   * Show a generic toast
   */
  function show(
    message: string, 
    type: ToastType = 'info', 
    timeout = 2500
  ) {
    const id = ++_id
    toastsState.value.push({ id, type, message, timeout })
    
    // Auto-remove after timeout (client-only)
    if (typeof window !== 'undefined' && timeout > 0) {
      setTimeout(() => remove(id), timeout)
    }
  }

  /**
   * Show success toast
   */
  function success(message: string, timeout?: number) {
    show(message, 'success', timeout ?? 2500)
  }

  /**
   * Show error toast
   */
  function error(message: string, timeout?: number) {
    show(message, 'error', timeout ?? 3500)
  }

  /**
   * Show cart success modal with product details
   */
  function addedToCart(options: {
    productName: string
    productImage?: string
    quantity: number
    timeout?: number
  }) {
    const id = ++_id
    
    toastsState.value.push({
      id,
      type: 'cart',
      message: 'was successfully added to cart',
      productName: options.productName,
      productImage: options.productImage,
      quantity: options.quantity,
      timeout: options.timeout ?? 0 // No auto-close for cart toast
    })
  }

  return {
    toasts: toastsState,
    show,
    success,
    error,
    addedToCart,
    remove
  }
}