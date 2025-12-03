import { _ as __nuxt_component_0 } from "./AppNavigation-DbbUjllq.js";
import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { d as useRoute } from "../server.mjs";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import "./nuxt-link-BeJz8Y8C.js";
import "./index-DSJLL3Jq.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "./virtual_public-Dgbfu3-q.js";
import "#internal/nuxt/paths";
import "pinia";
import "ofetch";
import "/home/kai/Projekti/webshop/node_modules/unctx/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/h3/dist/index.mjs";
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
  __name: "card",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    computed(() => route.query.clientSecret);
    const orderReference = computed(() => route.query.ref);
    const amount = computed(() => route.query.amount);
    const isProcessing = ref(false);
    const errorMessage = ref("");
    const isLoading = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background_color" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="max-w-2xl mx-auto px-4 py-12"><div class="mb-8"><h1 class="text-2xl uppercase tracking-widest mb-2 text-text_color">Complete Payment</h1><p class="text-sm text-text_color/70">Order: ${ssrInterpolate(unref(orderReference))}</p></div><form id="payment-form" class="border border-text_color/30 p-6 md:p-8 mb-6"><div class="flex justify-between items-center mb-8 pb-6 border-b border-text_color/30"><span class="text-sm uppercase tracking-widest text-text_color font-medium">Total Amount</span><span class="text-3xl font-semibold text-text_color">€${ssrInterpolate(unref(amount))}</span></div>`);
      if (unref(isLoading)) {
        _push(`<div class="flex flex-col items-center justify-center py-20"><div class="animate-spin rounded-full h-10 w-10 border-b-2 border-primary_button_color mb-4"></div><p class="text-sm text-text_color">Loading payment form...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div id="payment-element" class="mb-6" style="${ssrRenderStyle(!unref(isLoading) ? null : { display: "none" })}"></div><button id="submit" type="submit"${ssrIncludeBooleanAttr(unref(isProcessing)) ? " disabled" : ""} class="${ssrRenderClass([unref(isProcessing) ? "btn--disabled" : "btn--primary", "w-full btn"])}" style="${ssrRenderStyle(!unref(isLoading) ? null : { display: "none" })}">`);
      if (unref(isProcessing)) {
        _push(`<div class="flex items-center justify-center gap-2"><div class="spinner w-5 h-5 border-2 border-background_color border-t-transparent rounded-full animate-spin"></div><span class="btn__text">Processing...</span></div>`);
      } else {
        _push(`<span class="btn__text">Pay €${ssrInterpolate(unref(amount))}</span>`);
      }
      _push(`<span class="btn__fill"></span></button>`);
      if (unref(errorMessage)) {
        _push(`<div id="payment-message" class="mt-4 p-4 bg-error_text_color/10 border border-error_text_color rounded"><div class="flex items-start gap-2"><svg class="w-5 h-5 text-error_text_color flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg><p class="text-sm text-error_text_color">${ssrInterpolate(unref(errorMessage))}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form><div class="text-center space-y-2"><div class="flex items-center justify-center gap-2 text-success_text_color"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg><p class="text-sm text-text_color font-medium">Secure payment powered by Stripe</p></div><p class="text-xs text-text_color">All transactions are encrypted and secure</p></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payment/card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=card-DFpACojW.js.map
