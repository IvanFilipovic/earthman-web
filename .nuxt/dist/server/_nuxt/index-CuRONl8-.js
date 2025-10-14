import { _ as _sfc_main$1 } from "./AppNavigation-BjLkWSMF.js";
import { defineComponent, ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./index-DTKfBZ1X.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "./nuxt-link-B-CASStw.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const invert = ref(false);
    ref(null);
    const wrapperClass = computed(
      () => invert.value ? "bg-text_color text-background_color" : "bg-background_color text-text_color"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: [wrapperClass.value, "transition-colors duration-300 min-h-screen"]
      }, _attrs))} data-v-60c55d53><div class="flex flex-col md:flex-row items-start md:items-center justify-between px-8 py-6 gap-6 border-b border-text_color/30" data-v-60c55d53><div class="w-full md:w-1/2" data-v-60c55d53><div class="image bg-cover bg-center bg-transparent h-40 flex justify-center max-w-[100%]" data-v-60c55d53></div></div><div class="w-full md:w-1/2 flex flex-col" data-v-60c55d53>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: invert.value }, null, _parent));
      _push(`<div class="flex gap-3 justify-end w-full" data-v-60c55d53><div class="flex items-center gap-3" data-v-60c55d53><nav class="${ssrRenderClass([invert.value ? "text-background_color" : "text-background_color", "text-sm uppercase tracking-widest space-x-2 px-4"])}" data-v-60c55d53><p data-v-60c55d53>=</p></nav></div></div></div></div><div class="min-h-screen" data-v-60c55d53><div class="relative pt-8 md:px-8" data-v-60c55d53><div class="relative w-full h-[70vh] rounded overflow-hidden" data-v-60c55d53><img src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&amp;w=801" alt="Material study" class="absolute inset-0 w-full h-full object-cover" data-v-60c55d53><div class="absolute inset-0 bg-text_color/30" data-v-60c55d53></div><div class="absolute inset-0 flex items-end" data-v-60c55d53><div class="p-8 md:p-12 text-background_color mx-auto" data-v-60c55d53><h3 class="text-3xl md:text-4xl text-center mb-3" data-v-60c55d53>Materials, Mastered</h3><p class="max-w-xl text-sm md:text-base text-center" data-v-60c55d53> From recycled cotton to traceable leathers—our platform partners with mills that publish their practices and certify their fibers. </p></div></div></div></div></div><div class="min-h-screen" data-v-60c55d53><div class="flex flex-col lg:flex-row gap-10 items-start mt-16 md:px-8" data-v-60c55d53><div class="w-full lg:w-1/2 my-auto" data-v-60c55d53><img src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&amp;w=801" alt="Studio story" class="${ssrRenderClass([invert.value ? "border-background_color/30" : "border-text_color/20", "w-full h-[70vh] object-cover border my-auto"])}" loading="lazy" data-v-60c55d53></div><div class="w-full lg:w-1/2 flex flex-col my-auto" data-v-60c55d53><h2 class="text-2xl md:text-3xl tracking-wide mb-4 mx-auto uppercase" data-v-60c55d53>Crafted with Intent</h2><p class="text-sm leading-relaxed mx-auto" data-v-60c55d53> We design for longevity: timeless silhouettes, resilient materials, and a supply chain we’re proud of. Every piece is cut in small batches and finished by hand. </p><p class="text-sm leading-relaxed mt-4 mx-auto" data-v-60c55d53> Our studio blends traditional techniques with forward-looking processes—prioritizing responsible sourcing and modular construction so garments can be repaired, re-worn, and re-loved. </p></div></div></div><div class="min-h-screen" data-v-60c55d53><div class="flex flex-col lg:flex-row-reverse gap-10 items-start pt-8 md:px-8" data-v-60c55d53><div class="w-full lg:w-1/2" data-v-60c55d53><img src="https://static.zara.net/assets/public/b850/3c51/c51444638aaf/b950e3e9cbf2/08073243712-a1/08073243712-a1.jpg?ts=1760368012248&amp;w=801" alt="Community story" class="${ssrRenderClass([invert.value ? "border-background_color/30" : "border-text_color/20", "w-full h-[70vh] object-cover border"])}" loading="lazy" data-v-60c55d53></div><div class="w-full lg:w-1/2 flex flex-col my-auto" data-v-60c55d53><h2 class="text-2xl md:text-3xl tracking-wide mb-4 mx-auto uppercase" data-v-60c55d53>Crafted with Intent</h2><p class="text-sm leading-relaxed mx-auto" data-v-60c55d53> We design for longevity: timeless silhouettes, resilient materials, and a supply chain we’re proud of. Every piece is cut in small batches and finished by hand. </p><p class="text-sm leading-relaxed mt-4 mx-auto" data-v-60c55d53> Our studio blends traditional techniques with forward-looking processes—prioritizing responsible sourcing and modular construction so garments can be repaired, re-worn, and re-loved. </p></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-60c55d53"]]);
export {
  index as default
};
//# sourceMappingURL=index-CuRONl8-.js.map
