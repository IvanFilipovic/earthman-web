<template>
  <section class="overflow-y-auto pt-8 md:px-8 mt-6">
    <!-- Iterate over the precomputed layout sections -->
    <div v-for="(section, idx) in sections" :key="idx">
      <!-- PRODUCT GRIDS -->
      <div v-if="section.type === 'grid'" class="pb-10 md:pb-18">
        <!-- 3-up grid on md+ when count === 3; 2-up when count === 2. On small, always 2-up. -->
        <div
          :class="[
            'grid gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-14',
            section.count === 3 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-2',
          ]"
        >
          <article
            v-for="item in section.items"
            :key="item.slug"
            class="group cursor-pointer"
          >
            <div class="relative overflow-hidden">
              <img
                @click="goToProduct(item.slug, item.colors?.[0]?.variant_slug)"
                :src="item.currentImage || item.link_image"
                :alt="item.alt_text || item.name"
                class="w-full h-full object-cover"
                loading="lazy"
              />

              <!-- Minimal hover cue like Zara -->
              <span
                v-show="hoveredSlug === item.slug"
                class="absolute top-3 right-3 text-[10px] md:text-xs tracking-widest bg-background_color/80 px-2 py-1"
              >VIEW</span>
            </div>

            <!-- TEXT BLOCK UNDER CARD -->
            <div class="pt-3 md:pt-4 text-left">
              <h3 class="uppercase tracking-wider text-sm font-normal truncate">{{ item.name }}</h3>
              <div class="mt-1 flex items-center gap-2">
                <!-- Tiny color swatches (existing logic kept) -->
                <div
                  v-for="(color, cIdx) in limitedColors(item.colors)"
                  :key="color.variant_slug || cIdx"
                  class="relative"
                  @mouseenter="onEnterColor(item, color)"
                  @mouseleave="onLeaveColor(item)"
                >
                  <img
                    :src="color.avatar_image"
                    :alt="color.color"
                    class="h-8 w-8 object-cover border border-project_black/40"
                    loading="lazy"
                    @click="goToProduct(item.slug, color.variant_slug)"
                  />
                  <div class="absolute inset-0 pointer-events-none transition-opacity duration-200 w-8 h-8 bg-text_color" :class="isColorHovered(item, color) ? 'opacity-100' : 'opacity-0'" >
                  <Icon
                    name="lucide:square-arrow-out-up-right"
                    class="absolute inset-0 w-4 h-4 z-10 text-background_color m-auto"
                    
                  />
                </div>
                </div>
                <span v-if="extraColorsCount(item.colors) > 0" class="text-[10px] md:text-xs">+{{ extraColorsCount(item.colors) }}</span>
              </div>
              <p class="mt-1 text-xs font-light">€{{ parseFloat(item.price).toFixed(2) }}</p>
            </div>
          </article>
        </div>
      </div>

      <!-- TEXT SECTIONS FROM COLLECTION (images ignored) -->
      <div v-else-if="section.type === 'text'" class="py-6 md:py-14">
        <div class="max-w-none md:max-w-7xl">
          <h4 class="uppercase tracking-wider text-xs md:text-sm mb-3">{{ section.heading }}</h4>
          
          <div class="flex flex-col max-w">
            <span
              v-for="(line, i) in splitText(section.text)"
              :key="i"
              class="px-3 py-1 my-1 text-sm md:text-base leading-relaxed tracking-wide max-w-4xl bg-text_color text-background_color"
            >
              {{ line }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

// Props: pass ALL products (already fetched) and the collection object
const props = defineProps({
  products: { type: Array, default: () => [] },
  collection: { type: Object, default: () => ({}) },
})

const router = useRouter()
const hoveredSlug = ref(null)
const hoveredColorBySlug = ref({})



function isColorHovered(item, color) {
  return hoveredColorBySlug.value[item.slug] === color.variant_slug
}

function onEnterColor(item, color) {
  hoveredSlug.value = item.slug
  item.currentImage = color.avatar_image
  hoveredColorBySlug.value[item.slug] = color.variant_slug
}

function onLeaveColor(item) {
  item.currentImage = item.defaultImage || item.link_image
  hoveredColorBySlug.value[item.slug] = null
  hoveredSlug.value = null
}

function goToProduct(slug, variant_slug) {
  if (!slug || !variant_slug) return
  router.push(`/product/${slug}/${variant_slug}`)
}

// Limit visible swatches like the reference UI, but keep logic intact
function limitedColors(colors = []) {
  return colors.slice(0, 2)
}
function extraColorsCount(colors = []) {
  return Math.max(0, colors.length - 2)
}

// --- LAYOUT LOGIC -----------------------------------------------------------
// Build sections in the order:
// 3 products → text → 2 products → 3 products → text → 2 products → text → 3 products → ... until products are exhausted

const textPool = computed(() => {
  // pull available non-empty text fields from the collection, ignoring images
  const c = props.collection || {}
  const texts = [
    c.element_one,
    c.element_two,
    c.element_three,
    c.element_four,
  ].filter(Boolean)
  return texts.length ? texts : [''] // ensure at least empty string
})

const sections = computed(() => {
  const items = [...props.products]
  const result = []
  let i = 0 // product index
  let textIndex = 0

  // repeating pattern blueprint; we'll loop over it until we run out of products
  const pattern = [
    { type: 'grid', count: 3 },
    { type: 'text' },
    { type: 'grid', count: 2 },
    { type: 'grid', count: 3 },
    { type: 'text' },
    { type: 'grid', count: 2 },
    { type: 'text' },
    { type: 'grid', count: 3 },
  ]

  let p = 0 // index in pattern
  while (i < items.length) {
    const step = pattern[p]

    if (step.type === 'grid') {
      if (i >= items.length) break
      const slice = items.slice(i, i + step.count)
      if (!slice.length) break
      result.push({ type: 'grid', count: step.count, items: slice })
      i += slice.length
    } else if (step.type === 'text') {
      // Insert a text block only if at least one product remains ahead to avoid trailing text only
      if (i < items.length) {
        result.push({
          type: 'text',
          heading: defaultHeading(textIndex),
          text: textPool.value[textIndex % textPool.value.length],
        })
        textIndex++
      }
    }

    p = (p + 1) % pattern.length
  }

  return result
})

function splitText(text = '') {
  // Split by sentence or newline; adjust as needed
  return text
    .split(/(?<=[.!?])\s+|\n+/) // split by punctuation + space OR newline
    .filter(Boolean)            // remove empty strings
}

function defaultHeading(idx) {
  // Simple rotating headings; swap with collection.name if you prefer a fixed one
  const base = props.collection?.name || 'Collection'
  return idx === 0 ? `${base}` : `${base} — ${idx + 1}`
}
</script>

<style scoped>
/* Lean visuals with generous whitespace like the refs */
</style>
