<template>
  <section class="relative w-full h-[800px] sm:h-[500px] md:h-[600px] overflow-hidden">
    <img
      v-bind="getNewsletterImageAttrs(newsletterBgUrl)"
      alt="Newsletter background"
      class="absolute inset-0 w-full h-full object-cover"
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
          class="flex-1 px-4 py-2 bg-text_color bg-opacity-85 placeholder-background_color border border-background_color border-opacity-50 focus:outline-none focus:ring-2 focus:ring-background_color focus:ring-opacity-50 text-background_color"
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

// Newsletter background image URL
// Replace with your image from static.earth-man.eu if available
const newsletterBgUrl = 'https://static.earth-man.eu/earthman_turtle_kid1.jpg'

// Responsive image helper for full-width newsletter background
const { getResponsiveImages } = useImageTransform()

/**
 * Get responsive image attributes for newsletter background
 * Full-width at all screen sizes (100vw)
 * Height varies by breakpoint but width determines image selection
 */
function getNewsletterImageAttrs(url: string) {
  if (!url) return {}

  const isMobile =
    typeof window !== 'undefined' &&
    window.innerWidth <= 768

  // What you want:
  const mainWidth = isMobile ? 900 : 1600

  return getResponsiveImages(
    url,
    [mainWidth],
    '50vw',
  )
}

function handleSubmit(): void {
  if (!email.value) return
  console.log('Subscribing:', email.value)
  alert(`Thanks! We'll keep you posted at ${email.value}`)
  email.value = ''
}
</script>