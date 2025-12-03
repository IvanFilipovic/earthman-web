<template>
  <div class="gsap-carousel-main">
    <div class="gsap-carousel-container">
      <div class="gsap-carousel-inner">
        <div 
          v-for="(slideGroup, slideIndex) in slideGroups" 
          :key="`gsap-slide-${slideIndex}`"
          class="gsap-carousel-slide"
        >
          <div class="gsap-slide-products">
            <NuxtLink
              v-for="product in slideGroup"
              :key="product.id"
              :to="`/product/${product.slug}/${encodeURIComponent(product.colors[0].variant_slug)}`"
              class="gsap-product-card"
            >
              <div class="gsap-product-image">
                <img
                  v-bind="getProductImageAttrs(product)"
                  :alt="product.alt_text || product.name"
                  loading="lazy"
                />
              </div>
              <div class="gsap-product-info">
                <p class="gsap-product-category">{{ product.category }}</p>
                <p class="gsap-product-name">{{ product.name }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    
    <div class="gsap-cta-section">
      <button
        type="button"
        class="gsap-cta-button"
        @click="router.push('/shop')"
      >
        <h3 class="text-xl md:text-2xl font-bold mb-2">See Everything</h3>
        <p class="text-sm opacity-70 mb-4">Browse all products</p>
        <div class="btn btn--primary">
          <span class="btn__text">View All</span>
          <span class="btn__fill"></span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

let InertiaPlugin: any = null
try {
  InertiaPlugin = (await import('gsap/InertiaPlugin')).InertiaPlugin
} catch {
  console.warn('InertiaPlugin not available')
}

gsap.registerPlugin(Draggable)
if (InertiaPlugin) gsap.registerPlugin(InertiaPlugin)

interface ColorEntry {
  color: string
  avatar_image: string
  variant_slug: string
}

interface ProductItem {
  id: number
  name: string
  slug: string
  category: number
  link_image: string
  alt_text: string
  colors: ColorEntry[]
}

interface ProductsResponse {
  count: number
  results: ProductItem[]
}

const config = useRuntimeConfig()
const router = useRouter()
const { getResponsiveImages } = useImageTransform()

const items = ref<ProductItem[]>([])
const productsPerSlide = ref(3)

function getProductImageAttrs(product: ProductItem) {
  const imageUrl = product.colors?.[0]?.avatar_image || product.link_image
  return getResponsiveImages(
    imageUrl,
    [400, 600, 800, 1000],
    '(max-width: 767px) 80vw, (max-width: 1023px) 42vw, 28vw'
  )
}


async function loadProducts(): Promise<void> {
  try {
    const response = await $fetch<ProductsResponse>(
      `${config.public.apiBase}/public/products-all/?page=1&page_size=6&hot=true`,
      { credentials: 'include' }
    )
    items.value = response?.results ?? []
  } catch (error) {
    console.error('Failed to fetch products:', error)
    items.value = []
  }
}

const slideGroups = computed(() => {
  const perSlide = productsPerSlide.value
  const groups: ProductItem[][] = []
  
  for (let i = 0; i < items.value.length; i += perSlide) {
    groups.push(items.value.slice(i, i + perSlide))
  }
  
  return groups
})

function updateProductsPerSlide() {
  if (window.innerWidth < 768) {
    productsPerSlide.value = 1 // Mobile: 1 product
  } else if (window.innerWidth < 1024) {
    productsPerSlide.value = 2 // Tablet: 2 products
  } else {
    productsPerSlide.value = 3 // Desktop: 3 products
  }
}

onMounted(async () => {
  await loadProducts()
  updateProductsPerSlide()
  
  nextTick(() => {
    var snapX: any
    var slides = document.querySelectorAll(".gsap-carousel-slide") as NodeListOf<HTMLElement>
    
    console.log('Slides found:', slides.length)
    
    if (slides.length === 0) {
      console.error('No slides found!')
      return
    }
    
    var progressWrap = gsap.utils.wrap(0, 1)
    var numSlides = slides.length
    
    gsap.set(slides, {
      xPercent: (i: number) => i * 100,
      opacity: 1,
      visibility: 'visible',
      display: 'flex'
    })
    
    var wrap = gsap.utils.wrap(-100, (numSlides - 1) * 100)
    
    var animation = gsap.to(slides, {
      xPercent: "+=" + (numSlides * 100),
      duration: 1,
      ease: "none",
      paused: true,
      repeat: -1,
      modifiers: {
        xPercent: wrap
      }
    })
    
    var proxy = document.createElement("div")
    var slideWidth = 0
    var wrapWidth = 0
    
    function resize() {
      var norm = ((gsap.getProperty(proxy, "x") as number) / wrapWidth) || 0
      
      slideWidth = slides[0].offsetWidth
      wrapWidth = slideWidth * numSlides
      snapX = gsap.utils.snap(slideWidth)
      
      gsap.set(proxy, {
        x: norm * wrapWidth
      })
      
      updateProgress()
    }
    
    function updateProgress() {
      animation.progress(progressWrap((gsap.getProperty(proxy, "x") as number) / wrapWidth))
    }
    
    resize()
    
    var draggable = new Draggable(proxy, {
      trigger: ".gsap-carousel-container",
      type: "x",
      inertia: InertiaPlugin ? true : false,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: (value: number) => snapX(value)
      }
    })
    
    function handleResize() {
      updateProductsPerSlide()
      resize()
    }
    
    window.addEventListener("resize", handleResize)
    
    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize)
      animation.kill()
      draggable.kill()
    })
  })
})
</script>

<style scoped>
/* Main container */
.gsap-carousel-main {
  position: relative;
  width: 100%;
  z-index: 1;
}

/* Full screen carousel container */
.gsap-carousel-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  cursor: grab;
  background: transparent;
}

.gsap-carousel-container:active {
  cursor: grabbing;
}

/* Inner wrapper */
.gsap-carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Individual slides - full screen */
.gsap-carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  opacity: 0;
  visibility: hidden;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

/* Products flex container - evenly spread */
.gsap-slide-products {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  height: 100%;
  margin: 0 auto;
}

/* Product card - fixed width for proper spacing */
.gsap-product-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: transform 0.3s ease;
  width: 28vw;
  max-width: 450px;
  flex-shrink: 0;
}

.gsap-product-card:hover {
  transform: translateY(-8px);
}

/* Product image - maintains aspect ratio */
.gsap-product-image {
  width: 100%;
  height: 70vh;
  max-height: 700px;
  overflow: hidden;
  background: #f5f5f5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.gsap-product-card:hover .gsap-product-image {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}

.gsap-product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Product info */
.gsap-product-info {
  margin-top: 16px;
  text-align: center;
}

.gsap-product-category {
  font-size: 0.875rem;
  color: #666;
  opacity: 0.7;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.gsap-product-name {
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  line-height: 1.4;
}

/* CTA Section */
.gsap-cta-section {
  padding: 80px 20px;
  background: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gsap-cta-button {
  background: transparent;
  border: none;
  color: white;
  text-align: center;
  cursor: pointer;
  padding: 20px;
  transition: transform 0.3s ease;
}

.gsap-cta-button:hover {
  transform: translateY(-2px);
}

/* Mobile: 1 product per slide */
@media (max-width: 767px) {
  .gsap-slide-products {
    justify-content: center; /* Center single product */
  }
  
  .gsap-product-card {
    width: 80vw; /* Larger single product */
    max-width: 400px;
  }
  
  .gsap-cta-section {
    padding: 40px 20px;
  }
  .gsap-product-image {
    height: 65vh;
    max-height: 600px;
  }
  
  .gsap-carousel-slide {
    padding: 20px;
  }
}

/* Tablet: 2 products per slide */
@media (min-width: 768px) and (max-width: 1023px) {
  .gsap-slide-products {
    justify-content: space-around;
  }
  
  .gsap-product-card {
    width: 42vw;
    max-width: 380px;
  }
  
  .gsap-product-image {
    height: 65vh;
  }
}

/* Large desktop - more breathing room */
@media (min-width: 1400px) {
  .gsap-product-card {
    width: 25vw;
    max-width: 500px;
  }
  
  .gsap-slide-products {
    max-width: 1800px;
  }
}
</style>