<template>
  <div class="bg-inherit text-text_color max-w-2xl mx-auto py-10
   md:py-[150px]">
    <ul class="divide-y divide-text_color/30">
      <li v-for="(item, i) in items" :key="i" class="py-4">
        <Disclosure v-slot="{ open }" as="div">
          <!-- Header -->
          <DisclosureButton
            class="w-full flex items-center justify-between gap-4 text-left"
          >
            <h3 class="text-lg font-semibold">
              {{ item.title }}
            </h3>

            <!-- Chevron -->
            <Icon v-if="!open"
              name="lucide:plus"
              class="h-4 w-4 transition-transform duration-200 ease-out"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            />
            <Icon v-if="open"
              name="lucide:minus"
              class="h-4 w-4 transition-transform duration-200 ease-out"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            />          
          </DisclosureButton>

          <!-- Panel -->
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <DisclosurePanel v-if="open">
              <div class="pt-4 text-sm leading-6 text-text_color/90 space-y-4">
                <!-- String content -->
                <p v-if="typeof item.content === 'string'">
                  {{ item.content }}
                </p>

                <!-- VNode / slot content -->
                <component
                  v-else
                  :is="item.content"
                />

                <!-- Optional link -->
                <div v-if="item.link" class="pt-1">
                  <a
                    :href="item.link.href"
                    class="underline underline-offset-2 hover:opacity-80"
                  >
                    {{ item.link.label }}
                  </a>
                </div>
              </div>
            </DisclosurePanel>
          </transition>
        </Disclosure>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

type LinkInfo = { href: string; label: string }
type Item =
  | { title: string; content: string; link?: LinkInfo }
  | { title: string; content: any; link?: LinkInfo } // allows passing a component

const props = defineProps<{
  items: Item[]
}>()
</script>
