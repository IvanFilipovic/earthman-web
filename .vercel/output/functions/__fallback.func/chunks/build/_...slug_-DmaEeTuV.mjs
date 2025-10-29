import { _ as __nuxt_component_0 } from './AppNavigation-HBYr5KA2.mjs';
import { defineComponent, computed, ref, watch, withAsyncContext, unref, mergeProps, withCtx, createVNode, nextTick, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useRoute, b as useRouter, o as useAsyncData, d as useRuntimeConfig, S as ScrollTrigger, f as __nuxt_component_0$3, e as __nuxt_component_0$1 } from './server.mjs';
import { z } from '../_/vue.es.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MobileColorSlider",
  __ssrInlineRender: true,
  props: {
    colors: {}
  },
  emits: ["go"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const current = ref(0);
    const [sliderRef, slider] = z({
      loop: true,
      initial: 0,
      slideChanged(s) {
        current.value = s.track.details.rel;
      }
    });
    watch(
      () => {
        var _a;
        return (_a = props.colors) == null ? void 0 : _a.length;
      },
      async () => {
        await nextTick();
        if (slider.value) {
          slider.value.update();
          slider.value.moveToIdx(0);
          current.value = 0;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.colors && __props.colors.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "block md:hidden" }, _attrs))}><div class="keen-slider"><!--[-->`);
        ssrRenderList(__props.colors, (color, i) => {
          _push(`<div class="keen-slider__slide"><img${ssrRenderAttr("src", color.avatar_image)}${ssrRenderAttr("alt", color.color)} class="w-full h-auto object-cover border border-text_color/30" loading="lazy"></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileColorSlider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "testCollectionListing",
  __ssrInlineRender: true,
  props: {
    products: {},
    collection: {}
  },
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    const props = __props;
    const router = useRouter();
    const hoveredSlug = ref(null);
    const hoveredColorIndex = ref({});
    const textElements = computed(() => {
      const c = props.collection || {};
      return [
        c.element_one,
        c.element_two,
        c.element_three,
        c.element_four,
        c.element_five
      ].filter(Boolean);
    });
    const sections = computed(() => {
      var _a, _b, _c, _d, _e;
      const allProducts = [...props.products];
      const result = [];
      let i = 0;
      if (allProducts.length >= 1) {
        result.push({
          layout: "standard",
          items: [allProducts[0]],
          text: textElements.value[0] || "",
          heading: ((_a = props.collection) == null ? void 0 : _a.name) || "Collection"
        });
        i = 1;
      }
      if (allProducts.length >= 2) {
        result.push({
          layout: "reversed",
          items: [allProducts[1]],
          text: textElements.value[1] || "",
          heading: ((_b = props.collection) == null ? void 0 : _b.name) || "Collection"
        });
        i = 2;
      }
      if (allProducts.length >= 3) {
        result.push({
          layout: "standard",
          items: [allProducts[2]],
          text: textElements.value[2] || "",
          heading: ((_c = props.collection) == null ? void 0 : _c.name) || "Collection"
        });
        i = 3;
      }
      if (allProducts.length >= 5) {
        result.push({
          layout: "hero",
          items: [allProducts[3], allProducts[4]],
          text: "",
          heading: ""
        });
        i = 5;
      }
      if (allProducts.length >= 6) {
        result.push({
          layout: "reversed",
          items: [allProducts[5]],
          text: textElements.value[3] || "",
          heading: ((_d = props.collection) == null ? void 0 : _d.name) || "Collection"
        });
        i = 6;
      }
      if (allProducts.length >= 7) {
        result.push({
          layout: "standard",
          items: [allProducts[6]],
          text: textElements.value[4] || "",
          heading: ((_e = props.collection) == null ? void 0 : _e.name) || "Collection"
        });
        i = 7;
      }
      let sectionsAfterText = 0;
      while (i < allProducts.length) {
        const remaining = allProducts.length - i;
        if (sectionsAfterText > 0 && sectionsAfterText % 3 === 0 && remaining >= 2) {
          result.push({
            layout: "hero",
            items: [allProducts[i], allProducts[i + 1]],
            text: "",
            heading: ""
          });
          i += 2;
          sectionsAfterText++;
        } else {
          const take = Math.min(3, remaining);
          result.push({
            layout: "triple",
            items: allProducts.slice(i, i + take),
            text: "",
            heading: ""
          });
          i += take;
          sectionsAfterText++;
        }
      }
      return result;
    });
    function isColorHovered(item, colorIdx) {
      return hoveredColorIndex.value[item.slug] === colorIdx;
    }
    function goToProduct(slug, variantSlug) {
      if (!slug || !variantSlug) return;
      router.push(`/product/${slug}/${variantSlug}`);
    }
    function splitText(text = "") {
      return text.split(new RegExp("(?<=[.!?])\\s+|\\n+")).filter(Boolean);
    }
    function shouldShowSeparator(idx) {
      return sections.value[idx].layout !== "hero";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_MobileColorSlider = _sfc_main$2;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pt-8 mt-2 md:mt-6 px-4 md:px-8" }, _attrs))}><div class="collection-content"><!--[-->`);
      ssrRenderList(unref(sections), (section, idx) => {
        _push(`<div>`);
        if (section.layout === "hero") {
          _push(`<div class="pb-8 md:pb-12"><div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 min-h-screen"><!--[-->`);
          ssrRenderList(section.items, (item) => {
            var _a, _b, _c, _d, _e;
            _push(`<article class="group cursor-pointer relative min-h-[50vh] md:min-h-full overflow-hidden w-full"><img${ssrRenderAttr("src", item.currentImage || ((_b = (_a = item.colors) == null ? void 0 : _a[0]) == null ? void 0 : _b.avatar_image) || item.link_image)}${ssrRenderAttr("alt", item.alt_text || item.name)} class="absolute inset-0 max-w-full h-full object-contain mx-auto transition-transform duration-700 group-hover:scale-105" loading="lazy"><div class="absolute inset-0"></div><div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-background_color bg-text_color w-[50%]"><div class="hero-content"><p class="text-xs tracking-widest uppercase mb-1 opacity-80">${ssrInterpolate(item.category)}</p><h2 class="hero-title text-2xl md:text-3xl lg:text-4xl font-bold mb-3 uppercase tracking-tight">${ssrInterpolate(item.name)}</h2><div class="flex items-center gap-2 mb-4"><!--[-->`);
            ssrRenderList((_c = item.colors) == null ? void 0 : _c.slice(0, 4), (color, colorIdx) => {
              _push(`<div class="relative"><img${ssrRenderAttr("src", color.avatar_image)}${ssrRenderAttr("alt", color.color)} class="w-8 h-8 md:w-10 md:h-10 object-cover border-2 border-background_color cursor-pointer transition-transform hover:scale-110"></div>`);
            });
            _push(`<!--]--></div>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/product/${item.slug}/${(_e = (_d = item.colors) == null ? void 0 : _d[0]) == null ? void 0 : _e.variant_slug}`,
              class: "btn btn--secondary inline-flex text-sm"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="btn__text"${_scopeId}>Discover</span><span class="btn__fill"${_scopeId}></span>`);
                } else {
                  return [
                    createVNode("span", { class: "btn__text" }, "Discover"),
                    createVNode("span", { class: "btn__fill" })
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div></div></article>`);
          });
          _push(`<!--]--></div></div>`);
        } else if (section.layout === "triple") {
          _push(`<div class="pb-8 md:pb-12"><div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"><!--[-->`);
          ssrRenderList(section.items, (item) => {
            var _a, _b;
            _push(`<article class="group cursor-pointer"><div class="relative overflow-hidden"><img${ssrRenderAttr("src", item.currentImage || ((_b = (_a = item.colors) == null ? void 0 : _a[0]) == null ? void 0 : _b.avatar_image) || item.link_image)}${ssrRenderAttr("alt", item.alt_text || item.name)} class="hidden md:block w-full h-full object-cover border border-text_color/30 transition-transform duration-500 group-hover:scale-105" loading="lazy">`);
            if (item.colors && item.colors.length > 0) {
              _push(ssrRenderComponent(_component_MobileColorSlider, {
                colors: item.colors,
                onGo: (variantSlug) => goToProduct(item.slug, variantSlug)
              }, null, _parent));
            } else {
              _push(`<div class="block md:hidden"><img${ssrRenderAttr("src", item.link_image)}${ssrRenderAttr("alt", item.alt_text || item.name)} class="w-full h-auto object-cover border border-text_color/30" loading="lazy"></div>`);
            }
            _push(`<button type="button" class="${ssrRenderClass([{ "opacity-100": unref(hoveredSlug) === item.slug, "opacity-0": unref(hoveredSlug) !== item.slug }, "absolute top-4 left-4 bg-text_color text-background_color tracking-wider text-xs font-light px-2 transition-opacity duration-200"])}" style="${ssrRenderStyle(unref(hoveredSlug) === item.slug ? null : { display: "none" })}"> VIEW </button></div><div class="pt-3 md:pt-4 text-left"><p class="text-xs tracking-wider font-extralight">${ssrInterpolate(item.category)}</p><h3 class="uppercase tracking-wider text-sm font-normal truncate py-1">${ssrInterpolate(item.name)}</h3>`);
            if (item.colors && item.colors.length > 0) {
              _push(`<div class="mt-1 flex items-center gap-2"><!--[-->`);
              ssrRenderList(item.colors, (color, colorIdx) => {
                _push(`<div class="relative"><img${ssrRenderAttr("src", color.avatar_image)}${ssrRenderAttr("alt", color.color)} class="w-7 h-7 md:h-8 md:w-8 object-cover border border-project_text_color/40 cursor-pointer" loading="lazy"><div class="${ssrRenderClass([isColorHovered(item, colorIdx) ? "opacity-100" : "opacity-0", "absolute inset-0 pointer-events-none transition-opacity duration-200 w-8 h-8 bg-text_color"])}">`);
                _push(ssrRenderComponent(_component_Icon, {
                  name: "lucide:square-arrow-out-up-right",
                  class: "absolute inset-0 w-4 h-4 z-10 text-background_color m-auto"
                }, null, _parent));
                _push(`</div></div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></article>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<div class="pb-8 md:pb-12"><div class="${ssrRenderClass([section.layout === "reversed" ? "md:flex md:flex-row-reverse" : "", "grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 lg:gap-x-24 gap-y-8"])}"><!--[-->`);
          ssrRenderList(section.items, (item) => {
            var _a, _b;
            _push(`<article class="group cursor-pointer col-span-2 md:col-span-1"><div class="relative overflow-hidden"><img${ssrRenderAttr("src", item.currentImage || ((_b = (_a = item.colors) == null ? void 0 : _a[0]) == null ? void 0 : _b.avatar_image) || item.link_image)}${ssrRenderAttr("alt", item.alt_text || item.name)} class="hidden md:block w-full h-full object-cover border border-text_color/30 transition-transform duration-500 group-hover:scale-105" loading="lazy">`);
            if (item.colors && item.colors.length > 0) {
              _push(ssrRenderComponent(_component_MobileColorSlider, {
                colors: item.colors,
                onGo: (variantSlug) => goToProduct(item.slug, variantSlug)
              }, null, _parent));
            } else {
              _push(`<div class="block md:hidden"><img${ssrRenderAttr("src", item.link_image)}${ssrRenderAttr("alt", item.alt_text || item.name)} class="w-full h-auto object-cover border border-text_color/30" loading="lazy"></div>`);
            }
            _push(`<button type="button" class="${ssrRenderClass([{ "opacity-100": unref(hoveredSlug) === item.slug, "opacity-0": unref(hoveredSlug) !== item.slug }, "absolute top-4 left-4 bg-text_color text-background_color tracking-wider text-xs font-light px-2 transition-opacity duration-200"])}" style="${ssrRenderStyle(unref(hoveredSlug) === item.slug ? null : { display: "none" })}"> VIEW </button></div><div class="pt-3 md:pt-4 text-left"><p class="text-xs tracking-wider font-extralight">${ssrInterpolate(item.category)}</p><h3 class="uppercase tracking-wider text-sm font-normal truncate py-1">${ssrInterpolate(item.name)}</h3>`);
            if (item.colors && item.colors.length > 0) {
              _push(`<div class="mt-1 flex items-center gap-2"><!--[-->`);
              ssrRenderList(item.colors, (color, colorIdx) => {
                _push(`<div class="relative"><img${ssrRenderAttr("src", color.avatar_image)}${ssrRenderAttr("alt", color.color)} class="w-7 h-7 md:h-8 md:w-8 object-cover border border-project_text_color/40 cursor-pointer" loading="lazy"><div class="${ssrRenderClass([isColorHovered(item, colorIdx) ? "opacity-100" : "opacity-0", "absolute inset-0 pointer-events-none transition-opacity duration-200 w-8 h-8 bg-text_color"])}">`);
                _push(ssrRenderComponent(_component_Icon, {
                  name: "lucide:square-arrow-out-up-right",
                  class: "absolute inset-0 w-4 h-4 z-10 text-background_color m-auto"
                }, null, _parent));
                _push(`</div></div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></article>`);
          });
          _push(`<!--]--><div class="col-span-2 md:col-span-2 flex flex-col justify-center"><h4 class="section-heading uppercase tracking-wider text-xs md:text-sm mb-3 px-4">${ssrInterpolate(section.heading)}</h4><div class="flex flex-col"><!--[-->`);
          ssrRenderList(splitText(section.text), (line, i) => {
            _push(`<span class="section-text-line -mx-4 px-4 md:-mx-0 py-1 md:py-2 my-1 md:my-3 text-sm md:text-base leading-relaxed tracking-wide bg-text_color text-background_color">${ssrInterpolate(line)}</span>`);
          });
          _push(`<!--]--></div></div></div></div>`);
        }
        if (idx < unref(sections).length - 1 && shouldShowSeparator(idx)) {
          _push(`<div class="flex justify-center py-4 md:py-6"><div class="w-64 h-px bg-text_color/30"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/testCollectionListing.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PAGE_SIZE = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const route = useRoute();
    useRouter();
    const VALID_TYPES = ["all", "woman", "man", "kids"];
    const slug = computed(() => String(route.params.slug));
    const type = ref(
      route.query.type && VALID_TYPES.includes(String(route.query.type)) ? String(route.query.type) : "all"
    );
    const gender = computed(() => {
      if (type.value === "man") return "male";
      if (type.value === "woman") return "female";
      if (type.value === "kids") return "kids";
      return "all";
    });
    watch(
      () => route.query.type,
      (t) => {
        const normalized = t && VALID_TYPES.includes(String(t)) ? String(t) : "all";
        if (type.value !== normalized) {
          type.value = normalized;
        }
      },
      { immediate: true }
    );
    function typeBtnClass(btnType) {
      const base = "pr-8 py-1 text-sm text-text_color";
      const active = type.value === btnType ? "font-bold" : "bg-background_color";
      return `${base} ${active}`;
    }
    const { data: collectionData, pending: cPending } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `collection:${slug.value}`,
      async () => {
        return await $fetch(`${config.public.apiBase}/public/collections/${slug.value}/`);
      }
    )), __temp = await __temp, __restore(), __temp);
    const { data: productsData, pending: pPending } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `products-all:${slug.value}:${gender.value}`,
      async () => {
        const baseUrl = `${config.public.apiBase}/public/products-all/`;
        const params = new URLSearchParams({
          page: "1",
          page_size: String(PAGE_SIZE),
          collection: slug.value
        });
        if (gender.value !== "all") {
          params.append("gender", gender.value);
        }
        let url = `${baseUrl}?${params.toString()}`;
        const allProducts = [];
        const res = await $fetch(url);
        if (Array.isArray(res == null ? void 0 : res.results)) {
          allProducts.push(...res.results);
        }
        return allProducts;
      },
      { watch: [slug, gender] }
    )), __temp = await __temp, __restore(), __temp);
    const pending = computed(() => cPending.value || pPending.value);
    const collection = computed(() => collectionData.value || {});
    const products = computed(() => productsData.value || []);
    function onCtaClick() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)}><div>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-6"><div class="flex justify-start w-full"><div class="flex items-center"><button type="button" class="${ssrRenderClass(typeBtnClass("all"))}"> ALL </button><button type="button" class="${ssrRenderClass(typeBtnClass("woman"))}"> WOMAN </button><button type="button" class="${ssrRenderClass(typeBtnClass("man"))}"> MAN </button><button type="button" class="${ssrRenderClass(typeBtnClass("kids"))}"> KIDS </button></div></div></div>`);
      if (!unref(pending) && unref(products).length) {
        _push(ssrRenderComponent(_sfc_main$1, {
          products: unref(products),
          collection: unref(collection),
          onCtaClick
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-DmaEeTuV.mjs.map
