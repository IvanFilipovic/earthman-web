<!-- pages/checkout.vue -->
<template>
  <section class="min-h-screen">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-6 gap-6 border-b border-text_color/30">
      <div class="w-full md:w-1/2">
        <div class="image bg-cover bg-center bg-transparent h-40 flex justify-center max-w-[100%]">
        </div>
      </div>

      <div class="w-full md:w-1/2 flex flex-col">
        <AppNavigation :dark="false" />
        <div class="flex gap-3 justify-end w-full">
            <div class="flex items-center gap-3">
                <nav class="text-sm uppercase tracking-widest space-x-2 text-background_color px-4">
                  <p>=</p>
                </nav>
            </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between px-8 pt-1 gap-6">
      <div class="flex justify-start w-full">
        <div class="flex items-center">
          <p class="text-background_color">Delivery data</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row pt-8 md:px-8 mt-6 md:gap-x-16">
      <!-- LEFT: FORM -->
      <form class="w-full" @submit.prevent="submitOrder">
        <TabGroup as="div" v-model:selectedIndex="tabIndex">
          <!-- Tabs header -->
          <TabList class="flex gap-2 border-b border-text_color/30">
            <Tab v-slot="{ selected }">
              <button
                class="px-4 py-2 text-xs uppercase tracking-widest"
                :class="selected ? 'bg-text_color/5 font-medium' : 'opacity-60'"
              >Billing</button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button
                class="px-4 py-2 text-xs uppercase tracking-widest"
                :class="selected ? 'bg-text_color/5 font-medium' : 'opacity-60'"
              >Delivery</button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button
                class="px-4 py-2 text-xs uppercase tracking-widest "
                :class="selected ? 'bg-text_color/5 font-medium' : 'opacity-60'"
              >Payment</button>
            </Tab>
          </TabList>

          <!-- Panels -->
          <TabPanels class="mt-8 space-y-10">
            <!-- 1) BILLING -->
            <TabPanel class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="md:col-span-2">
                  <label class="block text-xs uppercase tracking-widest mb-2">E-mail</label>
                  <input v-model.trim="form.email" type="email" class="input" required />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs uppercase tracking-widest mb-2">Name</label>
                  <input v-model.trim="form.firstName" type="text" class="input" />
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-widest mb-2">Surname</label>
                  <input v-model.trim="form.lastName" type="text" class="input" />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="md:col-span-2">
                  <label class="block text-xs uppercase tracking-widest mb-2">Address</label>
                  <input v-model.trim="form.address" type="text" class="input" placeholder="Street, number" required />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs uppercase tracking-widest mb-2">Post code</label>
                  <input v-model.trim="form.postal_code" type="text" class="input" inputmode="numeric" required />
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-widest mb-2">Town / City</label>
                  <input v-model.trim="form.city" type="text" class="input" required />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs uppercase tracking-widest mb-2">Country / Region</label>
                  <select v-model="form.country" class="input">
                    <option value="Croatia">Croatia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Austria">Austria</option>
                    <option value="Germany">Germany</option>
                    <option value="Italy">Italy</option>
                  </select>
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-widest mb-2">Telephone</label>
                  <input v-model.trim="form.phone_number" type="tel" class="input" required />
                </div>
              </div>
              <div class="pt-2">
                <button
                  class="w-full text-center py-3 primary-btn cursor-pointer"
                  :disabled="ctaDisabled"
                  type="button"
                  @click="onCtaClick"
                >
                  <span>{{ ctaLabel }}</span>
                </button>
                <p v-if="errorMsg" class="mt-3 text-sm text-error_text_color">{{ errorMsg }}</p>
              </div>
            </TabPanel>

            <!-- 2) DELIVERY -->
            <TabPanel class="space-y-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="md:col-span-2">
                  <label class="block text-xs uppercase tracking-widest mb-2">Delivery Address</label>
                  <input v-model.trim="form.delivery_address" type="text" class="input" placeholder="Street, number" required />
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs uppercase tracking-widest mb-2">Delivery Post code</label>
                  <input v-model.trim="form.delivery_postal_code" type="text" class="input" inputmode="numeric" required />
                </div>
                <div>
                  <label class="block text-xs uppercase tracking-widest mb-2">Delivery City</label>
                  <input v-model.trim="form.delivery_city" type="text" class="input" required />
                </div>
              </div>

              <div class="pt-2">
                <button
                  class="w-full text-center py-3 primary-btn cursor-pointer"
                  :disabled="ctaDisabled"
                  type="button"
                  @click="onCtaClick"
                >
                  <span>{{ ctaLabel }}</span>
                </button>
                <p v-if="errorMsg" class="mt-3 text-sm text-error_text_color">{{ errorMsg }}</p>
              </div>
            </TabPanel>

            <!-- 3) PAYMENT -->
            <TabPanel class="space-y-6">
              <div class="text-xs uppercase tracking-widest">Payment method</div>
              <div class="flex gap-3">
                <button
                  type="button"
                  class="px-4 py-2 border text-sm"
                  :class="form.payment_method === 'card' ? 'border-text_color font-medium' : 'border-text_color/30'"
                  @click="form.payment_method = 'card'"
                >Card</button>

                <button
                  type="button"
                  class="px-4 py-2 border text-sm"
                  :class="form.payment_method === 'paypal' ? 'border-text_color font-medium' : 'border-text_color/30'"
                  @click="form.payment_method = 'paypal'"
                >PayPal</button>

                <button
                  type="button"
                  class="px-4 py-2 border text-sm"
                  :class="form.payment_method === 'cod' ? 'border-text_color font-medium' : 'border-text_color/30'"
                  @click="form.payment_method = 'cod'"
                >Cash on Delivery</button>
              </div>

              <!-- Legal / marketing (optional) -->
              <div class="space-y-4 pt-2">
                <label class="flex items-center gap-3 text-sm">
                  <input type="checkbox" v-model="form.newsletter" class="checkbox">
                  I want to receive personalised commercial communications by email.
                </label>
                <label class="flex items-center gap-3 text-sm">
                  <input type="checkbox" v-model="form.privacyAccepted" class="checkbox" required>
                  <a href="#" class="underline">I have read and understand the Privacy and Cookies Policy.</a>
                </label>
              </div>
              <div class="pt-2">
                <button
                  class="w-full text-center py-3 primary-btn cursor-pointer"
                  :disabled="ctaDisabled"
                  type="button"
                  @click="onCtaClick"
                >
                  <span>{{ ctaLabel }}</span>
                </button>
                <p v-if="errorMsg" class="mt-3 text-sm text-error_text_color">{{ errorMsg }}</p>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
        
      </form>

      <!-- RIGHT: SUMMARY -->
      <aside class="w-full">
        <div class="space-y-5">
          <h2 class="uppercase tracking-widest text-sm">Order Summary</h2>

          <!-- Items -->
          <div v-if="cart.items.length" class="grid grid-cols-2 gap-x-4 gap-y-4">
            <div v-for="(it, i) in cart.items" :key="i" class=" flex gap-4">
              <img :src="it.avatar_image" :alt="it.product" class="w-22 h-40 object-cover border" />
              <div class="flex-1">
                <div class="text-sm leading-tight">{{ it.product }}</div>
                <div class="text-xs mt-1 opacity-70">Qty: {{ it.quantity }} <span v-if="it.size">· Size: {{ it.size }}</span></div>
              </div>
              <div class="text-sm whitespace-nowrap">
                €{{ money(lineTotal(it)) }}
              </div>
            </div>
          </div>

          <div v-else class="text-sm opacity-70">Your cart is empty.</div>

          <hr />

          <!-- Totals -->
          <div class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>€{{ money(subtotal) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping</span>
              <span v-if="shippingFee === 0">€0 (Free)</span>
              <span v-else>€{{ money(shippingFee) }}</span>
            </div>
            <div class="flex justify-between font-medium text-base pt-2">
              <span>Total</span>
              <span>€{{ money(total) }}</span>
            </div>
            <p class="text-xs opacity-70">
              Prices include VAT, excluding any import duties.
            </p>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const config = useRuntimeConfig()
const API = 'http://127.0.0.1:8000'

// --- Money helpers + shipping rules ---
const FREE_THRESHOLD = 200
const FLAT_SHIPPING = 12.99
const toNum = (x: unknown) => Number.parseFloat(String(x ?? '0').replace(',', '.')) || 0
const money = (n: number) => (Number.isInteger(n) ? n : n.toFixed(2))
const tabIndex = ref(0)
const cart = ref<{ items: CartItem[], cart_total_to_pay: string }>({ items: [], cart_total_to_pay: '0.00' })
const loadingCart = ref(false)

const lineTotal = (it: CartItem) => {
  const unit = toNum(it.unit_price_discounted ?? it.unit_price_original)
  return unit * (it.quantity ?? 0)
}
const subtotal = computed(() =>
  cart.value.items.reduce((sum, it) => sum + lineTotal(it), 0)
)
const shippingFee = computed(() =>
  subtotal.value >= FREE_THRESHOLD ? 0 : FLAT_SHIPPING
)
const total = computed(() => subtotal.value + shippingFee.value)
// --- Form state (only fields required by CreateOrderView must be sent) ---
const form = ref({
  // Billing
  firstName: '',
  lastName: '',
  country: 'Croatia',          // ⬅️ renamed from region; backend expects "country"
  address: '',
  city: '',
  postal_code: '',
  phone_number: '',
  email: '',
  // Delivery
  delivery_address: '',
  delivery_city: '',
  delivery_postal_code: '',
  // Payment
  payment_method: '',
  // Extras
  newsletter: false,
  privacyAccepted: false
})

const isBillingValid = computed(() =>
  !!form.value.email &&
  !!form.value.country &&
  !!form.value.address &&
  !!form.value.city &&
  !!form.value.postal_code &&
  !!form.value.phone_number
)

const isDeliveryValid = computed(() =>
  !!form.value.delivery_address &&
  !!form.value.delivery_city &&
  !!form.value.delivery_postal_code
)

const isPaymentValid = computed(() =>
  !!form.value.payment_method && !!form.value.privacyAccepted
)
const isValid = computed(() => isBillingValid.value && isDeliveryValid.value && isPaymentValid.value)
const ctaLabel = computed(() => {
  if (tabIndex.value === 0) return 'Continue to Delivery'
  if (tabIndex.value === 1) return 'Continue to Payment'
  return 'Place Order'
})

const ctaDisabled = computed(() => {
  if (submitting.value || cart.value.items.length === 0) return true
  if (tabIndex.value === 0) return !isBillingValid.value
  if (tabIndex.value === 1) return !isDeliveryValid.value
  return !isPaymentValid.value
})

// Click handler for the CTA
async function onCtaClick () {
  if (tabIndex.value === 0) {
    if (isBillingValid.value) tabIndex.value = 1
    return
  }
  if (tabIndex.value === 1) {
    if (isDeliveryValid.value) tabIndex.value = 2
    return
  }
  // tabIndex === 2 → create order (you already have submitOrder())
  await submitOrder()
}
const payload = {
  email: form.value.email,
  country: form.value.country,
  address: form.value.address,
  city: form.value.city,
  postal_code: form.value.postal_code,
  delivery_address: form.value.delivery_address,
  delivery_city: form.value.delivery_city,
  delivery_postal_code: form.value.delivery_postal_code,
  phone_number: form.value.phone_number,
  payment_method: form.value.payment_method,
  shipping_cost: shippingFee.value
}

// --- Cart state ---
type CartItem = {
  product: string
  quantity: number
  unit_price_discounted: string
  unit_price_original: string
  avatar_image: string
  size?: string
  product_slug?: string
  product_variant_slug?: string
}

async function fetchCart () {
  try {
    loadingCart.value = true
    const res = await $fetch(`${config.public.apiBase}/public/cart/`, { credentials: 'include' }) as any
    // map optional size if present in another key
    res.items = (res.items ?? []).map((i: any) => ({ ...i, size: i.size ?? i.product_size }))
    cart.value = res
  } finally {
    loadingCart.value = false
  }
}
onMounted(fetchCart)



// --- Submit order ---
const submitting = ref(false)
const errorMsg = ref<string>('')

async function submitOrder () {
  errorMsg.value = ''
  if (!isValid.value) {
    errorMsg.value = 'Please complete all required fields.'
    return
  }
  if (cart.value.items.length === 0) {
    errorMsg.value = 'Your cart is empty.'
    return
  }

  try {
    submitting.value = true
    const res = await $fetch(`${config.public.apiBase}/public/orders/create/`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    }) as any

    // basic success UX: go to a thank-you page with reference
    navigateTo({ path: '/thank-you', query: { ref: res.order_reference, total: res.total_price } })
  } catch (e: any) {
    errorMsg.value = e?.data?.detail || 'Could not create order.'
    console.error('Order create failed', e)
  } finally {
    submitting.value = false
  }
}
</script>
<style scoped>
.image {
background-image: url("public/logo/black_logo1.png");
}
</style>

