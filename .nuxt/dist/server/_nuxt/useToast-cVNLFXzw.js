import { ref } from "vue";
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
    show(message, "success", timeout ?? 2500);
  }
  function error(message, timeout) {
    show(message, "error", timeout ?? 3500);
  }
  function addedToCart(options) {
    const id = ++_id;
    toastsState.value.push({
      id,
      type: "cart",
      message: "was successfully added to cart",
      productName: options.productName,
      productImage: options.productImage,
      quantity: options.quantity,
      timeout: options.timeout ?? 0
      // No auto-close for cart toast
    });
  }
  return {
    toasts: toastsState,
    show,
    success,
    error,
    addedToCart,
    remove
  };
}
export {
  useToast as u
};
//# sourceMappingURL=useToast-cVNLFXzw.js.map
