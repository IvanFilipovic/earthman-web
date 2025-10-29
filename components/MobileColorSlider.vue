<template>
  <div v-if="colors && colors.length > 0" class="block md:hidden">
    <div ref="sliderRef" class="keen-slider">
      <div
        v-for="(color, i) in colors"
        :key="i"
        class="keen-slider__slide"
      >
        <img
          :src="color.avatar_image"
          :alt="color.color"
          class="w-full h-auto object-cover border border-text_color/30"
          loading="lazy"
          @click="handleClick(color)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useKeenSlider } from 'keen-slider/vue.es'
import type { KeenSliderInstance } from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

interface ProductColor {
  color: string
  avatar_image: string
  variant_slug: string
}

interface Props {
  colors: ProductColor[]
}

interface Emits {
  (e: 'go', variantSlug: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const current = ref(0)

const [sliderRef, slider] = useKeenSlider({
  loop: true,
  initial: 0,
  slideChanged(s: KeenSliderInstance) {
    current.value = s.track.details.rel
  },
})

watch(
  () => props.colors?.length,
  async () => {
    await nextTick()
    if (slider.value) {
      slider.value.update()
      slider.value.moveToIdx(0)
      current.value = 0
    }
  }
)

function handleClick(color: ProductColor): void {
  if (color.variant_slug) {
    emit('go', color.variant_slug)
  }
}
</script>