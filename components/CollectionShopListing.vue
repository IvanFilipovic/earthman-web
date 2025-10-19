<template>
  <section class="overflow-y-auto pt-8">
    <div v-for="(section, idx) in sections" :key="idx">
      <div v-if="section.type === 'gridWithText'" class="pb-10">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 lg:gap-x-24 gap-y-8">
          <!-- 2 regular (non-hot) products -->
          <article
            v-for="item in section.items"
            :key="item.slug"
            class="group cursor-pointer md:col-span-1"
          >
            <div class="relative overflow-hidden">
              <img
                @mouseenter="hoveredSlug = item.slug"
                @mouseleave="hoveredSlug = null"
                @click="goToProduct(item.slug, item.colors?.[0]?.variant_slug)"
                :src="item.currentImage || item.link_image"
                :alt="item.alt_text || item.name"
                class="w-full h-full object-cover border border-text_color/30"
                loading="lazy"
              />
              <button
                v-show="hoveredSlug === item.slug"
                class="absolute top-4 left-4
                      bg-text_color text-background_color tracking-wider text-xs font-light 
                      w-auto px-2 mx-auto 
                      opacity-0 transition-opacity duration-200"
                :class="{ 'opacity-100': hoveredSlug === item.slug }"
                @click="goToProduct(item.slug, item.colors?.[0]?.variant_slug)"
              >
                VIEW
              </button>
            </div>

            <div class="pt-3 md:pt-4 text-left">
              <p class="text-xs tracking-wider font-extralight">{{ item.category }}</p>

              <h3 class="uppercase tracking-wider text-sm font-normal truncate py-1">{{ item.name }}</h3>
              <div class="mt-1 flex items-center gap-2">
                <!-- color swatches -->
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
                  <div
                    class="absolute inset-0 pointer-events-none transition-opacity duration-200 w-8 h-8 bg-text_color"
                    :class="isColorHovered(item, color) ? 'opacity-100' : 'opacity-0'"
                  >
                    <Icon
                      name="lucide:square-arrow-out-up-right"
                      class="absolute inset-0 w-4 h-4 z-10 text-background_color m-auto"
                    />
                  </div>
                </div>
                <span v-if="extraColorsCount(item.colors) > 0" class="text-[10px] md:text-xs">+{{ extraColorsCount(item.colors) }}</span>
              </div>
              <!--<p class="mt-1 text-xs font-light">€{{ parseFloat(item.price).toFixed(2) }}</p>-->
            </div>
          </article>
          <div class="col-span-2 flex flex-col justify-center">
            <h4 class="uppercase tracking-wider text-xs md:text-sm mb-3">{{ section.heading }}</h4>
            <div class="flex flex-col">
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

      <div v-else-if="section.type === 'gridHot'" class="pb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 lg:gap-x-24 gap-y-8">
          <article
            v-for="item in section.items"
            :key="item.slug"
            class="group cursor-pointer"
          >
            <div class="relative overflow-hidden">
              <img
                @mouseenter="hoveredSlug = item.slug"
                @mouseleave="hoveredSlug = null"
                @click="goToProduct(item.slug, item.colors?.[0]?.variant_slug)"
                :src="item.currentImage || item.link_image"
                :alt="item.alt_text || item.name"
                class="w-full h-full object-cover border border-text_color/30"
                loading="lazy"
              />
              <button
                v-show="hoveredSlug === item.slug"
                class="absolute top-4 left-4
                      bg-text_color text-background_color tracking-wider text-xs font-light 
                      w-auto px-2 mx-auto 
                      opacity-0 transition-opacity duration-200"
                :class="{ 'opacity-100': hoveredSlug === item.slug }"
                @click="goToProduct(item.slug, item.colors?.[0]?.variant_slug)"
              >
                VIEW
              </button>
            </div>

            <div class="pt-3 md:pt-4 text-left">
              <p class="text-xs tracking-wider font-extralight">{{ item.category }}</p>

              <h3 class="uppercase tracking-wider text-sm font-normal truncate py-1">{{ item.name }}</h3>
              <div class="mt-1 flex items-center gap-2">
                <!-- color swatches -->
                <div
                  v-for="(color, cIdx) in limitedColors(item.colors)"
                  :key="color.variant_slug || cIdx"
                  class="relative"
                  @mouseenter="onEnterColor(item, color)"
                  @mouseleave="onLeaveColor(item)"
                >
                  <img
                    @mouseenter="hoveredSlug = item.slug"
                    @mouseleave="hoveredSlug = null"
                    :src="color.avatar_image"
                    :alt="color.color"
                    class="h-8 w-8 object-cover border border-project_black/40"
                    loading="lazy"
                    @click="goToProduct(item.slug, color.variant_slug)"
                  />
                  <div
                    class="absolute inset-0 pointer-events-none transition-opacity duration-200 w-8 h-8 bg-text_color"
                    :class="isColorHovered(item, color) ? 'opacity-100' : 'opacity-0'"
                  >
                    <Icon
                      name="lucide:square-arrow-out-up-right"
                      class="absolute inset-0 w-4 h-4 z-10 text-background_color m-auto"
                    />
                  </div>
                </div>
                <span v-if="extraColorsCount(item.colors) > 0" class="text-[10px] md:text-xs">+{{ extraColorsCount(item.colors) }}</span>
              </div>
              <!--<p class="mt-1 text-xs font-light">€{{ parseFloat(item.price).toFixed(2) }}</p>-->
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'



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

function limitedColors(colors = []) {
  return colors.slice(0, 2)
}
function extraColorsCount(colors = []) {
  return Math.max(0, colors.length - 2)
}

/* ──────────────────────────────
   TEXT + LAYOUT LOGIC
────────────────────────────── */
const textPool = computed(() => {
  const c = props.collection || {}
  const texts = [c.element_one, c.element_two, c.element_three, c.element_four].filter(Boolean)
  return texts.length ? texts : ['']
})

const sections = computed(() => {
  const all = [...props.products]
  const hotProducts = all.filter(p => p.hot === true)
  const regularProducts = all.filter(p => !p.hot)

  const result = []
  let textIndex = 0
  let regIndex = 0
  let hotIndex = 0

  while (regIndex < regularProducts.length || hotIndex < hotProducts.length) {
    // 2 regular + text
    const regSlice = regularProducts.slice(regIndex, regIndex + 2)
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

    // 2 hot products
    const hotSlice = hotProducts.slice(hotIndex, hotIndex + 2)
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

function splitText(text = '') {
  return text
    .split(/(?<=[.!?])\s+|\n+/)
    .filter(Boolean)
}

function defaultHeading(idx) {
  const base = props.collection?.name || 'Collection'
  return idx === 0 ? base : `${base} — ${idx + 1}`
}
</script>

<style scoped>
/* Keep minimalist style */
</style>
