<template>
  <div
    class="grid grid-cols-2 md:grid-cols-4 overflow-y-auto pt-8 gap-x-4 md:gap-x-8 lg:gap-x-24"
  >
    <div
      v-for="i in count"
      :key="i"
      class="col-span-1 pb-10 animate-pulse"
    >
      <!-- Image placeholder -->
      <div class="overflow-hidden">
        <div
          class="w-full border"
          :style="skeletonStyle"
        >
          <!-- keep a consistent image ratio -->
          <div class="w-full h-[275.73] md:h-[407.35px] lg:h-[568.723px] aspect-[3/4]" :style="skeletonStyle"></div>
        </div>
      </div>

      <!-- Text block -->
      <div class="py-3">
        <!-- Category -->
        <div class="h-3 w-24" :style="skeletonStyle"></div>

        <!-- Title -->
        <div class="mt-2 h-4 w-3/4" :style="skeletonStyle"></div>

        <!-- Color chips -->
        <div class="mt-3 flex items-center gap-2">
          <div class="w-7 h-7 md:w-8 md:h-8 rounded" :style="skeletonStyle"></div>
          <div class="w-7 h-7 md:w-8 md:h-8 rounded" :style="skeletonStyle"></div>
        </div>

        <!-- Price -->
        <div class="mt-3 h-4 w-16" :style="skeletonStyle"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  count?: number
  animate?: boolean
}>(), {
  count: 12,
  animate: true,
})

// single source of truth for the skeleton color
const skeletonStyle = {
  backgroundColor: '#c6c5c5',
  borderColor: '#c6c5c5',
}
</script>
