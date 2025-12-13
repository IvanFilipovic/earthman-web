<!-- components/AppToastContainer.vue -->
<script setup lang="ts">
import { Dialog, DialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue'
import { useToast } from '~/composables/useToast'

const { toasts, remove } = useToast()
const router = useRouter()

const { getResponsiveImages } = useImageTransform()

function handleContinueShopping(toastId: number) {
    remove(toastId)
    router.push('/shop')
}

/**
 * Handle go to checkout action
 */
function handleGoToCheckout(toastId: number) {
    remove(toastId)
    router.push('/checkout')
}
</script>

<template>
  <div class="fixed inset-0 pointer-events-none z-50">
    <TransitionRoot
      v-for="toast in toasts.filter(t => t.type === 'cart')"
      :key="toast.id"
      :show="true"
      as="template"
    >
      <Dialog :open="true" @close="remove(toast.id)" class="relative z-50">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-text_color/30 backdrop-blur-sm pointer-events-auto" />
        </TransitionChild>

        <!-- Modal -->
        <div class="fixed inset-0 flex items-center justify-center p-4 pointer-events-auto">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-md bg-background_color border border-text_color/30 shadow-2xl py-8">
              <!-- Content -->
              <div class="px-6 pb-6 pt-2">
                <!-- Success icon -->
                <div class="flex justify-center mb-4">
                  <div class="w-10 h-10 rounded-full bg-success_text_color/10 flex items-center justify-center">
                    <Icon name="lucide:check" class="w-5 h-5 text-success_text_color" />
                  </div>
                </div>

                <!-- Product info -->
                <div class="flex items-center text-center gap-4 mb-6">
                  <!-- Product details -->
                  <div class="flex-1 min-w-0">
                    <h3 class="text-lg font-medium text-text_color leading-tight mb-1">
                      {{ toast.productName }}
                    </h3>
                    <p class="text-sm text-text_color/70">
                      {{ toast.message }}
                    </p>
                    <p v-if="toast.quantity && toast.quantity > 1" class="text-sm text-text_color/70 mt-1">
                      Quantity: {{ toast.quantity }}
                    </p>
                  </div>
                </div>

                <!-- Action buttons -->
                <div class="space-y-3">
                  <button
                    type="button"
                    @click="handleGoToCheckout(toast.id)"
                    class="btn btn--primary w-full"
                  >
                    <span class="btn__text">Go to Checkout</span>
                    <span class="btn__fill"></span>
                  </button>

                  <button
                    type="button"
                    @click="handleContinueShopping(toast.id)"
                    class="btn btn--secondary w-full"
                  >
                    <span class="btn__text">Continue Shopping</span>
                    <span class="btn__fill"></span>
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>