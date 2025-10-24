import { _ as __nuxt_component_0$1, a as __nuxt_component_4, b as _sfc_main$2 } from "./Newsletter-DUEYXif7.js";
import { _ as __nuxt_component_0$2 } from "./AppNavigation-BMb4Nfnz.js";
import { f as useRuntimeConfig, a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, useSSRContext, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import { u as useFetch } from "./fetch-D4BRe0xr.js";
/* empty css                         */
import "keen-slider";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/defu/dist/defu.mjs";
import "/home/kai/Projekti/webshop/node_modules/h3/dist/index.mjs";
import "./AppHeader-BP4Q--Yf.js";
import "#internal/nuxt/paths";
import "ofetch";
import "/home/kai/Projekti/webshop/node_modules/unctx/dist/index.mjs";
import "pinia";
import "vue-router";
import "/home/kai/Projekti/webshop/node_modules/radix3/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/klona/dist/index.mjs";
import "@intlify/utils";
import "/home/kai/Projekti/webshop/node_modules/cookie-es/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/destr/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/ohash/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
import "gsap/Draggable.js";
import "gsap/all.js";
import "gsap/TextPlugin.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "@headlessui/vue";
import "@vue/shared";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "test",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let ScrollSmoother = null;
    let SplitText = null;
    try {
      ScrollSmoother = ([__temp, __restore] = withAsyncContext(() => import("gsap/ScrollSmoother.js")), __temp = await __temp, __restore(), __temp).ScrollSmoother;
    } catch {
    }
    try {
      SplitText = ([__temp, __restore] = withAsyncContext(() => import("gsap/SplitText.js")), __temp = await __temp, __restore(), __temp).SplitText;
    } catch {
    }
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    if (ScrollSmoother) gsap.registerPlugin(ScrollSmoother);
    if (SplitText) gsap.registerPlugin(SplitText);
    const config = useRuntimeConfig();
    const { data: collections } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/public/collections/",
      { baseURL: config.public.apiBase, server: false, default: () => [] },
      "$lI5pu49Cr3"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "smooth-wrapper" }, _attrs))} data-v-3961bce5><div id="smooth-content" class="stage" data-v-3961bce5><!--[-->`);
      ssrRenderList(unref(collections), (c, i) => {
        _push(`<section${ssrRenderAttr("id", `slide-${i + 1}`)} class="${ssrRenderClass([`slide--${(i + 1) % 7}`, "slide"])}" data-v-3961bce5><div class="col col--1" data-v-3961bce5><div class="${ssrRenderClass([`col__content--${(i + 1) % 6 || 6}`, "col__content"])}" data-v-3961bce5><h2 class="col__content-title" data-v-3961bce5><span class="line__inner" data-v-3961bce5>${ssrInterpolate(c.name || "Collection")}</span><br data-v-3961bce5></h2><div class="col__content-wrap" data-v-3961bce5>`);
        if (c.slug) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/collections/${encodeURIComponent(c.slug)}`,
            class: "slide-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View Story `);
              } else {
                return [
                  createTextVNode(" View Story ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (i < unref(collections).length - 1) {
          _push(`<a${ssrRenderAttr("href", `#slide-${i + 2}`)} class="slide__scroll-link" data-v-3961bce5><div class="slide__scroll-line" data-v-3961bce5> Next</div></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="col col--2" data-v-3961bce5><div class="col__image-wrap" data-v-3961bce5><img class="img img--1"${ssrRenderAttr("src", c.element_one_image)}${ssrRenderAttr("alt", c.name || `Collection ${i + 1}`)} loading="lazy" decoding="async" data-v-3961bce5></div></div></section>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/test.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3961bce5"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BackgroundVideo = __nuxt_component_0$1;
  const _component_AppNavigation = __nuxt_component_0$2;
  const _component_NuxtLink = __nuxt_component_0;
  const _component_test = __nuxt_component_3;
  const _component_Carusel = __nuxt_component_4;
  const _component_Newsletter = _sfc_main$2;
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-d840bd20>`);
  _push(ssrRenderComponent(_component_BackgroundVideo, {
    src: "/video/test.mp4",
    poster: "/logo/earth-man-black.png",
    overlay: "",
    overlayClasses: "bg-gradient-to-b from-black/50 to-transparent"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="absolute inset-x-0 top-0 w-full" data-v-d840bd20${_scopeId}>`);
        _push2(ssrRenderComponent(_component_AppNavigation, { dark: true }, null, _parent2, _scopeId));
        _push2(`</div><div class="absolute inset-x-0 bottom-6 md:bottom-0 left-0 flex items-center flex-col pb-8 text-background_color px-4 md:text-end md:self-end" data-v-d840bd20${_scopeId}><h1 class="text-4xl md:text-6xl font-bold mb-4 self-center text-center md:self-end" data-v-d840bd20${_scopeId}>Welcome to Our Shop</h1><p class="md:self-end mb-8 self-center text-center" data-v-d840bd20${_scopeId}>Explore our latest collection with immersive video background.</p>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/shop",
          class: "secondary-btn sweep-secondary mx-auto md:mx-0 md:self-end px-4 py-2 w-[60%] md:w-fit text-center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="btn-label" data-v-d840bd20${_scopeId2}>Shop Now</span><span class="sweep-overlay" aria-hidden="true" data-v-d840bd20${_scopeId2}></span>`);
            } else {
              return [
                createVNode("span", { class: "btn-label" }, "Shop Now"),
                createVNode("span", {
                  class: "sweep-overlay",
                  "aria-hidden": "true"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "absolute inset-x-0 top-0 w-full" }, [
            createVNode(_component_AppNavigation, { dark: true })
          ]),
          createVNode("div", { class: "absolute inset-x-0 bottom-6 md:bottom-0 left-0 flex items-center flex-col pb-8 text-background_color px-4 md:text-end md:self-end" }, [
            createVNode("h1", { class: "text-4xl md:text-6xl font-bold mb-4 self-center text-center md:self-end" }, "Welcome to Our Shop"),
            createVNode("p", { class: "md:self-end mb-8 self-center text-center" }, "Explore our latest collection with immersive video background."),
            createVNode(_component_NuxtLink, {
              to: "/shop",
              class: "secondary-btn sweep-secondary mx-auto md:mx-0 md:self-end px-4 py-2 w-[60%] md:w-fit text-center"
            }, {
              default: withCtx(() => [
                createVNode("span", { class: "btn-label" }, "Shop Now"),
                createVNode("span", {
                  class: "sweep-overlay",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_test, null, null, _parent));
  _push(ssrRenderComponent(_component_Carusel, null, null, _parent));
  _push(ssrRenderComponent(_component_Newsletter, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const test = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d840bd20"]]);
export {
  test as default
};
//# sourceMappingURL=test-DXgxYVZd.js.map
