<template>
  <section :class="wrapperClass" class="transition-colors duration-300 min-h-screen">
    <AppNavigation :dark="isDark" />

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div class="min-h-screen">
          <div class="relative pt-8 px-4 md:px-8">
            <div class="hero-section relative w-full h-[70vh] border border-text_color/30 overflow-hidden">
              <img
                v-bind="getHeroImageAttrs(heroImage)"
                alt="Material study"
                class="absolute inset-0 w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-text_color/30"></div>
              <div class="absolute inset-0 flex items-end">
                <div class="hero-content p-8 md:p-12 text-background_color mx-auto">
                  <h3 class="hero-title text-2xl md:text-4xl text-center mb-3 bg-text_color px-4 py-2">
                    Materials, Mastered
                  </h3>
                  <p class="hero-text max-w-lg text-sm md:text-base text-center bg-text_color py-2 px-4">
                    From recycled cotton to traceable leathers—our platform partners with mills that
                    publish their practices and certify their fibers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref="section1" class="section-light min-h-screen pb-20">
          <div class="flex flex-col lg:flex-row gap-10 items-start px-4 md:px-8 pb-14 md:py-0">
            <div class="w-full lg:w-1/2 my-auto pb-10">
              <img
                v-bind="getSectionImageAttrs(section1Image)"
                alt="Studio story"
                class="section-image w-full h-[70vh] object-cover border border-text_color/30"
                loading="lazy"
              />
            </div>
            <div class="w-full lg:w-1/2 flex flex-col my-auto pt-10">
              <h2 class="section-title text-2xl md:text-3xl tracking-wide mb-4 mx-auto uppercase">
                Crafted with Intent
              </h2>
              <p class="section-text text-sm md:text-base leading-normal md:leading-loose text-center mx-auto px-4 py-2">
                We design for longevity: timeless silhouettes, resilient materials, and a supply chain
                we're proud of. Every piece is cut in small batches and finished by hand.
                Our studio blends traditional techniques with forward-looking processes—prioritizing
                responsible sourcing and modular construction so garments can be repaired, re-worn,
                and re-loved.
              </p>
            </div>
          </div>
        </div>

        <div ref="section2" class="section-dark min-h-screen">
          <div class="flex flex-col lg:flex-row-reverse gap-10 items-start px-4 md:px-8 min-h-screen">
            <div class="w-full lg:w-1/2 my-auto">
              <img
                v-bind="getSectionImageAttrs(section2Image)"
                alt="Community story"
                class="section-image w-full h-[70vh] object-cover border border-background_color/30"
                loading="lazy"
              />
            </div>
            <div class="w-full lg:w-1/2 flex flex-col my-auto">
              <h2 class="section-title text-2xl md:text-3xl tracking-wide mb-4 mx-auto uppercase">
                Community Driven
              </h2>
              <p class="section-text text-sm md:text-base leading-normal md:leading-loose text-center mx-auto px-4 py-2">
                We design for longevity: timeless silhouettes, resilient materials, and a supply chain
                we're proud of. Every piece is cut in small batches and finished by hand.
                Our studio blends traditional techniques with forward-looking processes—prioritizing
                responsible sourcing and modular construction so garments can be repaired, re-worn,
                and re-loved.
              </p>
            </div>
          </div>
        </div>

        <div ref="instagramGrid">
          <div ref="instagramGrid">
            <div class="hidden lg:block">
              <InstagramGrid :posts="posts" :initial="5" :step="6" />
            </div>
            <div class="lg:hidden block">
              <InstagramGrid :posts="posts" :initial="3" :step="6" />
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="earth-scroll"></div>

  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let ScrollSmoother: any = null
try {
  ScrollSmoother = (await import('gsap/ScrollSmoother')).ScrollSmoother
} catch {}

gsap.registerPlugin(ScrollTrigger)
if (ScrollSmoother) gsap.registerPlugin(ScrollSmoother as any)

interface InstagramPost {
  image: string
  link: string
}

const section1 = ref<HTMLElement | null>(null)
const section2 = ref<HTMLElement | null>(null)
const instagramGrid = ref<HTMLElement | null>(null)
const isDark = ref(false)

const wrapperClass = computed(() =>
  isDark.value ? 'bg-text_color text-background_color' : 'bg-background_color text-text_color'
)

// Image URLs - Replace with your CDN URLs
const heroImage = 'https://static.earth-man.eu/penguin_female1.jpg'
const section1Image = 'https://static.earth-man.eu/penguin_female1.jpg'
const section2Image = 'https://static.earth-man.eu/penguin_female1.jpg'

// Responsive image helpers
const { getResponsiveImages } = useImageTransform()

/**
 * Hero image: Full-width at all breakpoints
 * Layout: w-full (100vw)
 * Height: h-[70vh]
 */
function getHeroImageAttrs(url: string) {
  return getResponsiveImages(
    url,
    [800, 1200, 1920, 2560], // Full-width hero: mobile to 4K
    '100vw' // Always full viewport width
  )
}

/**
 * Section images: Half-width on desktop, full on mobile
 * Desktop: lg:w-1/2 (50vw)
 * Mobile: w-full (100vw)
 * Height: h-[70vh]
 */
function getSectionImageAttrs(url: string) {
  if (!url) return {}
  const isMobile =
    typeof window !== 'undefined' &&
    window.innerWidth <= 768

  // What you want:
  const mainWidth = isMobile ? 900 : 1600
  return getResponsiveImages(
    url,
    [mainWidth], // Mobile to desktop retina
    '(max-width: 1023px) 100vw, 50vw' // Full on mobile, half on desktop
  )
}

const posts: InstagramPost[] = [
  { image: 'https://static.earth-man.eu/penguin_female1.jpg', link: 'https://www.instagram.com/earth_man.line/' },
  { image: 'https://static.earth-man.eu/penguin_female2.jpg', link: 'https://www.instagram.com/earth_man.line/' },
  { image: 'https://static.earth-man.eu/penguin_kid1.jpg', link: 'https://www.instagram.com/earth_man.line/' },
  { image: 'https://static.earth-man.eu/penguin_male.jpg', link: 'https://www.instagram.com/earth_man.line/' },
  { image: 'https://static.earth-man.eu/penguin_female1.jpg', link: 'https://www.instagram.com/earth_man.line/' },
]

let smoother: any = null
let ctx: gsap.Context | null = null

onMounted(() => {
  ctx = gsap.context(() => {
    if (ScrollSmoother) {
      smoother = ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.2,
        wrapper: '#smooth-wrapper',
        content: '#smooth-content'
      })
    }

    gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
    .to('.hero-section img', { scale: 1.2, ease: 'none' })

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top 80%'
      }
    })
    heroTl.from('.hero-title', {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power4.out'
    })
    .from('.hero-text', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power4.out'
    }, 0.2)

    if (section1.value) {
      ScrollTrigger.create({
        trigger: section1.value,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => { isDark.value = false },
        onLeave: () => { isDark.value = true },
        onEnterBack: () => { isDark.value = false },
        onLeaveBack: () => { isDark.value = false }
      })

      const section1Images = section1.value.querySelectorAll('.section-image')
      section1Images.forEach((img) => {
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: 'top 80%'
          },
          y: 100,
          opacity: 0,
          duration: 1.4,
          ease: 'power4.out'
        })
      })

      const section1Titles = section1.value.querySelectorAll('.section-title')
      section1Titles.forEach((title) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: 'top 80%'
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out'
        })
      })

      const section1Texts = section1.value.querySelectorAll('.section-text')
      section1Texts.forEach((text) => {
        gsap.from(text, {
          scrollTrigger: {
            trigger: text,
            start: 'top 85%'
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power4.out'
        })
      })
    }

    if (section2.value) {
      ScrollTrigger.create({
        trigger: section2.value,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => { isDark.value = true },
        onLeave: () => { isDark.value = true },
        onEnterBack: () => { isDark.value = true },
        onLeaveBack: () => { isDark.value = false }
      })

      const section2Images = section2.value.querySelectorAll('.section-image')
      section2Images.forEach((img) => {
        gsap.from(img, {
          scrollTrigger: {
            trigger: img,
            start: 'top 80%'
          },
          y: 100,
          opacity: 0,
          duration: 1.4,
          ease: 'power4.out'
        })
      })

      const section2Titles = section2.value.querySelectorAll('.section-title')
      section2Titles.forEach((title) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: 'top 80%'
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out'
        })
      })

      const section2Texts = section2.value.querySelectorAll('.section-text')
      section2Texts.forEach((text) => {
        gsap.from(text, {
          scrollTrigger: {
            trigger: text,
            start: 'top 85%'
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power4.out'
        })
      })
    }

    if (instagramGrid.value) {
      ScrollTrigger.create({
        trigger: instagramGrid.value,
        start: 'top 50%',
        end: 'bottom bottom',
        onEnter: () => { isDark.value = false },
        onEnterBack: () => { isDark.value = false }
      })
    }
  })
})

onBeforeUnmount(() => {
  ctx?.revert()
  ctx = null
  smoother?.kill?.()
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

// Handle CartPanel and other panels
if (import.meta.client) {
  const smootherRef = computed(() => smoother)
  useScrollSmootherPanels(smootherRef)
}
</script>
<style scoped>
.earth-scroll {
  margin: auto;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  /* 3D shading for realism */
  box-shadow:
    inset 40px 0 80px rgba(255, 255, 255, 0.05),
    inset -20px 0 100px rgba(0, 0, 0, 0.20);

  /* The trick: a repeating horizontal gradient */
  background: repeating-linear-gradient(
    90deg,
    #00c90d 0%,
    #00c90d 50%,
    #0040ff 50%,
    #0040ff 100%
  );

  background-size: 200% 100%;  /* 2 colors across 100% sphere width */
  animation: scrollColors 3s linear infinite;
}

/* Move background left → simulating Y-axis rotation */
@keyframes scrollColors {
  from {
    background-position-x: 0%;
  }
  to {
    background-position-x: -200%;
  }
}


</style>