<template>
  <div class="py-28">
    <!-- Slider -->
    <div ref="sliderEl" class="keen-slider my-auto">
      <div
        v-for="p in items"
        :key="p.id"
        class="keen-slider__slide px-2 my-auto"
      >
        <div class="w-full">
          <div class="w-full overflow-hidden border-text_color/30 bg-background_color">
            <img
              :src="firstColor(p)?.avatar_image || p.link_image"
              :alt="p.alt_text || p.name"
              class="w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="mt-3 text-sm text-text_color truncate text-center">
            {{ p.name }}
          </div>
        </div>
      </div>
    </div>

    <!-- (optional) arrows – uncomment if you want controls
    <button
      class="absolute left-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-9 h-9 rounded-full border bg-background_color/70 text-text_color hover:bg-background_color transition"
      @click="slider?.prev()"
      aria-label="Prev"
    >‹</button>
    <button
      class="absolute right-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-9 h-9 rounded-full border bg-background_color/70 text-text_color hover:bg-background_color transition"
      @click="slider?.next()"
      aria-label="Next"
    >›</button>
    -->
  </div>
</template>

<script setup lang="ts">
import "keen-slider/keen-slider.min.css";
import KeenSlider, { type KeenSliderInstance } from "keen-slider";
import { onMounted, onBeforeUnmount, ref } from "vue";

// ---- types for your API ----
type ColorEntry = {
  color: string
  avatar_image: string
  variant_slug: string
}
type ProductItem = {
  id: number
  name: string
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

const API = "http://127.0.0.1:8000/public/products-all/?page=1&page_size=12&hot=true"
const items = ref<ProductItem[]>([])

function firstColor(p: ProductItem) {
  return (p.colors && p.colors.length > 0) ? p.colors[0] : null
}

async function load() {
  try {
    const res = await $fetch<{ count: number; results: ProductItem[] }>(API, { credentials: 'include' })
    items.value = Array.isArray(res?.results) ? res.results : []
  } catch (e) {
    console.warn("Hot products fetch failed", e)
    items.value = []
  }
}

onMounted(async () => {
  await load()

  // init slider only after content exists
  if (sliderEl.value) {
    slider = new KeenSlider(sliderEl.value, {
      mode: "free-snap",
      slides: {
        origin: "center",
        perView: 2,
        spacing: 15,
      },
      breakpoints: {
        "(min-width: 640px)": { slides: { origin: "center", perView: 3, spacing: 15 } },
        "(min-width: 1024px)": { slides: { origin: "center", perView: 4, spacing: 18 } },
      },
      // re-measure when images load to avoid any layout hiccups
      created(s) {
        // listen for images finishing to refresh sizes
        const imgs = sliderEl.value?.querySelectorAll("img") || []
        imgs.forEach(img => {
          if (!img.complete) {
            img.addEventListener("load", () => s.update(), { once: true })
          }
        })
      }
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
/* Keep Keen’s core CSS via import; minimal local styles here */
.keen-slider__slide {
  /* make slides’ inner padding work nicely */
  display: block;
}
</style>
