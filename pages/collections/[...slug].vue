<template>
  <!--[slug.vue]-->
  <section class="collection-page">
    <div class="w-full z-50">
      <AppNavigation :dark="false" />
    </div>
    
    <div class="relative z-10">
      
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-6">
        <div class="flex justify-start w-full">
          <div class="flex items-center gap-1">
            <button 
              type="button"
              :class="typeBtnClass('all')"
              @click="setType('all')"
            >
              ALL
            </button>
            <button 
              type="button"
              :class="typeBtnClass('woman')"
              @click="setType('woman')"
            >
              WOMAN
            </button>
            <button 
              type="button"
              :class="typeBtnClass('man')"
              @click="setType('man')"
            >
              MAN
            </button>
            <button 
              type="button"
              :class="typeBtnClass('kids')"
              @click="setType('kids')"
            >
              KIDS
            </button>
          </div>
        </div>
      </div>
      <CollectionShopListingSkeleton v-if="loading1 && loading2"
        :animate=true
      />
      <CollectionShopListing
        v-else
        :products="products"
        :collection="collection"
        @cta-click="onCtaClick"
      />
    </div>
  </section>
</template>

<script setup lang="ts">

interface ProductColor {
  color: string
  avatar_image: string
  variant_slug: string
}

interface Collection {
  name?: string
  element_one?: string
  element_two?: string
  element_three?: string
  element_four?: string
}

interface Product {
  id: number
  slug: string
  name: string
  gender: string
  category: string
  price: string
  discount: boolean
  discount_price: string | null
  hot: boolean
  new: boolean
  available: boolean
  alt_text?: string
  colors: ProductColor[]
}

interface ProductsResponse {
  results: Product[]
  next: string | null
}

type GenderType = 'all' | 'woman' | 'man' | 'kids'
type ApiGender = 'all' | 'male' | 'female' | 'kids'

const config = useRuntimeConfig()
const route = useRoute()
const router = useRouter()

const VALID_TYPES: GenderType[] = ['all', 'woman', 'man', 'kids']
const PAGE_SIZE = 10

const slug = computed(() => String(route.params.slug))

const type = ref<GenderType>(
  (route.query.type && VALID_TYPES.includes(String(route.query.type) as GenderType))
    ? String(route.query.type) as GenderType
    : 'all'
)

const gender = computed<ApiGender>(() => {
  if (type.value === 'man') return 'male'
  if (type.value === 'woman') return 'female'
  if (type.value === 'kids') return 'kids'
  return 'all'
})

watch(
  () => route.query.type,
  (t) => {
    const normalized = (t && VALID_TYPES.includes(String(t) as GenderType))
      ? String(t) as GenderType
      : 'all'
    if (type.value !== normalized) {
      type.value = normalized
    }
  },
  { immediate: true }
)

function setType(value: GenderType): void {
  type.value = value
  const newQuery = { ...route.query }
  if ('gender' in newQuery) delete newQuery.gender
  newQuery.type = value
  router.replace({ query: newQuery })
}

function typeBtnClass(btnType: GenderType): string {
  const base = 'pr-8 py-1 text-sm text-text_color cursor-pointer hover:opacity-70 transition-opacity duration-200'
  const active = type.value === btnType ? 'font-bold' : 'bg-background_color'
  return `${base} ${active}`
}
const { data: collectionData, pending: cPending } = await useAsyncData<Collection>(
  `collection:${slug.value}`,
  async () => {
    return await $fetch<Collection>(`${config.public.apiBase}/public/collections/${slug.value}/`)
  }
)

const { data: productsData, pending: pPending } = await useAsyncData<Product[]>(
  `products-all:${slug.value}:${gender.value}`,
  async () => {
    const baseUrl = `${config.public.apiBase}/public/products-all/`
    const params = new URLSearchParams({
      page: '1',
      page_size: String(PAGE_SIZE),
      collection: slug.value,
    })

    if (gender.value !== 'all') {
      params.append('gender', gender.value)
    }

    let url: string | null = `${baseUrl}?${params.toString()}`
    const allProducts: Product[] = []
    const res: ProductsResponse = await $fetch<ProductsResponse>(url as string)
    if (Array.isArray(res?.results)) {
      allProducts.push(...res.results)
    }
    return allProducts
  },
  { watch: [slug, gender] }
)

const loading1 = cPending.value
const loading2 = pPending.value
console.log(cPending.value, pPending.value)
const collection = computed(() => collectionData.value || {})
const products = computed(() => productsData.value || [])

function onCtaClick(): void {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.collection-page {
  position: relative;
  min-height: 100vh;
}

/* Ensure buttons are clickable */
button {
  position: relative;
  z-index: 10;
  pointer-events: auto;
}
</style>