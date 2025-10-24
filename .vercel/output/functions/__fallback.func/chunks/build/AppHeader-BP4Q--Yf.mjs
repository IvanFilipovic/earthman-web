import { _ as _export_sfc, u as useRoute, e as __nuxt_component_0$3, b as __nuxt_component_2, d as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';

const _imports_0 = publicAssetsURL("/logo/earth-man920.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    navigation: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const route = useRoute();
    ref(false);
    ref(0);
    ref(false);
    const isPathActive = (path) => route.path === path || route.path.startsWith(path + "/");
    const navWeight = (path) => isPathActive(path) ? "font-bold" : "font-light";
    const props = __props;
    const linkColorClass = computed(
      () => props.dark ? "text-background_color" : "text-text_color"
    );
    computed(
      () => props.dark ? "bg-background_color text-text_color" : "bg-text_color text-background_color"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_ClientOnly = __nuxt_component_2;
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-6 gap-6" }, _attrs))} data-v-7ae2e398><div class="hidden md:flex flex-col w-full" data-v-7ae2e398><div class="w-full" data-v-7ae2e398>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "bg-transparent flex justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="max-w-[100%]" data-v-7ae2e398${_scopeId}>`);
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
      _push(`</div>`);
      if (__props.navigation) {
        _push(`<div class="flex w-full" data-v-7ae2e398><div class="flex flex-row justify-start w-full mx-auto gap-x-4 py-4" data-v-7ae2e398>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/shop",
          class: [linkColorClass.value, navWeight("/shop"), "text-sm my-auto pr-4"]
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
          class: [linkColorClass.value, navWeight("/collections"), "text-sm my-auto pr-4"]
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
          class: [linkColorClass.value, navWeight("/about"), "text-sm my-auto px-4"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`ABOUT`);
            } else {
              return [
                createTextVNode("ABOUT")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: [linkColorClass.value, , navWeight("/profile"), "my-auto font-light pr-4"]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:circle-user-round",
                class: ["w-6 h-6", linkColorClass.value]
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "lucide:circle-user-round",
                  class: ["w-6 h-6", linkColorClass.value]
                }, null, 8, ["class"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex md:hidden items-center justify-between w-full px-2" data-v-7ae2e398><div class="w-[60%]" data-v-7ae2e398>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "image bg-cover bg-center bg-transparent h-12 flex justify-start max-w-[100%]"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4" data-v-7ae2e398>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<button data-v-7ae2e398>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:menu",
        class: ["w-7 h-7", linkColorClass.value]
      }, null, _parent));
      _push(`</button></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7ae2e398"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=AppHeader-BP4Q--Yf.mjs.map
