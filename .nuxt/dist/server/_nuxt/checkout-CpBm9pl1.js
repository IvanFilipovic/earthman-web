import { _ as __nuxt_component_0 } from "./AppNavigation-PSSArelZ.js";
import { defineComponent, ref, computed, mergeProps, unref, isRef, withCtx, createVNode, withDirectives, vModelText, vModelSelect, createBlock, createCommentVNode, toDisplayString, openBlock, createTextVNode, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from "vue/server-renderer";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { e as useRuntimeConfig, n as navigateTo, _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-7pp3EPK3.js";
import "./index-qGNUStbk.js";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
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
const FREE_THRESHOLD = 200;
const FLAT_SHIPPING = 12.99;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const toNum = (x) => Number.parseFloat(String(x ?? "0").replace(",", ".")) || 0;
    const money = (n) => Number.isInteger(n) ? n : n.toFixed(2);
    const tabIndex = ref(0);
    const cart = ref({ items: [], cart_total_to_pay: "0.00" });
    ref(false);
    const lineTotal = (it) => {
      const unit = toNum(it.unit_price_discounted ?? it.unit_price_original);
      return unit * (it.quantity ?? 0);
    };
    const subtotal = computed(
      () => cart.value.items.reduce((sum, it) => sum + lineTotal(it), 0)
    );
    const shippingFee = computed(
      () => subtotal.value >= FREE_THRESHOLD ? 0 : FLAT_SHIPPING
    );
    const total = computed(() => subtotal.value + shippingFee.value);
    const form = ref({
      // Billing
      firstName: "",
      lastName: "",
      country: "Croatia",
      // ⬅️ renamed from region; backend expects "country"
      address: "",
      city: "",
      postal_code: "",
      phone_number: "",
      email: "",
      // Delivery
      delivery_address: "",
      delivery_city: "",
      delivery_postal_code: "",
      // Payment
      payment_method: "",
      // Extras
      newsletter: false,
      privacyAccepted: false
    });
    const isBillingValid = computed(
      () => !!form.value.email && !!form.value.country && !!form.value.address && !!form.value.city && !!form.value.postal_code && !!form.value.phone_number
    );
    const isDeliveryValid = computed(
      () => !!form.value.delivery_address && !!form.value.delivery_city && !!form.value.delivery_postal_code
    );
    const isPaymentValid = computed(
      () => !!form.value.payment_method && !!form.value.privacyAccepted
    );
    const isValid = computed(() => isBillingValid.value && isDeliveryValid.value && isPaymentValid.value);
    const ctaLabel = computed(() => {
      if (tabIndex.value === 0) return "Continue to Delivery";
      if (tabIndex.value === 1) return "Continue to Payment";
      return "Place Order";
    });
    const ctaDisabled = computed(() => {
      if (submitting.value || cart.value.items.length === 0) return true;
      if (tabIndex.value === 0) return !isBillingValid.value;
      if (tabIndex.value === 1) return !isDeliveryValid.value;
      return !isPaymentValid.value;
    });
    async function onCtaClick() {
      if (tabIndex.value === 0) {
        if (isBillingValid.value) tabIndex.value = 1;
        return;
      }
      if (tabIndex.value === 1) {
        if (isDeliveryValid.value) tabIndex.value = 2;
        return;
      }
      await submitOrder();
    }
    const payload = {
      email: form.value.email,
      country: form.value.country,
      address: form.value.address,
      city: form.value.city,
      postal_code: form.value.postal_code,
      delivery_address: form.value.delivery_address,
      delivery_city: form.value.delivery_city,
      delivery_postal_code: form.value.delivery_postal_code,
      phone_number: form.value.phone_number,
      payment_method: form.value.payment_method,
      shipping_cost: shippingFee.value
    };
    const submitting = ref(false);
    const errorMsg = ref("");
    async function submitOrder() {
      errorMsg.value = "";
      if (!isValid.value) {
        errorMsg.value = "Please complete all required fields.";
        return;
      }
      if (cart.value.items.length === 0) {
        errorMsg.value = "Your cart is empty.";
        return;
      }
      try {
        submitting.value = true;
        const res = await $fetch(`${config.public.apiBase}/public/orders/create/`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: payload
        });
        navigateTo({ path: "/thank-you", query: { ref: res.order_reference, total: res.total_price } });
      } catch (e) {
        errorMsg.value = e?.data?.detail || "Could not create order.";
        console.error("Order create failed", e);
      } finally {
        submitting.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-9dbd5076>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="flex flex-col md:flex-row items-start md:items-center justify-between px-8 pt-1 gap-6" data-v-9dbd5076><div class="flex justify-start w-full" data-v-9dbd5076><div class="flex items-center" data-v-9dbd5076><p class="text-background_color" data-v-9dbd5076>Delivery data</p></div></div></div><div class="flex flex-col md:flex-row pt-8 md:px-8 mt-6 md:gap-x-16" data-v-9dbd5076><form class="w-full" data-v-9dbd5076>`);
      _push(ssrRenderComponent(unref(TabGroup), {
        as: "div",
        selectedIndex: unref(tabIndex),
        "onUpdate:selectedIndex": ($event) => isRef(tabIndex) ? tabIndex.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabList), { class: "flex gap-2 border-b border-text_color/30" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Tab), null, {
                    default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button class="${ssrRenderClass([selected ? "bg-text_color/5 font-medium" : "opacity-60", "px-4 py-2 text-xs uppercase tracking-widest"])}" data-v-9dbd5076${_scopeId3}>Billing</button>`);
                      } else {
                        return [
                          createVNode("button", {
                            class: ["px-4 py-2 text-xs uppercase tracking-widest", selected ? "bg-text_color/5 font-medium" : "opacity-60"]
                          }, "Billing", 2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Tab), null, {
                    default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button class="${ssrRenderClass([selected ? "bg-text_color/5 font-medium" : "opacity-60", "px-4 py-2 text-xs uppercase tracking-widest"])}" data-v-9dbd5076${_scopeId3}>Delivery</button>`);
                      } else {
                        return [
                          createVNode("button", {
                            class: ["px-4 py-2 text-xs uppercase tracking-widest", selected ? "bg-text_color/5 font-medium" : "opacity-60"]
                          }, "Delivery", 2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Tab), null, {
                    default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<button class="${ssrRenderClass([selected ? "bg-text_color/5 font-medium" : "opacity-60", "px-4 py-2 text-xs uppercase tracking-widest"])}" data-v-9dbd5076${_scopeId3}>Payment</button>`);
                      } else {
                        return [
                          createVNode("button", {
                            class: ["px-4 py-2 text-xs uppercase tracking-widest", selected ? "bg-text_color/5 font-medium" : "opacity-60"]
                          }, "Payment", 2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Tab), null, {
                      default: withCtx(({ selected }) => [
                        createVNode("button", {
                          class: ["px-4 py-2 text-xs uppercase tracking-widest", selected ? "bg-text_color/5 font-medium" : "opacity-60"]
                        }, "Billing", 2)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Tab), null, {
                      default: withCtx(({ selected }) => [
                        createVNode("button", {
                          class: ["px-4 py-2 text-xs uppercase tracking-widest", selected ? "bg-text_color/5 font-medium" : "opacity-60"]
                        }, "Delivery", 2)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(Tab), null, {
                      default: withCtx(({ selected }) => [
                        createVNode("button", {
                          class: ["px-4 py-2 text-xs uppercase tracking-widest", selected ? "bg-text_color/5 font-medium" : "opacity-60"]
                        }, "Payment", 2)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(TabPanels), { class: "mt-8 space-y-10" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabPanel), { class: "space-y-8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-9dbd5076${_scopeId3}><div class="md:col-span-2" data-v-9dbd5076${_scopeId3}><label class="block text-xs uppercase tracking-widest mb-2" data-v-9dbd5076${_scopeId3}>E-mail</label><input${ssrRenderAttr("value", unref(form).email)} type="email" class="input" required data-v-9dbd5076${_scopeId3}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-9dbd5076${_scopeId3}><div data-v-9dbd5076${_scopeId3}><label class="block text-xs uppercase tracking-widest mb-2" data-v-9dbd5076${_scopeId3}>Name</label><input${ssrRenderAttr("value", unref(form).firstName)} type="text" class="input" data-v-9dbd5076${_scopeId3}></div><div data-v-9dbd5076${_scopeId3}><label class="block text-xs uppercase tracking-widest mb-2" data-v-9dbd5076${_scopeId3}>Surname</label><input${ssrRenderAttr("value", unref(form).lastName)} type="text" class="input" data-v-9dbd5076${_scopeId3}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-9dbd5076${_scopeId3}><div class="md:col-span-2" data-v-9dbd5076${_scopeId3}><label class="block text-xs uppercase tracking-widest mb-2" data-v-9dbd5076${_scopeId3}>Address</label><input${ssrRenderAttr("value", unref(form).address)} type="text" class="input" placeholder="Street, number" required data-v-9dbd5076${_scopeId3}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-9dbd5076${_scopeId3}><div data-v-9dbd5076${_scopeId3}><label class="block text-xs uppercase tracking-widest mb-2" data-v-9dbd5076${_scopeId3}>Post code</label><input${ssrRenderAttr("value", unref(form).postal_code)} type="text" class="input" inputmode="numeric" required data-v-9dbd5076${_scopeId3}></div><div data-v-9dbd5076${_scopeId3}><label class="block text-xs uppercase tracking-widest mb-2" data-v-9dbd5076${_scopeId3}>Town / City</label><input${ssrRenderAttr("value", unref(form).city)} type="text" class="input" required data-v-9dbd5076${_scopeId3}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-9dbd5076${_scopeId3}><div data-v-9dbd5076${_scopeId3}><label class="block text-xs uppercase tracking-widest mb-2" data-v-9dbd5076${_scopeId3}>Country / Region</label><select class="input" data-v-9dbd5076${_scopeId3}><option value="Croatia" data-v-9dbd5076${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, "Croatia") : ssrLooseEqual(unref(form).country, "Croatia")) ? " selected" : ""}${_scopeId3}>Croatia</option><option value="Slovenia" data-v-9dbd5076${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, "Slovenia") : ssrLooseEqual(unref(form).country, "Slovenia")) ? " selected" : ""}${_scopeId3}>Slovenia</option><option value="Austria" data-v-9dbd5076${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, "Austria") : ssrLooseEqual(unref(form).country, "Austria")) ? " selected" : ""}${_scopeId3}>Austria</option><option value="Germany" data-v-9dbd5076${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, "Germany") : ssrLooseEqual(unref(form).country, "Germany")) ? " selected" : ""}${_scopeId3}>Germany</option><option value="Italy" data-v-9dbd5076${ssrIncludeBooleanAttr(Array.isArray(unref(form).country) ? ssrLooseContain(unref(form).country, "Italy") : ssrLooseEqual(unref(form).country, "Italy")) ? " selected" : ""}${_scopeId3}>Italy</option></select></div><div data-v-9dbd5076${_scopeId3}><label class="block text-xs uppercase tracking-widest mb-2" data-v-9dbd5076${_scopeId3}>Telephone</label><input${ssrRenderAttr("value", unref(form).phone_number)} type="tel" class="input" required data-v-9dbd5076${_scopeId3}></div></div><div class="pt-2" data-v-9dbd5076${_scopeId3}><button class="w-full text-center py-3 primary-btn cursor-pointer"${ssrIncludeBooleanAttr(unref(ctaDisabled)) ? " disabled" : ""} type="button" data-v-9dbd5076${_scopeId3}><span data-v-9dbd5076${_scopeId3}>${ssrInterpolate(unref(ctaLabel))}</span></button>`);
                        if (unref(errorMsg)) {
                          _push4(`<p class="mt-3 text-sm text-error_text_color" data-v-9dbd5076${_scopeId3}>${ssrInterpolate(unref(errorMsg))}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", { class: "md:col-span-2" }, [
                              createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "E-mail"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                type: "email",
                                class: "input",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  unref(form).email,
                                  void 0,
                                  { trim: true }
                                ]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Name"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                                type: "text",
                                class: "input"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  unref(form).firstName,
                                  void 0,
                                  { trim: true }
                                ]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Surname"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                                type: "text",
                                class: "input"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  unref(form).lastName,
                                  void 0,
                                  { trim: true }
                                ]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", { class: "md:col-span-2" }, [
                              createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Address"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                type: "text",
                                class: "input",
                                placeholder: "Street, number",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  unref(form).address,
                                  void 0,
                                  { trim: true }
                                ]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Post code"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                                type: "text",
                                class: "input",
                                inputmode: "numeric",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  unref(form).postal_code,
                                  void 0,
                                  { trim: true }
                                ]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Town / City"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).city = $event,
                                type: "text",
                                class: "input",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  unref(form).city,
                                  void 0,
                                  { trim: true }
                                ]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Country / Region"),
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => unref(form).country = $event,
                                class: "input"
                              }, [
                                createVNode("option", { value: "Croatia" }, "Croatia"),
                                createVNode("option", { value: "Slovenia" }, "Slovenia"),
                                createVNode("option", { value: "Austria" }, "Austria"),
                                createVNode("option", { value: "Germany" }, "Germany"),
                                createVNode("option", { value: "Italy" }, "Italy")
                              ], 8, ["onUpdate:modelValue"]), [
                                [vModelSelect, unref(form).country]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Telephone"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).phone_number = $event,
                                type: "tel",
                                class: "input",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  unref(form).phone_number,
                                  void 0,
                                  { trim: true }
                                ]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "pt-2" }, [
                            createVNode("button", {
                              class: "w-full text-center py-3 primary-btn cursor-pointer",
                              disabled: unref(ctaDisabled),
                              type: "button",
                              onClick: onCtaClick
                            }, [
                              createVNode("span", null, toDisplayString(unref(ctaLabel)), 1)
                            ], 8, ["disabled"]),
                            unref(errorMsg) ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-3 text-sm text-error_text_color"
                            }, toDisplayString(unref(errorMsg)), 1)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(TabPanel), { class: "space-y-8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-9dbd5076${_scopeId3}><div class="md:col-span-2" data-v-9dbd5076${_scopeId3}><label class="block text-xs uppercase tracking-widest mb-2" data-v-9dbd5076${_scopeId3}>Delivery Address</label><input${ssrRenderAttr("value", unref(form).delivery_address)} type="text" class="input" placeholder="Street, number" required data-v-9dbd5076${_scopeId3}></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-9dbd5076${_scopeId3}><div data-v-9dbd5076${_scopeId3}><label class="block text-xs uppercase tracking-widest mb-2" data-v-9dbd5076${_scopeId3}>Delivery Post code</label><input${ssrRenderAttr("value", unref(form).delivery_postal_code)} type="text" class="input" inputmode="numeric" required data-v-9dbd5076${_scopeId3}></div><div data-v-9dbd5076${_scopeId3}><label class="block text-xs uppercase tracking-widest mb-2" data-v-9dbd5076${_scopeId3}>Delivery City</label><input${ssrRenderAttr("value", unref(form).delivery_city)} type="text" class="input" required data-v-9dbd5076${_scopeId3}></div></div><div class="pt-2" data-v-9dbd5076${_scopeId3}><button class="w-full text-center py-3 primary-btn cursor-pointer"${ssrIncludeBooleanAttr(unref(ctaDisabled)) ? " disabled" : ""} type="button" data-v-9dbd5076${_scopeId3}><span data-v-9dbd5076${_scopeId3}>${ssrInterpolate(unref(ctaLabel))}</span></button>`);
                        if (unref(errorMsg)) {
                          _push4(`<p class="mt-3 text-sm text-error_text_color" data-v-9dbd5076${_scopeId3}>${ssrInterpolate(unref(errorMsg))}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", { class: "md:col-span-2" }, [
                              createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery Address"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).delivery_address = $event,
                                type: "text",
                                class: "input",
                                placeholder: "Street, number",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  unref(form).delivery_address,
                                  void 0,
                                  { trim: true }
                                ]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery Post code"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).delivery_postal_code = $event,
                                type: "text",
                                class: "input",
                                inputmode: "numeric",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  unref(form).delivery_postal_code,
                                  void 0,
                                  { trim: true }
                                ]
                              ])
                            ]),
                            createVNode("div", null, [
                              createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery City"),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => unref(form).delivery_city = $event,
                                type: "text",
                                class: "input",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [
                                  vModelText,
                                  unref(form).delivery_city,
                                  void 0,
                                  { trim: true }
                                ]
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "pt-2" }, [
                            createVNode("button", {
                              class: "w-full text-center py-3 primary-btn cursor-pointer",
                              disabled: unref(ctaDisabled),
                              type: "button",
                              onClick: onCtaClick
                            }, [
                              createVNode("span", null, toDisplayString(unref(ctaLabel)), 1)
                            ], 8, ["disabled"]),
                            unref(errorMsg) ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-3 text-sm text-error_text_color"
                            }, toDisplayString(unref(errorMsg)), 1)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(TabPanel), { class: "space-y-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-xs uppercase tracking-widest" data-v-9dbd5076${_scopeId3}>Payment method</div><div class="flex gap-3" data-v-9dbd5076${_scopeId3}><button type="button" class="${ssrRenderClass([unref(form).payment_method === "card" ? "border-text_color font-medium" : "border-text_color/30", "px-4 py-2 border text-sm"])}" data-v-9dbd5076${_scopeId3}>Card</button><button type="button" class="${ssrRenderClass([unref(form).payment_method === "paypal" ? "border-text_color font-medium" : "border-text_color/30", "px-4 py-2 border text-sm"])}" data-v-9dbd5076${_scopeId3}>PayPal</button><button type="button" class="${ssrRenderClass([unref(form).payment_method === "cod" ? "border-text_color font-medium" : "border-text_color/30", "px-4 py-2 border text-sm"])}" data-v-9dbd5076${_scopeId3}>Cash on Delivery</button></div><div class="space-y-4 pt-2" data-v-9dbd5076${_scopeId3}><label class="flex items-center gap-3 text-sm" data-v-9dbd5076${_scopeId3}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).newsletter) ? ssrLooseContain(unref(form).newsletter, null) : unref(form).newsletter) ? " checked" : ""} class="checkbox" data-v-9dbd5076${_scopeId3}> I want to receive personalised commercial communications by email. </label><label class="flex items-center gap-3 text-sm" data-v-9dbd5076${_scopeId3}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).privacyAccepted) ? ssrLooseContain(unref(form).privacyAccepted, null) : unref(form).privacyAccepted) ? " checked" : ""} class="checkbox" required data-v-9dbd5076${_scopeId3}><a href="#" class="underline" data-v-9dbd5076${_scopeId3}>I have read and understand the Privacy and Cookies Policy.</a></label></div><div class="pt-2" data-v-9dbd5076${_scopeId3}><button class="w-full text-center py-3 primary-btn cursor-pointer"${ssrIncludeBooleanAttr(unref(ctaDisabled)) ? " disabled" : ""} type="button" data-v-9dbd5076${_scopeId3}><span data-v-9dbd5076${_scopeId3}>${ssrInterpolate(unref(ctaLabel))}</span></button>`);
                        if (unref(errorMsg)) {
                          _push4(`<p class="mt-3 text-sm text-error_text_color" data-v-9dbd5076${_scopeId3}>${ssrInterpolate(unref(errorMsg))}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-xs uppercase tracking-widest" }, "Payment method"),
                          createVNode("div", { class: "flex gap-3" }, [
                            createVNode("button", {
                              type: "button",
                              class: ["px-4 py-2 border text-sm", unref(form).payment_method === "card" ? "border-text_color font-medium" : "border-text_color/30"],
                              onClick: ($event) => unref(form).payment_method = "card"
                            }, "Card", 10, ["onClick"]),
                            createVNode("button", {
                              type: "button",
                              class: ["px-4 py-2 border text-sm", unref(form).payment_method === "paypal" ? "border-text_color font-medium" : "border-text_color/30"],
                              onClick: ($event) => unref(form).payment_method = "paypal"
                            }, "PayPal", 10, ["onClick"]),
                            createVNode("button", {
                              type: "button",
                              class: ["px-4 py-2 border text-sm", unref(form).payment_method === "cod" ? "border-text_color font-medium" : "border-text_color/30"],
                              onClick: ($event) => unref(form).payment_method = "cod"
                            }, "Cash on Delivery", 10, ["onClick"])
                          ]),
                          createVNode("div", { class: "space-y-4 pt-2" }, [
                            createVNode("label", { class: "flex items-center gap-3 text-sm" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => unref(form).newsletter = $event,
                                class: "checkbox"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).newsletter]
                              ]),
                              createTextVNode(" I want to receive personalised commercial communications by email. ")
                            ]),
                            createVNode("label", { class: "flex items-center gap-3 text-sm" }, [
                              withDirectives(createVNode("input", {
                                type: "checkbox",
                                "onUpdate:modelValue": ($event) => unref(form).privacyAccepted = $event,
                                class: "checkbox",
                                required: ""
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelCheckbox, unref(form).privacyAccepted]
                              ]),
                              createVNode("a", {
                                href: "#",
                                class: "underline"
                              }, "I have read and understand the Privacy and Cookies Policy.")
                            ])
                          ]),
                          createVNode("div", { class: "pt-2" }, [
                            createVNode("button", {
                              class: "w-full text-center py-3 primary-btn cursor-pointer",
                              disabled: unref(ctaDisabled),
                              type: "button",
                              onClick: onCtaClick
                            }, [
                              createVNode("span", null, toDisplayString(unref(ctaLabel)), 1)
                            ], 8, ["disabled"]),
                            unref(errorMsg) ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "mt-3 text-sm text-error_text_color"
                            }, toDisplayString(unref(errorMsg)), 1)) : createCommentVNode("", true)
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TabPanel), { class: "space-y-8" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", { class: "md:col-span-2" }, [
                            createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "E-mail"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              type: "email",
                              class: "input",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [
                                vModelText,
                                unref(form).email,
                                void 0,
                                { trim: true }
                              ]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Name"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                              type: "text",
                              class: "input"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [
                                vModelText,
                                unref(form).firstName,
                                void 0,
                                { trim: true }
                              ]
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Surname"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                              type: "text",
                              class: "input"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [
                                vModelText,
                                unref(form).lastName,
                                void 0,
                                { trim: true }
                              ]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", { class: "md:col-span-2" }, [
                            createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Address"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).address = $event,
                              type: "text",
                              class: "input",
                              placeholder: "Street, number",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [
                                vModelText,
                                unref(form).address,
                                void 0,
                                { trim: true }
                              ]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Post code"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                              type: "text",
                              class: "input",
                              inputmode: "numeric",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [
                                vModelText,
                                unref(form).postal_code,
                                void 0,
                                { trim: true }
                              ]
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Town / City"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).city = $event,
                              type: "text",
                              class: "input",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [
                                vModelText,
                                unref(form).city,
                                void 0,
                                { trim: true }
                              ]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Country / Region"),
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => unref(form).country = $event,
                              class: "input"
                            }, [
                              createVNode("option", { value: "Croatia" }, "Croatia"),
                              createVNode("option", { value: "Slovenia" }, "Slovenia"),
                              createVNode("option", { value: "Austria" }, "Austria"),
                              createVNode("option", { value: "Germany" }, "Germany"),
                              createVNode("option", { value: "Italy" }, "Italy")
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, unref(form).country]
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Telephone"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).phone_number = $event,
                              type: "tel",
                              class: "input",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [
                                vModelText,
                                unref(form).phone_number,
                                void 0,
                                { trim: true }
                              ]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "pt-2" }, [
                          createVNode("button", {
                            class: "w-full text-center py-3 primary-btn cursor-pointer",
                            disabled: unref(ctaDisabled),
                            type: "button",
                            onClick: onCtaClick
                          }, [
                            createVNode("span", null, toDisplayString(unref(ctaLabel)), 1)
                          ], 8, ["disabled"]),
                          unref(errorMsg) ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-3 text-sm text-error_text_color"
                          }, toDisplayString(unref(errorMsg)), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(TabPanel), { class: "space-y-8" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", { class: "md:col-span-2" }, [
                            createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery Address"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).delivery_address = $event,
                              type: "text",
                              class: "input",
                              placeholder: "Street, number",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [
                                vModelText,
                                unref(form).delivery_address,
                                void 0,
                                { trim: true }
                              ]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery Post code"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).delivery_postal_code = $event,
                              type: "text",
                              class: "input",
                              inputmode: "numeric",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [
                                vModelText,
                                unref(form).delivery_postal_code,
                                void 0,
                                { trim: true }
                              ]
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery City"),
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => unref(form).delivery_city = $event,
                              type: "text",
                              class: "input",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [
                                vModelText,
                                unref(form).delivery_city,
                                void 0,
                                { trim: true }
                              ]
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "pt-2" }, [
                          createVNode("button", {
                            class: "w-full text-center py-3 primary-btn cursor-pointer",
                            disabled: unref(ctaDisabled),
                            type: "button",
                            onClick: onCtaClick
                          }, [
                            createVNode("span", null, toDisplayString(unref(ctaLabel)), 1)
                          ], 8, ["disabled"]),
                          unref(errorMsg) ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-3 text-sm text-error_text_color"
                          }, toDisplayString(unref(errorMsg)), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(TabPanel), { class: "space-y-6" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-xs uppercase tracking-widest" }, "Payment method"),
                        createVNode("div", { class: "flex gap-3" }, [
                          createVNode("button", {
                            type: "button",
                            class: ["px-4 py-2 border text-sm", unref(form).payment_method === "card" ? "border-text_color font-medium" : "border-text_color/30"],
                            onClick: ($event) => unref(form).payment_method = "card"
                          }, "Card", 10, ["onClick"]),
                          createVNode("button", {
                            type: "button",
                            class: ["px-4 py-2 border text-sm", unref(form).payment_method === "paypal" ? "border-text_color font-medium" : "border-text_color/30"],
                            onClick: ($event) => unref(form).payment_method = "paypal"
                          }, "PayPal", 10, ["onClick"]),
                          createVNode("button", {
                            type: "button",
                            class: ["px-4 py-2 border text-sm", unref(form).payment_method === "cod" ? "border-text_color font-medium" : "border-text_color/30"],
                            onClick: ($event) => unref(form).payment_method = "cod"
                          }, "Cash on Delivery", 10, ["onClick"])
                        ]),
                        createVNode("div", { class: "space-y-4 pt-2" }, [
                          createVNode("label", { class: "flex items-center gap-3 text-sm" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(form).newsletter = $event,
                              class: "checkbox"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(form).newsletter]
                            ]),
                            createTextVNode(" I want to receive personalised commercial communications by email. ")
                          ]),
                          createVNode("label", { class: "flex items-center gap-3 text-sm" }, [
                            withDirectives(createVNode("input", {
                              type: "checkbox",
                              "onUpdate:modelValue": ($event) => unref(form).privacyAccepted = $event,
                              class: "checkbox",
                              required: ""
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelCheckbox, unref(form).privacyAccepted]
                            ]),
                            createVNode("a", {
                              href: "#",
                              class: "underline"
                            }, "I have read and understand the Privacy and Cookies Policy.")
                          ])
                        ]),
                        createVNode("div", { class: "pt-2" }, [
                          createVNode("button", {
                            class: "w-full text-center py-3 primary-btn cursor-pointer",
                            disabled: unref(ctaDisabled),
                            type: "button",
                            onClick: onCtaClick
                          }, [
                            createVNode("span", null, toDisplayString(unref(ctaLabel)), 1)
                          ], 8, ["disabled"]),
                          unref(errorMsg) ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "mt-3 text-sm text-error_text_color"
                          }, toDisplayString(unref(errorMsg)), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TabList), { class: "flex gap-2 border-b border-text_color/30" }, {
                default: withCtx(() => [
                  createVNode(unref(Tab), null, {
                    default: withCtx(({ selected }) => [
                      createVNode("button", {
                        class: ["px-4 py-2 text-xs uppercase tracking-widest", selected ? "bg-text_color/5 font-medium" : "opacity-60"]
                      }, "Billing", 2)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Tab), null, {
                    default: withCtx(({ selected }) => [
                      createVNode("button", {
                        class: ["px-4 py-2 text-xs uppercase tracking-widest", selected ? "bg-text_color/5 font-medium" : "opacity-60"]
                      }, "Delivery", 2)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Tab), null, {
                    default: withCtx(({ selected }) => [
                      createVNode("button", {
                        class: ["px-4 py-2 text-xs uppercase tracking-widest", selected ? "bg-text_color/5 font-medium" : "opacity-60"]
                      }, "Payment", 2)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(TabPanels), { class: "mt-8 space-y-10" }, {
                default: withCtx(() => [
                  createVNode(unref(TabPanel), { class: "space-y-8" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        createVNode("div", { class: "md:col-span-2" }, [
                          createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "E-mail"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            type: "email",
                            class: "input",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              unref(form).email,
                              void 0,
                              { trim: true }
                            ]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Name"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                            type: "text",
                            class: "input"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              unref(form).firstName,
                              void 0,
                              { trim: true }
                            ]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Surname"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                            type: "text",
                            class: "input"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              unref(form).lastName,
                              void 0,
                              { trim: true }
                            ]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        createVNode("div", { class: "md:col-span-2" }, [
                          createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Address"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).address = $event,
                            type: "text",
                            class: "input",
                            placeholder: "Street, number",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              unref(form).address,
                              void 0,
                              { trim: true }
                            ]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Post code"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).postal_code = $event,
                            type: "text",
                            class: "input",
                            inputmode: "numeric",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              unref(form).postal_code,
                              void 0,
                              { trim: true }
                            ]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Town / City"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).city = $event,
                            type: "text",
                            class: "input",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              unref(form).city,
                              void 0,
                              { trim: true }
                            ]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Country / Region"),
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => unref(form).country = $event,
                            class: "input"
                          }, [
                            createVNode("option", { value: "Croatia" }, "Croatia"),
                            createVNode("option", { value: "Slovenia" }, "Slovenia"),
                            createVNode("option", { value: "Austria" }, "Austria"),
                            createVNode("option", { value: "Germany" }, "Germany"),
                            createVNode("option", { value: "Italy" }, "Italy")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, unref(form).country]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Telephone"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).phone_number = $event,
                            type: "tel",
                            class: "input",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              unref(form).phone_number,
                              void 0,
                              { trim: true }
                            ]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "pt-2" }, [
                        createVNode("button", {
                          class: "w-full text-center py-3 primary-btn cursor-pointer",
                          disabled: unref(ctaDisabled),
                          type: "button",
                          onClick: onCtaClick
                        }, [
                          createVNode("span", null, toDisplayString(unref(ctaLabel)), 1)
                        ], 8, ["disabled"]),
                        unref(errorMsg) ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-3 text-sm text-error_text_color"
                        }, toDisplayString(unref(errorMsg)), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(TabPanel), { class: "space-y-8" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        createVNode("div", { class: "md:col-span-2" }, [
                          createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery Address"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).delivery_address = $event,
                            type: "text",
                            class: "input",
                            placeholder: "Street, number",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              unref(form).delivery_address,
                              void 0,
                              { trim: true }
                            ]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery Post code"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).delivery_postal_code = $event,
                            type: "text",
                            class: "input",
                            inputmode: "numeric",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              unref(form).delivery_postal_code,
                              void 0,
                              { trim: true }
                            ]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery City"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => unref(form).delivery_city = $event,
                            type: "text",
                            class: "input",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [
                              vModelText,
                              unref(form).delivery_city,
                              void 0,
                              { trim: true }
                            ]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "pt-2" }, [
                        createVNode("button", {
                          class: "w-full text-center py-3 primary-btn cursor-pointer",
                          disabled: unref(ctaDisabled),
                          type: "button",
                          onClick: onCtaClick
                        }, [
                          createVNode("span", null, toDisplayString(unref(ctaLabel)), 1)
                        ], 8, ["disabled"]),
                        unref(errorMsg) ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-3 text-sm text-error_text_color"
                        }, toDisplayString(unref(errorMsg)), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(TabPanel), { class: "space-y-6" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-xs uppercase tracking-widest" }, "Payment method"),
                      createVNode("div", { class: "flex gap-3" }, [
                        createVNode("button", {
                          type: "button",
                          class: ["px-4 py-2 border text-sm", unref(form).payment_method === "card" ? "border-text_color font-medium" : "border-text_color/30"],
                          onClick: ($event) => unref(form).payment_method = "card"
                        }, "Card", 10, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          class: ["px-4 py-2 border text-sm", unref(form).payment_method === "paypal" ? "border-text_color font-medium" : "border-text_color/30"],
                          onClick: ($event) => unref(form).payment_method = "paypal"
                        }, "PayPal", 10, ["onClick"]),
                        createVNode("button", {
                          type: "button",
                          class: ["px-4 py-2 border text-sm", unref(form).payment_method === "cod" ? "border-text_color font-medium" : "border-text_color/30"],
                          onClick: ($event) => unref(form).payment_method = "cod"
                        }, "Cash on Delivery", 10, ["onClick"])
                      ]),
                      createVNode("div", { class: "space-y-4 pt-2" }, [
                        createVNode("label", { class: "flex items-center gap-3 text-sm" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": ($event) => unref(form).newsletter = $event,
                            class: "checkbox"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(form).newsletter]
                          ]),
                          createTextVNode(" I want to receive personalised commercial communications by email. ")
                        ]),
                        createVNode("label", { class: "flex items-center gap-3 text-sm" }, [
                          withDirectives(createVNode("input", {
                            type: "checkbox",
                            "onUpdate:modelValue": ($event) => unref(form).privacyAccepted = $event,
                            class: "checkbox",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelCheckbox, unref(form).privacyAccepted]
                          ]),
                          createVNode("a", {
                            href: "#",
                            class: "underline"
                          }, "I have read and understand the Privacy and Cookies Policy.")
                        ])
                      ]),
                      createVNode("div", { class: "pt-2" }, [
                        createVNode("button", {
                          class: "w-full text-center py-3 primary-btn cursor-pointer",
                          disabled: unref(ctaDisabled),
                          type: "button",
                          onClick: onCtaClick
                        }, [
                          createVNode("span", null, toDisplayString(unref(ctaLabel)), 1)
                        ], 8, ["disabled"]),
                        unref(errorMsg) ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-3 text-sm text-error_text_color"
                        }, toDisplayString(unref(errorMsg)), 1)) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form><aside class="w-full" data-v-9dbd5076><div class="space-y-5" data-v-9dbd5076><h2 class="uppercase tracking-widest text-sm" data-v-9dbd5076>Order Summary</h2>`);
      if (unref(cart).items.length) {
        _push(`<div class="grid grid-cols-2 gap-x-4 gap-y-4" data-v-9dbd5076><!--[-->`);
        ssrRenderList(unref(cart).items, (it, i) => {
          _push(`<div class="flex gap-4" data-v-9dbd5076><img${ssrRenderAttr("src", it.avatar_image)}${ssrRenderAttr("alt", it.product)} class="w-22 h-40 object-cover border" data-v-9dbd5076><div class="flex-1" data-v-9dbd5076><div class="text-sm leading-tight" data-v-9dbd5076>${ssrInterpolate(it.product)}</div><div class="text-xs mt-1 opacity-70" data-v-9dbd5076>Qty: ${ssrInterpolate(it.quantity)} `);
          if (it.size) {
            _push(`<span data-v-9dbd5076>· Size: ${ssrInterpolate(it.size)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div class="text-sm whitespace-nowrap" data-v-9dbd5076> €${ssrInterpolate(money(lineTotal(it)))}</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-sm opacity-70" data-v-9dbd5076>Your cart is empty.</div>`);
      }
      _push(`<hr data-v-9dbd5076><div class="space-y-2 text-sm" data-v-9dbd5076><div class="flex justify-between" data-v-9dbd5076><span data-v-9dbd5076>Subtotal</span><span data-v-9dbd5076>€${ssrInterpolate(money(unref(subtotal)))}</span></div><div class="flex justify-between" data-v-9dbd5076><span data-v-9dbd5076>Shipping</span>`);
      if (unref(shippingFee) === 0) {
        _push(`<span data-v-9dbd5076>€0 (Free)</span>`);
      } else {
        _push(`<span data-v-9dbd5076>€${ssrInterpolate(money(unref(shippingFee)))}</span>`);
      }
      _push(`</div><div class="flex justify-between font-medium text-base pt-2" data-v-9dbd5076><span data-v-9dbd5076>Total</span><span data-v-9dbd5076>€${ssrInterpolate(money(unref(total)))}</span></div><p class="text-xs opacity-70" data-v-9dbd5076> Prices include VAT, excluding any import duties. </p></div></div></aside></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9dbd5076"]]);
export {
  checkout as default
};
//# sourceMappingURL=checkout-CpBm9pl1.js.map
