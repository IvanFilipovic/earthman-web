import { _ as __nuxt_component_0, u as useFetch } from './AppHeader-CFAr7Zfb.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-B-CASStw.mjs';
import { ref, computed, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, e as useRuntimeConfig } from './server.mjs';
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
import '@vue/shared';
import './index-DTKfBZ1X.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'pinia';
import 'gsap';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

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
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-text_color" }, _attrs))}><!--[-->`);
      ssrRenderList(groups.value, (group, pageIndex) => {
        _push(`<div class="${ssrRenderClass([group.length > 1 ? "md:grid-cols-2" : "", "relative grid grid-cols-1 h-screen w-full gap-1 mb-[4px]"])}"><!--[-->`);
        ssrRenderList(group, (item) => {
          _push(`<div class="relative h-full w-full bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: `url(${item.element_one_image})` })}"><div class="absolute inset-0 bg-black bg-opacity-25"></div><div class="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-center text-white px-4"><h2 class="text-3xl font-semibold mb-4 bg-text_color/60">${ssrInterpolate(item.name)}</h2>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/collections/${encodeURIComponent(item.slug)}`,
            class: "primary-btn px-8 py-3"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` View collection `);
              } else {
                return [
                  createTextVNode(" View collection ")
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
        _push(`<div class="fixed inset-0 flex items-center justify-center"><p class="text-xl">Loading collections\u2026</p></div>`);
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_CollectionHome = _sfc_main$1;
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="w-full h-auto overflow-auto"><div class="relative flex flex-col w-full h-full"><div class="absolute inset-x-0 top-0 right-0 left-0 z-50 w-1/2 mx-auto">`);
  _push(ssrRenderComponent(_component_AppHeader, { dark: true }, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_CollectionHome, null, null, _parent));
  _push(`</div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BAn4dM9p.mjs.map
