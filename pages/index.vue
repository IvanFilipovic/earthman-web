<template>
  <section class="relative">
    <BackgroundVideo
      src="/video/test.mp4"
      poster="/logo/earth-man-black.png"
      overlay
      overlayClasses="bg-gradient-to-b from-black/50 to-transparent"
    >
      <div class="absolute inset-x-0 top-0 w-full">
        <AppNavigation :dark="true" />
      </div>
      <div class="absolute inset-x-0 bottom-6 md:bottom-0 left-0 flex items-center flex-col pb-8 text-background_color px-4 md:text-end md:self-end">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 self-center text-center md:self-end">
          Welcome to Our Shop
        </h1>
        <p class="md:self-end mb-8 self-center text-center">
          Explore our latest collection with immersive video background.
        </p>
        <NuxtLink
          to="/shop"
          class="btn btn--secondary mx-auto md:mx-0 md:self-end w-[60%] md:w-fit"
        >
          <span class="btn__text">Shop Now</span>
          <span class="btn__fill"></span>
        </NuxtLink>
      </div>
    </BackgroundVideo>
    
    <CollectionListing />
    <Carusel />
    <Newsletter />
  </section>
</template>