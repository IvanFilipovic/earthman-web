<template>
  <div class="space-y-16">
    <div
      v-for="item in items"
      :key="item.id"
      class="h-screen flex items-center justify-center"
    >
      <div
        class="max-w-xl p-8 bg-white rounded shadow-lg opacity-0 translate-y-24"
        v-gsap.to="{
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            // markers: true
          }
        }"
      >
        <h2 class="text-2xl font-bold mb-4">{{ item.name }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
