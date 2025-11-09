<template>
  <TransitionRoot :show="open" as="template">
    <Dialog class="relative z-[60]" @close="closePanel">
      <!-- Backdrop - Click outside to close -->
      <TransitionChild
        leave="transition-opacity ease-in duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div 
          class="fixed inset-0 bg-text_color/30 cursor-pointer" 
          aria-hidden="true"
          @click="closePanel"
        ></div>
      </TransitionChild>

      <!-- Panel Container -->
      <div 
        data-aos="fade-left"
        data-aos-duration="400"
        data-aos-easing="ease-in-out"
        class="fixed inset-0 overflow-hidden pointer-events-none"
      >
        <div class="absolute inset-y-0 right-0 flex max-w-full pl-10">
          <TransitionChild
            enter="transform transition ease-out duration-200"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in duration-500"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel
              class="w-full md:max-w-2xl h-full flex flex-col shadow-xl bg-background_color text-text_color pointer-events-auto"
            >
              <!-- Header -->
              <div class="px-4 md:px-6 py-5 border-b border-text_color/30">
                <div class="flex items-baseline justify-between">
                  <DialogTitle class="text-md tracking-wider uppercase">
                    Shopping Cart
                  </DialogTitle>
                  
                  <div class="flex items-center flex-nowrap gap-2 text-sm">
                    <span class="mx-2 whitespace-nowrap">
                      {{ itemCount }} {{ itemCount === 1 ? 'item' : 'items' }}
                    </span>

                    <span class="mx-2" aria-hidden="true">|</span>

                    <span class="mx-2 whitespace-nowrap">€{{ totals.toPay }}</span>

                    <button
                      type="button"
                      class="ml-2 p-1 inline-flex items-center justify-center hover:bg-text_color/10 shrink-0 rounded transition-colors"
                      aria-label="Close cart"
                      @click="closePanel"
                    >
                      <Icon name="lucide:x" class="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <!-- Body -->
              <div class="flex-1 overflow-y-auto px-4 md:px-6 py-5 space-y-6">
                <!-- Items -->
                <div v-if="itemCount > 0" class="space-y-6">
                  <article 
                    v-for="(item, idx) in items" 
                    :key="`${item.product_slug}-${idx}`"
                    class="grid grid-cols-[88px,1fr,auto] gap-1"
                  >
                    <!-- Thumbnail -->
                    <img 
                      :src="item.avatar_image" 
                      :alt="item.product"
                      class="w-22 h-22 object-cover border"
                      loading="lazy"
                    />

                    <!-- Info -->
                    <div class="flex flex-col">
                      <h3 class="text-sm md:text-base leading-tight tracking-wider px-3">
                        {{ item.product }}
                      </h3>
                      <div class="text-xs mt-1 tracking-wider px-3">
                        Size: <span class="font-medium">{{ item.size ?? '—' }}</span>
                      </div>
                      <div class="text-xs mt-1 tracking-wider px-3">
                        Quantity: <span class="font-medium">{{ item.quantity ?? '—' }}</span>
                      </div>
                    </div>

                    <!-- Price + Remove -->
                    <div class="text-right">
                      <div class="text-sm md:text-base">
                        <span v-if="item.unit_price_discounted !== item.unit_price_original" class="space-x-1">
                          <span class="font-semibold">€{{ item.unit_price_discounted }}</span>
                          <span class="line-through text-xs">€{{ item.unit_price_original }}</span>
                        </span>
                        <span v-else>€{{ item.unit_price_original }}</span>
                      </div>

                      <button
                        type="button"
                        class="mt-3 text-xs uppercase tracking-widest border-b border-text_color/30 hover:border-text_color transition-colors disabled:opacity-50"
                        :disabled="isRemoving(item)"
                        @click="handleRemoveItem(item)"
                      >
                        {{ isRemoving(item) ? 'Removing...' : 'Remove item' }}
                      </button>
                    </div>
                  </article>
                </div>

                <!-- Empty state -->
                <div v-else class="text-sm opacity-70">
                  Your cart is empty.
                </div>

                <!-- Trust/Benefits -->
                <ul class="mt-2 space-y-2 text-xs md:text-sm">
                  <li class="flex gap-2">
                    <span>✓</span> 
                    <span>Customer rating 4.5/5.0 (3,700+ reviews) via Trustpilot</span>
                  </li>
                  <li class="flex gap-2">
                    <span>✓</span> 
                    <span>Worldwide shipping</span>
                  </li>
                  <li class="flex gap-2">
                    <span>✓</span> 
                    <span>30 days return policy (14 days for sale items)</span>
                  </li>
                </ul>

                <!-- Subtotal / Totals -->
                <div class="py-4 border-t border-text_color/30">
                  <!-- Subtotal -->
                  <div class="flex items-baseline justify-between">
                    <div class="text-xs">
                      Subtotal
                      <div class="text-[10px]">Prices include VAT, excluding shipping costs</div>
                    </div>
                    <div class="text-sm my-auto">€{{ formatMoney(merchandiseTotal) }}</div>
                  </div>

                  <!-- Shipping -->
                  <div class="mt-3 flex items-center justify-between">
                    <div class="text-xs">{{ shippingLabel }}</div>
                    <div class="text-sm my-auto">
                      €{{ formatMoney(shippingFee) }}
                    </div>
                  </div>

                  <!-- Free-shipping hint -->
                  <div class="mt-1 text-[10px] opacity-70">
                    {{ freeShippingHint }}
                  </div>

                  <!-- Grand Total -->
                  <div class="mt-3 flex items-center justify-between text-base font-medium">
                    <span>Total</span>
                    <span class="text-sm my-auto">€{{ formatMoney(grandTotal) }}</span>
                  </div>
                </div>

                <!-- Secure payment note -->
                <div class="space-y-2">
                  <h4 class="text-xs uppercase tracking-widest">Secure payment</h4>
                  <p class="text-xs leading-relaxed opacity-80">
                    Your safety is important to us. Please review our Privacy Policy and Terms and
                    Conditions for complete information.
                  </p>
                </div>
              </div>

              <!-- Footer buttons -->
              <div class="px-6 py-5 border-t border-text_color/30">
                <div class="flex gap-3">
                  <NuxtLink 
                    to="/checkout" 
                    class="btn btn--primary w-full"
                    @click="closePanel"
                  >
                    <span class="btn__text">Checkout</span>
                    <span class="btn__fill"></span>
                  </NuxtLink>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

interface CartItem {
  product: string
  product_slug?: string
  product_variant_slug?: string
  avatar_image: string
  size?: string
  quantity: number
  unit_price_original: string
  unit_price_discounted: string
}

interface Props {
  open?: boolean
}

interface Emits {
  (e: 'update:open', value: boolean): void
}

const props = withDefaults(defineProps<Props>(), {
  open: false
})

const emit = defineEmits<Emits>()

const {
  items,
  itemCount,
  totals,
  fetchCart,
  removeItem,
  merchandiseTotal,
  shippingFee,
  grandTotal,
  shippingLabel,
  freeShippingHint,
  formatMoney
} = useCart()

const removingSlug = ref<string | null>(null)

function closePanel(): void {
  emit('update:open', false)
}

function getItemSlug(item: CartItem): string | undefined {
  return item.product_variant_slug ?? item.product_slug
}

function isRemoving(item: CartItem): boolean {
  return removingSlug.value === getItemSlug(item)
}

async function handleRemoveItem(item: CartItem): Promise<void> {
  const slug = getItemSlug(item)
  if (!slug || removingSlug.value) return

  removingSlug.value = slug
  
  try {
    await removeItem(item)
    
    if (import.meta.client) {
      window.dispatchEvent(new CustomEvent('cart:updated', {
        detail: { source: 'cart-panel', variant: slug, action: 'remove' }
      }))
    }
  } finally {
    removingSlug.value = null
  }
}

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      fetchCart()
    }
  },
  { immediate: true }
)
</script>