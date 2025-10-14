import { b as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-B-CASStw.mjs';
import { ref, mergeProps, withCtx, createTextVNode, toDisplayString, defineComponent, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './index-DTKfBZ1X.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const toastsState = ref([]);
let _id = 0;
function useToast() {
  function remove(id) {
    toastsState.value = toastsState.value.filter((t) => t.id !== id);
  }
  function show(message, type = "info", timeout = 2500) {
    const id = ++_id;
    toastsState.value.push({ id, type, message, timeout });
  }
  function success(message, timeout) {
    show(message, "success", timeout != null ? timeout : 2500);
  }
  function error(message, timeout) {
    show(message, "error", timeout != null ? timeout : 3500);
  }
  return {
    toasts: toastsState,
    show,
    success,
    error,
    remove
  };
}

const _imports_0 = "" + buildAssetsURL("black_logo.Dt7XLCE6.png");
const _sfc_main$2 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const linkGroups = [
      {
        title: "EARTHMAN",
        links: [
          { label: "Our Story", href: "/about" },
          { label: "Collections", href: "/collections" },
          { label: "Shop", href: "/shop" }
        ]
      },
      {
        title: "Help",
        links: [
          { label: "Contact Us", href: "/" },
          { label: "FAQs", href: "/" },
          { label: "Delivery and Returns", href: "/" },
          { label: "Size Guide", href: "/" }
        ]
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/" },
          { label: "Terms and Conditions", href: "/" }
        ]
      },
      {
        title: "Social",
        links: [
          { label: "Instagram", href: "/" },
          { label: "Facebook", href: "/" },
          { label: "LinkedIn", href: "/" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-background_color texttext_color" }, _attrs))}><div class="max-w-7xl px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"><!--[-->`);
      ssrRenderList(linkGroups, (group, i) => {
        _push(`<div><h3 class="font-semibold mb-4">${ssrInterpolate(group.title)}</h3><ul class="space-y-2 text-sm"><!--[-->`);
        ssrRenderList(group.links, (item, j) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.href,
            class: "hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div><div class="border-t border-gray-300"><div class="max-w-7xl mx-auto px-6 flex flex-col items-center py-6"><img${ssrRenderAttr("src", _imports_0)} alt="Your Brand Name" class="max-w-[100%] h-auto mb-6"><p class="text-xs">\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Earthman. All rights reserved.</p></div></div></footer>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Toast",
  __ssrInlineRender: true,
  setup(__props) {
    const { toasts } = useToast();
    function bgClass(type) {
      if (type === "success") return "bg-secondary_button_color text-text_color";
      if (type === "error") return "bg-black text-white";
      return "bg-white text-black";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "pointer-events-none fixed right-6 bottom-6 z-[9999] space-y-2",
        "aria-live": "polite",
        "aria-atomic": "true"
      }, _attrs))} data-v-414bc495><div${ssrRenderAttrs({
        name: "toast",
        class: "space-y-2"
      })} data-v-414bc495>`);
      ssrRenderList(unref(toasts), (t) => {
        _push(`<div class="${ssrRenderClass([bgClass(t.type), "pointer-events-auto flex items-start gap-3 px-4 py-3 min-w-[260px] max-w-[360px]"])}" role="status" data-v-414bc495><span class="mt-0.5 text-sm font-medium" data-v-414bc495>${ssrInterpolate(t.message)}</span><button class="ml-auto text-xs opacity-70 hover:opacity-100" aria-label="Dismiss" data-v-414bc495>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:x",
          class: "w-5 h-5 text-text_color"
        }, null, _parent));
        _push(`</button></div>`);
      });
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Toast.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-414bc495"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppFooter = _sfc_main$2;
  const _component_Toast = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "smooth-wrapper",
    class: "flex flex-col w-full bg-background_color"
  }, _attrs))}><div id="smooth-content">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Toast, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-C0OZ1N6p.mjs.map
