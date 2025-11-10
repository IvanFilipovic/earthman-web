<template>
  <section>
    <AppNavigation :dark="false" />
    
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-6">
          <div class="flex justify-between w-full">
              <div class="flex gap-3 justify-start w-full">
              <div class="flex items-center gap-3">
                <button 
                  type="button"
                  class="text-xs uppercase tracking-widest items-center flex gap-2"
                  @click="filterOpen = true"
                >
                  <Icon name="lucide:sliders-horizontal" class="w-4 h-4" />
                  <span class="my-auto">Filters</span>
                </button>
              </div>
            </div>
            <div class="flex gap-3 justify-end w-full">
              <div class="flex items-center gap-3">
                <span class="uppercase text-xs tracking-widest ml-4">Page</span>
                <button
                  v-for="p in totalPages"
                  :key="p"
                  type="button"
                  :class="p === page ? 'underline' : 'opacity-60'"
                  class="text-sm uppercase tracking-widest"
                  @click="setPage(p)"
                >
                  {{ p }}
                </button>
              </div>
            </div>

          </div>
        </div>

        <ShopListingskeleton v-if="loading" class="mt-2 md:mt-6 px-4 md:px-8" :count="8" />
        <ShopListing v-else class="mt-2 md:mt-6 px-4 md:px-8" :products="products" />

        <ClientOnly>
          <FilterPanel
            :open="filterOpen"
            v-model="filters"
            :facets="facets"
            @update:open="filterOpen = $event"
          />
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let ScrollSmoother: any = null
try {
  ScrollSmoother = (await import('gsap/ScrollSmoother')).ScrollSmoother
} catch {}

gsap.registerPlugin(ScrollTrigger)
if (ScrollSmoother) gsap.registerPlugin(ScrollSmoother as any)

interface ProductColor {
  color: string
  avatar_image: string
  variant_slug: string
}

interface Product {
  id: number
  name: string
  slug: string
  gender: string
  category: string
  price: string
  discount: boolean
  discount_price: string
  hot: boolean
  new: boolean
  available: boolean
  alt_text?: string
  colors: ProductColor[]
  currentImage?: string
}

interface Collection {
  name: string
  slug: string
}

interface Category {
  id: number
  name: string
}

interface Size {
  name: string
}

interface Color {
  name: string
  image: string
}

interface Facets {
  collections: Collection[]
  categories: Category[]
  sizes: Size[]
  colors: Color[]
}

interface Filters {
  gender: string[]
  collections: string[]
  categories: number[]
  sizes: string[]
  colors: string[]
}

interface ProductsResponse {
  count: number
  results: Product[]
}

const config = useRuntimeConfig()
const route = useRoute()
const router = useRouter()

const loading = ref(true)
const products = ref<Product[]>([])
const count = ref(0)
const page = ref(1)
const filterOpen = ref(false)

const PAGE_SIZE = 12

const filters = ref<Filters>({
  gender: [],
  collections: [],
  categories: [],
  sizes: [],
  colors: []
})

const facets = ref<Facets>({
  collections: [],
  categories: [],
  sizes: [],
  colors: []
})

let smoother: any = null
let ctx: gsap.Context | null = null

const totalPages = computed(() => Math.max(1, Math.ceil(count.value / PAGE_SIZE)))

function initializeFiltersFromQuery(): void {
  const query = route.query

  if (query.page) {
    page.value = Number(query.page) || 1
  }

  if (query.gender) {
    filters.value.gender = [String(query.gender)]
  }

  if (query.collection) {
    filters.value.collections = Array.isArray(query.collection)
      ? query.collection.map(String)
      : [String(query.collection)]
  }

  if (query.category) {
    filters.value.categories = Array.isArray(query.category)
      ? query.category.map(Number)
      : [Number(query.category)]
  }

  if (query.size) {
    filters.value.sizes = Array.isArray(query.size)
      ? query.size.map(String)
      : [String(query.size)]
  }

  if (query.color) {
    filters.value.colors = Array.isArray(query.color)
      ? query.color.map(String)
      : [String(query.color)]
  }
}

function buildQueryParams(): URLSearchParams {
  const params = new URLSearchParams()
  
  params.set('page', String(page.value))
  params.set('page_size', String(PAGE_SIZE))
  
  filters.value.collections.forEach(slug => params.append('collection', slug))
  filters.value.categories.forEach(id => params.append('category', String(id)))
  filters.value.sizes.forEach(size => params.append('size', size))
  filters.value.colors.forEach(color => params.append('color', color))
  
  const gender = filters.value.gender[0]
  if (gender) {
    params.set('gender', gender)
  }
  
  return params
}

function buildApiQuery(): string {
  return buildQueryParams().toString().replace(/\+/g, '%20')
}

function updateRouteQuery(): void {
  const query: Record<string, string | string[]> = {}

  if (page.value > 1) {
    query.page = String(page.value)
  }

  if (filters.value.gender.length > 0) {
    query.gender = filters.value.gender[0]
  }

  if (filters.value.collections.length > 0) {
    query.collection = filters.value.collections
  }

  if (filters.value.categories.length > 0) {
    query.category = filters.value.categories.map(String)
  }

  if (filters.value.sizes.length > 0) {
    query.size = filters.value.sizes
  }

  if (filters.value.colors.length > 0) {
    query.color = filters.value.colors
  }

  router.replace({ query })
}

function setPage(p: number): void {
  page.value = p
  updateRouteQuery()
  
  if (smoother) {
    smoother.scrollTo(0, true, 'top top')
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

async function fetchCategories(): Promise<void> {
  try {
    const res = await $fetch<Category[]>(`${config.public.apiBase}/public/categories/`)
    facets.value.categories = Array.isArray(res) ? res : []
  } catch (error) {
    console.error('Failed to fetch categories:', error)
    facets.value.categories = []
  }
}

async function fetchSizes(): Promise<void> {
  try {
    const res = await $fetch<Size[]>(`${config.public.apiBase}/public/sizes/`)
    facets.value.sizes = Array.isArray(res) ? res : []
  } catch (error) {
    console.error('Failed to fetch sizes:', error)
    facets.value.sizes = []
  }
}

async function fetchColors(): Promise<void> {
  try {
    const res = await $fetch<Color[]>(`${config.public.apiBase}/public/colors/`)
    facets.value.colors = Array.isArray(res)
      ? res.map(c => ({ name: c.name, image: c.image }))
      : []
  } catch (error) {
    console.error('Failed to fetch colors:', error)
    facets.value.colors = []
  }
}

async function fetchCollections(): Promise<void> {
  try {
    const res = await $fetch<Collection[]>(`${config.public.apiBase}/public/collections/`)
    facets.value.collections = Array.isArray(res)
      ? res.map(c => ({ name: c.name, slug: c.slug }))
      : []
  } catch (error) {
    console.error('Failed to fetch collections:', error)
    facets.value.collections = []
  }
}

async function fetchProducts(): Promise<void> {
  try {
    loading.value = true
    const res = await $fetch<ProductsResponse>(
      `${config.public.apiBase}/public/products-all/?${buildApiQuery()}`
    )
    
    count.value = res.count
    products.value = res.results
  } catch (error) {
    console.error('Failed to fetch products:', error)
  } finally {
    loading.value = false
  }
}

function initializeGSAP(): void {
  ctx = gsap.context(() => {
    if (ScrollSmoother) {
      smoother = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.2,
        wrapper: '#smooth-wrapper',
        content: '#smooth-content'
      })
    }
  })
}

watch(
  filters,
  () => {
    if (page.value !== 1) {
      page.value = 1
    }
    updateRouteQuery()
  },
  { deep: true }
)

watch(
  () => route.query,
  () => {
    fetchProducts()
  }
)

// Pause ScrollSmoother when FilterPanel opens
watch(
  filterOpen,
  (isOpen) => {
    if (smoother) {
      smoother.paused(isOpen)
    }
  }
)

// Handle CartPanel and other panels
if (import.meta.client) {
  const smootherRef = computed(() => smoother)
  useScrollSmootherPanels(smootherRef)
}

onMounted(async () => {
  initializeFiltersFromQuery()
  
  await Promise.all([
    fetchCategories(),
    fetchColors(),
    fetchSizes(),
    fetchCollections()
  ])
  
  await fetchProducts()
  
  nextTick(() => {
    initializeGSAP()
  })
})

onBeforeUnmount(() => {
  ctx?.revert()
  ctx = null
  smoother?.kill?.()
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>