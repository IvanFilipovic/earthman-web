<template>
    <div class="flex flex-wrap overflow-y-auto pt-8 px-8">
      <div
        v-for="item in products"
        :key="item.slug"
        class="w-1/2 md:w-1/4 cursor-pointer"
      >
        <div class="bg-background_color overflow-hidden w-[250px]">
          <!-- MAIN IMAGE -->
          <div class="relative pb-[100%] bg-background_color">
            <img
                @click="goToProduct(item.slug,item.colors[0].variant_slug)"
                :src="item.currentImage"
                :alt="item.alt_text || item.name"
                class="absolute inset-0 max-w-[100%] h-full object-cover transition-opacity duration-200 mx-0 border border-project_black"
                loading="lazy"
            />
          </div>
  
          <div class="py-3 mx-auto">
            <!-- PRODUCT NAME -->
            <h3 class="font-light text-lg truncate">{{ item.name }}</h3>
  
            <!-- COLOR SWATCHES -->
            <div class="flex space-x-2 mt-2">
              <img
                v-for="color in item.colors"
                @click="goToProduct(item.slug, color.variant_slug)"
                :key="color.variant_slug"
                :src="color.avatar_image"
                :alt="color.color"
                class="max-w-[100%] h-10 object-cover"
                loading="lazy"
                @mouseenter="item.currentImage = color.avatar_image"
                @mouseleave="item.currentImage = item.defaultImage"
              />
            </div>
  
            <!-- PRICE -->
            <p class="mt-2 font-light">
              €{{ parseFloat(item.price).toFixed(2) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const products = ref([])
  const router = useRouter()
  
  async function fetchProducts() {
    const res = await $fetch('http://127.0.0.1:8000/public/products-all/?new=false&page=1&page_size=12')
    products.value = res.results.map(r => ({
      ...r,
      defaultImage: r.link_image,
      currentImage: r.link_image
    }))
  }
  
  function goToProduct(slug, variant_slug) {
    router.push(`/product/${slug}/${variant_slug}`)
  }
  
  onMounted(fetchProducts)
  </script>
  
  <style scoped>
  /* smooth fade when swapping images */
  img[loading] {
    transition: opacity 0.2s ease-in-out;
  }
  </style>
  