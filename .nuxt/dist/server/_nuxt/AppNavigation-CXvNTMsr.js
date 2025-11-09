import { _ as __nuxt_component_0$1 } from "./nuxt-link-7pp3EPK3.js";
import { s as useState, c as useRoute, d as __nuxt_component_4, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$2 } from "./index-Ccr6sSLn.js";
import { computed, defineComponent, ref, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
const _imports_0 = publicAssetsURL("/logo/earth-man920.png");
let abortController = null;
function useCart() {
  const cartState = useState("cart", () => ({
    data: {
      items: [],
      cart_total_original_price: "0.00",
      cart_total_discounted_price: "0.00",
      cart_total_to_pay: "0.00"
    },
    loading: false,
    error: null
  }));
  const items = computed(
    () => cartState.value.data.items.map((item) => ({
      ...item,
      size: item.size ?? item.product_size
    }))
  );
  const itemCount = computed(() => items.value.length);
  const totals = computed(() => ({
    original: cartState.value.data.cart_total_original_price,
    discounted: cartState.value.data.cart_total_discounted_price,
    toPay: cartState.value.data.cart_total_to_pay
  }));
  async function fetchCart() {
    if (abortController) {
      abortController.abort();
    }
    abortController = new AbortController();
    cartState.value.loading = true;
    cartState.value.error = null;
    try {
      const response = await $fetch("/api/private/get/cart", {
        signal: abortController.signal
      });
      cartState.value.data = response;
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        cartState.value.error = error;
        console.warn("Cart fetch failed:", error);
      }
    } finally {
      cartState.value.loading = false;
      abortController = null;
    }
  }
  async function removeItem(item) {
    const slug = item.product_variant_slug ?? item.product_slug;
    if (!slug) return false;
    const previousData = { ...cartState.value.data };
    cartState.value.data = {
      ...cartState.value.data,
      items: cartState.value.data.items.filter(
        (x) => (x.product_variant_slug ?? x.product_slug) !== slug
      )
    };
    try {
      await $fetch("/api/private/delete/cart", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: { product_variant_slug: slug }
      });
      await fetchCart();
      if (false) ;
      return true;
    } catch (error) {
      cartState.value.data = previousData;
      console.error("Remove item failed:", error);
      return false;
    }
  }
  function toNumber(value) {
    const num = Number.parseFloat(String(value ?? "0").replace(",", "."));
    return Number.isFinite(num) ? num : 0;
  }
  function formatMoney(amount) {
    return Number.isInteger(amount) ? amount.toString() : amount.toFixed(2);
  }
  const FREE_THRESHOLD = 200;
  const FLAT_SHIPPING = 12.99;
  const merchandiseTotal = computed(() => toNumber(totals.value.toPay));
  const shippingFee = computed(
    () => merchandiseTotal.value >= FREE_THRESHOLD ? 0 : FLAT_SHIPPING
  );
  const grandTotal = computed(() => merchandiseTotal.value + shippingFee.value);
  const shippingLabel = computed(
    () => shippingFee.value === 0 ? "Free shipping" : "Shipping"
  );
  const freeShippingHint = computed(() => {
    if (shippingFee.value === 0) {
      return "Free shipping applied";
    }
    const remaining = Math.max(0, FREE_THRESHOLD - merchandiseTotal.value);
    return `You're €${formatMoney(remaining)} away from free shipping`;
  });
  return {
    // State
    items,
    itemCount,
    totals,
    loading: computed(() => cartState.value.loading),
    error: computed(() => cartState.value.error),
    // Actions
    fetchCart,
    removeItem,
    // Computed values
    merchandiseTotal,
    shippingFee,
    grandTotal,
    shippingLabel,
    freeShippingHint,
    // Utilities
    formatMoney,
    toNumber
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppNavigation",
  __ssrInlineRender: true,
  props: {
    dark: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    useCart();
    ref(false);
    ref(false);
    const linkColorClass = computed(
      () => props.dark ? "text-background_color" : "text-text_color"
    );
    function isPathActive(path) {
      return route.path === path || route.path.startsWith(`${path}/`);
    }
    function getNavWeight(path) {
      return isPathActive(path) ? "font-bold" : "font-light";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_4;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-2a3e994d><div class="hidden md:flex flex-col lg:flex-row w-full z-50" data-v-2a3e994d><div class="flex flex-col w-full lg:w-1/2 h-full" data-v-2a3e994d><div class="absolute inset-x-0 top-0 w-1/2 h-full md:px-8" data-v-2a3e994d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex justify-center py-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Earth Man Logo" class="max-w-[100%] h-auto object-contain" data-v-2a3e994d${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Earth Man Logo",
                class: "max-w-[100%] h-auto object-contain"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden md:flex w-full items-start justify-end lg:w-1/2 px-4 md:px-8 md:py-14 lg:py-24 gap-6 h-full" data-v-2a3e994d><section class="flex flex-col justify-end w-full bg-transparent z-50 my-auto" data-v-2a3e994d><div class="flex pt-4" data-v-2a3e994d><div class="flex flex-row justify-end w-full mx-auto space-x-4 py-4" data-v-2a3e994d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop",
        class: [unref(linkColorClass), getNavWeight("/shop"), "text-sm my-auto px-4"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` SHOP `);
          } else {
            return [
              createTextVNode(" SHOP ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/collections",
        class: [unref(linkColorClass), getNavWeight("/collections"), "text-sm my-auto px-4"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` STORIES `);
          } else {
            return [
              createTextVNode(" STORIES ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: [unref(linkColorClass), getNavWeight("/about"), "text-sm my-auto px-4"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ABOUT `);
          } else {
            return [
              createTextVNode(" ABOUT ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/profile",
        class: [unref(linkColorClass), getNavWeight("/profile"), "my-auto font-light pl-4"],
        "aria-label": "User profile"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:circle-user-round",
              class: ["w-6 h-6", unref(linkColorClass)]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:circle-user-round",
                class: ["w-6 h-6", unref(linkColorClass)]
              }, null, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></section></div></div><section class="flex md:hidden flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-6 gap-6" data-v-2a3e994d><div class="flex md:hidden items-center justify-between w-full px-2" data-v-2a3e994d><div class="w-[60%] max-w-[200px]" data-v-2a3e994d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Earth Man Logo" class="w-full h-auto max-h-12 object-contain object-left" data-v-2a3e994d${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Earth Man Logo",
                class: "w-full h-auto max-h-12 object-contain object-left"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-4" data-v-2a3e994d>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<button type="button" aria-label="Open menu" data-v-2a3e994d>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:menu",
        class: ["w-7 h-7", unref(linkColorClass)]
      }, null, _parent));
      _push(`</button></div></div></section></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2a3e994d"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=AppNavigation-CXvNTMsr.js.map
