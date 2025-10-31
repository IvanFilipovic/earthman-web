<script setup lang="ts">
import { Form as VForm, Field, ErrorMessage } from 'vee-validate'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

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

interface Cart {
  items: CartItem[]
  cart_total_to_pay: string
}

interface OrderPayload {
  email: string
  country: string
  address: string
  city: string
  postal_code: string
  phone_number: string
  delivery_address: string
  delivery_city: string
  delivery_postal_code: string
  payment_method: string
  shipping_cost: number
}

const config = useRuntimeConfig()

const FREE_THRESHOLD = 200
const FLAT_SHIPPING = 12.99

const cart = ref<Cart>({ items: [], cart_total_to_pay: '0.00' })
const loadingCart = ref(false)
const removingSlug = ref<string | null>(null)
const submitting = ref(false)
const errorMsg = ref('')
const selectedPaymentMethod = ref<'card' | 'paypal' | ''>('')

// SHARED FORM STATE - This is the key to making both forms work together!
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

const toNumber = (value: unknown): number => {
  return Number.parseFloat(String(value ?? '0').replace(',', '.')) || 0
}

const formatMoney = (amount: number): string => {
  return Number.isInteger(amount) ? amount.toString() : amount.toFixed(2)
}

const calculateLineTotal = (item: CartItem): number => {
  const price = toNumber(item.unit_price_discounted ?? item.unit_price_original)
  return price * (item.quantity ?? 0)
}

const subtotal = computed(() => {
  return cart.value.items.reduce((sum, item) => sum + calculateLineTotal(item), 0)
})

const shippingFee = computed(() => {
  return subtotal.value >= FREE_THRESHOLD ? 0 : FLAT_SHIPPING
})

const total = computed(() => {
  return subtotal.value + shippingFee.value
})

// Check formValues instead of VeeValidate's internal values
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

function createRequiredRule(label: string, maxLength?: number) {
  return (value: string): string | true => {
    if (!value || !String(value).trim()) {
      return `${label} is required`
    }
    if (maxLength && String(value).length > maxLength) {
      return `${label} must be less than ${maxLength + 1} characters`
    }
    return true
  }
}

function emailRule(value: string): string | true {
  if (!value || !value.trim()) {
    return 'Email is required'
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  if (!emailRegex.test(value)) {
    return 'Please enter a valid email address'
  }
  return true
}

function phoneRule(value: string): string | true {
  if (!value || !value.trim()) {
    return 'Phone number is required'
  }
  const phoneRegex = /^[+()\-.\s\d]{7,20}$/
  if (!phoneRegex.test(value)) {
    return 'Please enter a valid phone number (+, digits, spaces, (), -)'
  }
  return true
}

function createPostalRule(label = 'Postal code') {
  return (value: string): string | true => {
    if (!value || !value.trim()) {
      return `${label} is required`
    }
    const postalRegex = /^[A-Za-z0-9\s\-]{3,10}$/
    if (!postalRegex.test(value)) {
      return `${label} looks invalid`
    }
    return true
  }
}

function privacyRule(value: boolean): string | true {
  return value ? true : 'You must accept the Privacy Policy'
}

function selectPaymentMethod(method: 'card' | 'paypal'): void {
  selectedPaymentMethod.value = method
}

function getItemSlug(item: CartItem): string {
  return item.product_variant_slug ?? item.product_slug ?? ''
}

async function fetchCart(): Promise<void> {
  try {
    loadingCart.value = true
    const response = await $fetch<Cart>('/api/private/get/cart')
    cart.value = {
      ...response,
      items: (response.items ?? []).map((item: any) => ({
        ...item,
        size: item.size ?? item.product_size
      }))
    }
  } catch (error) {
    console.error('Failed to fetch cart:', error)
  } finally {
    loadingCart.value = false
  }
}

async function removeCartItem(item: CartItem): Promise<void> {
  const slug = getItemSlug(item)
  if (!slug || removingSlug.value) return

  removingSlug.value = slug
  try {
    await $fetch('/api/private/delete/cart', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: { product_variant_slug: slug }
    })
    
    await fetchCart()
    
    if (import.meta.client) {
      window.dispatchEvent(new CustomEvent('cart:updated', { 
        detail: { source: 'checkout', removed: slug } 
      }))
    }
  } catch (error) {
    console.error('Failed to remove item:', error)
  } finally {
    removingSlug.value = null
  }
}

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
    
    const payload: OrderPayload = {
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
      shipping_cost: shippingFee.value
    }

    const response = await $fetch<{ order_reference: string; total_price: number }>(
      `${config.public.apiBase}/public/orders/create/`,
      {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: payload
      }
    )

    await navigateTo({ 
      path: '/thank-you', 
      query: { 
        ref: response.order_reference, 
        total: response.total_price 
      } 
    })
  } catch (error: any) {
    errorMsg.value = error?.data?.detail || 'Could not create order. Please try again.'
    console.error('Order creation failed:', error)
  } finally {
    submitting.value = false
  }
}

onMounted(() => {
  fetchCart()
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

    <!-- DESKTOP FORM -->
    <div class="hidden md:flex flex-col md:flex-row py-8 md:px-8 mt-6 md:gap-x-16">
      <VForm class="w-full" @submit="handleSubmit">
        <div class="space-y-8">
          <h3 class="text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color">Billing</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <label for="email-desktop" class="block text-xs uppercase tracking-widest mb-2">E-mail</label>
              <Field 
                id="email-desktop"
                name="email" 
                type="email" 
                :rules="emailRule"
                v-model="formValues.email"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  aria-describedby="email-error-desktop"
                />
                <div id="email-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="firstName-desktop" class="block text-xs uppercase tracking-widest mb-2">Name</label>
              <Field 
                id="firstName-desktop"
                name="firstName" 
                :rules="createRequiredRule('Name', 50)"
                v-model="formValues.firstName"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="text" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="50"
                  aria-describedby="firstName-error-desktop"
                />
                <div id="firstName-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
            <div>
              <label for="lastName-desktop" class="block text-xs uppercase tracking-widest mb-2">Surname</label>
              <Field 
                id="lastName-desktop"
                name="lastName" 
                :rules="createRequiredRule('Surname', 50)"
                v-model="formValues.lastName"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="text" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="50"
                  aria-describedby="lastName-error-desktop"
                />
                <div id="lastName-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <label for="address-desktop" class="block text-xs uppercase tracking-widest mb-2">Address</label>
              <Field 
                id="address-desktop"
                name="address" 
                :rules="createRequiredRule('Address', 120)"
                v-model="formValues.address"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="text" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="120" 
                  placeholder="Street, number"
                  aria-describedby="address-error-desktop"
                />
                <div id="address-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="postal_code-desktop" class="block text-xs uppercase tracking-widest mb-2">Post code</label>
              <Field 
                id="postal_code-desktop"
                name="postal_code" 
                :rules="createPostalRule('Post code')"
                v-model="formValues.postal_code"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  inputmode="numeric" 
                  maxlength="10"
                  aria-describedby="postal_code-error-desktop"
                />
                <div id="postal_code-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
            <div>
              <label for="city-desktop" class="block text-xs uppercase tracking-widest mb-2">Town / City</label>
              <Field 
                id="city-desktop"
                name="city" 
                :rules="createRequiredRule('City', 60)"
                v-model="formValues.city"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="text" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="60"
                  aria-describedby="city-error-desktop"
                />
                <div id="city-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6">
            <div>
              <label for="country-desktop" class="block text-xs uppercase tracking-widest mb-2">Country / Region</label>
              <Field 
                id="country-desktop"
                name="country" 
                :rules="createRequiredRule('Country')"
                v-model="formValues.country"
                v-slot="{ field, errorMessage }"
              >
                <select 
                  v-bind="field" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  aria-describedby="country-error-desktop"
                >
                  <option value="">Select country</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Austria">Austria</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                </select>
                <div id="country-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
            <div>
              <label for="phone_number-desktop" class="block text-xs uppercase tracking-widest mb-2">Telephone</label>
              <Field 
                id="phone_number-desktop"
                name="phone_number" 
                :rules="phoneRule"
                v-model="formValues.phone_number"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="tel" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="20"
                  aria-describedby="phone_number-error-desktop"
                />
                <div id="phone_number-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>
        </div>

        <div class="space-y-8 mt-10">
          <h3 class="text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color">Delivery</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <label for="delivery_address-desktop" class="block text-xs uppercase tracking-widest mb-2">Delivery Address</label>
              <Field 
                id="delivery_address-desktop"
                name="delivery_address" 
                :rules="createRequiredRule('Delivery address', 120)"
                v-model="formValues.delivery_address"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="text" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="120" 
                  placeholder="Street, number"
                  aria-describedby="delivery_address-error-desktop"
                />
                <div id="delivery_address-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="delivery_postal_code-desktop" class="block text-xs uppercase tracking-widest mb-2">Delivery Post code</label>
              <Field 
                id="delivery_postal_code-desktop"
                name="delivery_postal_code" 
                :rules="createPostalRule('Delivery post code')"
                v-model="formValues.delivery_postal_code"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  inputmode="numeric" 
                  maxlength="10"
                  aria-describedby="delivery_postal_code-error-desktop"
                />
                <div id="delivery_postal_code-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
            <div>
              <label for="delivery_city-desktop" class="block text-xs uppercase tracking-widest mb-2">Delivery City</label>
              <Field 
                id="delivery_city-desktop"
                name="delivery_city" 
                :rules="createRequiredRule('Delivery city', 60)"
                v-model="formValues.delivery_city"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="text" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="60"
                  aria-describedby="delivery_city-error-desktop"
                />
                <div id="delivery_city-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>
        </div>

        <div class="space-y-6 mt-10">
          <h3 class="text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color">Payment</h3>

          <div class="flex flex-col md:flex-row gap-3">
          <label class="flex-1 cursor-pointer">
          <input 
          type="radio" 
          name="payment" 
          value="card" 
          class="sr-only peer" 
          @change="selectPaymentMethod('card')"
          />
          <div 
          class="px-4 py-3 border text-sm uppercase transition-colors flex items-center gap-2 peer-checked:border-text_color peer-checked:bg-text_color/50 peer-checked:font-medium peer-checked:text-background_color hover:border-text_color/50"
          :class="selectedPaymentMethod === 'card' ? 'border-text_color bg-text_color/5 font-medium' : 'border-text_color/30'"
          >
          <img src="/logo/stripe.png" alt="Card Payment" class="w-5 h-5 object-contain" />
          <span>Card</span>
          </div>
          </label>

          <label class="flex-1 cursor-pointer">
          <input 
          type="radio" 
          name="payment" 
          value="paypal" 
          class="sr-only peer" 
          @change="selectPaymentMethod('paypal')"
          />
          <div 
          class="px-4 py-3 border text-sm uppercase transition-colors flex items-center gap-2 peer-checked:border-text_color peer-checked:bg-text_color/50 peer-checked:font-medium peer-checked:text-background_color hover:border-text_color/50"
          :class="selectedPaymentMethod === 'paypal' ? 'border-text_color bg-text_color/5 font-medium' : 'border-text_color/30'"
          >
          <img src="/logo/paypal.png" alt="PayPal" class="w-5 h-5 object-contain" />
          <span>PayPal</span>
          </div>
          </label>
          </div>

          <div class="space-y-4 pt-2">
            <label class="flex items-start gap-3 text-sm cursor-pointer">
              <Field name="newsletter" type="checkbox" :value="true" :unchecked-value="false" v-model="formValues.newsletter" class="mt-0.5" />
              <span>I want to receive personalised commercial communications by email.</span>
            </label>

            <label class="flex items-start gap-3 text-sm cursor-pointer">
              <Field
                name="privacyAccepted"
                type="checkbox"
                :value="true"
                :unchecked-value="false"
                :rules="privacyRule"
                v-model="formValues.privacyAccepted"
                class="mt-0.5"
              />
              <span>
                <a href="#" class="underline hover:no-underline">I have read and understand the Privacy and Cookies Policy.</a>
              </span>
            </label>
            <div class="mt-1 h-4 overflow-hidden">
              <ErrorMessage name="privacyAccepted" v-slot="{ message }">
                <transition name="fade-error">
                  <p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p>
                </transition>
              </ErrorMessage>
            </div>
          </div>
        </div>

        <div class="pt-6">
          <button
            type="submit"
            class="w-full btn"
            :class="isSubmitDisabled ? 'btn--disabled' : 'btn--primary'"
            :disabled="isSubmitDisabled"
          >
            <span class="btn__text">{{ submitting ? 'Placing Order…' : 'Place Order' }}</span>
            <span class="btn__fill"></span>
          </button>
          <div class="mt-3 h-5 overflow-hidden">
            <transition name="fade-error">
              <p v-if="errorMsg" class="text-sm text-error_text_color">{{ errorMsg }}</p>
            </transition>
          </div>
        </div>
      </VForm>

      <!-- Order Summary (continues as before) -->
      <aside class="w-full mt-10 md:mt-0">
        <div class="space-y-5">
          <h2 class="uppercase tracking-widest text-sm">Order Summary</h2>

          <div v-if="cart.items.length" class="grid grid-cols-1 gap-y-4">
            <div v-for="(item, idx) in cart.items" :key="idx" class="flex gap-4">
              <img :src="item.avatar_image" :alt="item.product" class="w-22 h-40 object-cover border" loading="lazy" />
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

    <!-- MOBILE FORM - Add v-model to all fields like desktop -->
    <div class="md:hidden pb-10 max-w-screen-md mx-auto px-4 md:px-8 pt-4 gap-6">
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
                  <img :src="item.avatar_image" :alt="item.product" class="w-20 h-24 object-cover border" loading="lazy" />
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

      <VForm class="w-full" @submit="handleSubmit">
        <div class="space-y-8">
          <h3 class="text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color">Billing</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <label for="email-desktop" class="block text-xs uppercase tracking-widest mb-2">E-mail</label>
              <Field 
                id="email-desktop"
                name="email" 
                type="email" 
                :rules="emailRule"
                v-model="formValues.email"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  aria-describedby="email-error-desktop"
                />
                <div id="email-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="firstName-desktop" class="block text-xs uppercase tracking-widest mb-2">Name</label>
              <Field 
                id="firstName-desktop"
                name="firstName" 
                :rules="createRequiredRule('Name', 50)"
                v-model="formValues.firstName"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="text" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="50"
                  aria-describedby="firstName-error-desktop"
                />
                <div id="firstName-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
            <div>
              <label for="lastName-desktop" class="block text-xs uppercase tracking-widest mb-2">Surname</label>
              <Field 
                id="lastName-desktop"
                name="lastName" 
                :rules="createRequiredRule('Surname', 50)"
                v-model="formValues.lastName"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="text" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="50"
                  aria-describedby="lastName-error-desktop"
                />
                <div id="lastName-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <label for="address-desktop" class="block text-xs uppercase tracking-widest mb-2">Address</label>
              <Field 
                id="address-desktop"
                name="address" 
                :rules="createRequiredRule('Address', 120)"
                v-model="formValues.address"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="text" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="120" 
                  placeholder="Street, number"
                  aria-describedby="address-error-desktop"
                />
                <div id="address-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="postal_code-desktop" class="block text-xs uppercase tracking-widest mb-2">Post code</label>
              <Field 
                id="postal_code-desktop"
                name="postal_code" 
                :rules="createPostalRule('Post code')"
                v-model="formValues.postal_code"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  inputmode="numeric" 
                  maxlength="10"
                  aria-describedby="postal_code-error-desktop"
                />
                <div id="postal_code-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
            <div>
              <label for="city-desktop" class="block text-xs uppercase tracking-widest mb-2">Town / City</label>
              <Field 
                id="city-desktop"
                name="city" 
                :rules="createRequiredRule('City', 60)"
                v-model="formValues.city"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="text" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="60"
                  aria-describedby="city-error-desktop"
                />
                <div id="city-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6">
            <div>
              <label for="country-desktop" class="block text-xs uppercase tracking-widest mb-2">Country / Region</label>
              <Field 
                id="country-desktop"
                name="country" 
                :rules="createRequiredRule('Country')"
                v-model="formValues.country"
                v-slot="{ field, errorMessage }"
              >
                <select 
                  v-bind="field" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  aria-describedby="country-error-desktop"
                >
                  <option value="">Select country</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Austria">Austria</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                </select>
                <div id="country-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
            <div>
              <label for="phone_number-desktop" class="block text-xs uppercase tracking-widest mb-2">Telephone</label>
              <Field 
                id="phone_number-desktop"
                name="phone_number" 
                :rules="phoneRule"
                v-model="formValues.phone_number"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="tel" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="20"
                  aria-describedby="phone_number-error-desktop"
                />
                <div id="phone_number-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>
        </div>

        <div class="space-y-8 mt-10">
          <h3 class="text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color">Delivery</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <label for="delivery_address-desktop" class="block text-xs uppercase tracking-widest mb-2">Delivery Address</label>
              <Field 
                id="delivery_address-desktop"
                name="delivery_address" 
                :rules="createRequiredRule('Delivery address', 120)"
                v-model="formValues.delivery_address"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="text" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="120" 
                  placeholder="Street, number"
                  aria-describedby="delivery_address-error-desktop"
                />
                <div id="delivery_address-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="delivery_postal_code-desktop" class="block text-xs uppercase tracking-widest mb-2">Delivery Post code</label>
              <Field 
                id="delivery_postal_code-desktop"
                name="delivery_postal_code" 
                :rules="createPostalRule('Delivery post code')"
                v-model="formValues.delivery_postal_code"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  inputmode="numeric" 
                  maxlength="10"
                  aria-describedby="delivery_postal_code-error-desktop"
                />
                <div id="delivery_postal_code-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
            <div>
              <label for="delivery_city-desktop" class="block text-xs uppercase tracking-widest mb-2">Delivery City</label>
              <Field 
                id="delivery_city-desktop"
                name="delivery_city" 
                :rules="createRequiredRule('Delivery city', 60)"
                v-model="formValues.delivery_city"
                v-slot="{ field, errorMessage }"
              >
                <input 
                  v-bind="field" 
                  type="text" 
                  class="input" 
                  :class="{ 'border-error_text_color': errorMessage }"
                  maxlength="60"
                  aria-describedby="delivery_city-error-desktop"
                />
                <div id="delivery_city-error-desktop" class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
                  </transition>
                </div>
              </Field>
            </div>
          </div>
        </div>

        <div class="space-y-6 mt-10">
          <h3 class="text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color">Payment</h3>

          <div class="flex flex-col md:flex-row gap-3">
            <label class="flex-1 justify-center items-center cursor-pointer">
              <input 
                type="radio" 
                name="payment" 
                value="card" 
                class="sr-only peer" 
                @change="selectPaymentMethod('card')"
              />
              <div 
                class="px-4 py-3 border text-sm mx-auto uppercase transition-colors flex justify-center items-center gap-2 peer-checked:border-text_color peer-checked:bg-text_color/50 peer-checked:font-medium peer-checked:text-background_color hover:border-text_color/50"
                :class="selectedPaymentMethod === 'card' ? 'border-text_color bg-text_color/5 font-medium' : 'border-text_color/30'"
              >
                <img src="/logo/stripe.png" alt="Card Payment" class="w-5 h-5 object-contain" />
                <span>Card</span>
              </div>
            </label>

            <label class="flex-1 justify-center items-center cursor-pointer">
              <input 
                type="radio" 
                name="payment" 
                value="paypal" 
                class="sr-only peer" 
                @change="selectPaymentMethod('paypal')"
              />
              <div 
                class="px-4 py-3 border text-sm mx-auto uppercase transition-colors flex justify-center items-center gap-2 peer-checked:border-text_color peer-checked:bg-text_color/50 peer-checked:font-medium peer-checked:text-background_color hover:border-text_color/50"
                :class="selectedPaymentMethod === 'paypal' ? 'border-text_color bg-text_color/5 font-medium' : 'border-text_color/30'"
              >
                <img src="/logo/paypal.png" alt="PayPal" class="w-5 h-5 object-contain" />
                <span>PayPal</span>
              </div>
            </label>
          </div>

          <div class="space-y-4 pt-2">
            <label class="flex items-start gap-3 text-sm cursor-pointer">
              <Field name="newsletter" type="checkbox" :value="true" :unchecked-value="false" v-model="formValues.newsletter" class="mt-0.5" />
              <span>I want to receive personalised commercial communications by email.</span>
            </label>

            <label class="flex items-start gap-3 text-sm cursor-pointer">
              <Field
                name="privacyAccepted"
                type="checkbox"
                :value="true"
                :unchecked-value="false"
                :rules="privacyRule"
                v-model="formValues.privacyAccepted"
                class="mt-0.5"
              />
              <span>
                <a href="#" class="underline hover:no-underline">I have read and understand the Privacy and Cookies Policy.</a>
              </span>
            </label>
            <div class="mt-1 h-4 overflow-hidden">
              <ErrorMessage name="privacyAccepted" v-slot="{ message }">
                <transition name="fade-error">
                  <p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p>
                </transition>
              </ErrorMessage>
            </div>
          </div>
        </div>

        <div class="pt-6">
          <button
            type="submit"
            class="w-full btn"
            :class="isSubmitDisabled ? 'btn--disabled' : 'btn--primary'"
            :disabled="isSubmitDisabled"
          >
            <span class="btn__text">{{ submitting ? 'Placing Order…' : 'Place Order' }}</span>
            <span class="btn__fill"></span>
          </button>
          <div class="mt-3 h-5 overflow-hidden">
            <transition name="fade-error">
              <p v-if="errorMsg" class="text-sm text-error_text_color">{{ errorMsg }}</p>
            </transition>
          </div>
        </div>
      </VForm>
    </div>
  </section>
</template>

<style scoped>
.fade-error-enter-active,
.fade-error-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-error-enter-from {
  opacity: 0;
  transform: translateY(-4px);
}

.fade-error-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>