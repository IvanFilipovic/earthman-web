<template>
  <div class="collections-page">
    <div ref="navWrap" class="fixed top-0 left-0 w-full z-50">
      <AppNavigation :dark="isDark" />
    </div>

    <Transition name="fade" mode="out-in" @after-enter="initializeGSAP">
      <div v-if="loading" key="loading" class="fixed inset-0 flex items-center justify-center bg-background_color z-40">
        <p class="text-text_color text-xl">Loading collections...</p>
      </div>

      <div v-else key="content" id="smooth-wrapper">
        <div id="smooth-content">
          <section
            v-for="(collection, i) in collections"
            :key="collection.id || i"
            class="slide"
            :class="`slide--${(i % 2) + 1}`"
          >
            <div class="slide__bg" :style="{ backgroundImage: `url(${collection.element_one_image})` }">
              <div class="slide__overlay"></div>
            </div>

            <div class="slide__content">
              <div class="slide__content-inner">
                <h2 class="slide__title">
                  <span class="slide__title-line">
                    <span class="line__inner">{{ collection.name }}</span>
                  </span>
                </h2>

                <div class="slide__cta">
                  <NuxtLink
                    :to="`/collections/${encodeURIComponent(collection.slug)}`"
                    class="btn btn--secondary"
                  >
                    <span class="btn__text">View Story</span>
                    <span class="btn__fill"></span>
                  </NuxtLink>
                </div>
              </div>

              <button
                v-if="i < collections.length - 1"
                type="button"
                class="slide__scroll-btn"
                @click="scrollToNext(i + 1)"
              >
                <span class="slide__scroll-line"></span>
                <Icon name="lucide:chevron-down" class="slide__scroll-icon" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </Transition>
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
const navWrap = ref<HTMLElement | null>(null)
const isDark = ref(false)
const loading = ref(true)
const collections = ref<Collection[]>([])

let smoother: any = null
let ctx: gsap.Context | null = null

function scrollToNext(index: number): void {
  const target = document.querySelector(`.slide:nth-child(${index + 1})`)
  if (target) {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: target, offsetY: 0 },
      ease: 'power2.inOut'
    })
  }
}

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

function initializeGSAP(): void {
  // Wait for DOM to be fully ready after transition
  nextTick(() => {
    const wrapper = document.querySelector('#smooth-wrapper')
    const content = document.querySelector('#smooth-content')
    const slides = document.querySelectorAll('.slide')
    
    if (!wrapper || !content || slides.length === 0) {
      console.error('Elements not found for GSAP initialization')
      return
    }

    ctx = gsap.context(() => {
      // Initialize ScrollSmoother
      if (ScrollSmoother) {
        try {
          smoother = ScrollSmoother.create({
            smooth: 1.5,
            effects: true,
            normalizeScroll: true,
            smoothTouch: 0.2,
            wrapper: '#smooth-wrapper',
            content: '#smooth-content'
          })
        } catch (error) {
          console.error('ScrollSmoother error:', error)
        }
      }

      // Animate slides
      slides.forEach((slide, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: 'top 60%',
            end: 'bottom 40%',
            onEnter: () => {
              isDark.value = index % 2 === 0
            },
            onEnterBack: () => {
              isDark.value = index % 2 === 0
            }
          }
        })

        const lineInner = slide.querySelector('.line__inner')
        const btn = slide.querySelector('.btn')
        const scrollBtn = slide.querySelector('.slide__scroll-btn')

        if (lineInner) {
          tl.from(lineInner, {
            y: 120,
            duration: 1.4,
            ease: 'power4.out'
          })
        }

        if (btn) {
          tl.from(btn, {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out'
          }, 0.2)
        }

        if (scrollBtn) {
          tl.from(scrollBtn, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
          }, 0.3)
        }
      })

      // Parallax backgrounds
      slides.forEach((slide) => {
        const bg = slide.querySelector('.slide__bg') as HTMLElement
        
        if (bg) {
          gsap.fromTo(
            bg,
            { y: '-20vh', scale: 1.2 },
            {
              y: '20vh',
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: slide,
                scrub: true,
                start: 'top bottom',
                end: 'bottom top'
              }
            }
          )
        }
      })
    })
  })
}

onMounted(async () => {
  await fetchCollections()
  // GSAP will initialize via @after-enter callback
})

onBeforeUnmount(() => {
  ctx?.revert()
  ctx = null
  smoother?.kill?.()
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Collections page wrapper */
.collections-page {
  position: relative;
  min-height: 100vh;
}

/* Button Base Styles */
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
  cursor: pointer;
}

.btn__text {
  position: relative;
  z-index: 2;
}

.btn__fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  z-index: 1;
  transition: width 0.4s ease;
}

/* Responsive button sizing */
@media (max-width: 768px) {
  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.75rem;
  }
}

/* Slide styles */
.slide {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
}

.slide__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.slide__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 2;
}

.slide--1 .slide__overlay {
  background: linear-gradient(
    to bottom,
    rgba(37, 37, 37, 0.4) 0%,
    rgba(37, 37, 37, 0.7) 100%
  );
}

.slide--2 .slide__overlay {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
}

.slide__content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1400px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.slide__content-inner {
  text-align: center;
  color: theme('colors.background_color');
}

.slide__title {
  margin: 0 0 3rem;
  overflow: hidden;
}

.slide__title-line {
  display: block;
  overflow: hidden;
}

.line__inner {
  display: block;
  font-size: clamp(2rem, 8vw, 8rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1;
  text-transform: uppercase;
}

.slide__cta {
  display: flex;
  justify-content: center;
}

.slide__scroll-btn {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: theme('colors.background_color');
  cursor: pointer;
  padding: 0;
  z-index: 20;
}

.slide__scroll-line {
  display: block;
  width: 1px;
  height: 60px;
  background: theme('colors.background_color');
  opacity: 0.6;
}

.slide__scroll-icon {
  width: 1.5rem;
  height: 1.5rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}

@media (max-width: 768px) {
  .slide__content {
    padding: 1rem;
  }

  .line__inner {
    font-size: clamp(1.5rem, 10vw, 3rem);
  }

  .slide__scroll-btn {
    bottom: 2rem;
  }

  .slide__scroll-line {
    height: 40px;
  }
}
</style>