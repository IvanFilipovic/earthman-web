<script setup lang="ts">
import { Form as VForm, Field, ErrorMessage } from 'vee-validate'

interface FormValues {
  email: string
  firstName: string
  lastName: string
  address: string
  postal_code: string
  city: string
  country: string
  phone_number: string
  delivery_address: string
  delivery_postal_code: string
  delivery_city: string
  privacyAccepted: boolean
  newsletter: boolean
}

interface Props {
  formValues: FormValues
  selectedPaymentMethod: 'card' | 'paypal' | ''
  submitting: boolean
  errorMsg: string
  isSubmitDisabled: boolean
}

interface Emits {
  (e: 'submit'): void
  (e: 'selectPayment', method: 'card' | 'paypal'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

function createRequiredRule(label: string, maxLength?: number) {
  return (value: unknown): string | true => {
    const val = value ?? ''
    const str = String(val)
    if (!str || !str.trim()) {
      return `${label} is required`
    }
    if (maxLength && str.length > maxLength) {
      return `${label} must be less than ${maxLength + 1} characters`
    }
    return true
  }
}

function emailRule(value: unknown): string | true {
  const val = String(value ?? '')
  if (!val || !val.trim()) {
    return 'Email is required'
  }
  // RFC 5322 compliant email validation regex
  // This is more comprehensive than the basic pattern
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  if (!emailRegex.test(val)) {
    return 'Please enter a valid email address'
  }
  return true
}

function phoneRule(value: unknown): string | true {
  const val = String(value ?? '')
  if (!val || !val.trim()) {
    return 'Phone number is required'
  }
  const phoneRegex = /^[+()\-.\s\d]{7,20}$/
  if (!phoneRegex.test(val)) {
    return 'Please enter a valid phone number (+, digits, spaces, (), -)'
  }
  return true
}

function createPostalRule(label = 'Postal code') {
  return (value: unknown): string | true => {
    const val = String(value ?? '')
    if (!val || !val.trim()) {
      return `${label} is required`
    }
    const postalRegex = /^[A-Za-z0-9\s\-]{3,10}$/
    if (!postalRegex.test(val)) {
      return `${label} looks invalid`
    }
    return true
  }
}

function privacyRule(value: unknown): string | true {
  return Boolean(value) ? true : 'You must accept the Privacy Policy'
}

function handleSubmit(): void {
  emit('submit')
}

function selectPaymentMethod(method: 'card' | 'paypal'): void {
  emit('selectPayment', method)
}
</script>

<template>
  <VForm class="w-full" @submit="handleSubmit">
    <div class="space-y-8">
      <h3 class="text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color">
        Billing
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="md:col-span-2">
          <label for="email" class="block text-xs uppercase tracking-widest mb-2">E-mail</label>
          <Field 
            id="email"
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
              aria-describedby="email-error"
            />
            <div id="email-error" class="mt-1 h-4 overflow-hidden">
              <transition name="fade-error">
                <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
              </transition>
            </div>
          </Field>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="firstName" class="block text-xs uppercase tracking-widest mb-2">Name</label>
          <Field 
            id="firstName"
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
              aria-describedby="firstName-error"
            />
            <div id="firstName-error" class="mt-1 h-4 overflow-hidden">
              <transition name="fade-error">
                <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
              </transition>
            </div>
          </Field>
        </div>
        <div>
          <label for="lastName" class="block text-xs uppercase tracking-widest mb-2">Surname</label>
          <Field 
            id="lastName"
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
              aria-describedby="lastName-error"
            />
            <div id="lastName-error" class="mt-1 h-4 overflow-hidden">
              <transition name="fade-error">
                <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
              </transition>
            </div>
          </Field>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="md:col-span-2">
          <label for="address" class="block text-xs uppercase tracking-widest mb-2">Address</label>
          <Field 
            id="address"
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
              aria-describedby="address-error"
            />
            <div id="address-error" class="mt-1 h-4 overflow-hidden">
              <transition name="fade-error">
                <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
              </transition>
            </div>
          </Field>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="postal_code" class="block text-xs uppercase tracking-widest mb-2">Post code</label>
          <Field 
            id="postal_code"
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
              aria-describedby="postal_code-error"
            />
            <div id="postal_code-error" class="mt-1 h-4 overflow-hidden">
              <transition name="fade-error">
                <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
              </transition>
            </div>
          </Field>
        </div>
        <div>
          <label for="city" class="block text-xs uppercase tracking-widest mb-2">Town / City</label>
          <Field 
            id="city"
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
              aria-describedby="city-error"
            />
            <div id="city-error" class="mt-1 h-4 overflow-hidden">
              <transition name="fade-error">
                <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
              </transition>
            </div>
          </Field>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <div>
          <label for="country" class="block text-xs uppercase tracking-widest mb-2">Country / Region</label>
          <Field 
            id="country"
            name="country" 
            :rules="createRequiredRule('Country')"
            v-model="formValues.country"
            v-slot="{ field, errorMessage }"
          >
            <select 
              v-bind="field" 
              class="input" 
              :class="{ 'border-error_text_color': errorMessage }"
              aria-describedby="country-error"
            >
              <option value="">Select country</option>
              <option value="Croatia">Croatia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Austria">Austria</option>
              <option value="Germany">Germany</option>
              <option value="Italy">Italy</option>
            </select>
            <div id="country-error" class="mt-1 h-4 overflow-hidden">
              <transition name="fade-error">
                <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
              </transition>
            </div>
          </Field>
        </div>
        <div>
          <label for="phone_number" class="block text-xs uppercase tracking-widest mb-2">Telephone</label>
          <Field 
            id="phone_number"
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
              aria-describedby="phone_number-error"
            />
            <div id="phone_number-error" class="mt-1 h-4 overflow-hidden">
              <transition name="fade-error">
                <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
              </transition>
            </div>
          </Field>
        </div>
      </div>
    </div>

    <div class="space-y-8 mt-10">
      <h3 class="text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color">
        Delivery
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="md:col-span-2">
          <label for="delivery_address" class="block text-xs uppercase tracking-widest mb-2">Delivery Address</label>
          <Field 
            id="delivery_address"
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
              aria-describedby="delivery_address-error"
            />
            <div id="delivery_address-error" class="mt-1 h-4 overflow-hidden">
              <transition name="fade-error">
                <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
              </transition>
            </div>
          </Field>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label for="delivery_postal_code" class="block text-xs uppercase tracking-widest mb-2">Delivery Post code</label>
          <Field 
            id="delivery_postal_code"
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
              aria-describedby="delivery_postal_code-error"
            />
            <div id="delivery_postal_code-error" class="mt-1 h-4 overflow-hidden">
              <transition name="fade-error">
                <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
              </transition>
            </div>
          </Field>
        </div>
        <div>
          <label for="delivery_city" class="block text-xs uppercase tracking-widest mb-2">Delivery City</label>
          <Field 
            id="delivery_city"
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
              aria-describedby="delivery_city-error"
            />
            <div id="delivery_city-error" class="mt-1 h-4 overflow-hidden">
              <transition name="fade-error">
                <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">{{ errorMessage }}</p>
              </transition>
            </div>
          </Field>
        </div>
      </div>
    </div>

    <div class="space-y-6 mt-10">
      <h3 class="text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color">
        Payment
      </h3>

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
          <Field 
            name="newsletter" 
            type="checkbox" 
            :value="true" 
            :unchecked-value="false" 
            v-model="formValues.newsletter" 
            class="mt-0.5" 
          />
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
            <a href="#" class="underline hover:no-underline">
              I have read and understand the Privacy and Cookies Policy.
            </a>
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