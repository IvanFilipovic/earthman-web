<template>
  <section class="relative w-full h-[600px] sm:h-[500px] md:h-[400px] lg:h-[500px] overflow-hidden">
    <nuxt-img
      src="https://noushella.com/cdn/shop/files/1920x800_1.png?v=1726678484&width=1800"
      alt="Newsletter background"
      class="absolute inset-0 w-full h-full object-cover"
      format="webp"
      sizes="(max-width: 768px) 100vw, 50vw"
    />

    <div class="absolute inset-0 bg-text_color/30"></div>

    <div class="relative z-10 max-w-3xl mx-auto h-full flex flex-col justify-center px-6 text-background_color">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4">
        Sign up to keep up to date with <span class="font-bold">YOUR BRAND</span>!
      </h2>
      <p class="text-sm sm:text-base mb-8 max-w-md">
        Dive into your unique style, sans pretense and without conformity—be the first to experience our latest drops.
      </p>

      <form
        @submit.prevent="handleSubmit"
        class="w-full flex flex-col sm:flex-row gap-4"
      >
        <label for="email" class="sr-only">Email Address</label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          placeholder="Email Address"
          class="flex-1 px-4 py-2 bg-background_color bg-opacity-20 placeholder-background_color placeholder-opacity-75 border border-background_color border-opacity-50 focus:outline-none focus:ring-2 focus:ring-background_color focus:ring-opacity-50 text-background_color"
        />
        
        <button
          type="submit"
          class="btn btn--secondary w-full sm:w-auto"
        >
          <span class="btn__text">Subscribe</span>
          <span class="btn__fill"></span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')

function handleSubmit(): void {
  if (!email.value) return
  
  console.log('Subscribing:', email.value)
  
  alert(`Thanks! We'll keep you posted at ${email.value}`)
  email.value = ''
}
</script>