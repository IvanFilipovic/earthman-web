<template>
    <section>
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-6 gap-6 border-b border-text_color/30">
        <div class="w-full md:w-1/2">
            <div class="image bg-cover bg-center bg-transparent h-40 flex justify-center max-w-[100%]">
            </div>
        </div>

        <div class="w-full md:w-1/2 flex flex-col">
            <AppNavigation :dark="false" />
            <div class="flex gap-3 justify-end w-full">
                <div class="flex items-center gap-3">
                    <nav class="text-sm uppercase tracking-widest space-x-2 text-background_color px-4">
                    <p>=</p>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>