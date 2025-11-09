<template>
  <!--ShopListingSkeleton.vue - Advanced Version with Tailwind Integration-->
  <div class="grid grid-cols-2 md:grid-cols-4 overflow-y-auto pt-8 gap-x-4 md:gap-x-8 lg:gap-x-24">
    <article
      v-for="i in count"
      :key="i"
      class="col-span-1 pb-10"
      :class="{ 'animate-pulse': animate }"
      aria-busy="true"
      aria-label="Loading product"
    >
      <!-- Image Skeleton with Responsive Aspect Ratio -->
      <div class="relative w-full overflow-hidden">
        <div 
          class="w-full aspect-[3/4] bg-project_gray border border-project_gray"
          role="img"
          aria-label="Loading product image"
        ></div>
      </div>

      <!-- Product Info Skeleton -->
      <div class="py-3 text-left space-y-2">
        <!-- Category Skeleton -->
        <div 
          class="h-3 w-20 bg-project_gray rounded"
          role="status"
          aria-label="Loading category"
        ></div>

        <!-- Title Skeleton -->
        <div 
          class="h-4 w-3/4 bg-project_gray rounded"
          role="status"
          aria-label="Loading product name"
        ></div>

        <!-- Color Swatches Skeleton -->
        <div class="mt-1 flex items-center gap-2" aria-label="Loading color options">
          <div 
            v-for="j in 3"
            :key="j"
            class="w-7 h-7 md:w-8 md:h-8 bg-project_gray border border-project_gray"
            role="status"
          ></div>
        </div>

        <!-- Price Skeleton -->
        <div 
          class="h-3 w-16 bg-project_gray rounded"
          role="status"
          aria-label="Loading price"
        ></div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
interface Props {
  count?: number
  animate?: boolean
}

withDefaults(defineProps<Props>(), {
  count: 12,
  animate: true,
})
</script>