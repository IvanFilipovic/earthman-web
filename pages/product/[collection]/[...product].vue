<!-- pages/product/[collection]/[product].vue -->
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
                <nav class="text-sm uppercase tracking-widest space-x-2 text-background_color px-4">
                  <p>=</p>
                </nav>
            </div>
        </div>
      </div>
    </div>

    <!-- Breadcrumb -->
    <nav class="text-xs uppercase tracking-widest mb-6 text-text_color space-x-2 pt-8 md:pl-8">
      <NuxtLink to="/shop" class="hover:underline">Shop</NuxtLink>
      <span>›</span>
      <NuxtLink :to="`/collections/${product?.collection_slug}`" class="hover:underline">
        {{ product?.collection_slug }}
      </NuxtLink>
      <span>›</span>
      <span class="text-text_color">{{ productName }}</span>
    </nav>

    <div class="relative grid grid-cols-12 gap-8 pt-8 md:px-8 product-grid">
      <!-- LEFT: Gallery -->
      <div class="col-span-12 lg:col-span-8">
        <div v-if="imagesToShow.length > 0" class="grid grid-cols-2 gap-y-7 pr-2 place-content-between">
            <img
              v-for="(img, i) in imagesToShow"
              :key="i"
              :src="img"
              class="h-auto object-none bg-background_color mx-auto max-w-auto border border-text_color/30"
              :alt="productName"
              loading="lazy"
            />
        </div>

          <div v-else>
            <div v-for="i in 2" :key="i" class="w-full aspect-[4/3] bg-background_color animate-pulse"></div>
          </div>
      </div>

      <!-- RIGHT: Sticky Add-to-cart -->
      <aside class="col-span-12 lg:col-span-4 product-sticky">
        <div class="bg-background_color border border-text_color/30 p-5 align-self:start">
          <!-- Title / price -->
          <div class="flex items-start justify-between">
            <div>
              <h1 class="text-sm font-light leading-tight text-text_color">{{ productCategory }}</h1>
              <h1 class="text-xl font-medium leading-tight text-text_color">{{ productName }}</h1>
              <p class="mt-1 text-sm text-text_color" v-if="activeColorName">Color: {{ activeColorName }}</p>
            </div>
            <div class="text-right">
              <div v-if="product?.discount" class="space-x-2">
                <span class="text-lg font-semibold text-text_color">€{{ product?.discount_price }}</span>
                <span class="line-through text-text_color">€{{ product?.price }}</span>
              </div>
              <div v-else class="text-lg font-semibold text-text_color">€{{ product?.price }}</div>
            </div>
          </div>

          <!-- Color swatches -->
          <div class="mt-4" v-if="variantGroups.length">
            <div class="text-xs uppercase tracking-widest mb-2">Color</div>
            <div class="flex gap-3">
              <button
                v-for="(vg, idx) in variantGroups"
                :key="idx"
                @click="setActiveColor(idx)"
                class="w-8 h-8 border relative"
                :class="activeColorIndex === idx ? 'ring-2 ring-text_color' : ''"
                :title="vg.color?.name"
                :style="{ backgroundImage: `url(${vg.avatar_image})` }"
              >
                <span class="sr-only">{{ vg.color?.name }}</span>
              </button>
            </div>
          </div>

          <!-- Sizes -->
          <div class="mt-6" v-if="activeSizes.length">
            <div class="flex items-center justify-between">
              <div class="text-xs uppercase tracking-widest">Size</div>
              <div class="text-xs text-text_color/70">
                <span v-if="inStock">In Stock</span>
                <span v-else>Unavailable</span>
              </div>
            </div>
            <div class="mt-2 grid grid-cols-5 gap-2">
              <button
                v-for="s in activeSizes"
                :key="s.slug"
                @click="selectSize(s)"
                class="border px-2 py-2 text-sm text-text_color"
                :class="[
                  s.available ? 'cursor-pointer' : 'opacity-40 cursor-not-allowed',
                  selectedVariantSlug === s.slug ? 'border-text_color' : 'border-project_gray/50'
                ]"
                :disabled="!s.available"
              >
                {{ s.size?.name }}
              </button>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="mt-6 space-y-3">
            <button
              class="primary-btn w-full py-3"
              :disabled="!selectedVariantSlug"
              @click="addToCart"
            >
              ADD TO CART
            </button>
          </div>

          <!-- Service bullets -->
          <ul class="mt-5 space-y-2 text-sm text-text_color/80">
            <li>✓ Free delivery over €250,-</li>
            <li>✓ Easy returns within 14 days</li>
          </ul>
        </div>
      </aside>
    </div>

    <ProductAccordion
      :items="[
        {
          title: 'Size & Fit',
          content: 'Coming soon – sizing guidance for this product.'
        },
        {
          title: 'Shipping & Returns',
          content: `We offer UPS Standard, Express Saver, and Express shipping options. Final prices are calculated at checkout and exclude import duties which will be charged by UPS after clearing customs.

    We accept returns within 14 days. We kindly remind you that sale items can only be refunded as store credit.`,
          link: { href: '#', label: 'More info' }
        },
        {
          title: 'Description',
          content: product?.description || 'No additional description.'
        }
      ]"
    />

  </section>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast'
/** Types (lightweight) */
type SizeItem = { slug: string; size: { name: string }, available: boolean }
type VariantGroup = { color: { name: string; image: string | null; alt_text: string }, avatar_image: string, sizes: SizeItem[] }
type Variant = { slug: string; color: { name: string; image: string | null; alt_text: string }, size: { name: string }, available: boolean, images: string[] }
type ProductApi = {
  id: number; category: string; name: string; slug: string; description: string;
  price: string; discount: boolean; discount_price: string | null;
  collection_slug: string; available: boolean;
  variant_groups: VariantGroup[]; selected_variant: Variant | null
}
const config = useRuntimeConfig()
const route = useRoute()
const collectionParam = computed(() => String(route.params.collection ?? ''))
const variantParam    = computed(() => String(route.params.product ?? ''))
const { success, error } = useToast()
const activeColorIndex = ref(0)
const selectedVariantSlug = ref('')

/** Fetch product for given collection + variant */
const { data } = await useAsyncData<ProductApi | null>(
  () => `product:${collectionParam.value}:${variantParam.value}`,
  async () => {
    const url = `${config.public.apiBase}/public/products/${collectionParam.value}/${variantParam.value}/`
    return await $fetch(url)
  },
  { watch: [collectionParam, variantParam] }
)

const product = computed(() => data.value ?? null)

/** Safe derived state */
const productName = computed(() => product.value?.name ?? '')
const productCategory = computed(() => product.value?.category ?? '')
const variantGroups = computed<VariantGroup[]>(() => product.value?.variant_groups ?? [])
const activeSizes = computed<SizeItem[]>(() => variantGroups.value[activeColorIndex.value]?.sizes ?? [])
const inStock = computed(() => activeSizes.value.some(s => s?.available))
const activeColorName = computed(() => variantGroups.value[activeColorIndex.value]?.color?.name ?? '')

const imagesToShow = computed<string[]>(() => {
  const primary = (product.value?.selected_variant?.images ?? []).filter(Boolean)
  if (primary.length) return primary
  return variantGroups.value.map(vg => vg?.avatar_image).filter(Boolean)
})

watch(
  () => product.value,
  (p) => {
    if (!p) return
    // try to locate the color group that contains the current variant slug
    const groupIndex = p.variant_groups?.findIndex(g =>
      (g?.sizes ?? []).some(s => s?.slug === variantParam.value)
    ) ?? -1
    activeColorIndex.value = groupIndex >= 0 ? groupIndex : 0

    // set selected variant to the current URL variant if it exists in sizes
    const match = (p.variant_groups?.[activeColorIndex.value]?.sizes ?? [])
      .find(s => s?.slug === variantParam.value && s?.available)

    if (match) {
      selectedVariantSlug.value = match.slug
    } else {
      // fallback to first available size
      const firstAvail = (p.variant_groups?.[activeColorIndex.value]?.sizes ?? []).find(s => s?.available)
      selectedVariantSlug.value = firstAvail?.slug ?? ''
    }
  },
  { immediate: true }
)

const router = useRouter()

/** Pick a slug for a given color index (prefer first available size) */
function slugForColor(index: number, preferredSizeName?: string): string | undefined {
  const sizes = variantGroups.value?.[index]?.sizes ?? []
  // 1) same size & available
  let pick = sizes.find(s => s.size?.name === preferredSizeName && s.available)
  // 2) same size (even if unavailable)
  if (!pick) pick = sizes.find(s => s.size?.name === preferredSizeName)
  // 3) first available
  if (!pick) pick = sizes.find(s => s.available)
  // 4) otherwise first
  if (!pick) pick = sizes[0]
  return pick?.slug
}
/** Navigate to a given variant slug (if different) */
function goToVariantSlug(nextSlug?: string) {
  if (!nextSlug || nextSlug === variantParam.value) return
  router.replace({
    params: { collection: collectionParam.value, product: nextSlug },
    query: route.query
  })
}

function setActiveColor(i: number) {
  // remember the currently selected size name (if any)
  const currentSizeName =
    activeSizes.value.find(s => s.slug === selectedVariantSlug.value)?.size?.name

  activeColorIndex.value = i

  // choose a slug in the new color that matches the previous size if possible
  const nextSlug = slugForColor(i, currentSizeName)
  selectedVariantSlug.value = nextSlug ?? ''

  // navigate so the page data/images update
  goToVariantSlug(nextSlug)
}

function selectSize(s: SizeItem) {
  if (!s?.available) return
  selectedVariantSlug.value = s.slug
}

async function addToCart() {
  if (!selectedVariantSlug.value) {
    error('Please select a size')
    return
  }
  try {
    await $fetch(`${config.public.apiBase}/public/cart/item/`, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: {
        product_variant_slug: selectedVariantSlug.value,
        quantity: 1
      }
    })
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cart:updated', {
        detail: { source: 'product', variant: selectedVariantSlug.value }
      }))
    }

    success('Added to cart')
  } catch (e: any) {
    const msg = e?.data?.detail || 'Could not add to cart'
    error(msg)
    console.error('Add to cart failed', e)
  }
}

/** Helpers */
function swatchBg(hex?: string | null) {
  if (!hex) return '#e5e7eb' // neutral fallback
  return `#${hex}`
}

</script>
<style non-scoped>
/* If you have a fixed header, set this to its height */
:root {
  --header-height: 0px;
  --sticky-gap: 16px;
}

/* Prevent grid stretch; sticky hates stretched grid items */
.product-grid {
  /* Ensure the grid itself doesn't clip children */
  overflow: visible;
}
.image {
background-image: url("public/logo/black_logo1.png");
}

/* Only stick on large screens */
@media (min-width: 1024px) {
  .product-sticky {
    position: sticky;
    top: calc(var(--header-height) + var(--sticky-gap));
    align-self: start;   /* in case grid defaults to stretch */
    z-index: 2;
  }
}
</style>