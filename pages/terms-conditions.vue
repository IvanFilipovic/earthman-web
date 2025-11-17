<!-- pages/terms-conditions.vue -->
<script setup lang="ts">
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

useSeoMeta({
  title: 'Terms & Conditions - Earthman',
  description: 'Read the terms and conditions for shopping at Earthman.',
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
        <span class="pr-2" aria-current="page">TERMS & CONDITIONS</span>
      </nav>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <!-- Header -->
      <div 
        class="text-center mb-16 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0s"
      >
        <h1 class="text-3xl md:text-5xl uppercase tracking-widest mb-4">
          Terms & Conditions
        </h1>
        <p class="text-text_color/70 text-sm">
          Last updated: November 16, 2025
        </p>
      </div>

      <!-- Introduction -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.1s"
      >
        <div class="prose prose-lg max-w-none text-text_color/90 leading-relaxed">
          <p class="text-lg mb-6">
            Welcome to Earthman. These Terms and Conditions ("Terms") govern your use of our website and 
            the purchase of products from our online store. By accessing or using our website, you agree 
            to be bound by these Terms. Please read them carefully.
          </p>
          <p>
            If you do not agree to these Terms, please do not use our website or purchase our products.
          </p>
        </div>
      </div>

      <!-- General Terms -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.15s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            1. General Terms
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            By placing an order through our website, you warrant that:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>You are legally capable of entering into binding contracts</li>
            <li>You are at least 18 years old</li>
            <li>All information you provide is accurate, current, and complete</li>
            <li>You will maintain the accuracy of such information</li>
          </ul>
        </div>
      </div>

      <!-- Products and Pricing -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.2s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            2. Products and Pricing
          </h2>
        </div>
        <div class="space-y-6 text-text_color/90 leading-relaxed">
          <div>
            <h3 class="text-xl font-medium mb-3">2.1 Product Descriptions</h3>
            <p>
              We strive to ensure that product descriptions, images, and other content on our website are 
              accurate. However, we do not warrant that product descriptions or other content is accurate, 
              complete, reliable, current, or error-free. Colors may vary slightly due to monitor settings.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-3">2.2 Pricing</h3>
            <p>
              All prices are listed in Euros (€) and include VAT where applicable. Prices are subject to 
              change without notice. The price charged for a product will be the price in effect at the 
              time the order is placed, subject to the terms of any applicable promotions.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-3">2.3 Availability</h3>
            <p>
              All orders are subject to product availability. We reserve the right to discontinue any 
              product at any time. If a product becomes unavailable after you place an order, we will 
              notify you and provide a full refund.
            </p>
          </div>
        </div>
      </div>

      <!-- Orders and Payment -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.25s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            3. Orders and Payment
          </h2>
        </div>
        <div class="space-y-6 text-text_color/90 leading-relaxed">
          <div>
            <h3 class="text-xl font-medium mb-3">3.1 Order Acceptance</h3>
            <p>
              Your receipt of an electronic or other form of order confirmation does not signify our 
              acceptance of your order, nor does it constitute confirmation of our offer to sell. We 
              reserve the right to refuse or cancel any order for any reason at any time.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-3">3.2 Payment Methods</h3>
            <p>
              We accept payment via credit card (Visa, Mastercard, American Express) and PayPal. Payment 
              is due at the time of order. All transactions are processed securely through our payment 
              service providers.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-3">3.3 Order Modifications</h3>
            <p>
              Orders can be modified or cancelled within 1 hour of placement by contacting our customer 
              service team. Once an order has been processed for shipment, it cannot be modified or cancelled.
            </p>
          </div>
        </div>
      </div>

      <!-- Shipping and Delivery -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.3s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            4. Shipping and Delivery
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            Shipping costs and delivery times vary based on your location and the shipping method selected. 
            Please refer to our <NuxtLink to="/delivery-returns" class="underline hover:no-underline">Delivery & Returns</NuxtLink> 
            page for detailed information.
          </p>
          <p>
            Title and risk of loss for all products pass to you upon delivery to the shipping carrier. 
            We are not responsible for delays caused by the shipping carrier or force majeure events.
          </p>
        </div>
      </div>

      <!-- Returns and Refunds -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.35s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            5. Returns and Refunds
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            We offer a 30-day return policy for most items. Products must be unworn, unwashed, and in 
            their original condition with all tags attached. Please see our 
            <NuxtLink to="/delivery-returns" class="underline hover:no-underline">Delivery & Returns</NuxtLink> 
            page for complete details on our return policy and process.
          </p>
          <p>
            Refunds will be processed to the original payment method within 5-10 business days after we 
            receive and inspect the returned item.
          </p>
        </div>
      </div>

      <!-- Intellectual Property -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.4s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            6. Intellectual Property
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, and 
            software, is the property of Earthman or its content suppliers and is protected by international 
            copyright laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works of, publicly display, or 
            exploit any of the content, in whole or in part, without our express written permission.
          </p>
        </div>
      </div>

      <!-- User Conduct -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.45s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            7. User Conduct
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            You agree not to use our website for any unlawful purpose or in any way that could damage, 
            disable, overburden, or impair our servers or networks. Prohibited activities include:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Using automated systems to access the website</li>
            <li>Attempting to interfere with the proper functioning of the website</li>
            <li>Uploading viruses or malicious code</li>
            <li>Impersonating another person or entity</li>
            <li>Collecting or storing personal data about other users</li>
          </ul>
        </div>
      </div>

      <!-- Limitation of Liability -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.5s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            8. Limitation of Liability
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            To the maximum extent permitted by law, Earthman shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages, or any loss of profits or revenues, 
            whether incurred directly or indirectly, or any loss of data, use, goodwill, or other 
            intangible losses.
          </p>
          <p>
            Our total liability to you for all claims arising out of or related to these Terms or your use 
            of our website shall not exceed the amount you paid for products purchased through our website.
          </p>
        </div>
      </div>

      <!-- Governing Law -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.55s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            9. Governing Law
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of Croatia, without 
            regard to its conflict of law provisions. Any disputes arising from these Terms or your use of 
            our website shall be subject to the exclusive jurisdiction of the courts of Zagreb, Croatia.
          </p>
        </div>
      </div>

      <!-- Changes to Terms -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.6s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            10. Changes to Terms
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective immediately 
            upon posting to the website. Your continued use of the website following the posting of changes 
            constitutes your acceptance of such changes.
          </p>
          <p>
            We recommend that you review these Terms periodically for any updates.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-fade-in-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.border-b-3 {
  border-bottom-width: 3px;
}
</style>