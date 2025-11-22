import { _ as __nuxt_component_0$1 } from "./AppNavigation-DbbUjllq.js";
import { defineComponent, computed, mergeProps, unref, useSSRContext, ref, withCtx, createVNode, watch, withAsyncContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-BeJz8Y8C.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { c as useRouter, d as useRoute, f as useRuntimeConfig, _ as _export_sfc } from "../server.mjs";
import { u as useAsyncData } from "./index-DSJLL3Jq.js";
import "./virtual_public-Dgbfu3-q.js";
import "#internal/nuxt/paths";
import "pinia";
import "ofetch";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/unctx/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/h3/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/home/kai/Projekti/webshop/node_modules/radix3/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/klona/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/@unhead/vue/dist/index.mjs";
import "@intlify/utils";
import "/home/kai/Projekti/webshop/node_modules/cookie-es/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/destr/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/ohash/dist/index.mjs";
import "@vue/devtools-api";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CollectionShopListingSkeleton",
  __ssrInlineRender: true,
  props: {
    animate: { type: Boolean, default: true },
    sections: { default: () => [
      { type: "standard", textLines: 3, showSeparator: true },
      { type: "reversed", textLines: 3, showSeparator: true },
      { type: "standard", textLines: 3, showSeparator: false },
      { type: "hero", showSeparator: false },
      { type: "reversed", textLines: 3, showSeparator: true },
      { type: "standard", textLines: 3, showSeparator: false },
      { type: "triple", count: 3, showSeparator: false }
    ] }
  },
  setup(__props) {
    const props = __props;
    const skeletonSections = computed(() => props.sections);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pt-8 mt-2 md:mt-6 px-4 md:px-8" }, _attrs))}><div class="collection-content"><!--[-->`);
      ssrRenderList(unref(skeletonSections), (section, idx) => {
        _push(`<div class="${ssrRenderClass([{ "animate-pulse": __props.animate }, "pb-8 md:pb-12"])}">`);
        if (section.type === "hero") {
          _push(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 min-h-screen"><!--[-->`);
          ssrRenderList(2, (i) => {
            _push(`<article class="relative min-h-[50vh] md:min-h-full overflow-hidden w-full" role="status" aria-busy="true" aria-label="Loading product"><div class="absolute inset-0 bg-gray-300"></div><div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-background_color/80 w-full"><div class="space-y-3"><div class="h-3 w-24 bg-gray-300 rounded"></div><div class="h-8 md:h-10 lg:h-12 w-3/4 bg-gray-300 rounded"></div><div class="flex items-center gap-2"><!--[-->`);
            ssrRenderList(4, (j) => {
              _push(`<div class="w-8 h-8 md:w-10 md:h-10 bg-gray-300 border-2 border-background_color"></div>`);
            });
            _push(`<!--]--></div><div class="h-10 w-32 bg-gray-300 rounded"></div></div></div></article>`);
          });
          _push(`<!--]--></div>`);
        } else if (section.type === "triple") {
          _push(`<div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"><!--[-->`);
          ssrRenderList(section.count, (i) => {
            _push(`<article class="group" role="status" aria-busy="true" aria-label="Loading product"><div class="relative w-full overflow-hidden"><div class="w-full aspect-[3/4] bg-gray-300 border border-gray-300"></div></div><div class="pt-3 md:pt-4 text-left space-y-2"><div class="h-3 w-20 bg-gray-300 rounded"></div><div class="h-4 w-3/4 bg-gray-300 rounded"></div><div class="flex items-center gap-2"><!--[-->`);
            ssrRenderList(3, (j) => {
              _push(`<div class="w-7 h-7 md:w-8 md:h-8 bg-gray-300 border border-gray-300"></div>`);
            });
            _push(`<!--]--></div></div></article>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div><div class="${ssrRenderClass([section.type === "reversed" ? "md:flex md:flex-row-reverse" : "", "grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 lg:gap-x-24 gap-y-8"])}"><article class="group col-span-2 md:col-span-1" role="status" aria-busy="true" aria-label="Loading product"><div class="relative w-full overflow-hidden"><div class="w-full aspect-[3/4] bg-gray-300 border border-gray-300"></div></div><div class="pt-3 md:pt-4 text-left space-y-2"><div class="h-3 w-20 bg-gray-300 rounded"></div><div class="h-4 w-3/4 bg-gray-300 rounded"></div><div class="flex items-center gap-2"><!--[-->`);
          ssrRenderList(3, (j) => {
            _push(`<div class="w-7 h-7 md:w-8 md:h-8 bg-gray-300 border border-gray-300"></div>`);
          });
          _push(`<!--]--></div></div></article><div class="col-span-2 md:col-span-2 flex flex-col justify-center"><div class="h-4 w-32 bg-gray-300 rounded mb-3 px-4"></div><div class="flex flex-col space-y-3"><!--[-->`);
          ssrRenderList(section.textLines, (k) => {
            _push(`<div class="${ssrRenderClass([{
              "w-full": k === 1,
              "w-11/12": k === 2,
              "w-10/12": k === 3,
              "w-9/12": k > 3
            }, "h-4 bg-gray-300 rounded px-4"])}"></div>`);
          });
          _push(`<!--]--></div></div></div></div>`);
        }
        if (section.showSeparator && idx < unref(skeletonSections).length - 1) {
          _push(`<div class="flex justify-center py-4 md:py-6"><div class="w-64 h-px bg-gray-300"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CollectionShopListingSkeleton.vue");
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
    useRouter();
    ref(null);
    ref({});
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
      const allProducts = [...props.products];
      const result = [];
      let i = 0;
      if (allProducts.length >= 1) {
        result.push({
          layout: "standard",
          items: [allProducts[0]],
          text: textElements.value[0] || "",
          heading: props.collection?.name || "Collection"
        });
        i = 1;
      }
      if (allProducts.length >= 2) {
        result.push({
          layout: "reversed",
          items: [allProducts[1]],
          text: textElements.value[1] || "",
          heading: props.collection?.name || "Collection"
        });
        i = 2;
      }
      if (allProducts.length >= 3) {
        result.push({
          layout: "standard",
          items: [allProducts[2]],
          text: textElements.value[2] || "",
          heading: props.collection?.name || "Collection"
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
          heading: props.collection?.name || "Collection"
        });
        i = 6;
      }
      if (allProducts.length >= 7) {
        result.push({
          layout: "standard",
          items: [allProducts[6]],
          text: textElements.value[4] || "",
          heading: props.collection?.name || "Collection"
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
    function formatPrice(price) {
      if (!price) return "N/A";
      const numPrice = typeof price === "string" ? parseFloat(price) : price;
      if (isNaN(numPrice)) return "N/A";
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(numPrice);
    }
    function splitText(text = "") {
      return text.split(new RegExp("(?<=[.!?])\\s+|\\n+")).filter(Boolean);
    }
    function shouldShowSeparator(idx) {
      return sections.value[idx].layout !== "hero";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pt-8 mt-2 md:mt-6 px-4 md:px-8" }, _attrs))}><div class="collection-content"><!--[-->`);
      ssrRenderList(unref(sections), (section, idx) => {
        _push(`<div>`);
        if (section.layout === "hero") {
          _push(`<div class="pb-8 md:pb-12"><div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"><!--[-->`);
          ssrRenderList(section.items, (item) => {
            _push(`<article class="group cursor-pointer relative h-[100vh] overflow-hidden w-full md:w-2/3 mx-auto"><img${ssrRenderAttr("src", item.currentImage || item.colors?.[0]?.avatar_image)}${ssrRenderAttr("alt", item.alt_text || item.name)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"><div class="absolute inset-0"></div><div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-text_color bg-background_color/85 w-full"><div class="hero-content"><p class="text-xs tracking-widest uppercase mb-1 opacity-80">${ssrInterpolate(item.category)}</p><h2 class="hero-title text-xl md:text-2xl font-bold mb-1 uppercase tracking-tight">${ssrInterpolate(item.name)}</h2><div class="flex items-center gap-3 mb-2">`);
            if (item.discount && item.discount_price) {
              _push(`<div class="flex items-center gap-2"><span class="text-sm md:text-base font-semibold">${ssrInterpolate(formatPrice(item.discount_price))}</span><span class="text-sm md:text-base line-through opacity-70">${ssrInterpolate(formatPrice(item.price))}</span></div>`);
            } else {
              _push(`<span class="text-sm md:text-base">${ssrInterpolate(formatPrice(item.price))}</span>`);
            }
            _push(`</div><div class="flex items-center gap-2 mb-2"><!--[-->`);
            ssrRenderList(item.colors?.slice(0, 4), (color, colorIdx) => {
              _push(`<div class="relative"><img${ssrRenderAttr("src", color.avatar_image)}${ssrRenderAttr("alt", color.color)} class="w-8 h-8 md:w-10 md:h-10 object-cover border border-text_color/30 cursor-pointer transition-transform hover:scale-110"></div>`);
            });
            _push(`<!--]--></div>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/product/${item.slug}/${item.colors?.[0]?.variant_slug}`,
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
          _push(`<div class="pb-8 md:pb-12"><div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10"><!--[-->`);
          ssrRenderList(section.items, (item) => {
            _push(`<article class="group cursor-pointer relative h-[100vh] overflow-hidden w-full"><img${ssrRenderAttr("src", item.currentImage || item.colors?.[0]?.avatar_image)}${ssrRenderAttr("alt", item.alt_text || item.name)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"><div class="absolute inset-0"></div><div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-text_color bg-background_color/85 w-full"><div class="hero-content"><p class="text-xs tracking-widest uppercase mb-1 opacity-80">${ssrInterpolate(item.category)}</p><h2 class="hero-title text-lg md:text-2xl font-bold mb-1 uppercase tracking-tight">${ssrInterpolate(item.name)}</h2><div class="flex items-center gap-3 mb-2">`);
            if (item.discount && item.discount_price) {
              _push(`<div class="flex items-center gap-2"><span class="text-sm md:text-base font-semibold">${ssrInterpolate(formatPrice(item.discount_price))}</span><span class="text-sm md:text-base line-through opacity-70">${ssrInterpolate(formatPrice(item.price))}</span></div>`);
            } else {
              _push(`<span class="text-sm md:text-base font-semibold">${ssrInterpolate(formatPrice(item.price))}</span>`);
            }
            _push(`</div><div class="flex items-center gap-2 mb-2"><!--[-->`);
            ssrRenderList(item.colors?.slice(0, 4), (color, colorIdx) => {
              _push(`<div class="relative"><img${ssrRenderAttr("src", color.avatar_image)}${ssrRenderAttr("alt", color.color)} class="w-8 h-8 object-cover border border-text_color/30 cursor-pointer transition-transform hover:scale-110"></div>`);
            });
            _push(`<!--]--></div>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/product/${item.slug}/${item.colors?.[0]?.variant_slug}`,
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
        } else {
          _push(`<div class="pb-8 md:pb-12"><div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-8 lg:gap-x-24 gap-y-8"><article class="${ssrRenderClass([section.layout === "reversed" ? "md:order-2" : "md:order-1", "group cursor-pointer relative h-[60vh] md:h-[800px] overflow-hidden w-full md:col-span-1"])}"><img${ssrRenderAttr("src", section.items[0].currentImage || section.items[0].colors?.[0]?.avatar_image)}${ssrRenderAttr("alt", section.items[0].alt_text || section.items[0].name)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy"><div class="absolute inset-0"></div><div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-text_color bg-background_color/85 w-full"><div class="hero-content"><p class="text-xs tracking-widest uppercase mb-1 opacity-80">${ssrInterpolate(section.items[0].category)}</p><h2 class="hero-title text-xl md:text-2xl font-bold mb-1 uppercase tracking-tight">${ssrInterpolate(section.items[0].name)}</h2><div class="flex items-center gap-3 mb-2">`);
          if (section.items[0].discount && section.items[0].discount_price) {
            _push(`<div class="flex items-center gap-2"><span class="text-sm md:text-base font-semibold">${ssrInterpolate(formatPrice(section.items[0].discount_price))}</span><span class="text-sm md:text-base line-through opacity-70">${ssrInterpolate(formatPrice(section.items[0].price))}</span></div>`);
          } else {
            _push(`<span class="text-sm md:text-base font-semibold">${ssrInterpolate(formatPrice(section.items[0].price))}</span>`);
          }
          _push(`</div><div class="flex items-center gap-2 mb-2"><!--[-->`);
          ssrRenderList(section.items[0].colors?.slice(0, 4), (color, colorIdx) => {
            _push(`<div class="relative"><img${ssrRenderAttr("src", color.avatar_image)}${ssrRenderAttr("alt", color.color)} class="w-8 h-8 md:w-10 md:h-10 object-cover border border-text_color/30 cursor-pointer transition-transform hover:scale-110"></div>`);
          });
          _push(`<!--]--></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/product/${section.items[0].slug}/${section.items[0].colors?.[0]?.variant_slug}`,
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
          _push(`</div></div></article><div class="${ssrRenderClass([section.layout === "reversed" ? "md:order-1" : "md:order-2", "flex flex-col justify-center section-trigger-line md:col-span-2"])}"><h4 class="section-heading uppercase tracking-wider text-xs md:text-sm mb-3 px-4">${ssrInterpolate(section.heading)}</h4><div class="flex flex-col"><!--[-->`);
          ssrRenderList(splitText(section.text), (line, i) => {
            _push(`<span class="section-text-line px-4 py-1 md:py-2 my-1 md:my-3 text-sm md:text-base leading-relaxed tracking-wide text-text_color">${ssrInterpolate(line)}</span>`);
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
      const base = "pr-8 py-1 text-sm text-text_color cursor-pointer hover:opacity-70 transition-opacity duration-200";
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
        if (Array.isArray(res?.results)) {
          allProducts.push(...res.results);
        }
        return allProducts;
      },
      { watch: [slug, gender] }
    )), __temp = await __temp, __restore(), __temp);
    const loading1 = cPending.value;
    const loading2 = pPending.value;
    console.log(cPending.value, pPending.value);
    const collection = computed(() => collectionData.value || {});
    const products = computed(() => productsData.value || []);
    function onCtaClick() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0$1;
      const _component_CollectionShopListingSkeleton = _sfc_main$2;
      const _component_TestCollectionListing = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "collection-page" }, _attrs))} data-v-76ec7697><div class="w-full z-50" data-v-76ec7697>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`</div><div class="relative z-10" data-v-76ec7697><div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-6" data-v-76ec7697><div class="flex justify-start w-full" data-v-76ec7697><div class="flex items-center gap-1" data-v-76ec7697><button type="button" class="${ssrRenderClass(typeBtnClass("all"))}" data-v-76ec7697> ALL </button><button type="button" class="${ssrRenderClass(typeBtnClass("woman"))}" data-v-76ec7697> WOMAN </button><button type="button" class="${ssrRenderClass(typeBtnClass("man"))}" data-v-76ec7697> MAN </button><button type="button" class="${ssrRenderClass(typeBtnClass("kids"))}" data-v-76ec7697> KIDS </button></div></div></div>`);
      if (unref(loading1) && unref(loading2)) {
        _push(ssrRenderComponent(_component_CollectionShopListingSkeleton, { animate: true }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_TestCollectionListing, {
          products: unref(products),
          collection: unref(collection),
          onCtaClick
        }, null, _parent));
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
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-76ec7697"]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_-CyoMMKcJ.js.map
