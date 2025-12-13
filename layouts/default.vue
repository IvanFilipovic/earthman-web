<template>
    <div id="smooth-wrapper" class="flex flex-col w-full bg-background_color">
        <div id="smooth-content">
            <slot />
            <AppFooter />
        </div>
        <AppToastContainer />
        <CookieControl />
    </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
})

</script>
<style>
body {
  background-color: #e2e2e2;
  font-family: "Neue Einstellung";
}
</style>