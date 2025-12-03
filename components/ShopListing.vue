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
            <!-- Desktop Main Image -->
            <img
              v-bind="getMainImageAttrs(getMainImage(item))"
              :alt="item.alt_text || item.name"
              class="hidden md:block max-w-[100%] h-auto object-cover transition-opacity duration-200 border border-text_color/30"
              loading="lazy"
              @click="goToProduct(item.slug, getDefaultVariantSlug(item))"
            />

            <!-- Mobile Slider -->
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
                    v-bind="getMobileSliderImageAttrs(color.avatar_image)"
                    :alt="color.color"
                    class="w-full h-auto object-cover border border-text_color/30"
                    loading="lazy"
                    @click="goToProduct(item.slug, color.variant_slug)"
                  />
                </div>
              </div>
            </div>

            <!-- View Button on Hover -->
            <button
              v-show="hoveredSlug === item.slug"
              type="button"
              class="absolute top-4 left-4 bg-text_color text-background_color tracking-wider text-xs font-light w-auto px-2 mx-auto opacity-0 transition-opacity duration-200"
              :class="{ 'opacity-100': hoveredSlug === item.slug }"
              @click="goToProduct(item.slug, getDefaultVariantSlug(item))"
            >
              VIEW
            </button>
          </div>

          <!-- Product Info -->
          <div class="py-3 text-left">
            <p class="text-xs tracking-wider font-extralight">{{ item.category }}</p>
            <h3 class="uppercase tracking-wider text-[13px] md:text-sm font-normal truncate py-1">
              {{ item.name }}
            </h3>

            <!-- Color Swatches -->
            <div v-if="item.colors && item.colors.length > 0" class="mt-1 flex items-center gap-2">
              <div
                v-for="(color, colorIdx) in item.colors"
                :key="colorIdx"
                class="relative group"
                @mouseenter="onEnterColor(item, color, colorIdx)"
                @mouseleave="onLeaveColor(item)"
              >
                <img
                  v-bind="getSwatchImageAttrs(color.avatar_image)"
                  :alt="color.color"
                  class="w-7 h-7 md:h-8 md:w-8 object-cover border border-project_black/30 cursor-pointer"
                  loading="lazy"
                  @click="goToProduct(item.slug, color.variant_slug)"
                />

                <!-- Hover Icon -->
                <div
                  class="absolute inset-0 pointer-events-none transition-opacity duration-200 w-8 h-8 bg-text_color"
                  :class="isColorHovered(item, colorIdx) ? 'opacity-100 bg-text_color' : 'opacity-0 bg-text_color'"
                >
                  <Icon
                    name="lucide:square-arrow-out-up-right"
                    class="absolute inset-0 w-4 h-4 z-10 bg-background_color m-auto"
                  />
                </div>
              </div>
            </div>
            <div v-if="item?.discount" class="space-x-2">
              <span class="mt-1 text-xs font-light tracking-widest text-error_text_color">€{{ formatPrice(item.discount_price) }}</span>
              <span id="price" class="mt-1 text-xs font-light tracking-widest text-text_color">€{{ formatPrice(item.price) }}</span>
            </div>
            <p v-else class="mt-1 text-xs font-light tracking-widest text-text_color">€{{ formatPrice(item.price) }}</p>
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
  discount_price: string
  discount: boolean
  price: string
  alt_text?: string
  hot?: boolean
  colors: ProductColor[]
  currentImage?: string
}

interface Props {
  products: Product[]
}

const props = defineProps<Props>()
const router = useRouter()
const route = useRoute()

const hoveredSlug = ref<string | null>(null)
const hoveredColorIndex = ref<Record<string, number | null>>({})
const sliderElements = ref<Record<string, HTMLElement>>({})
const sliderInstances = ref<Record<string, any>>({})
const sliderCurrents = ref<Record<string, number>>({})

// Get filtered colors from URL query params
const filteredColors = computed<string[]>(() => {
  const colorParam = route.query.color
  
  if (!colorParam) {
    return []
  }
  
  // Handle both single color and array of colors
  if (Array.isArray(colorParam)) {
    return colorParam.map(c => normalizeColorName(String(c)))
  }
  
  return [normalizeColorName(String(colorParam))]
})

// Responsive image helpers
const { getResponsiveImages } = useImageTransform()

// Main product images in grid (2 cols mobile, 4 cols desktop)
const getMainImageAttrs = (url: string) => {
  return getResponsiveImages(
    url,
    [300, 400, 600, 800], // Widths for srcset
    '(max-width: 767px) 50vw, 25vw' // Mobile: 2 cols (50%), Desktop: 4 cols (25%)
  )
}

// Mobile slider images (full width within grid cell)
const getMobileSliderImageAttrs = (url: string) => {
  return getResponsiveImages(
    url,
    [300, 400, 600], // Mobile-focused widths
    '50vw' // 2 columns on mobile = 50% viewport width
  )
}

// Color swatch thumbnails (fixed small size)
const getSwatchImageAttrs = (url: string) => {
  return getResponsiveImages(
    url,
    [50, 100], // Just 1x and 2x for small thumbnails
    '32px' // Fixed size (w-8/h-8)
  )
}

// Normalize color names for matching (lowercase, trim, remove extra spaces)
function normalizeColorName(color: string): string {
  return color.toLowerCase().trim().replace(/\s+/g, ' ')
}

// Check if a color matches any filtered color
function matchesFilteredColor(productColor: ProductColor): boolean {
  if (filteredColors.value.length === 0) {
    return false
  }
  
  const normalizedProductColor = normalizeColorName(productColor.color)
  
  return filteredColors.value.some(filterColor => {
    // Exact match
    if (normalizedProductColor === filterColor) {
      return true
    }
    
    // Partial match (e.g., "Blue" matches "Navy Blue")
    if (normalizedProductColor.includes(filterColor) || filterColor.includes(normalizedProductColor)) {
      return true
    }
    
    return false
  })
}

// Get the main image to display for a product
function getMainImage(item: Product): string {
  // Priority 1: User hovering over a color swatch
  if (item.currentImage) {
    return item.currentImage
  }
  
  // Priority 2: No colors available (shouldn't happen based on new API)
  if (!item.colors || item.colors.length === 0) {
    return '' // Fallback to empty string
  }
  
  // Priority 3: Match filtered colors
  if (filteredColors.value.length > 0) {
    const matchedColor = item.colors.find(color => matchesFilteredColor(color))
    
    if (matchedColor) {
      return matchedColor.avatar_image
    }
  }
  
  // Priority 4: Default - first color
  return item.colors[0].avatar_image
}

// Get the default variant slug (for navigation)
function getDefaultVariantSlug(item: Product): string | undefined {
  // No colors available
  if (!item.colors || item.colors.length === 0) {
    return undefined
  }
  
  // If colors are filtered, try to match
  if (filteredColors.value.length > 0) {
    const matchedColor = item.colors.find(color => matchesFilteredColor(color))
    
    if (matchedColor) {
      return matchedColor.variant_slug
    }
  }
  
  // Default: use first color's variant_slug
  return item.colors[0].variant_slug
}

function formatPrice(price: string): string {
  return parseFloat(price).toFixed(2)
}

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

function isColorHovered(item: Product, colorIdx: number): boolean {
  return hoveredColorIndex.value[item.slug] === colorIdx
}

function onEnterColor(item: Product, color: ProductColor, colorIdx: number): void {
  hoveredSlug.value = item.slug
  item.currentImage = color.avatar_image
  hoveredColorIndex.value[item.slug] = colorIdx
}

function onLeaveColor(item: Product): void {
  // Reset to default image (will recalculate based on filters or first color)
  item.currentImage = undefined
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
#price {
  text-decoration: line-through;
}
</style>