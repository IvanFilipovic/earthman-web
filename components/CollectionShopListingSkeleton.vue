<template>
  <!--TestCollectionListingSkeleton-ADVANCED.vue-->
  <section class="pt-8 mt-2 md:mt-6 px-4 md:px-8">
    <div class="collection-content">
      <div
        v-for="(section, idx) in skeletonSections"
        :key="idx"
        class="pb-8 md:pb-12"
        :class="{ 'animate-pulse': animate }"
      >
        <!-- Hero Layout (2 large items) -->
        <div v-if="section.type === 'hero'" class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 min-h-screen">
          <article
            v-for="i in 2"
            :key="i"
            class="relative min-h-[50vh] md:min-h-full overflow-hidden w-full"
            role="status"
            aria-busy="true"
            aria-label="Loading product"
          >
            <div class="absolute inset-0 bg-gray-300"></div>
            
            <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-background_color/80 w-full">
              <div class="space-y-3">
                <div class="h-3 w-24 bg-gray-300 rounded"></div>
                <div class="h-8 md:h-10 lg:h-12 w-3/4 bg-gray-300 rounded"></div>
                
                <div class="flex items-center gap-2">
                  <div v-for="j in 4" :key="j" class="w-8 h-8 md:w-10 md:h-10 bg-gray-300 border-2 border-background_color"></div>
                </div>

                <div class="h-10 w-32 bg-gray-300 rounded"></div>
              </div>
            </div>
          </article>
        </div>

        <!-- Triple Layout (3 items) -->
        <div v-else-if="section.type === 'triple'" class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <article
            v-for="i in section.count"
            :key="i"
            class="group"
            role="status"
            aria-busy="true"
            aria-label="Loading product"
          >
            <div class="relative w-full overflow-hidden">
              <div class="w-full aspect-[3/4] bg-gray-300 border border-gray-300"></div>
            </div>
            
            <div class="pt-3 md:pt-4 text-left space-y-2">
              <div class="h-3 w-20 bg-gray-300 rounded"></div>
              <div class="h-4 w-3/4 bg-gray-300 rounded"></div>
              
              <div class="flex items-center gap-2">
                <div v-for="j in 3" :key="j" class="w-7 h-7 md:w-8 md:h-8 bg-gray-300 border border-gray-300"></div>
              </div>
            </div>
          </article>
        </div>

        <!-- Standard/Reversed Layout (1 product + text) -->
        <div v-else>
          <div 
            class="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 lg:gap-x-24 gap-y-8"
            :class="section.type === 'reversed' ? 'md:flex md:flex-row-reverse' : ''"
          >
            <article
              class="group col-span-2 md:col-span-1"
              role="status"
              aria-busy="true"
              aria-label="Loading product"
            >
              <div class="relative w-full overflow-hidden">
                <div class="w-full aspect-[3/4] bg-gray-300 border border-gray-300"></div>
              </div>
              
              <div class="pt-3 md:pt-4 text-left space-y-2">
                <div class="h-3 w-20 bg-gray-300 rounded"></div>
                <div class="h-4 w-3/4 bg-gray-300 rounded"></div>
                
                <div class="flex items-center gap-2">
                  <div v-for="j in 3" :key="j" class="w-7 h-7 md:w-8 md:h-8 bg-gray-300 border border-gray-300"></div>
                </div>
              </div>
            </article>

            <div class="col-span-2 md:col-span-2 flex flex-col justify-center">
              <div class="h-4 w-32 bg-gray-300 rounded mb-3 px-4"></div>
              <div class="flex flex-col space-y-3">
                <div v-for="k in section.textLines" :key="k" class="h-4 bg-gray-300 rounded px-4" :class="{
                  'w-full': k === 1,
                  'w-11/12': k === 2,
                  'w-10/12': k === 3,
                  'w-9/12': k > 3
                }"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Separator -->
        <div 
          v-if="section.showSeparator && idx < skeletonSections.length - 1" 
          class="flex justify-center py-4 md:py-6"
        >
          <div class="w-64 h-px bg-gray-300"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface SkeletonSection {
  type: 'standard' | 'reversed' | 'hero' | 'triple'
  count?: number // For triple layout
  textLines?: number // For standard/reversed
  showSeparator?: boolean
}

interface Props {
  animate?: boolean
  sections?: SkeletonSection[]
}

const props = withDefaults(defineProps<Props>(), {
  animate: true,
  sections: () => [
    { type: 'standard', textLines: 3, showSeparator: true },
    { type: 'reversed', textLines: 3, showSeparator: true },
    { type: 'standard', textLines: 3, showSeparator: false },
    { type: 'hero', showSeparator: false },
    { type: 'reversed', textLines: 3, showSeparator: true },
    { type: 'standard', textLines: 3, showSeparator: false },
    { type: 'triple', count: 3, showSeparator: false },
  ]
})

const skeletonSections = computed(() => props.sections)
</script>