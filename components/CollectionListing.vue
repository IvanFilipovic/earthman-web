<template>
  <Suspense>
    <!-- Renders only after useFetch resolves -->
    <template #default>
      <div class="grid grid-cols-1 md:grid-cols-2 w-full h-auto lg:h-screen overflow-hidden">
        <div
          v-for="collection in collections"
          :key="collection.id"
          class="relative w-full pt-[100%] bg-cover bg-center overflow-hidden"
          :style="{ backgroundImage: `url(${collection.element_one_image})` }"
        >
          <div
            class="overlay absolute top-0 left-0 right-0 flex flex-col md:flex-row justify-end md:justify-end h-full"
          >
            <div
              class="flex flex-col space-y-3 md:space-y-2 px-8 py-8 md:pb-8 md:px-8
           items-center md:items-end justify-end md:w-[60%]
           text-center md:text-right h-full"
            >
              <h2
                class="text-base sm:text-lg md:text-xl font-medium md:font-semibold 
                      text-text_color bg-background_color/60 px-4 py-1 uppercase tracking-wider w-[60%] md:w-full
                      inline-flex items-center justify-center"
              >
                {{ collection.name }}
              </h2>

              <NuxtLink
                :to="`/collections/${encodeURIComponent(collection.slug)}`"
                class="primary-btn sweep group inline-flex items-center justify-center px-4 py-2 w-[60%] md:w-full">
                <span class="btn-label">View project</span>
                <span class="sweep-overlay" aria-hidden="true"></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Shown while loading -->
    <template #fallback>
      <div class="flex items-center justify-center h-screen">
        Loading collections…
      </div>
    </template>
  </Suspense>
</template>

  
<script setup>
const config = useRuntimeConfig()
  const { data: collections, pending, error } = useFetch(
    `${config.public.apiBase}/public/collections/`
  )
</script>
<style scoped>
.overlay {
  background-color: rgba(37, 37, 37, 0.3);
  transition: background-color 0.4s ease-in-out,
              color            0.4s ease-in-out;
}

.overlay:hover {
  background-color: rgba(0, 0, 0, 0);
}
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 2 / 2 / 5; }
.div4 { grid-area: 1 / 2 / 2 / 4; }
.div5 { grid-area: 1 / 2 / 2 / 3; }
.div6 { grid-area: 1 / 2 / 2 / 3; } 
</style>