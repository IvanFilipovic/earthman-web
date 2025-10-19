import { _ as __nuxt_component_0$1 } from './index-qGNUStbk.mjs';
import { defineComponent, ref, watch, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useRouter as useRouter$1 } from 'vue-router';
import { _ as _export_sfc, b as useRouter, c as useRoute, d as __nuxt_component_1, e as useRuntimeConfig } from './server.mjs';
import { _ as __nuxt_component_0 } from './AppNavigation-PSSArelZ.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
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
import 'node:module';
import 'node:url';
import 'ipx';
import 'pinia';
import 'gsap';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './nuxt-link-7pp3EPK3.mjs';

const _sfc_main$1 = {
  __name: "ShopListing",
  __ssrInlineRender: true,
  props: { products: { type: Array, default: () => [] } },
  setup(__props) {
    const hoveredSlug = ref(null);
    useRouter$1();
    const hoveredColorBySlug = ref({});
    function isColorHovered(item, color) {
      return hoveredColorBySlug.value[item.slug] === color.variant_slug;
    }
    function extraColorsCount(colors = []) {
      return Math.max(0, colors.length - 2);
    }
    function limitedColors(colors = []) {
      return colors.slice(0, 2);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-2 md:grid-cols-4 overflow-y-auto pt-8 gap-x-4 md:gap-x-8 lg:gap-x-24" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.products, (item) => {
        _push(`<div class="col-span-1 cursor-pointer pb-10"><div class="bg-background_color overflow-hidden object-fill"><div class="w-full"><div class="relative bg-background_color"><img${ssrRenderAttr("src", item.currentImage || item.link_image)}${ssrRenderAttr("alt", item.alt_text || item.name)} class="max-w-[100%] h-auto object-cover transition-opacity duration-200 border border-text_color/30" loading="lazy"><button class="${ssrRenderClass([{ "opacity-100": hoveredSlug.value === item.slug }, "absolute top-4 left-4 bg-text_color text-background_color tracking-wider text-xs font-light w-auto px-2 mx-auto opacity-0 transition-opacity duration-200"])}" style="${ssrRenderStyle(hoveredSlug.value === item.slug ? null : { display: "none" })}"> VIEW </button></div><div class="py-3 text-left"><p class="text-xs tracking-wider font-extralight">${ssrInterpolate(item.category)}</p><h3 class="uppercase tracking-wider text-[13px] md:text-sm font-normal truncate py-1">${ssrInterpolate(item.name)}</h3><div class="mt-1 flex items-center gap-2"><!--[-->`);
        ssrRenderList(limitedColors(item.colors), (color) => {
          _push(`<div class="relative group"><img${ssrRenderAttr("src", color.avatar_image)}${ssrRenderAttr("alt", color.color)} class="h-8 w-8 object-cover" loading="lazy"><div class="${ssrRenderClass([isColorHovered(item, color) ? "opacity-100" : "opacity-0", "absolute inset-0 pointer-events-none transition-opacity duration-200 w-8 h-8 bg-text_color"])}">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:square-arrow-out-up-right",
            class: "absolute inset-0 w-4 h-4 z-10 text-background_color m-auto"
          }, null, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]-->`);
        if (extraColorsCount(item.colors) > 0) {
          _push(`<span class="text-[10px] md:text-xs">+${ssrInterpolate(extraColorsCount(item.colors))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><p class="mt-1 text-xs font-light">\u20AC${ssrInterpolate(parseFloat(item.price).toFixed(2))}</p></div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShopListing.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const pageSize = 12;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useRouter();
    const route = useRoute();
    const gender = ref(route.query.gender === "male" ? "male" : "female");
    watch(
      () => route.query.gender,
      (g) => {
        const normalized = g === "male" ? "male" : "female";
        if (gender.value !== normalized) {
          gender.value = normalized;
        }
      },
      { immediate: true }
    );
    function genderBtnClass(target) {
      const base = "py-1 pr-8 text-sm text-text_color";
      return [base, gender.value === target ? "font-bold" : "bg-background_color"].join(" ");
    }
    const products = ref([]);
    const count = ref(0);
    const page = ref(1);
    const totalPages = computed(() => Math.max(1, Math.ceil(count.value / pageSize)));
    ref(false);
    const filters = ref({ collections: [], categories: [], sizes: [], colors: [] });
    ref({
      collections: [],
      categories: [],
      sizes: [],
      colors: []
    });
    function buildQuery() {
      const p = new URLSearchParams();
      p.set("page", String(page.value));
      p.set("page_size", String(pageSize));
      filters.value.collections.forEach((slug) => p.append("collection", slug.toString()));
      filters.value.categories.forEach((id) => p.append("category", id.toString()));
      filters.value.sizes.forEach((s) => p.append("size", s));
      filters.value.colors.forEach((c) => p.append("color", c));
      p.set("gender", gender.value);
      return p.toString().replace(/\+/g, "%20");
    }
    async function fetchProducts() {
      const res = await $fetch(`${config.public.apiBase}/public/products-all/?${buildQuery()}`);
      count.value = res.count;
      products.value = res.results.map((r) => ({
        ...r,
        defaultImage: r.link_image,
        currentImage: r.link_image
      }));
    }
    watch(filters, () => {
      if (page.value !== 1) page.value = 1;
    }, { deep: true });
    watch([filters, page, gender, route], fetchProducts);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShopListing = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-34258e90>`);
      _push(ssrRenderComponent(__nuxt_component_0, { dark: false }, null, _parent));
      _push(`<div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-6" data-v-34258e90><div class="flex justify-between w-full" data-v-34258e90><div class="flex items-center" data-v-34258e90><button class="${ssrRenderClass(genderBtnClass("female"))}" data-v-34258e90>WOMAN</button><button class="${ssrRenderClass(genderBtnClass("male"))}" data-v-34258e90>MAN</button></div><div class="flex gap-3 justify-end w-full" data-v-34258e90><div class="flex items-center gap-3" data-v-34258e90><span class="uppercase text-xs tracking-widest ml-4" data-v-34258e90>Page</span><!--[-->`);
      ssrRenderList(totalPages.value, (p) => {
        _push(`<button class="${ssrRenderClass([p === page.value ? "underline" : "opacity-60", "text-sm uppercase tracking-widest"])}" data-v-34258e90>${ssrInterpolate(p)}</button>`);
      });
      _push(`<!--]--><button class="text-md uppercase tracking-widest" data-v-34258e90>Filters</button></div></div></div></div>`);
      _push(ssrRenderComponent(_component_ShopListing, {
        class: "mt-2 md:mt-6 px-4 md:px-8",
        products: products.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-34258e90"]]);

export { index as default };
//# sourceMappingURL=index-BSabaD2R.mjs.map
