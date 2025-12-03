<template>
  <div class="navigation-wrapper">
    <div ref="sliderRef" class="keen-slider">
      <div
        v-for="(img, idx) in images"
        :key="img.id ?? idx"
        class="keen-slider__slide"
      >
        <img
          v-bind="getImageAttrs(img.image)"
          :alt="img.alt_text || productName"
          loading="lazy"
          class="gallery-image"
        />
      </div>
    </div>

    <button
      type="button"
      class="arrow arrow--left"
      :class="{ 'arrow--disabled': atStart }"
      :aria-disabled="atStart"
      aria-label="Previous image"
      @click="prev"
    >
      <Icon name="lucide:chevron-left" class="w-8 h-8 my-auto" />
    </button>

    <button
      type="button"
      class="arrow arrow--right"
      :class="{ 'arrow--disabled': atEnd }"
      :aria-disabled="atEnd"
      aria-label="Next image"
      @click="next"
    >
      <Icon name="lucide:chevron-right" class="w-8 h-8 my-auto" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useKeenSlider } from 'keen-slider/vue.es'
import type { KeenSliderInstance } from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

interface GalleryImage {
  id?: number
  image: string
  alt_text: string
}

interface Props {
  images: GalleryImage[]
  productName: string
}

const props = defineProps<Props>()

const currentSlide = ref(0)
const { getResponsiveImages } = useImageTransform()

const getImageAttrs = (url: string) => {
  return getResponsiveImages(
    url,
    [400, 800, 1200, 1600], // Widths for srcset
    '(max-width: 1023px) 100vw, 33vw' // Desktop: 8/12 grid = ~66vw
  )
}


const [sliderRef, slider] = useKeenSlider({
  initial: 0,
  slidesPerView: 1,
  loop: true,
  slideChanged(s: KeenSliderInstance) {
    currentSlide.value = s.track.details.rel
  },
})

function prev(): void {
  slider.value?.prev()
}

function next(): void {
  slider.value?.next()
}

const atStart = computed(() => false)
const atEnd = computed(() => false)
</script>

<style scoped>
.navigation-wrapper {
  position: relative;
}

.keen-slider {
  width: 100%;
}

.gallery-image {
  transition: all 0.9s ease;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  background: var(--background_color);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.arrow {
  width: 44px;
  height: 44px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #252525;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;
}

.arrow:hover:not(.arrow--disabled) {
  background: #252525;
  color: #e2e2e2;
}

.arrow--left {
  left: 8px;
}

.arrow--right {
  right: 8px;
}

.arrow--disabled {
  opacity: 0.45;
  cursor: not-allowed;
  pointer-events: none;
}
</style>