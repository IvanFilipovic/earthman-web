<template>
  <section class="pt-8 mt-2 md:mt-6 px-4 md:px-8">
    <div class="collection-content">
      <div v-for="(section, idx) in sections" :key="idx">
        <div v-if="section.layout === 'hero'" class="pb-8 md:pb-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <article
              v-for="item in section.items"
              :key="item.slug"
              class="group cursor-pointer relative h-[80vh] overflow-hidden w-full md:w-2/3 mx-auto"
            >
              <img
                v-bind="getHeroImageAttrs(item.currentImage || item.colors?.[0]?.avatar_image)"
                :alt="item.alt_text || item.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                @mouseenter="hoveredSlug = item.slug"
                @mouseleave="hoveredSlug = null"
              />
              <div class="absolute inset-0"></div>
              
              <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-text_color bg-background_color/85 w-full">
                <div class="hero-content">
                  <p class="text-xs tracking-widest uppercase mb-1 opacity-80">
                    {{ item.category }}
                  </p>
                  <h2 class="hero-title text-xl md:text-2xl font-bold mb-1 uppercase tracking-tight">
                    {{ item.name }}
                  </h2>

                  <div class="flex items-center gap-3 mb-2">
                    <div v-if="item.discount && item.discount_price" class="flex items-center gap-2">
                      <span class="text-sm md:text-base font-semibold">
                        {{ formatPrice(item.discount_price) }}
                      </span>
                      <span class="text-sm md:text-base line-through opacity-70">
                        {{ formatPrice(item.price) }}
                      </span>
                    </div>
                    <span v-else class="text-sm md:text-base">
                      {{ formatPrice(item.price) }}
                    </span>
                  </div>
                  
                  <div class="flex items-center gap-2 mb-2">
                    <div 
                      v-for="(color, colorIdx) in item.colors?.slice(0, 4)"
                      :key="colorIdx"
                      class="relative"
                      @mouseenter="onEnterColor(item, color, colorIdx)"
                      @mouseleave="onLeaveColor(item)"
                    >
                      <img
                        v-bind="getSwatchImageAttrs(color.avatar_image)"
                        :alt="color.color"
                        class="w-8 h-8 md:w-10 md:h-10 object-cover border border-text_color/30 cursor-pointer transition-transform hover:scale-110"
                        @click="goToProduct(item.slug, color.variant_slug)"
                      />
                    </div>
                  </div>

                  <NuxtLink
                    :to="`/product/${item.slug}/${item.colors?.[0]?.variant_slug}`"
                    class="btn btn--secondary inline-flex text-sm"
                  >
                    <span class="btn__text">Discover</span>
                    <span class="btn__fill"></span>
                  </NuxtLink>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div v-else-if="section.layout === 'triple'" class="pb-8 md:pb-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
            <article
              v-for="item in section.items"
              :key="item.slug"
              class="group cursor-pointer relative h-[100vh] overflow-hidden w-full"
            >
              <img
                v-bind="getTripleImageAttrs(item.currentImage || item.colors?.[0]?.avatar_image)"
                :alt="item.alt_text || item.name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                @mouseenter="hoveredSlug = item.slug"
                @mouseleave="hoveredSlug = null"
              />
              <div class="absolute inset-0"></div>
              
              <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-text_color bg-background_color/85 w-full">
                <div class="hero-content">
                  <p class="text-xs tracking-widest uppercase mb-1 opacity-80">
                    {{ item.category }}
                  </p>
                  <h2 class="hero-title text-lg md:text-2xl font-bold mb-1 uppercase tracking-tight">
                    {{ item.name }}
                  </h2>

                  <div class="flex items-center gap-3 mb-2">
                    <div v-if="item.discount && item.discount_price" class="flex items-center gap-2">
                      <span class="text-sm md:text-base font-semibold">
                        {{ formatPrice(item.discount_price) }}
                      </span>
                      <span class="text-sm md:text-base line-through opacity-70">
                        {{ formatPrice(item.price) }}
                      </span>
                    </div>
                    <span v-else class="text-sm md:text-base font-semibold">
                      {{ formatPrice(item.price) }}
                    </span>
                  </div>
                  
                  <div class="flex items-center gap-2 mb-2">
                    <div 
                      v-for="(color, colorIdx) in item.colors?.slice(0, 4)"
                      :key="colorIdx"
                      class="relative"
                      @mouseenter="onEnterColor(item, color, colorIdx)"
                      @mouseleave="onLeaveColor(item)"
                    >
                      <img
                        v-bind="getSwatchImageAttrs(color.avatar_image)"
                        :alt="color.color"
                        class="w-8 h-8 object-cover border border-text_color/30 cursor-pointer transition-transform hover:scale-110"
                        @click="goToProduct(item.slug, color.variant_slug)"
                      />
                    </div>
                  </div>

                  <NuxtLink
                    :to="`/product/${item.slug}/${item.colors?.[0]?.variant_slug}`"
                    class="btn btn--secondary inline-flex text-sm"
                  >
                    <span class="btn__text">Discover</span>
                    <span class="btn__fill"></span>
                  </NuxtLink>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div v-else class="pb-8 md:pb-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-8 lg:gap-x-24 gap-y-8">
            <article
              class="group cursor-pointer relative h-[80vh] overflow-hidden w-full md:col-span-1"
              :class="section.layout === 'reversed' ? 'md:order-2' : 'md:order-1'"
            >
              <img
                v-bind="getStandardImageAttrs(section.items[0].currentImage || section.items[0].colors?.[0]?.avatar_image)"
                :alt="section.items[0].alt_text || section.items[0].name"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                @mouseenter="hoveredSlug = section.items[0].slug"
                @mouseleave="hoveredSlug = null"
              />
              <div class="absolute inset-0"></div>
              
              <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-text_color bg-background_color/85 w-full">
                <div class="hero-content">
                  <p class="text-xs tracking-widest uppercase mb-1 opacity-80">
                    {{ section.items[0].category }}
                  </p>
                  <h2 class="hero-title text-xl md:text-2xl font-bold mb-1 uppercase tracking-tight">
                    {{ section.items[0].name }}
                  </h2>

                  <div class="flex items-center gap-3 mb-2">
                    <div v-if="section.items[0].discount && section.items[0].discount_price" class="flex items-center gap-2">
                      <span class="text-sm md:text-base font-semibold">
                        {{ formatPrice(section.items[0].discount_price) }}
                      </span>
                      <span class="text-sm md:text-base line-through opacity-70">
                        {{ formatPrice(section.items[0].price) }}
                      </span>
                    </div>
                    <span v-else class="text-sm md:text-base font-semibold">
                      {{ formatPrice(section.items[0].price) }}
                    </span>
                  </div>
                  
                  <div class="flex items-center gap-2 mb-2">
                    <div 
                      v-for="(color, colorIdx) in section.items[0].colors?.slice(0, 4)"
                      :key="colorIdx"
                      class="relative"
                      @mouseenter="onEnterColor(section.items[0], color, colorIdx)"
                      @mouseleave="onLeaveColor(section.items[0])"
                    >
                      <img
                        v-bind="getSwatchImageAttrs(color.avatar_image)"
                        :alt="color.color"
                        class="w-8 h-8 md:w-10 md:h-10 object-cover border border-text_color/30 cursor-pointer transition-transform hover:scale-110"
                        @click="goToProduct(section.items[0].slug, color.variant_slug)"
                      />
                    </div>
                  </div>

                  <NuxtLink
                    :to="`/product/${section.items[0].slug}/${section.items[0].colors?.[0]?.variant_slug}`"
                    class="btn btn--secondary inline-flex text-sm"
                  >
                    <span class="btn__text">Discover</span>
                    <span class="btn__fill"></span>
                  </NuxtLink>
                </div>
              </div>
            </article>

            <div 
              class="flex flex-col justify-center section-trigger-line md:col-span-2"
              :class="section.layout === 'reversed' ? 'md:order-1' : 'md:order-2'"
            >
              <h4 class="section-heading uppercase tracking-wider text-xs md:text-sm mb-3 px-4">
                {{ section.heading }}
              </h4>
              <div class="flex flex-col">
                <span
                  v-for="(line, i) in splitText(section.text)"
                  :key="i"
                  class="section-text-line px-4 py-1 md:py-2 my-1 md:my-3 text-sm md:text-base leading-relaxed tracking-wide text-text_color"
                >
                  {{ line }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="idx < sections.length - 1 && shouldShowSeparator(idx)" class="flex justify-center py-4 md:py-6">
          <div class="w-64 h-px bg-text_color/30"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  discount_price?: string | null
  discount?: boolean
  alt_text?: string
  hot?: boolean
  colors?: ProductColor[]
  currentImage?: string
  defaultImage?: string
}

interface Collection {
  name?: string
  element_one?: string
  element_two?: string
  element_three?: string
  element_four?: string
  element_five?: string
}

interface GridSection {
  layout: 'standard' | 'reversed' | 'hero' | 'triple'
  items: Product[]
  text: string
  heading: string
}

interface Props {
  products: Product[]
  collection: Collection
}

const props = defineProps<Props>()
const router = useRouter()

const hoveredSlug = ref<string | null>(null)
const hoveredColorIndex = ref<Record<string, number | null>>({})

let ctx: gsap.Context | null = null

// Responsive image helpers
const { getResponsiveImages } = useImageTransform()

// Hero layout: 2 columns on desktop, each with w-2/3 mx-auto = ~33vw
// Mobile: full width
const getHeroImageAttrs = (url: string) => {
  return getResponsiveImages(
    url,
    [400, 600, 800, 1200, 1600],
    '(max-width: 767px) 100vw, 33vw'
  )
}

// Triple layout: 3 columns on desktop = 33vw each
// Mobile: full width
const getTripleImageAttrs = (url: string) => {
  return getResponsiveImages(
    url,
    [400, 600, 800, 1200, 1600],
    '(max-width: 767px) 100vw, 33vw'
  )
}

// Standard/Reversed layout: 1 column in 3-column grid = 33vw
// Mobile: full width
const getStandardImageAttrs = (url: string) => {
  return getResponsiveImages(
    url,
    [400, 600, 800, 1200, 1600],
    '(max-width: 767px) 100vw, 33vw'
  )
}

// Color swatches: Fixed small size (32-40px)
const getSwatchImageAttrs = (url: string) => {
  return getResponsiveImages(
    url,
    [50, 100],
    '40px'
  )
}

const textElements = computed(() => {
  const c = props.collection || {}
  return [
    c.element_one,
    c.element_two,
    c.element_three,
    c.element_four,
    c.element_five,
  ].filter(Boolean)
})

const sections = computed<GridSection[]>(() => {
  const allProducts = [...props.products]
  const result: GridSection[] = []
  let i = 0
  
  if (allProducts.length >= 1) {
    result.push({
      layout: 'standard',
      items: [allProducts[0]],
      text: textElements.value[0] || '',
      heading: props.collection?.name || 'Collection'
    })
    i = 1
  }
  
  if (allProducts.length >= 2) {
    result.push({
      layout: 'reversed',
      items: [allProducts[1]],
      text: textElements.value[1] || '',
      heading: props.collection?.name || 'Collection'
    })
    i = 2
  }
  
  if (allProducts.length >= 3) {
    result.push({
      layout: 'standard',
      items: [allProducts[2]],
      text: textElements.value[2] || '',
      heading: props.collection?.name || 'Collection'
    })
    i = 3
  }
  
  if (allProducts.length >= 5) {
    result.push({
      layout: 'hero',
      items: [allProducts[3], allProducts[4]],
      text: '',
      heading: ''
    })
    i = 5
  }
  
  if (allProducts.length >= 6) {
    result.push({
      layout: 'reversed',
      items: [allProducts[5]],
      text: textElements.value[3] || '',
      heading: props.collection?.name || 'Collection'
    })
    i = 6
  }
  
  if (allProducts.length >= 7) {
    result.push({
      layout: 'standard',
      items: [allProducts[6]],
      text: textElements.value[4] || '',
      heading: props.collection?.name || 'Collection'
    })
    i = 7
  }
  
  let sectionsAfterText = 0
  while (i < allProducts.length) {
    const remaining = allProducts.length - i
    
    if (sectionsAfterText > 0 && sectionsAfterText % 3 === 0 && remaining >= 2) {
      result.push({
        layout: 'hero',
        items: [allProducts[i], allProducts[i + 1]],
        text: '',
        heading: ''
      })
      i += 2
      sectionsAfterText++
    } else {
      const take = Math.min(3, remaining)
      result.push({
        layout: 'triple',
        items: allProducts.slice(i, i + take),
        text: '',
        heading: ''
      })
      i += take
      sectionsAfterText++
    }
  }
  
  return result
})

function formatPrice(price: string | number | null | undefined): string {
  if (!price) return 'N/A'
  
  const numPrice = typeof price === 'string' ? parseFloat(price) : price
  
  if (isNaN(numPrice)) return 'N/A'
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numPrice)
}

function onEnterColor(item: Product, color: ProductColor, colorIdx: number): void {
  hoveredSlug.value = item.slug
  item.currentImage = color.avatar_image
  hoveredColorIndex.value[item.slug] = colorIdx
}

function onLeaveColor(item: Product): void {
  item.currentImage = item.colors?.[0]?.avatar_image
  hoveredColorIndex.value[item.slug] = null
  hoveredSlug.value = null
}

function goToProduct(slug: string, variantSlug?: string): void {
  if (!slug || !variantSlug) return
  router.push(`/product/${slug}/${variantSlug}`)
}

function splitText(text: string = ''): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .filter(Boolean)
}

function shouldShowSeparator(idx: number): boolean {
  return sections.value[idx].layout !== 'hero'
}

function initializeGSAP(): void {
  ctx = gsap.context(() => {
    document.querySelectorAll('.hero-title').forEach((title) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 80%'
        },
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: 'power4.out'
      })
    })

    document.querySelectorAll('.hero-content').forEach((content) => {
      gsap.from(content.querySelectorAll('p, .btn'), {
        scrollTrigger: {
          trigger: content,
          start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.1
      })
    })

    document.querySelectorAll('.section-heading').forEach((heading) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%'
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      })
    })

    document.querySelectorAll('.section-text-line').forEach((line, index) => {
      gsap.from(line, {
        scrollTrigger: {
          trigger: '.section-trigger-line',
          start: 'top 90%'
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: index * 0.5
      })
    })
  })
}

onMounted(() => {
  nextTick(() => {
    initializeGSAP()
  })
})

onBeforeUnmount(() => {
  ctx?.revert()
  ctx = null
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>