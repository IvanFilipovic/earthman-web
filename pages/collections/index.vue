<template>
  <section class="relative">
    <!-- Nav in normal flow (scrolls away) -->
    <div ref="navWrap" class="relative">
      <AppNavigation :dark="false" />
    </div>

    <!-- Content that slides over the nav while the nav is visible -->
    <div
      class="relative z-20 will-change-transform"
      :style="{ transform: `translateY(${-parallaxY}px)` }"
    >
      <CollectionHome />
    </div>
  </section>
</template>

<script setup lang="ts">
const navWrap = ref<HTMLElement | null>(null)
const navHeight = ref(0)
const parallaxY = ref(0)

// Tweak this for stronger/weaker effect (0.5–0.9 feels nice)
const PARALLAX_FACTOR = 0.6

function measureNav() {
  navHeight.value = navWrap.value?.offsetHeight || 0
}

function onScroll() {
  // Move the content up while the nav is still “coverable”
  // Stop at nav height so after the nav scrolls away we don’t keep shifting.
  const y = Math.min(window.scrollY, navHeight.value)
  parallaxY.value = y * PARALLAX_FACTOR
}

onMounted(() => {
  measureNav()
  window.addEventListener('resize', measureNav)
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', measureNav)
  window.removeEventListener('scroll', onScroll as any)
})
</script>

<style scoped>
.will-change-transform { will-change: transform; }
</style>
