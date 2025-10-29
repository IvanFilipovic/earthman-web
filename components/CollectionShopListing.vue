<template>
  <section class="overflow-y-auto pt-8">
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div v-for="(section, idx) in sections" :key="idx">
          <div v-if="section.type === 'gridWithText'" class="pb-10">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 lg:gap-x-24 gap-y-8">
              <article
                v-for="item in section.items"
                :key="item.slug"
                class="group cursor-pointer col-span-2 md:col-span-1"
              >
                <div class="relative overflow-hidden">
                  <img
                    :src="item.currentImage || item.colors?.[0]?.avatar_image || item.link_image"
                    :alt="item.alt_text || item.name"
                    class="hidden md:block w-full h-full object-cover border border-text_color/30"
                    loading="lazy"
                    @mouseenter="hoveredSlug = item.slug"
                    @mouseleave="hoveredSlug = null"
                    @click="goToProduct(item.slug, item.colors?.[0]?.variant_slug)"
                  />

                  <MobileColorSlider
                    v-if="item.colors && item.colors.length > 0"
                    :colors="item.colors"
                    @go="(variantSlug: string) => goToProduct(item.slug, variantSlug)"
                  />
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

                <div class="pt-3 md:pt-4 text-left">
                  <p class="text-xs tracking-wider font-extralight">{{ item.category }}</p>
                  <h3 class="uppercase tracking-wider text-sm font-normal truncate py-1">{{ item.name }}</h3>
                  
                  <div v-if="item.colors && item.colors.length > 0" class="mt-1 flex items-center gap-2">
                    <div
                      v-for="(color, colorIdx) in item.colors"
                      :key="colorIdx"
                      class="relative"
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
                </div>
              </article>

              <div class="col-span-2 md:col-span-2 flex flex-col justify-center">
                <h4 class="section-heading uppercase tracking-wider text-xs md:text-sm mb-3">
                  {{ section.heading }}
                </h4>
                <div class="flex flex-col">
                  <span
                    v-for="(line, i) in splitText(section.text)"
                    :key="i"
                    class="section-text-line -mx-4 px-4 md:-mx-0 py-1 md:py-2 my-1 md:my-3 text-sm md:text-base leading-relaxed tracking-wide bg-text_color text-background_color"
                  >
                    {{ line }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="section.type === 'gridHot'" class="pb-10">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-8 lg:gap-x-24 gap-y-8">
              <article
                v-for="item in section.items"
                :key="item.slug"
                class="group cursor-pointer md:col-span-1"
              >
                <div class="relative overflow-hidden">
                  <img
                    :src="item.currentImage || item.colors?.[0]?.avatar_image || item.link_image"
                    :alt="item.alt_text || item.name"
                    class="hidden md:block w-full h-full object-cover border border-text_color/30"
                    loading="lazy"
                    @mouseenter="hoveredSlug = item.slug"
                    @mouseleave="hoveredSlug = null"
                    @click="goToProduct(item.slug, item.colors?.[0]?.variant_slug)"
                  />

                  <MobileColorSlider
                    v-if="item.colors && item.colors.length > 0"
                    :colors="item.colors"
                    @go="(variantSlug: string) => goToProduct(item.slug, variantSlug)"
                  />
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

                <div class="pt-3 md:pt-4 text-left">
                  <p class="text-xs tracking-wider font-extralight">{{ item.category }}</p>
                  <h3 class="uppercase tracking-wider text-sm font-normal truncate py-1">{{ item.name }}</h3>
                  
                  <div v-if="item.colors && item.colors.length > 0" class="mt-1 flex items-center gap-2">
                    <div
                      v-for="(color, colorIdx) in item.colors"
                      :key="colorIdx"
                      class="relative"
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
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let ScrollSmoother: any = null
try {
  ScrollSmoother = (await import('gsap/ScrollSmoother')).ScrollSmoother
} catch {}

gsap.registerPlugin(ScrollTrigger)
if (ScrollSmoother) gsap.registerPlugin(ScrollSmoother as any)

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

interface Collection {
  name?: string
  element_one?: string
  element_two?: string
  element_three?: string
  element_four?: string
}

interface GridSection {
  type: 'gridWithText' | 'gridHot'
  items: Product[]
  text?: string
  heading?: string
}

interface Props {
  products: Product[]
  collection: Collection
}

const props = defineProps<Props>()
const router = useRouter()

const hoveredSlug = ref<string | null>(null)
const hoveredColorIndex = ref<Record<string, number | null>>({})

let smoother: any = null
let ctx: gsap.Context | null = null

const textPool = computed(() => {
  const c = props.collection || {}
  const texts = [c.element_one, c.element_two, c.element_three, c.element_four].filter(Boolean)
  return texts.length ? texts : ['']
})

const sections = computed<GridSection[]>(() => {
  const all = [...props.products]
  const hotProducts = all.filter(p => p.hot === true)
  const regularProducts = all.filter(p => !p.hot)

  const result: GridSection[] = []
  let textIndex = 0
  let regIndex = 0
  let hotIndex = 0

  while (regIndex < regularProducts.length || hotIndex < hotProducts.length) {
    const regSlice = regularProducts.slice(regIndex, regIndex + 1)
    if (regSlice.length > 0) {
      result.push({
        type: 'gridWithText',
        items: regSlice,
        text: textPool.value[textIndex % textPool.value.length],
        heading: defaultHeading(textIndex),
      })
      regIndex += regSlice.length
      textIndex++
    }

    const hotSlice = hotProducts.slice(hotIndex, hotIndex + 3)
    if (hotSlice.length > 0) {
      result.push({
        type: 'gridHot',
        items: hotSlice,
      })
      hotIndex += hotSlice.length
    }
  }

  return result
})

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

function splitText(text: string = ''): string[] {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .filter(Boolean)
}

function defaultHeading(idx: number): string {
  const base = props.collection?.name || 'Collection'
  return idx === 0 ? base : `${base} — ${idx + 1}`
}

function initializeGSAP(): void {
  ctx = gsap.context(() => {
    if (ScrollSmoother) {
      smoother = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.2,
        wrapper: '#smooth-wrapper',
        content: '#smooth-content'
      })
    }

    document.querySelectorAll('.section-heading').forEach((heading) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: 'top 80%'
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      })
    })

    document.querySelectorAll('.section-text-line').forEach((line, index) => {
      gsap.from(line, {
        scrollTrigger: {
          trigger: line,
          start: 'top 85%'
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: index * 0.1
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
  smoother?.kill?.()
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>