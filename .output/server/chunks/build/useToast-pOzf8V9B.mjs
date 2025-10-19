import { ref } from 'vue';

const toastsState = ref([]);
let _id = 0;
function useToast() {
  function remove(id) {
    toastsState.value = toastsState.value.filter((t) => t.id !== id);
  }
  function show(message, type = "info", timeout = 2500) {
    const id = ++_id;
    toastsState.value.push({ id, type, message, timeout });
  }
  function success(message, timeout) {
    show(message, "success", timeout != null ? timeout : 2500);
  }
  function error(message, timeout) {
    show(message, "error", timeout != null ? timeout : 3500);
  }
  return {
    toasts: toastsState,
    show,
    success,
    error,
    remove
  };
}

export { useToast as u };
//# sourceMappingURL=useToast-pOzf8V9B.mjs.map
