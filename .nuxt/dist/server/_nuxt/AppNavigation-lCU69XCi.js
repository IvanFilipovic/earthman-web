import { _ as __nuxt_component_0$1 } from "./nuxt-link-BeJz8Y8C.js";
import { d as useRoute, e as __nuxt_component_4, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$2 } from "./index-DSJLL3Jq.js";
import { defineComponent, ref, computed, watch, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-Dgbfu3-q.js";
import { defineStore } from "pinia";
const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    totals: {
      toPay: "0.00"
    },
    loading: false,
    lastFetched: null
  }),
  getters: {
    itemCount: (state) => {
      return state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    getVariantQuantity: (state) => {
      return (variantSlug) => {
        const item = state.items.find(
          (i) => i.product_slug === variantSlug || i.product_variant_slug === variantSlug
        );
        return item?.quantity || 0;
      };
    },
    merchandiseTotal: (state) => {
      return state.items.reduce((sum, item) => {
        const price = parseFloat(item.unit_price_discounted || item.unit_price_original);
        return sum + price * item.quantity;
      }, 0);
    },
    hasItems: (state) => {
      return state.items.length > 0;
    }
  },
  actions: {
    async fetchCart(force = false) {
      const now = Date.now();
      const CACHE_TIME = 3e4;
      if (!force && this.lastFetched && now - this.lastFetched < CACHE_TIME) {
        return;
      }
      this.loading = true;
      try {
        const data = await $fetch("/api/private/get/cart");
        this.items = data?.items || [];
        this.totals = { toPay: data?.cart_total_to_pay || "0.00" };
        this.lastFetched = now;
      } catch (error) {
        console.error("Failed to fetch cart:", error);
        this.items = [];
        this.totals = { toPay: "0.00" };
      } finally {
        this.loading = false;
      }
    },
    async addToCart(variantSlug, quantity) {
      const existingQuantity = this.getVariantQuantity(variantSlug);
      const totalQuantity = existingQuantity + quantity;
      const existingItem = this.items.find(
        (i) => i.product_slug === variantSlug || i.product_variant_slug === variantSlug
      );
      const oldQuantity = existingItem?.quantity || 0;
      if (existingItem) {
        existingItem.quantity = totalQuantity;
      }
      const newTotal = this.merchandiseTotal.toFixed(2);
      this.totals.toPay = newTotal;
      try {
        await $fetch("/api/private/put/cart", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: {
            product_slug: variantSlug,
            quantity: totalQuantity
          }
        });
        if (false) ;
      } catch (error) {
        if (existingItem) {
          if (oldQuantity > 0) {
            existingItem.quantity = oldQuantity;
          } else {
            const index = this.items.findIndex(
              (i) => i.product_slug === variantSlug || i.product_variant_slug === variantSlug
            );
            if (index > -1) this.items.splice(index, 1);
          }
        }
        const revertTotal = this.merchandiseTotal.toFixed(2);
        this.totals.toPay = revertTotal;
        throw error;
      }
    },
    async removeFromCart(item) {
      const variantSlug = item.product_slug || item.product_variant_slug;
      if (!variantSlug) {
        console.error("No slug found in item:", item);
        return;
      }
      const index = this.items.findIndex(
        (i) => i.product_slug === variantSlug || i.product_variant_slug === variantSlug
      );
      if (index === -1) return;
      const removedItem = this.items.splice(index, 1)[0];
      try {
        await $fetch(`/api/private/delete/cart?product_slug=${encodeURIComponent(variantSlug)}`, {
          method: "DELETE"
        });
        const newTotal = this.merchandiseTotal.toFixed(2);
        this.totals.toPay = newTotal;
        if (false) ;
      } catch (error) {
        console.error("❌ removeFromCart - Error:", error);
        this.items.splice(index, 0, removedItem);
        throw error;
      }
    },
    async updateQuantity(variantSlug, quantity) {
      const item = this.items.find(
        (i) => i.product_slug === variantSlug || i.product_variant_slug === variantSlug
      );
      if (!item) return;
      const oldQuantity = item.quantity;
      item.quantity = quantity;
      const newTotal = this.merchandiseTotal.toFixed(2);
      this.totals.toPay = newTotal;
      try {
        await $fetch("/api/private/put/cart", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: {
            product_slug: variantSlug,
            quantity
          }
        });
        if (false) ;
      } catch (error) {
        item.quantity = oldQuantity;
        const revertTotal = this.merchandiseTotal.toFixed(2);
        this.totals.toPay = revertTotal;
        throw error;
      }
    },
    clearCache() {
      this.lastFetched = null;
    },
    async clearCart() {
      const itemsBackup = [...this.items];
      const totalsBackup = { ...this.totals };
      this.items = [];
      this.totals = { toPay: "0.00" };
      try {
        await $fetch("/api/private/cart/clear", {
          method: "DELETE"
        });
        if (false) ;
      } catch (error) {
        this.items = itemsBackup;
        this.totals = totalsBackup;
        throw error;
      }
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppNavigation",
  __ssrInlineRender: true,
  props: {
    dark: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    useCartStore();
    const cartOpen = ref(false);
    const mobileMenuOpen = ref(false);
    const linkColorClass = computed(
      () => props.dark ? "text-background_color" : "text-text_color"
    );
    function isPathActive(path) {
      return route.path === path || route.path.startsWith(`${path}/`);
    }
    function getNavWeight(path) {
      return isPathActive(path) ? "font-bold" : "font-light";
    }
    watch(cartOpen, (isOpen) => {
    });
    watch(mobileMenuOpen, (isOpen) => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_4;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-62f73fcd><div class="hidden md:flex flex-col lg:flex-row w-full z-50" data-v-62f73fcd><div class="flex flex-col w-full lg:w-1/2 h-full" data-v-62f73fcd><div class="absolute inset-x-0 top-0 w-1/2 h-full md:px-8" data-v-62f73fcd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex justify-center py-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Earth Man Logo" class="max-w-[100%] h-auto object-contain" data-v-62f73fcd${_scopeId}>`);
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
      _push(`</div></div><div class="hidden md:flex w-full items-start justify-end lg:w-1/2 px-4 md:px-8 md:py-14 lg:py-24 gap-6 h-full" data-v-62f73fcd><section class="flex flex-col justify-end w-full bg-transparent z-50 my-auto" data-v-62f73fcd><div class="flex pt-4" data-v-62f73fcd><div class="flex flex-row justify-end w-full mx-auto space-x-4 py-4" data-v-62f73fcd>`);
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
      _push(`</div></section></div></div><section class="flex md:hidden flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-6 gap-6" data-v-62f73fcd><div class="flex md:hidden items-center justify-between w-full px-2" data-v-62f73fcd><div class="w-[60%] max-w-[200px]" data-v-62f73fcd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Earth Man Logo" class="w-full h-auto max-h-12 object-contain object-left" data-v-62f73fcd${_scopeId}>`);
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
      _push(`</div><div class="flex items-center gap-4" data-v-62f73fcd>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<button type="button" aria-label="Open menu" data-v-62f73fcd>`);
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
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62f73fcd"]]);
export {
  __nuxt_component_0 as _,
  useCartStore as u
};
//# sourceMappingURL=AppNavigation-lCU69XCi.js.map
