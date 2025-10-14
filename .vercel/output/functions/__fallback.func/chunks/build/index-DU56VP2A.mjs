import { _ as _sfc_main$1 } from './AppNavigation-DaXX_rtR.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './index-Bc_SW2bH.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './nuxt-link-CdcgahCt.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppNavigation = _sfc_main$1;
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-6 gap-6 border-b border-text_color/30"><div class="w-full md:w-1/2"><div class="image bg-cover bg-center bg-transparent h-40 flex justify-center max-w-[100%]"></div></div><div class="w-full md:w-1/2 flex flex-col">`);
  _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
  _push(`<div class="flex gap-3 justify-end w-full"><div class="flex items-center gap-3"><nav class="text-sm uppercase tracking-widest space-x-2 text-background_color px-4"><p>=</p></nav></div></div></div></div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DU56VP2A.mjs.map
