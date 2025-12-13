<!-- pages/product/[collection]/[product].vue -->
<template>
  <section>
    <AppNavigation :dark="false" />

    <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 lg:px-8 pt-4 gap-2">
      <div class="flex justify-start w-full">
        <div class="flex items-center py-1 text-[10px] lg:text-xs text-text_color uppercase tracking-widest">
          <NuxtLink to="/" class="hover:underline pr-1 lg:pr-2">HOME</NuxtLink>
          <span class="pr-1 lg:pr-2">/</span>
          <NuxtLink to="/shop" class="hover:underline pr-1 lg:pr-2">Shop</NuxtLink>
          <span class="pr-1 lg:pr-2">/</span>
          <NuxtLink :to="`/collections/${product?.collection_slug}`" class="hover:underline pr-1 lg:pr-2">
            {{ product?.collection_slug }}
          </NuxtLink>
          <span class="pr-1 lg:pr-2">/</span>
          <span class="pr-1 lg:pr-2">{{ productName }}</span>
        </div>
      </div>
    </div>

    <div class="hidden lg:block">
      <div class="relative grid grid-cols-12 gap-8 pt-8 mt-2 md:mt-6 px-4 md:px-8 items-start">
        <div class="md:col-span-8">
          <ProductGallerySlider 
            v-if="imagesToShow.length > 0"
            :images="imagesToShow"
            :product-name="productName"
            :key="`gallery-${activeColorIndex}`"
          />
        </div>

        <aside class="md:col-span-4 md:sticky md:top-4 md:self-start">
          <div class="bg-background_color border border-text_color/30 p-5 align-self:start">
            <div class="flex items-start justify-between">
              <div>
                <h1 class="text-sm font-light leading-tight text-text_color">{{ productCategory }}</h1>
                <h1 class="text-xl font-medium leading-tight text-text_color">{{ productName }}</h1>
                <p v-if="activeColorName" class="mt-1 text-sm text-text_color">Color: {{ activeColorName }}</p>
              </div>
              <div class="text-right">
                <div v-if="product?.discount" class="space-x-2">
                  <span class="text-lg font-semibold text-error_text_color">€{{ product?.discount_price }}</span>
                  <span class="line-through text-text_color">€{{ product?.price }}</span>
                </div>
                <div v-else class="text-lg font-semibold text-text_color">€{{ product?.price }}</div>
              </div>
            </div>

            <div v-if="variantGroups.length" class="mt-4">
              <div class="text-xs uppercase tracking-widest mb-2">Color</div>
              <div class="flex gap-3">
                <button
                  v-for="(vg, idx) in variantGroups"
                  :key="idx"
                  type="button"
                  @click="setActiveColor(idx)"
                  class="w-8 h-8 border relative"
                  :class="activeColorIndex === idx ? 'ring-2 ring-text_color' : ''"
                  :title="vg.color?.name"
                  :style="{ backgroundColor: swatchBg(vg.color?.image) }"
                >
                  <span class="sr-only">{{ vg.color?.name }}</span>
                </button>
              </div>
            </div>

            <div v-if="activeSizes.length" class="mt-6">
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
                  type="button"
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

            <div class="mt-6">
              <div class="text-xs uppercase tracking-widest mb-2">Quantity</div>
              <div class="flex items-center gap-3">
                <button
                  type="button"
                  @click="decrementQuantity"
                  class="w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200"
                  :disabled="quantity <= 1"
                  :class="{ 'opacity-40 cursor-not-allowed': quantity <= 1 }"
                >
                  <Icon name="lucide:minus" class="w-4 h-4 text-text_color" />
                </button>
                
                <input
                  v-model.number="quantity"
                  type="number"
                  min="1"
                  max="99"
                  class="w-16 h-10 text-center border border-text_color/30 bg-background_color text-text_color focus:outline-none focus:border-text_color"
                  @blur="validateQuantity"
                />
                
                <button
                  type="button"
                  @click="incrementQuantity"
                  class="w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200"
                  :disabled="quantity >= 99"
                  :class="{ 'opacity-40 cursor-not-allowed': quantity >= 99 }"
                >
                  <Icon name="lucide:plus" class="w-4 h-4 text-text_color" />
                </button>
              </div>
              <p v-if="currentCartQuantity > 0" class="mt-2 text-xs text-text_color/70">
                {{ currentCartQuantity }} already in cart
              </p>
            </div>

            <div class="mt-6 space-y-3">
              <button
                type="button"
                class="btn btn--primary w-full"
                :disabled="!selectedVariantSlug"
                @click="addToCart"
              >
                <span class="btn__text">Add to Cart</span>
                <span class="btn__fill"></span>
              </button>
            </div>

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
            title: 'Description',
            content: product?.description || 'No additional description.'
          },
          {
            title: 'Size & Fit',
            content: 'Coming soon – sizing guidance for this product.'
          },
          {
            title: 'Shipping & Returns',
            content: `We offer UPS Standard, Express Saver, and Express shipping options. Final prices are calculated at checkout and exclude import duties which will be charged by UPS after clearing customs.

We accept returns within 14 days. We kindly remind you that sale items can only be refunded as store credit.`,
            link: { href: '#', label: 'More info' }
          }
        ]"
      />
    </div>

    <div class="block lg:hidden mt-2 pt-8" id="mobile-product-wrap">
      <div v-if="variantGroups.length" ref="sliderRef" class="keen-slider">
        <div
          v-for="(img, i) in variantGroups[activeColorIndex]?.gallery || []"
          :key="i"
          class="keen-slider__slide"
        >
          <img 
            v-bind="getMobileImageAttrs(img.image)"
            :alt="img.alt_text || productName"
            class="h-auto object-cover border-t border-b border-text_color/30 mx-auto"
          />
        </div>
      </div>

      <div v-if="variantGroups.length" class="flex items-center justify-center gap-2 py-3">
        <button
          v-for="idx in dots"
          :key="idx"
          type="button"
          class="flex items-center text-text_color"
          :aria-label="`Go to slide ${idx + 1}`"
          @click="slider?.moveToIdx(idx)"
        >
          <Icon
            :name="currentSlide === idx ? 'lucide:minus' : 'lucide:dot'"
            class="w-8 h-8 my-auto"
          />
        </button>
      </div>

      <div v-if="variantGroups.length" class="pt-4 px-4">
        <div class="text-xs uppercase tracking-widest mb-2">Color</div>
        <div class="flex gap-3">
          <button
            v-for="(vg, idx) in variantGroups"
            :key="idx"
            type="button"
            @click="setActiveColor(idx)"
            class="w-8 h-8 border"
            :class="activeColorIndex === idx ? 'ring-2 ring-text_color' : ''"
            :style="{ backgroundColor: swatchBg(vg.color?.image) }"
          >
            <span class="sr-only">{{ vg.color?.name }}</span>
          </button>
        </div>
        <p v-if="activeColorName" class="mt-1 text-sm text-text_color">
          Color: {{ activeColorName }}
        </p>
      </div>

      <div class="px-4 mt-4">
        <ProductAccordion
          :items="[
            { title: 'Description', content: product?.description || 'No additional description.' },
            { title: 'Size & Fit', content: 'Coming soon – sizing guidance for this product.' },
            {
              title: 'Shipping & Return',
              content: `We offer UPS Standard, Express Saver, and Express shipping options. 
Final prices are calculated at checkout and exclude import duties.
We accept returns within 14 days. Sale items can only be refunded as store credit.`,
              link: { href: '#', label: 'More info' }
            }
          ]"
        />
      </div>

      <div class="sticky bottom-0 left-0 w-full bg-background_color z-40">
        <div class="flex flex-col items-start py-6 px-4 gap-4">
          <div>
            <h1 class="text-sm font-light leading-tight text-text_color">{{ productCategory }}</h1>
            <h1 class="text-lg font-medium leading-tight text-text_color">{{ productName }}</h1>
          </div>
          <div class="text-right">
            <div v-if="product?.discount" class="space-x-1">
              <span class="text-base font-semibold text-text_color">€{{ product?.discount_price }}</span>
              <span class="line-through text-text_color text-sm">€{{ product?.price }}</span>
            </div>
            <div v-else class="text-base font-semibold text-text_color">€{{ product?.price }}</div>
          </div>
          <button
            type="button"
            class="w-full py-2 my-auto items-center text-center text-base font-medium tracking-wider bg-text_color text-background_color"
            @click="mobilePanelOpen = true"
          >
            <span class="my-auto">ADD</span>
          </button>
        </div>
      </div>

      <TransitionRoot :show="mobilePanelOpen">
        <Dialog class="relative z-50" @close="mobilePanelOpen = false">
          <div class="fixed inset-0 bg-text_color/30" aria-hidden="true"></div>

          <div class="fixed bottom-0 w-screen">
            <TransitionChild
              enter="transform transition ease-out duration-300"
              enter-from="translate-y-full"
              enter-to="translate-y-0"
              leave="transform transition ease-in duration-200"
              leave-from="translate-y-0"
              leave-to="translate-y-full"
            >
              <DialogPanel class="w-full bg-background_color p-6">
                <div class="flex justify-between items-center mb-4">
                  <h2 class="text-base uppercase tracking-wider font-medium">Select Size & Quantity</h2>
                </div>

                <div v-if="activeSizes.length" class="mt-4">
                  <div class="text-xs uppercase tracking-widest mb-2">Size</div>
                  <div class="flex flex-col justify-center gap-3 items-center">
                    <button
                      v-for="s in activeSizes"
                      :key="s.slug"
                      type="button"
                      @click="selectSize(s)"
                      class="border px-3 py-2 text-sm w-fit"
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

                <div class="mt-6">
                  <div class="text-xs uppercase tracking-widest mb-2">Quantity</div>
                  <div class="flex items-center justify-center gap-3">
                    <button
                      type="button"
                      @click="decrementQuantity"
                      class="w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200"
                      :disabled="quantity <= 1"
                      :class="{ 'opacity-40 cursor-not-allowed': quantity <= 1 }"
                    >
                      <Icon name="lucide:minus" class="w-4 h-4 text-text_color" />
                    </button>
                    
                    <input
                      v-model.number="quantity"
                      type="number"
                      min="1"
                      max="99"
                      class="w-16 h-10 text-center border border-text_color/30 bg-background_color text-text_color focus:outline-none focus:border-text_color"
                      @blur="validateQuantity"
                    />
                    
                    <button
                      type="button"
                      @click="incrementQuantity"
                      class="w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200"
                      :disabled="quantity >= 99"
                      :class="{ 'opacity-40 cursor-not-allowed': quantity >= 99 }"
                    >
                      <Icon name="lucide:plus" class="w-4 h-4 text-text_color" />
                    </button>
                  </div>
                  <p v-if="currentCartQuantity > 0" class="mt-2 text-xs text-center text-text_color/70">
                    {{ currentCartQuantity }} already in cart
                  </p>
                </div>

                <button
                  type="button"
                  class="mt-6 w-full py-3 text-base font-medium tracking-wider bg-text_color text-background_color disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="!selectedVariantSlug"
                  @click="addToCart"
                >
                  ADD TO CART
                </button>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useKeenSlider } from 'keen-slider/vue.es'
import type { KeenSliderInstance } from 'keen-slider'
import 'keen-slider/keen-slider.min.css'
import { useToast } from '~/composables/useToast'
import { useCartStore } from '~/stores/cart'

interface GalleryImage {
  id?: number
  image: string
  alt_text: string
}

interface Size {
  name: string
}

interface SizeItem {
  slug: string
  size: Size
  available: boolean
}

interface Color {
  name: string
  image: string | null
  alt_text: string
}

interface VariantGroup {
  color: Color
  avatar_image: string
  sizes: SizeItem[]
  gallery: GalleryImage[]
}

interface Variant {
  slug: string
  color: Color
  size: Size
  available: boolean
}

interface ProductApi {
  id: number
  category: string
  name: string
  slug: string
  description: string
  price: string
  discount: boolean
  discount_price: string | null
  collection_slug: string
  available: boolean
  variant_groups: VariantGroup[]
  selected_variant: Variant | null
}

const config = useRuntimeConfig()
const route = useRoute()
const { addedToCart, error } = useToast()
const cartStore = useCartStore()

const mobilePanelOpen = ref(false)
const currentSlide = ref(0)
const activeColorIndex = ref(0)
const selectedVariantSlug = ref('')
const quantity = ref(1)

const collectionParam = computed(() => String(route.params.collection ?? ''))
const productSlugParam = computed(() => String(route.params.product ?? ''))

const currentCartQuantity = computed(() => {
  if (!selectedVariantSlug.value) return 0
  return cartStore.getVariantQuantity(selectedVariantSlug.value)
})

const { data } = await useAsyncData<ProductApi | null>(
  `product:${collectionParam.value}:${productSlugParam.value}`,
  async () => {
    const url = `${config.public.apiBase}/public/products/${collectionParam.value}/${productSlugParam.value}/`
    return await $fetch<ProductApi>(url)
  },
  { 
    watch: [collectionParam, productSlugParam],
    getCachedData: (key) => {
      return useNuxtApp().payload.data[key] || useNuxtApp().static.data[key]
    }
  }
)

const product = computed(() => data.value ?? null)
const productName = computed(() => product.value?.name ?? '')
const productCategory = computed(() => product.value?.category ?? '')
const variantGroups = computed<VariantGroup[]>(() => product.value?.variant_groups ?? [])
const activeSizes = computed<SizeItem[]>(() => variantGroups.value[activeColorIndex.value]?.sizes ?? [])
const inStock = computed(() => activeSizes.value.some(s => s?.available))
const activeColorName = computed(() => variantGroups.value[activeColorIndex.value]?.color?.name ?? '')
const imagesToShow = computed(() => variantGroups.value[activeColorIndex.value]?.gallery ?? [])

// Helper to get transformed image URLs
const { getResponsiveImages } = useImageTransform()

// Desktop gallery images (8-column grid = ~66vw on desktop, 100vw on mobile < lg)
const getDesktopImageAttrs = (url: string) => {
  return getResponsiveImages(
    url,
    [400, 800, 1200, 1600], // Widths for srcset - covers mobile to desktop retina
    '(max-width: 1023px) 100vw, 66vw' // Actual rendered sizes based on layout
  )
}

// Mobile slider images (full width)
const getMobileImageAttrs = (url: string) => {
  return getResponsiveImages(
    url,
    [400, 600, 800], // Widths for srcset - mobile range
    '100vw' // Full width on all mobile screens
  )
}

const [sliderRef, slider] = useKeenSlider({
  loop: true,
  initial: 0,
  slideChanged(s: KeenSliderInstance) {
    currentSlide.value = s.track.details.rel
  },
})

const dots = computed(() =>
  slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : []
)

onMounted(async () => {
  await cartStore.fetchCart()
})

watch(
  () => product.value,
  (p) => {
    if (!p) return
    
    const isVariantSlug = productSlugParam.value.includes('-') && productSlugParam.value.split('-').length > 1
    
    if (isVariantSlug) {
      const groupIndex = p.variant_groups?.findIndex(g =>
        (g?.sizes ?? []).some(s => s?.slug === productSlugParam.value)
      ) ?? -1
      
      if (groupIndex >= 0) {
        activeColorIndex.value = groupIndex
        const match = (p.variant_groups?.[groupIndex]?.sizes ?? [])
          .find(s => s?.slug === productSlugParam.value && s?.available)
        
        if (match) {
          selectedVariantSlug.value = match.slug
        } else {
          const firstAvail = (p.variant_groups?.[groupIndex]?.sizes ?? []).find(s => s?.available)
          selectedVariantSlug.value = firstAvail?.slug ?? ''
        }
        return
      }
    }
    
    activeColorIndex.value = 0
    const firstAvail = (p.variant_groups?.[0]?.sizes ?? []).find(s => s?.available)
    selectedVariantSlug.value = firstAvail?.slug ?? ''
  },
  { immediate: true }
)

watch(
  () => variantGroups.value[activeColorIndex.value]?.gallery?.length ?? 0,
  async () => {
    await nextTick()
    if (slider.value) {
      slider.value.update()
      slider.value.moveToIdx(0)
      currentSlide.value = 0
    }
  }
)

function setActiveColor(i: number): void {
  const currentSizeName = activeSizes.value.find(s => s.slug === selectedVariantSlug.value)?.size?.name
  activeColorIndex.value = i
  const newSizes = variantGroups.value?.[i]?.sizes ?? []
  
  let pick = newSizes.find(s => s.size?.name === currentSizeName && s.available)
  if (!pick) pick = newSizes.find(s => s.size?.name === currentSizeName)
  if (!pick) pick = newSizes.find(s => s.available)
  if (!pick) pick = newSizes[0]
  
  selectedVariantSlug.value = pick?.slug ?? ''
}

function selectSize(s: SizeItem): void {
  if (!s?.available) return
  selectedVariantSlug.value = s.slug
}

function incrementQuantity(): void {
  if (quantity.value < 99) {
    quantity.value++
  }
}

function decrementQuantity(): void {
  if (quantity.value > 1) {
    quantity.value--
  }
}

function validateQuantity(): void {
  if (quantity.value < 1) {
    quantity.value = 1
  } else if (quantity.value > 99) {
    quantity.value = 99
  }
}

async function addToCart(): Promise<void> {
  if (!selectedVariantSlug.value) {
    error('Please select a size')
    return
  }
  
  try {
    await cartStore.addToCart(selectedVariantSlug.value, quantity.value)
    
    // Get product info for toast
    const currentVariant = activeSizes.value.find(s => s.slug === selectedVariantSlug.value)
    const avatarImage = variantGroups.value[activeColorIndex.value]?.avatar_image
    
    // Show new cart toast with product details
    addedToCart({
      productName: `${productName.value} - ${currentVariant?.size?.name || ''}`,
      productImage: avatarImage,
      quantity: quantity.value
    })
    
    mobilePanelOpen.value = false
    quantity.value = 1
  } catch (e: any) {
    const msg = e?.data?.detail || e?.statusMessage || 'Could not add to cart'
    error(msg)
    console.error('Add to cart failed', e)
  }
}

function swatchBg(hex?: string | null): string {
  if (!hex) return '#e5e7eb'
  return `#${hex}`
}
</script>

<style scoped>
.keen-slider {
  width: 100%;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>