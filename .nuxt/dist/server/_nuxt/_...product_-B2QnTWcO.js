import { _ as _sfc_main$2 } from "./AppNavigation-BjLkWSMF.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-B-CASStw.js";
import { _ as __nuxt_component_0, u as useAsyncData } from "./index-DTKfBZ1X.js";
import { defineComponent, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, resolveDynamicComponent, Transition, useSSRContext, computed, ref, withAsyncContext, watch, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderVNode, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import "./useToast-pOzf8V9B.js";
import { c as useRoute, e as useRuntimeConfig, b as useRouter } from "../server.mjs";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductAccordion",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-inherit text-text_color max-w-2xl mx-auto py-[150px]" }, _attrs))}><ul class="divide-y divide-text_color/30"><!--[-->`);
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
    const collectionParam = computed(() => String(route.params.collection ?? ""));
    const variantParam = computed(() => String(route.params.product ?? ""));
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
    const imagesToShow = computed(() => {
      const primary = (product.value?.selected_variant?.images ?? []).filter(Boolean);
      if (primary.length) return primary;
      return variantGroups.value.map((vg) => vg?.avatar_image).filter(Boolean);
    });
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
    useRouter();
    function swatchBg(hex) {
      if (!hex) return "#e5e7eb";
      return `#${hex}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ProductAccordion = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(_attrs)}><div class="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-6 gap-6 border-b border-text_color/30"><div class="w-full md:w-1/2"><div class="image bg-cover bg-center bg-transparent h-40 flex justify-center max-w-[100%]"></div></div><div class="w-full md:w-1/2 flex flex-col">`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="flex gap-3 justify-end w-full"><div class="flex items-center gap-3"><nav class="text-sm uppercase tracking-widest space-x-2 text-background_color px-4"><p>=</p></nav></div></div></div></div><nav class="text-xs uppercase tracking-widest mb-6 text-text_color space-x-2 pt-8 md:pl-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop",
        class: "hover:underline"
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
      _push(`<span>›</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/collections/${unref(product)?.collection_slug}`,
        class: "hover:underline"
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
      _push(`<span>›</span><span class="text-text_color">${ssrInterpolate(unref(productName))}</span></nav><div class="relative grid grid-cols-12 gap-8 pt-8 md:px-8 product-grid"><div class="col-span-12 lg:col-span-8">`);
      if (unref(imagesToShow).length > 0) {
        _push(`<div class="grid grid-cols-2 gap-y-7 pr-2 place-content-between"><!--[-->`);
        ssrRenderList(unref(imagesToShow), (img, i) => {
          _push(`<img${ssrRenderAttr("src", img)} class="h-auto object-none bg-background_color mx-auto max-w-auto border border-text_color/30"${ssrRenderAttr("alt", unref(productName))} loading="lazy">`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div><!--[-->`);
        ssrRenderList(2, (i) => {
          _push(`<div class="w-full aspect-[4/3] bg-background_color animate-pulse"></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><aside class="col-span-12 lg:col-span-4 product-sticky"><div class="bg-background_color border border-text_color/30 p-5 align-self:start"><div class="flex items-start justify-between"><div><h1 class="text-sm font-light leading-tight text-text_color">${ssrInterpolate(unref(productCategory))}</h1><h1 class="text-xl font-medium leading-tight text-text_color">${ssrInterpolate(unref(productName))}</h1>`);
      if (unref(activeColorName)) {
        _push(`<p class="mt-1 text-sm text-text_color">Color: ${ssrInterpolate(unref(activeColorName))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-right">`);
      if (unref(product)?.discount) {
        _push(`<div class="space-x-2"><span class="text-lg font-semibold text-text_color">€${ssrInterpolate(unref(product)?.discount_price)}</span><span class="line-through text-text_color">€${ssrInterpolate(unref(product)?.price)}</span></div>`);
      } else {
        _push(`<div class="text-lg font-semibold text-text_color">€${ssrInterpolate(unref(product)?.price)}</div>`);
      }
      _push(`</div></div>`);
      if (unref(variantGroups).length) {
        _push(`<div class="mt-4"><div class="text-xs uppercase tracking-widest mb-2">Color</div><div class="flex gap-3"><!--[-->`);
        ssrRenderList(unref(variantGroups), (vg, idx) => {
          _push(`<button class="${ssrRenderClass([unref(activeColorIndex) === idx ? "ring-2 ring-text_color" : "", "w-8 h-8 border relative"])}"${ssrRenderAttr("title", vg.color?.name)} style="${ssrRenderStyle({ backgroundColor: swatchBg(vg.color?.image) })}"><span class="sr-only">${ssrInterpolate(vg.color?.name)}</span></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeSizes).length) {
        _push(`<div class="mt-6"><div class="flex items-center justify-between"><div class="text-xs uppercase tracking-widest">Size</div><div class="text-xs text-text_color/70">`);
        if (unref(inStock)) {
          _push(`<span>In Stock</span>`);
        } else {
          _push(`<span>Unavailable</span>`);
        }
        _push(`</div></div><div class="mt-2 grid grid-cols-5 gap-2"><!--[-->`);
        ssrRenderList(unref(activeSizes), (s) => {
          _push(`<button class="${ssrRenderClass([[
            s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
            unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
          ], "border px-2 py-2 text-sm text-text_color"])}"${ssrIncludeBooleanAttr(!s.available) ? " disabled" : ""}>${ssrInterpolate(s.size?.name)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-6 space-y-3"><button class="primary-btn sweep group w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(!unref(selectedVariantSlug)) ? " disabled" : ""}><span class="btn-label">ADD TO CART</span><span class="sweep-overlay" aria-hidden="true"></span></button></div><ul class="mt-5 space-y-2 text-sm text-text_color/80"><li>✓ Free delivery over €250,-</li><li>✓ Easy returns within 14 days</li></ul></div></aside></div>`);
      _push(ssrRenderComponent(_component_ProductAccordion, {
        items: [
          {
            title: "Size & Fit",
            content: "Coming soon – sizing guidance for this product."
          },
          {
            title: "Shipping & Returns",
            content: `We offer UPS Standard, Express Saver, and Express shipping options. Final prices are calculated at checkout and exclude import duties which will be charged by UPS after clearing customs.

    We accept returns within 14 days. We kindly remind you that sale items can only be refunded as store credit.`,
            link: { href: "#", label: "More info" }
          },
          {
            title: "Description",
            content: unref(product)?.description || "No additional description."
          }
        ]
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[collection]/[...product].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...product_-B2QnTWcO.js.map
