<!-- error.vue - Interactive version -->
<template>
  <div class="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
    <!-- Parallax stars -->
    <div 
      ref="starsContainer"
      class="absolute inset-0 pointer-events-none bg-background_color"
      @mousemove="handleMouseMove"
    >
      <div 
        v-for="i in 50" 
        :key="i"
        class="absolute w-1 h-1 bg-text_color/30 rounded-full"
        :style="getStarStyle(i)"
        :data-speed="Math.random() * 2 + 1"
      ></div>
    </div>

    <div class="max-w-3xl w-full text-center relative z-10 text-text_color">
      <!-- Glitch effect 404 -->
      <div class="relative mb-8 glitch-container">
        <h1 class="text-[120px] md:text-[200px] font-bold leading-none glitch text-text_color" data-text="404">
          404
        </h1>
      </div>

      <h2 class="text-2xl md:text-4xl font-bold mb-4">
        Houston, we have a problem
      </h2>
      <p class="text-base md:text-lg opacity-70 mb-8 max-w-md mx-auto">
        This page is lost somewhere between Earth and Mars. 
        Let's navigate you back to familiar territory.
      </p>

      <!-- Animated buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button 
          @click="navigateHome"
          class="btn btn--primary w-full sm:w-auto group"
        >
          <span class="btn__text flex items-center gap-2">
            <Icon name="lucide:earth" class="w-4 h-4 group-hover:scale-110 transition-transform" />
            Return to Earth
          </span>
          <span class="btn__fill"></span>
        </button>

        <NuxtLink 
          to="/shop" 
          class="btn btn--secondary w-full sm:w-auto group"
        >
          <span class="btn__text flex items-center gap-2">
            <Icon name="lucide:shopping-bag" class="w-4 h-4 group-hover:scale-110 transition-transform" />
            Explore Shop
          </span>
          <span class="btn__fill"></span>
        </NuxtLink>
      </div>

      <!-- Countdown easter egg -->
      <div class="mt-12 text-sm opacity-50">
        <p>Auto-redirecting in {{ countdown }}s...</p>
        <button 
          @click="stopCountdown" 
          class="underline hover:no-underline mt-2"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const starsContainer = ref<HTMLElement | null>(null)
const countdown = ref(10)
let countdownInterval: NodeJS.Timeout | null = null

function getStarStyle(index: number): Record<string, string> {
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    opacity: String(Math.random() * 0.8 + 0.2),
    transform: `scale(${Math.random() * 2 + 0.5})`
  }
}

function handleMouseMove(event: MouseEvent): void {
  if (!starsContainer.value) return
  
  const stars = starsContainer.value.querySelectorAll('[data-speed]')
  const { clientX, clientY } = event
  
  stars.forEach((star) => {
    const speed = parseFloat((star as HTMLElement).dataset.speed || '1')
    const x = (clientX - window.innerWidth / 2) * speed * 0.01
    const y = (clientY - window.innerHeight / 2) * speed * 0.01
    
    ;(star as HTMLElement).style.transform = `translate(${x}px, ${y}px)`
  })
}

function navigateHome(): void {
  clearError({ redirect: '/' })
}

function stopCountdown(): void {
  if (countdownInterval) {
    clearInterval(countdownInterval)
    countdownInterval = null
  }
}

onMounted(() => {
  countdownInterval = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      navigateHome()
    }
  }, 1000)
})

onBeforeUnmount(() => {
  stopCountdown()
})

defineProps<{ error: { statusCode: number; statusMessage?: string } }>()
</script>

<style scoped>
.glitch {
  position: relative;
  animation: glitch 1s linear infinite;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 2px;
  text-shadow: -2px 0 #0040ff;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim 5s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: -2px 0 #00c90d;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(10px, 9999px, 31px, 0); }
  20% { clip: rect(70px, 9999px, 71px, 0); }
  40% { clip: rect(60px, 9999px, 100px, 0); }
  60% { clip: rect(30px, 9999px, 130px, 0); }
  80% { clip: rect(90px, 9999px, 20px, 0); }
  100% { clip: rect(60px, 9999px, 80px, 0); }
}

@keyframes glitch-anim2 {
  0% { clip: rect(65px, 9999px, 119px, 0); }
  20% { clip: rect(105px, 9999px, 85px, 0); }
  40% { clip: rect(40px, 9999px, 45px, 0); }
  60% { clip: rect(25px, 9999px, 140px, 0); }
  80% { clip: rect(95px, 9999px, 15px, 0); }
  100% { clip: rect(55px, 9999px, 75px, 0); }
}
</style>