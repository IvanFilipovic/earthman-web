<template>
  <section>
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-6 gap-6 border-b border-text_color/30">
      <div class="w-full md:w-1/2">
        <div class="image bg-cover bg-center bg-transparent h-40 flex justify-center max-w-[100%]">
        </div>
      </div>

      <div class="w-full md:w-1/2 flex flex-col">
        <AppNavigation :dark="false" />
        <div class="flex gap-3 justify-end w-full">
            <div class="flex items-center gap-3">
                <span class="uppercase text-xs tracking-widest ml-4">View</span>
                <button
                    v-for="p in totalPages"
                    :key="p"
                    :class="p === page ? 'underline' : 'opacity-60'"
                    class="text-sm uppercase tracking-widest"
                    @click="page = p"
                >{{ p }}</button>

                <button class="text-md uppercase tracking-widest px-4" @click="filterOpen = true">Filters</button>
            </div>
        </div>
      </div>
    </div>
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
    <ShopListing class="mt-6" :products="products" />

    <ClientOnly>
      <FilterPanel
        :open="filterOpen"
        v-model="filters"
        :facets="facets"
        @update:open="filterOpen = $event"
      />
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import AppNavigation from '~/components/AppNavigation.vue'

const config = useRuntimeConfig()

const router = useRouter()
const route = useRoute()
const gender = ref(route.query.gender === 'male' ? 'male' : 'female')

watch(
  () => route.query.gender,
  (g) => {
    const normalized = g === 'male' ? 'male' : 'female'
    if (gender.value !== normalized) {
      gender.value = normalized
    }
  },
  { immediate: true }
)

// when clicking local buttons, also push to the URL
function setGender(value: 'male' | 'female') {
  if (gender.value !== value) {
    gender.value = value
    router.replace({ query: { ...route.query, gender: value } })
  }
}

/* Active/inactive styles */
function genderBtnClass(target: 'male' | 'female') {
  const base = 'pl-8 py-1 text-sm text-text_color'
  return [base, gender.value === target ? 'font-bold' : 'bg-background_color'].join(' ')
}

/* --------------------------
   Page + Filters + Data
-------------------------- */
interface Product {
  id?: number
  name?: string
  link_image?: string
  defaultImage?: string
  currentImage?: string
  [key: string]: any
}
const products = ref<Product[]>([])
const count = ref(0)
const page = ref(1)
const pageSize = 12
const totalPages = computed(() => Math.max(1, Math.ceil(count.value / pageSize)))
const filterOpen = ref(false)
const filters = ref({ categories: [] as number[], sizes: [] as string[], colors: [] as string[] })

const facets = ref({
  categories: [] as { id: number; name: string }[],
  sizes: [] as { name: string }[],
  colors: [] as { name: string; image: string }[]
})

function buildQuery() {
  const p = new URLSearchParams()
  filters.value.categories.forEach(id => p.append('category', id.toString()))
  filters.value.sizes.forEach(s => p.append('size', s))
  filters.value.colors.forEach(c => p.append('color', c))
  p.set('gender', gender.value)  // sends "male" or "female"
  p.set('page', String(page.value))
  p.set('page_size', String(pageSize))
  return p.toString().replace(/\+/g, '%20')
}

/* --------------------------
   Fetch functions
-------------------------- */
async function fetchCategories () {
  try {
    const res = await $fetch(`${config.public.apiBase}/public/categories/`)
    facets.value.categories = Array.isArray(res) ? res : []
  } catch {
    facets.value.categories = []
  }
}
async function fetchSizes () {
  try {
    const res = await $fetch(`${config.public.apiBase}/public/sizes/`)
    facets.value.sizes = Array.isArray(res) ? res : []
  } catch {
    facets.value.sizes = []
  }
}
async function fetchColors () {
  try {
    const res = await $fetch(`${config.public.apiBase}/public/colors/`)
    facets.value.colors = Array.isArray(res)
      ? res.map((c: any) => ({ name: c.name, image: c.image }))
      : []
  } catch {
    facets.value.colors = []
  }
}
async function fetchProducts() {
  const res = await $fetch(`${config.public.apiBase}/public/products-all/?${buildQuery()}`, {
    headers: {
      'ngrok-skip-browser-warning': 'true',
    },
  }) as { count: number; results: any[] }
  count.value = res.count
  products.value = res.results.map(r => ({
    ...r,
    defaultImage: r.link_image,
    currentImage: r.link_image
  }))
}

/* --------------------------
   Watchers + Lifecycle
-------------------------- */
watch([filters, page, gender, route], fetchProducts)

onMounted(async () => {
  await Promise.all([fetchCategories(), fetchColors(), fetchSizes()])
  await fetchProducts()
})
</script>

<style scoped>
.image {
background-image: url("public/logo/black_logo1.png");
}
</style>
