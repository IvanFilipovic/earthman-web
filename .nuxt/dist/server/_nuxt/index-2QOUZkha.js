import { _ as __nuxt_component_0$2 } from "./AppNavigation-PSSArelZ.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-7pp3EPK3.js";
import { _ as __nuxt_component_0$1 } from "./index-qGNUStbk.js";
import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
  __name: "InstagramGrid",
  __ssrInlineRender: true,
  props: {
    posts: {},
    initial: {},
    step: {}
  },
  setup(__props) {
    const props = __props;
    const show = ref(props.initial ?? 7);
    computed(() => props.step ?? 6);
    const visible = computed(() => (props.posts || []).slice(0, show.value));
    function slotClass(i) {
      switch (i) {
        case 0:
          return "col-span-12 md:col-span-6 md:row-span-2 h-auto";
        case 1:
          return "col-span-6 md:col-span-2";
        case 2:
          return "col-span-6 md:col-span-2";
        case 3:
          return "col-span-12 md:col-span-2";
        case 4:
          return "col-span-6 md:col-span-2";
        case 5:
          return "col-span-6 md:col-span-2";
        case 6:
          return "col-span-12 md:col-span-2";
        default:
          return "col-span-12 sm:col-span-6 md:col-span-4";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "max-w-full mx-auto px-4 md:px-8 py-10" }, _attrs))} data-v-d4f334fb><h2 class="text-2xl md:text-3xl font-medium text-center mb-8" data-v-d4f334fb>#Earthman</h2><div class="grid grid-cols-12 gap-4 auto-rows-[180px] md:auto-rows-[240px]" data-v-d4f334fb><!--[-->`);
      ssrRenderList(visible.value, (post, i) => {
        _push(`<div class="${ssrRenderClass([slotClass(i), "relative overflow-hidden border border-text_color/30"])}" data-v-d4f334fb><img data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-bottom"${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.alt || "Instagram post")} class="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" data-v-d4f334fb><div class="absolute inset-0 bg-black/0 hover:bg-black/30 transition" data-v-d4f334fb></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "https://www.enterprise.hr",
          target: "_blank",
          class: "absolute inset-0 grid place-content-center opacity-0 hover:opacity-100 transition bg-background_color"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col items-center gap-3" data-v-d4f334fb${_scopeId}><span class="grid place-items-center" data-v-d4f334fb${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:instagram",
                class: "w-8 h-8 my-auto mx-1"
              }, null, _parent2, _scopeId));
              _push2(`</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col items-center gap-3" }, [
                  createVNode("span", { class: "grid place-items-center" }, [
                    createVNode(_component_Icon, {
                      name: "lucide:instagram",
                      class: "w-8 h-8 my-auto mx-1"
                    })
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="flex justify-center pt-10" data-v-d4f334fb><button class="secondary-btn sweep-secondary px-14 py-3" data-v-d4f334fb><span class="btn-label" data-v-d4f334fb>SEe all</span><span class="sweep-overlay bg-secondary_button_color" aria-hidden="true" data-v-d4f334fb></span></button></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InstagramGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d4f334fb"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const invert = ref(false);
    ref(null);
    const wrapperClass = computed(
      () => invert.value ? "bg-text_color text-background_color" : "bg-background_color text-text_color"
    );
    const posts = [
      // 0 – big hero
      { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", link: "https://instagram.com/p/xyz" },
      // 1..n
      { image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", link: "https://instagram.com/p/xyz2" },
      { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", link: "https://instagram.com/p/xyz2" },
      { image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba", link: "https://instagram.com/p/xyz2" },
      { image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d", link: "https://instagram.com/p/xyz2" },
      { image: "https://images.unsplash.com/photo-1503602642458-232111445657", link: "https://instagram.com/p/xyz2" },
      { image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d", link: "https://instagram.com/p/xyz2" }
      // add more…
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0$2;
      const _component_InstagramGrid = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: [wrapperClass.value, "transition-colors duration-300 min-h-screen"]
      }, _attrs))} data-v-16e9bfa5>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="min-h-screen" data-v-16e9bfa5><div class="relative pt-8 px-4 md:px-8" data-v-16e9bfa5><div class="relative w-full h-[70vh] border border-text_color/30 overflow-hidden" data-v-16e9bfa5><img src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&amp;w=801" alt="Material study" class="absolute inset-0 w-full h-full object-cover" data-v-16e9bfa5><div class="absolute inset-0 bg-text_color/30" data-v-16e9bfa5></div><div class="absolute inset-0 flex items-end" data-v-16e9bfa5><div class="p-8 md:p-12 text-background_color mx-auto" data-v-16e9bfa5><h3 class="text-2xl md:text-4xl text-center mb-3 bg-text_color" data-v-16e9bfa5>Materials, Mastered</h3><p class="max-w-lg text-sm md:text-base text-center bg-text_color py-1 px-1" data-v-16e9bfa5> From recycled cotton to traceable leathers—our platform partners with mills that publish their practices and certify their fibers. </p></div></div></div></div></div><div class="min-h-screen pb-20" data-v-16e9bfa5><div class="flex flex-col lg:flex-row gap-10 items-start px-4 md:px-8 pb-14 md:py-0" data-v-16e9bfa5><div class="w-full lg:w-1/2 my-auto pb-10" data-v-16e9bfa5><img data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-bottom" data-aos-duration="800" data-aos-easing="ease-in-out" src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&amp;w=801" alt="Studio story" class="${ssrRenderClass([invert.value ? "border border-background_color" : "border border-text_color/30", "w-full h-[70vh] object-cover border my-auto"])}" loading="lazy" data-v-16e9bfa5></div><div class="w-full lg:w-1/2 flex flex-col my-auto pt-10" data-v-16e9bfa5><h2 class="text-2xl md:text-3xl tracking-wide mb-4 mx-auto uppercase" data-v-16e9bfa5>Crafted with Intent</h2><p class="text-sm leading-normal md:leading-loose text-center mx-auto px-4 py-2" data-v-16e9bfa5> We design for longevity: timeless silhouettes, resilient materials, and a supply chain we’re proud of. Every piece is cut in small batches and finished by hand. Our studio blends traditional techniques with forward-looking processes—prioritizing responsible sourcing and modular construction so garments can be repaired, re-worn, and re-loved. We design for longevity: timeless silhouettes, resilient materials, and a supply chain we’re proud of. Every piece is cut in small batches and finished by hand. Our studio blends traditional techniques with forward-looking processes—prioritizing responsible sourcing and modular construction so garments can be repaired, re-worn, and re-loved. </p></div></div></div><div class="min-h-screen" data-v-16e9bfa5><div class="flex flex-col lg:flex-row-reverse gap-10 items-start px-4 md:px-8 min-h-screen" data-v-16e9bfa5><div class="w-full lg:w-1/2 my-auto" data-v-16e9bfa5><img data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-bottom" data-aos-duration="800" data-aos-easing="ease-in-out" src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&amp;w=801" alt="Community story" class="${ssrRenderClass([invert.value ? "border border-background_color/30" : "border border-text_color/30", "w-full h-[70vh] object-cover border"])}" loading="lazy" data-v-16e9bfa5></div><div class="w-full lg:w-1/2 flex flex-col my-auto" data-v-16e9bfa5><h2 class="text-2xl md:text-3xl tracking-wide mb-4 mx-auto uppercase" data-v-16e9bfa5>Crafted with Intent</h2><p class="text-sm leading-normal md:leading-loose text-center mx-auto px-4 py-2" data-v-16e9bfa5> We design for longevity: timeless silhouettes, resilient materials, and a supply chain we’re proud of. Every piece is cut in small batches and finished by hand. Our studio blends traditional techniques with forward-looking processes—prioritizing responsible sourcing and modular construction so garments can be repaired, re-worn, and re-loved. </p></div></div></div>`);
      _push(ssrRenderComponent(_component_InstagramGrid, {
        posts,
        initial: 7,
        step: 6
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16e9bfa5"]]);
export {
  index as default
};
//# sourceMappingURL=index-2QOUZkha.js.map
