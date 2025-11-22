<script setup lang="ts">
const route = useRoute()

const orderReference = computed(() => route.query.ref as string)
const totalAmount = computed(() => route.query.total as string)
const paymentStatus = computed(() => route.query.payment_intent ? 'completed' : 'pending')
</script>

<template>
  <section class="min-h-screen flex items-center justify-center bg-background_color">
    <div class="px-4 md:w-[50%] text-center">
      <div class="mb-8">
        <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-success_text_color/10 flex items-center justify-center">
          <Icon name="lucide:check" class="w-10 h-10 text-success_text_color" />
        </div>

        <h1 class="text-3xl uppercase tracking-widest mb-4">
          {{ paymentStatus === 'completed' ? 'Payment Successful!' : 'Order Received!' }}
        </h1>

        <p class="text-text_color/70">
          {{ paymentStatus === 'completed' 
            ? 'Thank you for your purchase. Your order has been confirmed.' 
            : 'We have received your order and will process it shortly.' 
          }}
        </p>
      </div>

      <div class="border border-text_color/30 p-8 mb-8">
        <div class="space-y-4">
          <div>
            <p class="text-xs uppercase tracking-widest text-text_color mb-1">Order Reference</p>
            <p class="text-xl font-medium">{{ orderReference }}</p>
          </div>

          <div class="border-t border-text_color/10 pt-4">
            <p class="text-xs uppercase tracking-widest text-text_color mb-1">Total Amount</p>
            <p class="text-2xl font-medium">€{{ totalAmount }}</p>
          </div>

          <div class="border-t border-text_color/10 pt-4">
            <p class="text-xs uppercase tracking-widest text-text_color mb-1">Payment Status</p>
            <p class="text-sm font-medium uppercase" :class="paymentStatus === 'completed' ? 'text-success_text_color tracking-widest' : 'text-yellow-600'">
              {{ paymentStatus }}
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <p class="text-sm text-text_color/70">
          A confirmation email has been sent with your order details.
        </p>

        <NuxtLink
          to="/shop"
          class="btn btn--primary inline-flex"
        >
          <span class="btn__text">Continue shoping</span>
          <span class="btn__fill"></span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>