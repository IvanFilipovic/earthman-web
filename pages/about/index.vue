<!-- pages/about.vue -->
<template>
  <section :class="wrapperClass" class="transition-colors duration-300 min-h-screen">
    <AppNavigation :dark="false" />

    <div class="min-h-screen">
      <div class="relative pt-8 px-4 md:px-8">
        <div class="relative w-full h-[70vh] border border-text_color/30 overflow-hidden">
          <img
            src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&w=801"
            alt="Material study"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-text_color/30"></div>
          <div class="absolute inset-0 flex items-end">
            <div class="p-8 md:p-12 text-background_color mx-auto">
              <h3 class="text-2xl md:text-4xl text-center mb-3 bg-text_color">Materials, Mastered</h3>
              <p class="max-w-lg text-sm md:text-base text-center bg-text_color py-1 px-1">
                From recycled cotton to traceable leathers—our platform partners with mills that
                publish their practices and certify their fibers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div ref="section1" class="min-h-screen pb-20">
      <div class="flex flex-col lg:flex-row gap-10 items-start px-4 md:px-8 pb-14 md:py-0">
        <div class="w-full lg:w-1/2 my-auto pb-10
        ">
          <img
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&w=801"
            alt="Studio story"
            class="w-full h-[70vh] object-cover border my-auto"
            :class="invert ? 'border border-background_color' : 'border border-text_color/30'"
            loading="lazy"
          />
        </div>
        <div class="w-full lg:w-1/2 flex flex-col my-auto pt-10">
          <h2 class="text-2xl md:text-3xl tracking-wide mb-4 mx-auto uppercase">Crafted with Intent</h2>
          <p class="text-sm leading-normal
           md:leading-loose text-center mx-auto px-4 py-2">
            We design for longevity: timeless silhouettes, resilient materials, and a supply chain
            we’re proud of. Every piece is cut in small batches and finished by hand.
            Our studio blends traditional techniques with forward-looking processes—prioritizing
            responsible sourcing and modular construction so garments can be repaired, re-worn,
            and re-loved.
            We design for longevity: timeless silhouettes, resilient materials, and a supply chain
            we’re proud of. Every piece is cut in small batches and finished by hand.
            Our studio blends traditional techniques with forward-looking processes—prioritizing
            responsible sourcing and modular construction so garments can be repaired, re-worn,
            and re-loved.
          </p>
        </div>
      </div>
    </div>
    <div class="min-h-screen">
      <div class="flex flex-col lg:flex-row-reverse gap-10 items-start px-4 md:px-8 min-h-screen">
        <div class="w-full lg:w-1/2 my-auto">
          <img
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&w=801"
            alt="Community story"
            class="w-full h-[70vh] object-cover border"
            :class="invert ? 'border border-background_color/30' : 'border border-text_color/30'"
            loading="lazy"
          />
        </div>
        <div class="w-full lg:w-1/2 flex flex-col my-auto ">
          <h2 class="text-2xl md:text-3xl tracking-wide mb-4 mx-auto uppercase">Crafted with Intent</h2>
          <p class="text-sm leading-normal md:leading-loose text-center mx-auto px-4 py-2">
            We design for longevity: timeless silhouettes, resilient materials, and a supply chain
            we’re proud of. Every piece is cut in small batches and finished by hand.
            Our studio blends traditional techniques with forward-looking processes—prioritizing
            responsible sourcing and modular construction so garments can be repaired, re-worn,
            and re-loved.
          </p>
        </div>
      </div>
    </div>
    <InstagramGrid :posts="posts" :initial="7" :step="6" />
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const invert = ref(false)
const section1 = ref<HTMLElement | null>(null)

const wrapperClass = computed(() =>
  invert.value ? 'bg-text_color text-background_color' : 'bg-background_color text-text_color'
)
const posts = [
  // 0 – big hero
  { image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', link: 'https://instagram.com/p/xyz' },
  // 1..n
  { image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', link: 'https://instagram.com/p/xyz2' },
  { image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee', link: 'https://instagram.com/p/xyz2' },
  { image: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba', link: 'https://instagram.com/p/xyz2' },
  { image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d', link: 'https://instagram.com/p/xyz2' },
  { image: 'https://images.unsplash.com/photo-1503602642458-232111445657', link: 'https://instagram.com/p/xyz2' },
  { image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d', link: 'https://instagram.com/p/xyz2' },
  // add more…
]
function computeInvert() {
  const el = section1.value
  if (!el) { invert.value = false; return }
  const r = el.getBoundingClientRect()
  const tol = 1
  const atTop = r.top <= tol
  const stillVisible = r.bottom > tol
  invert.value = atTop && stillVisible
}

let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    computeInvert()
    ticking = false
  })
}

onMounted(() => {
  computeInvert()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<style scoped>
.image { background-image: url("/logo/black_logo1.png"); }
</style>
