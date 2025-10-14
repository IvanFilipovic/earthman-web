<!-- pages/collection/[slug].vue -->
<template>
  <section>
    <!-- Header -->
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-6 gap-6 border-b border-text_color/30">
      <div class="w-full md:w-1/2">
        <div class="image bg-cover bg-center bg-transparent h-40 flex justify-center max-w-[100%]">
        </div>
      </div>

      <div class="w-full md:w-1/2 flex flex-col">
        <AppNavigation :dark="false" />
        <div class="flex gap-3 justify-end w-full">
            <div class="flex items-center gap-3">
                <nav class="text-md uppercase tracking-widest space-x-2 text-background_color px-4">
                  <p>{{ collection.name }}</p>
                </nav>
            </div>
        </div>
      </div>
    </div>

    <!-- Gender Switch -->
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between px-8 pt-1 gap-6">
      <div class="flex justify-end w-full">
        <div class="flex items-center">
          <button
            :class="genderBtnClass('female')"
            @click="setGender('female')"
          >WOMAN</button>
          <button
            :class="genderBtnClass('male')"
            @click="setGender('male')"
          >MAN</button>
        </div>
      </div>
    </div>

    <!-- Product Listing -->
    <CollectionShopListing
      v-if="!pending && products.length"
      :products="products"
      :collection="collection"
      @cta-click="onCtaClick"
    />
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from '#imports'

/* ──────────────────────────────
   Route + gender state
────────────────────────────── */
const route = useRoute()
const router = useRouter()
const slug = computed(() => String(route.params.slug))
const gender = ref(route.query.gender === 'male' ? 'male' : 'female')

// sync local gender ↔ route query
watch(
  () => route.query.gender,
  (g) => {
    const normalized = g === 'male' ? 'male' : 'female'
    if (gender.value !== normalized) gender.value = normalized
  },
  { immediate: true }
)

// update URL when gender changes locally
function setGender(value) {
  if (gender.value !== value) {
    gender.value = value
    router.replace({ query: { ...route.query, gender: value } })
  }
}

/* ──────────────────────────────
   UI helpers
────────────────────────────── */
function genderBtnClass(target) {
  const base = 'pl-8 py-1 text-sm text-text_color'
  return [base, gender.value === target ? 'font-bold' : 'bg-background_color'].join(' ')
}

/* ──────────────────────────────
   API calls
────────────────────────────── */
const API = 'http://127.0.0.1:8000'

// fetch collection data (not dependent on gender)
const { data: collectionData, pending: cPending } = await useAsyncData(
  () => `collection:${slug.value}`,
  () => $fetch(`${API}/public/collections/${slug.value}/`)
)

// fetch ALL products, refetches when slug or gender changes
const pageSize = 48
const { data: productsData, pending: pPending, refresh } = await useAsyncData(
  // 👇 include gender in the key so Nuxt refetches when it changes
  () => `products-all:${slug.value}:${gender.value}`,
  async () => {
    let url = `${API}/public/products-all/?page=1&page_size=${pageSize}&collection=${slug.value}&gender=${gender.value}`
    const all = []

    while (url) {
      const res = await $fetch(url)
      if (Array.isArray(res?.results)) all.push(...res.results)
      url = res?.next || null
    }

    return all
  },
  // 👇 also explicitly watch reactive sources for extra safety
  { watch: [slug, gender] }
)

/* ──────────────────────────────
   Computed + handlers
────────────────────────────── */
const pending = computed(() => cPending.value || pPending.value)
const collection = computed(() => collectionData.value || {})
const products = computed(() => productsData.value || [])

function onCtaClick() {
  if (process.client) window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
<style scoped>
.image {
background-image: url("public/logo/black_logo1.png");
}
</style>

