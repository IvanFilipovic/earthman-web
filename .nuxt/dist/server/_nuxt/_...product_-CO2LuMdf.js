import { _ as __nuxt_component_0$1 } from "./AppNavigation-B4JE81Gq.js";
import { c as __nuxt_component_0, e as useRoute, q as useAsyncData, g as useRuntimeConfig, d as useRouter, a as __nuxt_component_0$2, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, resolveDynamicComponent, Transition, useSSRContext, ref, computed, withAsyncContext, watch, nextTick, createTextVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderVNode, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Disclosure, DisclosureButton, DisclosurePanel, TransitionRoot, Dialog, TransitionChild, DialogPanel } from "@headlessui/vue";
import { u as useToast } from "./useToast-pOzf8V9B.js";
import { useKeenSlider } from "keen-slider/vue.es.js";
/* empty css                         */
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/kai/Projekti/webshop/node_modules/unctx/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/kai/Projekti/webshop/node_modules/defu/dist/defu.mjs";
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
    const mobilePanelOpen = ref(false);
    const currentSlide = ref(0);
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
    const config = useRuntimeConfig();
    const route = useRoute();
    const collectionParam = computed(() => String(route.params.collection ?? ""));
    const variantParam = computed(() => String(route.params.product ?? ""));
    const { success, error } = useToast();
    const activeColorIndex = ref(0);
    const selectedVariantSlug = ref("");
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      () => `product:${collectionParam.value}:${variantParam.value}`,
      async () => {
        const url = `${config.public.apiBase}/public/products/${collectionParam.value}/${variantParam.value}/`;
        return await $fetch(url);
      },
      { watch: [collectionParam, variantParam] }
    )), __temp = await __temp, __restore(), __temp);
    const product = computed(() => data.value ?? null);
    const productName = computed(() => product.value?.name ?? "");
    const productCategory = computed(() => product.value?.category ?? "");
    const variantGroups = computed(() => product.value?.variant_groups ?? []);
    const activeSizes = computed(() => variantGroups.value[activeColorIndex.value]?.sizes ?? []);
    const inStock = computed(() => activeSizes.value.some((s) => s?.available));
    const activeColorName = computed(() => variantGroups.value[activeColorIndex.value]?.color?.name ?? "");
    const imagesToShow = computed(
      () => variantGroups.value[activeColorIndex.value]?.gallery ?? []
    );
    watch(
      () => product.value,
      (p) => {
        if (!p) return;
        const groupIndex = p.variant_groups?.findIndex(
          (g) => (g?.sizes ?? []).some((s) => s?.slug === variantParam.value)
        ) ?? -1;
        activeColorIndex.value = groupIndex >= 0 ? groupIndex : 0;
        const match = (p.variant_groups?.[activeColorIndex.value]?.sizes ?? []).find((s) => s?.slug === variantParam.value && s?.available);
        if (match) {
          selectedVariantSlug.value = match.slug;
        } else {
          const firstAvail = (p.variant_groups?.[activeColorIndex.value]?.sizes ?? []).find((s) => s?.available);
          selectedVariantSlug.value = firstAvail?.slug ?? "";
        }
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
    useRouter();
    function selectSize(s) {
      if (!s?.available) return;
      selectedVariantSlug.value = s.slug;
    }
    async function addToCart() {
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
            // set the TOTAL or keep your logic as-is
          }
        });
        if (false) ;
        success("Added to cart");
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
      const _component_ProductAccordion = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-ebf6a258>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-6" data-v-ebf6a258><div class="flex justify-start w-full" data-v-ebf6a258><div class="flex items-center py-1 text-xs md:text-sm text-text_color uppercase tracking-widest" data-v-ebf6a258>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:underline pr-2"
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
      _push(`<span class="pr-2" data-v-ebf6a258>/</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop",
        class: "hover:underline pr-2"
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
      _push(`<span class="pr-2" data-v-ebf6a258>/</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/collections/${unref(product)?.collection_slug}`,
        class: "hover:underline pr-2"
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
      _push(`<span class="pr-2" data-v-ebf6a258>/</span><span class="pr-2" data-v-ebf6a258>${ssrInterpolate(unref(productName))}</span></div></div></div><div class="hidden md:block" data-v-ebf6a258><div class="relative grid grid-cols-12 gap-8 pt-8 mt-2 md:mt-6 px-4 md:px-8 product-grid" data-v-ebf6a258><div class="md:col-span-8" data-v-ebf6a258>`);
      if (unref(imagesToShow).length > 0) {
        _push(`<div class="grid grid-cols-2 gap-y-7 place-content-between" data-v-ebf6a258><!--[-->`);
        ssrRenderList(unref(variantGroups)[unref(activeColorIndex)].gallery, (g, i) => {
          _push(`<img${ssrRenderAttr("src", g.image)} class="h-auto object-none bg-background_color mx-auto max-w-auto border border-text_color/30"${ssrRenderAttr("alt", g.alt_text || unref(productName))} loading="lazy" data-v-ebf6a258>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div data-v-ebf6a258><!--[-->`);
        ssrRenderList(2, (i) => {
          _push(`<div class="w-full aspect-[4/3] bg-background_color animate-pulse" data-v-ebf6a258></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><aside class="md:col-span-4 product-sticky" data-v-ebf6a258><div class="bg-background_color border border-text_color/30 p-5 align-self:start" data-v-ebf6a258><div class="flex items-start justify-between" data-v-ebf6a258><div data-v-ebf6a258><h1 class="text-sm font-light leading-tight text-text_color" data-v-ebf6a258>${ssrInterpolate(unref(productCategory))}</h1><h1 class="text-xl font-medium leading-tight text-text_color" data-v-ebf6a258>${ssrInterpolate(unref(productName))}</h1>`);
      if (unref(activeColorName)) {
        _push(`<p class="mt-1 text-sm text-text_color" data-v-ebf6a258>Color: ${ssrInterpolate(unref(activeColorName))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-right" data-v-ebf6a258>`);
      if (unref(product)?.discount) {
        _push(`<div class="space-x-2" data-v-ebf6a258><span class="text-lg font-semibold text-text_color" data-v-ebf6a258>€${ssrInterpolate(unref(product)?.discount_price)}</span><span class="line-through text-text_color" data-v-ebf6a258>€${ssrInterpolate(unref(product)?.price)}</span></div>`);
      } else {
        _push(`<div class="text-lg font-semibold text-text_color" data-v-ebf6a258>€${ssrInterpolate(unref(product)?.price)}</div>`);
      }
      _push(`</div></div>`);
      if (unref(variantGroups).length) {
        _push(`<div class="mt-4" data-v-ebf6a258><div class="text-xs uppercase tracking-widest mb-2" data-v-ebf6a258>Color</div><div class="flex gap-3" data-v-ebf6a258><!--[-->`);
        ssrRenderList(unref(variantGroups), (vg, idx) => {
          _push(`<button class="${ssrRenderClass([unref(activeColorIndex) === idx ? "ring-2 ring-text_color" : "", "w-8 h-8 border relative"])}"${ssrRenderAttr("title", vg.color?.name)} style="${ssrRenderStyle({ backgroundColor: swatchBg(vg.color?.image) })}" data-v-ebf6a258><span class="sr-only" data-v-ebf6a258>${ssrInterpolate(vg.color?.name)}</span></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeSizes).length) {
        _push(`<div class="mt-6" data-v-ebf6a258><div class="flex items-center justify-between" data-v-ebf6a258><div class="text-xs uppercase tracking-widest" data-v-ebf6a258>Size</div><div class="text-xs text-text_color/70" data-v-ebf6a258>`);
        if (unref(inStock)) {
          _push(`<span data-v-ebf6a258>In Stock</span>`);
        } else {
          _push(`<span data-v-ebf6a258>Unavailable</span>`);
        }
        _push(`</div></div><div class="mt-2 grid grid-cols-5 gap-2" data-v-ebf6a258><!--[-->`);
        ssrRenderList(unref(activeSizes), (s) => {
          _push(`<button class="${ssrRenderClass([[
            s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
            unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
          ], "border px-2 py-2 text-sm text-text_color"])}"${ssrIncludeBooleanAttr(!s.available) ? " disabled" : ""} data-v-ebf6a258>${ssrInterpolate(s.size?.name)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-6 space-y-3" data-v-ebf6a258><button class="primary-btn sweep group w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(!unref(selectedVariantSlug)) ? " disabled" : ""} data-v-ebf6a258><span class="btn-label" data-v-ebf6a258>ADD TO CART</span><span class="sweep-overlay" aria-hidden="true" data-v-ebf6a258></span></button></div><ul class="mt-5 space-y-2 text-sm text-text_color/80" data-v-ebf6a258><li data-v-ebf6a258>✓ Free delivery over €250,-</li><li data-v-ebf6a258>✓ Easy returns within 14 days</li></ul></div></aside></div>`);
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
      _push(`</div><div class="block md:hidden mt-2 pt-8" id="mobile-product-wrap" data-v-ebf6a258><div class="keen-slider" data-v-ebf6a258><!--[-->`);
      ssrRenderList(unref(variantGroups)[unref(activeColorIndex)]?.gallery || [], (img, i) => {
        _push(`<div class="keen-slider__slide" data-v-ebf6a258><img${ssrRenderAttr("src", img.image)} class="w-full h-auto object-cover border-t border-b border-text_color/30"${ssrRenderAttr("alt", img.alt_text || unref(productName))} data-v-ebf6a258></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(slider)) {
        _push(`<div class="flex items-center justify-center gap-2 py-3" data-v-ebf6a258><!--[-->`);
        ssrRenderList(unref(dots), (idx) => {
          _push(`<button type="button" class="flex items-center text-text_color"${ssrRenderAttr("aria-label", `Go to slide ${idx + 1}`)} data-v-ebf6a258>`);
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
        _push(`<div class="pt-4 px-4" data-v-ebf6a258><div class="text-xs uppercase tracking-widest mb-2" data-v-ebf6a258>Color</div><div class="flex gap-3" data-v-ebf6a258><!--[-->`);
        ssrRenderList(unref(variantGroups), (vg, idx) => {
          _push(`<button class="${ssrRenderClass([unref(activeColorIndex) === idx ? "ring-2 ring-text_color" : "", "w-8 h-8 border"])}" style="${ssrRenderStyle({ backgroundColor: swatchBg(vg.color?.image) })}" data-v-ebf6a258></button>`);
        });
        _push(`<!--]--></div>`);
        if (unref(activeColorName)) {
          _push(`<p class="mt-1 text-sm text-text_color" data-v-ebf6a258>Color: ${ssrInterpolate(unref(activeColorName))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="px-4 mt-4" data-v-ebf6a258>`);
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
      _push(`</div><div class="sticky bottom-0 left-0 w-full bg-background_color z-40" data-v-ebf6a258><div class="flex flex-col items-start py-6 px-4 gap-4" data-v-ebf6a258><div data-v-ebf6a258><h1 class="text-sm font-light leading-tight text-text_color" data-v-ebf6a258>${ssrInterpolate(unref(productCategory))}</h1><h1 class="text-lg font-medium leading-tight text-text_color" data-v-ebf6a258>${ssrInterpolate(unref(productName))}</h1></div><div class="text-right" data-v-ebf6a258>`);
      if (unref(product)?.discount) {
        _push(`<div class="space-x-1" data-v-ebf6a258><span class="text-base font-semibold text-text_color" data-v-ebf6a258>€${ssrInterpolate(unref(product)?.discount_price)}</span><span class="line-through text-text_color text-sm" data-v-ebf6a258>€${ssrInterpolate(unref(product)?.price)}</span></div>`);
      } else {
        _push(`<div class="text-base font-semibold text-text_color" data-v-ebf6a258>€${ssrInterpolate(unref(product)?.price)}</div>`);
      }
      _push(`</div><button class="w-full py-2 my-auto items-center text-center text-base font-medium tracking-wider bg-text_color text-background_color" data-v-ebf6a258><span class="my-auto" data-v-ebf6a258>ADD</span></button></div></div>`);
      _push(ssrRenderComponent(unref(TransitionRoot), { show: unref(mobilePanelOpen) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              class: "relative z-50",
              onClose: ($event) => mobilePanelOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="fixed inset-0 bg-text_color/30" aria-hidden="true" data-v-ebf6a258${_scopeId2}></div><div class="fixed bottom-0 w-screen" data-v-ebf6a258${_scopeId2}>`);
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
                              _push5(`<div class="flex justify-between items-center mb-4" data-v-ebf6a258${_scopeId4}><h2 class="text-base uppercase tracking-wider font-medium" data-v-ebf6a258${_scopeId4}>Select Size</h2></div>`);
                              if (unref(activeSizes).length) {
                                _push5(`<div class="mt-4" data-v-ebf6a258${_scopeId4}><div class="text-xs uppercase tracking-widest mb-2" data-v-ebf6a258${_scopeId4}>Size</div><div class="flex flex-col justify-center gap-3 items-center" data-v-ebf6a258${_scopeId4}><!--[-->`);
                                ssrRenderList(unref(activeSizes), (s) => {
                                  _push5(`<button class="${ssrRenderClass([[
                                    s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                    unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                  ], "border px-3 py-2 text-sm w-fit"])}" data-v-ebf6a258${_scopeId4}>${ssrInterpolate(s.size?.name)}</button>`);
                                });
                                _push5(`<!--]--></div></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<button class="mt-6 w-full py-3 text-base font-medium tracking-wider bg-text_color text-background_color disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(!unref(selectedVariantSlug)) ? " disabled" : ""} data-v-ebf6a258${_scopeId4}> ADD TO CART </button>`);
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
                                      return openBlock(), createBlock("button", {
                                        key: s.slug,
                                        onClick: ($event) => selectSize(s),
                                        class: ["border px-3 py-2 text-sm w-fit", [
                                          s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                          unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                        ]]
                                      }, toDisplayString(s.size?.name), 11, ["onClick"]);
                                    }), 128))
                                  ])
                                ])) : createCommentVNode("", true),
                                createVNode("button", {
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
                                    return openBlock(), createBlock("button", {
                                      key: s.slug,
                                      onClick: ($event) => selectSize(s),
                                      class: ["border px-3 py-2 text-sm w-fit", [
                                        s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                        unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                      ]]
                                    }, toDisplayString(s.size?.name), 11, ["onClick"]);
                                  }), 128))
                                ])
                              ])) : createCommentVNode("", true),
                              createVNode("button", {
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
                                    return openBlock(), createBlock("button", {
                                      key: s.slug,
                                      onClick: ($event) => selectSize(s),
                                      class: ["border px-3 py-2 text-sm w-fit", [
                                        s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                        unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                      ]]
                                    }, toDisplayString(s.size?.name), 11, ["onClick"]);
                                  }), 128))
                                ])
                              ])) : createCommentVNode("", true),
                              createVNode("button", {
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
                                  return openBlock(), createBlock("button", {
                                    key: s.slug,
                                    onClick: ($event) => selectSize(s),
                                    class: ["border px-3 py-2 text-sm w-fit", [
                                      s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                      unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                    ]]
                                  }, toDisplayString(s.size?.name), 11, ["onClick"]);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true),
                            createVNode("button", {
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
const ____product_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ebf6a258"]]);
export {
  ____product_ as default
};
//# sourceMappingURL=_...product_-CO2LuMdf.js.map
