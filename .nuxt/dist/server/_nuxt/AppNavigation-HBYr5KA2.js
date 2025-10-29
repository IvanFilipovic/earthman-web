import { e as useRoute, a as __nuxt_component_0$1, f as __nuxt_component_3, d as __nuxt_component_0$2, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, computed, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
const _imports_0 = publicAssetsURL("/logo/earth-man920.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppNavigation",
  __ssrInlineRender: true,
  props: { dark: { type: Boolean, default: false } },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    ref(false);
    ref(0);
    ref(false);
    const isPathActive = (path) => route.path === path || route.path.startsWith(path + "/");
    const navWeight = (path) => isPathActive(path) ? "font-bold" : "font-light";
    const linkColorClass = computed(
      () => props.dark ? "text-background_color" : "text-text_color"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_3;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-57ef5c54><div class="hidden md:flex flex-col lg:flex-row w-full" data-v-57ef5c54><div class="flex flex-col w-full lg:w-1/2 h-full bg-background_color" data-v-57ef5c54><div class="absolute inset-x-0 top-0 w-1/2" data-v-57ef5c54>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "bg-transparent flex justify-center py-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="max-w-[100%]" data-v-57ef5c54${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Logo",
                class: "max-w-[100%]"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden md:flex w-full items-start justify-end lg:w-1/2 px-4 md:px-8 md:py-14 lg:py-24 gap-6 h-full" data-v-57ef5c54><section class="flex flex-col justify-end w-full bg-transparent z-50 my-auto" data-v-57ef5c54><div class="flex pt-4" data-v-57ef5c54><div class="flex flex-row justify-end w-full mx-auto space-x-4 py-4" data-v-57ef5c54>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop",
        class: [unref(linkColorClass), navWeight("/shop"), "text-sm my-auto px-4"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` SHOP `);
          } else {
            return [
              createTextVNode(" SHOP ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/collections",
        class: [unref(linkColorClass), navWeight("/collections"), "text-sm my-auto px-4"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`PROJECTS`);
          } else {
            return [
              createTextVNode("PROJECTS")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: [unref(linkColorClass), navWeight("/about"), "text-sm my-auto px-4"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`OUR STORY`);
          } else {
            return [
              createTextVNode("OUR STORY")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/profile",
        class: [unref(linkColorClass), navWeight("/profile"), "my-auto font-light pl-4"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:circle-user-round",
              class: ["w-6 h-6", unref(linkColorClass)]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:circle-user-round",
                class: ["w-6 h-6", unref(linkColorClass)]
              }, null, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></section></div></div><section class="flex md:hidden flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-6 gap-6" data-v-57ef5c54><div class="flex md:hidden items-center justify-between w-full px-2" data-v-57ef5c54><div class="w-[60%]" data-v-57ef5c54>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "image bg-cover bg-center bg-transparent h-12 flex justify-start max-w-[100%]"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4" data-v-57ef5c54>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<button data-v-57ef5c54>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:menu",
        class: ["w-7 h-7", unref(linkColorClass)]
      }, null, _parent));
      _push(`</button></div></div></section></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-57ef5c54"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=AppNavigation-HBYr5KA2.js.map
