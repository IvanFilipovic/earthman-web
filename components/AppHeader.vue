<template>
    <section class="flex flex-col w-full bg-transparent z-50">
      <div class="image bg-cover bg-center bg-transparent h-40 flex justify-center max-w-[100%]">
      </div>
      <div class="flex flex-row mx-auto space-x-8 pt-4">
        <div class="flex flex-auto">
          <ClientOnly>
          <Menu as="div" class="text-sm my-auto font-light" v-slot="{ open }">
            <MenuButton
              :class="[linkColorClass, navWeight('/shop'), 'text-sm px-4 inline-flex items-center']"            >
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
              :class="[linkColorClass, 'text-sm font-light px-4 inline-flex items-center gap-1']"
            >
              SHOP
              <Icon name="lucide:chevron-down" class="w-4 h-4" :class="linkColorClass" />
            </NuxtLink>
          </template>
        </ClientOnly>
          
        <NuxtLink
          to="/collections"
          :class="[linkColorClass, navWeight('/collections'), 'text-sm my-auto px-4']"
        >COLLECTIONS</NuxtLink>
        <NuxtLink
          to="/about"
          :class="[linkColorClass, navWeight('/about'), 'text-sm my-auto px-4']"
        >ABOUT</NuxtLink>
        </div>
        <div class="flex flex-auto">
          <NuxtLink
            to="/"
            :class="[linkColorClass, , navWeight('/profile'), 'my-auto font-light px-4']"
          >
            <Icon
              name="lucide:circle-user-round"
              class="w-6 h-6"
              :class="linkColorClass"
            />
          </NuxtLink>
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
</script>

<style scoped>
.image {
background-image: url("public/logo/black_logo1.png");
}
</style>
