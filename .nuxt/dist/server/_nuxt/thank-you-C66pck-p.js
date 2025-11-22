import { _ as __nuxt_component_0 } from "./index-DSJLL3Jq.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BeJz8Y8C.js";
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { d as useRoute } from "../server.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/unctx/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/kai/Projekti/webshop/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/home/kai/Projekti/webshop/node_modules/radix3/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/klona/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/@unhead/vue/dist/index.mjs";
import "@intlify/utils";
import "/home/kai/Projekti/webshop/node_modules/cookie-es/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/destr/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/ohash/dist/index.mjs";
import "@vue/devtools-api";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "thank-you",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const orderReference = computed(() => route.query.ref);
    const totalAmount = computed(() => route.query.total);
    const paymentStatus = computed(() => route.query.payment_intent ? "completed" : "pending");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex items-center justify-center bg-background_color" }, _attrs))}><div class="px-4 md:w-[50%] text-center"><div class="mb-8"><div class="w-20 h-20 mx-auto mb-6 rounded-full bg-success_text_color/10 flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check",
        class: "w-10 h-10 text-success_text_color"
      }, null, _parent));
      _push(`</div><h1 class="text-3xl uppercase tracking-widest mb-4">${ssrInterpolate(unref(paymentStatus) === "completed" ? "Payment Successful!" : "Order Received!")}</h1><p class="text-text_color/70">${ssrInterpolate(unref(paymentStatus) === "completed" ? "Thank you for your purchase. Your order has been confirmed." : "We have received your order and will process it shortly.")}</p></div><div class="border border-text_color/30 p-8 mb-8"><div class="space-y-4"><div><p class="text-xs uppercase tracking-widest text-text_color mb-1">Order Reference</p><p class="text-xl font-medium">${ssrInterpolate(unref(orderReference))}</p></div><div class="border-t border-text_color/10 pt-4"><p class="text-xs uppercase tracking-widest text-text_color mb-1">Total Amount</p><p class="text-2xl font-medium">€${ssrInterpolate(unref(totalAmount))}</p></div><div class="border-t border-text_color/10 pt-4"><p class="text-xs uppercase tracking-widest text-text_color mb-1">Payment Status</p><p class="${ssrRenderClass([unref(paymentStatus) === "completed" ? "text-success_text_color tracking-widest" : "text-yellow-600", "text-sm font-medium uppercase"])}">${ssrInterpolate(unref(paymentStatus))}</p></div></div></div><div class="space-y-4"><p class="text-sm text-text_color/70"> A confirmation email has been sent with your order details. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop",
        class: "btn btn--primary inline-flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="btn__text"${_scopeId}>Continue shoping</span><span class="btn__fill"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "btn__text" }, "Continue shoping"),
              createVNode("span", { class: "btn__fill" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/thank-you.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=thank-you-C66pck-p.js.map
