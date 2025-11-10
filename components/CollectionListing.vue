<template>
  <div id="smooth-wrapper">
    <div v-if="loading" class="fixed inset-0 flex items-center justify-center bg-background_color">
      <p class="text-text_color text-xl">Loading collections...</p>
    </div>

    <div v-else id="smooth-content" class="stage">
      <section
        v-for="(collection, i) in collections"
        :key="collection.id || i"
        class="slide"
      >
        <div class="col col--1">
          <div 
            class="col__content" 
            :class="`col__content--${getColorVariant(i)}`"
          >
            <h2 :class="`col__content-title--${getColorVariant(i)}`">
              <span class="line__inner">{{ collection.name || 'Collection' }}</span>
            </h2>

            <div class="col__content-wrap">
              <NuxtLink
                v-if="collection.slug"
                :to="`/collections/${encodeURIComponent(collection.slug)}`"
                class="btn"
                :class="getButtonVariant(i)"
              >
                <span class="btn__text">{{ $t('story_button') }}</span>
                <span class="btn__fill"></span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="col col--2">
          <div class="col__image-wrap">
            <img
              class="img"
              :src="collection.element_one_image"
              :alt="collection.name || `Collection ${i + 1}`"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

let ScrollSmoother: any = null
try {
  ScrollSmoother = (await import('gsap/ScrollSmoother')).ScrollSmoother
} catch {}

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
if (ScrollSmoother) gsap.registerPlugin(ScrollSmoother as any)

interface Collection {
  id: number
  name: string
  slug: string
  element_one: string
  element_one_image: string
}

const config = useRuntimeConfig()
const collections = ref<Collection[]>([])
const loading = ref(true)

async function fetchCollections(): Promise<void> {
  try {
    loading.value = true
    const data = await $fetch<Collection[]>(`${config.public.apiBase}/public/collections/`)
    collections.value = data || []
  } catch (error) {
    console.error('Failed to fetch collections:', error)
    collections.value = []
  } finally {
    loading.value = false
  }
}

let smoother: any = null
let ctx: gsap.Context | null = null

function getColorVariant(index: number): number {
  return (index % 2) + 1
}

function getButtonVariant(index: number): string {
  return index % 2 === 0 ? 'btn--primary' : 'btn--secondary'
}

onMounted(async () => {
  await fetchCollections()

  nextTick(() => {
    ctx = gsap.context(() => {
    if (ScrollSmoother) {
      smoother = ScrollSmoother.create({
        smooth: 1.2,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.2,
        wrapper: '#smooth-wrapper',
        content: '#smooth-content'
      })
    }

    document.querySelectorAll<HTMLElement>('.slide').forEach((slide) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: '40% 50%'
        }
      })

      tl.from(slide.querySelector('.line__inner'), {
        y: 120,
        duration: 1.4,
        ease: 'power4.out'
      })
        .from(
          slide.querySelector('.btn'),
          {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out'
          },
          0.2
        )
    })

    document.querySelectorAll<HTMLElement>('.slide').forEach((slide) => {
      const imageWrap = slide.querySelector('.col__image-wrap') as HTMLElement

      gsap.fromTo(
        imageWrap,
        { y: '-30vh' },
        {
          y: '30vh',
          ease: 'none',
          scrollTrigger: {
            trigger: slide,
            scrub: true,
            start: 'top bottom',
            end: 'bottom top'
          }
        }
      )
    })

    gsap.set('.stage', { autoAlpha: 1 })
    })
  })

  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  ctx?.revert()
  ctx = null
  smoother?.kill?.()
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

function handleResize(): void {
  ScrollTrigger.refresh()
}
// Handle CartPanel and other panels
if (import.meta.client) {
  const smootherRef = computed(() => smoother)
  useScrollSmootherPanels(smootherRef)
}
</script>

<style scoped>
.stage {
  position: relative;
  background: theme('colors.background_color');
  visibility: hidden;
  min-height: 100vh;
}

.slide {
  display: flex;
  align-items: stretch;
  min-height: 100vh;
  overflow: hidden;
}

.col {
  flex-basis: 50%;
}

.col--1 {
  position: relative;
  z-index: 1;
}

.col--2 {
  position: relative;
  overflow: hidden;
}

.col__content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 6vw 6vw 10vw;
}

.col__content--1 {
  background: theme('colors.background_color');
  color: theme('colors.background_color');
}

.col__content--2 {
  background: theme('colors.text_color');
  color: theme('colors.text_color');
}

.col__content-title--1 {
  margin: 0 0 3rem;
  color: theme('colors.text_color');
  overflow: hidden;
  width: fit-content;
  padding: 0 8px;
}

.col__content-title--2 {
  color: theme('colors.background_color');
  margin: 0 0 3rem;
  overflow: hidden;
  width: fit-content;
  padding: 0 8px;
}

.line__inner {
  display: block;
  font-size: clamp(2rem, 8vw, 8rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1;
  text-transform: uppercase;
}

.col__content-wrap {
  display: flex;
  justify-content: flex-end;
}

.col__image-wrap {
  position: absolute;
  left: 0;
  width: 100%;
  height: 160vh;
}

.img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .slide {
    min-height: 100vh;
    flex-direction: row;
  }

  .col {
    flex-basis: 50%;
  }

  .col--1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .col--2 {
    min-height: 100vh;
  }

  .col__content {
    width: 100%;
    height: 100%;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .col__content-title--1 {
    margin: 0 0 1.5rem;
  } 
  .col__content-title--2 {
    margin: 0 0 1.5rem;
  }

  .col__content-wrap {
    justify-content: center;
    width: 100%;
  }

  .line__inner {
    font-size: 24px;
    text-align: center;
    line-height: 1.2;
  }

  .col__image-wrap {
    position: relative;
    height: 100%;
    width: 100%;
  }

  .img {
    object-position: center;
  }

  .btn {
    padding: 0.75rem 1.25rem;
    font-size: 0.625rem;
  }
}
</style>