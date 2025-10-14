import { ref } from 'vue'

type Toast = {
  id: number
  type: 'success' | 'error' | 'info'
  message: string
  timeout?: number
}

const toastsState = ref<Toast[]>([])
let _id = 0

export function useToast() {
  function remove(id: number) {
    toastsState.value = toastsState.value.filter(t => t.id !== id)
  }

  function show(message: string, type: Toast['type'] = 'info', timeout = 2500) {
    const id = ++_id
    toastsState.value.push({ id, type, message, timeout })

    // client-only timer
    if (typeof window !== 'undefined' && timeout > 0) {
      setTimeout(() => remove(id), timeout)
    }
  }

  function success(message: string, timeout?: number) {
    show(message, 'success', timeout ?? 2500)
  }
  function error(message: string, timeout?: number) {
    show(message, 'error', timeout ?? 3500)
  }

  return {
    toasts: toastsState,
    show,
    success,
    error,
    remove
  }
}
