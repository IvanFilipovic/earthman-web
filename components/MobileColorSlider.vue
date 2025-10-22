<template>
  <div v-if="colors?.length" class="block md:hidden">
    <div ref="sliderRef" class="keen-slider">
      <div
        v-for="(c, i) in colors"
        :key="c.variant_slug || i"
        class="keen-slider__slide"
      >
        <img
          :src="c.avatar_image"
          :alt="c.color"
          class="w-full h-auto object-cover transition-opacity duration-200 border border-text_color/30"
          loading="lazy"
          @click="$emit('go', c.variant_slug)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useKeenSlider } from 'keen-slider/vue.es'
import 'keen-slider/keen-slider.min.css'

type ColorItem = {
  variant_slug: string
  avatar_image: string
  color: string
}

const props = defineProps<{
  colors: ColorItem[] | null | undefined
}>()

const current = ref(0)
const [sliderRef, slider] = useKeenSlider({
  loop: true,
  initial: 0,
  slideChanged(s) {
    current.value = s.track.details.rel
  },
})

// keep slider in sync if the color list changes (e.g., different product data)
watch(
  () => props.colors?.length ?? 0,
  async () => {
    await nextTick()
    if (slider.value) {
      slider.value.update()
      slider.value.moveToIdx(0)
      current.value = 0
    }
  }
)

const dots = computed(() =>
  slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : []
)
</script>
