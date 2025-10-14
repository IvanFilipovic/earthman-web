import { _ as _sfc_main$2 } from "./AppNavigation-DaXX_rtR.js";
import { _ as __nuxt_component_0, u as useAsyncData } from "./index-Bc_SW2bH.js";
import { ref, computed, mergeProps, useSSRContext, watch, withAsyncContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { _ as _export_sfc, c as useRoute, b as useRouter$1 } from "../server.mjs";
import "./nuxt-link-CdcgahCt.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/unctx/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/kai/Projekti/webshop/node_modules/defu/dist/defu.mjs";
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
const _sfc_main$1 = {
  __name: "CollectionShopListing",
  __ssrInlineRender: true,
  props: {
    products: { type: Array, default: () => [] },
    collection: { type: Object, default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const hoveredSlug = ref(null);
    const hoveredColorBySlug = ref({});
    function isColorHovered(item, color) {
      return hoveredColorBySlug.value[item.slug] === color.variant_slug;
    }
    function limitedColors(colors = []) {
      return colors.slice(0, 2);
    }
    function extraColorsCount(colors = []) {
      return Math.max(0, colors.length - 2);
    }
    const textPool = computed(() => {
      const c = props.collection || {};
      const texts = [
        c.element_one,
        c.element_two,
        c.element_three,
        c.element_four
      ].filter(Boolean);
      return texts.length ? texts : [""];
    });
    const sections = computed(() => {
      const items = [...props.products];
      const result = [];
      let i = 0;
      let textIndex = 0;
      const pattern = [
        { type: "grid", count: 3 },
        { type: "text" },
        { type: "grid", count: 2 },
        { type: "grid", count: 3 },
        { type: "text" },
        { type: "grid", count: 2 },
        { type: "text" },
        { type: "grid", count: 3 }
      ];
      let p = 0;
      while (i < items.length) {
        const step = pattern[p];
        if (step.type === "grid") {
          if (i >= items.length) break;
          const slice = items.slice(i, i + step.count);
          if (!slice.length) break;
          result.push({ type: "grid", count: step.count, items: slice });
          i += slice.length;
        } else if (step.type === "text") {
          if (i < items.length) {
            result.push({
              type: "text",
              heading: defaultHeading(textIndex),
              text: textPool.value[textIndex % textPool.value.length]
            });
            textIndex++;
          }
        }
        p = (p + 1) % pattern.length;
      }
      return result;
    });
    function splitText(text = "") {
      return text.split(new RegExp("(?<=[.!?])\\s+|\\n+")).filter(Boolean);
    }
    function defaultHeading(idx) {
      const base = props.collection?.name || "Collection";
      return idx === 0 ? `${base}` : `${base} — ${idx + 1}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "overflow-y-auto pt-8 md:px-8 mt-6" }, _attrs))} data-v-46120738><!--[-->`);
      ssrRenderList(sections.value, (section, idx) => {
        _push(`<div data-v-46120738>`);
        if (section.type === "grid") {
          _push(`<div class="pb-10 md:pb-18" data-v-46120738><div class="${ssrRenderClass([
            "grid gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-14",
            section.count === 3 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2 md:grid-cols-2"
          ])}" data-v-46120738><!--[-->`);
          ssrRenderList(section.items, (item) => {
            _push(`<article class="group cursor-pointer" data-v-46120738><div class="relative overflow-hidden" data-v-46120738><img${ssrRenderAttr("src", item.currentImage || item.link_image)}${ssrRenderAttr("alt", item.alt_text || item.name)} class="w-full h-full object-cover" loading="lazy" data-v-46120738><span class="absolute top-3 right-3 text-[10px] md:text-xs tracking-widest bg-background_color/80 px-2 py-1" style="${ssrRenderStyle(hoveredSlug.value === item.slug ? null : { display: "none" })}" data-v-46120738>VIEW</span></div><div class="pt-3 md:pt-4 text-left" data-v-46120738><h3 class="uppercase tracking-wider text-sm font-normal truncate" data-v-46120738>${ssrInterpolate(item.name)}</h3><div class="mt-1 flex items-center gap-2" data-v-46120738><!--[-->`);
            ssrRenderList(limitedColors(item.colors), (color, cIdx) => {
              _push(`<div class="relative" data-v-46120738><img${ssrRenderAttr("src", color.avatar_image)}${ssrRenderAttr("alt", color.color)} class="h-8 w-8 object-cover border border-project_black/40" loading="lazy" data-v-46120738><div class="${ssrRenderClass([isColorHovered(item, color) ? "opacity-100" : "opacity-0", "absolute inset-0 pointer-events-none transition-opacity duration-200 w-8 h-8 bg-text_color"])}" data-v-46120738>`);
              _push(ssrRenderComponent(_component_Icon, {
                name: "lucide:square-arrow-out-up-right",
                class: "absolute inset-0 w-4 h-4 z-10 text-background_color m-auto"
              }, null, _parent));
              _push(`</div></div>`);
            });
            _push(`<!--]-->`);
            if (extraColorsCount(item.colors) > 0) {
              _push(`<span class="text-[10px] md:text-xs" data-v-46120738>+${ssrInterpolate(extraColorsCount(item.colors))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div><p class="mt-1 text-xs font-light" data-v-46120738>€${ssrInterpolate(parseFloat(item.price).toFixed(2))}</p></div></article>`);
          });
          _push(`<!--]--></div></div>`);
        } else if (section.type === "text") {
          _push(`<div class="py-6 md:py-14" data-v-46120738><div class="max-w-none md:max-w-7xl" data-v-46120738><h4 class="uppercase tracking-wider text-xs md:text-sm mb-3" data-v-46120738>${ssrInterpolate(section.heading)}</h4><div class="flex flex-col max-w" data-v-46120738><!--[-->`);
          ssrRenderList(splitText(section.text), (line, i) => {
            _push(`<span class="px-3 py-1 my-1 text-sm md:text-base leading-relaxed tracking-wide max-w-4xl bg-text_color text-background_color" data-v-46120738>${ssrInterpolate(line)}</span>`);
          });
          _push(`<!--]--></div></div></div>`);
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-46120738"]]);
const API = "http://127.0.0.1:8000";
const pageSize = 48;
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter$1();
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
      const base = "pl-8 py-1 text-sm text-text_color";
      return [base, gender.value === target ? "font-bold" : "bg-background_color"].join(" ");
    }
    const { data: collectionData, pending: cPending } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      () => `collection:${slug.value}`,
      () => $fetch(`${API}/public/collections/${slug.value}/`),
      "$TvI3f2lA28"
    )), __temp = await __temp, __restore(), __temp);
    const { data: productsData, pending: pPending, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      // 👇 include gender in the key so Nuxt refetches when it changes
      () => `products-all:${slug.value}:${gender.value}`,
      async () => {
        let url = `${API}/public/products-all/?page=1&page_size=${pageSize}&collection=${slug.value}&gender=${gender.value}`;
        const all = [];
        while (url) {
          const res = await $fetch(url);
          if (Array.isArray(res?.results)) all.push(...res.results);
          url = res?.next || null;
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
      const _component_AppNavigation = _sfc_main$2;
      const _component_CollectionShopListing = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-5ff3aa35><div class="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-6 gap-6 border-b border-text_color/30" data-v-5ff3aa35><div class="w-full md:w-1/2" data-v-5ff3aa35><div class="image bg-cover bg-center bg-transparent h-40 flex justify-center max-w-[100%]" data-v-5ff3aa35></div></div><div class="w-full md:w-1/2 flex flex-col" data-v-5ff3aa35>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="flex gap-3 justify-end w-full" data-v-5ff3aa35><div class="flex items-center gap-3" data-v-5ff3aa35><nav class="text-md uppercase tracking-widest space-x-2 text-background_color px-4" data-v-5ff3aa35><p data-v-5ff3aa35>${ssrInterpolate(collection.value.name)}</p></nav></div></div></div></div><div class="flex flex-col md:flex-row items-start md:items-center justify-between px-8 pt-1 gap-6" data-v-5ff3aa35><div class="flex justify-end w-full" data-v-5ff3aa35><div class="flex items-center" data-v-5ff3aa35><button class="${ssrRenderClass(genderBtnClass("female"))}" data-v-5ff3aa35>WOMAN</button><button class="${ssrRenderClass(genderBtnClass("male"))}" data-v-5ff3aa35>MAN</button></div></div></div>`);
      if (!pending.value && products.value.length) {
        _push(ssrRenderComponent(_component_CollectionShopListing, {
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
const ____slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5ff3aa35"]]);
export {
  ____slug_ as default
};
//# sourceMappingURL=_...slug_-LOIE8fwT.js.map
