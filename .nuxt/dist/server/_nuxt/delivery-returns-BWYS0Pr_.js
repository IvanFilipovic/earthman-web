import { _ as __nuxt_component_0 } from "./AppNavigation-DbbUjllq.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BeJz8Y8C.js";
import { _ as __nuxt_component_0$2 } from "./index-DSJLL3Jq.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { a as useSeoMeta, _ as _export_sfc } from "../server.mjs";
import "./virtual_public-Dgbfu3-q.js";
import "#internal/nuxt/paths";
import "pinia";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
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
  __name: "delivery-returns",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    useSeoMeta({
      title: "Delivery & Returns - Earthman",
      description: "Learn about our delivery options, shipping costs, return policy, and how to return items at Earthman."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background_color" }, _attrs))} data-v-c3dcd0d0>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="px-4 md:px-8 pt-4" data-v-c3dcd0d0><nav class="flex items-center py-1 text-xs md:text-sm text-text_color uppercase tracking-widest" aria-label="Breadcrumb" data-v-c3dcd0d0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:underline pr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HOME`);
          } else {
            return [
              createTextVNode("HOME")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="pr-2" aria-hidden="true" data-v-c3dcd0d0>/</span><span class="pr-2" aria-current="page" data-v-c3dcd0d0>DELIVERY &amp; RETURNS</span></nav></div><div class="max-w-7xl mx-auto px-4 md:px-8 py-12" data-v-c3dcd0d0><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "text-center mb-16 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0s" })}" data-v-c3dcd0d0><h1 class="text-3xl md:text-5xl uppercase tracking-widest mb-4" data-v-c3dcd0d0> Delivery &amp; Returns </h1><p class="text-text_color/70 text-sm md:text-base max-w-2xl mx-auto" data-v-c3dcd0d0> Everything you need to know about shipping, delivery times, and our hassle-free return policy. </p></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-16 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}" data-v-c3dcd0d0><div class="border-b-3 border-text_color pb-4 mb-8" data-v-c3dcd0d0><h2 class="text-2xl md:text-3xl uppercase tracking-widest flex items-center gap-3" data-v-c3dcd0d0>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:truck",
        class: "w-6 h-6"
      }, null, _parent));
      _push(` Delivery </h2></div><div class="space-y-8 text-text_color/90 leading-relaxed" data-v-c3dcd0d0><div data-v-c3dcd0d0><h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium" data-v-c3dcd0d0> Shipping Costs </h3><p class="mb-4" data-v-c3dcd0d0> We want to make shopping with Earthman as affordable as possible. That&#39;s why we offer: </p><ul class="space-y-2 pl-6" data-v-c3dcd0d0><li class="list-disc" data-v-c3dcd0d0><strong data-v-c3dcd0d0>Free Shipping</strong> on all orders over €200 </li><li class="list-disc" data-v-c3dcd0d0><strong data-v-c3dcd0d0>Flat Rate Shipping</strong> of €12.99 for orders under €200 </li></ul><p class="mt-4 text-sm text-text_color/70" data-v-c3dcd0d0> Shipping costs are automatically calculated at checkout based on your order total. </p></div><div data-v-c3dcd0d0><h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium" data-v-c3dcd0d0> Delivery Times </h3><p class="mb-4" data-v-c3dcd0d0> We process all orders within 1-2 business days. Once your order ships, you can expect delivery within: </p><div class="bg-text_color/5 border border-text_color/20 p-6 space-y-3" data-v-c3dcd0d0><div class="flex justify-between items-center pb-2 border-b border-text_color/20" data-v-c3dcd0d0><span class="font-medium" data-v-c3dcd0d0>Croatia</span><span data-v-c3dcd0d0>3-5 business days</span></div><div class="flex justify-between items-center pb-2 border-b border-text_color/20" data-v-c3dcd0d0><span class="font-medium" data-v-c3dcd0d0>Slovenia &amp; Austria</span><span data-v-c3dcd0d0>5-7 business days</span></div><div class="flex justify-between items-center pb-2 border-b border-text_color/20" data-v-c3dcd0d0><span class="font-medium" data-v-c3dcd0d0>Germany &amp; Italy</span><span data-v-c3dcd0d0>5-7 business days</span></div><div class="flex justify-between items-center" data-v-c3dcd0d0><span class="font-medium" data-v-c3dcd0d0>Other EU Countries</span><span data-v-c3dcd0d0>7-10 business days</span></div></div><p class="mt-4 text-sm text-text_color/70" data-v-c3dcd0d0> Please note: Delivery times are estimates and may vary during peak seasons or due to unforeseen circumstances. </p></div><div data-v-c3dcd0d0><h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium" data-v-c3dcd0d0> Order Tracking </h3><p class="mb-4" data-v-c3dcd0d0> Once your order has been dispatched, you will receive a confirmation email with a tracking number. You can use this number to track your package in real-time through our courier&#39;s website. </p><p data-v-c3dcd0d0> If you haven&#39;t received your tracking information within 48 hours of placing your order, please check your spam folder or `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "underline hover:no-underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`contact us`);
          } else {
            return [
              createTextVNode("contact us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </p></div><div data-v-c3dcd0d0><h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium" data-v-c3dcd0d0> Where We Ship </h3><p class="mb-4" data-v-c3dcd0d0> Currently, we ship to the following countries: </p><div class="flex flex-wrap gap-3" data-v-c3dcd0d0><span class="px-4 py-2 bg-text_color/5 border border-text_color/20 text-sm" data-v-c3dcd0d0>Croatia</span><span class="px-4 py-2 bg-text_color/5 border border-text_color/20 text-sm" data-v-c3dcd0d0>Slovenia</span><span class="px-4 py-2 bg-text_color/5 border border-text_color/20 text-sm" data-v-c3dcd0d0>Austria</span><span class="px-4 py-2 bg-text_color/5 border border-text_color/20 text-sm" data-v-c3dcd0d0>Germany</span><span class="px-4 py-2 bg-text_color/5 border border-text_color/20 text-sm" data-v-c3dcd0d0>Italy</span></div><p class="mt-4 text-sm text-text_color/70" data-v-c3dcd0d0> We are working on expanding our shipping coverage to more countries. If your country is not listed, please `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "underline hover:no-underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`contact us`);
          } else {
            return [
              createTextVNode("contact us")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` for more information. </p></div></div></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-16 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}" data-v-c3dcd0d0><div class="border-b-3 border-text_color pb-4 mb-8" data-v-c3dcd0d0><h2 class="text-2xl md:text-3xl uppercase tracking-widest flex items-center gap-3" data-v-c3dcd0d0>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:rotate-ccw",
        class: "w-6 h-6"
      }, null, _parent));
      _push(` Returns </h2></div><div class="space-y-8 text-text_color/90 leading-relaxed" data-v-c3dcd0d0><div data-v-c3dcd0d0><h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium" data-v-c3dcd0d0> 30-Day Return Policy </h3><p class="mb-4" data-v-c3dcd0d0> We want you to be completely satisfied with your purchase. If for any reason you&#39;re not happy with your order, you can return it within 30 days of delivery for a full refund. </p><div class="bg-green-50 border border-green-200 p-6 my-6" data-v-c3dcd0d0><div class="flex items-start gap-3" data-v-c3dcd0d0>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:check-circle",
        class: "w-6 h-6 text-green-600 shrink-0 mt-1"
      }, null, _parent));
      _push(`<div data-v-c3dcd0d0><p class="font-medium text-green-900 mb-2" data-v-c3dcd0d0>Items must be:</p><ul class="space-y-1 text-green-800 text-sm" data-v-c3dcd0d0><li data-v-c3dcd0d0>• Unworn and unwashed</li><li data-v-c3dcd0d0>• In original condition with all tags attached</li><li data-v-c3dcd0d0>• In original packaging (if applicable)</li><li data-v-c3dcd0d0>• Accompanied by proof of purchase</li></ul></div></div></div></div><div data-v-c3dcd0d0><h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium" data-v-c3dcd0d0> Non-Returnable Items </h3><div class="bg-red-50 border border-red-200 p-6" data-v-c3dcd0d0><div class="flex items-start gap-3" data-v-c3dcd0d0>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:x-circle",
        class: "w-6 h-6 text-red-600 shrink-0 mt-1"
      }, null, _parent));
      _push(`<div data-v-c3dcd0d0><p class="text-red-900 mb-3" data-v-c3dcd0d0> For hygiene and safety reasons, the following items cannot be returned: </p><ul class="space-y-1 text-red-800 text-sm" data-v-c3dcd0d0><li data-v-c3dcd0d0>• Items marked as &quot;Final Sale&quot;</li><li data-v-c3dcd0d0>• Discounted items (over 30% off)</li><li data-v-c3dcd0d0>• Items that show signs of wear or damage</li><li data-v-c3dcd0d0>• Items without original tags</li></ul></div></div></div></div><div data-v-c3dcd0d0><h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium" data-v-c3dcd0d0> How to Return an Item </h3><div class="space-y-4" data-v-c3dcd0d0><div class="flex gap-4" data-v-c3dcd0d0><div class="w-10 h-10 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" data-v-c3dcd0d0> 1 </div><div data-v-c3dcd0d0><h4 class="font-medium mb-2" data-v-c3dcd0d0>Contact Us</h4><p class="text-sm" data-v-c3dcd0d0> Email us at <a href="mailto:info@earthman.com" class="underline" data-v-c3dcd0d0>info@earthman.com</a> or use our `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "underline hover:no-underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`contact form`);
          } else {
            return [
              createTextVNode("contact form")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. Include your order number and the item(s) you wish to return. </p></div></div><div class="flex gap-4" data-v-c3dcd0d0><div class="w-10 h-10 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" data-v-c3dcd0d0> 2 </div><div data-v-c3dcd0d0><h4 class="font-medium mb-2" data-v-c3dcd0d0>Receive Authorization</h4><p class="text-sm" data-v-c3dcd0d0> We&#39;ll send you a return authorization number and detailed instructions within 24 hours. </p></div></div><div class="flex gap-4" data-v-c3dcd0d0><div class="w-10 h-10 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" data-v-c3dcd0d0> 3 </div><div data-v-c3dcd0d0><h4 class="font-medium mb-2" data-v-c3dcd0d0>Pack Your Items</h4><p class="text-sm" data-v-c3dcd0d0> Carefully pack the item(s) in the original packaging (if possible). Include your order number and return authorization number inside the package. </p></div></div><div class="flex gap-4" data-v-c3dcd0d0><div class="w-10 h-10 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" data-v-c3dcd0d0> 4 </div><div data-v-c3dcd0d0><h4 class="font-medium mb-2" data-v-c3dcd0d0>Ship Your Return</h4><p class="text-sm" data-v-c3dcd0d0> Send the package to the address provided in our return instructions. We recommend using a trackable shipping method and keeping your receipt. </p></div></div><div class="flex gap-4" data-v-c3dcd0d0><div class="w-10 h-10 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" data-v-c3dcd0d0> 5 </div><div data-v-c3dcd0d0><h4 class="font-medium mb-2" data-v-c3dcd0d0>Receive Your Refund</h4><p class="text-sm" data-v-c3dcd0d0> Once we receive and inspect your return (5-7 business days), we&#39;ll process your refund to your original payment method. Please allow 5-10 additional business days for the refund to appear in your account. </p></div></div></div></div><div data-v-c3dcd0d0><h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium" data-v-c3dcd0d0> Return Shipping Costs </h3><p class="mb-4" data-v-c3dcd0d0> Return shipping costs are the responsibility of the customer, unless: </p><ul class="space-y-2 pl-6" data-v-c3dcd0d0><li class="list-disc" data-v-c3dcd0d0>The item received was defective or damaged</li><li class="list-disc" data-v-c3dcd0d0>We sent you the wrong item</li><li class="list-disc" data-v-c3dcd0d0>There was an error with your order</li></ul><p class="mt-4" data-v-c3dcd0d0> In these cases, we will provide you with a prepaid return label and refund the full cost of return shipping. </p></div><div data-v-c3dcd0d0><h3 class="text-lg md:text-xl uppercase tracking-wider mb-3 font-medium" data-v-c3dcd0d0> Exchanges </h3><p class="mb-4" data-v-c3dcd0d0> We currently do not offer direct exchanges. If you need a different size or color: </p><ol class="space-y-2 pl-6 list-decimal" data-v-c3dcd0d0><li data-v-c3dcd0d0>Return the original item following our return process</li><li data-v-c3dcd0d0>Place a new order for the item you want</li></ol><p class="mt-4 text-sm text-text_color/70" data-v-c3dcd0d0> This ensures you receive your preferred item as quickly as possible, without waiting for the return to be processed first. </p></div></div></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "text-center border border-text_color/20 p-8 md:p-12 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}" data-v-c3dcd0d0>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:help-circle",
        class: "w-12 h-12 mx-auto mb-4"
      }, null, _parent));
      _push(`<h2 class="text-2xl uppercase tracking-widest mb-4" data-v-c3dcd0d0> Questions? </h2><p class="text-text_color/80 mb-6 max-w-xl mx-auto" data-v-c3dcd0d0> If you have any questions about delivery or returns, or need help with an order, our customer service team is here to assist you. </p><div class="flex flex-col sm:flex-row gap-4 justify-center" data-v-c3dcd0d0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn btn--primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="btn__text" data-v-c3dcd0d0${_scopeId}>Contact Us</span><span class="btn__fill" data-v-c3dcd0d0${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "btn__text" }, "Contact Us"),
              createVNode("span", { class: "btn__fill" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/faq",
        class: "btn btn--secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="btn__text" data-v-c3dcd0d0${_scopeId}>View FAQ</span><span class="btn__fill" data-v-c3dcd0d0${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "btn__text" }, "View FAQ"),
              createVNode("span", { class: "btn__fill" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/delivery-returns.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const deliveryReturns = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c3dcd0d0"]]);
export {
  deliveryReturns as default
};
//# sourceMappingURL=delivery-returns-BWYS0Pr_.js.map
