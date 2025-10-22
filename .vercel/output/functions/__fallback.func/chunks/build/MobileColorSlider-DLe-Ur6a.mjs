import { defineComponent, ref, watch, nextTick, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { z } from '../_/vue.es.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MobileColorSlider",
  __ssrInlineRender: true,
  props: {
    colors: {}
  },
  setup(__props) {
    const props = __props;
    const current = ref(0);
    const [sliderRef, slider] = z({
      loop: true,
      initial: 0,
      slideChanged(s) {
        current.value = s.track.details.rel;
      }
    });
    watch(
      () => {
        var _a, _b;
        return (_b = (_a = props.colors) == null ? void 0 : _a.length) != null ? _b : 0;
      },
      async () => {
        await nextTick();
        if (slider.value) {
          slider.value.update();
          slider.value.moveToIdx(0);
          current.value = 0;
        }
      }
    );
    computed(
      () => slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : []
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if ((_a = __props.colors) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "block md:hidden" }, _attrs))}><div class="keen-slider"><!--[-->`);
        ssrRenderList(__props.colors, (c, i) => {
          _push(`<div class="keen-slider__slide"><img${ssrRenderAttr("src", c.avatar_image)}${ssrRenderAttr("alt", c.color)} class="w-full h-auto object-cover transition-opacity duration-200 border border-text_color/30" loading="lazy"></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MobileColorSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=MobileColorSlider-DLe-Ur6a.mjs.map
