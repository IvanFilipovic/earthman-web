<template>
    <section>
        <div class="w-full h-auto overflow-auto">
            <div class="relative flex flex-col w-full h-full">
                <div class="absolute inset-x-0 top-0 right-0 left-0 z-50 w-1/2 mx-auto">
                    <AppHeader :dark="true" />
                </div>
                <CollectionHome />
            </div>
        </div>
    </section>
</template>