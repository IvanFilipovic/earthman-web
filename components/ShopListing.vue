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
              @click="goToProduct(item.slug, item.colors?.[0]?.variant_slug)"
              :src="item.currentImage || item.link_image"
              :alt="item.alt_text || item.name"
              class="hidden md:block max-w-[100%] h-auto object-cover transition-opacity duration-200 border border-text_color/30"
              loading="lazy"
            />
            <MobileColorSlider
              :colors="limitedColors(item.colors)"
              @go="(variantSlug) => goToProduct(item.slug, variantSlug)"
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

          <!-- TEXT BLOCK -->
          <div class="py-3 text-left">
            <p class="text-xs tracking-wider font-extralight">{{ item.category }}</p>

            <h3 class="uppercase tracking-wider text-[13px] md:text-sm font-normal truncate py-1">{{ item.name }}</h3>

            <div class="mt-1 flex items-center gap-2">
              <div
                v-for="color in limitedColors(item.colors)"
                :key="color.variant_slug"
                class="relative group"
                @mouseenter="onEnterColor(item, color)"
                @mouseleave="onLeaveColor(item)"
              >
                <img
                  @mouseenter="hoveredSlug = item.slug"
                  @mouseleave="hoveredSlug = null"
                  :src="color.avatar_image"
                  :alt="color.color"
                  class="w-7 h-7 md:h-8 md:w-8 object-cover"
                  loading="lazy"
                  @click="goToProduct(item.slug, color.variant_slug)"
                />

                <!-- overlay icon; doesn't block mouse so leave works -->
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

defineProps({ products: { type: Array, default: () => [] } })

const hoveredSlug = ref(null)
const router = useRouter()
const hoveredColorBySlug = ref({})

function isColorHovered(item, color) {
  return hoveredColorBySlug.value[item.slug] === color.variant_slug
}

function onEnterColor(item, color) {
  item.currentImage = color.avatar_image
  hoveredColorBySlug.value[item.slug] = color.variant_slug
}

function onLeaveColor(item) {
  item.currentImage = item.defaultImage || item.link_image
  hoveredColorBySlug.value[item.slug] = null
}
function extraColorsCount(colors = []) {
  return Math.max(0, colors.length - 2)
}
function limitedColors(colors = []) {
  return colors.slice(0, 2)
}
function goToProduct(slug, variant_slug) {
  if (!slug || !variant_slug) return
  router.push(`/product/${slug}/${variant_slug}`)
}
</script>
