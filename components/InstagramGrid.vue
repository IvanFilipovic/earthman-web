<template>
  <section class="max-w-full mx-auto px-4 md:px-8 py-10">
    <h2 class="text-2xl md:text-3xl font-medium text-center mb-8">#Earthman</h2>

    <!-- 12-col grid; auto row height so the left tile can span 2 rows -->
    <div class="grid grid-cols-12 gap-4 auto-rows-[180px] md:auto-rows-[240px]">
      <template v-for="(post, i) in visible" 
          :key="post.id ?? i"
        >
        <div :class="slotClass(i)" class="relative overflow-hidden border border-text_color/30">
          <!-- image -->
          <img
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-bottom"
            :src="post.image"
            :alt="post.alt || 'Instagram post'"
            class="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />

          <!-- hover dim -->
          <div class="absolute inset-0 bg-black/0 hover:bg-black/30 transition"></div>

          <!-- overlay content -->
          <NuxtLink to="https://www.enterprise.hr" target="_blank" class="absolute inset-0 grid place-content-center opacity-0 hover:opacity-100 transition bg-background_color">
            <div class="flex flex-col items-center gap-3">
              <span class="grid place-items-center">
              <Icon name="lucide:instagram" class="w-8 h-8 my-auto mx-1"/>
                
              </span>
            </div>
          </NuxtLink>
        </div>
      </template>
    </div>

    <!-- Load more -->
    <div class="flex justify-center pt-10">
      <button
        class="secondary-btn sweep-secondary px-14 py-3"
        @click="loadMore"
      >
        <span class="btn-label">SEe all</span>
        <span class="sweep-overlay bg-secondary_button_color" aria-hidden="true"></span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type Post = {
  id?: string | number
  image: string
  link?: string
  alt?: string
}

const props = defineProps<{
  posts: Post[]
  initial?: number
  step?: number
}>()

/** how many to show */
const show = ref(props.initial ?? 7)
const step = computed(() => props.step ?? 6)
const visible = computed(() => (props.posts || []).slice(0, show.value))

function loadMore() { show.value += step.value }

/** map slot index -> grid classes to reproduce the reference layout */
function slotClass(i: number) {
  // mobile: fallback automatically because we only apply md: rules below
  switch (i) {
    case 0: // big left tile (2 rows)
      return 'col-span-12 md:col-span-6 md:row-span-2 h-auto';
    case 1: return 'col-span-6 md:col-span-2';
    case 2: return 'col-span-6 md:col-span-2';
    case 3: return 'col-span-12 md:col-span-2';
    case 4: return 'col-span-6 md:col-span-2';
    case 5: return 'col-span-6 md:col-span-2';
    case 6: return 'col-span-12 md:col-span-2';
    default:
      // any extra tiles render in a simple 3-up below (same look)
      return 'col-span-12 sm:col-span-6 md:col-span-4';
  }
}
</script>

<style scoped>
/* uses your existing secondary sweep classes */
</style>
