<template>
    <section>
        <div class="flex flex-col lg:flex-row w-full h-screen">
            <div class="flex flex-col w-full lg:w-1/2 h-full bg-background_color">
                
                <BackgroundVideo
                    src="/video/test.mp4"
                    poster="/logo/earth-man-black.png"
                    overlay
                    overlayClasses="bg-gradient-to-b from-black/50 to-transparent"
                >
                    <div class="absolute inset-x-0 top-0 w-full">
                        <AppHeader :dark="true" />
                    </div>
                    <div class="absolute inset-x-0 bottom-0 left-0 flex items-center flex-col pb-8 text-background_color px-4 text-end self-end">
                        <h1 class="text-4xl md:text-6xl font-bold mb-4 self-end">Welcome to Our Shop</h1>
                        <p class="self-end mb-8">Explore our latest collection with immersive video background.</p>
                        <NuxtLink to="/shop" class="bg-background_color w-fit self-end text-text_color px-4 py-2 font-bold transition hover:bg-secondary_button_color hover:text-text_color">Shop Now</NuxtLink>
                    </div>
                </BackgroundVideo>
            </div>
            <div class="flex flex-col w-full lg:w-1/2 h-screen">
                <CollectionListing  />
            </div>
        </div>
        <Newsletter />
    </section>
</template>