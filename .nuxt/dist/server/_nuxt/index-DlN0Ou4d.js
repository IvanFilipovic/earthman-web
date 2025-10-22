import { defineComponent, mergeProps, useSSRContext, ref, computed, withCtx, createTextVNode, createVNode, unref, useAttrs } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrRenderSuspense, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, e as useRoute, a as __nuxt_component_0$1, f as __nuxt_component_1$1, c as __nuxt_component_0$2, g as useRuntimeConfig, h as useRequestEvent, w as withLeadingSlash, i as hasProtocol, j as joinURL, p as parseURL, k as encodeParam, l as encodePath, m as useNuxtApp, u as useHead } from "../server.mjs";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import { u as useFetch } from "./fetch-BTcmUcmO.js";
/* empty css                         */
import "keen-slider";
import { defu } from "/home/kai/Projekti/webshop/node_modules/defu/dist/defu.mjs";
import { appendHeader } from "/home/kai/Projekti/webshop/node_modules/h3/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/kai/Projekti/webshop/node_modules/unctx/dist/index.mjs";
import "pinia";
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
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BackgroundVideo",
  __ssrInlineRender: true,
  props: {
    /** URL of your video file (mp4, webm, etc) */
    src: { type: String, required: true },
    /** Poster image while video loads/fallback */
    poster: { type: String, default: "" },
    /** Tailwind classes for the wrapper (size, positioning) */
    wrapperClasses: {
      type: String,
      default: "relative w-full h-screen overflow-hidden"
    },
    /** If true, applies a dark semi‑transparent overlay */
    overlay: { type: Boolean, default: true },
    /** Tailwind classes for the overlay */
    overlayClasses: {
      type: String,
      default: "bg-black/40"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: __props.wrapperClasses }, _attrs))} data-v-5cbfbe57><video class="absolute inset-0 w-full h-full object-cover"${ssrRenderAttr("src", __props.src)}${ssrRenderAttr("poster", __props.poster)} autoplay muted loop playsinline data-v-5cbfbe57></video>`);
      if (__props.overlay) {
        _push(`<div class="${ssrRenderClass([__props.overlayClasses, "absolute inset-0"])}" data-v-5cbfbe57></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center justify-center h-full text-background_color px-4" data-v-5cbfbe57>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BackgroundVideo.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5cbfbe57"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-6 gap-6" }, _attrs))} data-v-10d0267d><div class="hidden md:flex flex-col w-full" data-v-10d0267d><div class="w-full" data-v-10d0267d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "image bg-cover bg-center bg-transparent h-40 flex justify-start max-w-[100%] -ml-20"
      }, null, _parent));
      _push(`</div><div class="flex" data-v-10d0267d><div class="flex flex-row justify-start w-full mx-auto gap-x-4 py-4" data-v-10d0267d>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/shop",
              class: [linkColorClass.value, "text-sm font-light pr-4 inline-flex items-center gap-1"]
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
                class: [linkColorClass.value, "text-sm font-light pr-4 inline-flex items-center gap-1"]
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
      _push(`</div></div><div class="flex md:hidden items-center justify-between w-full px-2" data-v-10d0267d><div class="w-[60%]" data-v-10d0267d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "image bg-cover bg-center bg-transparent h-12 flex justify-start max-w-[100%]"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4" data-v-10d0267d>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<button data-v-10d0267d>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:menu",
        class: ["w-7 h-7", linkColorClass.value]
      }, null, _parent));
      _push(`</button></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-10d0267d"]]);
const _sfc_main$4 = {
  __name: "CollectionListing",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const { data: collections, pending, error } = useFetch(
      `${config.public.apiBase}/public/collections/`,
      "$nmoBZvspSO"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
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
          _push(`<div class="flex items-center justify-center h-screen" data-v-39237e8d> Loading collections… </div>`);
        },
        _: 1
      });
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CollectionListing.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-39237e8d"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Carusel",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const items = ref([]);
    function firstColor(p) {
      return p.colors && p.colors.length > 0 ? p.colors[0] : null;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-28" }, _attrs))} data-v-791f1305><div class="keen-slider my-auto" data-v-791f1305><!--[-->`);
      ssrRenderList(items.value, (p) => {
        _push(`<div class="keen-slider__slide px-2 my-auto" data-v-791f1305><div class="w-full" data-v-791f1305><div class="w-full overflow-hidden border-text_color/30 bg-background_color" data-v-791f1305><img${ssrRenderAttr("src", firstColor(p)?.avatar_image || p.link_image)}${ssrRenderAttr("alt", p.alt_text || p.name)} class="w-full object-cover" loading="lazy" decoding="async" data-v-791f1305></div><div class="mt-3 text-sm text-text_color truncate text-center" data-v-791f1305>${ssrInterpolate(p.name)}</div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Carusel.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-791f1305"]]);
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import("image-meta").then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function prerenderStaticImages(src = "", srcset = "") {
  if (!import.meta.prerender) {
    return;
  }
  const paths = [
    src,
    ...srcset.split(", ").map((s) => s.trim().split(" ")[0].trim())
  ].filter((s) => s && s.includes("/_ipx/"));
  if (!paths.length) {
    return;
  }
  appendHeader(useRequestEvent(), "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    if (import.meta.prerender) {
      prerenderStaticImages(image.url);
    }
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if (_options.modifiers?.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if (_options.modifiers?.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  const width = parseSize(opts.modifiers?.width);
  const height = parseSize(opts.modifiers?.height);
  const sizes = parseSizes(opts.sizes);
  const densities = opts.densities?.trim() ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: opts.modifiers?.width,
          _cHeight: opts.modifiers?.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant?.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = sizeVariants[i + 1]?.media || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$VmPoK_45YUVfmBeBhkwYFmF3X_45_45Nbv_450oIHsrPyFeFGpI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$VmPoK_45YUVfmBeBhkwYFmF3X_45_45Nbv_450oIHsrPyFeFGpI, defaults: {} }
};
const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: false },
  // modifiers
  format: { type: String, required: false },
  quality: { type: [Number, String], required: false },
  background: { type: String, required: false },
  fit: { type: String, required: false },
  modifiers: { type: Object, required: false },
  // options
  preset: { type: String, required: false },
  provider: { type: String, required: false },
  sizes: { type: [Object, String], required: false },
  densities: { type: String, required: false },
  preload: {
    type: [Boolean, Object],
    required: false
  },
  // <img> attributes
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  alt: { type: String, required: false },
  referrerpolicy: { type: String, required: false },
  usemap: { type: String, required: false },
  longdesc: { type: String, required: false },
  ismap: { type: Boolean, required: false },
  loading: {
    type: String,
    required: false,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    required: false,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    required: false,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], required: false }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], required: false },
  placeholderClass: { type: String, required: false },
  custom: { type: Boolean, required: false }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: imgProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const imgAttrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    if (import.meta.prerender) {
      prerenderStaticImages(src.value, sizes.value.srcset);
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      if (!_ctx.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: placeholder.value && !placeholderLoaded.value ? _ctx.placeholderClass : void 0
        }, {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          ...imgAttrs.value,
          ...unref(attrs)
        }, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
          imgAttrs: {
            ...imgAttrs.value,
            ...unref(attrs)
          },
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Newsletter",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[600px] sm:h-[500px] md:h-[400px] lg:h-[500px] overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "https://noushella.com/cdn/shop/files/1920x800_1.png?v=1726678484&width=1800",
        alt: "Newsletter background",
        class: "absolute inset-0 w-full h-full object-cover",
        format: "webp",
        sizes: "(max-width: 768px) 100vw, 50vw"
      }, null, _parent));
      _push(`<div class="relative z-10 max-w-3xl mx-auto h-full flex flex-col justify-center px-6 text-background_color"><h2 class="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4"> Sign up to keep up to date with <span class="font-bold">YOUR BRAND</span>! </h2><p class="text-sm sm:text-base mb-8 max-w-md"> Dive into your unique style, sans pretense and without conformity—be the first to experience our latest drops. </p><form class="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col sm:flex-row gap-4"><label for="email" class="sr-only">Email Address</label><input id="email"${ssrRenderAttr("value", email.value)} type="email" required placeholder="Email Address" class="flex-1 px-4 py-2 bg-background_color bg-opacity-20 placeholder-background_color placeholder-opacity-75 border border-background_color border-opacity-50 focus:outline-none focus:ring-2 focus:ring-background_color focus:ring-opacity-50 text-background_color"><div class=""><button class="secondary-btn sweep-secondary px-4 py-2"><span class="btn-label">subscribe</span><span class="sweep-overlay bg-secondary_button_color" aria-hidden="true"></span></button></div></form></div><div class="absolute inset-0 bg-text_color/30 bg-opacity-30"></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Newsletter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_BackgroundVideo = __nuxt_component_0;
  const _component_AppHeader = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_CollectionListing = __nuxt_component_3;
  const _component_Carusel = __nuxt_component_4;
  const _component_Newsletter = _sfc_main$1;
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="flex flex-col lg:flex-row w-full"><div class="flex flex-col w-full lg:w-1/2 h-full bg-background_color">`);
  _push(ssrRenderComponent(_component_BackgroundVideo, {
    src: "/video/test.mp4",
    poster: "/logo/earth-man-black.png",
    overlay: "",
    overlayClasses: "bg-gradient-to-b from-black/50 to-transparent"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="absolute inset-x-0 top-0 w-full"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_AppHeader, { dark: true }, null, _parent2, _scopeId));
        _push2(`</div><div class="absolute inset-x-0 bottom-6 md:bottom-0 left-0 flex items-center flex-col pb-8 text-background_color px-4 md:text-end md:self-end"${_scopeId}><h1 class="text-4xl md:text-6xl font-bold mb-4 self-center text-center md:self-end"${_scopeId}>Welcome to Our Shop</h1><p class="md:self-end mb-8 self-center text-center"${_scopeId}>Explore our latest collection with immersive video background.</p>`);
        _push2(ssrRenderComponent(_component_NuxtLink, {
          to: "/shop",
          class: "secondary-btn sweep-secondary mx-auto md:mx-0 md:self-end px-4 py-2 w-[60%] md:w-fit text-center"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span class="btn-label"${_scopeId2}>Shop Now</span><span class="sweep-overlay" aria-hidden="true"${_scopeId2}></span>`);
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
  _push(`</div><div class="flex flex-col w-full lg:w-1/2 min-h-screen">`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-DlN0Ou4d.js.map
