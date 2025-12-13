<!-- pages/checkout.vue -->
<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { useCartStore } from '~/stores/cart'

interface CartItem {
  product: string
  quantity: number
  unit_price_discounted: string
  unit_price_original: string
  avatar_image: string
  size?: string
  product_slug?: string
  product_variant_slug?: string
}

const cartStore = useCartStore()

const FREE_THRESHOLD = 200
const FLAT_SHIPPING = 12.99

const removingSlug = ref<string | null>(null)
const submitting = ref(false)
const errorMsg = ref('')
const selectedPaymentMethod = ref<'card' | 'paypal' | ''>('')

const { getResponsiveImages } = useImageTransform()

/**
 * Get responsive image attributes for checkout thumbnails
 */
function getCheckoutThumbnailAttrs(url: string) {
  return getResponsiveImages(url, [500], '12vh')
}

/**
 * Get responsive image attributes for mobile collapsed cart
 */
function getMobileCollapsedThumbnailAttrs(url: string) {
  return getResponsiveImages(url, [500], '10vh')
}

const cart = computed(() => ({
  items: cartStore.items,
  cart_total_to_pay: cartStore.totals.toPay
}))

// Shared form state
const formValues = reactive({
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  postal_code: '',
  city: '',
  country: '',
  phone_number: '',
  delivery_address: '',
  delivery_postal_code: '',
  delivery_city: '',
  privacyAccepted: false,
  newsletter: false
})

const { sessionId } = useCartSession()

const toNumber = (value: unknown): number => {
  return Number.parseFloat(String(value ?? '0').replace(',', '.')) || 0
}

const formatMoney = (amount: number): string => {
  return Number.isInteger(amount) ? amount.toString() : amount.toFixed(2)
}

const subtotal = computed(() => cartStore.merchandiseTotal)

const shippingFee = computed(() => {
  return subtotal.value >= FREE_THRESHOLD ? 0 : FLAT_SHIPPING
})

const total = computed(() => {
  return subtotal.value + shippingFee.value
})

const isSubmitDisabled = computed(() => {
  if (cart.value.items.length === 0) return true
  if (submitting.value) return true
  if (!selectedPaymentMethod.value) return true
  
  const hasRequiredFields = Boolean(
    formValues.email?.trim() &&
    formValues.firstName?.trim() &&
    formValues.lastName?.trim() &&
    formValues.address?.trim() &&
    formValues.postal_code?.trim() &&
    formValues.city?.trim() &&
    formValues.country?.trim() &&
    formValues.phone_number?.trim() &&
    formValues.delivery_address?.trim() &&
    formValues.delivery_postal_code?.trim() &&
    formValues.delivery_city?.trim() &&
    formValues.privacyAccepted
  )
  
  return !hasRequiredFields
})

function selectPaymentMethod(method: 'card' | 'paypal'): void {
  selectedPaymentMethod.value = method
}

function getItemSlug(item: CartItem): string {
  return item.product_variant_slug ?? item.product_slug ?? ''
}

async function removeCartItem(item: CartItem): Promise<void> {
  const slug = getItemSlug(item)
  if (!slug || removingSlug.value) return

  removingSlug.value = slug
  try {
    await cartStore.removeFromCart({ 
      ...item, 
      product_slug: item.product_slug ?? slug 
    })
  } catch (error) {
    console.error('Failed to remove item:', error)
  } finally {
    removingSlug.value = null
  }
}

/**
 * Handle checkout submission - unified for both payment methods
 */
async function handleSubmit(): Promise<void> {
  errorMsg.value = ''

  if (cart.value.items.length === 0) {
    errorMsg.value = 'Your cart is empty.'
    return
  }

  if (!selectedPaymentMethod.value) {
    errorMsg.value = 'Please select a payment method.'
    return
  }

  try {
    submitting.value = true
    
    const payload = {
      email: formValues.email,
      country: formValues.country,
      address: formValues.address,
      city: formValues.city,
      postal_code: formValues.postal_code,
      phone_number: formValues.phone_number,
      delivery_address: formValues.delivery_address,
      delivery_city: formValues.delivery_city,
      delivery_postal_code: formValues.delivery_postal_code,
      payment_method: selectedPaymentMethod.value,
      shipping_cost: shippingFee.value,
      session_id: sessionId.value
    }

    // Call secure Nuxt server API
    const response = await $fetch<{
      payment_id: string
      order_reference: string
      total_price: string
      payment_method: string
    }>('/api/orders/create', {
      method: 'POST',
      body: payload
    })

    // Route based on payment method
    if (response.payment_method === 'card') {
      // Navigate to card payment page with encrypted token
      await navigateTo({
        path: '/payment/card',
        query: {
          payment_id: response.payment_id,
          ref: response.order_reference
        }
      })
    } 
    else if (response.payment_method === 'paypal') {
      // Get PayPal approval URL from encrypted token
      const paypalData = await $fetch<{
        type: string
        approval_url: string
      }>('/api/payment/initialize', {
        method: 'POST',
        body: { payment_id: response.payment_id }
      })
      
      // Redirect to PayPal with payment session ID for later verification
      window.location.href = `${paypalData.approval_url}&payment_session_id=${response.payment_id}`
    }
    
  } catch (error: any) {
    console.error('Order error:', error)
    errorMsg.value = error?.data?.message || 'Could not create order. Please try again.'
  } finally {
    submitting.value = false
  }
}

onMounted(async () => {
  await cartStore.fetchCart()
})
</script>

<template>
  <section>
    <AppNavigation :dark="false" />

    <div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-6">
      <div class="flex justify-start w-full">
        <nav class="flex items-center py-1 text-xs md:text-sm text-text_color uppercase tracking-widest" aria-label="Breadcrumb">
          <NuxtLink to="/" class="hover:underline pr-2">HOME</NuxtLink>
          <span class="pr-2" aria-hidden="true">/</span>
          <NuxtLink to="/shop" class="hover:underline pr-2">SHOP</NuxtLink>
          <span class="pr-2" aria-hidden="true">/</span>
          <span class="pr-2" aria-current="page">CHECKOUT</span>
        </nav>
      </div>
    </div>

    <!-- DESKTOP LAYOUT -->
    <div class="hidden md:flex flex-col md:flex-row py-8 md:px-8 mt-6 md:gap-x-16">
      <CheckoutForm
        :form-values="formValues"
        :selected-payment-method="selectedPaymentMethod"
        :submitting="submitting"
        :error-msg="errorMsg"
        :is-submit-disabled="isSubmitDisabled"
        @submit="handleSubmit"
        @select-payment="selectPaymentMethod"
      />

      <!-- Order Summary -->
      <aside class="w-full mt-10 md:mt-0">
        <div class="space-y-5">
          <h2 class="uppercase tracking-widest text-sm">Order Summary</h2>

          <div v-if="cart.items.length" class="grid grid-cols-1 gap-y-4">
            <div v-for="(item, idx) in cart.items" :key="idx" class="flex gap-4">
              <img 
                v-bind="getCheckoutThumbnailAttrs(item.avatar_image)"
                :alt="item.product" 
                class="object-cover border" 
                loading="lazy" 
              />
              <div class="flex-1">
                <div class="text-sm md:text-base leading-tight tracking-wider px-3">{{ item.product }}</div>
                <div class="text-xs mt-1 tracking-wider px-3">Size: {{ item.size }}</div>
                <div class="text-xs mt-1 tracking-wider px-3">Quantity: {{ item.quantity }}</div>
              </div>
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
                  :disabled="removingSlug === getItemSlug(item)"
                  @click="removeCartItem(item)"
                >
                  {{ removingSlug === getItemSlug(item) ? 'Removing...' : 'Remove item' }}
                </button>
              </div>
            </div>
          </div>
          <div v-else class="text-sm opacity-70">Your cart is empty.</div>

          <div class="space-y-2 text-sm border-t border-text_color/30 pt-4">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span>€{{ formatMoney(subtotal) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping</span>
              <span v-if="shippingFee === 0">€0 (Free)</span>
              <span v-else>€{{ formatMoney(shippingFee) }}</span>
            </div>
            <div class="flex justify-between font-medium text-base pt-2">
              <span>Total</span>
              <span>€{{ formatMoney(total) }}</span>
            </div>
            <p class="text-xs opacity-70">
              Prices include VAT, excluding any import duties.
            </p>
          </div>
        </div>
      </aside>
    </div>

    <!-- MOBILE LAYOUT -->
    <div class="md:hidden pb-10 max-w-screen-md mx-auto px-4 md:px-8 pt-4 gap-6">
      <!-- Mobile cart summary -->
      <div class="border-t border-b border-text_color/30 bg-background_color text-text_color rounded-sm">
        <div class="flex items-center justify-between py-4">
          <div class="text-sm uppercase tracking-widest">
            Cart ({{ cart.items.length }})
          </div>
          <div class="text-base font-medium">
            €{{ formatMoney(total) }}
          </div>
        </div>

        <div class="pb-4 text-sm space-y-1">
          <div class="flex justify-between">
            <span>Subtotal</span>
            <span>€{{ formatMoney(subtotal) }}</span>
          </div>
          <div class="flex justify-between">
            <span>Shipping</span>
            <span v-if="shippingFee === 0">€0 (Free)</span>
            <span v-else>€{{ formatMoney(shippingFee) }}</span>
          </div>
        </div>

        <Popover v-slot="{ open }" class="block">
          <PopoverButton
            class="w-full flex items-center justify-between py-4 text-sm border-t border-text_color/20"
          >
            <span class="uppercase tracking-widest">
              Items ({{ cart.items.length }})
            </span>
            <Icon
              name="lucide:chevron-down"
              class="w-4 h-4 transition-transform duration-150"
              :class="open ? 'rotate-180' : ''"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel static v-show="open">
              <div class="max-h-80 overflow-y-auto divide-y divide-text_color/30">
                <div
                  v-for="(item, idx) in cart.items"
                  :key="idx"
                  class="flex gap-3 py-3"
                >
                  <img 
                    v-bind="getMobileCollapsedThumbnailAttrs(item.avatar_image)"
                    :alt="item.product" 
                    class="object-cover border" 
                    loading="lazy" 
                  />
                  <div class="flex-1 min-w-0">
                    <div class="text-sm leading-tight line-clamp-2">{{ item.product }}</div>
                    <div class="mt-1 text-xs opacity-70">Size: {{ item.size }}</div>
                    <div class="mt-1 text-xs opacity-70">Qty: {{ item.quantity }}</div>
                    <div class="mt-2 text-sm">
                      <span v-if="item.unit_price_discounted !== item.unit_price_original" class="space-x-1">
                        <span class="font-medium">€{{ item.unit_price_discounted }}</span>
                        <span class="line-through text-xs">€{{ item.unit_price_original }}</span>
                      </span>
                      <span v-else>€{{ item.unit_price_original }}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    class="shrink-0 p-1 hover:bg-text_color/10 rounded-sm h-7 transition-colors disabled:opacity-50"
                    :disabled="removingSlug === getItemSlug(item)"
                    @click="removeCartItem(item)"
                    :aria-label="`Remove ${item.product}`"
                    title="Remove"
                  >
                    <Icon name="lucide:x" class="w-4 h-4" />
                  </button>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </div>

      <CheckoutForm
        :form-values="formValues"
        :selected-payment-method="selectedPaymentMethod"
        :submitting="submitting"
        :error-msg="errorMsg"
        :is-submit-disabled="isSubmitDisabled"
        @submit="handleSubmit"
        @select-payment="selectPaymentMethod"
      />
    </div>
  </section>
</template>