<!-- pages/payment/paypal/cancel.vue -->
<script setup lang="ts">
const route = useRoute()
const orderRef = computed(() => route.query.order_ref as string)
</script>

<template>
  <section class="min-h-screen bg-background_color flex items-center justify-center">
    <AppNavigation :dark="false" />

    <div class="max-w-md mx-auto px-4 text-center space-y-6">
      <div class="w-16 h-16 bg-project_gray/20 rounded-full flex items-center justify-center mx-auto">
        <svg class="w-8 h-8 text-project_gray" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
      </div>

      <h2 class="text-xl uppercase tracking-widest text-text_color">Payment Cancelled</h2>
      
      <p class="text-sm text-text_color/70">
        Your PayPal payment was cancelled. 
        <span v-if="orderRef">Your order ({{ orderRef }}) is still available if you'd like to complete it.</span>
      </p>

      <div class="flex flex-col gap-3 pt-4">
        <NuxtLink to="/checkout" class="btn btn--primary">
          <span class="btn__text">Return to Checkout</span>
          <span class="btn__fill"></span>
        </NuxtLink>

        <NuxtLink to="/" class="text-sm underline text-text_color/70 hover:text-text_color">
          Continue Shopping
        </NuxtLink>
      </div>
    </div>
  </section>
</template>