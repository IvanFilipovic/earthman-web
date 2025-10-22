<!-- pages/checkout.vue -->
<template>
  <section>
    <AppNavigation :dark="false" />

    <!-- Breadcrumbs -->
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-6">
      <div class="flex justify-start w-full">
        <div class="flex items-center py-1 text-xs md:text-sm text-text_color uppercase tracking-widest">
          <NuxtLink to="/" class="hover:underline pr-2">HOME</NuxtLink>
          <span class="pr-2">/</span>
          <NuxtLink to="/shop" class="hover:underline pr-2">SHOP</NuxtLink>
          <span class="pr-2">/</span>
          <span class="pr-2">CHECKOUT</span>
        </div>
      </div>
    </div>

    <div class="hidden md:flex flex-col md:flex-row py-8 md:px-8 mt-6 md:gap-x-16">
      <!-- LEFT: SINGLE FORM -->
      <VForm class="w-full" @submit.prevent="submitOrder">
        <!-- BILLING -->
        <div class="space-y-8">
          <h3 class="text-base uppercase tracking-widest py-2 border-b border-text_color/30">Billing</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <label class="block text-xs uppercase tracking-widest mb-2">E-mail</label>
              <Field name="email" type="email" :rules="emailRule" v-slot="{ field, meta }">
                <input v-bind="field" class="input bg-[#3c7272]" :aria-invalid="!meta.valid && meta.touched" />
              </Field>
              <ErrorMessage name="email" v-slot="{ message }">
                <!-- reserve space so form height doesn’t change -->
                <div class="mt-1 h-4 overflow-hidden">
                  <transition name="fade-error">
                    <p v-if="message" class="text-xs text-error_text_color leading-4">
                      {{ message }}
                    </p>
                  </transition>
                </div>
              </ErrorMessage>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Name</label>
              <Field name="firstName" :rules="req('Name', 50)" v-slot="{ field }">
                <input v-bind="field" type="text" class="input" maxlength="50" />
              </Field>
              <ErrorMessage name="firstName" class="mt-1 text-xs text-error_text_color" />
            </div>
            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Surname</label>
              <Field name="lastName" :rules="req('Surname', 50)" v-slot="{ field }">
                <input v-bind="field" type="text" class="input" maxlength="50" />
              </Field>
              <ErrorMessage name="lastName" class="mt-1 text-xs text-error_text_color" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <label class="block text-xs uppercase tracking-widest mb-2">Address</label>
              <Field name="address" :rules="req('Address', 120)" v-slot="{ field }">
                <input v-bind="field" type="text" class="input" maxlength="120" placeholder="Street, number" />
              </Field>
              <ErrorMessage name="address" class="mt-1 text-xs text-error_text_color" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Post code</label>
              <Field name="postal_code" :rules="postalRule('Post code')" v-slot="{ field }">
                <input v-bind="field" class="input" inputmode="numeric" maxlength="10" />
              </Field>
              <ErrorMessage name="postal_code" class="mt-1 text-xs text-error_text_color" />
            </div>
            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Town / City</label>
              <Field name="city" :rules="req('City', 60)" v-slot="{ field }">
                <input v-bind="field" type="text" class="input" maxlength="60" />
              </Field>
              <ErrorMessage name="city" class="mt-1 text-xs text-error_text_color" />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6">
            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Country / Region</label>
              <Field name="country" :rules="req('Country')" v-slot="{ field }">
                <select v-bind="field" class="input">
                  <option value="Croatia">Croatia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Austria">Austria</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                </select>
              </Field>
              <ErrorMessage name="country" class="mt-1 text-xs text-error_text_color" />
            </div>
            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Telephone</label>
              <Field name="phone_number" :rules="phoneRule" v-slot="{ field }">
                <input v-bind="field" type="tel" class="input" maxlength="20" />
              </Field>
              <ErrorMessage name="phone_number" class="mt-1 text-xs text-error_text_color" />
            </div>
          </div>
        </div>

        <!-- DELIVERY -->
        <div class="space-y-8 mt-10">
          <h3 class="text-base uppercase tracking-widest py-2 border-b border-text_color/30">Delivery</h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <label class="block text-xs uppercase tracking-widest mb-2">Delivery Address</label>
              <Field name="delivery_address" :rules="req('Delivery address', 120)" v-slot="{ field }">
                <input v-bind="field" type="text" class="input" maxlength="120" placeholder="Street, number" />
              </Field>
              <ErrorMessage name="delivery_address" class="mt-1 text-xs text-error_text_color" />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Delivery Post code</label>
              <Field name="delivery_postal_code" :rules="postalRule('Delivery post code')" v-slot="{ field }">
                <input v-bind="field" class="input" inputmode="numeric" maxlength="10" />
              </Field>
              <ErrorMessage name="delivery_postal_code" class="mt-1 text-xs text-error_text_color" />
            </div>
            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Delivery City</label>
              <Field name="delivery_city" :rules="req('Delivery city', 60)" v-slot="{ field }">
                <input v-bind="field" type="text" class="input" maxlength="60" />
              </Field>
              <ErrorMessage name="delivery_city" class="mt-1 text-xs text-error_text_color" />
            </div>
          </div>
        </div>

        <!-- PAYMENT -->
        <div class="space-y-6 mt-10">
          <h3 class="text-base uppercase tracking-widest py-2 border-b border-text_color/30">Payment</h3>

          <div class="flex gap-3">
            <button
              type="button"
              class="px-4 py-2 border text-sm uppercase"
              :class="values.payment_method === 'card' ? 'border-text_color font-medium' : 'border-text_color/30'"
              @click="setFieldValue('payment_method', 'card')"
            >Card</button>

            <button
              type="button"
              class="px-4 py-2 border text-sm uppercase"
              :class="values.payment_method === 'paypal' ? 'border-text_color font-medium' : 'border-text_color/30'"
              @click="setFieldValue('payment_method', 'paypal')"
            >PayPal</button>
          </div>
          <ErrorMessage name="payment_method" class="mt-1 text-xs text-error_text_color" />

          <!-- Legal / marketing -->
          <div class="space-y-4 pt-2">
            <label class="flex items-center gap-3 text-sm">
              <Field name="newsletter" type="checkbox" :value="true" :unchecked-value="false" />
              I want to receive personalised commercial communications by email.
            </label>

            <label class="flex items-center gap-3 text-sm">
              <Field
                name="privacyAccepted"
                type="checkbox"
                :value="true"
                :unchecked-value="false"
                :rules="(v:boolean)=> v ? true : 'You must accept the Privacy Policy'"
              />
              <a href="#" class="underline">I have read and understand the Privacy and Cookies Policy.</a>
            </label>
            <ErrorMessage name="privacyAccepted" class="mt-1 text-xs text-error_text_color" />
          </div>
        </div>

        <!-- CTA -->
        <div class="pt-6">
          <button
            class="w-full text-center py-3 primary-btn cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="ctaDisabled || submitting"
            type="submit"
          >
            <span>{{ submitting ? 'Placing Order…' : 'Place Order' }}</span>
          </button>
          <p v-if="errorMsg" class="mt-3 text-sm text-error_text_color">{{ errorMsg }}</p>
        </div>
      </VForm>

      <!-- RIGHT: SUMMARY -->
      <aside class="w-full mt-10 md:mt-0">
        <div class="space-y-5">
          <h2 class="uppercase tracking-widest text-sm">Order Summary</h2>

          <!-- Items -->
          <div v-if="cart.items.length" class="grid grid-cols-1 gap-y-4">
            <div v-for="(it, i) in cart.items" :key="i" class="flex gap-4">
              <img :src="it.avatar_image" :alt="it.product" class="w-22 h-40 object-cover border" />
              <div class="flex-1">
                <div class="text-sm md:text-base leading-tight tracking-wider px-3">{{ it.product }}</div>
                <div class="text-xs mt-1 tracking-wider px-3">Size: {{ it.size }}</div>
                <div class="text-xs mt-1 tracking-wider px-3">Quantity: {{ it.quantity }}</div>
              </div>
              <div class="text-right">
                <div class="text-sm md:text-base">
                  <span v-if="it.unit_price_discounted !== it.unit_price_original" class="space-x-1">
                    <span class="font-semibold">€{{ it.unit_price_discounted }}</span>
                    <span class="line-through text-xs">€{{ it.unit_price_original }}</span>
                  </span>
                  <span v-else>€{{ it.unit_price_original }}</span>
                </div>

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
          <div v-else class="text-sm opacity-70">Your cart is empty.</div>

          <!-- Totals -->
          <div class="space-y-2 text-sm border-t border-text_color/30 pt-4">
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
    <div class="md:hidden pb-24 max-w-screen-md mx-auto px-4 md:px-8 pt-4 gap-6">
      <!-- ===== Top summary (mobile first) ===== -->
      <div class="border-t border-b border-text_color/30 bg-background_color text-text_color rounded-sm">
        <!-- Header row -->
        <div class="flex items-center justify-between py-4">
          <div class="text-sm uppercase tracking-widest">
            Cart ({{ cart.items.length }})
          </div>
          <div class="text-base font-medium">
            €{{ money(total) }}
          </div>
        </div>

        <!-- Shipping + subtotal -->
        <div class="pb-4 text-sm space-y-1">
          <div class="flex justify-between">
            <span>Subtotal</span>
            <span>€{{ money(subtotal) }}</span>
          </div>
          <div class="flex justify-between">
            <span>Shipping</span>
            <span v-if="shippingFee === 0">€0 (Free)</span>
            <span v-else>€{{ money(shippingFee) }}</span>
          </div>
        </div>

        <Popover v-slot="{ open }" class="block">
          <!-- Toggle -->
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

          <!-- List -->
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <!-- Use `static` so the panel mounts once; v-show drives visibility -->
            <PopoverPanel static v-show="open">
              <div class="max-h-80 overflow-y-auto divide-y divide-text_color/30">
                <div
                  v-for="(it, i) in cart.items"
                  :key="i"
                  class="flex gap-3  py-3"
                >
                  <img :src="it.avatar_image" :alt="it.product" class="w-20 h-24 object-cover border" />
                  <div class="flex-1 min-w-0">
                    <div class="text-sm leading-tight line-clamp-2">{{ it.product }}</div>
                    <div class="mt-1 text-xs opacity-70">Size: {{ it.size }}</div>
                    <div class="mt-1 text-xs opacity-70">Qty: {{ it.quantity }}</div>
                    <div class="mt-2 text-sm">
                      <span v-if="it.unit_price_discounted !== it.unit_price_original" class="space-x-1">
                        <span class="font-medium">€{{ it.unit_price_discounted }}</span>
                        <span class="line-through text-xs">€{{ it.unit_price_original }}</span>
                      </span>
                      <span v-else>€{{ it.unit_price_original }}</span>
                    </div>
                  </div>

                  <button
                    class="shrink-0 p-1 hover:bg-text_color/10 rounded-sm h-7"
                    :disabled="removingSlug === (it.product_variant_slug ?? it.product_slug)"
                    @click="removeItem(it)"
                    aria-label="Remove item"
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

      <VForm class="mt-6 space-y-10" @submit.prevent="submitOrder">
        <!-- BILLING -->
        <div class="space-y-6">
          <h3 class="text-sm uppercase tracking-widest">Billing</h3>

          <div>
            <label class="block text-xs uppercase tracking-widest mb-2">E-mail</label>
            <Field name="email" type="email" :rules="emailRule" v-slot="{ field, meta }">
              <input v-bind="field" class="input w-full" :aria-invalid="!meta.valid && meta.touched" />
            </Field>
            <div class="mt-1 h-4 overflow-hidden">
              <ErrorMessage name="email" v-slot="{ message }">
                <transition name="fade-error">
                  <p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p>
                </transition>
              </ErrorMessage>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Name</label>
              <Field name="firstName" :rules="req('Name', 50)" v-slot="{ field }">
                <input v-bind="field" type="text" class="input w-full" maxlength="50" />
              </Field>
              <div class="mt-1 h-4 overflow-hidden">
                <ErrorMessage name="firstName" v-slot="{ message }">
                  <transition name="fade-error"><p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p></transition>
                </ErrorMessage>
              </div>
            </div>

            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Surname</label>
              <Field name="lastName" :rules="req('Surname', 50)" v-slot="{ field }">
                <input v-bind="field" type="text" class="input w-full" maxlength="50" />
              </Field>
              <div class="mt-1 h-4 overflow-hidden">
                <ErrorMessage name="lastName" v-slot="{ message }">
                  <transition name="fade-error"><p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p></transition>
                </ErrorMessage>
              </div>
            </div>
          </div>

          <div>
            <label class="block text-xs uppercase tracking-widest mb-2">Address</label>
            <Field name="address" :rules="req('Address', 120)" v-slot="{ field }">
              <input v-bind="field" type="text" class="input w-full" maxlength="120" placeholder="Street, number" />
            </Field>
            <div class="mt-1 h-4 overflow-hidden">
              <ErrorMessage name="address" v-slot="{ message }">
                <transition name="fade-error"><p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p></transition>
              </ErrorMessage>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Post code</label>
              <Field name="postal_code" :rules="postalRule('Post code')" v-slot="{ field }">
                <input v-bind="field" class="input w-full" inputmode="numeric" maxlength="10" />
              </Field>
              <div class="mt-1 h-4 overflow-hidden">
                <ErrorMessage name="postal_code" v-slot="{ message }">
                  <transition name="fade-error"><p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p></transition>
                </ErrorMessage>
              </div>
            </div>

            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Town / City</label>
              <Field name="city" :rules="req('City', 60)" v-slot="{ field }">
                <input v-bind="field" type="text" class="input w-full" maxlength="60" />
              </Field>
              <div class="mt-1 h-4 overflow-hidden">
                <ErrorMessage name="city" v-slot="{ message }">
                  <transition name="fade-error"><p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p></transition>
                </ErrorMessage>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-3">
            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Country / Region</label>
              <Field name="country" :rules="req('Country')" v-slot="{ field }">
                <select v-bind="field" class="input w-full">
                  <option value="Croatia">Croatia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Austria">Austria</option>
                  <option value="Germany">Germany</option>
                  <option value="Italy">Italy</option>
                </select>
              </Field>
              <div class="mt-1 h-4 overflow-hidden">
                <ErrorMessage name="country" v-slot="{ message }">
                  <transition name="fade-error"><p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p></transition>
                </ErrorMessage>
              </div>
            </div>

            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Telephone</label>
              <Field name="phone_number" :rules="phoneRule" v-slot="{ field }">
                <input v-bind="field" type="tel" class="input w-full" maxlength="20" />
              </Field>
              <div class="mt-1 h-4 overflow-hidden">
                <ErrorMessage name="phone_number" v-slot="{ message }">
                  <transition name="fade-error"><p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p></transition>
                </ErrorMessage>
              </div>
            </div>
          </div>
        </div>

        <!-- DELIVERY -->
        <div class="space-y-6">
          <h3 class="text-sm uppercase tracking-widest">Delivery</h3>

          <div>
            <label class="block text-xs uppercase tracking-widest mb-2">Delivery Address</label>
            <Field name="delivery_address" :rules="req('Delivery address', 120)" v-slot="{ field }">
              <input v-bind="field" type="text" class="input w-full" maxlength="120" placeholder="Street, number" />
            </Field>
            <div class="mt-1 h-4 overflow-hidden">
              <ErrorMessage name="delivery_address" v-slot="{ message }">
                <transition name="fade-error"><p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p></transition>
              </ErrorMessage>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Delivery Post code</label>
              <Field name="delivery_postal_code" :rules="postalRule('Delivery post code')" v-slot="{ field }">
                <input v-bind="field" class="input w-full" inputmode="numeric" maxlength="10" />
              </Field>
              <div class="mt-1 h-4 overflow-hidden">
                <ErrorMessage name="delivery_postal_code" v-slot="{ message }">
                  <transition name="fade-error"><p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p></transition>
                </ErrorMessage>
              </div>
            </div>

            <div>
              <label class="block text-xs uppercase tracking-widest mb-2">Delivery City</label>
              <Field name="delivery_city" :rules="req('Delivery city', 60)" v-slot="{ field }">
                <input v-bind="field" type="text" class="input w-full" maxlength="60" />
              </Field>
              <div class="mt-1 h-4 overflow-hidden">
                <ErrorMessage name="delivery_city" v-slot="{ message }">
                  <transition name="fade-error"><p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p></transition>
                </ErrorMessage>
              </div>
            </div>
          </div>
        </div>

        <!-- PAYMENT -->
        <div class="space-y-6">
          <h3 class="text-sm uppercase tracking-widest">Payment</h3>
          <div class="flex gap-2">
            <button
              type="button"
              class="px-3 py-2 border text-xs"
              :class="values.payment_method === 'card' ? 'border-text_color font-medium' : 'border-text_color/30'"
              @click="setFieldValue('payment_method', 'card')"
            >Card</button>
            <button
              type="button"
              class="px-3 py-2 border text-xs"
              :class="values.payment_method === 'paypal' ? 'border-text_color font-medium' : 'border-text_color/30'"
              @click="setFieldValue('payment_method', 'paypal')"
            >PayPal</button>
            <button
              type="button"
              class="px-3 py-2 border text-xs"
              :class="values.payment_method === 'cod' ? 'border-text_color font-medium' : 'border-text_color/30'"
              @click="setFieldValue('payment_method', 'cod')"
            >Cash</button>
          </div>
          <div class="mt-1 h-4 overflow-hidden">
            <ErrorMessage name="payment_method" v-slot="{ message }">
              <transition name="fade-error"><p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p></transition>
            </ErrorMessage>
          </div>

          <label class="flex items-center gap-3 text-sm">
            <Field name="newsletter" type="checkbox" :value="true" :unchecked-value="false" />
            I want to receive personalised commercial communications by email.
          </label>

          <label class="flex items-center gap-3 text-sm">
            <Field
              name="privacyAccepted"
              type="checkbox"
              :value="true"
              :unchecked-value="false"
              :rules="(v:boolean)=> v ? true : 'You must accept the Privacy Policy'"
            />
            <a href="#" class="underline">I have read and understand the Privacy and Cookies Policy.</a>
          </label>
          <div class="mt-1 h-4 overflow-hidden">
            <ErrorMessage name="privacyAccepted" v-slot="{ message }">
              <transition name="fade-error"><p v-if="message" class="text-xs text-error_text_color leading-4">{{ message }}</p></transition>
            </ErrorMessage>
          </div>
        </div>

        <!-- CTA -->
        <div class="pt-4">
          <button
            class="w-full text-center py-3 primary-btn cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="ctaDisabled || submitting"
            type="submit"
          >
            <span>{{ submitting ? 'Placing Order…' : 'Place Order' }}</span>
          </button>
          <p v-if="errorMsg" class="mt-3 text-sm text-error_text_color">{{ errorMsg }}</p>
        </div>
      </VForm>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Form as VForm, Field, ErrorMessage, useForm } from 'vee-validate'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
const config = useRuntimeConfig()

/* ---------------------------
   Money + cart
--------------------------- */
const FREE_THRESHOLD = 200
const FLAT_SHIPPING = 12.99
const toNum = (x: unknown) => Number.parseFloat(String(x ?? '0').replace(',', '.')) || 0
const money = (n: number) => (Number.isInteger(n) ? n : n.toFixed(2))

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
const cart = ref<{ items: CartItem[], cart_total_to_pay: string }>({ items: [], cart_total_to_pay: '0.00' })
const loadingCart = ref(false)
const lineTotal = (it: CartItem) => (toNum(it.unit_price_discounted ?? it.unit_price_original) * (it.quantity ?? 0))
const subtotal = computed(() => cart.value.items.reduce((s, it) => s + lineTotal(it), 0))
const shippingFee = computed(() => (subtotal.value >= FREE_THRESHOLD ? 0 : FLAT_SHIPPING))
const total = computed(() => subtotal.value + shippingFee.value)

async function fetchCart () {
  try {
    loadingCart.value = true
    const res: any = await $fetch('/api/private/get/cart')
    res.items = (res.items ?? []).map((i: any) => ({ ...i, size: i.size ?? i.product_size }))
    cart.value = res
  } finally {
    loadingCart.value = false
  }
}
onMounted(fetchCart)

/* Remove item */
const removingSlug = ref<string | null>(null)
const itemSlug = (it: any) => it.product_variant_slug ?? it.product_slug
async function removeItem(it: any) {
  const slug = itemSlug(it)
  if (!slug || removingSlug.value) return
  removingSlug.value = slug
  try {
    await $fetch('/api/private/delete/cart', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: { product_variant_slug: slug }
    })
    await fetchCart()
    if (process.client) window.dispatchEvent(new CustomEvent('cart:updated', { detail: { source: 'checkout', removed: slug } }))
  } catch (e) {
    console.error('Remove item failed', e)
  } finally {
    removingSlug.value = null
  }
}

/* ---------------------------
   Vee-validate rules
--------------------------- */
const req = (label: string, max?: number) => (v: string) => {
  if (!v || !String(v).trim()) return `${label} is required`
  if (max && String(v).length > max) return `${label} must be < ${max + 1} chars`
  return true
}
const emailRule = (v: string) => {
  if (!v || !v.trim()) return 'Email is required'
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  if (!re.test(v)) return 'Please enter a valid email address'
  return true
}
const phoneRule = (v: string) => {
  if (!v || !v.trim()) return 'Phone number is required'
  const re = /^[+()\-.\s\d]{7,20}$/
  if (!re.test(v)) return 'Please enter a valid phone number (+, digits, spaces, (), -)'
  return true
}
const postalRule = (label = 'Postal code') => (v: string) => {
  if (!v || !v.trim()) return `${label} is required`
  const re = /^[A-Za-z0-9\s\-]{3,10}$/
  if (!re.test(v)) return `${label} looks invalid`
  return true
}

/* ---------------------------
   Form validity → enable CTA
--------------------------- */

const { validateField, setFieldValue, values } = useForm()

const ALL_FIELDS = [
  // Billing
  'email','firstName','lastName','address','postal_code','city','country','phone_number',
  // Delivery
  'delivery_address','delivery_postal_code','delivery_city',
  // Payment
  'payment_method','privacyAccepted'
]

const ctaDisabled = ref(true)
watchEffect(async () => {
  const res = await Promise.all(ALL_FIELDS.map(n => validateField(n, { mode: 'silent' })))
  ctaDisabled.value = !res.every(r => r.valid)
})

/* ---------------------------
   Submit order
--------------------------- */
const submitting = ref(false)
const errorMsg = ref<string>('')

async function submitOrder () {
  errorMsg.value = ''
  // Final check
  const res = await Promise.all(ALL_FIELDS.map(n => validateField(n)))
  if (!res.every(r => r.valid)) {
    errorMsg.value = 'Please complete all required fields.'
    return
  }
  if (cart.value.items.length === 0) {
    errorMsg.value = 'Your cart is empty.'
    return
  }

  try {
    submitting.value = true
    const payload = {
      // Billing
      email: values.email,
      country: values.country,
      address: values.address,
      city: values.city,
      postal_code: values.postal_code,
      phone_number: values.phone_number,
      // Delivery
      delivery_address: values.delivery_address,
      delivery_city: values.delivery_city,
      delivery_postal_code: values.delivery_postal_code,
      // Payment
      payment_method: values.payment_method,
      // Shipping derived
      shipping_cost: shippingFee.value
    }
    const resOrder: any = await $fetch(`${config.public.apiBase}/public/orders/create/`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    })
    navigateTo({ path: '/thank-you', query: { ref: resOrder.order_reference, total: resOrder.total_price } })
  } catch (e: any) {
    errorMsg.value = e?.data?.detail || 'Could not create order.'
    console.error('Order create failed', e)
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.image { background-image: url("public/logo/black_logo1.png"); }
</style>
