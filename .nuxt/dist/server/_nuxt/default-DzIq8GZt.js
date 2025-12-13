import { _ as __nuxt_component_0 } from "./nuxt-link-BeJz8Y8C.js";
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, unref, createVNode, createBlock, createCommentVNode, openBlock, toRaw, ref, reactive } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_0 } from "./virtual_public-Dgbfu3-q.js";
import { d as useRoute, c as useRouter, f as useRuntimeConfig, q as useCookie } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./index-DSJLL3Jq.js";
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, Switch } from "@headlessui/vue";
import { u as useToast } from "./useToast-cVNLFXzw.js";
import "#internal/nuxt/paths";
import "ofetch";
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
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
          { label: "Contact Us", href: "/contact" },
          { label: "FAQs", href: "/faq" },
          { label: "Delivery & Returns", href: "/delivery-returns" },
          { label: "Size Guide", href: "/size-guide" }
        ]
      },
      {
        title: "LEGAL",
        links: [
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Cookie Policy", href: "/cookie-policy" },
          { label: "Terms & Conditions", href: "/terms-conditions" }
        ]
      },
      {
        title: "SOCIAL",
        links: [
          { label: "Instagram", href: "https://instagram.com", external: true },
          { label: "Facebook", href: "https://facebook.com", external: true }
        ]
      }
    ];
    function isPathActive(path) {
      return route.path === path || route.path.startsWith(`${path}/`);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-background_color text-text_color border-t border-text_color/30" }, _attrs))}><div class="w-full px-4 md:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8"><!--[-->`);
      ssrRenderList(linkGroups, (group, i) => {
        _push(`<div class="md:col-span-2"><h3 class="font-semibold mb-4 uppercase tracking-wider text-sm">${ssrInterpolate(group.title)}</h3><ul class="space-y-2 text-sm"><!--[-->`);
        ssrRenderList(group.links, (item, j) => {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.href,
            class: [
              "hover:underline transition-all",
              isPathActive(item.href) ? "font-bold underline" : "font-light"
            ]
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
      _push(`<!--]--><div class="md:col-span-4"><img${ssrRenderAttr("src", _imports_0)} alt="Earth-man" class="max-w-[100%] h-auto object-contain"></div></div><div class="border-t border-text_color/30"><div class="max-w-7xl mx-auto px-6 flex flex-col items-center py-6"><p class="text-xs">© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Earthman. All rights reserved.</p></div></div></footer>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppToastContainer",
  __ssrInlineRender: true,
  setup(__props) {
    const { toasts, remove } = useToast();
    const router = useRouter();
    function handleContinueShopping(toastId) {
      remove(toastId);
      router.push("/shop");
    }
    function handleGoToCheckout(toastId) {
      remove(toastId);
      router.push("/checkout");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 pointer-events-none z-50" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(toasts).filter((t) => t.type === "cart"), (toast) => {
        _push(ssrRenderComponent(unref(TransitionRoot), {
          key: toast.id,
          show: true,
          as: "template"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(Dialog), {
                open: true,
                onClose: ($event) => unref(remove)(toast.id),
                class: "relative z-50"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(TransitionChild), {
                      as: "template",
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="fixed inset-0 bg-text_color/30 backdrop-blur-sm pointer-events-auto"${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "fixed inset-0 bg-text_color/30 backdrop-blur-sm pointer-events-auto" })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="fixed inset-0 flex items-center justify-center p-4 pointer-events-auto"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(TransitionChild), {
                      as: "template",
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0 scale-95",
                      "enter-to": "opacity-100 scale-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100 scale-100",
                      "leave-to": "opacity-0 scale-95"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(DialogPanel), { class: "w-full max-w-md bg-background_color border border-text_color/30 shadow-2xl py-8" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="px-6 pb-6 pt-2"${_scopeId4}><div class="flex justify-center mb-4"${_scopeId4}><div class="w-10 h-10 rounded-full bg-success_text_color/10 flex items-center justify-center"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_Icon, {
                                  name: "lucide:check",
                                  class: "w-5 h-5 text-success_text_color"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div></div><div class="flex items-center text-center gap-4 mb-6"${_scopeId4}><div class="flex-1 min-w-0"${_scopeId4}><h3 class="text-lg font-medium text-text_color leading-tight mb-1"${_scopeId4}>${ssrInterpolate(toast.productName)}</h3><p class="text-sm text-text_color/70"${_scopeId4}>${ssrInterpolate(toast.message)}</p>`);
                                if (toast.quantity && toast.quantity > 1) {
                                  _push5(`<p class="text-sm text-text_color/70 mt-1"${_scopeId4}> Quantity: ${ssrInterpolate(toast.quantity)}</p>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div></div><div class="space-y-3"${_scopeId4}><button type="button" class="btn btn--primary w-full"${_scopeId4}><span class="btn__text"${_scopeId4}>Go to Checkout</span><span class="btn__fill"${_scopeId4}></span></button><button type="button" class="btn btn--secondary w-full"${_scopeId4}><span class="btn__text"${_scopeId4}>Continue Shopping</span><span class="btn__fill"${_scopeId4}></span></button></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "px-6 pb-6 pt-2" }, [
                                    createVNode("div", { class: "flex justify-center mb-4" }, [
                                      createVNode("div", { class: "w-10 h-10 rounded-full bg-success_text_color/10 flex items-center justify-center" }, [
                                        createVNode(_component_Icon, {
                                          name: "lucide:check",
                                          class: "w-5 h-5 text-success_text_color"
                                        })
                                      ])
                                    ]),
                                    createVNode("div", { class: "flex items-center text-center gap-4 mb-6" }, [
                                      createVNode("div", { class: "flex-1 min-w-0" }, [
                                        createVNode("h3", { class: "text-lg font-medium text-text_color leading-tight mb-1" }, toDisplayString(toast.productName), 1),
                                        createVNode("p", { class: "text-sm text-text_color/70" }, toDisplayString(toast.message), 1),
                                        toast.quantity && toast.quantity > 1 ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          class: "text-sm text-text_color/70 mt-1"
                                        }, " Quantity: " + toDisplayString(toast.quantity), 1)) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode("div", { class: "space-y-3" }, [
                                      createVNode("button", {
                                        type: "button",
                                        onClick: ($event) => handleGoToCheckout(toast.id),
                                        class: "btn btn--primary w-full"
                                      }, [
                                        createVNode("span", { class: "btn__text" }, "Go to Checkout"),
                                        createVNode("span", { class: "btn__fill" })
                                      ], 8, ["onClick"]),
                                      createVNode("button", {
                                        type: "button",
                                        onClick: ($event) => handleContinueShopping(toast.id),
                                        class: "btn btn--secondary w-full"
                                      }, [
                                        createVNode("span", { class: "btn__text" }, "Continue Shopping"),
                                        createVNode("span", { class: "btn__fill" })
                                      ], 8, ["onClick"])
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(DialogPanel), { class: "w-full max-w-md bg-background_color border border-text_color/30 shadow-2xl py-8" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "px-6 pb-6 pt-2" }, [
                                  createVNode("div", { class: "flex justify-center mb-4" }, [
                                    createVNode("div", { class: "w-10 h-10 rounded-full bg-success_text_color/10 flex items-center justify-center" }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:check",
                                        class: "w-5 h-5 text-success_text_color"
                                      })
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center text-center gap-4 mb-6" }, [
                                    createVNode("div", { class: "flex-1 min-w-0" }, [
                                      createVNode("h3", { class: "text-lg font-medium text-text_color leading-tight mb-1" }, toDisplayString(toast.productName), 1),
                                      createVNode("p", { class: "text-sm text-text_color/70" }, toDisplayString(toast.message), 1),
                                      toast.quantity && toast.quantity > 1 ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "text-sm text-text_color/70 mt-1"
                                      }, " Quantity: " + toDisplayString(toast.quantity), 1)) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", { class: "space-y-3" }, [
                                    createVNode("button", {
                                      type: "button",
                                      onClick: ($event) => handleGoToCheckout(toast.id),
                                      class: "btn btn--primary w-full"
                                    }, [
                                      createVNode("span", { class: "btn__text" }, "Go to Checkout"),
                                      createVNode("span", { class: "btn__fill" })
                                    ], 8, ["onClick"]),
                                    createVNode("button", {
                                      type: "button",
                                      onClick: ($event) => handleContinueShopping(toast.id),
                                      class: "btn btn--secondary w-full"
                                    }, [
                                      createVNode("span", { class: "btn__text" }, "Continue Shopping"),
                                      createVNode("span", { class: "btn__fill" })
                                    ], 8, ["onClick"])
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "ease-out duration-300",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "ease-in duration-200",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "fixed inset-0 bg-text_color/30 backdrop-blur-sm pointer-events-auto" })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "fixed inset-0 flex items-center justify-center p-4 pointer-events-auto" }, [
                        createVNode(unref(TransitionChild), {
                          as: "template",
                          enter: "ease-out duration-300",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "ease-in duration-200",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "w-full max-w-md bg-background_color border border-text_color/30 shadow-2xl py-8" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "px-6 pb-6 pt-2" }, [
                                  createVNode("div", { class: "flex justify-center mb-4" }, [
                                    createVNode("div", { class: "w-10 h-10 rounded-full bg-success_text_color/10 flex items-center justify-center" }, [
                                      createVNode(_component_Icon, {
                                        name: "lucide:check",
                                        class: "w-5 h-5 text-success_text_color"
                                      })
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center text-center gap-4 mb-6" }, [
                                    createVNode("div", { class: "flex-1 min-w-0" }, [
                                      createVNode("h3", { class: "text-lg font-medium text-text_color leading-tight mb-1" }, toDisplayString(toast.productName), 1),
                                      createVNode("p", { class: "text-sm text-text_color/70" }, toDisplayString(toast.message), 1),
                                      toast.quantity && toast.quantity > 1 ? (openBlock(), createBlock("p", {
                                        key: 0,
                                        class: "text-sm text-text_color/70 mt-1"
                                      }, " Quantity: " + toDisplayString(toast.quantity), 1)) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", { class: "space-y-3" }, [
                                    createVNode("button", {
                                      type: "button",
                                      onClick: ($event) => handleGoToCheckout(toast.id),
                                      class: "btn btn--primary w-full"
                                    }, [
                                      createVNode("span", { class: "btn__text" }, "Go to Checkout"),
                                      createVNode("span", { class: "btn__fill" })
                                    ], 8, ["onClick"]),
                                    createVNode("button", {
                                      type: "button",
                                      onClick: ($event) => handleContinueShopping(toast.id),
                                      class: "btn btn--secondary w-full"
                                    }, [
                                      createVNode("span", { class: "btn__text" }, "Continue Shopping"),
                                      createVNode("span", { class: "btn__fill" })
                                    ], 8, ["onClick"])
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(Dialog), {
                  open: true,
                  onClose: ($event) => unref(remove)(toast.id),
                  class: "relative z-50"
                }, {
                  default: withCtx(() => [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "ease-out duration-300",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "ease-in duration-200",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "fixed inset-0 bg-text_color/30 backdrop-blur-sm pointer-events-auto" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 flex items-center justify-center p-4 pointer-events-auto" }, [
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "ease-out duration-300",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "ease-in duration-200",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-md bg-background_color border border-text_color/30 shadow-2xl py-8" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "px-6 pb-6 pt-2" }, [
                                createVNode("div", { class: "flex justify-center mb-4" }, [
                                  createVNode("div", { class: "w-10 h-10 rounded-full bg-success_text_color/10 flex items-center justify-center" }, [
                                    createVNode(_component_Icon, {
                                      name: "lucide:check",
                                      class: "w-5 h-5 text-success_text_color"
                                    })
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-center text-center gap-4 mb-6" }, [
                                  createVNode("div", { class: "flex-1 min-w-0" }, [
                                    createVNode("h3", { class: "text-lg font-medium text-text_color leading-tight mb-1" }, toDisplayString(toast.productName), 1),
                                    createVNode("p", { class: "text-sm text-text_color/70" }, toDisplayString(toast.message), 1),
                                    toast.quantity && toast.quantity > 1 ? (openBlock(), createBlock("p", {
                                      key: 0,
                                      class: "text-sm text-text_color/70 mt-1"
                                    }, " Quantity: " + toDisplayString(toast.quantity), 1)) : createCommentVNode("", true)
                                  ])
                                ]),
                                createVNode("div", { class: "space-y-3" }, [
                                  createVNode("button", {
                                    type: "button",
                                    onClick: ($event) => handleGoToCheckout(toast.id),
                                    class: "btn btn--primary w-full"
                                  }, [
                                    createVNode("span", { class: "btn__text" }, "Go to Checkout"),
                                    createVNode("span", { class: "btn__fill" })
                                  ], 8, ["onClick"]),
                                  createVNode("button", {
                                    type: "button",
                                    onClick: ($event) => handleContinueShopping(toast.id),
                                    class: "btn btn--secondary w-full"
                                  }, [
                                    createVNode("span", { class: "btn__text" }, "Continue Shopping"),
                                    createVNode("span", { class: "btn__fill" })
                                  ], 8, ["onClick"])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  _: 2
                }, 1032, ["onClose"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppToastContainer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
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
const COOKIE_MAX_AGE_DAYS = 180;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CookieControl",
  __ssrInlineRender: true,
  setup(__props) {
    const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * COOKIE_MAX_AGE_DAYS;
    const { gtag } = useGtag();
    const cookiePrefs = useCookie("cookie_prefs", {
      sameSite: "lax",
      secure: true,
      path: "/",
      maxAge: COOKIE_MAX_AGE_SECONDS,
      default: () => null
    });
    const isOpen = ref(cookiePrefs.value === null);
    const hasInitialized = ref(false);
    const preferences = reactive({
      measurement: cookiePrefs.value?.measurement ?? false,
      marketing: cookiePrefs.value?.marketing ?? false
    });
    function savePreferences() {
      cookiePrefs.value = {
        measurement: preferences.measurement,
        marketing: preferences.marketing
      };
    }
    function updateGtagConsent() {
      const consentParams = {
        analytics_storage: preferences.measurement ? "granted" : "denied",
        ad_storage: preferences.marketing ? "granted" : "denied",
        ad_user_data: preferences.marketing ? "granted" : "denied",
        ad_personalization: preferences.marketing ? "granted" : "denied"
      };
      gtag?.("consent", "update", consentParams);
    }
    function initializeGtagIfNeeded() {
      const shouldInitialize = preferences.measurement || preferences.marketing;
      if (!hasInitialized.value && shouldInitialize) {
        hasInitialized.value = true;
      }
    }
    function handleAcceptAll() {
      preferences.measurement = true;
      preferences.marketing = true;
      savePreferences();
      updateGtagConsent();
      initializeGtagIfNeeded();
      isOpen.value = false;
    }
    function handleAcceptSelected() {
      savePreferences();
      updateGtagConsent();
      initializeGtagIfNeeded();
      isOpen.value = false;
    }
    function handleRejectAll() {
      preferences.measurement = false;
      preferences.marketing = false;
      savePreferences();
      updateGtagConsent();
      isOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "z-50" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(TransitionRoot), {
        appear: "",
        show: unref(isOpen),
        enter: "transition-opacity duration-150",
        "enter-from": "opacity-0",
        "enter-to": "opacity-100",
        leave: "transition-opacity duration-150",
        "leave-from": "opacity-100",
        "leave-to": "opacity-0"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isOpen)) {
              _push2(`<div${_scopeId}><div class="fixed inset-0 z-40 bg-text_color/10 backdrop-blur-[1px]" aria-hidden="true"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isOpen)) {
              _push2(`<div${_scopeId}><div role="dialog" aria-modal="true" class="fixed bottom-0 md:bottom-4 md:left-4 z-50 md:p-4"${_scopeId}><div class="w-full max-w-3xl border border-text_color/10 bg-background_color text-text_color shadow-2xl"${_scopeId}><div class="flex items-center justify-between p-6"${_scopeId}><h2 class="text-xl font-semibold"${_scopeId}>Cookie Settings</h2><button class="ml-2 p-1 inline-flex items-center justify-center hover:bg-text_color/10 shrink-0" aria-label="Close cookie settings"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:x",
                class: "w-5 h-5"
              }, null, _parent2, _scopeId));
              _push2(`</button></div><div class="px-6 pb-4 space-y-4 text-sm leading-relaxed"${_scopeId}><p${_scopeId}> We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, also for functionality, experience, measurement and marketing (personalized ads) as specified in the `);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/cookie-policy",
                class: "underline hover:no-underline"
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
              _push2(`. </p><p${_scopeId}>You can freely give, refuse, or withdraw your consent at any time.</p><div class="flex flex-col md:flex-row gap-3 pt-2"${_scopeId}><button disabled class="relative inline-flex h-6 items-center md:px-3 bg-transparent cursor-not-allowed opacity-50" aria-label="Necessary cookies (always enabled)"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:check",
                class: "w-4 h-4 mr-2"
              }, null, _parent2, _scopeId));
              _push2(`<span class="text-sm"${_scopeId}>Necessary</span></button>`);
              _push2(ssrRenderComponent(unref(Switch), {
                modelValue: unref(preferences).measurement,
                "onUpdate:modelValue": ($event) => unref(preferences).measurement = $event,
                as: "template"
              }, {
                default: withCtx(({ checked }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<button class="relative inline-flex h-6 items-center md:px-3"${ssrRenderAttr("aria-checked", checked)} role="switch" aria-label="Toggle measurement cookies"${_scopeId2}><span class="${ssrRenderClass([checked ? "bg-text_color" : "bg-text_color/30", "mr-2 inline-flex h-6 w-11 items-center rounded-full transition-colors"])}"${_scopeId2}><span class="${ssrRenderClass([checked ? "translate-x-5" : "translate-x-0", "inline-block h-4 w-4 transform rounded-full bg-background_color transition-transform ml-1"])}"${_scopeId2}></span></span><span class="text-sm"${_scopeId2}>Measurement</span></button>`);
                  } else {
                    return [
                      createVNode("button", {
                        class: "relative inline-flex h-6 items-center md:px-3",
                        "aria-checked": checked,
                        role: "switch",
                        "aria-label": "Toggle measurement cookies"
                      }, [
                        createVNode("span", {
                          class: ["mr-2 inline-flex h-6 w-11 items-center rounded-full transition-colors", checked ? "bg-text_color" : "bg-text_color/30"]
                        }, [
                          createVNode("span", {
                            class: ["inline-block h-4 w-4 transform rounded-full bg-background_color transition-transform ml-1", checked ? "translate-x-5" : "translate-x-0"]
                          }, null, 2)
                        ], 2),
                        createVNode("span", { class: "text-sm" }, "Measurement")
                      ], 8, ["aria-checked"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(unref(Switch), {
                modelValue: unref(preferences).marketing,
                "onUpdate:modelValue": ($event) => unref(preferences).marketing = $event,
                as: "template"
              }, {
                default: withCtx(({ checked }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<button class="relative inline-flex h-6 items-center md:px-3"${ssrRenderAttr("aria-checked", checked)} role="switch" aria-label="Toggle marketing cookies"${_scopeId2}><span class="${ssrRenderClass([checked ? "bg-text_color" : "bg-text_color/30", "mr-2 inline-flex h-6 w-11 items-center rounded-full transition-colors"])}"${_scopeId2}><span class="${ssrRenderClass([checked ? "translate-x-5" : "translate-x-0", "inline-block h-4 w-4 transform rounded-full bg-background_color transition-transform ml-1"])}"${_scopeId2}></span></span><span class="text-sm"${_scopeId2}>Marketing</span></button>`);
                  } else {
                    return [
                      createVNode("button", {
                        class: "relative inline-flex h-6 items-center md:px-3",
                        "aria-checked": checked,
                        role: "switch",
                        "aria-label": "Toggle marketing cookies"
                      }, [
                        createVNode("span", {
                          class: ["mr-2 inline-flex h-6 w-11 items-center rounded-full transition-colors", checked ? "bg-text_color" : "bg-text_color/30"]
                        }, [
                          createVNode("span", {
                            class: ["inline-block h-4 w-4 transform rounded-full bg-background_color transition-transform ml-1", checked ? "translate-x-5" : "translate-x-0"]
                          }, null, 2)
                        ], 2),
                        createVNode("span", { class: "text-sm" }, "Marketing")
                      ], 8, ["aria-checked"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="flex flex-col-reverse md:flex-row gap-3 p-6 pt-2"${_scopeId}><button class="secondary-btn sweep-secondary w-full md:w-fit px-4 py-2"${_scopeId}><span class="relative z-50 text-sm text-text_color"${_scopeId}>Reject All</span><span class="sweep-overlay" aria-hidden="true"${_scopeId}></span></button><button class="secondary-btn sweep-secondary w-full md:w-fit md:ml-auto px-4 py-2"${_scopeId}><span class="relative z-50 text-sm text-text_color"${_scopeId}>Accept Selected</span><span class="sweep-overlay" aria-hidden="true"${_scopeId}></span></button><button class="primary-btn sweep group w-full md:w-fit px-4 py-2"${_scopeId}><span class="relative z-50 text-sm text-background_color"${_scopeId}>Accept All</span><span class="sweep-overlay" aria-hidden="true"${_scopeId}></span></button></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(isOpen) ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", {
                  class: "fixed inset-0 z-40 bg-text_color/10 backdrop-blur-[1px]",
                  "aria-hidden": "true"
                })
              ])) : createCommentVNode("", true),
              unref(isOpen) ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  class: "fixed bottom-0 md:bottom-4 md:left-4 z-50 md:p-4"
                }, [
                  createVNode("div", { class: "w-full max-w-3xl border border-text_color/10 bg-background_color text-text_color shadow-2xl" }, [
                    createVNode("div", { class: "flex items-center justify-between p-6" }, [
                      createVNode("h2", { class: "text-xl font-semibold" }, "Cookie Settings"),
                      createVNode("button", {
                        class: "ml-2 p-1 inline-flex items-center justify-center hover:bg-text_color/10 shrink-0",
                        "aria-label": "Close cookie settings",
                        onClick: ($event) => isOpen.value = false
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
                          to: "/cookie-policy",
                          class: "underline hover:no-underline"
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
                          class: "relative inline-flex h-6 items-center md:px-3 bg-transparent cursor-not-allowed opacity-50",
                          "aria-label": "Necessary cookies (always enabled)"
                        }, [
                          createVNode(_component_Icon, {
                            name: "lucide:check",
                            class: "w-4 h-4 mr-2"
                          }),
                          createVNode("span", { class: "text-sm" }, "Necessary")
                        ]),
                        createVNode(unref(Switch), {
                          modelValue: unref(preferences).measurement,
                          "onUpdate:modelValue": ($event) => unref(preferences).measurement = $event,
                          as: "template"
                        }, {
                          default: withCtx(({ checked }) => [
                            createVNode("button", {
                              class: "relative inline-flex h-6 items-center md:px-3",
                              "aria-checked": checked,
                              role: "switch",
                              "aria-label": "Toggle measurement cookies"
                            }, [
                              createVNode("span", {
                                class: ["mr-2 inline-flex h-6 w-11 items-center rounded-full transition-colors", checked ? "bg-text_color" : "bg-text_color/30"]
                              }, [
                                createVNode("span", {
                                  class: ["inline-block h-4 w-4 transform rounded-full bg-background_color transition-transform ml-1", checked ? "translate-x-5" : "translate-x-0"]
                                }, null, 2)
                              ], 2),
                              createVNode("span", { class: "text-sm" }, "Measurement")
                            ], 8, ["aria-checked"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(unref(Switch), {
                          modelValue: unref(preferences).marketing,
                          "onUpdate:modelValue": ($event) => unref(preferences).marketing = $event,
                          as: "template"
                        }, {
                          default: withCtx(({ checked }) => [
                            createVNode("button", {
                              class: "relative inline-flex h-6 items-center md:px-3",
                              "aria-checked": checked,
                              role: "switch",
                              "aria-label": "Toggle marketing cookies"
                            }, [
                              createVNode("span", {
                                class: ["mr-2 inline-flex h-6 w-11 items-center rounded-full transition-colors", checked ? "bg-text_color" : "bg-text_color/30"]
                              }, [
                                createVNode("span", {
                                  class: ["inline-block h-4 w-4 transform rounded-full bg-background_color transition-transform ml-1", checked ? "translate-x-5" : "translate-x-0"]
                                }, null, 2)
                              ], 2),
                              createVNode("span", { class: "text-sm" }, "Marketing")
                            ], 8, ["aria-checked"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col-reverse md:flex-row gap-3 p-6 pt-2" }, [
                      createVNode("button", {
                        class: "secondary-btn sweep-secondary w-full md:w-fit px-4 py-2",
                        onClick: handleRejectAll
                      }, [
                        createVNode("span", { class: "relative z-50 text-sm text-text_color" }, "Reject All"),
                        createVNode("span", {
                          class: "sweep-overlay",
                          "aria-hidden": "true"
                        })
                      ]),
                      createVNode("button", {
                        class: "secondary-btn sweep-secondary w-full md:w-fit md:ml-auto px-4 py-2",
                        onClick: handleAcceptSelected
                      }, [
                        createVNode("span", { class: "relative z-50 text-sm text-text_color" }, "Accept Selected"),
                        createVNode("span", {
                          class: "sweep-overlay",
                          "aria-hidden": "true"
                        })
                      ]),
                      createVNode("button", {
                        class: "primary-btn sweep group w-full md:w-fit px-4 py-2",
                        onClick: handleAcceptAll
                      }, [
                        createVNode("span", { class: "relative z-50 text-sm text-background_color" }, "Accept All"),
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
      if (!unref(isOpen)) {
        _push(`<button type="button" aria-label="Manage cookie preferences" title="Manage cookies" class="fixed bottom-6 left-6 z-30 rounded-full border border-text_color/30 bg-background_color hover:bg-text_color hover:border-background_color/30 text-text_color hover:text-background_color shadow-md hover:shadow-lg p-2 transition-all duration-200 flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:cookie",
          class: "w-6 h-6"
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
      const _component_AppToastContainer = _sfc_main$2;
      const _component_CookieControl = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "smooth-wrapper",
        class: "flex flex-col w-full bg-background_color"
      }, _attrs))}><div id="smooth-content">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_AppToastContainer, null, null, _parent));
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
//# sourceMappingURL=default-DzIq8GZt.js.map
