import { _ as __nuxt_component_0$1 } from "./AppNavigation-DbbUjllq.js";
import { _ as __nuxt_component_0 } from "./index-DSJLL3Jq.js";
import { defineComponent, mergeProps, useSSRContext, ref, computed, watch, nextTick, unref, withAsyncContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import KeenSlider from "keen-slider";
/* empty css                         */
import { c as useRouter, d as useRoute, _ as _export_sfc, e as __nuxt_component_4, f as useRuntimeConfig } from "../server.mjs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import "./nuxt-link-BeJz8Y8C.js";
import "./virtual_public-Dgbfu3-q.js";
import "#internal/nuxt/paths";
import "pinia";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ShopListingskeleton",
  __ssrInlineRender: true,
  props: {
    count: { default: 12 },
    animate: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 md:grid-cols-4 overflow-y-auto pt-8 gap-x-4 md:gap-x-8 lg:gap-x-24" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.count, (i) => {
        _push(`<article class="${ssrRenderClass([{ "animate-pulse": __props.animate }, "col-span-1 pb-10"])}" aria-busy="true" aria-label="Loading product"><div class="relative w-full overflow-hidden"><div class="w-full aspect-[3/4] bg-project_gray border border-project_gray" role="img" aria-label="Loading product image"></div></div><div class="py-3 text-left space-y-2"><div class="h-3 w-20 bg-project_gray rounded" role="status" aria-label="Loading category"></div><div class="h-4 w-3/4 bg-project_gray rounded" role="status" aria-label="Loading product name"></div><div class="mt-1 flex items-center gap-2" aria-label="Loading color options"><!--[-->`);
        ssrRenderList(3, (j) => {
          _push(`<div class="w-7 h-7 md:w-8 md:h-8 bg-project_gray border border-project_gray" role="status"></div>`);
        });
        _push(`<!--]--></div><div class="h-3 w-16 bg-project_gray rounded" role="status" aria-label="Loading price"></div></div></article>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShopListingskeleton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ShopListing",
  __ssrInlineRender: true,
  props: {
    products: {}
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const route = useRoute();
    const hoveredSlug = ref(null);
    const hoveredColorIndex = ref({});
    const sliderElements = ref({});
    const sliderInstances = ref({});
    const sliderCurrents = ref({});
    const filteredColors = computed(() => {
      const colorParam = route.query.color;
      if (!colorParam) {
        return [];
      }
      if (Array.isArray(colorParam)) {
        return colorParam.map((c) => normalizeColorName(String(c)));
      }
      return [normalizeColorName(String(colorParam))];
    });
    function normalizeColorName(color) {
      return color.toLowerCase().trim().replace(/\s+/g, " ");
    }
    function matchesFilteredColor(productColor) {
      if (filteredColors.value.length === 0) {
        return false;
      }
      const normalizedProductColor = normalizeColorName(productColor.color);
      return filteredColors.value.some((filterColor) => {
        if (normalizedProductColor === filterColor) {
          return true;
        }
        if (normalizedProductColor.includes(filterColor) || filterColor.includes(normalizedProductColor)) {
          return true;
        }
        return false;
      });
    }
    function getMainImage(item) {
      if (item.currentImage) {
        return item.currentImage;
      }
      if (!item.colors || item.colors.length === 0) {
        return "";
      }
      if (filteredColors.value.length > 0) {
        const matchedColor = item.colors.find((color) => matchesFilteredColor(color));
        if (matchedColor) {
          return matchedColor.avatar_image;
        }
      }
      return item.colors[0].avatar_image;
    }
    function formatPrice(price) {
      return parseFloat(price).toFixed(2);
    }
    watch(() => props.products, () => {
      nextTick(() => {
        destroyAllSliders();
        initializeSliders();
      });
    }, { deep: true });
    function destroyAllSliders() {
      Object.values(sliderInstances.value).forEach((slider) => {
        if (slider && typeof slider.destroy === "function") {
          slider.destroy();
        }
      });
      sliderInstances.value = {};
    }
    function initializeSliders() {
      props.products.forEach((product) => {
        if (!product.colors || product.colors.length === 0) return;
        const element = sliderElements.value[product.slug];
        if (!element) return;
        if (sliderInstances.value[product.slug]) {
          sliderInstances.value[product.slug].destroy();
        }
        const slider = new KeenSlider(element, {
          loop: true,
          initial: 0,
          slideChanged(s) {
            sliderCurrents.value[product.slug] = s.track.details.rel;
          }
        });
        sliderInstances.value[product.slug] = slider;
        sliderCurrents.value[product.slug] = 0;
      });
    }
    function isColorHovered(item, colorIdx) {
      return hoveredColorIndex.value[item.slug] === colorIdx;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 md:grid-cols-4 overflow-y-auto pt-8 gap-x-4 md:gap-x-8 lg:gap-x-24" }, _attrs))} data-v-31f81948><!--[-->`);
      ssrRenderList(__props.products, (item) => {
        _push(`<div class="col-span-1 cursor-pointer pb-10" data-v-31f81948><div class="bg-background_color overflow-hidden object-fill" data-v-31f81948><div class="w-full" data-v-31f81948><div class="relative bg-background_color" data-v-31f81948><img${ssrRenderAttr("src", getMainImage(item))}${ssrRenderAttr("alt", item.alt_text || item.name)} class="hidden md:block max-w-[100%] h-auto object-cover transition-opacity duration-200 border border-text_color/30" loading="lazy" data-v-31f81948>`);
        if (item.colors && item.colors.length > 0) {
          _push(`<div class="block md:hidden" data-v-31f81948><div class="keen-slider" data-v-31f81948><!--[-->`);
          ssrRenderList(item.colors, (color, i) => {
            _push(`<div class="keen-slider__slide" data-v-31f81948><img${ssrRenderAttr("src", color.avatar_image)}${ssrRenderAttr("alt", color.color)} class="w-full h-auto object-cover border border-text_color/30" loading="lazy" data-v-31f81948></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="button" class="${ssrRenderClass([{ "opacity-100": unref(hoveredSlug) === item.slug }, "absolute top-4 left-4 bg-text_color text-background_color tracking-wider text-xs font-light w-auto px-2 mx-auto opacity-0 transition-opacity duration-200"])}" style="${ssrRenderStyle(unref(hoveredSlug) === item.slug ? null : { display: "none" })}" data-v-31f81948> VIEW </button></div><div class="py-3 text-left" data-v-31f81948><p class="text-xs tracking-wider font-extralight" data-v-31f81948>${ssrInterpolate(item.category)}</p><h3 class="uppercase tracking-wider text-[13px] md:text-sm font-normal truncate py-1" data-v-31f81948>${ssrInterpolate(item.name)}</h3>`);
        if (item.colors && item.colors.length > 0) {
          _push(`<div class="mt-1 flex items-center gap-2" data-v-31f81948><!--[-->`);
          ssrRenderList(item.colors, (color, colorIdx) => {
            _push(`<div class="relative group" data-v-31f81948><img${ssrRenderAttr("src", color.avatar_image)}${ssrRenderAttr("alt", color.color)} class="w-7 h-7 md:h-8 md:w-8 object-cover border border-project_black/30 cursor-pointer" loading="lazy" data-v-31f81948><div class="${ssrRenderClass([isColorHovered(item, colorIdx) ? "opacity-100 bg-text_color" : "opacity-0 bg-text_color", "absolute inset-0 pointer-events-none transition-opacity duration-200 w-8 h-8 bg-text_color"])}" data-v-31f81948>`);
            _push(ssrRenderComponent(_component_Icon, {
              name: "lucide:square-arrow-out-up-right",
              class: "absolute inset-0 w-4 h-4 z-10 bg-background_color m-auto"
            }, null, _parent));
            _push(`</div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        if (item?.discount) {
          _push(`<div class="space-x-2" data-v-31f81948><span class="mt-1 text-xs font-light tracking-widest text-error_text_color" data-v-31f81948>€${ssrInterpolate(formatPrice(item.discount_price))}</span><span id="price" class="mt-1 text-xs font-light tracking-widest text-text_color" data-v-31f81948>€${ssrInterpolate(formatPrice(item.price))}</span></div>`);
        } else {
          _push(`<p class="mt-1 text-xs font-light tracking-widest text-text_color" data-v-31f81948>€${ssrInterpolate(formatPrice(item.price))}</p>`);
        }
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShopListing.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-31f81948"]]);
const PAGE_SIZE = 12;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let ScrollSmoother = null;
    try {
      ScrollSmoother = ([__temp, __restore] = withAsyncContext(() => import("gsap/ScrollSmoother.js")), __temp = await __temp, __restore(), __temp).ScrollSmoother;
    } catch {
    }
    gsap.registerPlugin(ScrollTrigger);
    if (ScrollSmoother) gsap.registerPlugin(ScrollSmoother);
    const config = useRuntimeConfig();
    const route = useRoute();
    const router = useRouter();
    const loading = ref(true);
    const products = ref([]);
    const count = ref(0);
    const page = ref(1);
    const filterOpen = ref(false);
    const filters = ref({
      gender: [],
      collections: [],
      categories: [],
      sizes: [],
      colors: []
    });
    ref({
      collections: [],
      categories: [],
      sizes: [],
      colors: []
    });
    const totalPages = computed(() => Math.max(1, Math.ceil(count.value / PAGE_SIZE)));
    function buildQueryParams() {
      const params = new URLSearchParams();
      params.set("page", String(page.value));
      params.set("page_size", String(PAGE_SIZE));
      filters.value.collections.forEach((slug) => params.append("collection", slug));
      filters.value.categories.forEach((id) => params.append("category", String(id)));
      filters.value.sizes.forEach((size) => params.append("size", size));
      filters.value.colors.forEach((color) => params.append("color", color));
      const gender = filters.value.gender[0];
      if (gender) {
        params.set("gender", gender);
      }
      return params;
    }
    function buildApiQuery() {
      return buildQueryParams().toString().replace(/\+/g, "%20");
    }
    function updateRouteQuery() {
      const query = {};
      if (page.value > 1) {
        query.page = String(page.value);
      }
      if (filters.value.gender.length > 0) {
        query.gender = filters.value.gender[0];
      }
      if (filters.value.collections.length > 0) {
        query.collection = filters.value.collections;
      }
      if (filters.value.categories.length > 0) {
        query.category = filters.value.categories.map(String);
      }
      if (filters.value.sizes.length > 0) {
        query.size = filters.value.sizes;
      }
      if (filters.value.colors.length > 0) {
        query.color = filters.value.colors;
      }
      router.replace({ query });
    }
    async function fetchProducts() {
      try {
        loading.value = true;
        const res = await $fetch(
          `${config.public.apiBase}/public/products-all/?${buildApiQuery()}`
        );
        count.value = res.count;
        products.value = res.results;
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        loading.value = false;
      }
    }
    watch(
      filters,
      () => {
        if (page.value !== 1) {
          page.value = 1;
        }
        updateRouteQuery();
      },
      { deep: true }
    );
    watch(
      () => route.query,
      () => {
        fetchProducts();
      }
    );
    watch(
      filterOpen,
      (isOpen) => {
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0;
      const _component_ShopListingskeleton = _sfc_main$2;
      const _component_ShopListing = __nuxt_component_3;
      const _component_ClientOnly = __nuxt_component_4;
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-6"><div class="flex justify-between w-full"><div class="flex gap-3 justify-start w-full"><div class="flex items-center gap-3"><button type="button" class="text-xs uppercase tracking-widest items-center flex gap-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:sliders-horizontal",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`<span class="my-auto">Filters</span></button></div></div><div class="flex gap-3 justify-end w-full"><div class="flex items-center gap-3"><span class="uppercase text-xs tracking-widest ml-4">Page</span><!--[-->`);
      ssrRenderList(unref(totalPages), (p) => {
        _push(`<button type="button" class="${ssrRenderClass([p === unref(page) ? "underline" : "opacity-60", "text-sm uppercase tracking-widest"])}">${ssrInterpolate(p)}</button>`);
      });
      _push(`<!--]--></div></div></div></div>`);
      if (unref(loading)) {
        _push(ssrRenderComponent(_component_ShopListingskeleton, {
          class: "mt-2 md:mt-6 px-4 md:px-8",
          count: 8
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_ShopListing, {
          class: "mt-2 md:mt-6 px-4 md:px-8",
          products: unref(products)
        }, null, _parent));
      }
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Be7ygHW0.js.map
