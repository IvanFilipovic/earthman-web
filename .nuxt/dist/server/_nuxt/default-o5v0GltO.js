import { a as __nuxt_component_0, c as __nuxt_component_0$1, _ as _export_sfc } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, defineComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { u as useToast } from "./useToast-pOzf8V9B.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
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
const _imports_0 = "" + __buildAssetsURL("earth-man920.CBzC0h3U.png");
const _sfc_main$2 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const linkGroups = [
      {
        title: "EARTHMAN",
        links: [
          { label: "Our Story", href: "/about" },
          { label: "Projects", href: "/collections" },
          { label: "Shop", href: "/shop" }
        ]
      },
      {
        title: "HELP",
        links: [
          { label: "Contact Us", href: "/" },
          { label: "FAQs", href: "/" },
          { label: "Delivery and Returns", href: "/" },
          { label: "Size Guide", href: "/" }
        ]
      },
      {
        title: "LEGAL",
        links: [
          { label: "Privacy Policy", href: "/" },
          { label: "Terms and Conditions", href: "/" }
        ]
      },
      {
        title: "SOCIAL",
        links: [
          { label: "Instagram", href: "/" },
          { label: "Facebook", href: "/" },
          { label: "LinkedIn", href: "/" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-background_color text-text_color border-t border-text_color/30" }, _attrs))}><div class="w-full px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8"><!--[-->`);
      ssrRenderList(linkGroups, (group, i) => {
        _push(`<div class="md:col-span-2"><h3 class="font-semibold mb-4">${ssrInterpolate(group.title)}</h3><ul class="space-y-2 text-sm"><!--[-->`);
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
      _push(`<!--]--><div class="md:col-span-4"><img${ssrRenderAttr("src", _imports_0)} alt="Your Brand Name" class="max-w-[100%] h-auto"></div></div><div class="border-t border-text_color/30"><div class="max-w-7xl mx-auto px-6 flex flex-col items-center py-6"><p class="text-xs">© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Earthman. All rights reserved.</p></div></div></footer>`);
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
        class: "pointer-events-none fixed right-6 top-6 z-[9999] space-y-2",
        "aria-live": "polite",
        "aria-atomic": "true"
      }, _attrs))} data-v-9bd48949><div${ssrRenderAttrs({
        name: "toast",
        class: "space-y-2"
      })} data-v-9bd48949>`);
      ssrRenderList(unref(toasts), (t) => {
        _push(`<div class="${ssrRenderClass([bgClass(t.type), "pointer-events-auto flex items-start gap-3 px-4 py-3 min-w-[260px] max-w-[360px]"])}" role="status" data-v-9bd48949><span class="mt-0.5 text-sm font-medium" data-v-9bd48949>${ssrInterpolate(t.message)}</span><button class="ml-auto text-xs opacity-70 hover:opacity-100" aria-label="Dismiss" data-v-9bd48949>`);
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9bd48949"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-o5v0GltO.js.map
