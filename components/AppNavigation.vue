<template>
  <div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-6 gap-6 border-b border-text_color/30">
    <!-- ──────────────── DESKTOP NAVIGATION ──────────────── -->
    <div class="hidden md:flex w-full">
      <div class="w-full md:w-1/2">
        <NuxtLink
          to="/"
          class="image bg-cover bg-center bg-transparent h-40 flex justify-center max-w-[100%]"
        ></NuxtLink>
      </div>

      <div class="w-full md:w-1/2 flex flex-col">
        <section class="flex flex-col w-full bg-transparent z-50 my-auto">
          <div class="flex pt-4">
            <div class="flex flex-row justify-end w-full mx-auto space-x-4 py-4">

              <!-- SHOP dropdown -->
              <ClientOnly>
                <Menu as="div" class="text-sm my-auto font-light" v-slot="{ open }">
                  <MenuButton
                    :class="[linkColorClass, navWeight('/shop'), 'text-sm px-4 inline-flex items-center']"
                  >
                    SHOP
                    <Icon name="lucide:chevron-down" class="w-4 h-4 my-auto mx-1" :class="linkColorClass" />
                  </MenuButton>

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
                                active ? (props.dark ? 'bg-text_color/10' : 'bg-background_color/5') : ''
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
                                active ? (props.dark ? 'bg-text_color/10' : 'bg-background_color/5') : ''
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

                <template #fallback>
                  <NuxtLink
                    to="/shop"
                    :class="[linkColorClass, 'text-sm font-light px-4 inline-flex items-center gap-1']"
                  >
                    SHOP
                    <Icon name="lucide:chevron-down" class="w-4 h-4" :class="linkColorClass" />
                  </NuxtLink>
                </template>
              </ClientOnly>

              <!-- Static links -->
              <NuxtLink
                to="/collections"
                :class="[linkColorClass, navWeight('/collections'), 'text-sm my-auto px-4']"
              >PROJECTS</NuxtLink>

              <NuxtLink
                to="/about"
                :class="[linkColorClass, navWeight('/about'), 'text-sm my-auto px-4']"
              >OUR STORY</NuxtLink>

              <!-- Cart -->
              <ClientOnly>
                <NuxtLink
                  class="relative my-auto px-4 cursor-pointer"
                  :class="[linkColorClass, navWeight('/cart')]"
                  @click="cartOpen = true"
                >
                  <Icon name="lucide:shopping-cart" class="w-6 h-6" :class="linkColorClass" />
                  <span
                    v-if="itemCount > 0"
                    class="absolute -top-1 -right-1 bg-text_color text-background_color text-[12px] w-4 h-4 flex items-center justify-center"
                  >
                    {{ itemCount }}
                  </span>
                </NuxtLink>
              </ClientOnly>

              <!-- User icon -->
              <NuxtLink
                to="/profile"
                :class="[linkColorClass, navWeight('/profile'), 'my-auto font-light pl-4']"
              >
                <Icon name="lucide:circle-user-round" class="w-6 h-6" :class="linkColorClass" />
              </NuxtLink>

            </div>
            <ClientOnly>
              <CartPanel v-model:open="cartOpen" :dark="false" />
              <MobileMenu v-model:open="mobileMenuOpen" :dark="false" />
            </ClientOnly>
          </div>
        </section>
      </div>
    </div>

    <!-- ──────────────── MOBILE NAVIGATION ──────────────── -->
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
  </div>
</template>


<script setup lang="ts">
import {
  Menu, MenuButton, MenuItems, MenuItem,
  TransitionRoot, TransitionChild
} from '@headlessui/vue'

const props = defineProps({ dark: { type: Boolean, default: false } })
const route = useRoute()
const cartOpen = ref(false)
const config = useRuntimeConfig()
const itemCount = ref(0)
const mobileMenuOpen = ref(false)


// --- NAV LOGIC ---
const isPathActive = (path: string) =>
  route.path === path || route.path.startsWith(path + '/')
const navWeight = (path: string) => (isPathActive(path) ? 'font-bold' : 'font-light')
const isShopGender = (g: 'male' | 'female') =>
  isPathActive('/shop') && route.query.gender === g
const linkColorClass = computed(() =>
  props.dark ? 'text-background_color' : 'text-text_color'
)

// --- CART LOGIC ---

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
