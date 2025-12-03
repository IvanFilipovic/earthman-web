import { _ as __nuxt_component_0 } from "./nuxt-link-BeJz8Y8C.js";
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { d as useRoute } from "../server.mjs";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
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
import "@iconify/vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "success",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    computed(() => route.query.paymentId);
    computed(() => route.query.PayerID);
    computed(() => route.query.order_ref);
    const processing = ref(true);
    const error = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background_color flex items-center justify-center" }, _attrs))}><div class="max-w-md mx-auto px-4 text-center">`);
      if (unref(processing)) {
        _push(`<div class="space-y-4"><div class="animate-spin rounded-full h-16 w-16 border-b-2 border-primary_button_color mx-auto"></div><h2 class="text-xl uppercase tracking-widest text-text_color">Processing Payment...</h2><p class="text-sm text-text_color/70">Please wait while we confirm your PayPal payment</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="space-y-4"><div class="w-16 h-16 bg-error_text_color/10 rounded-full flex items-center justify-center mx-auto"><svg class="w-8 h-8 text-error_text_color" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg></div><h2 class="text-xl uppercase tracking-widest text-error_text_color">Payment Failed</h2><p class="text-sm text-text_color/70">${ssrInterpolate(unref(error))}</p><div class="flex flex-col gap-3 mt-6">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/checkout",
          class: "btn btn--primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="btn__text"${_scopeId}>Try Again</span><span class="btn__fill"${_scopeId}></span>`);
            } else {
              return [
                createVNode("span", { class: "btn__text" }, "Try Again"),
                createVNode("span", { class: "btn__fill" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "text-sm underline text-text_color/70 hover:text-text_color"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Return Home `);
            } else {
              return [
                createTextVNode(" Return Home ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payment/paypal/success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=success-jce_IF2X.js.map
