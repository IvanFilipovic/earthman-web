<template>
  <TransitionRoot :show="open">
    <Dialog class="relative z-50" @close="$emit('update:open', false)">
        <TransitionChild
            leave="transition-opacity ease-in duration-500"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
            <div class="fixed inset-0 bg-text_color/30" aria-hidden="true"></div>
        </TransitionChild>
        <div 
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-easing="ease-in-out"
            class="fixed inset-0 overflow-hidden">
            <div class="absolute inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild
                enter="transform transition ease-out duration-200"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in duration-500"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
            >
                <DialogPanel
                    class="w-full md:max-w-2xl h-full flex flex-col shadow-xl"
                    :class="dark ? 'bg-text_color text-background_color' : 'bg-background_color text-text_color'"
                    >
                    <div class="px-4 md:px-8 py-6 gap-6 border-b"
                        :class="dark ? 'border-background_color' : 'border-text_color/30'">
                        <div class="flex items-baseline justify-center">
                            <DialogTitle class="text-md tracking-wider uppercase">
                                <NuxtLink
                                    to="/"
                                    class="flex mx-auto max-w-[100%]">
                                    <img
                                        src="/logo/black_logo1.png"
                                        alt="Logo"
                                        class="h-12 mx-auto"
                                    />
                                </NuxtLink>
                            </DialogTitle>
                        </div>
                    </div>
                    
                    <div class="flex flex-col items-end overflow-y-auto py-5 space-y-6">
                        <!-- SHOP dropdown -->
                        <ClientOnly>
                            <Menu as="div" class="text-sm my-auto font-light" v-slot="{ open }">
                            <MenuButton
                                :class="[linkColorClass, navWeight('/shop'), 'text-sm px-4 inline-flex items-center']"
                            >
                                SHOP
                                <Icon name="lucide:chevron-down" class="w-4 h-4 my-auto ml-1" :class="linkColorClass" />
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
                                    class="absolute mt-3 w-40 origin-top-left shadow-sm ring-1 ring-text_color/5 focus:outline-none z-50 right-2"
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
                        
                    </div>
                    <div class="flex flex-col items-end overflow-y-auto py-5 space-y-6">
                        <div v-for="(group, i) in linkGroups" :key="i" class="flex flex-col items-end">
                            <h3 class="font-bold mb-4 uppercase px-4">{{ group.title }}</h3>
                            <ul class="space-y-4 text-xs px-4 uppercase my-auto items-end flex flex-col
                            ">
                            <li v-for="(item, j) in group.links" :key="j">
                                <NuxtLink
                                :to="item.href"
                                class="hover:underline"
                                >{{ item.label }}</NuxtLink>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col items-end overflow-y-auto py-5 space-y-6">
                        <div  class="flex flex-col items-end">
                            <h3 class="font-bold mb-4 uppercase px-4">Social</h3>
                            <ul class="space-y-4 text-xs px-4 uppercase my-auto items-end flex flex-row
                            ">
                            <li>
                                <NuxtLink
                                to="/f"
                                class="hover:underline pl-4
                                "
                                >
                                <Icon name="lucide:instagram" class="w-5 h-5" :class="linkColorClass" />
                            </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                to="/"
                                class="hover:underline pl-4
                                "
                                >
                                <Icon name="lucide:facebook" class="w-5 h-5" :class="linkColorClass" />
                            </NuxtLink>
                            </li>
                            </ul>
                        </div>
                    </div>
                </DialogPanel>
            </TransitionChild>
            </div>
        </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, MenuItems, Menu, MenuButton, MenuItem } from '@headlessui/vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  dark: { type: Boolean, default: false }
})
const route = useRoute()
const emit = defineEmits(['update:open'])
const linkGroups = [
  {
    title: "Help",
    links: [
      { label: "Contact Us",       href: "/" },
      { label: "FAQs",             href: "/" },
      { label: "Delivery and Returns", href: "/" },
      { label: "Size Guide",       href: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy",      href: "/" },
      { label: "Terms and Conditions", href: "/" },
    ],
  }
]

// --- NAV LOGIC ---
const isPathActive = (path: string) =>
  route.path === path || route.path.startsWith(path + '/')
const navWeight = (path: string) => (isPathActive(path) ? 'font-bold' : 'font-light')
const isShopGender = (g: 'male' | 'female') =>
  isPathActive('/shop') && route.query.gender === g
const linkColorClass = computed(() =>
  props.dark ? 'text-background_color' : 'text-text_color'
)
</script>

