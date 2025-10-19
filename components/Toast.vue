<template>
  <!-- Fixed stack, top-right -->
  <div
    class="pointer-events-none fixed right-6 top-6 z-[9999] space-y-2"
    aria-live="polite"
    aria-atomic="true"
  >
    <TransitionGroup
      name="toast"
      tag="div"
      class="space-y-2"
    >
      <div
        v-for="t in toasts"
        :key="t.id"
        class="pointer-events-auto flex items-start gap-3 px-4 py-3 min-w-[260px] max-w-[360px]"
        :class="bgClass(t.type)"
        role="status"
      >
        <span class="mt-0.5 text-sm font-medium">
          {{ t.message }}
        </span>
        <button
          class="ml-auto text-xs opacity-70 hover:opacity-100"
          @click="remove(t.id)"
          aria-label="Dismiss"
        >
          <Icon name="lucide:x" class="w-5 h-5 text-text_color" />
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '~/composables/useToast'

const { toasts, remove } = useToast()

function bgClass(type: 'success' | 'error' | 'info') {
  if (type === 'success') return 'bg-secondary_button_color text-text_color'
  if (type === 'error')   return 'bg-black text-white'
  return 'bg-white text-black'
}
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 180ms ease;
}
.toast-enter-from {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.toast-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}
</style>
