// composables/useScrollSmootherPanels.ts
export function useScrollSmootherPanels(smoother: Ref<any>) {
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