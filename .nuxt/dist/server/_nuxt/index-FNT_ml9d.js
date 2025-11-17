import { defineComponent, ref, mergeProps, useSSRContext, withAsyncContext, unref, withCtx, createVNode, toDisplayString, computed, useAttrs } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./AppNavigation-lCU69XCi.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BeJz8Y8C.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc, c as useRouter, q as useRequestEvent, s as withLeadingSlash, h as hasProtocol, j as joinURL, t as parseURL, v as encodeParam, x as encodePath, g as useNuxtApp, f as useRuntimeConfig, u as useHead } from "../server.mjs";
/* empty css                         */
import "keen-slider";
import { defu } from "/home/kai/Projekti/webshop/node_modules/defu/dist/defu.mjs";
import { appendHeader } from "/home/kai/Projekti/webshop/node_modules/h3/dist/index.mjs";
import "./index-DSJLL3Jq.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "./virtual_public-Dgbfu3-q.js";
import "#internal/nuxt/paths";
import "pinia";
import "ofetch";
import "/home/kai/Projekti/webshop/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "/home/kai/Projekti/webshop/node_modules/radix3/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/klona/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/@unhead/vue/dist/index.mjs";
import "@intlify/utils";
import "/home/kai/Projekti/webshop/node_modules/cookie-es/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/destr/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/ohash/dist/index.mjs";
import "@vue/devtools-api";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BackgroundVideo",
  __ssrInlineRender: true,
  props: {
    src: {},
    poster: { default: "" },
    wrapperClasses: { default: "relative w-full h-screen overflow-hidden" },
    overlay: { type: Boolean, default: true },
    overlayClasses: { default: "bg-black/40" }
  },
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: __props.wrapperClasses }, _attrs))}><video class="absolute inset-0 w-full h-full object-cover"${ssrRenderAttr("poster", __props.poster)} autoplay muted loop playsinline preload="auto"><source${ssrRenderAttr("src", __props.src)} type="video/mp4"> Your browser does not support the video tag. </video>`);
      if (__props.overlay) {
        _push(`<div class="${ssrRenderClass([__props.overlayClasses, "absolute inset-0"])}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center justify-center h-full text-background_color px-4">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BackgroundVideo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CollectionListing",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let ScrollSmoother = null;
    try {
      ScrollSmoother = ([__temp, __restore] = withAsyncContext(() => import("gsap/ScrollSmoother.js")), __temp = await __temp, __restore(), __temp).ScrollSmoother;
    } catch {
    }
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    if (ScrollSmoother) gsap.registerPlugin(ScrollSmoother);
    const collections = ref([]);
    const loading = ref(true);
    function getColorVariant(index2) {
      return index2 % 2 + 1;
    }
    function getButtonVariant(index2) {
      return index2 % 2 === 0 ? "btn--primary" : "btn--secondary";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "smooth-wrapper" }, _attrs))} data-v-60448d30>`);
      if (unref(loading)) {
        _push(`<div class="fixed inset-0 flex items-center justify-center bg-background_color" data-v-60448d30><p class="text-text_color text-xl" data-v-60448d30>Loading collections...</p></div>`);
      } else {
        _push(`<div id="smooth-content" class="stage" data-v-60448d30><!--[-->`);
        ssrRenderList(unref(collections), (collection, i) => {
          _push(`<section class="slide" data-v-60448d30><div class="col col--1" data-v-60448d30><div class="${ssrRenderClass([`col__content--${getColorVariant(i)}`, "col__content"])}" data-v-60448d30><h2 class="${ssrRenderClass(`col__content-title--${getColorVariant(i)}`)}" data-v-60448d30><span class="line__inner" data-v-60448d30>${ssrInterpolate(collection.name || "Collection")}</span></h2><div class="col__content-wrap" data-v-60448d30>`);
          if (collection.slug) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/collections/${encodeURIComponent(collection.slug)}`,
              class: ["btn", getButtonVariant(i)]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="btn__text" data-v-60448d30${_scopeId}>${ssrInterpolate(_ctx.$t("story_button"))}</span><span class="btn__fill" data-v-60448d30${_scopeId}></span>`);
                } else {
                  return [
                    createVNode("span", { class: "btn__text" }, toDisplayString(_ctx.$t("story_button")), 1),
                    createVNode("span", { class: "btn__fill" })
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div><div class="col col--2" data-v-60448d30><div class="col__image-wrap" data-v-60448d30><img class="img"${ssrRenderAttr("src", collection.element_one_image)}${ssrRenderAttr("alt", collection.name || `Collection ${i + 1}`)} loading="lazy" decoding="async" data-v-60448d30></div></div></section>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CollectionListing.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-60448d30"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Carusel",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    ref(null);
    const items = ref([]);
    function firstColor(product) {
      return product.colors && product.colors.length > 0 ? product.colors[0] : null;
    }
    const computedSlides = computed(() => {
      const startCTA = {
        type: "cta",
        key: "cta-start",
        cta: {
          title: "See all of our stories",
          subtitle: "Fresh drops you love",
          button: "See Stories"
        }
      };
      const endCTA = {
        type: "cta",
        key: "cta-end",
        cta: {
          title: "See Everything",
          subtitle: "Browse through all stories",
          button: "View All"
        }
      };
      const productSlides = items.value.map((item) => ({
        type: "product",
        key: `prod-${item.id}`,
        item
      }));
      return [startCTA, ...productSlides, endCTA];
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-28" }, _attrs))} data-v-f4ee3af4><div class="keen-slider my-auto" data-v-f4ee3af4><!--[-->`);
      ssrRenderList(unref(computedSlides), (s, i) => {
        _push(`<div class="${ssrRenderClass([s.type === "cta" ? "slide-cta" : "slide-product", "keen-slider__slide px-2 my-auto"])}" data-v-f4ee3af4>`);
        if (s.type === "cta") {
          _push(`<div class="w-full h-full" data-v-f4ee3af4><button type="button" class="group w-full h-full flex items-center justify-center bg-background_color p-6 text-center" data-v-f4ee3af4><div class="space-y-4" data-v-f4ee3af4><h3 class="text-xl md:text-2xl font-bold" data-v-f4ee3af4>${ssrInterpolate(s.cta.title)}</h3><p class="text-sm opacity-80" data-v-f4ee3af4>${ssrInterpolate(s.cta.subtitle)}</p><div class="btn btn--primary mx-auto" data-v-f4ee3af4><span class="btn__text" data-v-f4ee3af4>${ssrInterpolate(s.cta.button)}</span><span class="btn__fill" data-v-f4ee3af4></span></div></div></button></div>`);
        } else {
          _push(`<div class="w-full" data-v-f4ee3af4>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/product/${s.item.slug}/${encodeURIComponent(s.item.colors[0].variant_slug)}`,
            class: "w-full overflow-hidden bg-background_color"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", firstColor(s.item)?.avatar_image || s.item.link_image)}${ssrRenderAttr("alt", s.item.alt_text || s.item.name)} class="w-full object-cover border border-text_color/30" loading="lazy" decoding="async" data-v-f4ee3af4${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: firstColor(s.item)?.avatar_image || s.item.link_image,
                    alt: s.item.alt_text || s.item.name,
                    class: "w-full object-cover border border-text_color/30",
                    loading: "lazy",
                    decoding: "async"
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="mt-3 text-text_color truncate text-center" data-v-f4ee3af4><p class="text-xs font-light mb-1" data-v-f4ee3af4>${ssrInterpolate(s.item.category)}</p><p class="text-sm" data-v-f4ee3af4>${ssrInterpolate(s.item.name)}</p></div></div>`);
        }
        _push(`</div>`);
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
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f4ee3af4"]]);
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
  "domains": [
    "static.zara.net",
    "earthmanweb.pythonanywhere.com"
  ],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ],
  "quality": 80
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$VmPoK_45YUVfmBeBhkwYFmF3X_45_45Nbv_450oIHsrPyFeFGpI, defaults: { "maxAge": 31536e3 } }
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      _push(`<div class="absolute inset-0 bg-text_color/30"></div><div class="relative z-10 max-w-3xl mx-auto h-full flex flex-col justify-center px-6 text-background_color"><h2 class="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4"> Sign up to keep up to date with <span class="font-bold">YOUR BRAND</span>! </h2><p class="text-sm sm:text-base mb-8 max-w-md"> Dive into your unique style, sans pretense and without conformity—be the first to experience our latest drops. </p><form class="w-full flex flex-col sm:flex-row gap-4"><label for="email" class="sr-only">Email Address</label><input id="email"${ssrRenderAttr("value", unref(email))} type="email" required placeholder="Email Address" class="flex-1 px-4 py-2 bg-text_color bg-opacity-85 placeholder-background_color border border-background_color border-opacity-50 focus:outline-none focus:ring-2 focus:ring-background_color focus:ring-opacity-50 text-background_color"><button type="submit" class="btn btn--secondary w-full sm:w-auto"><span class="btn__text">Subscribe</span><span class="btn__fill"></span></button></form></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Newsletter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackgroundVideo = _sfc_main$5;
      const _component_AppNavigation = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CollectionListing = __nuxt_component_3;
      const _component_Carusel = __nuxt_component_4;
      const _component_Newsletter = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-09735cae>`);
      _push(ssrRenderComponent(_component_BackgroundVideo, {
        src: "/video/test.mp4",
        poster: "/logo/earth-man-black.png",
        overlay: "",
        overlayClasses: "bg-gradient-to-b from-text_color/50 to-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-x-0 top-0 w-full z-50" data-v-09735cae${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AppNavigation, { dark: true }, null, _parent2, _scopeId));
            _push2(`</div><div class="min-h-screen flex flex-col justify-end items-center md:items-end px-4 md:px-8 pb-12 md:pb-16 z-40 w-full" data-v-09735cae${_scopeId}><div class="text-background_color text-center md:text-right max-w-2xl pb-6" data-v-09735cae${_scopeId}><h1 class="text-4xl md:text-6xl font-bold mb-4" data-v-09735cae${_scopeId}>${ssrInterpolate(_ctx.$t("welcome_title"))}</h1><p class="mb-8 text-base md:text-lg" data-v-09735cae${_scopeId}>${ssrInterpolate(_ctx.$t("welcome_subtitle"))}</p>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/shop",
              class: "btn btn--secondary inline-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="btn__text" data-v-09735cae${_scopeId2}>${ssrInterpolate(_ctx.$t("shop_button"))}</span><span class="btn__fill" data-v-09735cae${_scopeId2}></span>`);
                } else {
                  return [
                    createVNode("span", { class: "btn__text" }, toDisplayString(_ctx.$t("shop_button")), 1),
                    createVNode("span", { class: "btn__fill" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-x-0 top-0 w-full z-50" }, [
                createVNode(_component_AppNavigation, { dark: true })
              ]),
              createVNode("div", { class: "min-h-screen flex flex-col justify-end items-center md:items-end px-4 md:px-8 pb-12 md:pb-16 z-40 w-full" }, [
                createVNode("div", { class: "text-background_color text-center md:text-right max-w-2xl pb-6" }, [
                  createVNode("h1", { class: "text-4xl md:text-6xl font-bold mb-4" }, toDisplayString(_ctx.$t("welcome_title")), 1),
                  createVNode("p", { class: "mb-8 text-base md:text-lg" }, toDisplayString(_ctx.$t("welcome_subtitle")), 1),
                  createVNode(_component_NuxtLink, {
                    to: "/shop",
                    class: "btn btn--secondary inline-flex"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "btn__text" }, toDisplayString(_ctx.$t("shop_button")), 1),
                      createVNode("span", { class: "btn__fill" })
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CollectionListing, null, null, _parent));
      _push(ssrRenderComponent(_component_Carusel, null, null, _parent));
      _push(ssrRenderComponent(_component_Newsletter, null, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-09735cae"]]);
export {
  index as default
};
//# sourceMappingURL=index-FNT_ml9d.js.map
