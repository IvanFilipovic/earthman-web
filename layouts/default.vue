<template>
    <div id="smooth-wrapper" class="flex flex-col w-full bg-background_color">
        <div id="smooth-content">
            <slot />
            <AppFooter />
        </div>
        <Toast />
    </div>
</template>
<style>
body {
  background-color: #fcfcfc;
  font-family: "Neue Einstellung";
}
</style>