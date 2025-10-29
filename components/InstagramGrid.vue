<template>
  <section class="instagram-grid max-w-full mx-auto px-4 md:px-8 py-10">
    <h2 class="instagram-title text-2xl md:text-3xl font-medium text-center mb-8 uppercase">
      #Earthman
    </h2>

    <div class="grid grid-cols-12 gap-4 auto-rows-[180px] md:auto-rows-[240px]">
      <template v-for="(post, i) in visible" :key="post.id ?? i">
        <div :class="slotClass(i)" class="instagram-item relative overflow-hidden border border-text_color/30">
          <img
            :src="post.image"
            :alt="post.alt || 'Instagram post'"
            class="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div class="absolute inset-0 bg-black/0 hover:bg-black/30 transition"></div>
          <NuxtLink 
            :to="post.link || 'https://www.instagram.com'" 
            target="_blank" 
            class="absolute inset-0 grid place-content-center opacity-0 hover:opacity-100 transition bg-background_color/50"
          >
            <div class="flex flex-col items-center gap-3 p-6 rounded-lg">
              <Icon name="lucide:instagram" class="w-8 h-8" />
            </div>
          </NuxtLink>
        </div>
      </template>
    </div>

    <div class="flex justify-center pt-10">
      <button
        type="button"
        class="btn btn--secondary"
        @click="loadMore"
      >
        <span class="btn__text">See All</span>
        <span class="btn__fill"></span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
interface InstagramPost {
  id?: string | number
  image: string
  link?: string
  alt?: string
}

interface Props {
  posts: InstagramPost[]
  initial?: number
  step?: number
}

const props = withDefaults(defineProps<Props>(), {
  initial: 7,
  step: 6
})

const show = ref(props.initial)

const visible = computed(() => (props.posts || []).slice(0, show.value))

function loadMore(): void {
  show.value += props.step
}

function slotClass(index: number): string {
  switch (index) {
    case 0:
      return 'col-span-12 md:col-span-6 md:row-span-2 h-auto'
    case 1:
      return 'col-span-6 md:col-span-2'
    case 2:
      return 'col-span-6 md:col-span-2'
    case 3:
      return 'col-span-12 md:col-span-2'
    case 4:
      return 'col-span-6 md:col-span-2'
    case 5:
      return 'col-span-6 md:col-span-2'
    case 6:
      return 'col-span-12 md:col-span-2'
    default:
      return 'col-span-12 sm:col-span-6 md:col-span-4'
  }
}
</script>