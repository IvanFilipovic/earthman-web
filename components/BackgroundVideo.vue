<template>
  <div :class="wrapperClasses">
    <!-- Video background -->
    <video
      class="absolute inset-0 w-full h-full object-cover"
      :src="src"
      :poster="poster"
      autoplay
      muted
      loop
      playsinline
    />
    <!-- Optional overlay (darken, gradient, etc) -->
    <div
      v-if="overlay"
      class="absolute inset-0"
      :class="overlayClasses"
    ></div>
    <!-- Your content sits on top -->
    <div class="flex flex-col items-center justify-center h-full text-background_color px-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  /** URL of your video file (mp4, webm, etc) */
  src:             { type: String, required: true },
  /** Poster image while video loads/fallback */
  poster:          { type: String, default: '' },
  /** Tailwind classes for the wrapper (size, positioning) */
  wrapperClasses:  { 
    type: String, 
    default: 'relative w-full h-screen overflow-hidden' 
  },
  /** If true, applies a dark semi‑transparent overlay */
  overlay:         { type: Boolean, default: true },
  /** Tailwind classes for the overlay */
  overlayClasses:  { 
    type: String, 
    default: 'bg-black/40' 
  },
})
</script>

<style scoped>
/* ensure the video and overlay properly sit under your content */
</style>
  