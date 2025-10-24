<template>
  <!-- smooth-wrapper/content are required if you use ScrollSmoother -->
  <div id="smooth-wrapper">
    <div id="smooth-content" class="stage">
      <!-- Slides generated from collections -->
      <section
        v-for="(c, i) in collections"
        :key="c.id || i"
        class="slide"
        :id="`slide-${i+1}`"
        :class="`slide--${(i+1) % 7}`"
      >
        <!-- Left column: title, text, CTA -->
        <div class="col col--1">
          <div class="col__content" :class="`col__content--${((i+1) % 6) || 6}`">
            <h2 class="col__content-title">
              <span class="line__inner">{{ c.name || 'Collection' }}</span><br />
            </h2>

            <div class="col__content-wrap">
              <NuxtLink
                v-if="c.slug"
                :to="`/collections/${encodeURIComponent(c.slug)}`"
                class="slide-link"
              >
              View Story
              </NuxtLink>
            </div>
          </div>

          <!-- next slide “arrow” -->
          <a
            v-if="i < collections.length - 1"
            :href="`#slide-${i+2}`"
            class="slide__scroll-link "
          >
            <div class="slide__scroll-line "> Next</div>
          </a>
        </div>

        <!-- Right column: big image (parallax wrapper) -->
        <div class="col col--2">
          <div class="col__image-wrap">
            <img
              class="img img--1"
              :src="c.element_one_image"
              :alt="c.name || `Collection ${i+1}`"
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
import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

// Optional plugins — will be used only if present
let ScrollSmoother: any = null
let SplitText: any = null
try { ScrollSmoother = (await import('gsap/ScrollSmoother')).ScrollSmoother } catch {}
try { SplitText = (await import('gsap/SplitText')).SplitText } catch {}

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
if (ScrollSmoother) gsap.registerPlugin(ScrollSmoother as any)
if (SplitText) gsap.registerPlugin(SplitText as any)

interface Collection {
  id?: string | number
  name?: string
  slug?: string
  description?: string
  element_one_image: string
}

const config = useRuntimeConfig()
const { data: collections } = await useFetch<Collection[]>(
  '/public/collections/',
  { baseURL: config.public.apiBase, server: false, default: () => [] }
)

const fallbackText =
  'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.'

let smoother: any = null
let ctx: gsap.Context | null = null
let resizeHandler: ((ev?: Event) => void) | null = null

onMounted(() => {
  ctx = gsap.context(() => {
    // optional smoother
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

    // Header micro-anim
    gsap
      .timeline({ delay: 0.3 })
      .from('.logo', { y: -40, opacity: 0, duration: 1, ease: 'power4' })
      .from(
        '.nav-btn__svg rect',
        { scale: 0, transformOrigin: 'center right', duration: 0.4, stagger: 0.08, ease: 'power4' },
        0.2
      )

    // Intro in/out
    if (SplitText) {
      // just a nice touch if SplitText is available
      const introSplit = new (SplitText as any)('.intro__title', { type: 'lines', linesClass: 'intro-line' })
      gsap.from(introSplit.lines, { y: 300, duration: 1.8, ease: 'power4', delay: 0.4, stagger: 0.05 })
    }
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.intro',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom top'
        }
      })
      .to('.intro__title', { x: 300, ease: 'none' }, 0)
      .to('.intro__txt', { y: 100, ease: 'none' }, 0)

    // Link behaviors (scrollTo)
    document.querySelectorAll<HTMLAnchorElement>('.slide__scroll-link').forEach((a) => {
      const line = a.querySelector('.slide__scroll-line') as HTMLElement
      a.addEventListener('click', (e) => {
        e.preventDefault()
        const href = a.getAttribute('href')!
        gsap.to(window, { duration: 1.3, scrollTo: { y: href }, ease: 'power2.inOut' })
      })
      a.addEventListener('mouseenter', () => gsap.to(line, { y: 40, duration: 0.4, ease: 'power4' }))
      a.addEventListener('mouseleave', () => gsap.to(line, { y: 0, duration: 0.4, ease: 'power4' }))
    })

    // Animate slide content when it comes into view
    document.querySelectorAll<HTMLElement>('.slide').forEach((slide) => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: slide, start: '40% 50%' }
      })
      tl.from(slide.querySelectorAll('.col__content-title'), {
        y: '5vh',
        duration: 1.6,
        ease: 'power4'
      })
        .from(
          slide.querySelectorAll('.line__inner'),
          { y: 160, duration: 1.4, ease: 'power4', stagger: 0.08 },
          0
        )
        .from(
          slide.querySelectorAll('.col__content-txt'),
          { x: 100, y: 40, opacity: 0, duration: 1.4, ease: 'power4' },
          0.2
        )
        .from(
          slide.querySelectorAll('.slide-link'),
          { x: -80, y: 80, opacity: 0, duration: 1.4, ease: 'power4' },
          0.2
        )
        .from(
          slide.querySelectorAll('.slide__scroll-link'),
          { y: 160, duration: 1.8, ease: 'power4' },
          0.2
        )
    })

    // Parallax for the right-column image wrapper
    document.querySelectorAll<HTMLElement>('.slide').forEach((slide) => {
      const wrappers = slide.querySelectorAll('.col__image-wrap')
      gsap.fromTo(
        wrappers,
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

    // Top button
    const top = document.querySelector('.footer__link-top')
    if (top) {
      top.addEventListener('click', (e) => {
        e.preventDefault()
        gsap.to(window, { duration: 1.3, scrollTo: { y: '#slide-0' }, ease: 'power2.inOut' })
        gsap.to('.footer__link-top-line', { scaleY: 1, duration: 0.4, ease: 'power4' })
      })
    }

    // Reveal
    gsap.set('.stage', { autoAlpha: 1 })
  })
  // keep ScrollTrigger happy on resize
  resizeHandler = (ev?: Event) => {
    // Accept optional event param to match EventListener signature and forward to GSAP
    ScrollTrigger.refresh()
  }
  window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => {
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
    resizeHandler = null
  }
  ctx?.revert()
  ctx = null
  smoother?.kill?.()
})
</script>

<style scoped>
:root { --dark:#252525; }
html,body{ min-height:100vh; }
.stage{ position:relative; background:#e2e2e2; visibility:hidden; }

/* Slides */
.slide{ display:flex; align-items:stretch; height:100vh; overflow:hidden; }
.col{ flex-basis:50%; }
.col--1{ position:relative; z-index:1; }
.col--2{ position:relative; overflow:hidden; }

/* Left content */
.col__content{ position:relative; display:flex; flex-direction:column; justify-content:flex-end; height:100%; padding:6vw 6vw 10vw; }
.col__content--1{ background:#e2e2e2; }
.col__content--2{ background:#252525; }
.col__content--3{ background:#e2e2e2; }
.col__content--4{ background:#252525; }
.col__content--5{ background:#e2e2e2; }
.col__content--6{ background:#252525; }
.col__content-title{ margin:0 0 2vw; font-size:11vw; letter-spacing:-0.9vw; line-height:1; }
.col__content-wrap{ display:flex; justify-content:flex-end; }
.col__content-txt{ max-width:22vw; order:2; margin-left:32px; }

.slide-link{ position:relative; order:1; display:flex; justify-content:flex-end; width:75px; height:53px; z-index: 10; }
.slide-link__circ{ width:53px; height:53px; border-radius:50%; border:1px solid var(--dark); ; z-index: 10; }
.slide-link__line{ position:absolute; top:25px; left:0; width:64px; height:3px; background:var(--dark); ; z-index: 10; }

.line__inner{ display:block; letter-spacing: 1px; }

/* Right image */
.col__image-wrap{ position:absolute; left:0; width:100%; height:160vh; }
.img{ object-fit:cover; width:100%; height:100%; }

/* Next link */
.slide__scroll-link{ position:absolute; right:-113px; bottom:3.5vw; display:block; width:140px; height:140px; background:var(--dark); overflow:hidden; }
.slide__scroll-line{ position:absolute; left:26px; bottom:0; width:1px; height:100%; background:#fff; }


/* Helpers for scroll line color */
.slide--1 .slide__scroll-line{ background:#e2e2e2; }
.slide--2 .slide__scroll-line{ background:#252525; }
.slide--3 .slide__scroll-line{ background:#e2e2e2; }
.slide--4 .slide__scroll-line{ background:#252525; }
.slide--5 .slide__scroll-line{ background:#e2e2e2; }
.slide--6 .slide__scroll-line{ background:#D7CEC5; }

</style>
