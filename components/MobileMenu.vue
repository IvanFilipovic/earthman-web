<template>
  <TransitionRoot :show="open" as="template">
    <Dialog class="relative z-50" @close="$emit('update:open', false)">
      <!-- Overlay with proper close handling -->
      <TransitionChild
        as="template"
        leave="transition-opacity ease-in duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div 
          class="fixed inset-0 bg-text_color/30 transition-opacity" 
          aria-hidden="true"
        />
      </TransitionChild>

      <!-- Panel container -->
      <div class="fixed inset-0 overflow-hidden w-[80%]">
        <div class="absolute inset-0 overflow-hidden w-[80%]">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex w-[80%]">
            <TransitionChild
              as="template"
              enter="transform transition ease-out duration-200"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in duration-500"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel
                class="pointer-events-auto w-full md:max-w-2xl h-full flex flex-col shadow-xl"
                :class="dark ? 'bg-text_color text-background_color' : 'bg-background_color text-text_color'"
              >
                <!-- Header -->
                <div 
                  class="px-4 md:px-8 py-6 gap-6 border-b"
                  :class="dark ? 'border-background_color' : 'border-text_color/30'"
                >
                  <div class="flex items-baseline justify-center">
                    <DialogTitle class="text-md tracking-wider uppercase">
                      <NuxtLink
                        to="/"
                        class="flex mx-auto max-w-[100%]"
                        @click="$emit('update:open', false)"
                      >
                        <img
                          src="/logo/earth-man920.png"
                          alt="Logo"
                          class="w-full h-auto max-h-12 object-contain object-left"
                        />
                      </NuxtLink>
                    </DialogTitle>
                  </div>
                </div>
                
                <!-- Main Navigation -->
                <div class="flex flex-col items-end overflow-y-auto py-5 space-y-6">
                  <NuxtLink
                    to="/shop"
                    :class="[linkColorClass, navWeight('/shop'), 'text-sm my-auto px-4']"
                    @click="$emit('update:open', false)"
                  >
                    SHOP
                  </NuxtLink>
                  <NuxtLink
                    to="/collections"
                    :class="[linkColorClass, navWeight('/collections'), 'text-sm my-auto px-4']"
                    @click="$emit('update:open', false)"
                  >
                    STORIES
                  </NuxtLink>
                  <NuxtLink
                    to="/about"
                    :class="[linkColorClass, navWeight('/about'), 'text-sm my-auto px-4']"
                    @click="$emit('update:open', false)"
                  >
                    ABOUT
                  </NuxtLink>
                </div>
                
                <!-- Link Groups -->
                <div class="flex flex-col items-end overflow-y-auto py-5 space-y-6">
                  <div v-for="(group, i) in linkGroups" :key="i" class="flex flex-col items-end">
                    <h3 class="font-bold mb-4 uppercase px-4">{{ group.title }}</h3>
                    <ul class="space-y-4 text-xs px-4 uppercase my-auto items-end flex flex-col">
                      <li v-for="(item, j) in group.links" :key="j">
                        <NuxtLink
                          :to="item.href"
                          class="hover:underline"
                          @click="$emit('update:open', false)"
                        >
                          {{ item.label }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <!-- Social Links -->
                <div class="flex flex-col items-end overflow-y-auto py-5 space-y-6">
                  <div class="flex flex-col items-end">
                    <h3 class="font-bold mb-4 uppercase px-4">Social</h3>
                    <ul class="space-y-4 text-xs px-4 uppercase my-auto items-end flex flex-row">
                      <li>
                        <NuxtLink
                          to="/f"
                          class="hover:underline pl-4"
                          @click="$emit('update:open', false)"
                        >
                          <Icon name="lucide:instagram" class="w-5 h-5" :class="linkColorClass" />
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/"
                          class="hover:underline pl-4"
                          @click="$emit('update:open', false)"
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
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

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
      { label: "Contact Us", href: "/" },
      { label: "FAQs", href: "/" },
      { label: "Delivery and Returns", href: "/" },
      { label: "Size Guide", href: "/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/" },
      { label: "Terms and Conditions", href: "/" },
    ],
  }
]

const isPathActive = (path: string) =>
  route.path === path || route.path.startsWith(path + '/')

const navWeight = (path: string) => (isPathActive(path) ? 'font-bold' : 'font-light')

const linkColorClass = computed(() =>
  props.dark ? 'text-background_color' : 'text-text_color'
)
</script>