import { defineComponent, ref, mergeProps, useSSRContext, withAsyncContext, unref, withCtx, createVNode, toDisplayString, computed } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./AppNavigation-DbbUjllq.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BeJz8Y8C.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import { u as useImageTransform } from "./useImageTransform-D7n6x7Uv.js";
import { _ as _export_sfc, c as useRouter } from "../server.mjs";
import { Draggable } from "gsap/Draggable.js";
import "./index-DSJLL3Jq.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "./virtual_public-Dgbfu3-q.js";
import "#internal/nuxt/paths";
import "pinia";
import "ofetch";
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BackgroundVideo",
  __ssrInlineRender: true,
  props: {
    src: {},
    poster: { default: "" },
    wrapperClasses: { default: "relative w-full h-screen overflow-hidden" },
    overlay: { type: Boolean, default: true },
    overlayClasses: { default: "bg-black/40" }
  },
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: __props.wrapperClasses }, _attrs))}><video class="absolute inset-0 w-full h-full object-cover"${ssrRenderAttr("poster", __props.poster)} autoplay muted loop playsinline preload="auto"><source${ssrRenderAttr("src", __props.src)} type="video/mp4"> Your browser does not support the video tag. </video>`);
      if (__props.overlay) {
        _push(`<div class="${ssrRenderClass([__props.overlayClasses, "absolute inset-0"])}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex flex-col items-center justify-center h-full text-background_color px-4">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BackgroundVideo.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CollectionListing",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let ScrollSmoother = null;
    try {
      ScrollSmoother = ([__temp, __restore] = withAsyncContext(() => import("gsap/ScrollSmoother.js")), __temp = await __temp, __restore(), __temp).ScrollSmoother;
    } catch {
    }
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    if (ScrollSmoother) gsap.registerPlugin(ScrollSmoother);
    const collections = ref([]);
    const loading = ref(true);
    const { getResponsiveImages } = useImageTransform();
    function getImageAttrs(url) {
      return getResponsiveImages(
        url,
        [400, 600, 800, 1200, 1600],
        // Widths for srcset
        "50vw"
        // Always half viewport width
      );
    }
    function getColorVariant(index2) {
      return index2 % 2 + 1;
    }
    function getButtonVariant(index2) {
      return index2 % 2 === 0 ? "btn--primary" : "btn--secondary";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "smooth-wrapper" }, _attrs))} data-v-d516df9b>`);
      if (unref(loading)) {
        _push(`<div class="fixed inset-0 flex items-center justify-center bg-background_color" data-v-d516df9b><p class="text-text_color text-xl" data-v-d516df9b>Loading collections...</p></div>`);
      } else {
        _push(`<div id="smooth-content" class="stage" data-v-d516df9b><!--[-->`);
        ssrRenderList(unref(collections), (collection, i) => {
          _push(`<section class="slide" data-v-d516df9b><div class="col col--1" data-v-d516df9b><div class="${ssrRenderClass([`col__content--${getColorVariant(i)}`, "col__content"])}" data-v-d516df9b><h2 class="${ssrRenderClass(`col__content-title--${getColorVariant(i)}`)}" data-v-d516df9b><span class="line__inner" data-v-d516df9b>${ssrInterpolate(collection.name || "Collection")}</span></h2><div class="col__content-wrap" data-v-d516df9b>`);
          if (collection.slug) {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: `/collections/${encodeURIComponent(collection.slug)}`,
              class: ["btn", getButtonVariant(i)]
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="btn__text" data-v-d516df9b${_scopeId}>${ssrInterpolate(_ctx.$t("story_button"))}</span><span class="btn__fill" data-v-d516df9b${_scopeId}></span>`);
                } else {
                  return [
                    createVNode("span", { class: "btn__text" }, toDisplayString(_ctx.$t("story_button")), 1),
                    createVNode("span", { class: "btn__fill" })
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div><div class="col col--2" data-v-d516df9b><div class="col__image-wrap" data-v-d516df9b><img${ssrRenderAttrs(mergeProps({ ref_for: true }, getImageAttrs(collection.element_two_image), {
            alt: collection.name || `Collection ${i + 1}`,
            class: "img",
            loading: "lazy",
            decoding: "async"
          }))} data-v-d516df9b></div></div></section>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CollectionListing.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d516df9b"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Carusel",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let InertiaPlugin = null;
    try {
      InertiaPlugin = ([__temp, __restore] = withAsyncContext(() => import("gsap/InertiaPlugin.js")), __temp = await __temp, __restore(), __temp).InertiaPlugin;
    } catch {
      console.warn("InertiaPlugin not available");
    }
    gsap.registerPlugin(Draggable);
    if (InertiaPlugin) gsap.registerPlugin(InertiaPlugin);
    useRouter();
    const { getResponsiveImages } = useImageTransform();
    const items = ref([]);
    const productsPerSlide = ref(3);
    function getProductImageAttrs(product) {
      const imageUrl = product.colors?.[0]?.avatar_image || product.link_image;
      return getResponsiveImages(
        imageUrl,
        [400, 600, 800, 1e3],
        "(max-width: 767px) 80vw, (max-width: 1023px) 42vw, 28vw"
      );
    }
    const slideGroups = computed(() => {
      const perSlide = productsPerSlide.value;
      const groups = [];
      for (let i = 0; i < items.value.length; i += perSlide) {
        groups.push(items.value.slice(i, i + perSlide));
      }
      return groups;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gsap-carousel-main" }, _attrs))} data-v-a7a618a7><div class="gsap-carousel-container" data-v-a7a618a7><div class="gsap-carousel-inner" data-v-a7a618a7><!--[-->`);
      ssrRenderList(unref(slideGroups), (slideGroup, slideIndex) => {
        _push(`<div class="gsap-carousel-slide" data-v-a7a618a7><div class="gsap-slide-products" data-v-a7a618a7><!--[-->`);
        ssrRenderList(slideGroup, (product) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: product.id,
            to: `/product/${product.slug}/${encodeURIComponent(product.colors[0].variant_slug)}`,
            class: "gsap-product-card"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="gsap-product-image" data-v-a7a618a7${_scopeId}><img${ssrRenderAttrs(mergeProps({ ref_for: true }, getProductImageAttrs(product), {
                  alt: product.alt_text || product.name,
                  loading: "lazy"
                }))} data-v-a7a618a7${_scopeId}></div><div class="gsap-product-info" data-v-a7a618a7${_scopeId}><p class="gsap-product-category" data-v-a7a618a7${_scopeId}>${ssrInterpolate(product.category)}</p><p class="gsap-product-name" data-v-a7a618a7${_scopeId}>${ssrInterpolate(product.name)}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "gsap-product-image" }, [
                    createVNode("img", mergeProps({ ref_for: true }, getProductImageAttrs(product), {
                      alt: product.alt_text || product.name,
                      loading: "lazy"
                    }), null, 16, ["alt"])
                  ]),
                  createVNode("div", { class: "gsap-product-info" }, [
                    createVNode("p", { class: "gsap-product-category" }, toDisplayString(product.category), 1),
                    createVNode("p", { class: "gsap-product-name" }, toDisplayString(product.name), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div><div class="gsap-cta-section" data-v-a7a618a7><button type="button" class="gsap-cta-button" data-v-a7a618a7><h3 class="text-xl md:text-2xl font-bold mb-2" data-v-a7a618a7>See Everything</h3><p class="text-sm opacity-70 mb-4" data-v-a7a618a7>Browse all products</p><div class="btn btn--primary" data-v-a7a618a7><span class="btn__text" data-v-a7a618a7>View All</span><span class="btn__fill" data-v-a7a618a7></span></div></button></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Carusel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a7a618a7"]]);
const newsletterBgUrl = "https://static.earth-man.eu/earthman_turtle_kid1.jpg";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Newsletter",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const { getResponsiveImages } = useImageTransform();
    function getNewsletterImageAttrs(url) {
      const mainWidth = 1600;
      return getResponsiveImages(
        url,
        [mainWidth],
        "50vw"
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[800px] sm:h-[500px] md:h-[600px] overflow-hidden" }, _attrs))}><img${ssrRenderAttrs(mergeProps(getNewsletterImageAttrs(newsletterBgUrl), {
        alt: "Newsletter background",
        class: "absolute inset-0 w-full h-full object-cover"
      }))}><div class="absolute inset-0 bg-text_color/30"></div><div class="relative z-10 max-w-3xl mx-auto h-full flex flex-col justify-center px-6 text-background_color"><h2 class="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-4"> Sign up to keep up to date with <span class="font-bold">YOUR BRAND</span>! </h2><p class="text-sm sm:text-base mb-8 max-w-md"> Dive into your unique style, sans pretense and without conformity—be the first to experience our latest drops. </p><form class="w-full flex flex-col sm:flex-row gap-4"><label for="email" class="sr-only">Email Address</label><input id="email"${ssrRenderAttr("value", unref(email))} type="email" required placeholder="Email Address" class="flex-1 px-4 py-2 bg-text_color bg-opacity-85 placeholder-background_color border border-background_color border-opacity-50 focus:outline-none focus:ring-2 focus:ring-background_color focus:ring-opacity-50 text-background_color"><button type="submit" class="btn btn--secondary w-full sm:w-auto"><span class="btn__text">Subscribe</span><span class="btn__fill"></span></button></form></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Newsletter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BackgroundVideo = _sfc_main$4;
      const _component_AppNavigation = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CollectionListing = __nuxt_component_3;
      const _component_Carusel = __nuxt_component_4;
      const _component_Newsletter = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-3624cda6>`);
      _push(ssrRenderComponent(_component_BackgroundVideo, {
        src: "/video/intro.mp4",
        poster: "/logo/earth-man-black.png",
        overlay: "",
        overlayClasses: "bg-gradient-to-b from-text_color/50 to-transparent"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-x-0 top-0 w-full z-50" data-v-3624cda6${_scopeId}>`);
            _push2(ssrRenderComponent(_component_AppNavigation, { dark: true }, null, _parent2, _scopeId));
            _push2(`</div><div class="min-h-screen flex flex-col justify-end items-center md:items-end px-4 md:px-8 pb-12 md:pb-16 z-40 w-full" data-v-3624cda6${_scopeId}><div class="text-background_color text-center md:text-right max-w-2xl pb-6" data-v-3624cda6${_scopeId}><h1 class="text-4xl md:text-6xl font-bold mb-4" data-v-3624cda6${_scopeId}>${ssrInterpolate(_ctx.$t("welcome_title"))}</h1><p class="mb-8 text-base md:text-lg" data-v-3624cda6${_scopeId}>${ssrInterpolate(_ctx.$t("welcome_subtitle"))}</p>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/shop",
              class: "btn btn--secondary inline-flex"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="btn__text" data-v-3624cda6${_scopeId2}>${ssrInterpolate(_ctx.$t("shop_button"))}</span><span class="btn__fill" data-v-3624cda6${_scopeId2}></span>`);
                } else {
                  return [
                    createVNode("span", { class: "btn__text" }, toDisplayString(_ctx.$t("shop_button")), 1),
                    createVNode("span", { class: "btn__fill" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-x-0 top-0 w-full z-50" }, [
                createVNode(_component_AppNavigation, { dark: true })
              ]),
              createVNode("div", { class: "min-h-screen flex flex-col justify-end items-center md:items-end px-4 md:px-8 pb-12 md:pb-16 z-40 w-full" }, [
                createVNode("div", { class: "text-background_color text-center md:text-right max-w-2xl pb-6" }, [
                  createVNode("h1", { class: "text-4xl md:text-6xl font-bold mb-4" }, toDisplayString(_ctx.$t("welcome_title")), 1),
                  createVNode("p", { class: "mb-8 text-base md:text-lg" }, toDisplayString(_ctx.$t("welcome_subtitle")), 1),
                  createVNode(_component_NuxtLink, {
                    to: "/shop",
                    class: "btn btn--secondary inline-flex"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "btn__text" }, toDisplayString(_ctx.$t("shop_button")), 1),
                      createVNode("span", { class: "btn__fill" })
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CollectionListing, null, null, _parent));
      _push(ssrRenderComponent(_component_Carusel, null, null, _parent));
      _push(ssrRenderComponent(_component_Newsletter, null, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3624cda6"]]);
export {
  index as default
};
//# sourceMappingURL=index-Dwh-7d6a.js.map
