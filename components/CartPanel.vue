<template>
  <TransitionRoot :show="open" as="template">
    <Dialog class="relative z-[60]" @close="closePanel">
      <!-- Overlay with proper click handling -->
      <TransitionChild
        as="template"
        leave="transition-opacity ease-in duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div 
          class="fixed inset-0 bg-text_color/30 transition-opacity" 
          aria-hidden="true"
        />
      </TransitionChild>

      <!-- Panel container -->
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
            <TransitionChild
              as="template"
              enter="transform transition ease-out duration-200"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in duration-500"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel
                class="pointer-events-auto w-full md:max-w-2xl h-full flex flex-col shadow-xl bg-background_color text-text_color"
              >
              <div class="px-4 md:px-6 py-5 border-b border-text_color/30">
                <div class="flex items-baseline justify-between">
                  <DialogTitle class="text-md tracking-wider uppercase">
                    Shopping Cart
                  </DialogTitle>
                  
                  <div class="flex items-center flex-nowrap gap-2 text-sm">
                    <span class="mx-2 whitespace-nowrap">
                      {{ cartStore.itemCount }} {{ cartStore.itemCount === 1 ? 'item' : 'items' }}
                    </span>

                    <span class="mx-2" aria-hidden="true">|</span>

                    <span class="mx-2 whitespace-nowrap">€{{ cartStore.totals.toPay }}</span>

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

              <div class="flex-1 overflow-y-auto px-4 md:px-6 py-5 space-y-6">
                <div v-if="cartStore.itemCount > 0" class="space-y-6">
                  <article 
                    v-for="(item, idx) in cartStore.items" 
                    :key="`${item.product_slug}-${idx}`"
                    class="grid grid-cols-[auto,1fr,auto] gap-1"
                  >
                    <img 
                      v-bind="getThumbnailAttrs(item.avatar_image)"
                      :alt="item.product"
                      class="object-cover border"
                      loading="lazy"
                    />

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

                    <div class="text-right">
                      <div class="text-sm md:text-base">
                        <span v-if="item.unit_price_discounted !== item.unit_price_original" class="space-x-1">
                          <span class="text-error_text_color">€{{ formatMoney(getItemTotal(item)) }}</span>
                          <span class="line-through text-xs">€{{ formatMoney(getItemOriginalTotal(item)) }}</span>
                        </span>
                        <span v-else>€{{ formatMoney(getItemTotal(item)) }}</span>
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

                <div v-else class="text-sm opacity-70">
                  Your cart is empty.
                </div>

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
                
                <button
                  v-if="cartStore.itemCount > 0"
                  type="button"
                  class="mt-3 text-xs uppercase tracking-widest border-b border-text_color/30 hover:border-text_color transition-colors disabled:opacity-50"
                  :disabled="isClearing"
                  @click="handleClearCart"
                >
                  {{ isClearing ? 'Clearing...' : 'Clear Cart' }}
                </button>

                <div class="py-4 border-t border-text_color/30">
                  <div class="flex items-baseline justify-between">
                    <div class="text-xs">
                      Subtotal
                      <div class="text-[10px]">Prices include VAT, excluding shipping costs</div>
                    </div>
                    <div class="text-sm my-auto">€{{ formatMoney(cartStore.merchandiseTotal) }}</div>
                  </div>

                  <div class="mt-3 flex items-center justify-between">
                    <div class="text-xs">Shipping</div>
                    <div class="text-sm my-auto">€0.00</div>
                  </div>

                  <div class="mt-3 flex items-center justify-between text-base font-medium">
                    <span>Total</span>
                    <span class="text-sm my-auto">€{{ formatMoney(cartStore.merchandiseTotal) }}</span>
                  </div>
                </div>

                <div class="space-y-2">
                  <h4 class="text-xs uppercase tracking-widest">Secure payment</h4>
                  <p class="text-xs leading-relaxed opacity-80">
                    Your safety is important to us. Please review our Privacy Policy and Terms and
                    Conditions for complete information.
                  </p>
                </div>
              </div>

              <div class="px-6 py-5 border-t border-text_color/30">
                <div class="flex flex-col gap-3">
                  <!-- Enabled checkout button (link) -->
                  <NuxtLink 
                    v-if="!isCheckoutDisabled"
                    to="/checkout" 
                    class="btn btn--primary w-full"
                    @click="closePanel"
                  >
                    <span class="btn__text">Checkout</span>
                    <span class="btn__fill"></span>
                  </NuxtLink>
                  
                  <!-- Disabled checkout button -->
                  <button
                    v-else
                    type="button"
                    class="btn btn--disabled w-full"
                    disabled
                  >
                    <span class="btn__text">Checkout</span>
                    <span class="btn__fill"></span>
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </div>
  </Dialog>
</TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useCartStore } from '~/stores/cart'

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
const cartStore = useCartStore()

const removingSlug = ref<string | null>(null)
const isClearing = ref(false)

// Responsive image helper for small thumbnails
const { getResponsiveImages } = useImageTransform()


function getThumbnailAttrs(url: string) {
  return getResponsiveImages(
    url,
    [100, 200, 500], // Small thumbnail sizes
    '12vh' // Fixed size in pixels
  )
}

// Disable checkout if cart is empty or being cleared
const isCheckoutDisabled = computed(() => {
  return cartStore.itemCount === 0 || isClearing.value
})

function closePanel(): void {
  emit('update:open', false)
}

function getItemSlug(item: CartItem): string {
  return item.product_slug || item.product_variant_slug || ''
}

function isRemoving(item: CartItem): boolean {
  return removingSlug.value === getItemSlug(item)
}

async function handleRemoveItem(item: CartItem): Promise<void> {
  const slug = getItemSlug(item)
  if (!slug || removingSlug.value) return

  removingSlug.value = slug
  
  try {
    await cartStore.removeFromCart(item)
  } catch (error: any) {
    console.error('Failed to remove item:', error)
  } finally {
    removingSlug.value = null
  }
}

function formatMoney(value: number): string {
  return value.toFixed(2)
}

function getItemTotal(item: CartItem): number {
  const price = parseFloat(item.unit_price_discounted || item.unit_price_original)
  return price * item.quantity
}

function getItemOriginalTotal(item: CartItem): number {
  const price = parseFloat(item.unit_price_original)
  return price * item.quantity
}

async function handleClearCart(): Promise<void> {
  if (isClearing.value) return
  isClearing.value = true
  
  try {
    await cartStore.clearCart()
  } catch (error: any) {
    console.error('Failed to clear cart:', error)
  } finally {
    isClearing.value = false
  }
}

watch(
  () => props.open,
  async (isOpen) => {
    if (isOpen) {
      await cartStore.fetchCart(true)
    }
  },
  { immediate: true }
)
</script>