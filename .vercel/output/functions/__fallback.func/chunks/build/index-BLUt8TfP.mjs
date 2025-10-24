import { _ as __nuxt_component_0, a as __nuxt_component_4, b as _sfc_main$2 } from './Newsletter-DUEYXif7.mjs';
import { _ as __nuxt_component_1 } from './AppHeader-BP4Q--Yf.mjs';
import { _ as _export_sfc, e as __nuxt_component_0$3, c as useRuntimeConfig } from './server.mjs';
import { withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch } from './fetch-D4BRe0xr.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@intlify/utils';
import 'vue-router';
import '@iconify/utils';
import 'consola';
import 'node:url';
import 'ipx';
import 'pinia';
import 'gsap';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@headlessui/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import '@vue/shared';

const _sfc_main$1 = {
  __name: "CollectionListing",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { data: collections, pending, error } = useFetch(
      `${config.public.apiBase}/public/collections/`,
      "$nmoBZvspSO"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      ssrRenderSuspense(_push, {
        default: () => {
          _push(`<div class="grid grid-cols-1 md:grid-cols-2 w-full h-auto lg:h-screen overflow-hidden" data-v-39237e8d><!--[-->`);
          ssrRenderList(unref(collections), (collection) => {
            _push(`<div class="relative w-full pt-[100%] bg-cover bg-center overflow-hidden" style="${ssrRenderStyle({ backgroundImage: `url(${collection.element_one_image})` })}" data-v-39237e8d><div class="overlay absolute top-0 left-0 right-0 flex flex-col md:flex-row justify-end md:justify-end h-full" data-v-39237e8d><div class="flex flex-col space-y-3 md:space-y-2 px-8 py-8 md:pb-8 md:px-8 items-center md:items-end justify-end md:w-[60%] text-center md:text-right h-full" data-v-39237e8d><h2 class="text-base sm:text-lg md:text-xl font-medium md:font-semibold text-text_color bg-background_color/60 px-4 py-1 uppercase tracking-wider w-[60%] md:w-full inline-flex items-center justify-center" data-v-39237e8d>${ssrInterpolate(collection.name)}</h2>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/collections/${encodeURIComponent(collection.slug)}`,
              class: "primary-btn sweep group inline-flex items-center justify-center px-4 py-2 w-[60%] md:w-full"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="btn-label" data-v-39237e8d${_scopeId}>View project</span><span class="sweep-overlay" aria-hidden="true" data-v-39237e8d${_scopeId}></span>`);
                } else {
                  return [
                    createVNode("span", { class: "btn-label" }, "View project"),
                    createVNode("span", {
                      class: "sweep-overlay",
                      "aria-hidden": "true"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div></div>`);
          });
          _push(`<!--]--></div>`);
        },
        fallback: () => {
          _push(`<div class="flex items-center justify-center h-screen" data-v-39237e8d> Loading collections\u2026 </div>`);
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CollectionListing.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-39237e8d"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BackgroundVideo = __nuxt_component_0;
  const _component_AppHeader = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0$3;
  const _component_CollectionListing = __nuxt_component_3;
  const _component_Carusel = __nuxt_component_4;
  const _component_Newsletter = _sfc_main$2;
  _push(`<section${ssrRenderAttrs(_attrs)} data-v-546831c5><div class="flex flex-col lg:flex-row w-full" data-v-546831c5><div class="flex flex-col w-full lg:w-1/2 h-full bg-background_color" data-v-546831c5>`);
  _push(ssrRenderComponent(_component_BackgroundVideo, {
    src: "/video/test.mp4",
    poster: "/logo/earth-man-black.png",
    overlay: "",
    overlayClasses: "bg-gradient-to-b from-black/50 to-transparent"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="absolute inset-x-0 top-0 w-full" data-v-546831c5${_scopeId}>`);
        _push2(ssrRenderComponent(_component_AppHeader, { dark: true }, null, _parent2, _scopeId));
        _push2(`</div><div class="absolute inset-x-0 bottom-6 md:bottom-0 left-0 flex items-center flex-col pb-8 text-background_color px-4 md:text-end md:self-end" data-v-546831c5${_scopeId}><h1 class="text-4xl md:text-6xl font-bold mb-4 self-center text-center md:self-end" data-v-546831c5${_scopeId}>Welcome to Our Shop</h1><p class="md:self-end mb-8 self-center text-center" data-v-546831c5${_scopeId}>Explore our latest collection with immersive video background.</p>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/shop",
          class: "secondary-btn sweep-secondary mx-auto md:mx-0 md:self-end px-4 py-2 w-[60%] md:w-fit text-center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="btn-label" data-v-546831c5${_scopeId2}>Shop Now</span><span class="sweep-overlay" aria-hidden="true" data-v-546831c5${_scopeId2}></span>`);
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
            createVNode(_component_AppHeader, { dark: true })
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
  _push(`</div><div class="flex flex-col w-full lg:w-1/2" data-v-546831c5>`);
  _push(ssrRenderComponent(_component_CollectionListing, null, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_Carusel, null, null, _parent));
  _push(ssrRenderComponent(_component_Newsletter, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-546831c5"]]);

export { index as default };
//# sourceMappingURL=index-BLUt8TfP.mjs.map
