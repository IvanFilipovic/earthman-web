<template>
    <section class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-6 gap-6">
      <div class="hidden md:flex flex-col w-full">
        <div class="w-full">
        <NuxtLink to="/" class="image bg-cover bg-center bg-transparent h-40 flex justify-start max-w-[100%] -ml-20"></NuxtLink>
        </div>
        <div class="flex">
          <div class="flex flex-row justify-start w-full mx-auto gap-x-4 py-4">
            <ClientOnly>
            <Menu as="div" class="text-sm my-auto font-light" v-slot="{ open }">
              <MenuButton
                :class="[linkColorClass, navWeight('/shop'), 'text-sm pr-4 inline-flex items-center']"            >
                SHOP
                <Icon name="lucide:chevron-down" class="w-4 h-4 my-auto mx-1" :class="linkColorClass" />
              </MenuButton>

              <!-- Headless UI transitions (your preferred approach) -->
              <TransitionRoot :show="open">
                <TransitionChild
                  enter="transition-opacity ease-out duration-200"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="transition-opacity ease-in duration-150"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                  <MenuItems
                    class="absolute mt-3 w-40 origin-top-left shadow-sm ring-1 ring-text_color/5 focus:outline-none z-50"
                    :class="props.dark ? 'bg-background_color text-text_color' : 'bg-text_color text-background_color'"
                    static
                  >
                    <div class="py-1">
                      <MenuItem v-slot="{ active }">
                        <NuxtLink
                          :to="{ path: '/shop', query: { gender: 'female' } }"
                          class="block px-4 py-2 text-sm"
                          :class="[
                            isShopGender('female') ? 'font-bold' : '',
                            active ? (props.dark ? 'bg-text_color/10' : 'bg-background_color/5') : '',
                            props.dark ? 'text-text_color' : 'text-background_color'
                          ]"
                        >
                          WOMAN
                        </NuxtLink>
                      </MenuItem>

                      <MenuItem v-slot="{ active }">
                        <NuxtLink
                          :to="{ path: '/shop', query: { gender: 'male' } }"
                          class="block px-4 py-2 text-sm"
                          :class="[
                            isShopGender('male') ? 'font-bold' : '',
                            active ? (props.dark ? 'bg-text_color/10' : 'bg-background_color/5') : '',
                            props.dark ? 'text-text_color' : 'text-background_color'
                          ]"
                        >
                          MAN
                        </NuxtLink>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </TransitionChild>
              </TransitionRoot>
            </Menu>

            <!-- SSR fallback (prevents hydration mismatch) -->
            <template #fallback>
              <NuxtLink
                to="/shop"
                :class="[linkColorClass, 'text-sm font-light pr-4 inline-flex items-center gap-1']"
              >
                SHOP
                <Icon name="lucide:chevron-down" class="w-4 h-4" :class="linkColorClass" />
              </NuxtLink>
            </template>
            </ClientOnly>
              
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
import {
  Menu, MenuButton, MenuItems, MenuItem,
  TransitionRoot, TransitionChild
} from '@headlessui/vue'

const route = useRoute()
const config = useRuntimeConfig()
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
background-image: url("public/logo/black_logo1.png");
}
</style>
