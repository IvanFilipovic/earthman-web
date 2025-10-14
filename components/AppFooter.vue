<!-- components/AppFooter.vue -->
<template>
  <footer class="bg-background_color texttext_color">
    <!-- Top Links Section -->
    <div class="max-w-7xl px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div v-for="(group, i) in linkGroups" :key="i">
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
    </div>

    <!-- Brand Image & Copyright -->
    <div class="border-t border-gray-300">
      <div class="max-w-7xl mx-auto px-6 flex flex-col items-center py-6">
        <!-- Replace with your own large-brand image -->
        <img
          src="~public/logo/black_logo.png"
          alt="Your Brand Name"
          class="max-w-[100%] h-auto mb-6"
        />

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
      { label: "Our Story",      href: "/about" },
      { label: "Collections", href: "/collections" },
      { label: "Shop",          href: "/shop" },
    ],
  },
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
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "/" },
      { label: "Facebook",  href: "/" },
      { label: "LinkedIn",  href: "/" },
    ],
  },
]
</script>
