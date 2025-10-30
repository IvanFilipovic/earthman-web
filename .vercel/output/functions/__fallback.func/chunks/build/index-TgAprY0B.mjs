import { _ as __nuxt_component_0 } from './AppNavigation-HBYr5KA2.mjs';
import { _ as _export_sfc, S as ScrollTrigger, g as ScrollToPlugin, f as __nuxt_component_0$3, e as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, withAsyncContext, ref, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import gsap from 'gsap';
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
import 'node:module';
import 'node:url';
import 'ipx';
import 'pinia';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@headlessui/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let ScrollSmoother = null;
    try {
      ScrollSmoother = ([__temp, __restore] = withAsyncContext(() => import('../_/ScrollSmoother.mjs')), __temp = await __temp, __restore(), __temp).ScrollSmoother;
    } catch {
    }
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    if (ScrollSmoother) gsap.registerPlugin(ScrollSmoother);
    ref(null);
    const isDark = ref(false);
    const loading = ref(true);
    const collections = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-eabb96bd><div class="fixed top-0 left-0 w-full z-50" data-v-eabb96bd>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: unref(isDark) }, null, _parent));
      _push(`</div>`);
      if (unref(loading)) {
        _push(`<div class="fixed inset-0 flex items-center justify-center bg-background_color" data-v-eabb96bd><p class="text-text_color text-xl" data-v-eabb96bd>Loading collections...</p></div>`);
      } else {
        _push(`<div id="smooth-wrapper" data-v-eabb96bd><div id="smooth-content" class="stage" data-v-eabb96bd><!--[-->`);
        ssrRenderList(unref(collections), (collection, i) => {
          _push(`<section class="${ssrRenderClass([`slide--${i % 2 + 1}`, "slide"])}" data-v-eabb96bd><div class="slide__bg" style="${ssrRenderStyle({ backgroundImage: `url(${collection.element_one_image})` })}" data-v-eabb96bd><div class="slide__overlay" data-v-eabb96bd></div></div><div class="slide__content" data-v-eabb96bd><div class="slide__content-inner" data-v-eabb96bd><h2 class="slide__title" data-v-eabb96bd><span class="slide__title-line" data-v-eabb96bd><span class="line__inner" data-v-eabb96bd>${ssrInterpolate(collection.name)}</span></span></h2><div class="slide__cta" data-v-eabb96bd>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/collections/${encodeURIComponent(collection.slug)}`,
            class: "btn btn--secondary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="btn__text" data-v-eabb96bd${_scopeId}>View Story</span><span class="btn__fill" data-v-eabb96bd${_scopeId}></span>`);
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
            _push(`<button type="button" class="slide__scroll-btn" data-v-eabb96bd><span class="slide__scroll-line" data-v-eabb96bd></span>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:chevron-down",
              class: "slide__scroll-icon"
            }, null, _parent));
            _push(`</button>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eabb96bd"]]);

export { index as default };
//# sourceMappingURL=index-TgAprY0B.mjs.map
