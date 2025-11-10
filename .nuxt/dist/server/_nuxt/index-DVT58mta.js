import { _ as __nuxt_component_0$2 } from "./AppNavigation-CyRCE6k1.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-7pp3EPK3.js";
import { _ as __nuxt_component_0$1 } from "./index-qGNUStbk.js";
import { defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, useSSRContext, withAsyncContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/unctx/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/h3/dist/index.mjs";
import "pinia";
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
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "InstagramGrid",
  __ssrInlineRender: true,
  props: {
    posts: {},
    initial: { default: 7 },
    step: { default: 6 }
  },
  setup(__props) {
    const props = __props;
    const show = ref(props.initial);
    const visible = computed(() => (props.posts || []).slice(0, show.value));
    function slotClass(index) {
      switch (index) {
        case 0:
          return "col-span-12 lg:col-span-8 lg:row-span-2 h-auto";
        case 1:
          return "col-span-6 lg:col-span-2";
        case 2:
          return "col-span-6 lg:col-span-2";
        case 3:
          return "col-span-12 md:col-span-2";
        case 4:
          return "col-span-6 md:col-span-2";
        default:
          return "col-span-12 sm:col-span-6 md:col-span-4";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "instagram-grid max-w-full mx-auto px-4 md:px-8 py-10" }, _attrs))}><h2 class="instagram-title text-2xl md:text-3xl font-medium text-center mb-8 uppercase"> #Earthman </h2><div class="grid grid-cols-12 gap-4 auto-rows-[180px] md:auto-rows-[240px]"><!--[-->`);
      ssrRenderList(unref(visible), (post, i) => {
        _push(`<div class="${ssrRenderClass([slotClass(i), "instagram-item relative overflow-hidden border border-text_color/30"])}"><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.alt || "Instagram post")} class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async"><div class="absolute inset-0 bg-black/0 hover:bg-black/30 transition"></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: post.link || "https://www.instagram.com",
          target: "_blank",
          class: "absolute inset-0 grid place-content-center opacity-0 hover:opacity-100 transition bg-background_color/50"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col items-center gap-3 p-6 rounded-lg"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:instagram",
                class: "w-8 h-8"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col items-center gap-3 p-6 rounded-lg" }, [
                  createVNode(_component_Icon, {
                    name: "lucide:instagram",
                    class: "w-8 h-8"
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center pt-10"><button type="button" class="btn btn--secondary"><span class="btn__text">See All</span><span class="btn__fill"></span></button></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InstagramGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
    ref(null);
    ref(null);
    ref(null);
    const isDark = ref(false);
    const wrapperClass = computed(
      () => isDark.value ? "bg-text_color text-background_color" : "bg-background_color text-text_color"
    );
    const posts = [
      { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", link: "https://instagram.com/p/xyz" },
      { image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", link: "https://instagram.com/p/xyz2" },
      { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", link: "https://instagram.com/p/xyz2" },
      { image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba", link: "https://instagram.com/p/xyz2" },
      { image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d", link: "https://instagram.com/p/xyz2" },
      { image: "https://images.unsplash.com/photo-1503602642458-232111445657", link: "https://instagram.com/p/xyz2" },
      { image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d", link: "https://instagram.com/p/xyz2" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0$2;
      const _component_InstagramGrid = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: [unref(wrapperClass), "transition-colors duration-300 min-h-screen"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: unref(isDark) }, null, _parent));
      _push(`<div id="smooth-wrapper"><div id="smooth-content"><div class="min-h-screen"><div class="relative pt-8 px-4 md:px-8"><div class="hero-section relative w-full h-[70vh] border border-text_color/30 overflow-hidden"><img src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&amp;w=801" alt="Material study" class="absolute inset-0 w-full h-full object-cover"><div class="absolute inset-0 bg-text_color/30"></div><div class="absolute inset-0 flex items-end"><div class="hero-content p-8 md:p-12 text-background_color mx-auto"><h3 class="hero-title text-2xl md:text-4xl text-center mb-3 bg-text_color px-4 py-2"> Materials, Mastered </h3><p class="hero-text max-w-lg text-sm md:text-base text-center bg-text_color py-2 px-4"> From recycled cotton to traceable leathers—our platform partners with mills that publish their practices and certify their fibers. </p></div></div></div></div></div><div class="section-light min-h-screen pb-20"><div class="flex flex-col lg:flex-row gap-10 items-start px-4 md:px-8 pb-14 md:py-0"><div class="w-full lg:w-1/2 my-auto pb-10"><img class="section-image w-full h-[70vh] object-cover border border-text_color/30" src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&amp;w=801" alt="Studio story" loading="lazy"></div><div class="w-full lg:w-1/2 flex flex-col my-auto pt-10"><h2 class="section-title text-2xl md:text-3xl tracking-wide mb-4 mx-auto uppercase"> Crafted with Intent </h2><p class="section-text text-sm md:text-base leading-normal md:leading-loose text-center mx-auto px-4 py-2"> We design for longevity: timeless silhouettes, resilient materials, and a supply chain we&#39;re proud of. Every piece is cut in small batches and finished by hand. Our studio blends traditional techniques with forward-looking processes—prioritizing responsible sourcing and modular construction so garments can be repaired, re-worn, and re-loved. </p></div></div></div><div class="section-dark min-h-screen"><div class="flex flex-col lg:flex-row-reverse gap-10 items-start px-4 md:px-8 min-h-screen"><div class="w-full lg:w-1/2 my-auto"><img class="section-image w-full h-[70vh] object-cover border border-background_color/30" src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&amp;w=801" alt="Community story" loading="lazy"></div><div class="w-full lg:w-1/2 flex flex-col my-auto"><h2 class="section-title text-2xl md:text-3xl tracking-wide mb-4 mx-auto uppercase"> Community Driven </h2><p class="section-text text-sm md:text-base leading-normal md:leading-loose text-center mx-auto px-4 py-2"> We design for longevity: timeless silhouettes, resilient materials, and a supply chain we&#39;re proud of. Every piece is cut in small batches and finished by hand. Our studio blends traditional techniques with forward-looking processes—prioritizing responsible sourcing and modular construction so garments can be repaired, re-worn, and re-loved. </p></div></div></div><div><div><div class="hidden lg:block">`);
      _push(ssrRenderComponent(_component_InstagramGrid, {
        posts,
        initial: 5,
        step: 6
      }, null, _parent));
      _push(`</div><div class="lg:hidden block">`);
      _push(ssrRenderComponent(_component_InstagramGrid, {
        posts,
        initial: 3,
        step: 6
      }, null, _parent));
      _push(`</div></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DVT58mta.js.map
