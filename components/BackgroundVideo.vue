<template>
  <div :class="wrapperClasses">
    <video
      ref="videoRef"
      class="absolute inset-0 w-full h-full object-cover"
      :poster="poster"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      @error="handleVideoError"
    >
      <source 
        v-if="isMobile && mobileSrc" 
        :src="mobileSrc" 
        type="video/mp4" 
      />
      <source 
        v-else
        :src="src" 
        type="video/mp4" 
      />
      Your browser does not support the video tag.
    </video>
    <div
      v-if="overlay"
      class="absolute inset-0"
      :class="overlayClasses"
    ></div>
    <div class="flex flex-col items-center justify-center h-full text-background_color px-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  src: string
  mobileSrc?: string
  poster?: string
  wrapperClasses?: string
  overlay?: boolean
  overlayClasses?: string
}

const props = withDefaults(defineProps<Props>(), {
  poster: '',
  wrapperClasses: 'relative w-full h-screen overflow-hidden',
  overlay: true,
  overlayClasses: 'bg-black/40'
})

const videoRef = ref<HTMLVideoElement | null>(null)

const isMobile = computed(() => {
  if (process.client) {
    return window.innerWidth < 768
  }
  return false
})

function handleVideoError(event: Event): void {
  const video = event.target as HTMLVideoElement
  console.warn('Video playback error:', video.error)
  
  if (video.error) {
    console.error('Video error code:', video.error.code)
    console.error('Video error message:', video.error.message)
  }
}

function ensureVideoLoop(): void {
  const video = videoRef.value
  if (!video) return

  video.addEventListener('ended', () => {
    video.currentTime = 0
    video.play().catch(err => {
      console.warn('Video replay failed:', err)
    })
  })
}

onMounted(() => {
  ensureVideoLoop()
  
  const video = videoRef.value
  if (video) {
    video.play().catch(err => {
      console.warn('Initial video play failed:', err)
    })
  }
})
</script>