<template>
  <div class="py-28">
    <div ref="sliderEl" class="keen-slider my-auto">
      <!-- We iterate over computedSlides which adds CTA at start & end -->
      <div
        v-for="(s, i) in computedSlides"
        :key="s.key || i"
        class="keen-slider__slide px-2 my-auto"
        :class="s.type === 'cta' ? 'slide-cta' : 'slide-product'"
      >
        <!-- CTA slides -->
        <div v-if="s.type === 'cta'" class="w-full h-full">
          <button
            class="group w-full h-full flex items-center justify-center bg-background_color p-6 text-center"
            @click="onCtaClick(s.cta)"
          >
            <div class="space-y-2">
              <h3 class="text-xl md:text-2xl font-bold">{{ s.cta.title }}</h3>
              <p class="text-sm opacity-80">{{ s.cta.subtitle }}</p>
              <div
                  to="/shop"
                  class="primary-btn sweep mx-auto px-4 py-2 md:w-full text-center"
                  >
                  <span class="btn-label">{{ s.cta.button }}</span>
                  <span class="sweep-overlay" aria-hidden="true"></span>
              </div>
            </div>
          </button>
        </div>

        <!-- Product slides -->
        <div v-else class="w-full">
          <NuxtLink :to="`/product/${(s.item.slug)}/${encodeURIComponent(s.item.colors[0].variant_slug)}`" class="w-full overflow-hidden bg-background_color">
            <img
              :src="firstColor(s.item)?.avatar_image || s.item.link_image"
              :alt="s.item.alt_text || s.item.name"
              class="w-full object-cover border border-text_color/30"
              loading="lazy"
              decoding="async"
            />
          </NuxtLink>
          <div class="mt-3 text-text_color truncate text-center">
            <p class="text-xs font-light mb-1">
              {{ s.item.category }}
            </p>
            <p class="text-sm">
              {{ s.item.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import "keen-slider/keen-slider.min.css";
import KeenSlider, { type KeenSliderInstance } from "keen-slider";
import { onMounted, onBeforeUnmount, ref, computed } from "vue";
const router = useRouter()

// ---- types for your API ----
type ColorEntry = {
  color: string
  avatar_image: string
  variant_slug: string
}
type ProductItem = {
  id: number
  name: string
  collection: string
  slug: string
  gender: string
  price: string
  discount: boolean
  discount_price: string | null
  category: number
  available: boolean
  link_image: string
  alt_text: string
  colors: ColorEntry[]
}

const sliderEl = ref<HTMLElement | null>(null)
let slider: KeenSliderInstance | null = null
const config = useRuntimeConfig()
const items = ref<ProductItem[]>([])

function firstColor(p: ProductItem) {
  return (p.colors && p.colors.length > 0) ? p.colors[0] : null
}

async function load() {
  try {
    const res = await $fetch<{ count: number; results: ProductItem[] }>(`${config.public.apiBase}/public/products-all/?page=1&page_size=12&hot=true`, { credentials: 'include' })
    items.value = Array.isArray(res?.results) ? res.results : []
  } catch (e) {
    console.warn("Hot products fetch failed", e)
    items.value = []
  }
}

/** Build the array with CTA bookends */
const computedSlides = computed(() => {
  const startCTA = {
    type: 'cta' as const,
    key: 'cta-start',
    cta: {
      title: 'See all of our stories',
      subtitle: 'Fresh drops you’ll love',
      button: 'See stories'
    }
  }
  const endCTA = {
    type: 'cta' as const,
    key: 'cta-end',
    cta: {
      title: 'See Everything',
      subtitle: 'Browse trough all stories',
      button: 'View All'
    }
  }
  const productSlides = items.value.map((item) => ({
    type: 'product' as const,
    key: `prod-${item.id}`,
    item
  }))
  return [startCTA, ...productSlides, endCTA]
})

function onCtaClick(cta: { title: string; button: string }) {
  // Customize routes for each CTA label if you want
  if (cta.button.toLowerCase().includes('collections')) {
    router.push({ path: '/collections', query: { sort: 'collections' } })
  } else {
    router.push('/shop')
  }
}

onMounted(async () => {
  await load()

  if (sliderEl.value) {
    slider = new KeenSlider(sliderEl.value, {
      loop: false,
      mode: "snap",
      rtl: false,
      slides: {
        perView: "auto",     // key: let widths come from CSS
        spacing: 2,
      },
      created(s) {
        // re-measure when images load to avoid layout hiccups
        const imgs = sliderEl.value?.querySelectorAll("img") || []
        imgs.forEach(img => {
          if (!img.complete) {
            img.addEventListener("load", () => s.update(), { once: true })
          }
        })
      },
    })
  }
})

onBeforeUnmount(() => {
  if (slider) {
    slider.destroy()
    slider = null
  }
})
</script>

<style scoped>
/* Let Keen handle the mechanics; we control widths with min/max-width
   so perView:'auto' can size each slide differently. */

/* Default (mobile) widths */
.slide-product {
  min-width: 170px;
  max-width: 170px;
}
.slide-cta {
  min-width: 260px;
  max-width: 260px;
}

/* sm ≥ 640px */
@media (min-width: 640px) {
  .slide-product {
    min-width: 210px;
    max-width: 210px;
  }
  .slide-cta {
    min-width: 360px;
    max-width: 360px;
  }
}

/* lg ≥ 1024px */
@media (min-width: 1024px) {
  .slide-product {
    min-width: 300px;
    max-width: 300px;
  }
  .slide-cta {
    min-width: 660px;
    max-width: 660px;
  }
}

/* Helpful: make each slide a block so padding works cleanly */
.keen-slider__slide {
  display: block;
}
</style>
