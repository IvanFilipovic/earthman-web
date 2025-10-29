<template>
  <div class="grid grid-cols-2 md:grid-cols-4 overflow-y-auto pt-8 gap-x-4 md:gap-x-8 lg:gap-x-24">
    <div
      v-for="item in products"
      :key="item.slug"
      class="col-span-1 cursor-pointer pb-10"
    >
      <div class="bg-background_color overflow-hidden object-fill">
        <div class="w-full">
          <div
            class="relative bg-background_color"
            @mouseenter="hoveredSlug = item.slug"
            @mouseleave="hoveredSlug = null"
          >
            <img
              :src="item.currentImage || item.colors?.[0]?.avatar_image || item.link_image"
              :alt="item.alt_text || item.name"
              class="hidden md:block max-w-[100%] h-auto object-cover transition-opacity duration-200 border border-text_color/30"
              loading="lazy"
              @click="goToProduct(item.slug, item.colors?.[0]?.variant_slug)"
            />

            <div v-if="item.colors && item.colors.length > 0" class="block md:hidden">
              <div 
                :ref="(el) => setSliderRef(el, item.slug)" 
                class="keen-slider"
              >
                <div
                  v-for="(color, i) in item.colors"
                  :key="i"
                  class="keen-slider__slide"
                >
                  <img
                    :src="color.avatar_image"
                    :alt="color.color"
                    class="w-full h-auto object-cover border border-text_color/30"
                    loading="lazy"
                    @click="goToProduct(item.slug, color.variant_slug)"
                  />
                </div>
              </div>
            </div>

            <div v-else class="block md:hidden">
              <img
                :src="item.link_image"
                :alt="item.alt_text || item.name"
                class="w-full h-auto object-cover border border-text_color/30"
                loading="lazy"
                @click="goToProduct(item.slug, item.colors?.[0]?.variant_slug)"
              />
            </div>

            <button
              v-show="hoveredSlug === item.slug"
              type="button"
              class="absolute top-4 left-4 bg-text_color text-background_color tracking-wider text-xs font-light w-auto px-2 mx-auto opacity-0 transition-opacity duration-200"
              :class="{ 'opacity-100': hoveredSlug === item.slug }"
              @click="goToProduct(item.slug, item.colors?.[0]?.variant_slug)"
            >
              VIEW
            </button>
          </div>

          <div class="py-3 text-left">
            <p class="text-xs tracking-wider font-extralight">{{ item.category }}</p>
            <h3 class="uppercase tracking-wider text-[13px] md:text-sm font-normal truncate py-1">{{ item.name }}</h3>

            <div v-if="item.colors && item.colors.length > 0" class="mt-1 flex items-center gap-2">
              <div
                v-for="(color, colorIdx) in item.colors"
                :key="colorIdx"
                class="relative group"
                @mouseenter="onEnterColor(item, color, colorIdx)"
                @mouseleave="onLeaveColor(item)"
              >
                <img
                  :src="color.avatar_image"
                  :alt="color.color"
                  class="w-7 h-7 md:h-8 md:w-8 object-cover border border-project_black/40 cursor-pointer"
                  loading="lazy"
                  @click="goToProduct(item.slug, color.variant_slug)"
                />

                <div
                  class="absolute inset-0 pointer-events-none transition-opacity duration-200 w-8 h-8 bg-text_color"
                  :class="isColorHovered(item, colorIdx) ? 'opacity-100' : 'opacity-0'"
                >
                  <Icon
                    name="lucide:square-arrow-out-up-right"
                    class="absolute inset-0 w-4 h-4 z-10 text-background_color m-auto"
                  />
                </div>
              </div>
            </div>

            <p class="mt-1 text-xs font-light">€{{ parseFloat(item.price).toFixed(2) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

interface ProductColor {
  color: string
  avatar_image: string
  variant_slug: string
}

interface Product {
  slug: string
  name: string
  category: string
  price: string
  link_image: string
  alt_text?: string
  hot?: boolean
  colors?: ProductColor[]
  currentImage?: string
  defaultImage?: string
}

interface Props {
  products: Product[]
}

const props = defineProps<Props>()
const router = useRouter()

const hoveredSlug = ref<string | null>(null)
const hoveredColorIndex = ref<Record<string, number | null>>({})
const sliderElements = ref<Record<string, HTMLElement>>({})
const sliderInstances = ref<Record<string, any>>({})
const sliderCurrents = ref<Record<string, number>>({})

function setSliderRef(el: any, slug: string): void {
  if (el) {
    sliderElements.value[slug] = el
  }
}

onMounted(() => {
  nextTick(() => {
    initializeSliders()
  })
})

watch(() => props.products, () => {
  nextTick(() => {
    destroyAllSliders()
    initializeSliders()
  })
}, { deep: true })

onBeforeUnmount(() => {
  destroyAllSliders()
})

function destroyAllSliders(): void {
  Object.values(sliderInstances.value).forEach(slider => {
    if (slider && typeof slider.destroy === 'function') {
      slider.destroy()
    }
  })
  sliderInstances.value = {}
}

function initializeSliders(): void {
  props.products.forEach(product => {
    if (!product.colors || product.colors.length === 0) return
    
    const element = sliderElements.value[product.slug]
    if (!element) return

    if (sliderInstances.value[product.slug]) {
      sliderInstances.value[product.slug].destroy()
    }

    const slider = new KeenSlider(element, {
      loop: true,
      initial: 0,
      slideChanged(s) {
        sliderCurrents.value[product.slug] = s.track.details.rel
      },
    })

    sliderInstances.value[product.slug] = slider
    sliderCurrents.value[product.slug] = 0
  })
}

function getMobileSliderCurrent(slug: string): number {
  return sliderCurrents.value[slug] || 0
}

function moveToSlide(slug: string, index: number): void {
  const slider = sliderInstances.value[slug]
  if (slider && typeof slider.moveToIdx === 'function') {
    slider.moveToIdx(index)
  }
}

function isColorHovered(item: Product, colorIdx: number): boolean {
  return hoveredColorIndex.value[item.slug] === colorIdx
}

function onEnterColor(item: Product, color: ProductColor, colorIdx: number): void {
  hoveredSlug.value = item.slug
  item.currentImage = color.avatar_image
  hoveredColorIndex.value[item.slug] = colorIdx
}

function onLeaveColor(item: Product): void {
  item.currentImage = item.colors?.[0]?.avatar_image || item.link_image
  hoveredColorIndex.value[item.slug] = null
  hoveredSlug.value = null
}

function goToProduct(slug: string, variantSlug?: string): void {
  if (!slug || !variantSlug) return
  router.push(`/product/${slug}/${variantSlug}`)
}
</script>

<style scoped>
.keen-slider {
  width: 100%;
}
</style>