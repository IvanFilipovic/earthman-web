<!-- components/AppFooter.vue -->
<template>
  <footer class="bg-background_color text-text_color border-t border-text_color/30">
    <!-- Top Links Section -->
    <div class="w-full px-4 md:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
      <div v-for="(group, i) in linkGroups" :key="i" class="md:col-span-2">
        <h3 class="font-semibold mb-4 uppercase tracking-wider text-sm">{{ group.title }}</h3>
        <ul class="space-y-2 text-sm">
          <li v-for="(item, j) in group.links" :key="j">
            <NuxtLink
              :to="item.href"
              :class="[
                'hover:underline transition-all',
                isPathActive(item.href) ? 'font-bold underline' : 'font-light'
              ]"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      
      <!-- Logo Section -->
      <div class="md:col-span-4">
        <img
          src="/logo/earth-man920.png"
          alt="Earth-man"
          class="max-w-[100%] h-auto object-contain"
        />
      </div>
    </div>

    <!-- Bottom Copyright Section -->
    <div class="border-t border-text_color/30">
      <div class="max-w-7xl mx-auto px-6 flex flex-col items-center py-6">
        <p class="text-xs">&copy; {{ new Date().getFullYear() }} Earthman. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const route = useRoute()

const linkGroups = [
  {
    title: "EARTHMAN",
    links: [
      { label: "About", href: "/about" },
      { label: "Stories", href: "/collections" },
      { label: "Shop", href: "/shop" },
    ],
  },
  {
    title: "HELP",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Delivery & Returns", href: "/delivery-returns" },
      { label: "Size Guide", href: "/size-guide" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
  {
    title: "SOCIAL",
    links: [
      { label: "Instagram", href: "https://instagram.com", external: true },
      { label: "Facebook", href: "https://facebook.com", external: true },
    ],
  },
]

function isPathActive(path: string): boolean {
  return route.path === path || route.path.startsWith(`${path}/`)
}
</script>