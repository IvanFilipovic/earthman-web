<!-- components/AppFooter.vue -->
<template>
  <footer class="bg-background_color text-text_color border-t border-text_color/30">
    <!-- Top Links Section -->
    <div class="w-full px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">
      <div v-for="(group, i) in linkGroups" :key="i" class="md:col-span-2">
        <h3 class="font-semibold mb-4">{{ group.title }}</h3>
        <ul class="space-y-2 text-sm">
          <li v-for="(item, j) in group.links" :key="j">
            <NuxtLink
              :to="item.href"
              class="hover:underline"
            >{{ item.label }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="md:col-span-4">
        <img
          src="~public/logo/earth-man920.png"
          alt="Your Brand Name"
          class="max-w-[100%] h-auto"
        />
      </div>
    </div>
    <div class="border-t border-text_color/30">
      <div class="max-w-7xl mx-auto px-6 flex flex-col items-center py-6">
        <p class="text-xs">&copy; {{ new Date().getFullYear() }} Earthman. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const linkGroups = [
  {
    title: "EARTHMAN",
    links: [
      { label: "About",      href: "/about" },
      { label: "Stories",      href: "/collections" },
      { label: "Shop",          href: "/shop" },
    ],
  },
  {
    title: "HELP",
    links: [
      { label: "Contact Us",       href: "/" },
      { label: "FAQs",             href: "/" },
      { label: "Delivery and Returns", href: "/" },
      { label: "Size Guide",       href: "/" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { label: "Privacy Policy",      href: "/" },
      { label: "Terms and Conditions", href: "/" },
    ],
  },
  {
    title: "SOCIAL",
    links: [
      { label: "Instagram", href: "/" },
      { label: "Facebook",  href: "/" },
      { label: "LinkedIn",  href: "/" },
    ],
  },
]
</script>
