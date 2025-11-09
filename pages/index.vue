<template>
  <section class="relative">
    <BackgroundVideo
      src="/video/test.mp4"
      poster="/logo/earth-man-black.png"
      overlay
      overlayClasses="bg-gradient-to-b from-text_color/50 to-transparent"
    >
      <div class="absolute inset-x-0 top-0 w-full z-50">
        <AppNavigation :dark="true" />
      </div>
      <div class="min-h-screen flex flex-col justify-end items-center md:items-end px-4 md:px-8 pb-12 md:pb-16 z-40 w-full">
        <div class="text-background_color text-center md:text-right max-w-2xl">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            {{ $t('welcome_title') }}
          </h1>
          <p class="mb-8 text-base md:text-lg">
            {{ $t('welcome_subtitle') }}
          </p>
          <NuxtLink
            to="/shop"
            class="btn btn--secondary inline-flex"
          >
            <span class="btn__text">{{ $t('shop_button') }}</span>
            <span class="btn__fill"></span>
          </NuxtLink>
        </div>
      </div>
    </BackgroundVideo>

    <CollectionListing />
    <Carusel />
    <Newsletter />
  </section>
</template>

<style scoped>
/* Ensure the button displays correctly */
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
</style>