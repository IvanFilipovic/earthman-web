import { c as useRoute, d as __nuxt_component_0$2 } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './index-Bc_SW2bH.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CdcgahCt.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppNavigation",
  __ssrInlineRender: true,
  props: { dark: { type: Boolean, default: false } },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    ref(false);
    const isPathActive = (path) => route.path === path || route.path.startsWith(path + "/");
    const navWeight = (path) => isPathActive(path) ? "font-bold" : "font-light";
    const linkColorClass = computed(
      () => props.dark ? "text-background_color" : "text-text_color"
    );
    ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$2;
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full bg-transparent z-50 my-auto" }, _attrs))}><div class="flex pt-4"><div class="flex flex-row justify-end w-full mx-auto space-x-4 py-4">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/shop",
              class: [linkColorClass.value, "text-sm font-light px-4 inline-flex items-center gap-1"]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` SHOP `);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:chevron-down",
                    class: ["w-4 h-4", linkColorClass.value]
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" SHOP "),
                    createVNode(_component_Icon, {
                      name: "lucide:chevron-down",
                      class: ["w-4 h-4", linkColorClass.value]
                    }, null, 8, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: "/shop",
                class: [linkColorClass.value, "text-sm font-light px-4 inline-flex items-center gap-1"]
              }, {
                default: withCtx(() => [
                  createTextVNode(" SHOP "),
                  createVNode(_component_Icon, {
                    name: "lucide:chevron-down",
                    class: ["w-4 h-4", linkColorClass.value]
                  }, null, 8, ["class"])
                ]),
                _: 1
              }, 8, ["class"])
            ];
          }
        })
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/collections",
        class: [linkColorClass.value, navWeight("/collections"), "text-sm my-auto px-4"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`COLLECTIONS`);
          } else {
            return [
              createTextVNode("COLLECTIONS")
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
        class: [linkColorClass.value, navWeight("/profile"), "my-auto font-light pl-4"]
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
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=AppNavigation-DaXX_rtR.mjs.map
