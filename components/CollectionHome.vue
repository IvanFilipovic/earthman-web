<template>
  <!--CollectionHome.vue-->
  <div class="bg-text_color">
    <!-- Pages: either one or two items, full viewport height -->
    <div
      v-for="(group, pageIndex) in groups"
      :key="pageIndex"
      :ref="el => (groupRefs[pageIndex] = el)"
      class="relative grid grid-cols-1 min-h-screen w-full gap-1 mb-1"
      :class="group.length > 1 ? 'md:grid-cols-2' : ''"
    >
      <!-- Tile(s) -->
      <div
        v-for="item in group"
        :key="item.id"
        class="relative h-full w-full bg-cover bg-center"
        :style="{ backgroundImage: `url(${item.element_one_image})` }"
      >
      <div class="absolute inset-0 bg-black bg-opacity-25"></div>
        <div class="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center text-background_color px-4">
          <h2 class="text-base sm:text-lg md:text-2xl font-medium md:font-bold mb-4 bg-text_color/70 uppercase tracking-wider py-1
          ">{{ item.name }}</h2>
          <NuxtLink
            :to="`/collections/${encodeURIComponent(item.slug)}`"
            class="primary-btn sweep group inline-flex items-center justify-center px-8 
             py-2"
          >
            <span class="btn-label">View project</span>
            <span class="sweep-overlay" aria-hidden="true"></span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Loading & Error -->
    <div v-if="pending" class="fixed inset-0 flex items-center justify-center">
      <p class="text-xl">Loading collections…</p>
    </div>
    <div v-if="error" class="fixed inset-0 flex items-center justify-center">
      <p class="text-xl text-red-600">Failed to load collections.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const config = useRuntimeConfig()
const { data: collections, pending, error } = useFetch(
  `${config.public.apiBase}/public/collections/`
)

const windowWidth = ref(0)
onMounted(() => {
  // initialize & listen for resizes
  windowWidth.value = window.innerWidth
  const onResize = () => (windowWidth.value = window.innerWidth)
  window.addEventListener('resize', onResize)
  onUnmounted(() => window.removeEventListener('resize', onResize))
})

// decide how many per page: 1 on <768px, else 2
const itemsPerPage = computed(() => (windowWidth.value < 768 ? 1 : 2))

// chunk into dynamic groups
const groups = computed(() => {
  const arr = collections.value || []
  const per = itemsPerPage.value
  const pages = []
  for (let i = 0; i < arr.length; i += per) {
    pages.push(arr.slice(i, i + per))
  }
  return pages
})

const groupRefs = ref([])

function scrollToPage(idx) {
  const el = groupRefs.value[idx]
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style>
html,
body {
  scroll-behavior: smooth;
}
</style>
