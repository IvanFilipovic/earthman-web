<!-- components/Newsletter.vue -->
<template>
  <section class="relative w-full h-[600px] sm:h-[500px] md:h-[400px] lg:h-[500px] overflow-hidden">
    <!-- Background Image -->
    <nuxt-img
      src="https://noushella.com/cdn/shop/files/1920x800_1.png?v=1726678484&width=1800"
      alt="Newsletter background"
      class="absolute inset-0 w-full h-full object-cover"
      format="webp"
      sizes="(max-width: 768px) 100vw, 50vw"
    />

    <!-- Overlay -->
    <div class="relative z-10 max-w-3xl mx-auto h-full flex flex-col justify-center px-6 text-white">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4">
        Sign up to keep up to date with <span class="font-bold">YOUR BRAND</span>!
      </h2>
      <p class="text-sm sm:text-base mb-8 max-w-md">
        Dive into your unique style, sans pretense and without conformity—be the first to experience our latest drops.
      </p>

      <form
        @submit.prevent="onSubmit"
        class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col sm:flex-row gap-4"
      >
        <label for="email" class="sr-only">Email Address</label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          placeholder="Email Address"
          class="flex-1 px-4 py-3 bg-white bg-opacity-20 placeholder-white placeholder-opacity-75 border border-white border-opacity-50 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white"
        />
        <button
          type="submit"
          class="px-6 py-3 bg-white text-gray-900 font-semibold rounded-md hover:opacity-90 transition-opacity"
        >
          Subscribe
        </button>
      </form>
    </div>

    <!-- Dark overlay for contrast -->
    <div class="absolute inset-0 bg-black bg-opacity-30"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')

function onSubmit() {
  // replace with your actual subscribe logic
  if (!email.value) return
  console.log('Subscribing:', email.value)
  // e.g. call an API, show a toast, then reset:
  alert(`Thanks! We’ll keep you posted at ${email.value}`)
  email.value = ''
}
</script>
