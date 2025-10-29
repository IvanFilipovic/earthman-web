<template>
  <div class="py-28">
    <div ref="sliderEl" class="keen-slider my-auto">
      <div
        v-for="(s, i) in computedSlides"
        :key="s.key || i"
        class="keen-slider__slide px-2 my-auto"
        :class="s.type === 'cta' ? 'slide-cta' : 'slide-product'"
      >
        <div v-if="s.type === 'cta'" class="w-full h-full">
          <button
            type="button"
            class="group w-full h-full flex items-center justify-center bg-background_color p-6 text-center"
            @click="onCtaClick(s.cta)"
          >
            <div class="space-y-4">
              <h3 class="text-xl md:text-2xl font-bold">{{ s.cta.title }}</h3>
              <p class="text-sm opacity-80">{{ s.cta.subtitle }}</p>
              <div class="btn btn--primary mx-auto">
                <span class="btn__text">{{ s.cta.button }}</span>
                <span class="btn__fill"></span>
              </div>
            </div>
          </button>
        </div>

        <div v-else class="w-full">
          <NuxtLink 
            :to="`/product/${s.item.slug}/${encodeURIComponent(s.item.colors[0].variant_slug)}`" 
            class="w-full overflow-hidden bg-background_color"
          >
            <img
              :src="firstColor(s.item)?.avatar_image || s.item.link_image"
              :alt="s.item.alt_text || s.item.name"
              class="w-full object-cover border border-text_color/30"
              loading="lazy"
              decoding="async"
            />
          </NuxtLink>
          <div class="mt-3 text-text_color truncate text-center">
            <p class="text-xs font-light mb-1">{{ s.item.category }}</p>
            <p class="text-sm">{{ s.item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'keen-slider/keen-slider.min.css'
import KeenSlider, { type KeenSliderInstance } from 'keen-slider'

interface ColorEntry {
  color: string
  avatar_image: string
  variant_slug: string
}

interface ProductItem {
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

interface ProductsResponse {
  count: number
  results: ProductItem[]
}

interface CtaSlide {
  type: 'cta'
  key: string
  cta: {
    title: string
    subtitle: string
    button: string
  }
}

interface ProductSlide {
  type: 'product'
  key: string
  item: ProductItem
}

type Slide = CtaSlide | ProductSlide

const config = useRuntimeConfig()
const router = useRouter()

const sliderEl = ref<HTMLElement | null>(null)
const items = ref<ProductItem[]>([])

let slider: KeenSliderInstance | null = null

function firstColor(product: ProductItem): ColorEntry | null {
  return product.colors && product.colors.length > 0 ? product.colors[0] : null
}

async function loadProducts(): Promise<void> {
  try {
    const response = await $fetch<ProductsResponse>(
      `${config.public.apiBase}/public/products-all/?page=1&page_size=12&hot=true`,
      { credentials: 'include' }
    )
    items.value = Array.isArray(response?.results) ? response.results : []
  } catch (error) {
    console.error('Failed to fetch hot products:', error)
    items.value = []
  }
}

const computedSlides = computed<Slide[]>(() => {
  const startCTA: CtaSlide = {
    type: 'cta',
    key: 'cta-start',
    cta: {
      title: 'See all of our stories',
      subtitle: 'Fresh drops you love',
      button: 'See Stories'
    }
  }
  
  const endCTA: CtaSlide = {
    type: 'cta',
    key: 'cta-end',
    cta: {
      title: 'See Everything',
      subtitle: 'Browse through all stories',
      button: 'View All'
    }
  }
  
  const productSlides: ProductSlide[] = items.value.map((item) => ({
    type: 'product',
    key: `prod-${item.id}`,
    item
  }))
  
  return [startCTA, ...productSlides, endCTA]
})

function onCtaClick(cta: { title: string; button: string }): void {
  if (cta.button.toLowerCase().includes('stories')) {
    router.push('/collections')
  } else {
    router.push('/shop')
  }
}

function initializeSlider(): void {
  if (!sliderEl.value) return

  slider = new KeenSlider(sliderEl.value, {
    loop: false,
    mode: 'snap',
    rtl: false,
    slides: {
      perView: 'auto',
      spacing: 2,
    },
    created(instance) {
      const images = sliderEl.value?.querySelectorAll('img') || []
      images.forEach(img => {
        if (!img.complete) {
          img.addEventListener('load', () => instance.update(), { once: true })
        }
      })
    },
  })
}

onMounted(async () => {
  await loadProducts()
  nextTick(() => {
    initializeSlider()
  })
})

onBeforeUnmount(() => {
  slider?.destroy()
  slider = null
})
</script>

<style scoped>
.slide-product {
  min-width: 170px;
  max-width: 170px;
}

.slide-cta {
  min-width: 260px;
  max-width: 260px;
}

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

.keen-slider__slide {
  display: block;
}
</style>