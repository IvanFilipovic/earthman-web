<template>
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
        >COLLECTIONS</NuxtLink>

        <NuxtLink
          to="/about"
          :class="[linkColorClass, navWeight('/about'), 'text-sm my-auto px-4']"
        >OUR STORY</NuxtLink>

        <!-- ✅ Client-only Cart button -->
        <ClientOnly>
          <NuxtLink
            class="relative my-auto px-4"
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
        <CartPanel
          v-model:open="cartOpen"
          :dark="false"
          api-base="http://127.0.0.1:8000"
        />
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import {
  Menu, MenuButton, MenuItems, MenuItem,
  TransitionRoot, TransitionChild
} from '@headlessui/vue'

const props = defineProps({ dark: { type: Boolean, default: false } })
const route = useRoute()
const cartOpen = ref(false)

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
const API = 'http://127.0.0.1:8000'
const itemCount = ref(0)

interface CartResponse {
  items: unknown[]
}

async function fetchCart() {
  try {
    const res = await $fetch<CartResponse>(`${API}/public/cart/`, {
      credentials: 'include'
    })
    itemCount.value = Array.isArray(res.items) ? res.items.length : 0
  } catch (err) {
    console.warn('Cart fetch failed', err)
  }
}
// listener ref so we can remove exactly the same fn
const onCartUpdated = () => { fetchCart() }

onMounted(() => {
  fetchCart()
  // attach listeners only on client
  window.addEventListener('cart:updated', onCartUpdated)
  // (optional) refresh when tab regains focus
  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') fetchCart()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('cart:updated', onCartUpdated)
})
</script>
