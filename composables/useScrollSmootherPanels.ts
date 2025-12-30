// composables/useScrollSmootherPanels.ts

/**
 * GSAP ScrollSmoother interface
 * Defines the minimal interface we use from ScrollSmoother
 */
interface ScrollSmootherInstance {
  paused: (value?: boolean) => boolean | void
}

export function useScrollSmootherPanels(smoother: Ref<ScrollSmootherInstance | null>) {
  if (!import.meta.client) return

  const handlePanelOpen = () => {
    if (smoother.value) {
      smoother.value.paused(true)
    }
  }

  const handlePanelClose = () => {
    if (smoother.value) {
      smoother.value.paused(false)
    }
  }

  onMounted(() => {
    window.addEventListener('panel:open', handlePanelOpen)
    window.addEventListener('panel:close', handlePanelClose)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('panel:open', handlePanelOpen)
    window.removeEventListener('panel:close', handlePanelClose)
  })
}