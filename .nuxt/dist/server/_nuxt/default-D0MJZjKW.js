import { _ as __nuxt_component_0 } from "./nuxt-link-7pp3EPK3.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, defineComponent, unref, toRaw, ref, createVNode, createBlock, createCommentVNode, openBlock } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as __nuxt_component_0$1 } from "./index-qGNUStbk.js";
import { u as useToast } from "./useToast-pOzf8V9B.js";
import { _ as _export_sfc, e as useRuntimeConfig, x as useCookie } from "../server.mjs";
import { TransitionRoot, Switch } from "@headlessui/vue";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
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
const _imports_0 = "" + __buildAssetsURL("earth-man920.CBzC0h3U.png");
const _sfc_main$3 = {
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const linkGroups = [
      {
        title: "EARTHMAN",
        links: [
          { label: "About", href: "/about" },
          { label: "Stories", href: "/collections" },
          { label: "Shop", href: "/shop" }
        ]
      },
      {
        title: "HELP",
        links: [
          { label: "Contact Us", href: "/" },
          { label: "FAQs", href: "/" },
          { label: "Delivery and Returns", href: "/" },
          { label: "Size Guide", href: "/" }
        ]
      },
      {
        title: "LEGAL",
        links: [
          { label: "Privacy Policy", href: "/" },
          { label: "Terms and Conditions", href: "/" }
        ]
      },
      {
        title: "SOCIAL",
        links: [
          { label: "Instagram", href: "/" },
          { label: "Facebook", href: "/" },
          { label: "LinkedIn", href: "/" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-background_color text-text_color border-t border-text_color/30" }, _attrs))}><div class="w-full px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8"><!--[-->`);
      ssrRenderList(linkGroups, (group, i) => {
        _push(`<div class="md:col-span-2"><h3 class="font-semibold mb-4">${ssrInterpolate(group.title)}</h3><ul class="space-y-2 text-sm"><!--[-->`);
        ssrRenderList(group.links, (item, j) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.href,
            class: "hover:underline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--><div class="md:col-span-4"><img${ssrRenderAttr("src", _imports_0)} alt="Your Brand Name" class="max-w-[100%] h-auto object-contain"></div></div><div class="border-t border-text_color/30"><div class="max-w-7xl mx-auto px-6 flex flex-col items-center py-6"><p class="text-xs">© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Earthman. All rights reserved.</p></div></div></footer>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Toast",
  __ssrInlineRender: true,
  setup(__props) {
    const { toasts } = useToast();
    function bgClass(type) {
      if (type === "success") return "bg-secondary_button_color text-text_color";
      if (type === "error") return "bg-black text-white";
      return "bg-white text-black";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "pointer-events-none fixed right-6 top-6 z-[9999] space-y-2",
        "aria-live": "polite",
        "aria-atomic": "true"
      }, _attrs))} data-v-9bd48949><div${ssrRenderAttrs({
        name: "toast",
        class: "space-y-2"
      })} data-v-9bd48949>`);
      ssrRenderList(unref(toasts), (t) => {
        _push(`<div class="${ssrRenderClass([bgClass(t.type), "pointer-events-auto flex items-start gap-3 px-4 py-3 min-w-[260px] max-w-[360px]"])}" role="status" data-v-9bd48949><span class="mt-0.5 text-sm font-medium" data-v-9bd48949>${ssrInterpolate(t.message)}</span><button class="ml-auto text-xs opacity-70 hover:opacity-100" aria-label="Dismiss" data-v-9bd48949>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:x",
          class: "w-5 h-5 text-text_color"
        }, null, _parent));
        _push(`</button></div>`);
      });
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Toast.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9bd48949"]]);
function resolveTags(options) {
  const _options = toRaw(options);
  const tags = _options.tags.filter(Boolean).map((i) => typeof i === "string" ? { id: i } : i);
  if (_options.id) {
    const { id, config, initCommands } = _options;
    tags.unshift({ id, config, initCommands });
  }
  return tags;
}
function useGtag() {
  const options = useRuntimeConfig().public.gtag;
  resolveTags(options);
  let _gtag;
  _gtag = () => {
  };
  const initialize = (id) => {
  };
  function disableAnalytics(id) {
  }
  function enableAnalytics(id) {
  }
  return {
    gtag: _gtag,
    initialize,
    disableAnalytics,
    enableAnalytics
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CookieControl",
  __ssrInlineRender: true,
  setup(__props) {
    const { gtag } = useGtag();
    const prefs = useCookie("cookie_prefs", {
      sameSite: "lax",
      secure: true,
      maxAge: 60 * 60 * 24 * 180,
      default: () => null
    });
    const opend = ref(prefs.value === null);
    ref(true);
    const measurement = ref(prefs.value?.measurement ?? false);
    const marketing = ref(prefs.value?.marketing ?? false);
    const hasInited = ref(false);
    function savePrefs() {
      const next = { measurement: measurement.value, marketing: marketing.value };
      prefs.value = next;
    }
    function updateConsent() {
      gtag?.("consent", "update", {
        analytics_storage: measurement.value ? "granted" : "denied",
        ad_storage: marketing.value ? "granted" : "denied",
        ad_user_data: marketing.value ? "granted" : "denied",
        ad_personalization: marketing.value ? "granted" : "denied"
      });
    }
    function maybeInit() {
      if (!hasInited.value && (measurement.value || marketing.value)) {
        hasInited.value = true;
      }
    }
    function acceptAll() {
      measurement.value = true;
      marketing.value = true;
      savePrefs();
      updateConsent();
      maybeInit();
      opend.value = false;
    }
    function acceptSelected() {
      savePrefs();
      updateConsent();
      maybeInit();
      opend.value = false;
    }
    function rejectAll() {
      measurement.value = false;
      marketing.value = false;
      savePrefs();
      updateConsent();
      opend.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "z-50" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(TransitionRoot), {
        appear: "",
        show: opend.value,
        enter: "transition-opacity duration-150",
        "enter-from": "opacity-0",
        "enter-to": "opacity-100",
        leave: "transition-opacity duration-150",
        "leave-from": "opacity-100",
        "leave-to": "opacity-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (opend.value) {
              _push2(`<div${_scopeId}><div class="fixed inset-0 z-40 bg-text_color/10 backdrop-blur-[1px]" aria-hidden="true"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (opend.value) {
              _push2(`<div${_scopeId}><div role="dialog" aria-modal="true" class="fixed bottom-0 md:bottom-4 md:left-4 z-50 md:p-4"${_scopeId}><div class="w-full max-w-3xl border border-text_color/10 bg-background_color text-text_color shadow-2xl"${_scopeId}><div class="flex items-center justify-between p-6"${_scopeId}><h2 class="text-xl font-semibold"${_scopeId}>Information</h2><button class="ml-2 p-1 inline-flex items-center justify-center hover:bg-text_color/10 shrink-0" aria-label="Close"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:x",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(`</button></div><div class="px-6 pb-4 space-y-4 text-sm leading-relaxed"${_scopeId}><p${_scopeId}> We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, also for functionality, experience, measurement and marketing (personalized ads) as specified in the `);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/",
                class: "underline"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Cookie Policy`);
                  } else {
                    return [
                      createTextVNode("Cookie Policy")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`. </p><p${_scopeId}>You can freely give, refuse, or withdraw your consent at any time.</p><div class="flex flex-col md:flex-row gap-3 pt-2"${_scopeId}><button disabled class="relative inline-flex h-6 items-center md:px-3 bg-transparent"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:check",
                class: "w-4 h-4 mr-2"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-sm"${_scopeId}>Necessary</span></button>`);
              _push2(ssrRenderComponent(unref(Switch), {
                modelValue: measurement.value,
                "onUpdate:modelValue": ($event) => measurement.value = $event,
                as: "template"
              }, {
                default: withCtx(({ checked }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<button class="relative inline-flex h-6 items-center md:px-3"${_scopeId2}><span class="${ssrRenderClass([checked ? "bg-text_color" : "bg-text_color/30", "mr-2 inline-flex h-6 w-11 items-center rounded-full"])}"${_scopeId2}><span class="${ssrRenderClass([checked ? "translate-x-5" : "translate-x-0", "inline-block h-4 w-4 transform rounded-full bg-background_color transition ml-1"])}"${_scopeId2}></span></span><span class="text-sm"${_scopeId2}>Measurement</span></button>`);
                  } else {
                    return [
                      createVNode("button", { class: "relative inline-flex h-6 items-center md:px-3" }, [
                        createVNode("span", {
                          class: ["mr-2 inline-flex h-6 w-11 items-center rounded-full", checked ? "bg-text_color" : "bg-text_color/30"]
                        }, [
                          createVNode("span", {
                            class: ["inline-block h-4 w-4 transform rounded-full bg-background_color transition ml-1", checked ? "translate-x-5" : "translate-x-0"]
                          }, null, 2)
                        ], 2),
                        createVNode("span", { class: "text-sm" }, "Measurement")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Switch), {
                modelValue: marketing.value,
                "onUpdate:modelValue": ($event) => marketing.value = $event,
                as: "template"
              }, {
                default: withCtx(({ checked }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<button class="relative inline-flex h-6 items-center md:px-3"${_scopeId2}><span class="${ssrRenderClass([checked ? "bg-text_color" : "bg-text_color/30", "mr-2 inline-flex h-6 w-11 items-center rounded-full"])}"${_scopeId2}><span class="${ssrRenderClass([checked ? "translate-x-5" : "translate-x-0", "inline-block h-4 w-4 transform rounded-full bg-background_color transition ml-1"])}"${_scopeId2}></span></span><span class="text-sm"${_scopeId2}>Marketing</span></button>`);
                  } else {
                    return [
                      createVNode("button", { class: "relative inline-flex h-6 items-center md:px-3" }, [
                        createVNode("span", {
                          class: ["mr-2 inline-flex h-6 w-11 items-center rounded-full", checked ? "bg-text_color" : "bg-text_color/30"]
                        }, [
                          createVNode("span", {
                            class: ["inline-block h-4 w-4 transform rounded-full bg-background_color transition ml-1", checked ? "translate-x-5" : "translate-x-0"]
                          }, null, 2)
                        ], 2),
                        createVNode("span", { class: "text-sm" }, "Marketing")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="flex flex-col-reverse md:flex-row gap-3 p-6 pt-2"${_scopeId}><button class="secondary-btn sweep-secondary w-full md:w-fit px-4 py-2"${_scopeId}><span class="relative z-50 text-sm text-text_color"${_scopeId}>Reject Everything</span><span class="sweep-overlay" aria-hidden="true"${_scopeId}></span></button><button class="secondary-btn sweep-secondary w-full md:w-fit md:ml-auto px-4 py-2"${_scopeId}><span class="relative z-50 text-sm text-text_color"${_scopeId}>Accept selected</span><span class="sweep-overlay" aria-hidden="true"${_scopeId}></span></button><button class="primary-btn sweep group w-full md:w-fit px-4 py-2"${_scopeId}><span class="relative z-50 text-sm text-background_color"${_scopeId}>Accept Everything</span><span class="sweep-overlay" aria-hidden="true"${_scopeId}></span></button></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              opend.value ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", {
                  class: "fixed inset-0 z-40 bg-text_color/10 backdrop-blur-[1px]",
                  "aria-hidden": "true"
                })
              ])) : createCommentVNode("", true),
              opend.value ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  class: "fixed bottom-0 md:bottom-4 md:left-4 z-50 md:p-4"
                }, [
                  createVNode("div", { class: "w-full max-w-3xl border border-text_color/10 bg-background_color text-text_color shadow-2xl" }, [
                    createVNode("div", { class: "flex items-center justify-between p-6" }, [
                      createVNode("h2", { class: "text-xl font-semibold" }, "Information"),
                      createVNode("button", {
                        class: "ml-2 p-1 inline-flex items-center justify-center hover:bg-text_color/10 shrink-0",
                        "aria-label": "Close",
                        onClick: ($event) => opend.value = false
                      }, [
                        createVNode(_component_Icon, {
                          name: "lucide:x",
                          class: "w-5 h-5"
                        })
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "px-6 pb-4 space-y-4 text-sm leading-relaxed" }, [
                      createVNode("p", null, [
                        createTextVNode(" We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, also for functionality, experience, measurement and marketing (personalized ads) as specified in the "),
                        createVNode(_component_NuxtLink, {
                          to: "/",
                          class: "underline"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Cookie Policy")
                          ]),
                          _: 1
                        }),
                        createTextVNode(". ")
                      ]),
                      createVNode("p", null, "You can freely give, refuse, or withdraw your consent at any time."),
                      createVNode("div", { class: "flex flex-col md:flex-row gap-3 pt-2" }, [
                        createVNode("button", {
                          disabled: "",
                          class: "relative inline-flex h-6 items-center md:px-3 bg-transparent"
                        }, [
                          createVNode(_component_Icon, {
                            name: "lucide:check",
                            class: "w-4 h-4 mr-2"
                          }),
                          createVNode("span", { class: "text-sm" }, "Necessary")
                        ]),
                        createVNode(unref(Switch), {
                          modelValue: measurement.value,
                          "onUpdate:modelValue": ($event) => measurement.value = $event,
                          as: "template"
                        }, {
                          default: withCtx(({ checked }) => [
                            createVNode("button", { class: "relative inline-flex h-6 items-center md:px-3" }, [
                              createVNode("span", {
                                class: ["mr-2 inline-flex h-6 w-11 items-center rounded-full", checked ? "bg-text_color" : "bg-text_color/30"]
                              }, [
                                createVNode("span", {
                                  class: ["inline-block h-4 w-4 transform rounded-full bg-background_color transition ml-1", checked ? "translate-x-5" : "translate-x-0"]
                                }, null, 2)
                              ], 2),
                              createVNode("span", { class: "text-sm" }, "Measurement")
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(unref(Switch), {
                          modelValue: marketing.value,
                          "onUpdate:modelValue": ($event) => marketing.value = $event,
                          as: "template"
                        }, {
                          default: withCtx(({ checked }) => [
                            createVNode("button", { class: "relative inline-flex h-6 items-center md:px-3" }, [
                              createVNode("span", {
                                class: ["mr-2 inline-flex h-6 w-11 items-center rounded-full", checked ? "bg-text_color" : "bg-text_color/30"]
                              }, [
                                createVNode("span", {
                                  class: ["inline-block h-4 w-4 transform rounded-full bg-background_color transition ml-1", checked ? "translate-x-5" : "translate-x-0"]
                                }, null, 2)
                              ], 2),
                              createVNode("span", { class: "text-sm" }, "Marketing")
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col-reverse md:flex-row gap-3 p-6 pt-2" }, [
                      createVNode("button", {
                        class: "secondary-btn sweep-secondary w-full md:w-fit px-4 py-2",
                        onClick: rejectAll
                      }, [
                        createVNode("span", { class: "relative z-50 text-sm text-text_color" }, "Reject Everything"),
                        createVNode("span", {
                          class: "sweep-overlay",
                          "aria-hidden": "true"
                        })
                      ]),
                      createVNode("button", {
                        class: "secondary-btn sweep-secondary w-full md:w-fit md:ml-auto px-4 py-2",
                        onClick: ($event) => acceptSelected()
                      }, [
                        createVNode("span", { class: "relative z-50 text-sm text-text_color" }, "Accept selected"),
                        createVNode("span", {
                          class: "sweep-overlay",
                          "aria-hidden": "true"
                        })
                      ], 8, ["onClick"]),
                      createVNode("button", {
                        class: "primary-btn sweep group w-full md:w-fit px-4 py-2",
                        onClick: acceptAll
                      }, [
                        createVNode("span", { class: "relative z-50 text-sm text-background_color" }, "Accept Everything"),
                        createVNode("span", {
                          class: "sweep-overlay",
                          "aria-hidden": "true"
                        })
                      ])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!opend.value) {
        _push(`<button type="button" aria-label="Manage cookies" title="Manage cookies" class="fixed bottom-6 left-6 z-30 rounded-full border border-text_color/30 bg-background_color hover:bg-text_color hover:border-background_color/30 text-text_color hover:text-background_color shadow-md hover:shadow-lg p-2 transition flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:cookie",
          class: "w-6 h-6 rounded-ful my-auto"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CookieControl.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppFooter = _sfc_main$3;
      const _component_Toast = __nuxt_component_1;
      const _component_CookieControl = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "smooth-wrapper",
        class: "flex flex-col w-full bg-background_color"
      }, _attrs))}><div id="smooth-content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Toast, null, null, _parent));
      _push(ssrRenderComponent(_component_CookieControl, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-D0MJZjKW.js.map
