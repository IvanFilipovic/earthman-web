import { _ as __nuxt_component_0 } from "./AppNavigation-DbbUjllq.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BeJz8Y8C.js";
import { _ as __nuxt_component_0$2 } from "./index-DSJLL3Jq.js";
import { defineComponent, withAsyncContext, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import { u as useImageTransform } from "./useImageTransform-D7n6x7Uv.js";
import { _ as _export_sfc } from "../server.mjs";
import "./virtual_public-Dgbfu3-q.js";
import "#internal/nuxt/paths";
import "pinia";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let ScrollSmoother = null;
    try {
      ScrollSmoother = ([__temp, __restore] = withAsyncContext(() => import("gsap/ScrollSmoother.js")), __temp = await __temp, __restore(), __temp).ScrollSmoother;
    } catch {
    }
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    if (ScrollSmoother) gsap.registerPlugin(ScrollSmoother);
    ref(null);
    ref(false);
    const loading = ref(true);
    const collections = ref([]);
    const { getTransformedUrl } = useImageTransform();
    function getOptimizedBgUrl(url) {
      if (!url) return "";
      const targetWidth = 1920;
      return getTransformedUrl(url, targetWidth, {
        quality: 85,
        format: "auto"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "collections-page" }, _attrs))} data-v-f2511fcf><div class="fixed top-0 left-0 w-full z-50" data-v-f2511fcf>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: true }, null, _parent));
      _push(`</div>`);
      if (unref(loading)) {
        _push(`<div class="fixed inset-0 flex items-center justify-center bg-background_color z-40" data-v-f2511fcf><p class="text-text_color text-xl" data-v-f2511fcf>Loading collections...</p></div>`);
      } else {
        _push(`<div id="smooth-wrapper" data-v-f2511fcf><div id="smooth-content" data-v-f2511fcf><!--[-->`);
        ssrRenderList(unref(collections), (collection, i) => {
          _push(`<section class="${ssrRenderClass([`slide--${i % 2 + 1}`, "slide"])}" data-v-f2511fcf><div class="slide__bg" style="${ssrRenderStyle({ backgroundImage: `url(${getOptimizedBgUrl(collection.element_one_image)})` })}" data-v-f2511fcf><div class="slide__overlay" data-v-f2511fcf></div></div><div class="slide__content" data-v-f2511fcf><div class="slide__content-inner" data-v-f2511fcf><h2 class="slide__title" data-v-f2511fcf><span class="slide__title-line" data-v-f2511fcf><span class="line__inner" data-v-f2511fcf>${ssrInterpolate(collection.name)}</span></span></h2><div class="slide__cta" data-v-f2511fcf>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/collections/${encodeURIComponent(collection.slug)}`,
            class: "btn btn--secondary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="btn__text" data-v-f2511fcf${_scopeId}>View Story</span><span class="btn__fill" data-v-f2511fcf${_scopeId}></span>`);
              } else {
                return [
                  createVNode("span", { class: "btn__text" }, "View Story"),
                  createVNode("span", { class: "btn__fill" })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
          if (i < unref(collections).length - 1) {
            _push(`<button type="button" class="slide__scroll-btn" data-v-f2511fcf><span class="slide__scroll-line" data-v-f2511fcf></span>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:chevron-down",
              class: "slide__scroll-icon"
            }, null, _parent));
            _push(`</button>`);
          } else if (i === unref(collections).length - 1 && unref(collections).length > 1) {
            _push(`<button type="button" class="slide__scroll-btn" data-v-f2511fcf>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:chevron-up",
              class: "slide__scroll-icon"
            }, null, _parent));
            _push(`<span class="slide__scroll-line" data-v-f2511fcf></span></button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></section>`);
        });
        _push(`<!--]--></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f2511fcf"]]);
export {
  index as default
};
//# sourceMappingURL=index-DfFe9fXA.js.map
