<template>
    <section class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-6 gap-6">
      <div class="hidden md:flex flex-col w-full">
        <div class="w-full">
          <NuxtLink
            to="/"
            class="bg-transparent flex justify-center"
          >
            <img src="/logo/earth-man920.png" alt="Logo" class="max-w-[100%]" />
          </NuxtLink>
        </div>
        <div v-if="navigation" class="flex w-full">
          <div class="flex flex-row justify-start w-full mx-auto gap-x-4 py-4">
            <NuxtLink
                to="/shop"
                :class="[linkColorClass, navWeight('/shop'), 'text-sm my-auto pr-4']"
              >
                SHOP
            </NuxtLink>  
            <NuxtLink
              to="/collections"
              :class="[linkColorClass, navWeight('/collections'), 'text-sm my-auto pr-4']"
            >PROJECTS</NuxtLink>
            <NuxtLink
              to="/about"
              :class="[linkColorClass, navWeight('/about'), 'text-sm my-auto px-4']"
            >ABOUT</NuxtLink>
            <ClientOnly>
              <NuxtLink
                class="relative my-auto pr-4"
                :class="[linkColorClass, navWeight('/cart')]"
                @click="cartOpen = true"
              >
                <Icon name="lucide:shopping-cart" class="w-6 h-6" :class="linkColorClass" />
                <span
                  v-if="itemCount > 0"
                  class="absolute -top-1 -right-1 text-[8px] md:text-[12px] w-4 h-4 flex items-center justify-center"
                  :class="backgroundColor"
                >
                  {{ itemCount }}
                </span>
              </NuxtLink>
            </ClientOnly>
            <NuxtLink
              to="/"
              :class="[linkColorClass, , navWeight('/profile'), 'my-auto font-light pr-4']"
            >
              <Icon
                name="lucide:circle-user-round"
                class="w-6 h-6"
                :class="linkColorClass"
              />
            </NuxtLink>
          </div>
          <ClientOnly>
            <CartPanel
              v-model:open="cartOpen"
              :dark="false"
            />
            <MobileMenu v-model:open="mobileMenuOpen" :dark="false" />
          </ClientOnly>
        </div>
      </div>
      <div class="flex md:hidden items-center justify-between w-full px-2">
      <!-- Logo -->
      <div class="w-[60%]">
        <NuxtLink to="/" class="image bg-cover bg-center bg-transparent h-12 flex justify-start max-w-[100%]"></NuxtLink>
      </div>

      <!-- Icons -->
      <div class="flex items-center gap-4">
        <!-- Cart -->
        <ClientOnly>
          <NuxtLink
            class="relative cursor-pointer"
            :class="linkColorClass"
            @click="cartOpen = true"
          >
            <Icon name="lucide:shopping-cart" class="w-6 h-6" :class="linkColorClass" />
            <span
              v-if="itemCount > 0"
              class="absolute -top-1 -right-1 bg-text_color text-background_color text-[10px] w-[14px] h-[14px] md:text-[12px] md:w-4 md:h-4 flex items-center justify-center"
            >
              {{ itemCount }}
            </span>
          </NuxtLink>
        </ClientOnly>

        <!-- Hamburger -->
        <button @click="mobileMenuOpen = true">
          <Icon name="lucide:menu" class="w-7 h-7" :class="linkColorClass" />
        </button>
      </div>
      </div>
    </section>
  </template>
  
<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const cartOpen = ref(false)
const itemCount = ref(0)
const mobileMenuOpen = ref(false)
// path helpers
const isPathActive = (path: string) =>
  route.path === path || route.path.startsWith(path + '/')

const navWeight = (path: string) => (isPathActive(path) ? 'font-bold' : 'font-light')

// query helper for the SHOP submenu
const isShopGender = (g: 'male' | 'female') =>
  isPathActive('/shop') && route.query.gender === g

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  },
  navigation: {
    type: Boolean,
    default: true
  }
})

// compute a single Tailwind class you can re-use
const linkColorClass = computed(() =>
props.dark ? 'text-background_color' : 'text-text_color'
)
const backgroundColor = computed(() =>
props.dark ? 'bg-background_color text-text_color' : 'bg-text_color text-background_color'
)

interface CartResponse { items: unknown[] }

let inflight: AbortController | null = null

async function fetchCart() {
  // cancel any previous request
  if (inflight) inflight.abort()
  inflight = new AbortController()

  try {
    const res = await $fetch<CartResponse>('/api/private/get/cart', { signal: inflight.signal })
    itemCount.value = Array.isArray(res?.items) ? res.items.length : 0
  } catch (err) {
    console.warn('Cart fetch failed', err)
  } finally {
    inflight = null
  }
}

const onCartUpdated = () => fetchCart()

onMounted(() => {
  fetchCart()
  window.addEventListener('cart:updated', onCartUpdated)
})

onBeforeUnmount(() => {
  window.removeEventListener('cart:updated', onCartUpdated)
})
</script>

<style scoped>
.image {
background-image: url("public/logo/earth-man920.png");
}
</style>
