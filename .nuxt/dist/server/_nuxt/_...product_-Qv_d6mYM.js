import { u as useCartStore, _ as __nuxt_component_0$1 } from "./AppNavigation-CyRCE6k1.js";
import { _ as __nuxt_component_0$2 } from "./nuxt-link-7pp3EPK3.js";
import { _ as __nuxt_component_0, u as useAsyncData } from "./index-qGNUStbk.js";
import { defineComponent, ref, computed, mergeProps, unref, useSSRContext, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, resolveDynamicComponent, Transition, withAsyncContext, watch, nextTick, createTextVNode, Fragment, renderList, withDirectives, isRef, vModelText } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderVNode, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useKeenSlider } from "keen-slider/vue.es.js";
/* empty css                         */
import { _ as _export_sfc, c as useRoute, k as useNuxtApp, e as useRuntimeConfig } from "../server.mjs";
import { Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot, Dialog, TransitionChild, DialogPanel } from "@headlessui/vue";
import { u as useToast } from "./useToast-pOzf8V9B.js";
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
  __name: "ProductGallerySlider",
  __ssrInlineRender: true,
  props: {
    images: {},
    productName: {}
  },
  setup(__props) {
    const currentSlide = ref(0);
    const [sliderRef, slider] = useKeenSlider({
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
      const _component_Icon = __nuxt_component_0;
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
      const _component_Icon = __nuxt_component_0;
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
    const cartStore = useCartStore();
    const mobilePanelOpen = ref(false);
    const currentSlide = ref(0);
    const activeColorIndex = ref(0);
    const selectedVariantSlug = ref("");
    const quantity = ref(1);
    const collectionParam = computed(() => String(route.params.collection ?? ""));
    const productSlugParam = computed(() => String(route.params.product ?? ""));
    const currentCartQuantity = computed(() => {
      if (!selectedVariantSlug.value) return 0;
      return cartStore.getVariantQuantity(selectedVariantSlug.value);
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
    const product = computed(() => data.value ?? null);
    const productName = computed(() => product.value?.name ?? "");
    const productCategory = computed(() => product.value?.category ?? "");
    const variantGroups = computed(() => product.value?.variant_groups ?? []);
    const activeSizes = computed(() => variantGroups.value[activeColorIndex.value]?.sizes ?? []);
    const inStock = computed(() => activeSizes.value.some((s) => s?.available));
    const activeColorName = computed(() => variantGroups.value[activeColorIndex.value]?.color?.name ?? "");
    const imagesToShow = computed(() => variantGroups.value[activeColorIndex.value]?.gallery ?? []);
    const [sliderRef, slider] = useKeenSlider({
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
        if (!p) return;
        const isVariantSlug = productSlugParam.value.includes("-") && productSlugParam.value.split("-").length > 1;
        if (isVariantSlug) {
          const groupIndex = p.variant_groups?.findIndex(
            (g) => (g?.sizes ?? []).some((s) => s?.slug === productSlugParam.value)
          ) ?? -1;
          if (groupIndex >= 0) {
            activeColorIndex.value = groupIndex;
            const match = (p.variant_groups?.[groupIndex]?.sizes ?? []).find((s) => s?.slug === productSlugParam.value && s?.available);
            if (match) {
              selectedVariantSlug.value = match.slug;
            } else {
              const firstAvail2 = (p.variant_groups?.[groupIndex]?.sizes ?? []).find((s) => s?.available);
              selectedVariantSlug.value = firstAvail2?.slug ?? "";
            }
            return;
          }
        }
        activeColorIndex.value = 0;
        const firstAvail = (p.variant_groups?.[0]?.sizes ?? []).find((s) => s?.available);
        selectedVariantSlug.value = firstAvail?.slug ?? "";
      },
      { immediate: true }
    );
    watch(
      () => variantGroups.value[activeColorIndex.value]?.gallery?.length ?? 0,
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
      if (!s?.available) return;
      selectedVariantSlug.value = s.slug;
    }
    function incrementQuantity() {
      if (quantity.value < 99) {
        quantity.value++;
      }
    }
    function decrementQuantity() {
      if (quantity.value > 1) {
        quantity.value--;
      }
    }
    function validateQuantity() {
      if (quantity.value < 1) {
        quantity.value = 1;
      } else if (quantity.value > 99) {
        quantity.value = 99;
      }
    }
    async function addToCart() {
      if (!selectedVariantSlug.value) {
        error("Please select a size");
        return;
      }
      try {
        await cartStore.addToCart(selectedVariantSlug.value, quantity.value);
        const totalQuantity = currentCartQuantity.value;
        success(`Added ${quantity.value} to cart (total: ${totalQuantity})`);
        mobilePanelOpen.value = false;
        quantity.value = 1;
      } catch (e) {
        const msg = e?.data?.detail || e?.statusMessage || "Could not add to cart";
        error(msg);
        console.error("Add to cart failed", e);
      }
    }
    function swatchBg(hex) {
      if (!hex) return "#e5e7eb";
      return `#${hex}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_ProductGallerySlider = __nuxt_component_2;
      const _component_Icon = __nuxt_component_0;
      const _component_ProductAccordion = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-2b99daf1>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-2" data-v-2b99daf1><div class="flex justify-start w-full" data-v-2b99daf1><div class="flex items-center py-1 text-[12px] md:text-sm text-text_color uppercase tracking-widest" data-v-2b99daf1>`);
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
      _push(`<span class="pr-1 md:pr-2" data-v-2b99daf1>/</span>`);
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
      _push(`<span class="pr-1 md:pr-2" data-v-2b99daf1>/</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/collections/${unref(product)?.collection_slug}`,
        class: "hover:underline pr-1 md:pr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(product)?.collection_slug)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(product)?.collection_slug), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="pr-1 md:pr-2" data-v-2b99daf1>/</span><span class="pr-1 md:pr-2" data-v-2b99daf1>${ssrInterpolate(unref(productName))}</span></div></div></div><div class="hidden md:block" data-v-2b99daf1><div class="relative grid grid-cols-12 gap-8 pt-8 mt-2 md:mt-6 px-4 md:px-8 items-start" data-v-2b99daf1><div class="md:col-span-8" data-v-2b99daf1>`);
      if (unref(imagesToShow).length > 0) {
        _push(ssrRenderComponent(_component_ProductGallerySlider, {
          images: unref(imagesToShow),
          "product-name": unref(productName),
          key: `gallery-${unref(activeColorIndex)}`
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><aside class="md:col-span-4 md:sticky md:top-4 md:self-start" data-v-2b99daf1><div class="bg-background_color border border-text_color/30 p-5 align-self:start" data-v-2b99daf1><div class="flex items-start justify-between" data-v-2b99daf1><div data-v-2b99daf1><h1 class="text-sm font-light leading-tight text-text_color" data-v-2b99daf1>${ssrInterpolate(unref(productCategory))}</h1><h1 class="text-xl font-medium leading-tight text-text_color" data-v-2b99daf1>${ssrInterpolate(unref(productName))}</h1>`);
      if (unref(activeColorName)) {
        _push(`<p class="mt-1 text-sm text-text_color" data-v-2b99daf1>Color: ${ssrInterpolate(unref(activeColorName))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-right" data-v-2b99daf1>`);
      if (unref(product)?.discount) {
        _push(`<div class="space-x-2" data-v-2b99daf1><span class="text-lg font-semibold text-error_text_color" data-v-2b99daf1>€${ssrInterpolate(unref(product)?.discount_price)}</span><span class="line-through text-text_color" data-v-2b99daf1>€${ssrInterpolate(unref(product)?.price)}</span></div>`);
      } else {
        _push(`<div class="text-lg font-semibold text-text_color" data-v-2b99daf1>€${ssrInterpolate(unref(product)?.price)}</div>`);
      }
      _push(`</div></div>`);
      if (unref(variantGroups).length) {
        _push(`<div class="mt-4" data-v-2b99daf1><div class="text-xs uppercase tracking-widest mb-2" data-v-2b99daf1>Color</div><div class="flex gap-3" data-v-2b99daf1><!--[-->`);
        ssrRenderList(unref(variantGroups), (vg, idx) => {
          _push(`<button type="button" class="${ssrRenderClass([unref(activeColorIndex) === idx ? "ring-2 ring-text_color" : "", "w-8 h-8 border relative"])}"${ssrRenderAttr("title", vg.color?.name)} style="${ssrRenderStyle({ backgroundColor: swatchBg(vg.color?.image) })}" data-v-2b99daf1><span class="sr-only" data-v-2b99daf1>${ssrInterpolate(vg.color?.name)}</span></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeSizes).length) {
        _push(`<div class="mt-6" data-v-2b99daf1><div class="flex items-center justify-between" data-v-2b99daf1><div class="text-xs uppercase tracking-widest" data-v-2b99daf1>Size</div><div class="text-xs text-text_color/70" data-v-2b99daf1>`);
        if (unref(inStock)) {
          _push(`<span data-v-2b99daf1>In Stock</span>`);
        } else {
          _push(`<span data-v-2b99daf1>Unavailable</span>`);
        }
        _push(`</div></div><div class="mt-2 grid grid-cols-5 gap-2" data-v-2b99daf1><!--[-->`);
        ssrRenderList(unref(activeSizes), (s) => {
          _push(`<button type="button" class="${ssrRenderClass([[
            s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
            unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
          ], "border px-2 py-2 text-sm text-text_color"])}"${ssrIncludeBooleanAttr(!s.available) ? " disabled" : ""} data-v-2b99daf1>${ssrInterpolate(s.size?.name)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-6" data-v-2b99daf1><div class="text-xs uppercase tracking-widest mb-2" data-v-2b99daf1>Quantity</div><div class="flex items-center gap-3" data-v-2b99daf1><button type="button"${ssrIncludeBooleanAttr(unref(quantity) <= 1) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-40 cursor-not-allowed": unref(quantity) <= 1 }, "w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200"])}" data-v-2b99daf1>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:minus",
        class: "w-4 h-4 text-text_color"
      }, null, _parent));
      _push(`</button><input${ssrRenderAttr("value", unref(quantity))} type="number" min="1" max="99" class="w-16 h-10 text-center border border-text_color/30 bg-background_color text-text_color focus:outline-none focus:border-text_color" data-v-2b99daf1><button type="button"${ssrIncludeBooleanAttr(unref(quantity) >= 99) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-40 cursor-not-allowed": unref(quantity) >= 99 }, "w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200"])}" data-v-2b99daf1>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:plus",
        class: "w-4 h-4 text-text_color"
      }, null, _parent));
      _push(`</button></div>`);
      if (unref(currentCartQuantity) > 0) {
        _push(`<p class="mt-2 text-xs text-text_color/70" data-v-2b99daf1>${ssrInterpolate(unref(currentCartQuantity))} already in cart </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-6 space-y-3" data-v-2b99daf1><button type="button" class="btn btn--primary w-full"${ssrIncludeBooleanAttr(!unref(selectedVariantSlug)) ? " disabled" : ""} data-v-2b99daf1><span class="btn__text" data-v-2b99daf1>Add to Cart</span><span class="btn__fill" data-v-2b99daf1></span></button></div><ul class="mt-5 space-y-2 text-sm text-text_color/80" data-v-2b99daf1><li data-v-2b99daf1>✓ Free delivery over €250,-</li><li data-v-2b99daf1>✓ Easy returns within 14 days</li></ul></div></aside></div>`);
      _push(ssrRenderComponent(_component_ProductAccordion, {
        items: [
          {
            title: "Description",
            content: unref(product)?.description || "No additional description."
          },
          {
            title: "Size & Fit",
            content: "Coming soon – sizing guidance for this product."
          },
          {
            title: "Shipping & Returns",
            content: `We offer UPS Standard, Express Saver, and Express shipping options. Final prices are calculated at checkout and exclude import duties which will be charged by UPS after clearing customs.

      We accept returns within 14 days. We kindly remind you that sale items can only be refunded as store credit.`,
            link: { href: "#", label: "More info" }
          }
        ]
      }, null, _parent));
      _push(`</div><div class="block md:hidden mt-2 pt-8" id="mobile-product-wrap" data-v-2b99daf1>`);
      if (unref(variantGroups).length) {
        _push(`<div class="keen-slider" data-v-2b99daf1><!--[-->`);
        ssrRenderList(unref(variantGroups)[unref(activeColorIndex)]?.gallery || [], (img, i) => {
          _push(`<div class="keen-slider__slide" data-v-2b99daf1><img${ssrRenderAttr("src", img.image)}${ssrRenderAttr("alt", img.alt_text || unref(productName))} class="w-full h-auto object-cover border-t border-b border-text_color/30" data-v-2b99daf1></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(variantGroups).length) {
        _push(`<div class="flex items-center justify-center gap-2 py-3" data-v-2b99daf1><!--[-->`);
        ssrRenderList(unref(dots), (idx) => {
          _push(`<button type="button" class="flex items-center text-text_color"${ssrRenderAttr("aria-label", `Go to slide ${idx + 1}`)} data-v-2b99daf1>`);
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
        _push(`<div class="pt-4 px-4" data-v-2b99daf1><div class="text-xs uppercase tracking-widest mb-2" data-v-2b99daf1>Color</div><div class="flex gap-3" data-v-2b99daf1><!--[-->`);
        ssrRenderList(unref(variantGroups), (vg, idx) => {
          _push(`<button type="button" class="${ssrRenderClass([unref(activeColorIndex) === idx ? "ring-2 ring-text_color" : "", "w-8 h-8 border"])}" style="${ssrRenderStyle({ backgroundColor: swatchBg(vg.color?.image) })}" data-v-2b99daf1><span class="sr-only" data-v-2b99daf1>${ssrInterpolate(vg.color?.name)}</span></button>`);
        });
        _push(`<!--]--></div>`);
        if (unref(activeColorName)) {
          _push(`<p class="mt-1 text-sm text-text_color" data-v-2b99daf1> Color: ${ssrInterpolate(unref(activeColorName))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="px-4 mt-4" data-v-2b99daf1>`);
      _push(ssrRenderComponent(_component_ProductAccordion, {
        items: [
          { title: "Description", content: unref(product)?.description || "No additional description." },
          { title: "Size & Fit", content: "Coming soon – sizing guidance for this product." },
          {
            title: "Shipping & Return",
            content: `We offer UPS Standard, Express Saver, and Express shipping options. 
Final prices are calculated at checkout and exclude import duties.
We accept returns within 14 days. Sale items can only be refunded as store credit.`,
            link: { href: "#", label: "More info" }
          }
        ]
      }, null, _parent));
      _push(`</div><div class="sticky bottom-0 left-0 w-full bg-background_color z-40" data-v-2b99daf1><div class="flex flex-col items-start py-6 px-4 gap-4" data-v-2b99daf1><div data-v-2b99daf1><h1 class="text-sm font-light leading-tight text-text_color" data-v-2b99daf1>${ssrInterpolate(unref(productCategory))}</h1><h1 class="text-lg font-medium leading-tight text-text_color" data-v-2b99daf1>${ssrInterpolate(unref(productName))}</h1></div><div class="text-right" data-v-2b99daf1>`);
      if (unref(product)?.discount) {
        _push(`<div class="space-x-1" data-v-2b99daf1><span class="text-base font-semibold text-text_color" data-v-2b99daf1>€${ssrInterpolate(unref(product)?.discount_price)}</span><span class="line-through text-text_color text-sm" data-v-2b99daf1>€${ssrInterpolate(unref(product)?.price)}</span></div>`);
      } else {
        _push(`<div class="text-base font-semibold text-text_color" data-v-2b99daf1>€${ssrInterpolate(unref(product)?.price)}</div>`);
      }
      _push(`</div><button type="button" class="w-full py-2 my-auto items-center text-center text-base font-medium tracking-wider bg-text_color text-background_color" data-v-2b99daf1><span class="my-auto" data-v-2b99daf1>ADD</span></button></div></div>`);
      _push(ssrRenderComponent(unref(TransitionRoot), { show: unref(mobilePanelOpen) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              class: "relative z-50",
              onClose: ($event) => mobilePanelOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="fixed inset-0 bg-text_color/30" aria-hidden="true" data-v-2b99daf1${_scopeId2}></div><div class="fixed bottom-0 w-screen" data-v-2b99daf1${_scopeId2}>`);
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
                              _push5(`<div class="flex justify-between items-center mb-4" data-v-2b99daf1${_scopeId4}><h2 class="text-base uppercase tracking-wider font-medium" data-v-2b99daf1${_scopeId4}>Select Size &amp; Quantity</h2></div>`);
                              if (unref(activeSizes).length) {
                                _push5(`<div class="mt-4" data-v-2b99daf1${_scopeId4}><div class="text-xs uppercase tracking-widest mb-2" data-v-2b99daf1${_scopeId4}>Size</div><div class="flex flex-col justify-center gap-3 items-center" data-v-2b99daf1${_scopeId4}><!--[-->`);
                                ssrRenderList(unref(activeSizes), (s) => {
                                  _push5(`<button type="button" class="${ssrRenderClass([[
                                    s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                    unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                  ], "border px-3 py-2 text-sm w-fit"])}"${ssrIncludeBooleanAttr(!s.available) ? " disabled" : ""} data-v-2b99daf1${_scopeId4}>${ssrInterpolate(s.size?.name)}</button>`);
                                });
                                _push5(`<!--]--></div></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="mt-6" data-v-2b99daf1${_scopeId4}><div class="text-xs uppercase tracking-widest mb-2" data-v-2b99daf1${_scopeId4}>Quantity</div><div class="flex items-center justify-center gap-3" data-v-2b99daf1${_scopeId4}><button type="button"${ssrIncludeBooleanAttr(unref(quantity) <= 1) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-40 cursor-not-allowed": unref(quantity) <= 1 }, "w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200"])}" data-v-2b99daf1${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "lucide:minus",
                                class: "w-4 h-4 text-text_color"
                              }, null, _parent5, _scopeId4));
                              _push5(`</button><input${ssrRenderAttr("value", unref(quantity))} type="number" min="1" max="99" class="w-16 h-10 text-center border border-text_color/30 bg-background_color text-text_color focus:outline-none focus:border-text_color" data-v-2b99daf1${_scopeId4}><button type="button"${ssrIncludeBooleanAttr(unref(quantity) >= 99) ? " disabled" : ""} class="${ssrRenderClass([{ "opacity-40 cursor-not-allowed": unref(quantity) >= 99 }, "w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200"])}" data-v-2b99daf1${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "lucide:plus",
                                class: "w-4 h-4 text-text_color"
                              }, null, _parent5, _scopeId4));
                              _push5(`</button></div>`);
                              if (unref(currentCartQuantity) > 0) {
                                _push5(`<p class="mt-2 text-xs text-center text-text_color/70" data-v-2b99daf1${_scopeId4}>${ssrInterpolate(unref(currentCartQuantity))} already in cart </p>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`</div><button type="button" class="mt-6 w-full py-3 text-base font-medium tracking-wider bg-text_color text-background_color disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(!unref(selectedVariantSlug)) ? " disabled" : ""} data-v-2b99daf1${_scopeId4}> ADD TO CART </button>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                                  createVNode("h2", { class: "text-base uppercase tracking-wider font-medium" }, "Select Size & Quantity")
                                ]),
                                unref(activeSizes).length ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mt-4"
                                }, [
                                  createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Size"),
                                  createVNode("div", { class: "flex flex-col justify-center gap-3 items-center" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(activeSizes), (s) => {
                                      return openBlock(), createBlock("button", {
                                        key: s.slug,
                                        type: "button",
                                        onClick: ($event) => selectSize(s),
                                        class: ["border px-3 py-2 text-sm w-fit", [
                                          s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                          unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                        ]],
                                        disabled: !s.available
                                      }, toDisplayString(s.size?.name), 11, ["onClick", "disabled"]);
                                    }), 128))
                                  ])
                                ])) : createCommentVNode("", true),
                                createVNode("div", { class: "mt-6" }, [
                                  createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Quantity"),
                                  createVNode("div", { class: "flex items-center justify-center gap-3" }, [
                                    createVNode("button", {
                                      type: "button",
                                      onClick: decrementQuantity,
                                      class: ["w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200", { "opacity-40 cursor-not-allowed": unref(quantity) <= 1 }],
                                      disabled: unref(quantity) <= 1
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:minus",
                                        class: "w-4 h-4 text-text_color"
                                      })
                                    ], 10, ["disabled"]),
                                    withDirectives(createVNode("input", {
                                      "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                      type: "number",
                                      min: "1",
                                      max: "99",
                                      class: "w-16 h-10 text-center border border-text_color/30 bg-background_color text-text_color focus:outline-none focus:border-text_color",
                                      onBlur: validateQuantity
                                    }, null, 40, ["onUpdate:modelValue"]), [
                                      [
                                        vModelText,
                                        unref(quantity),
                                        void 0,
                                        { number: true }
                                      ]
                                    ]),
                                    createVNode("button", {
                                      type: "button",
                                      onClick: incrementQuantity,
                                      class: ["w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200", { "opacity-40 cursor-not-allowed": unref(quantity) >= 99 }],
                                      disabled: unref(quantity) >= 99
                                    }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:plus",
                                        class: "w-4 h-4 text-text_color"
                                      })
                                    ], 10, ["disabled"])
                                  ]),
                                  unref(currentCartQuantity) > 0 ? (openBlock(), createBlock("p", {
                                    key: 0,
                                    class: "mt-2 text-xs text-center text-text_color/70"
                                  }, toDisplayString(unref(currentCartQuantity)) + " already in cart ", 1)) : createCommentVNode("", true)
                                ]),
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
                                createVNode("h2", { class: "text-base uppercase tracking-wider font-medium" }, "Select Size & Quantity")
                              ]),
                              unref(activeSizes).length ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-4"
                              }, [
                                createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Size"),
                                createVNode("div", { class: "flex flex-col justify-center gap-3 items-center" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(activeSizes), (s) => {
                                    return openBlock(), createBlock("button", {
                                      key: s.slug,
                                      type: "button",
                                      onClick: ($event) => selectSize(s),
                                      class: ["border px-3 py-2 text-sm w-fit", [
                                        s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                        unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                      ]],
                                      disabled: !s.available
                                    }, toDisplayString(s.size?.name), 11, ["onClick", "disabled"]);
                                  }), 128))
                                ])
                              ])) : createCommentVNode("", true),
                              createVNode("div", { class: "mt-6" }, [
                                createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Quantity"),
                                createVNode("div", { class: "flex items-center justify-center gap-3" }, [
                                  createVNode("button", {
                                    type: "button",
                                    onClick: decrementQuantity,
                                    class: ["w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200", { "opacity-40 cursor-not-allowed": unref(quantity) <= 1 }],
                                    disabled: unref(quantity) <= 1
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:minus",
                                      class: "w-4 h-4 text-text_color"
                                    })
                                  ], 10, ["disabled"]),
                                  withDirectives(createVNode("input", {
                                    "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                    type: "number",
                                    min: "1",
                                    max: "99",
                                    class: "w-16 h-10 text-center border border-text_color/30 bg-background_color text-text_color focus:outline-none focus:border-text_color",
                                    onBlur: validateQuantity
                                  }, null, 40, ["onUpdate:modelValue"]), [
                                    [
                                      vModelText,
                                      unref(quantity),
                                      void 0,
                                      { number: true }
                                    ]
                                  ]),
                                  createVNode("button", {
                                    type: "button",
                                    onClick: incrementQuantity,
                                    class: ["w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200", { "opacity-40 cursor-not-allowed": unref(quantity) >= 99 }],
                                    disabled: unref(quantity) >= 99
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:plus",
                                      class: "w-4 h-4 text-text_color"
                                    })
                                  ], 10, ["disabled"])
                                ]),
                                unref(currentCartQuantity) > 0 ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "mt-2 text-xs text-center text-text_color/70"
                                }, toDisplayString(unref(currentCartQuantity)) + " already in cart ", 1)) : createCommentVNode("", true)
                              ]),
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
                                createVNode("h2", { class: "text-base uppercase tracking-wider font-medium" }, "Select Size & Quantity")
                              ]),
                              unref(activeSizes).length ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-4"
                              }, [
                                createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Size"),
                                createVNode("div", { class: "flex flex-col justify-center gap-3 items-center" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(activeSizes), (s) => {
                                    return openBlock(), createBlock("button", {
                                      key: s.slug,
                                      type: "button",
                                      onClick: ($event) => selectSize(s),
                                      class: ["border px-3 py-2 text-sm w-fit", [
                                        s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                        unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                      ]],
                                      disabled: !s.available
                                    }, toDisplayString(s.size?.name), 11, ["onClick", "disabled"]);
                                  }), 128))
                                ])
                              ])) : createCommentVNode("", true),
                              createVNode("div", { class: "mt-6" }, [
                                createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Quantity"),
                                createVNode("div", { class: "flex items-center justify-center gap-3" }, [
                                  createVNode("button", {
                                    type: "button",
                                    onClick: decrementQuantity,
                                    class: ["w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200", { "opacity-40 cursor-not-allowed": unref(quantity) <= 1 }],
                                    disabled: unref(quantity) <= 1
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:minus",
                                      class: "w-4 h-4 text-text_color"
                                    })
                                  ], 10, ["disabled"]),
                                  withDirectives(createVNode("input", {
                                    "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                    type: "number",
                                    min: "1",
                                    max: "99",
                                    class: "w-16 h-10 text-center border border-text_color/30 bg-background_color text-text_color focus:outline-none focus:border-text_color",
                                    onBlur: validateQuantity
                                  }, null, 40, ["onUpdate:modelValue"]), [
                                    [
                                      vModelText,
                                      unref(quantity),
                                      void 0,
                                      { number: true }
                                    ]
                                  ]),
                                  createVNode("button", {
                                    type: "button",
                                    onClick: incrementQuantity,
                                    class: ["w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200", { "opacity-40 cursor-not-allowed": unref(quantity) >= 99 }],
                                    disabled: unref(quantity) >= 99
                                  }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:plus",
                                      class: "w-4 h-4 text-text_color"
                                    })
                                  ], 10, ["disabled"])
                                ]),
                                unref(currentCartQuantity) > 0 ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "mt-2 text-xs text-center text-text_color/70"
                                }, toDisplayString(unref(currentCartQuantity)) + " already in cart ", 1)) : createCommentVNode("", true)
                              ]),
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
                              createVNode("h2", { class: "text-base uppercase tracking-wider font-medium" }, "Select Size & Quantity")
                            ]),
                            unref(activeSizes).length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-4"
                            }, [
                              createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Size"),
                              createVNode("div", { class: "flex flex-col justify-center gap-3 items-center" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(activeSizes), (s) => {
                                  return openBlock(), createBlock("button", {
                                    key: s.slug,
                                    type: "button",
                                    onClick: ($event) => selectSize(s),
                                    class: ["border px-3 py-2 text-sm w-fit", [
                                      s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                      unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                    ]],
                                    disabled: !s.available
                                  }, toDisplayString(s.size?.name), 11, ["onClick", "disabled"]);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true),
                            createVNode("div", { class: "mt-6" }, [
                              createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Quantity"),
                              createVNode("div", { class: "flex items-center justify-center gap-3" }, [
                                createVNode("button", {
                                  type: "button",
                                  onClick: decrementQuantity,
                                  class: ["w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200", { "opacity-40 cursor-not-allowed": unref(quantity) <= 1 }],
                                  disabled: unref(quantity) <= 1
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "lucide:minus",
                                    class: "w-4 h-4 text-text_color"
                                  })
                                ], 10, ["disabled"]),
                                withDirectives(createVNode("input", {
                                  "onUpdate:modelValue": ($event) => isRef(quantity) ? quantity.value = $event : null,
                                  type: "number",
                                  min: "1",
                                  max: "99",
                                  class: "w-16 h-10 text-center border border-text_color/30 bg-background_color text-text_color focus:outline-none focus:border-text_color",
                                  onBlur: validateQuantity
                                }, null, 40, ["onUpdate:modelValue"]), [
                                  [
                                    vModelText,
                                    unref(quantity),
                                    void 0,
                                    { number: true }
                                  ]
                                ]),
                                createVNode("button", {
                                  type: "button",
                                  onClick: incrementQuantity,
                                  class: ["w-10 h-10 flex items-center justify-center border border-text_color/30 hover:bg-text_color/5 transition-colors duration-200", { "opacity-40 cursor-not-allowed": unref(quantity) >= 99 }],
                                  disabled: unref(quantity) >= 99
                                }, [
                                  createVNode(_component_Icon, {
                                    name: "lucide:plus",
                                    class: "w-4 h-4 text-text_color"
                                  })
                                ], 10, ["disabled"])
                              ]),
                              unref(currentCartQuantity) > 0 ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "mt-2 text-xs text-center text-text_color/70"
                              }, toDisplayString(unref(currentCartQuantity)) + " already in cart ", 1)) : createCommentVNode("", true)
                            ]),
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
const ____product_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b99daf1"]]);
export {
  ____product_ as default
};
//# sourceMappingURL=_...product_-Qv_d6mYM.js.map
