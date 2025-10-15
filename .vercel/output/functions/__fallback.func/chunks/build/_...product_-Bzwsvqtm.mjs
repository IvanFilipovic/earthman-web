import { _ as _sfc_main$2 } from './AppNavigation-BjLkWSMF.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-B-CASStw.mjs';
import { u as useAsyncData, _ as __nuxt_component_0$1 } from './index-DTKfBZ1X.mjs';
import { defineComponent, computed, ref, withAsyncContext, watch, withCtx, createTextVNode, unref, toDisplayString, mergeProps, createVNode, createBlock, createCommentVNode, openBlock, resolveDynamicComponent, Transition, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderVNode } from 'vue/server-renderer';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { c as useRoute, b as useRouter, e as useRuntimeConfig } from './server.mjs';
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
import 'vue-router';
import '@iconify/utils';
import 'consola';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductAccordion",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
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
    const collectionParam = computed(() => {
      var _a;
      return String((_a = route.params.collection) != null ? _a : "");
    });
    const variantParam = computed(() => {
      var _a;
      return String((_a = route.params.product) != null ? _a : "");
    });
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
      var _a, _b, _c;
      const primary = ((_c = (_b = (_a = product.value) == null ? void 0 : _a.selected_variant) == null ? void 0 : _b.images) != null ? _c : []).filter(Boolean);
      if (primary.length) return primary;
      return variantGroups.value.map((vg) => vg == null ? void 0 : vg.avatar_image).filter(Boolean);
    });
    watch(
      () => product.value,
      (p) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        if (!p) return;
        const groupIndex = (_b = (_a = p.variant_groups) == null ? void 0 : _a.findIndex(
          (g) => {
            var _a2;
            return ((_a2 = g == null ? void 0 : g.sizes) != null ? _a2 : []).some((s) => (s == null ? void 0 : s.slug) === variantParam.value);
          }
        )) != null ? _b : -1;
        activeColorIndex.value = groupIndex >= 0 ? groupIndex : 0;
        const match = ((_e = (_d = (_c = p.variant_groups) == null ? void 0 : _c[activeColorIndex.value]) == null ? void 0 : _d.sizes) != null ? _e : []).find((s) => (s == null ? void 0 : s.slug) === variantParam.value && (s == null ? void 0 : s.available));
        if (match) {
          selectedVariantSlug.value = match.slug;
        } else {
          const firstAvail = ((_h = (_g = (_f = p.variant_groups) == null ? void 0 : _f[activeColorIndex.value]) == null ? void 0 : _g.sizes) != null ? _h : []).find((s) => s == null ? void 0 : s.available);
          selectedVariantSlug.value = (_i = firstAvail == null ? void 0 : firstAvail.slug) != null ? _i : "";
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
      var _a, _b, _c, _d, _e, _f;
      const _component_AppNavigation = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
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
      _push(`<span>\u203A</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/collections/${(_a = unref(product)) == null ? void 0 : _a.collection_slug}`,
        class: "hover:underline"
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
      _push(`<span>\u203A</span><span class="text-text_color">${ssrInterpolate(unref(productName))}</span></nav><div class="relative grid grid-cols-12 gap-8 pt-8 md:px-8 product-grid"><div class="col-span-12 lg:col-span-8">`);
      if (unref(imagesToShow).length > 0) {
        _push(`<div class="grid grid-cols-2 gap-y-7 pr-2 place-content-between"><!--[-->`);
        ssrRenderList(unref(imagesToShow), (img, i) => {
          _push(`<img${ssrRenderAttr("src", img.image)} class="h-auto object-none bg-background_color mx-auto max-w-auto border border-text_color/30"${ssrRenderAttr("alt", unref(productName))} loading="lazy">`);
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
      if ((_b = unref(product)) == null ? void 0 : _b.discount) {
        _push(`<div class="space-x-2"><span class="text-lg font-semibold text-text_color">\u20AC${ssrInterpolate((_c = unref(product)) == null ? void 0 : _c.discount_price)}</span><span class="line-through text-text_color">\u20AC${ssrInterpolate((_d = unref(product)) == null ? void 0 : _d.price)}</span></div>`);
      } else {
        _push(`<div class="text-lg font-semibold text-text_color">\u20AC${ssrInterpolate((_e = unref(product)) == null ? void 0 : _e.price)}</div>`);
      }
      _push(`</div></div>`);
      if (unref(variantGroups).length) {
        _push(`<div class="mt-4"><div class="text-xs uppercase tracking-widest mb-2">Color</div><div class="flex gap-3"><!--[-->`);
        ssrRenderList(unref(variantGroups), (vg, idx) => {
          var _a2, _b2, _c2;
          _push(`<button class="${ssrRenderClass([unref(activeColorIndex) === idx ? "ring-2 ring-text_color" : "", "w-8 h-8 border relative"])}"${ssrRenderAttr("title", (_a2 = vg.color) == null ? void 0 : _a2.name)} style="${ssrRenderStyle({ backgroundColor: swatchBg((_b2 = vg.color) == null ? void 0 : _b2.image) })}"><span class="sr-only">${ssrInterpolate((_c2 = vg.color) == null ? void 0 : _c2.name)}</span></button>`);
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
          var _a2;
          _push(`<button class="${ssrRenderClass([[
            s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
            unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
          ], "border px-2 py-2 text-sm text-text_color"])}"${ssrIncludeBooleanAttr(!s.available) ? " disabled" : ""}>${ssrInterpolate((_a2 = s.size) == null ? void 0 : _a2.name)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-6 space-y-3"><button class="primary-btn sweep group w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(!unref(selectedVariantSlug)) ? " disabled" : ""}><span class="btn-label">ADD TO CART</span><span class="sweep-overlay" aria-hidden="true"></span></button></div><ul class="mt-5 space-y-2 text-sm text-text_color/80"><li>\u2713 Free delivery over \u20AC250,-</li><li>\u2713 Easy returns within 14 days</li></ul></div></aside></div>`);
      _push(ssrRenderComponent(_component_ProductAccordion, {
        items: [
          {
            title: "Size & Fit",
            content: "Coming soon \u2013 sizing guidance for this product."
          },
          {
            title: "Shipping & Returns",
            content: `We offer UPS Standard, Express Saver, and Express shipping options. Final prices are calculated at checkout and exclude import duties which will be charged by UPS after clearing customs.

    We accept returns within 14 days. We kindly remind you that sale items can only be refunded as store credit.`,
            link: { href: "#", label: "More info" }
          },
          {
            title: "Description",
            content: ((_f = unref(product)) == null ? void 0 : _f.description) || "No additional description."
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

export { _sfc_main as default };
//# sourceMappingURL=_...product_-Bzwsvqtm.mjs.map
