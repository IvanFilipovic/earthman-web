<template>
  <Suspense>
    <!-- Renders only after useFetch resolves -->
    <template #default>
      <div class="grid grid-cols-2 w-full h-auto lg:h-screen overflow-hidden">
        <div
          v-for="collection in collections"
          :key="collection.id"
          class="relative w-full pt-[100%] bg-cover bg-center overflow-hidden"
          :style="{ backgroundImage: `url(${collection.element_one_image})` }"
        >
          <div
            class="overlay absolute top-0 left-0 right-0 text-text_color flex flex-col justify-end h-full hover:bg-background_color"
          >
            <div class="flex flex-col space-y-2 p-4 self-end">
              <h2
                class="mb-2 text-2xl font-bold self-end bg-background_color/60 px-2"
              >
                {{ collection.name }}
              </h2>
              <NuxtLink
                :to="`/collections/${encodeURIComponent(collection.slug)}`"
                class="primary-btn px-4 py-2"
              >
                View Collection
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
  const { data: collections, pending, error } = useFetch(
    'http://127.0.0.1:8000/public/collections/'
  )
</script>
<style scoped>
.overlay {
  background-color: rgba(66, 66, 66, 0.2);
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