import { _ as __nuxt_component_0 } from './AppNavigation-HBYr5KA2.mjs';
import { _ as _export_sfc, u as useRoute, o as useAsyncData, i as useNuxtApp, d as useRuntimeConfig, f as __nuxt_component_0$3, e as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, computed, withAsyncContext, watch, nextTick, withCtx, createTextVNode, unref, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, mergeProps, resolveDynamicComponent, Transition, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderVNode } from 'vue/server-renderer';
import { z } from '../_/vue.es.mjs';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { u as useToast } from './useToast-pOzf8V9B.mjs';
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
import 'gsap';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProductGallerySlider",
  __ssrInlineRender: true,
  props: {
    images: {},
    productName: {}
  },
  setup(__props) {
    const currentSlide = ref(0);
    z({
      initial: 0,
      slidesPerView: 1,
      loop: true,
      slideChanged(s) {
        currentSlide.value = s.track.details.rel;
      }
    });
    const atStart = computed(() => false);
    const atEnd = computed(() => false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "navigation-wrapper" }, _attrs))} data-v-20161c5c><div class="keen-slider" data-v-20161c5c><!--[-->`);
      ssrRenderList(__props.images, (img, idx) => {
        _push(`<div class="keen-slider__slide" data-v-20161c5c><img${ssrRenderAttr("src", img.image)}${ssrRenderAttr("alt", img.alt_text || __props.productName)} loading="lazy" class="gallery-image" data-v-20161c5c></div>`);
      });
      _push(`<!--]--></div><button type="button" class="${ssrRenderClass([{ "arrow--disabled": unref(atStart) }, "arrow arrow--left"])}"${ssrRenderAttr("aria-disabled", unref(atStart))} aria-label="Previous image" data-v-20161c5c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-left",
        class: "w-8 h-8 my-auto"
      }, null, _parent));
      _push(`</button><button type="button" class="${ssrRenderClass([{ "arrow--disabled": unref(atEnd) }, "arrow arrow--right"])}"${ssrRenderAttr("aria-disabled", unref(atEnd))} aria-label="Next image" data-v-20161c5c>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-right",
        class: "w-8 h-8 my-auto"
      }, null, _parent));
      _push(`</button></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductGallerySlider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-20161c5c"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductAccordion",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-inherit text-text_color max-w-2xl mx-auto py-10 md:py-[150px]" }, _attrs))}><ul class="divide-y divide-text_color/30"><!--[-->`);
      ssrRenderList(__props.items, (item, i) => {
        _push(`<li class="py-4">`);
        _push(ssrRenderComponent(unref(Disclosure), { as: "div" }, {
          default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DisclosureButton), { class: "w-full flex items-center justify-between gap-4 text-left" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="text-lg font-semibold"${_scopeId2}>${ssrInterpolate(item.title)}</h3>`);
                    if (!open) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:plus",
                        class: "h-4 w-4 transition-transform duration-200 ease-out",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (open) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:minus",
                        class: "h-4 w-4 transition-transform duration-200 ease-out",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(item.title), 1),
                      !open ? (openBlock(), createBlock(_component_Icon, {
                        key: 0,
                        name: "lucide:plus",
                        class: "h-4 w-4 transition-transform duration-200 ease-out",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true),
                      open ? (openBlock(), createBlock(_component_Icon, {
                        key: 1,
                        name: "lucide:minus",
                        class: "h-4 w-4 transition-transform duration-200 ease-out",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(``);
              if (open) {
                _push2(ssrRenderComponent(unref(DisclosurePanel), null, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="pt-4 text-sm leading-6 text-text_color/90 space-y-4"${_scopeId2}>`);
                      if (typeof item.content === "string") {
                        _push3(`<p${_scopeId2}>${ssrInterpolate(item.content)}</p>`);
                      } else {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.content), null, null), _parent3, _scopeId2);
                      }
                      if (item.link) {
                        _push3(`<div class="pt-1"${_scopeId2}><a${ssrRenderAttr("href", item.link.href)} class="underline underline-offset-2 hover:opacity-80"${_scopeId2}>${ssrInterpolate(item.link.label)}</a></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "pt-4 text-sm leading-6 text-text_color/90 space-y-4" }, [
                          typeof item.content === "string" ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(item.content), 1)) : (openBlock(), createBlock(resolveDynamicComponent(item.content), { key: 1 })),
                          item.link ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "pt-1"
                          }, [
                            createVNode("a", {
                              href: item.link.href,
                              class: "underline underline-offset-2 hover:opacity-80"
                            }, toDisplayString(item.link.label), 9, ["href"])
                          ])) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(unref(DisclosureButton), { class: "w-full flex items-center justify-between gap-4 text-left" }, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(item.title), 1),
                    !open ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: "lucide:plus",
                      class: "h-4 w-4 transition-transform duration-200 ease-out",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      "aria-hidden": "true"
                    })) : createCommentVNode("", true),
                    open ? (openBlock(), createBlock(_component_Icon, {
                      key: 1,
                      name: "lucide:minus",
                      class: "h-4 w-4 transition-transform duration-200 ease-out",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      "aria-hidden": "true"
                    })) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024),
                createVNode(Transition, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "opacity-0 -translate-y-1",
                  "enter-to-class": "opacity-100 translate-y-0",
                  "leave-active-class": "transition duration-200 ease-in",
                  "leave-from-class": "opacity-100 translate-y-0",
                  "leave-to-class": "opacity-0 -translate-y-1"
                }, {
                  default: withCtx(() => [
                    open ? (openBlock(), createBlock(unref(DisclosurePanel), { key: 0 }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pt-4 text-sm leading-6 text-text_color/90 space-y-4" }, [
                          typeof item.content === "string" ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(item.content), 1)) : (openBlock(), createBlock(resolveDynamicComponent(item.content), { key: 1 })),
                          item.link ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "pt-1"
                          }, [
                            createVNode("a", {
                              href: item.link.href,
                              class: "underline underline-offset-2 hover:opacity-80"
                            }, toDisplayString(item.link.label), 9, ["href"])
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductAccordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...product]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const route = useRoute();
    const { success, error } = useToast();
    const mobilePanelOpen = ref(false);
    const currentSlide = ref(0);
    const activeColorIndex = ref(0);
    const selectedVariantSlug = ref("");
    const collectionParam = computed(() => {
      var _a;
      return String((_a = route.params.collection) != null ? _a : "");
    });
    const productSlugParam = computed(() => {
      var _a;
      return String((_a = route.params.product) != null ? _a : "");
    });
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      `product:${collectionParam.value}:${productSlugParam.value}`,
      async () => {
        const url = `${config.public.apiBase}/public/products/${collectionParam.value}/${productSlugParam.value}/`;
        return await $fetch(url);
      },
      {
        watch: [collectionParam, productSlugParam],
        getCachedData: (key) => {
          return useNuxtApp().payload.data[key] || useNuxtApp().static.data[key];
        }
      }
    )), __temp = await __temp, __restore(), __temp);
    const product = computed(() => {
      var _a;
      return (_a = data.value) != null ? _a : null;
    });
    const productName = computed(() => {
      var _a, _b;
      return (_b = (_a = product.value) == null ? void 0 : _a.name) != null ? _b : "";
    });
    const productCategory = computed(() => {
      var _a, _b;
      return (_b = (_a = product.value) == null ? void 0 : _a.category) != null ? _b : "";
    });
    const variantGroups = computed(() => {
      var _a, _b;
      return (_b = (_a = product.value) == null ? void 0 : _a.variant_groups) != null ? _b : [];
    });
    const activeSizes = computed(() => {
      var _a, _b;
      return (_b = (_a = variantGroups.value[activeColorIndex.value]) == null ? void 0 : _a.sizes) != null ? _b : [];
    });
    const inStock = computed(() => activeSizes.value.some((s) => s == null ? void 0 : s.available));
    const activeColorName = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = variantGroups.value[activeColorIndex.value]) == null ? void 0 : _a.color) == null ? void 0 : _b.name) != null ? _c : "";
    });
    const imagesToShow = computed(() => {
      var _a, _b;
      return (_b = (_a = variantGroups.value[activeColorIndex.value]) == null ? void 0 : _a.gallery) != null ? _b : [];
    });
    const [sliderRef, slider] = z({
      loop: true,
      initial: 0,
      slideChanged(s) {
        currentSlide.value = s.track.details.rel;
      }
    });
    const dots = computed(
      () => slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : []
    );
    watch(
      () => product.value,
      (p) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
        if (!p) return;
        const isVariantSlug = productSlugParam.value.includes("-") && productSlugParam.value.split("-").length > 1;
        if (isVariantSlug) {
          const groupIndex = (_b = (_a = p.variant_groups) == null ? void 0 : _a.findIndex(
            (g) => {
              var _a2;
              return ((_a2 = g == null ? void 0 : g.sizes) != null ? _a2 : []).some((s) => (s == null ? void 0 : s.slug) === productSlugParam.value);
            }
          )) != null ? _b : -1;
          if (groupIndex >= 0) {
            activeColorIndex.value = groupIndex;
            const match = ((_e = (_d = (_c = p.variant_groups) == null ? void 0 : _c[groupIndex]) == null ? void 0 : _d.sizes) != null ? _e : []).find((s) => (s == null ? void 0 : s.slug) === productSlugParam.value && (s == null ? void 0 : s.available));
            if (match) {
              selectedVariantSlug.value = match.slug;
            } else {
              const firstAvail2 = ((_h = (_g = (_f = p.variant_groups) == null ? void 0 : _f[groupIndex]) == null ? void 0 : _g.sizes) != null ? _h : []).find((s) => s == null ? void 0 : s.available);
              selectedVariantSlug.value = (_i = firstAvail2 == null ? void 0 : firstAvail2.slug) != null ? _i : "";
            }
            return;
          }
        }
        activeColorIndex.value = 0;
        const firstAvail = ((_l = (_k = (_j = p.variant_groups) == null ? void 0 : _j[0]) == null ? void 0 : _k.sizes) != null ? _l : []).find((s) => s == null ? void 0 : s.available);
        selectedVariantSlug.value = (_m = firstAvail == null ? void 0 : firstAvail.slug) != null ? _m : "";
      },
      { immediate: true }
    );
    watch(
      () => {
        var _a, _b, _c;
        return (_c = (_b = (_a = variantGroups.value[activeColorIndex.value]) == null ? void 0 : _a.gallery) == null ? void 0 : _b.length) != null ? _c : 0;
      },
      async () => {
        await nextTick();
        if (slider.value) {
          slider.value.update();
          slider.value.moveToIdx(0);
          currentSlide.value = 0;
        }
      }
    );
    function selectSize(s) {
      if (!(s == null ? void 0 : s.available)) return;
      selectedVariantSlug.value = s.slug;
    }
    async function addToCart() {
      var _a;
      if (!selectedVariantSlug.value) {
        error("Please select a size");
        return;
      }
      try {
        await $fetch("/api/private/put/cart", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: {
            product_variant_slug: selectedVariantSlug.value,
            quantity: 1
          }
        });
        if (false) ;
        success("Added to cart");
      } catch (e) {
        const msg = ((_a = e == null ? void 0 : e.data) == null ? void 0 : _a.detail) || (e == null ? void 0 : e.statusMessage) || "Could not add to cart";
        error(msg);
        console.error("Add to cart failed", e);
      }
    }
    function swatchBg(hex) {
      if (!hex) return "#e5e7eb";
      return `#${hex}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const _component_AppNavigation = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_ProductGallerySlider = __nuxt_component_2;
      const _component_ProductAccordion = _sfc_main$1;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-78e0f183>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-2" data-v-78e0f183><div class="flex justify-start w-full" data-v-78e0f183><div class="flex items-center py-1 text-[12px] md:text-sm text-text_color uppercase tracking-widest" data-v-78e0f183>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:underline pr-1 md:pr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HOME`);
          } else {
            return [
              createTextVNode("HOME")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="pr-1 md:pr-2" data-v-78e0f183>/</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop",
        class: "hover:underline pr-1 md:pr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Shop`);
          } else {
            return [
              createTextVNode("Shop")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="pr-1 md:pr-2" data-v-78e0f183>/</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/collections/${(_a = unref(product)) == null ? void 0 : _a.collection_slug}`,
        class: "hover:underline pr-1 md:pr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate((_a2 = unref(product)) == null ? void 0 : _a2.collection_slug)}`);
          } else {
            return [
              createTextVNode(toDisplayString((_b2 = unref(product)) == null ? void 0 : _b2.collection_slug), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="pr-1 md:pr-2" data-v-78e0f183>/</span><span class="pr-1 md:pr-2" data-v-78e0f183>${ssrInterpolate(unref(productName))}</span></div></div></div><div class="hidden md:block" data-v-78e0f183><div class="relative grid grid-cols-12 gap-8 pt-8 mt-2 md:mt-6 px-4 md:px-8 items-start" data-v-78e0f183><div class="md:col-span-8" data-v-78e0f183>`);
      if (unref(imagesToShow).length > 0) {
        _push(ssrRenderComponent(_component_ProductGallerySlider, {
          images: unref(imagesToShow),
          "product-name": unref(productName),
          key: `gallery-${unref(activeColorIndex)}`
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><aside class="md:col-span-4 md:sticky md:top-4 md:self-start" data-v-78e0f183><div class="bg-background_color border border-text_color/30 p-5 align-self:start" data-v-78e0f183><div class="flex items-start justify-between" data-v-78e0f183><div data-v-78e0f183><h1 class="text-sm font-light leading-tight text-text_color" data-v-78e0f183>${ssrInterpolate(unref(productCategory))}</h1><h1 class="text-xl font-medium leading-tight text-text_color" data-v-78e0f183>${ssrInterpolate(unref(productName))}</h1>`);
      if (unref(activeColorName)) {
        _push(`<p class="mt-1 text-sm text-text_color" data-v-78e0f183>Color: ${ssrInterpolate(unref(activeColorName))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-right" data-v-78e0f183>`);
      if ((_b = unref(product)) == null ? void 0 : _b.discount) {
        _push(`<div class="space-x-2" data-v-78e0f183><span class="text-lg font-semibold text-text_color" data-v-78e0f183>\u20AC${ssrInterpolate((_c = unref(product)) == null ? void 0 : _c.discount_price)}</span><span class="line-through text-text_color" data-v-78e0f183>\u20AC${ssrInterpolate((_d = unref(product)) == null ? void 0 : _d.price)}</span></div>`);
      } else {
        _push(`<div class="text-lg font-semibold text-text_color" data-v-78e0f183>\u20AC${ssrInterpolate((_e = unref(product)) == null ? void 0 : _e.price)}</div>`);
      }
      _push(`</div></div>`);
      if (unref(variantGroups).length) {
        _push(`<div class="mt-4" data-v-78e0f183><div class="text-xs uppercase tracking-widest mb-2" data-v-78e0f183>Color</div><div class="flex gap-3" data-v-78e0f183><!--[-->`);
        ssrRenderList(unref(variantGroups), (vg, idx) => {
          var _a2, _b2, _c2;
          _push(`<button type="button" class="${ssrRenderClass([unref(activeColorIndex) === idx ? "ring-2 ring-text_color" : "", "w-8 h-8 border relative"])}"${ssrRenderAttr("title", (_a2 = vg.color) == null ? void 0 : _a2.name)} style="${ssrRenderStyle({ backgroundColor: swatchBg((_b2 = vg.color) == null ? void 0 : _b2.image) })}" data-v-78e0f183><span class="sr-only" data-v-78e0f183>${ssrInterpolate((_c2 = vg.color) == null ? void 0 : _c2.name)}</span></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeSizes).length) {
        _push(`<div class="mt-6" data-v-78e0f183><div class="flex items-center justify-between" data-v-78e0f183><div class="text-xs uppercase tracking-widest" data-v-78e0f183>Size</div><div class="text-xs text-text_color/70" data-v-78e0f183>`);
        if (unref(inStock)) {
          _push(`<span data-v-78e0f183>In Stock</span>`);
        } else {
          _push(`<span data-v-78e0f183>Unavailable</span>`);
        }
        _push(`</div></div><div class="mt-2 grid grid-cols-5 gap-2" data-v-78e0f183><!--[-->`);
        ssrRenderList(unref(activeSizes), (s) => {
          var _a2;
          _push(`<button type="button" class="${ssrRenderClass([[
            s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
            unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
          ], "border px-2 py-2 text-sm text-text_color"])}"${ssrIncludeBooleanAttr(!s.available) ? " disabled" : ""} data-v-78e0f183>${ssrInterpolate((_a2 = s.size) == null ? void 0 : _a2.name)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-6 space-y-3" data-v-78e0f183><button type="button" class="btn btn--primary w-full"${ssrIncludeBooleanAttr(!unref(selectedVariantSlug)) ? " disabled" : ""} data-v-78e0f183><span class="btn__text" data-v-78e0f183>Add to Cart</span><span class="btn__fill" data-v-78e0f183></span></button></div><ul class="mt-5 space-y-2 text-sm text-text_color/80" data-v-78e0f183><li data-v-78e0f183>\u2713 Free delivery over \u20AC250,-</li><li data-v-78e0f183>\u2713 Easy returns within 14 days</li></ul></div></aside></div>`);
      _push(ssrRenderComponent(_component_ProductAccordion, {
        items: [
          {
            title: "Description",
            content: ((_f = unref(product)) == null ? void 0 : _f.description) || "No additional description."
          },
          {
            title: "Size & Fit",
            content: "Coming soon \u2013 sizing guidance for this product."
          },
          {
            title: "Shipping & Returns",
            content: `We offer UPS Standard, Express Saver, and Express shipping options. Final prices are calculated at checkout and exclude import duties which will be charged by UPS after clearing customs.

      We accept returns within 14 days. We kindly remind you that sale items can only be refunded as store credit.`,
            link: { href: "#", label: "More info" }
          }
        ]
      }, null, _parent));
      _push(`</div><div class="block md:hidden mt-2 pt-8" id="mobile-product-wrap" data-v-78e0f183>`);
      if (unref(variantGroups).length) {
        _push(`<div class="keen-slider" data-v-78e0f183><!--[-->`);
        ssrRenderList(((_g = unref(variantGroups)[unref(activeColorIndex)]) == null ? void 0 : _g.gallery) || [], (img, i) => {
          _push(`<div class="keen-slider__slide" data-v-78e0f183><img${ssrRenderAttr("src", img.image)}${ssrRenderAttr("alt", img.alt_text || unref(productName))} class="w-full h-auto object-cover border-t border-b border-text_color/30" data-v-78e0f183></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(variantGroups).length) {
        _push(`<div class="flex items-center justify-center gap-2 py-3" data-v-78e0f183><!--[-->`);
        ssrRenderList(unref(dots), (idx) => {
          _push(`<button type="button" class="flex items-center text-text_color"${ssrRenderAttr("aria-label", `Go to slide ${idx + 1}`)} data-v-78e0f183>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: unref(currentSlide) === idx ? "lucide:minus" : "lucide:dot",
            class: "w-8 h-8 my-auto"
          }, null, _parent));
          _push(`</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(variantGroups).length) {
        _push(`<div class="pt-4 px-4" data-v-78e0f183><div class="text-xs uppercase tracking-widest mb-2" data-v-78e0f183>Color</div><div class="flex gap-3" data-v-78e0f183><!--[-->`);
        ssrRenderList(unref(variantGroups), (vg, idx) => {
          var _a2, _b2;
          _push(`<button type="button" class="${ssrRenderClass([unref(activeColorIndex) === idx ? "ring-2 ring-text_color" : "", "w-8 h-8 border"])}" style="${ssrRenderStyle({ backgroundColor: swatchBg((_a2 = vg.color) == null ? void 0 : _a2.image) })}" data-v-78e0f183><span class="sr-only" data-v-78e0f183>${ssrInterpolate((_b2 = vg.color) == null ? void 0 : _b2.name)}</span></button>`);
        });
        _push(`<!--]--></div>`);
        if (unref(activeColorName)) {
          _push(`<p class="mt-1 text-sm text-text_color" data-v-78e0f183> Color: ${ssrInterpolate(unref(activeColorName))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="px-4 mt-4" data-v-78e0f183>`);
      _push(ssrRenderComponent(_component_ProductAccordion, {
        items: [
          { title: "Description", content: ((_h = unref(product)) == null ? void 0 : _h.description) || "No additional description." },
          { title: "Size & Fit", content: "Coming soon \u2013 sizing guidance for this product." },
          {
            title: "Shipping & Return",
            content: `We offer UPS Standard, Express Saver, and Express shipping options. 
Final prices are calculated at checkout and exclude import duties.
We accept returns within 14 days. Sale items can only be refunded as store credit.`,
            link: { href: "#", label: "More info" }
          }
        ]
      }, null, _parent));
      _push(`</div><div class="sticky bottom-0 left-0 w-full bg-background_color z-40" data-v-78e0f183><div class="flex flex-col items-start py-6 px-4 gap-4" data-v-78e0f183><div data-v-78e0f183><h1 class="text-sm font-light leading-tight text-text_color" data-v-78e0f183>${ssrInterpolate(unref(productCategory))}</h1><h1 class="text-lg font-medium leading-tight text-text_color" data-v-78e0f183>${ssrInterpolate(unref(productName))}</h1></div><div class="text-right" data-v-78e0f183>`);
      if ((_i = unref(product)) == null ? void 0 : _i.discount) {
        _push(`<div class="space-x-1" data-v-78e0f183><span class="text-base font-semibold text-text_color" data-v-78e0f183>\u20AC${ssrInterpolate((_j = unref(product)) == null ? void 0 : _j.discount_price)}</span><span class="line-through text-text_color text-sm" data-v-78e0f183>\u20AC${ssrInterpolate((_k = unref(product)) == null ? void 0 : _k.price)}</span></div>`);
      } else {
        _push(`<div class="text-base font-semibold text-text_color" data-v-78e0f183>\u20AC${ssrInterpolate((_l = unref(product)) == null ? void 0 : _l.price)}</div>`);
      }
      _push(`</div><button type="button" class="w-full py-2 my-auto items-center text-center text-base font-medium tracking-wider bg-text_color text-background_color" data-v-78e0f183><span class="my-auto" data-v-78e0f183>ADD</span></button></div></div>`);
      _push(ssrRenderComponent(unref(TransitionRoot), { show: unref(mobilePanelOpen) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              class: "relative z-50",
              onClose: ($event) => mobilePanelOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="fixed inset-0 bg-text_color/30" aria-hidden="true" data-v-78e0f183${_scopeId2}></div><div class="fixed bottom-0 w-screen" data-v-78e0f183${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    enter: "transform transition ease-out duration-300",
                    "enter-from": "translate-y-full",
                    "enter-to": "translate-y-0",
                    leave: "transform transition ease-in duration-200",
                    "leave-from": "translate-y-0",
                    "leave-to": "translate-y-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "w-full bg-background_color p-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex justify-between items-center mb-4" data-v-78e0f183${_scopeId4}><h2 class="text-base uppercase tracking-wider font-medium" data-v-78e0f183${_scopeId4}>Select Size</h2></div>`);
                              if (unref(activeSizes).length) {
                                _push5(`<div class="mt-4" data-v-78e0f183${_scopeId4}><div class="text-xs uppercase tracking-widest mb-2" data-v-78e0f183${_scopeId4}>Size</div><div class="flex flex-col justify-center gap-3 items-center" data-v-78e0f183${_scopeId4}><!--[-->`);
                                ssrRenderList(unref(activeSizes), (s) => {
                                  var _a2;
                                  _push5(`<button type="button" class="${ssrRenderClass([[
                                    s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                    unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                  ], "border px-3 py-2 text-sm w-fit"])}"${ssrIncludeBooleanAttr(!s.available) ? " disabled" : ""} data-v-78e0f183${_scopeId4}>${ssrInterpolate((_a2 = s.size) == null ? void 0 : _a2.name)}</button>`);
                                });
                                _push5(`<!--]--></div></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<button type="button" class="mt-6 w-full py-3 text-base font-medium tracking-wider bg-text_color text-background_color disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(!unref(selectedVariantSlug)) ? " disabled" : ""} data-v-78e0f183${_scopeId4}> ADD TO CART </button>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                                  createVNode("h2", { class: "text-base uppercase tracking-wider font-medium" }, "Select Size")
                                ]),
                                unref(activeSizes).length ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mt-4"
                                }, [
                                  createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Size"),
                                  createVNode("div", { class: "flex flex-col justify-center gap-3 items-center" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(activeSizes), (s) => {
                                      var _a2;
                                      return openBlock(), createBlock("button", {
                                        key: s.slug,
                                        type: "button",
                                        onClick: ($event) => selectSize(s),
                                        class: ["border px-3 py-2 text-sm w-fit", [
                                          s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                          unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                        ]],
                                        disabled: !s.available
                                      }, toDisplayString((_a2 = s.size) == null ? void 0 : _a2.name), 11, ["onClick", "disabled"]);
                                    }), 128))
                                  ])
                                ])) : createCommentVNode("", true),
                                createVNode("button", {
                                  type: "button",
                                  class: "mt-6 w-full py-3 text-base font-medium tracking-wider bg-text_color text-background_color disabled:opacity-50 disabled:cursor-not-allowed",
                                  disabled: !unref(selectedVariantSlug),
                                  onClick: addToCart
                                }, " ADD TO CART ", 8, ["disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "w-full bg-background_color p-6" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                                createVNode("h2", { class: "text-base uppercase tracking-wider font-medium" }, "Select Size")
                              ]),
                              unref(activeSizes).length ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-4"
                              }, [
                                createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Size"),
                                createVNode("div", { class: "flex flex-col justify-center gap-3 items-center" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(activeSizes), (s) => {
                                    var _a2;
                                    return openBlock(), createBlock("button", {
                                      key: s.slug,
                                      type: "button",
                                      onClick: ($event) => selectSize(s),
                                      class: ["border px-3 py-2 text-sm w-fit", [
                                        s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                        unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                      ]],
                                      disabled: !s.available
                                    }, toDisplayString((_a2 = s.size) == null ? void 0 : _a2.name), 11, ["onClick", "disabled"]);
                                  }), 128))
                                ])
                              ])) : createCommentVNode("", true),
                              createVNode("button", {
                                type: "button",
                                class: "mt-6 w-full py-3 text-base font-medium tracking-wider bg-text_color text-background_color disabled:opacity-50 disabled:cursor-not-allowed",
                                disabled: !unref(selectedVariantSlug),
                                onClick: addToCart
                              }, " ADD TO CART ", 8, ["disabled"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "fixed inset-0 bg-text_color/30",
                      "aria-hidden": "true"
                    }),
                    createVNode("div", { class: "fixed bottom-0 w-screen" }, [
                      createVNode(unref(TransitionChild), {
                        enter: "transform transition ease-out duration-300",
                        "enter-from": "translate-y-full",
                        "enter-to": "translate-y-0",
                        leave: "transform transition ease-in duration-200",
                        "leave-from": "translate-y-0",
                        "leave-to": "translate-y-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "w-full bg-background_color p-6" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                                createVNode("h2", { class: "text-base uppercase tracking-wider font-medium" }, "Select Size")
                              ]),
                              unref(activeSizes).length ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-4"
                              }, [
                                createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Size"),
                                createVNode("div", { class: "flex flex-col justify-center gap-3 items-center" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(activeSizes), (s) => {
                                    var _a2;
                                    return openBlock(), createBlock("button", {
                                      key: s.slug,
                                      type: "button",
                                      onClick: ($event) => selectSize(s),
                                      class: ["border px-3 py-2 text-sm w-fit", [
                                        s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                        unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                      ]],
                                      disabled: !s.available
                                    }, toDisplayString((_a2 = s.size) == null ? void 0 : _a2.name), 11, ["onClick", "disabled"]);
                                  }), 128))
                                ])
                              ])) : createCommentVNode("", true),
                              createVNode("button", {
                                type: "button",
                                class: "mt-6 w-full py-3 text-base font-medium tracking-wider bg-text_color text-background_color disabled:opacity-50 disabled:cursor-not-allowed",
                                disabled: !unref(selectedVariantSlug),
                                onClick: addToCart
                              }, " ADD TO CART ", 8, ["disabled"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Dialog), {
                class: "relative z-50",
                onClose: ($event) => mobilePanelOpen.value = false
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "fixed inset-0 bg-text_color/30",
                    "aria-hidden": "true"
                  }),
                  createVNode("div", { class: "fixed bottom-0 w-screen" }, [
                    createVNode(unref(TransitionChild), {
                      enter: "transform transition ease-out duration-300",
                      "enter-from": "translate-y-full",
                      "enter-to": "translate-y-0",
                      leave: "transform transition ease-in duration-200",
                      "leave-from": "translate-y-0",
                      "leave-to": "translate-y-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(DialogPanel), { class: "w-full bg-background_color p-6" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                              createVNode("h2", { class: "text-base uppercase tracking-wider font-medium" }, "Select Size")
                            ]),
                            unref(activeSizes).length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-4"
                            }, [
                              createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Size"),
                              createVNode("div", { class: "flex flex-col justify-center gap-3 items-center" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(activeSizes), (s) => {
                                  var _a2;
                                  return openBlock(), createBlock("button", {
                                    key: s.slug,
                                    type: "button",
                                    onClick: ($event) => selectSize(s),
                                    class: ["border px-3 py-2 text-sm w-fit", [
                                      s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                      unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                    ]],
                                    disabled: !s.available
                                  }, toDisplayString((_a2 = s.size) == null ? void 0 : _a2.name), 11, ["onClick", "disabled"]);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true),
                            createVNode("button", {
                              type: "button",
                              class: "mt-6 w-full py-3 text-base font-medium tracking-wider bg-text_color text-background_color disabled:opacity-50 disabled:cursor-not-allowed",
                              disabled: !unref(selectedVariantSlug),
                              onClick: addToCart
                            }, " ADD TO CART ", 8, ["disabled"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[collection]/[...product].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____product_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-78e0f183"]]);

export { ____product_ as default };
//# sourceMappingURL=_...product_-DddCkwm7.mjs.map
