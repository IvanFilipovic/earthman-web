import { _ as __nuxt_component_0 } from './AppNavigation-BMb4Nfnz.mjs';
import { _ as _sfc_main$2 } from './MobileColorSlider-DLe-Ur6a.mjs';
import { _ as _export_sfc, u as useRoute, g as useRouter, q as useAsyncData, c as useRuntimeConfig, d as __nuxt_component_0$1 } from './server.mjs';
import { computed, ref, watch, withAsyncContext, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { useRouter as useRouter$1 } from 'vue-router';
import './AppHeader-BP4Q--Yf.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@intlify/utils';
import '@iconify/utils';
import 'consola';
import 'node:url';
import 'ipx';
import '../_/vue.es.mjs';
import 'pinia';
import 'gsap';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '@headlessui/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$1 = {
  __name: "CollectionShopListing",
  __ssrInlineRender: true,
  props: {
    products: { type: Array, default: () => [] },
    collection: { type: Object, default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const router = useRouter$1();
    const hoveredSlug = ref(null);
    const hoveredColorBySlug = ref({});
    function isColorHovered(item, color) {
      return hoveredColorBySlug.value[item.slug] === color.variant_slug;
    }
    function goToProduct(slug, variant_slug) {
      if (!slug || !variant_slug) return;
      router.push(`/product/${slug}/${variant_slug}`);
    }
    function limitedColors(colors = []) {
      return colors.slice(0, 2);
    }
    function extraColorsCount(colors = []) {
      return Math.max(0, colors.length - 2);
    }
    const textPool = computed(() => {
      const c = props.collection || {};
      const texts = [c.element_one, c.element_two, c.element_three, c.element_four].filter(Boolean);
      return texts.length ? texts : [""];
    });
    const sections = computed(() => {
      const all = [...props.products];
      const hotProducts = all.filter((p) => p.hot === true);
      const regularProducts = all.filter((p) => !p.hot);
      const result = [];
      let textIndex = 0;
      let regIndex = 0;
      let hotIndex = 0;
      while (regIndex < regularProducts.length || hotIndex < hotProducts.length) {
        const regSlice = regularProducts.slice(regIndex, regIndex + 2);
        if (regSlice.length > 0) {
          result.push({
            type: "gridWithText",
            items: regSlice,
            text: textPool.value[textIndex % textPool.value.length],
            heading: defaultHeading(textIndex)
          });
          regIndex += regSlice.length;
          textIndex++;
        }
        const hotSlice = hotProducts.slice(hotIndex, hotIndex + 2);
        if (hotSlice.length > 0) {
          result.push({
            type: "gridHot",
            items: hotSlice
          });
          hotIndex += hotSlice.length;
        }
      }
      return result;
    });
    function splitText(text = "") {
      return text.split(new RegExp("(?<=[.!?])\\s+|\\n+")).filter(Boolean);
    }
    function defaultHeading(idx) {
      var _a;
      const base = ((_a = props.collection) == null ? void 0 : _a.name) || "Collection";
      return idx === 0 ? base : `${base} \u2014 ${idx + 1}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MobileColorSlider = _sfc_main$2;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "overflow-y-auto pt-8" }, _attrs))} data-v-dee95c24><!--[-->`);
      ssrRenderList(sections.value, (section, idx) => {
        _push(`<div data-v-dee95c24>`);
        if (section.type === "gridWithText") {
          _push(`<div class="pb-10" data-v-dee95c24><div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-x-8 lg:gap-x-24 gap-y-8" data-v-dee95c24><!--[-->`);
          ssrRenderList(section.items, (item) => {
            _push(`<article class="group cursor-pointer md:col-span-1" data-v-dee95c24><div class="relative overflow-hidden" data-v-dee95c24><img${ssrRenderAttr("src", item.currentImage || item.link_image)}${ssrRenderAttr("alt", item.alt_text || item.name)} class="hidden md:block w-full h-full object-cover border border-text_color/30" loading="lazy" data-v-dee95c24>`);
            _push(ssrRenderComponent(_component_MobileColorSlider, {
              colors: limitedColors(item.colors),
              onGo: (variantSlug) => goToProduct(item.slug, variantSlug)
            }, null, _parent));
            _push(`<button class="${ssrRenderClass([{ "opacity-100": hoveredSlug.value === item.slug }, "absolute top-4 left-4 bg-text_color text-background_color tracking-wider text-xs font-light w-auto px-2 mx-auto opacity-0 transition-opacity duration-200"])}" style="${ssrRenderStyle(hoveredSlug.value === item.slug ? null : { display: "none" })}" data-v-dee95c24> VIEW </button></div><div class="pt-3 md:pt-4 text-left" data-v-dee95c24><p class="text-xs tracking-wider font-extralight" data-v-dee95c24>${ssrInterpolate(item.category)}</p><h3 class="uppercase tracking-wider text-sm font-normal truncate py-1" data-v-dee95c24>${ssrInterpolate(item.name)}</h3><div class="mt-1 flex items-center gap-2" data-v-dee95c24><!--[-->`);
            ssrRenderList(limitedColors(item.colors), (color, cIdx) => {
              _push(`<div class="relative" data-v-dee95c24><img${ssrRenderAttr("src", color.avatar_image)}${ssrRenderAttr("alt", color.color)} class="w-7 h-7 md:h-8 md:w-8 object-cover border border-project_black/40" loading="lazy" data-v-dee95c24><div class="${ssrRenderClass([isColorHovered(item, color) ? "opacity-100" : "opacity-0", "absolute inset-0 pointer-events-none transition-opacity duration-200 w-8 h-8 bg-text_color"])}" data-v-dee95c24>`);
              _push(ssrRenderComponent(_component_Icon, {
                name: "lucide:square-arrow-out-up-right",
                class: "absolute inset-0 w-4 h-4 z-10 text-background_color m-auto"
              }, null, _parent));
              _push(`</div></div>`);
            });
            _push(`<!--]-->`);
            if (extraColorsCount(item.colors) > 0) {
              _push(`<span class="text-[10px] md:text-xs" data-v-dee95c24>+${ssrInterpolate(extraColorsCount(item.colors))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></article>`);
          });
          _push(`<!--]--><div class="col-span-2 flex flex-col justify-center" data-v-dee95c24><h4 class="uppercase tracking-wider text-xs md:text-sm mb-3" data-v-dee95c24>${ssrInterpolate(section.heading)}</h4><div class="flex flex-col" data-v-dee95c24><!--[-->`);
          ssrRenderList(splitText(section.text), (line, i) => {
            _push(`<span class="px-3 py-1 my-1 text-sm md:text-base leading-relaxed tracking-wide max-w-4xl bg-text_color text-background_color" data-v-dee95c24>${ssrInterpolate(line)}</span>`);
          });
          _push(`<!--]--></div></div></div></div>`);
        } else if (section.type === "gridHot") {
          _push(`<div class="pb-10" data-v-dee95c24><div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-8 lg:gap-x-24 gap-y-8" data-v-dee95c24><!--[-->`);
          ssrRenderList(section.items, (item) => {
            _push(`<article class="group cursor-pointer" data-v-dee95c24><div class="relative overflow-hidden" data-v-dee95c24><img${ssrRenderAttr("src", item.currentImage || item.link_image)}${ssrRenderAttr("alt", item.alt_text || item.name)} class="hidden md:block w-full h-full object-cover border border-text_color/30" loading="lazy" data-v-dee95c24>`);
            _push(ssrRenderComponent(_component_MobileColorSlider, {
              colors: limitedColors(item.colors),
              onGo: (variantSlug) => goToProduct(item.slug, variantSlug)
            }, null, _parent));
            _push(`<button class="${ssrRenderClass([{ "opacity-100": hoveredSlug.value === item.slug }, "absolute top-4 left-4 bg-text_color text-background_color tracking-wider text-xs font-light w-auto px-2 mx-auto opacity-0 transition-opacity duration-200"])}" style="${ssrRenderStyle(hoveredSlug.value === item.slug ? null : { display: "none" })}" data-v-dee95c24> VIEW </button></div><div class="pt-3 md:pt-4 text-left" data-v-dee95c24><p class="text-xs tracking-wider font-extralight" data-v-dee95c24>${ssrInterpolate(item.category)}</p><h3 class="uppercase tracking-wider text-sm font-normal truncate py-1" data-v-dee95c24>${ssrInterpolate(item.name)}</h3><div class="mt-1 flex items-center gap-2" data-v-dee95c24><!--[-->`);
            ssrRenderList(limitedColors(item.colors), (color, cIdx) => {
              _push(`<div class="relative" data-v-dee95c24><img${ssrRenderAttr("src", color.avatar_image)}${ssrRenderAttr("alt", color.color)} class="w-7 h-7 md:h-8 md:w-8 object-cover border border-project_black/40" loading="lazy" data-v-dee95c24><div class="${ssrRenderClass([isColorHovered(item, color) ? "opacity-100" : "opacity-0", "absolute inset-0 pointer-events-none transition-opacity duration-200 w-8 h-8 bg-text_color"])}" data-v-dee95c24>`);
              _push(ssrRenderComponent(_component_Icon, {
                name: "lucide:square-arrow-out-up-right",
                class: "absolute inset-0 w-4 h-4 z-10 text-background_color m-auto"
              }, null, _parent));
              _push(`</div></div>`);
            });
            _push(`<!--]-->`);
            if (extraColorsCount(item.colors) > 0) {
              _push(`<span class="text-[10px] md:text-xs" data-v-dee95c24>+${ssrInterpolate(extraColorsCount(item.colors))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div></article>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CollectionShopListing.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dee95c24"]]);
const pageSize = 48;
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const route = useRoute();
    useRouter();
    const slug = computed(() => String(route.params.slug));
    const gender = ref(route.query.gender === "male" ? "male" : "female");
    watch(
      () => route.query.gender,
      (g) => {
        const normalized = g === "male" ? "male" : "female";
        if (gender.value !== normalized) gender.value = normalized;
      },
      { immediate: true }
    );
    function genderBtnClass(target) {
      const base = "pr-8 py-1 text-sm text-text_color";
      return [base, gender.value === target ? "font-bold" : "bg-background_color"].join(" ");
    }
    const { data: collectionData, pending: cPending } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => `collection:${slug.value}`,
      () => $fetch(`${config.public.apiBase}/public/collections/${slug.value}/`),
      "$TvI3f2lA28"
    )), __temp = await __temp, __restore(), __temp);
    const { data: productsData, pending: pPending, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      // 👇 include gender in the key so Nuxt refetches when it changes
      () => `products-all:${slug.value}:${gender.value}`,
      async () => {
        let url = `${config.public.apiBase}/public/products-all/?page=1&page_size=${pageSize}&collection=${slug.value}&gender=${gender.value}`;
        const all = [];
        while (url) {
          const res = await $fetch(url);
          if (Array.isArray(res == null ? void 0 : res.results)) all.push(...res.results);
          url = (res == null ? void 0 : res.next) || null;
        }
        return all;
      },
      // 👇 also explicitly watch reactive sources for extra safety
      { watch: [slug, gender] }
    )), __temp = await __temp, __restore(), __temp);
    const pending = computed(() => cPending.value || pPending.value);
    const collection = computed(() => collectionData.value || {});
    const products = computed(() => productsData.value || []);
    function onCtaClick() {
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0;
      const _component_CollectionShopListing = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-b28a0b9c>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-6" data-v-b28a0b9c><div class="flex justify-start w-full" data-v-b28a0b9c><div class="flex items-center" data-v-b28a0b9c><button class="${ssrRenderClass(genderBtnClass("female"))}" data-v-b28a0b9c>WOMAN</button><button class="${ssrRenderClass(genderBtnClass("male"))}" data-v-b28a0b9c>MAN</button></div></div></div>`);
      if (!pending.value && products.value.length) {
        _push(ssrRenderComponent(_component_CollectionShopListing, {
          class: "mt-2 md:mt-6 px-4 md:px-8",
          products: products.value,
          collection: collection.value,
          onCtaClick
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/collections/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b28a0b9c"]]);

export { ____slug_ as default };
//# sourceMappingURL=_...slug_-DWV_UOTZ.mjs.map
