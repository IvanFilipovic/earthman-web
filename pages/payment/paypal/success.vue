<!-- pages/payment/paypal/success.vue -->
<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const paymentId = computed(() => route.query.paymentId as string)
const payerId = computed(() => route.query.PayerID as string)
const orderRef = computed(() => route.query.order_ref as string)

const processing = ref(true)
const error = ref('')

async function executePayment() {
  if (!paymentId.value || !payerId.value || !orderRef.value) {
    error.value = 'Missing payment parameters'
    processing.value = false
    return
  }

  try {
    console.log('Executing PayPal payment:', {
      paymentId: paymentId.value,
      payerId: payerId.value,
      orderRef: orderRef.value
    })

    const response = await $fetch<{
      success: boolean
      order_reference: string
      total_price: string
    }>(
      `${config.public.apiBase}/api/paypal/execute/`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          payment_id: paymentId.value,
          payer_id: payerId.value,
          order_reference: orderRef.value
        }
      }
    )


    if (response.success) {
      // Redirect to thank you page
      await navigateTo({
        path: '/thank-you',
        query: {
          ref: response.order_reference,
          total: response.total_price,
          payment_intent: response.success ? 'completed' : ''
        }
      })
    } else {
      error.value = 'Payment execution failed'
      processing.value = false
    }
  } catch (err: any) {
    console.error('PayPal execution error:', err)
    error.value = err?.data?.detail || 'Payment failed'
    processing.value = false
  }
}

onMounted(() => {
  executePayment()
})
</script>

<template>
  <section class="min-h-screen bg-background_color flex items-center justify-center">

    <div class="max-w-md mx-auto px-4 text-center">
      <!-- Processing State -->
      <div v-if="processing" class="space-y-4">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-primary_button_color mx-auto"></div>
        <h2 class="text-xl uppercase tracking-widest text-text_color">Processing Payment...</h2>
        <p class="text-sm text-text_color/70">Please wait while we confirm your PayPal payment</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="space-y-4">
        <div class="w-16 h-16 bg-error_text_color/10 rounded-full flex items-center justify-center mx-auto">
          <svg class="w-8 h-8 text-error_text_color" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </div>
        <h2 class="text-xl uppercase tracking-widest text-error_text_color">Payment Failed</h2>
        <p class="text-sm text-text_color/70">{{ error }}</p>
        
        <div class="flex flex-col gap-3 mt-6">
          <NuxtLink to="/checkout" class="btn btn--primary">
            <span class="btn__text">Try Again</span>
            <span class="btn__fill"></span>
          </NuxtLink>
          
          <NuxtLink to="/" class="text-sm underline text-text_color/70 hover:text-text_color">
            Return Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>