<!-- pages/about.vue -->
<template>
  <section :class="wrapperClass" class="transition-colors duration-300 min-h-screen">
    <!-- Top bar -->
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-6 gap-6 border-b border-text_color/30">
      <div class="w-full md:w-1/2">
        <div class="image bg-cover bg-center bg-transparent h-40 flex justify-center max-w-[100%]"></div>
      </div>

      <div class="w-full md:w-1/2 flex flex-col">
        <!-- Nav adapts to inversion -->
        <AppNavigation :dark="invert" />
        <div class="flex gap-3 justify-end w-full">
          <div class="flex items-center gap-3">
            <nav class="text-sm uppercase tracking-widest space-x-2 px-4"
                 :class="invert ? 'text-background_color' : 'text-background_color'">
              <p>=</p>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="min-h-screen">
      <div class="relative pt-8 md:px-8">
        <div class="relative w-full h-[70vh] rounded overflow-hidden">
          <img
            src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&w=801"
            alt="Material study"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-text_color/30"></div>
          <div class="absolute inset-0 flex items-end">
            <div class="p-8 md:p-12 text-background_color mx-auto">
              <h3 class="text-3xl md:text-4xl text-center mb-3">Materials, Mastered</h3>
              <p class="max-w-xl text-sm md:text-base text-center">
                From recycled cotton to traceable leathers—our platform partners with mills that
                publish their practices and certify their fibers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============ SECTION 1 (triggers inversion while its top is at viewport top) ============ -->
    <div ref="section1" class="min-h-screen">
      <div class="flex flex-col lg:flex-row gap-10 items-start mt-16 md:px-8">
        <!-- Image -->
        <div class="w-full lg:w-1/2 my-auto">
          <img
            src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&w=801"
            alt="Studio story"
            class="w-full h-[70vh] object-cover border my-auto"
            :class="invert ? 'border-background_color/30' : 'border-text_color/20'"
            loading="lazy"
          />
        </div>

        <!-- Text -->
        <div class="w-full lg:w-1/2 flex flex-col my-auto ">
          <h2 class="text-2xl md:text-3xl tracking-wide mb-4 mx-auto uppercase">Crafted with Intent</h2>
          <p class="text-sm leading-relaxed  mx-auto">
            We design for longevity: timeless silhouettes, resilient materials, and a supply chain
            we’re proud of. Every piece is cut in small batches and finished by hand.
          </p>
          <p class="text-sm leading-relaxed  mt-4 mx-auto">
            Our studio blends traditional techniques with forward-looking processes—prioritizing
            responsible sourcing and modular construction so garments can be repaired, re-worn,
            and re-loved.
          </p>
        </div>
      </div>
    </div>

    <!-- ============ SECTION 3 ============ -->
    <div class="min-h-screen">
      <div class="flex flex-col lg:flex-row-reverse gap-10 items-start pt-8 md:px-8">
        <!-- Image -->
        <div class="w-full lg:w-1/2">
          <img
            src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&w=801"
            alt="Community story"
            class="w-full h-[70vh] object-cover border"
            :class="invert ? 'border-background_color/30' : 'border-text_color/20'"
            loading="lazy"
          />
        </div>

        <!-- Text -->
        <div class="w-full lg:w-1/2 flex flex-col my-auto ">
          <h2 class="text-2xl md:text-3xl tracking-wide mb-4 mx-auto uppercase">Crafted with Intent</h2>
          <p class="text-sm leading-relaxed  mx-auto">
            We design for longevity: timeless silhouettes, resilient materials, and a supply chain
            we’re proud of. Every piece is cut in small batches and finished by hand.
          </p>
          <p class="text-sm leading-relaxed  mt-4 mx-auto">
            Our studio blends traditional techniques with forward-looking processes—prioritizing
            responsible sourcing and modular construction so garments can be repaired, re-worn,
            and re-loved.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const invert = ref(false)
const section1 = ref<HTMLElement | null>(null)

const wrapperClass = computed(() =>
  invert.value ? 'bg-text_color text-background_color' : 'bg-background_color text-text_color'
)

/**
 * Consider Section 1 "active at top" when:
 * - its top is within 0..1px of the viewport top (handles sub-pixel & device rounding), and
 * - it still overlaps the viewport (bottom > 0)
 */
function computeInvert() {
  const el = section1.value
  if (!el) { invert.value = false; return }
  const r = el.getBoundingClientRect()
  const tol = 1 // px tolerance
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
  // Initial state
  computeInvert()
  // Listen
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
