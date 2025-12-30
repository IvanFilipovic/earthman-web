<!-- pages/delivery-returns.vue -->
<script setup lang="ts">
const isVisible = ref(false)

// Trigger animation on mount
onMounted(() => {
  // Small delay to ensure DOM is ready
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

useSeoMeta({
  title: 'Delivery & Returns - Earthman',
  description: 'Learn about our delivery options, shipping costs, return policy, and how to return items at Earthman.',
})
</script>

<template>
  <section class="min-h-screen bg-background_color">
    <AppNavigation :dark="false" />

    <!-- Breadcrumb -->
    <div class="px-4 md:px-8 pt-4">
      <nav class="flex items-center py-1 text-xs md:text-sm text-text_color uppercase tracking-widest" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:underline pr-2">HOME</NuxtLink>
        <span class="pr-2" aria-hidden="true">/</span>
        <span class="pr-2" aria-current="page">DELIVERY & RETURNS</span>
      </nav>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <!-- Header -->
      <div 
        class="text-center mb-16 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0s"
      >
        <h1 class="text-3xl md:text-5xl uppercase tracking-widest mb-4">
          Delivery & Returns
        </h1>
        <p class="text-text_color/70 text-sm md:text-base max-w-2xl mx-auto">
          Everything you need to know about shipping, delivery times, and our hassle-free return policy.
        </p>
      </div>

      <!-- Delivery Section -->
      <div 
        class="mb-16 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.1s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-8">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest flex items-center gap-3">
            <Icon name="lucide:truck" class="w-6 h-6" />
            Delivery
          </h2>
        </div>

        <div class="space-y-8 text-text_color/90 leading-relaxed">
          <!-- Shipping Costs -->
          <div>
            <h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium">
              Shipping Costs
            </h3>
            <p class="mb-4">
              We want to make shopping with Earthman straightforward and affordable:
            </p>
            <ul class="space-y-2 pl-6">
              <li class="list-disc">
                <strong>Flat Rate Shipping</strong> of €10.00 for all orders
              </li>
            </ul>
            <p class="mt-4 text-sm text-text_color/70">
              Shipping costs are automatically added at checkout.
            </p>
          </div>

          <!-- Delivery Times -->
          <div>
            <h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium">
              Delivery Times
            </h3>
            <p class="mb-4">
              We process all orders within 1-2 business days. Once your order ships, you can expect delivery within:
            </p>
            <div class="bg-text_color/5 border border-text_color/20 p-6 space-y-3">
              <div class="flex justify-between items-center pb-2 border-b border-text_color/20">
                <span class="font-medium">Croatia</span>
                <span>3-5 business days</span>
              </div>
              <div class="flex justify-between items-center pb-2 border-b border-text_color/20">
                <span class="font-medium">Slovenia & Austria</span>
                <span>5-7 business days</span>
              </div>
              <div class="flex justify-between items-center pb-2 border-b border-text_color/20">
                <span class="font-medium">Germany & Italy</span>
                <span>5-7 business days</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-medium">Other EU Countries</span>
                <span>7-10 business days</span>
              </div>
            </div>
            <p class="mt-4 text-sm text-text_color/70">
              Please note: Delivery times are estimates and may vary during peak seasons or due to unforeseen circumstances.
            </p>
          </div>

          <!-- Order Tracking -->
          <div>
            <h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium">
              Order Tracking
            </h3>
            <p class="mb-4">
              Once your order has been dispatched, you will receive a confirmation email with a tracking number. 
              You can use this number to track your package in real-time through our courier's website.
            </p>
            <p>
              If you haven't received your tracking information within 48 hours of placing your order, 
              please check your spam folder or <NuxtLink to="/contact" class="underline hover:no-underline">contact us</NuxtLink>.
            </p>
          </div>

          <!-- Shipping Locations -->
          <div>
            <h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium">
              Where We Ship
            </h3>
            <p class="mb-4">
              Currently, we ship to the following countries:
            </p>
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-2 bg-text_color/5 border border-text_color/20 text-sm">Croatia</span>
              <span class="px-4 py-2 bg-text_color/5 border border-text_color/20 text-sm">Slovenia</span>
              <span class="px-4 py-2 bg-text_color/5 border border-text_color/20 text-sm">Austria</span>
              <span class="px-4 py-2 bg-text_color/5 border border-text_color/20 text-sm">Germany</span>
              <span class="px-4 py-2 bg-text_color/5 border border-text_color/20 text-sm">Italy</span>
            </div>
            <p class="mt-4 text-sm text-text_color/70">
              We are working on expanding our shipping coverage to more countries. 
              If your country is not listed, please <NuxtLink to="/contact" class="underline hover:no-underline">contact us</NuxtLink> 
              for more information.
            </p>
          </div>
        </div>
      </div>

      <!-- Returns Section -->
      <div 
        class="mb-16 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.2s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-8">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest flex items-center gap-3">
            <Icon name="lucide:rotate-ccw" class="w-6 h-6" />
            Returns
          </h2>
        </div>

        <div class="space-y-8 text-text_color/90 leading-relaxed">
          <!-- Return Policy -->
          <div>
            <h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium">
              30-Day Return Policy
            </h3>
            <p class="mb-4">
              We want you to be completely satisfied with your purchase. If for any reason you're not happy 
              with your order, you can return it within 30 days of delivery for a full refund.
            </p>
            <div class="bg-green-50 border border-green-200 p-6 my-6">
              <div class="flex items-start gap-3">
                <Icon name="lucide:check-circle" class="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <p class="font-medium text-green-900 mb-2">Items must be:</p>
                  <ul class="space-y-1 text-green-800 text-sm">
                    <li>• Unworn and unwashed</li>
                    <li>• In original condition with all tags attached</li>
                    <li>• In original packaging (if applicable)</li>
                    <li>• Accompanied by proof of purchase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- What Cannot Be Returned -->
          <div>
            <h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium">
              Non-Returnable Items
            </h3>
            <div class="bg-red-50 border border-red-200 p-6">
              <div class="flex items-start gap-3">
                <Icon name="lucide:x-circle" class="w-6 h-6 text-red-600 shrink-0 mt-1" />
                <div>
                  <p class="text-red-900 mb-3">
                    For hygiene and safety reasons, the following items cannot be returned:
                  </p>
                  <ul class="space-y-1 text-red-800 text-sm">
                    <li>• Items marked as "Final Sale"</li>
                    <li>• Discounted items (over 30% off)</li>
                    <li>• Items that show signs of wear or damage</li>
                    <li>• Items without original tags</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- How to Return -->
          <div>
            <h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium">
              How to Return an Item
            </h3>
            <div class="space-y-4">
              <div class="flex gap-4">
                <div class="w-10 h-10 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0">
                  1
                </div>
                <div>
                  <h4 class="font-medium mb-2">Contact Us</h4>
                  <p class="text-sm">
                    Email us at <a href="mailto:info@earthman.com" class="underline">info@earthman.com</a> or 
                    use our <NuxtLink to="/contact" class="underline hover:no-underline">contact form</NuxtLink>. 
                    Include your order number and the item(s) you wish to return.
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="w-10 h-10 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0">
                  2
                </div>
                <div>
                  <h4 class="font-medium mb-2">Receive Authorization</h4>
                  <p class="text-sm">
                    We'll send you a return authorization number and detailed instructions within 24 hours.
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="w-10 h-10 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0">
                  3
                </div>
                <div>
                  <h4 class="font-medium mb-2">Pack Your Items</h4>
                  <p class="text-sm">
                    Carefully pack the item(s) in the original packaging (if possible). Include your order number 
                    and return authorization number inside the package.
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="w-10 h-10 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0">
                  4
                </div>
                <div>
                  <h4 class="font-medium mb-2">Ship Your Return</h4>
                  <p class="text-sm">
                    Send the package to the address provided in our return instructions. We recommend using 
                    a trackable shipping method and keeping your receipt.
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="w-10 h-10 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0">
                  5
                </div>
                <div>
                  <h4 class="font-medium mb-2">Receive Your Refund</h4>
                  <p class="text-sm">
                    Once we receive and inspect your return (5-7 business days), we'll process your refund 
                    to your original payment method. Please allow 5-10 additional business days for the 
                    refund to appear in your account.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Return Shipping Costs -->
          <div>
            <h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium">
              Return Shipping Costs
            </h3>
            <p class="mb-4">
              Return shipping costs are the responsibility of the customer, unless:
            </p>
            <ul class="space-y-2 pl-6">
              <li class="list-disc">The item received was defective or damaged</li>
              <li class="list-disc">We sent you the wrong item</li>
              <li class="list-disc">There was an error with your order</li>
            </ul>
            <p class="mt-4">
              In these cases, we will provide you with a prepaid return label and refund the full cost of return shipping.
            </p>
          </div>

          <!-- Exchanges -->
          <div>
            <h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium">
              Exchanges
            </h3>
            <p class="mb-4">
              We currently do not offer direct exchanges. If you need a different size or color:
            </p>
            <ol class="space-y-2 pl-6 list-decimal">
              <li>Return the original item following our return process</li>
              <li>Place a new order for the item you want</li>
            </ol>
            <p class="mt-4 text-sm text-text_color/70">
              This ensures you receive your preferred item as quickly as possible, without waiting for the 
              return to be processed first.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact CTA -->
      <div 
        class="text-center border border-text_color/20 p-8 md:p-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.3s"
      >
        <Icon name="lucide:help-circle" class="w-12 h-12 mx-auto mb-4" />
        <h2 class="text-2xl uppercase tracking-widest mb-4">
          Questions?
        </h2>
        <p class="text-text_color/80 mb-6 max-w-xl mx-auto">
          If you have any questions about delivery or returns, or need help with an order, 
          our customer service team is here to assist you.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn btn--primary">
            <span class="btn__text">Contact Us</span>
            <span class="btn__fill"></span>
          </NuxtLink>
          <NuxtLink to="/faq" class="btn btn--secondary">
            <span class="btn__text">View FAQ</span>
            <span class="btn__fill"></span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Fade in from bottom animation */
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-fade-in-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Border utility */
.border-b-3 {
  border-bottom-width: 3px;
}
</style>