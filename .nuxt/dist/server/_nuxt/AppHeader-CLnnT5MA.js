import { computed, toValue, reactive, watch, defineComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { hash } from "/home/kai/Projekti/webshop/node_modules/ohash/dist/index.mjs";
import { isPlainObject } from "@vue/shared";
import { l as fetchDefaults, m as useRequestFetch, c as useRoute, d as __nuxt_component_0$1, _ as _export_sfc } from "../server.mjs";
import { u as useAsyncData, _ as __nuxt_component_0$3 } from "./index-DTKfBZ1X.js";
import { _ as __nuxt_component_0$2 } from "./nuxt-link-B-CASStw.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  if (!immediate) {
    let setImmediate = function() {
      _asyncDataOptions.immediate = true;
    };
    watch(key, setImmediate, { flush: "sync", once: true });
    watch([...watchSources || [], _fetchOptions], setImmediate, { flush: "sync", once: true });
  }
  let controller;
  const asyncData = useAsyncData(watchSources === false ? key.value : key, () => {
    controller?.abort?.(new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  props: {
    dark: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const route = useRoute();
    const isPathActive = (path) => route.path === path || route.path.startsWith(path + "/");
    const navWeight = (path) => isPathActive(path) ? "font-bold" : "font-light";
    const props = __props;
    const linkColorClass = computed(
      () => props.dark ? "text-background_color" : "text-text_color"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$3;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full bg-transparent z-50" }, _attrs))} data-v-093f83da><div class="image bg-cover bg-center bg-transparent h-40 flex justify-center max-w-[100%]" data-v-093f83da></div><div class="flex flex-row mx-auto space-x-8 pt-4" data-v-093f83da><div class="flex flex-auto" data-v-093f83da>`);
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
            _push2(`ABOUT`);
          } else {
            return [
              createTextVNode("ABOUT")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-auto" data-v-093f83da>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: [linkColorClass.value, , navWeight("/profile"), "my-auto font-light px-4"]
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
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-093f83da"]]);
export {
  __nuxt_component_0 as _,
  useFetch as u
};
//# sourceMappingURL=AppHeader-CLnnT5MA.js.map
