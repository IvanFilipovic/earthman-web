<!-- pages/payment/card.vue -->
<script setup lang="ts">
const route = useRoute()

const paymentId = computed(() => route.query.payment_id as string)
const orderReference = computed(() => route.query.ref as string)

const isProcessing = ref(false)
const errorMessage = ref('')
const isLoading = ref(true)

let stripe: any = null
let elements: any = null
let clientSecret = ''
let amount = 0
let currency = 'EUR'

/**
 * Initialize Stripe Elements with client secret from encrypted token
 */
async function initializeStripe() {
  if (!paymentId.value || !orderReference.value) {
    errorMessage.value = 'Invalid payment session'
    isLoading.value = false
    return
  }
  
  if (typeof window === 'undefined') return

  try {
    // Fetch client secret securely from server (decrypts token)
    const { getCsrfHeaders } = useCsrf()
    const paymentData = await $fetch<{
      client_secret: string
      amount: number
      currency: string
    }>('/api/payment/get-client-secret', {
      method: 'POST',
      headers: getCsrfHeaders(),
      body: {
        payment_id: paymentId.value
      }
    })
    
    clientSecret = paymentData.client_secret
    amount = paymentData.amount
    currency = paymentData.currency

    // Load Stripe.js
    const { loadStripe } = await import('@stripe/stripe-js')
    const config = useRuntimeConfig()
    
    stripe = await loadStripe(config.public.stripePublishableKey)
    
    if (!stripe) {
      throw new Error('Failed to load Stripe')
    }

    // Create Stripe Elements with custom appearance
    const appearance = {
      theme: 'stripe' as const,
      variables: {
        colorPrimary: '#0040ff',
        colorBackground: '#e2e2e2',
        colorText: '#252525',
        colorDanger: '#C90D00',
        fontFamily: 'system-ui, sans-serif',
        borderRadius: '4px',
      },
      rules: {
        '.Input': {
          border: '1px solid rgba(37, 37, 37, 0.3)',
          padding: '12px',
          marginBottom: '8px',
        },
        '.Label': {
          fontSize: '12px',
          fontWeight: '500',
          textTransform: 'uppercase',
        }
      },
    }

    elements = stripe.elements({
      clientSecret,
      appearance,
    })

    const paymentElement = elements.create('payment', {
      layout: 'tabs',
    })

    paymentElement.mount('#payment-element')
    isLoading.value = false

  } catch (error: any) {
    console.error('Error initializing payment:', error)
    errorMessage.value = error?.data?.message || 'Failed to load payment form'
    isLoading.value = false
  }
}

/**
 * Handle payment submission with server-side verification
 */
async function handleSubmit(e: Event) {
  e.preventDefault()
  
  if (!stripe || !elements) {
    errorMessage.value = 'Payment system not ready'
    return
  }

  isProcessing.value = true
  errorMessage.value = ''

  try {
    // Confirm payment with Stripe
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
      confirmParams: {
        return_url: `${window.location.origin}/payment/card/processing`,
      },
    })

    if (error) {
      errorMessage.value = error.message || 'Payment failed'
      isProcessing.value = false
      return
    }

    // Verify payment server-side before redirecting
    if (paymentIntent && paymentIntent.status === 'succeeded') {
      const { getCsrfHeaders } = useCsrf()
      const verification = await $fetch<{
        success: boolean
        order_reference: string
        total_price: string
      }>('/api/payment/verify', {
        method: 'POST',
        headers: getCsrfHeaders(),
        body: {
          payment_intent_id: paymentIntent.id,
          order_reference: orderReference.value,
          payment_id: paymentId.value
        }
      })

      if (verification.success) {
        await navigateTo({
          path: '/thank-you',
          query: {
            ref: verification.order_reference,
            total: verification.total_price,
            payment_intent: 'completed'
          }
        })
      } else {
        errorMessage.value = 'Payment verification failed. Please contact support.'
      }
    } else {
      errorMessage.value = 'Payment was not completed successfully'
    }
    
  } catch (err: any) {
    errorMessage.value = err?.data?.message || 'Payment failed. Please try again.'
    console.error('Payment error:', err)
  } finally {
    isProcessing.value = false
  }
}

onMounted(() => {
  if (import.meta.client) {
    initializeStripe()
  }
})
</script>

<template>
  <section class="min-h-screen bg-background_color">
    <AppNavigation :dark="false" />

    <div class="max-w-2xl mx-auto px-4 py-12">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-2xl uppercase tracking-widest mb-2 text-text_color">Complete Payment</h1>
        <p class="text-sm text-text_color/70">Order: {{ orderReference }}</p>
      </div>

      <!-- Payment Form -->
      <form id="payment-form" @submit="handleSubmit" class="border border-text_color/30 p-6 md:p-8 mb-6">
        <!-- Total Amount -->
        <div class="flex justify-between items-center mb-8 pb-6 border-b border-text_color/30">
          <span class="text-sm uppercase tracking-widest text-text_color font-medium">Total Amount</span>
          <span class="text-3xl font-semibold text-text_color">€{{ amount }}</span>
        </div>

        <!-- Loading Spinner -->
        <div v-if="isLoading" class="flex flex-col items-center justify-center py-20">
          <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-primary_button_color mb-4"></div>
          <p class="text-sm text-text_color">Loading payment form...</p>
        </div>

        <div v-show="!isLoading" id="payment-element" class="mb-6"></div>

        <button
          v-show="!isLoading"
          id="submit"
          type="submit"
          :disabled="isProcessing"
          class="w-full btn"
          :class="isProcessing ? 'btn--disabled' : 'btn--primary'"
        >
          <div v-if="isProcessing" class="flex items-center justify-center gap-2">
            <div class="spinner w-5 h-5 border-2 border-background_color border-t-transparent rounded-full animate-spin"></div>
            <span class="btn__text">Processing...</span>
          </div>
          <span v-else class="btn__text">Pay €{{ amount }}</span>
          <span class="btn__fill"></span>
        </button>

        <div v-if="errorMessage" id="payment-message" class="mt-4 p-4 bg-error_text_color/10 border border-error_text_color rounded">
          <div class="flex items-start gap-2">
            <svg class="w-5 h-5 text-error_text_color flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            <p class="text-sm text-error_text_color">{{ errorMessage }}</p>
          </div>
        </div>
      </form>

      <div class="text-center space-y-2">
        <div class="flex items-center justify-center gap-2 text-success_text_color">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
          <p class="text-sm text-text_color font-medium">Secure payment powered by Stripe</p>
        </div>
        <p class="text-xs text-text_color">All transactions are encrypted and secure</p>
      </div>
    </div>
  </section>
</template>