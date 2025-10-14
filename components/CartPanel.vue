<template>
  <!-- Headless UI slide-over -->
  <TransitionRoot :show="open" as="template">
    <Dialog class="relative z-[60]" @close="emit('update:open', false)">
      <!-- Backdrop -->
      <TransitionChild
        enter="transition-opacity ease-out duration-250"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-in duration-250"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-text_color/30" aria-hidden="true"></div>
      </TransitionChild>

      <!-- Panel -->
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-y-0 right-0 flex max-w-full pl-10">
          <TransitionChild
            enter="transform transition ease-out duration-200"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in duration-150"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel
                class="w-screen md:max-w-2xl h-full flex flex-col shadow-xl"
                :class="dark ? 'bg-text_color text-background_color' : 'bg-background_color text-text_color'"
                >
                <!-- Header -->
                <div class="px-6 py-5 border-b"
                    :class="dark ? 'border-background_color' : 'border-text_color/30'">
                    <div class="flex items-baseline justify-between">
                    <DialogTitle class="text-lg tracking-wider uppercase">Shopping Cart</DialogTitle>
                        <div class="flex items-center flex-nowrap gap-2 text-sm">
                            <span class="mx-2 whitespace-nowrap">
                                {{ itemCount }} {{ itemCount === 1 ? 'item' : 'items' }}
                            </span>

                            <span class="mx-2" aria-hidden="true">|</span>

                            <span class="mx-2 whitespace-nowrap">€{{ totals.toPay }}</span>

                            <button
                                class="ml-2 p-1 inline-flex items-center justify-center hover:bg-text_color/15 dark:hover:bg-white/10 shrink-0"
                                aria-label="Close cart"
                                @click="emit('update:open', false)"
                            >
                                <Icon name="lucide:x" class="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
                

              <!-- Body -->
                <div class="flex-1 overflow-y-auto px-6 py-5 space-y-6">
                    <!-- Items -->
                    <div v-if="itemCount > 0" class="space-y-6">
                    <div v-for="(it, idx) in items" :key="`${it.product_slug}-${idx}`"
                        class="grid grid-cols-[88px,1fr,auto] gap-4">
                        <!-- thumb -->
                        <img :src="it.avatar_image" :alt="it.product"
                            class="w-22 h-22 object-cover border"/>

                        <!-- info -->
                        <div class="flex flex-col">
                            <div class="text-base leading-tight tracking-wider px-3">{{ it.product }}</div>
                            <div class="text-xs mt-1 tracking-wider px-3">
                                Size: <span class="font-medium">{{ it.size ?? '—' }}</span>
                            </div>
                            
                        </div>

                        <!-- price + remove -->
                        <div class="text-right">
                        <div class="text-base">
                            <span v-if="it.unit_price_discounted !== it.unit_price_original" class="space-x-1">
                            <span class="font-semibold">€{{ it.unit_price_discounted }}</span>
                            <span class="line-through text-xs"
                                    :class="dark ? 'text-white/60' : 'text-black/60'">€{{ it.unit_price_original }}</span>
                            </span>
                            <span v-else>€{{ it.unit_price_original }}</span>
                        </div>

                        <!-- remove (emit only; wire API later) -->
                        <button
                            class="mt-3 text-xs uppercase tracking-widest border-b border-text_color/30"
                            :disabled="removingSlug === (it.product_variant_slug ?? it.product_slug)"
                            @click="removeItem(it)"
                        >
                            Remove item
                        </button>
                        </div>
                    </div>
                    </div>

                    <!-- Empty state -->
                    <div v-else class="text-sm">
                    Your cart is empty.
                    </div>

                    <!-- Trust/benefits -->
                    <ul class="mt-2 space-y-2 text-sm">
                    <li class="flex gap-2"><span>✓</span> Customer rating 4.5/5.0 (3,700+ reviews) via Trustpilot</li>
                    <li class="flex gap-2"><span>✓</span> Worldwide shipping</li>
                    <li class="flex gap-2"><span>✓</span> 30 days return policy (14 days for sale items)</li>
                    </ul>

                    <!-- Subtotal / totals -->
                    <div class="py-4 border-t">

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
                        <div>
                        <div v-if="shippingFee === 0" class="text-sm my-auto">€0</div>
                        <div v-else class="text-sm my-auto">€{{ formatMoney(shippingFee) }}</div>
                        </div>
                    </div>

                    <!-- Free-shipping hint -->
                    <div class="mt-1 text-[10px]">
                        {{ freeShipHint }}
                    </div>

                    <!-- Grand Total -->
                    <div class="mt-3 flex items-center justify-between text-base font-medium">
                        <span>Total</span>
                        <span class="text-sm my-auto">€{{ formatMoney(grandTotal) }}</span>
                    </div>
                    </div>

                    <!-- Secure payment note -->
                    <div class="space-y-2">
                    <div class="text-xs uppercase tracking-widest">Secure payment</div>
                    <p class="text-xs leading-relaxed">
                        Your safety is important to us. Please review our Privacy Policy and Terms and
                        Conditions for complete information.
                    </p>
                    </div>
                </div>

                <!-- Footer buttons -->
                <div class="px-6 py-5 border-t">
                    <div class="flex gap-3">
                    <NuxtLink
                        class="flex-1 primary-btn py-3 text-center"
                        to="/checkout"
                    >
                        GO TO CHECKOUT
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
import { ref, watch, onMounted, onBeforeUnmount, computed } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const config = useRuntimeConfig()
const props = defineProps({
  open: { type: Boolean, default: false },
  dark: { type: Boolean, default: false }
})
const emit = defineEmits<{
  (e: 'update:open', v: boolean): void
}>()
const FREE_THRESHOLD = 200
const FLAT_SHIPPING = 12.99
const raw = ref<any | null>(null)
const items = computed(() => (raw.value?.items ?? []).map((i: any) => ({
  ...i,
  size: i.size ?? i.product_size ?? undefined
})))
const removingSlug = ref<string | null>(null)
const itemCount = computed(() => items.value.length)
const totals = computed(() => ({
  original: raw.value?.cart_total_original_price ?? '0.00',
  discounted: raw.value?.cart_total_discounted_price ?? '0.00',
  toPay: raw.value?.cart_total_to_pay ?? '0.00'
}))

async function fetchCart () {
  try {
    raw.value = await $fetch(`${config.public.apiBase}/public/cart/`, { credentials: 'include' })
  } catch (e) {
    raw.value = { items: [], cart_total_original_price: '0.00', cart_total_to_pay: '0.00' }
    console.warn('Cart fetch failed', e)
  }
}

watch(() => props.open, (val) => { if (val) fetchCart() })

const onCartUpdated = () => fetchCart()
onMounted(() => {
  if (props.open) fetchCart()
  window.addEventListener('cart:updated', onCartUpdated)
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && props.open) fetchCart()
  })
})
onBeforeUnmount(() => {
  window.removeEventListener('cart:updated', onCartUpdated)
})

/* ---------------------------
   REMOVE ITEM
--------------------------- */

function itemSlug(it: any): string | undefined {
  return it.product_variant_slug ?? it.product_slug
}

function deepClone<T>(v: T): T {
  // works on plain data from your API; avoids cloning proxies
  return v ? JSON.parse(JSON.stringify(v)) : v
}

async function removeItem(it: any) {
  const slug = itemSlug(it)
  if (!slug || removingSlug.value) return
  removingSlug.value = slug

  // ✅ snapshot WITHOUT cloning a proxy
  const prev = deepClone(toRaw(raw.value))

  // optimistic UI
  raw.value = {
    ...prev,
    items: (prev?.items ?? []).filter(
      (x: any) => (x.product_variant_slug ?? x.product_slug) !== slug
    )
  }

  try {
    await $fetch(`${config.public.apiBase}/public/cart/item/delete/`, {
      method: 'DELETE',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: { product_variant_slug: slug }
    })

    // sync totals with server response
    await fetchCart()

    // keep badges in sync (primitive detail only)
    window.dispatchEvent(new CustomEvent('cart:updated', {
      detail: { source: 'cart-panel', removed: slug }
    }))
  } catch (e) {
    // rollback if API fails
    raw.value = prev
    console.error('Remove item failed', e)
  } finally {
    removingSlug.value = null
  }
}


function toNum(x: unknown): number {
  const n = Number.parseFloat(String(x ?? '').replace(',', '.'))
  return Number.isFinite(n) ? n : 0
}
function formatMoney(n: number): string {
  // Match your UI style (e.g., €220). Change toFixed(2) if you prefer cents.
  return Number.isInteger(n) ? n.toString() : n.toFixed(2)
}

/** Merchandise total from server (discounted / toPay) */
const merchandiseTotal = computed(() => toNum(totals.value?.toPay ?? 0))

/** Shipping fee: €0 if threshold reached, else flat fee */
const shippingFee = computed(() =>
  merchandiseTotal.value >= FREE_THRESHOLD ? 0 : FLAT_SHIPPING
)

/** Grand total = merchandise + shipping */
const grandTotal = computed(() =>
  merchandiseTotal.value + shippingFee.value
)

/** Helper strings for UI */
const shippingLabel = computed(() =>
  shippingFee.value === 0 ? 'Free shipping' : `Shipping`
)

const freeShipHint = computed(() => {
  if (shippingFee.value === 0) return 'Free shipping applied'
  const diff = Math.max(0, FREE_THRESHOLD - merchandiseTotal.value)
  return `You're €${formatMoney(diff)} away from free shipping`
})
</script>

