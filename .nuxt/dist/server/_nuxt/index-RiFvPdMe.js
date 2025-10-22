import { _ as __nuxt_component_0$1 } from "./AppNavigation-B4JE81Gq.js";
import { g as useRuntimeConfig, a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { ref, computed, mergeProps, withCtx, createVNode, unref, useSSRContext, defineComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useFetch } from "./fetch-D4BRe0xr.js";
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
import "@intlify/utils";
import "/home/kai/Projekti/webshop/node_modules/cookie-es/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/destr/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/ohash/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/@unhead/vue/dist/index.mjs";
import "@vue/devtools-api";
import "gsap/Draggable.js";
import "gsap/all.js";
import "gsap";
import "gsap/TextPlugin.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "@headlessui/vue";
import "@vue/shared";
const _sfc_main$1 = {
  __name: "CollectionHome",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { data: collections, pending, error } = useFetch(
      `${config.public.apiBase}/public/collections/`,
      "$zEgBEec1eX"
    );
    const windowWidth = ref(0);
    const itemsPerPage = computed(() => windowWidth.value < 768 ? 1 : 2);
    const groups = computed(() => {
      const arr = collections.value || [];
      const per = itemsPerPage.value;
      const pages = [];
      for (let i = 0; i < arr.length; i += per) {
        pages.push(arr.slice(i, i + per));
      }
      return pages;
    });
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-text_color" }, _attrs))}><!--[-->`);
      ssrRenderList(groups.value, (group, pageIndex) => {
        _push(`<div class="${ssrRenderClass([group.length > 1 ? "md:grid-cols-2" : "", "relative grid grid-cols-1 min-h-screen w-full gap-1 mb-1"])}"><!--[-->`);
        ssrRenderList(group, (item) => {
          _push(`<div class="relative h-full w-full bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: `url(${item.element_one_image})` })}"><div class="absolute inset-0 bg-black bg-opacity-25"></div><div class="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center text-background_color px-4"><h2 class="text-base sm:text-lg md:text-2xl font-medium md:font-bold mb-4 bg-text_color/70 uppercase tracking-wider py-1">${ssrInterpolate(item.name)}</h2>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/collections/${encodeURIComponent(item.slug)}`,
            class: "primary-btn sweep group inline-flex items-center justify-center px-8 py-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="btn-label"${_scopeId}>View project</span><span class="sweep-overlay" aria-hidden="true"${_scopeId}></span>`);
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
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]-->`);
      if (unref(pending)) {
        _push(`<div class="fixed inset-0 flex items-center justify-center"><p class="text-xl">Loading collections…</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(error)) {
        _push(`<div class="fixed inset-0 flex items-center justify-center"><p class="text-xl text-red-600">Failed to load collections.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CollectionHome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(0);
    const parallaxY = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0$1;
      const _component_CollectionHome = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-e33957f0><div class="relative" data-v-e33957f0>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`</div><div class="relative z-20 will-change-transform" style="${ssrRenderStyle({ transform: `translateY(${-unref(parallaxY)}px)` })}" data-v-e33957f0>`);
      _push(ssrRenderComponent(_component_CollectionHome, null, null, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e33957f0"]]);
export {
  index as default
};
//# sourceMappingURL=index-RiFvPdMe.js.map
