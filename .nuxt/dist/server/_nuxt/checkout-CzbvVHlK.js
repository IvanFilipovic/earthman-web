import { _ as __nuxt_component_0 } from "./AppNavigation-B4JE81Gq.js";
import { a as __nuxt_component_0$1, c as __nuxt_component_0$2, g as useRuntimeConfig, r as navigateTo, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, computed, watchEffect, withCtx, createTextVNode, unref, mergeProps, createVNode, Transition, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, withDirectives, vShow, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { useForm, Form, Field, ErrorMessage } from "vee-validate";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
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
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
const FREE_THRESHOLD = 200;
const FLAT_SHIPPING = 12.99;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const toNum = (x) => Number.parseFloat(String(x ?? "0").replace(",", ".")) || 0;
    const money = (n) => Number.isInteger(n) ? n : n.toFixed(2);
    const cart = ref({ items: [], cart_total_to_pay: "0.00" });
    const loadingCart = ref(false);
    const lineTotal = (it) => toNum(it.unit_price_discounted ?? it.unit_price_original) * (it.quantity ?? 0);
    const subtotal = computed(() => cart.value.items.reduce((s, it) => s + lineTotal(it), 0));
    const shippingFee = computed(() => subtotal.value >= FREE_THRESHOLD ? 0 : FLAT_SHIPPING);
    const total = computed(() => subtotal.value + shippingFee.value);
    async function fetchCart() {
      try {
        loadingCart.value = true;
        const res = await $fetch("/api/private/get/cart");
        res.items = (res.items ?? []).map((i) => ({ ...i, size: i.size ?? i.product_size }));
        cart.value = res;
      } finally {
        loadingCart.value = false;
      }
    }
    const removingSlug = ref(null);
    const itemSlug = (it) => it.product_variant_slug ?? it.product_slug;
    async function removeItem(it) {
      const slug = itemSlug(it);
      if (!slug || removingSlug.value) return;
      removingSlug.value = slug;
      try {
        await $fetch("/api/private/delete/cart", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: { product_variant_slug: slug }
        });
        await fetchCart();
        if (false) ;
      } catch (e) {
        console.error("Remove item failed", e);
      } finally {
        removingSlug.value = null;
      }
    }
    const req = (label, max) => (v) => {
      if (!v || !String(v).trim()) return `${label} is required`;
      if (max && String(v).length > max) return `${label} must be < ${max + 1} chars`;
      return true;
    };
    const emailRule = (v) => {
      if (!v || !v.trim()) return "Email is required";
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!re.test(v)) return "Please enter a valid email address";
      return true;
    };
    const phoneRule = (v) => {
      if (!v || !v.trim()) return "Phone number is required";
      const re = /^[+()\-.\s\d]{7,20}$/;
      if (!re.test(v)) return "Please enter a valid phone number (+, digits, spaces, (), -)";
      return true;
    };
    const postalRule = (label = "Postal code") => (v) => {
      if (!v || !v.trim()) return `${label} is required`;
      const re = /^[A-Za-z0-9\s\-]{3,10}$/;
      if (!re.test(v)) return `${label} looks invalid`;
      return true;
    };
    const { validateField, setFieldValue, values } = useForm();
    const ALL_FIELDS = [
      // Billing
      "email",
      "firstName",
      "lastName",
      "address",
      "postal_code",
      "city",
      "country",
      "phone_number",
      // Delivery
      "delivery_address",
      "delivery_postal_code",
      "delivery_city",
      // Payment
      "payment_method",
      "privacyAccepted"
    ];
    const ctaDisabled = ref(true);
    watchEffect(async () => {
      const res = await Promise.all(ALL_FIELDS.map((n) => validateField(n, { mode: "silent" })));
      ctaDisabled.value = !res.every((r) => r.valid);
    });
    const submitting = ref(false);
    const errorMsg = ref("");
    async function submitOrder() {
      errorMsg.value = "";
      const res = await Promise.all(ALL_FIELDS.map((n) => validateField(n)));
      if (!res.every((r) => r.valid)) {
        errorMsg.value = "Please complete all required fields.";
        return;
      }
      if (cart.value.items.length === 0) {
        errorMsg.value = "Your cart is empty.";
        return;
      }
      try {
        submitting.value = true;
        const payload = {
          // Billing
          email: values.email,
          country: values.country,
          address: values.address,
          city: values.city,
          postal_code: values.postal_code,
          phone_number: values.phone_number,
          // Delivery
          delivery_address: values.delivery_address,
          delivery_city: values.delivery_city,
          delivery_postal_code: values.delivery_postal_code,
          // Payment
          payment_method: values.payment_method,
          // Shipping derived
          shipping_cost: shippingFee.value
        };
        const resOrder = await $fetch(`${config.public.apiBase}/public/orders/create/`, {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: payload
        });
        navigateTo({ path: "/thank-you", query: { ref: resOrder.order_reference, total: resOrder.total_price } });
      } catch (e) {
        errorMsg.value = e?.data?.detail || "Could not create order.";
        console.error("Order create failed", e);
      } finally {
        submitting.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-59d95f90>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-6" data-v-59d95f90><div class="flex justify-start w-full" data-v-59d95f90><div class="flex items-center py-1 text-xs md:text-sm text-text_color uppercase tracking-widest" data-v-59d95f90>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:underline pr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HOME`);
          } else {
            return [
              createTextVNode("HOME")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="pr-2" data-v-59d95f90>/</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop",
        class: "hover:underline pr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SHOP`);
          } else {
            return [
              createTextVNode("SHOP")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="pr-2" data-v-59d95f90>/</span><span class="pr-2" data-v-59d95f90>CHECKOUT</span></div></div></div><div class="hidden md:flex flex-col md:flex-row py-8 md:px-8 mt-6 md:gap-x-16" data-v-59d95f90>`);
      _push(ssrRenderComponent(unref(Form), {
        class: "w-full",
        onSubmit: submitOrder
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-8" data-v-59d95f90${_scopeId}><h3 class="text-base uppercase tracking-widest py-2 border-b border-text_color/30" data-v-59d95f90${_scopeId}>Billing</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-59d95f90${_scopeId}><div class="md:col-span-2" data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>E-mail</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "email",
              type: "email",
              rules: emailRule
            }, {
              default: withCtx(({ field, meta }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    class: "input bg-[#3c7272]",
                    "aria-invalid": !meta.valid && meta.touched
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      class: "input bg-[#3c7272]",
                      "aria-invalid": !meta.valid && meta.touched
                    }), null, 16, ["aria-invalid"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "email" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId2}>`);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          message ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(message), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-59d95f90${_scopeId}><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Name</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "firstName",
              rules: req("Name", 50)
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: "input",
                    maxlength: "50"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: "input",
                      maxlength: "50"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "firstName",
              class: "mt-1 text-xs text-error_text_color"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Surname</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "lastName",
              rules: req("Surname", 50)
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: "input",
                    maxlength: "50"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: "input",
                      maxlength: "50"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "lastName",
              class: "mt-1 text-xs text-error_text_color"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-59d95f90${_scopeId}><div class="md:col-span-2" data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Address</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "address",
              rules: req("Address", 120)
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: "input",
                    maxlength: "120",
                    placeholder: "Street, number"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: "input",
                      maxlength: "120",
                      placeholder: "Street, number"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "address",
              class: "mt-1 text-xs text-error_text_color"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-59d95f90${_scopeId}><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Post code</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "postal_code",
              rules: postalRule("Post code")
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    class: "input",
                    inputmode: "numeric",
                    maxlength: "10"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      class: "input",
                      inputmode: "numeric",
                      maxlength: "10"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "postal_code",
              class: "mt-1 text-xs text-error_text_color"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Town / City</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "city",
              rules: req("City", 60)
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: "input",
                    maxlength: "60"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: "input",
                      maxlength: "60"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "city",
              class: "mt-1 text-xs text-error_text_color"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 gap-6" data-v-59d95f90${_scopeId}><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Country / Region</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "country",
              rules: req("Country")
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<select${ssrRenderAttrs(mergeProps(field, { class: "input" }))} data-v-59d95f90${_scopeId2}><option value="Croatia" data-v-59d95f90${_scopeId2}>Croatia</option><option value="Slovenia" data-v-59d95f90${_scopeId2}>Slovenia</option><option value="Austria" data-v-59d95f90${_scopeId2}>Austria</option><option value="Germany" data-v-59d95f90${_scopeId2}>Germany</option><option value="Italy" data-v-59d95f90${_scopeId2}>Italy</option></select>`);
                } else {
                  return [
                    createVNode("select", mergeProps(field, { class: "input" }), [
                      createVNode("option", { value: "Croatia" }, "Croatia"),
                      createVNode("option", { value: "Slovenia" }, "Slovenia"),
                      createVNode("option", { value: "Austria" }, "Austria"),
                      createVNode("option", { value: "Germany" }, "Germany"),
                      createVNode("option", { value: "Italy" }, "Italy")
                    ], 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "country",
              class: "mt-1 text-xs text-error_text_color"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Telephone</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "phone_number",
              rules: phoneRule
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "tel",
                    class: "input",
                    maxlength: "20"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "tel",
                      class: "input",
                      maxlength: "20"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "phone_number",
              class: "mt-1 text-xs text-error_text_color"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="space-y-8 mt-10" data-v-59d95f90${_scopeId}><h3 class="text-base uppercase tracking-widest py-2 border-b border-text_color/30" data-v-59d95f90${_scopeId}>Delivery</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-59d95f90${_scopeId}><div class="md:col-span-2" data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Delivery Address</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "delivery_address",
              rules: req("Delivery address", 120)
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: "input",
                    maxlength: "120",
                    placeholder: "Street, number"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: "input",
                      maxlength: "120",
                      placeholder: "Street, number"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "delivery_address",
              class: "mt-1 text-xs text-error_text_color"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-59d95f90${_scopeId}><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Delivery Post code</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "delivery_postal_code",
              rules: postalRule("Delivery post code")
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    class: "input",
                    inputmode: "numeric",
                    maxlength: "10"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      class: "input",
                      inputmode: "numeric",
                      maxlength: "10"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "delivery_postal_code",
              class: "mt-1 text-xs text-error_text_color"
            }, null, _parent2, _scopeId));
            _push2(`</div><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Delivery City</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "delivery_city",
              rules: req("Delivery city", 60)
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: "input",
                    maxlength: "60"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: "input",
                      maxlength: "60"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "delivery_city",
              class: "mt-1 text-xs text-error_text_color"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="space-y-6 mt-10" data-v-59d95f90${_scopeId}><h3 class="text-base uppercase tracking-widest py-2 border-b border-text_color/30" data-v-59d95f90${_scopeId}>Payment</h3><div class="flex gap-3" data-v-59d95f90${_scopeId}><button type="button" class="${ssrRenderClass([unref(values).payment_method === "card" ? "border-text_color font-medium" : "border-text_color/30", "px-4 py-2 border text-sm uppercase"])}" data-v-59d95f90${_scopeId}>Card</button><button type="button" class="${ssrRenderClass([unref(values).payment_method === "paypal" ? "border-text_color font-medium" : "border-text_color/30", "px-4 py-2 border text-sm uppercase"])}" data-v-59d95f90${_scopeId}>PayPal</button></div>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "payment_method",
              class: "mt-1 text-xs text-error_text_color"
            }, null, _parent2, _scopeId));
            _push2(`<div class="space-y-4 pt-2" data-v-59d95f90${_scopeId}><label class="flex items-center gap-3 text-sm" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "newsletter",
              type: "checkbox",
              value: true,
              "unchecked-value": false
            }, null, _parent2, _scopeId));
            _push2(` I want to receive personalised commercial communications by email. </label><label class="flex items-center gap-3 text-sm" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "privacyAccepted",
              type: "checkbox",
              value: true,
              "unchecked-value": false,
              rules: (v) => v ? true : "You must accept the Privacy Policy"
            }, null, _parent2, _scopeId));
            _push2(`<a href="#" class="underline" data-v-59d95f90${_scopeId}>I have read and understand the Privacy and Cookies Policy.</a></label>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "privacyAccepted",
              class: "mt-1 text-xs text-error_text_color"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="pt-6" data-v-59d95f90${_scopeId}><button class="w-full text-center py-3 primary-btn cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(unref(ctaDisabled) || unref(submitting)) ? " disabled" : ""} type="submit" data-v-59d95f90${_scopeId}><span data-v-59d95f90${_scopeId}>${ssrInterpolate(unref(submitting) ? "Placing Order…" : "Place Order")}</span></button>`);
            if (unref(errorMsg)) {
              _push2(`<p class="mt-3 text-sm text-error_text_color" data-v-59d95f90${_scopeId}>${ssrInterpolate(unref(errorMsg))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-8" }, [
                createVNode("h3", { class: "text-base uppercase tracking-widest py-2 border-b border-text_color/30" }, "Billing"),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode("div", { class: "md:col-span-2" }, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "E-mail"),
                    createVNode(unref(Field), {
                      name: "email",
                      type: "email",
                      rules: emailRule
                    }, {
                      default: withCtx(({ field, meta }) => [
                        createVNode("input", mergeProps(field, {
                          class: "input bg-[#3c7272]",
                          "aria-invalid": !meta.valid && meta.touched
                        }), null, 16, ["aria-invalid"])
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ErrorMessage), { name: "email" }, {
                      default: withCtx(({ message }) => [
                        createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              message ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(message), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Name"),
                    createVNode(unref(Field), {
                      name: "firstName",
                      rules: req("Name", 50)
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: "input",
                          maxlength: "50"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode(unref(ErrorMessage), {
                      name: "firstName",
                      class: "mt-1 text-xs text-error_text_color"
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Surname"),
                    createVNode(unref(Field), {
                      name: "lastName",
                      rules: req("Surname", 50)
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: "input",
                          maxlength: "50"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode(unref(ErrorMessage), {
                      name: "lastName",
                      class: "mt-1 text-xs text-error_text_color"
                    })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode("div", { class: "md:col-span-2" }, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Address"),
                    createVNode(unref(Field), {
                      name: "address",
                      rules: req("Address", 120)
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: "input",
                          maxlength: "120",
                          placeholder: "Street, number"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode(unref(ErrorMessage), {
                      name: "address",
                      class: "mt-1 text-xs text-error_text_color"
                    })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Post code"),
                    createVNode(unref(Field), {
                      name: "postal_code",
                      rules: postalRule("Post code")
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          class: "input",
                          inputmode: "numeric",
                          maxlength: "10"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode(unref(ErrorMessage), {
                      name: "postal_code",
                      class: "mt-1 text-xs text-error_text_color"
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Town / City"),
                    createVNode(unref(Field), {
                      name: "city",
                      rules: req("City", 60)
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: "input",
                          maxlength: "60"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode(unref(ErrorMessage), {
                      name: "city",
                      class: "mt-1 text-xs text-error_text_color"
                    })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 gap-6" }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Country / Region"),
                    createVNode(unref(Field), {
                      name: "country",
                      rules: req("Country")
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("select", mergeProps(field, { class: "input" }), [
                          createVNode("option", { value: "Croatia" }, "Croatia"),
                          createVNode("option", { value: "Slovenia" }, "Slovenia"),
                          createVNode("option", { value: "Austria" }, "Austria"),
                          createVNode("option", { value: "Germany" }, "Germany"),
                          createVNode("option", { value: "Italy" }, "Italy")
                        ], 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode(unref(ErrorMessage), {
                      name: "country",
                      class: "mt-1 text-xs text-error_text_color"
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Telephone"),
                    createVNode(unref(Field), {
                      name: "phone_number",
                      rules: phoneRule
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          type: "tel",
                          class: "input",
                          maxlength: "20"
                        }), null, 16)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(ErrorMessage), {
                      name: "phone_number",
                      class: "mt-1 text-xs text-error_text_color"
                    })
                  ])
                ])
              ]),
              createVNode("div", { class: "space-y-8 mt-10" }, [
                createVNode("h3", { class: "text-base uppercase tracking-widest py-2 border-b border-text_color/30" }, "Delivery"),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode("div", { class: "md:col-span-2" }, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery Address"),
                    createVNode(unref(Field), {
                      name: "delivery_address",
                      rules: req("Delivery address", 120)
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: "input",
                          maxlength: "120",
                          placeholder: "Street, number"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode(unref(ErrorMessage), {
                      name: "delivery_address",
                      class: "mt-1 text-xs text-error_text_color"
                    })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery Post code"),
                    createVNode(unref(Field), {
                      name: "delivery_postal_code",
                      rules: postalRule("Delivery post code")
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          class: "input",
                          inputmode: "numeric",
                          maxlength: "10"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode(unref(ErrorMessage), {
                      name: "delivery_postal_code",
                      class: "mt-1 text-xs text-error_text_color"
                    })
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery City"),
                    createVNode(unref(Field), {
                      name: "delivery_city",
                      rules: req("Delivery city", 60)
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: "input",
                          maxlength: "60"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode(unref(ErrorMessage), {
                      name: "delivery_city",
                      class: "mt-1 text-xs text-error_text_color"
                    })
                  ])
                ])
              ]),
              createVNode("div", { class: "space-y-6 mt-10" }, [
                createVNode("h3", { class: "text-base uppercase tracking-widest py-2 border-b border-text_color/30" }, "Payment"),
                createVNode("div", { class: "flex gap-3" }, [
                  createVNode("button", {
                    type: "button",
                    class: ["px-4 py-2 border text-sm uppercase", unref(values).payment_method === "card" ? "border-text_color font-medium" : "border-text_color/30"],
                    onClick: ($event) => unref(setFieldValue)("payment_method", "card")
                  }, "Card", 10, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    class: ["px-4 py-2 border text-sm uppercase", unref(values).payment_method === "paypal" ? "border-text_color font-medium" : "border-text_color/30"],
                    onClick: ($event) => unref(setFieldValue)("payment_method", "paypal")
                  }, "PayPal", 10, ["onClick"])
                ]),
                createVNode(unref(ErrorMessage), {
                  name: "payment_method",
                  class: "mt-1 text-xs text-error_text_color"
                }),
                createVNode("div", { class: "space-y-4 pt-2" }, [
                  createVNode("label", { class: "flex items-center gap-3 text-sm" }, [
                    createVNode(unref(Field), {
                      name: "newsletter",
                      type: "checkbox",
                      value: true,
                      "unchecked-value": false
                    }),
                    createTextVNode(" I want to receive personalised commercial communications by email. ")
                  ]),
                  createVNode("label", { class: "flex items-center gap-3 text-sm" }, [
                    createVNode(unref(Field), {
                      name: "privacyAccepted",
                      type: "checkbox",
                      value: true,
                      "unchecked-value": false,
                      rules: (v) => v ? true : "You must accept the Privacy Policy"
                    }, null, 8, ["rules"]),
                    createVNode("a", {
                      href: "#",
                      class: "underline"
                    }, "I have read and understand the Privacy and Cookies Policy.")
                  ]),
                  createVNode(unref(ErrorMessage), {
                    name: "privacyAccepted",
                    class: "mt-1 text-xs text-error_text_color"
                  })
                ])
              ]),
              createVNode("div", { class: "pt-6" }, [
                createVNode("button", {
                  class: "w-full text-center py-3 primary-btn cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                  disabled: unref(ctaDisabled) || unref(submitting),
                  type: "submit"
                }, [
                  createVNode("span", null, toDisplayString(unref(submitting) ? "Placing Order…" : "Place Order"), 1)
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
      }, _parent));
      _push(`<aside class="w-full mt-10 md:mt-0" data-v-59d95f90><div class="space-y-5" data-v-59d95f90><h2 class="uppercase tracking-widest text-sm" data-v-59d95f90>Order Summary</h2>`);
      if (unref(cart).items.length) {
        _push(`<div class="grid grid-cols-1 gap-y-4" data-v-59d95f90><!--[-->`);
        ssrRenderList(unref(cart).items, (it, i) => {
          _push(`<div class="flex gap-4" data-v-59d95f90><img${ssrRenderAttr("src", it.avatar_image)}${ssrRenderAttr("alt", it.product)} class="w-22 h-40 object-cover border" data-v-59d95f90><div class="flex-1" data-v-59d95f90><div class="text-sm md:text-base leading-tight tracking-wider px-3" data-v-59d95f90>${ssrInterpolate(it.product)}</div><div class="text-xs mt-1 tracking-wider px-3" data-v-59d95f90>Size: ${ssrInterpolate(it.size)}</div><div class="text-xs mt-1 tracking-wider px-3" data-v-59d95f90>Quantity: ${ssrInterpolate(it.quantity)}</div></div><div class="text-right" data-v-59d95f90><div class="text-sm md:text-base" data-v-59d95f90>`);
          if (it.unit_price_discounted !== it.unit_price_original) {
            _push(`<span class="space-x-1" data-v-59d95f90><span class="font-semibold" data-v-59d95f90>€${ssrInterpolate(it.unit_price_discounted)}</span><span class="line-through text-xs" data-v-59d95f90>€${ssrInterpolate(it.unit_price_original)}</span></span>`);
          } else {
            _push(`<span data-v-59d95f90>€${ssrInterpolate(it.unit_price_original)}</span>`);
          }
          _push(`</div><button class="mt-3 text-xs uppercase tracking-widest border-b border-text_color/30"${ssrIncludeBooleanAttr(unref(removingSlug) === (it.product_variant_slug ?? it.product_slug)) ? " disabled" : ""} data-v-59d95f90> Remove item </button></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-sm opacity-70" data-v-59d95f90>Your cart is empty.</div>`);
      }
      _push(`<div class="space-y-2 text-sm border-t border-text_color/30 pt-4" data-v-59d95f90><div class="flex justify-between" data-v-59d95f90><span data-v-59d95f90>Subtotal</span><span data-v-59d95f90>€${ssrInterpolate(money(unref(subtotal)))}</span></div><div class="flex justify-between" data-v-59d95f90><span data-v-59d95f90>Shipping</span>`);
      if (unref(shippingFee) === 0) {
        _push(`<span data-v-59d95f90>€0 (Free)</span>`);
      } else {
        _push(`<span data-v-59d95f90>€${ssrInterpolate(money(unref(shippingFee)))}</span>`);
      }
      _push(`</div><div class="flex justify-between font-medium text-base pt-2" data-v-59d95f90><span data-v-59d95f90>Total</span><span data-v-59d95f90>€${ssrInterpolate(money(unref(total)))}</span></div><p class="text-xs opacity-70" data-v-59d95f90> Prices include VAT, excluding any import duties. </p></div></div></aside></div><div class="md:hidden pb-24 max-w-screen-md mx-auto px-4 md:px-8 pt-4 gap-6" data-v-59d95f90><div class="border-t border-b border-text_color/30 bg-background_color text-text_color rounded-sm" data-v-59d95f90><div class="flex items-center justify-between py-4" data-v-59d95f90><div class="text-sm uppercase tracking-widest" data-v-59d95f90> Cart (${ssrInterpolate(unref(cart).items.length)}) </div><div class="text-base font-medium" data-v-59d95f90> €${ssrInterpolate(money(unref(total)))}</div></div><div class="pb-4 text-sm space-y-1" data-v-59d95f90><div class="flex justify-between" data-v-59d95f90><span data-v-59d95f90>Subtotal</span><span data-v-59d95f90>€${ssrInterpolate(money(unref(subtotal)))}</span></div><div class="flex justify-between" data-v-59d95f90><span data-v-59d95f90>Shipping</span>`);
      if (unref(shippingFee) === 0) {
        _push(`<span data-v-59d95f90>€0 (Free)</span>`);
      } else {
        _push(`<span data-v-59d95f90>€${ssrInterpolate(money(unref(shippingFee)))}</span>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(Popover), { class: "block" }, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PopoverButton), { class: "w-full flex items-center justify-between py-4 text-sm border-t border-text_color/20" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="uppercase tracking-widest" data-v-59d95f90${_scopeId2}> Items (${ssrInterpolate(unref(cart).items.length)}) </span>`);
                  _push3(ssrRenderComponent(_component_Icon, {
                    name: "lucide:chevron-down",
                    class: ["w-4 h-4 transition-transform duration-150", open ? "rotate-180" : ""]
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", { class: "uppercase tracking-widest" }, " Items (" + toDisplayString(unref(cart).items.length) + ") ", 1),
                    createVNode(_component_Icon, {
                      name: "lucide:chevron-down",
                      class: ["w-4 h-4 transition-transform duration-150", open ? "rotate-180" : ""]
                    }, null, 8, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(``);
            _push2(ssrRenderComponent(unref(PopoverPanel), {
              static: "",
              style: open ? null : { display: "none" }
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="max-h-80 overflow-y-auto divide-y divide-text_color/30" data-v-59d95f90${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(cart).items, (it, i) => {
                    _push3(`<div class="flex gap-3 py-3" data-v-59d95f90${_scopeId2}><img${ssrRenderAttr("src", it.avatar_image)}${ssrRenderAttr("alt", it.product)} class="w-20 h-24 object-cover border" data-v-59d95f90${_scopeId2}><div class="flex-1 min-w-0" data-v-59d95f90${_scopeId2}><div class="text-sm leading-tight line-clamp-2" data-v-59d95f90${_scopeId2}>${ssrInterpolate(it.product)}</div><div class="mt-1 text-xs opacity-70" data-v-59d95f90${_scopeId2}>Size: ${ssrInterpolate(it.size)}</div><div class="mt-1 text-xs opacity-70" data-v-59d95f90${_scopeId2}>Qty: ${ssrInterpolate(it.quantity)}</div><div class="mt-2 text-sm" data-v-59d95f90${_scopeId2}>`);
                    if (it.unit_price_discounted !== it.unit_price_original) {
                      _push3(`<span class="space-x-1" data-v-59d95f90${_scopeId2}><span class="font-medium" data-v-59d95f90${_scopeId2}>€${ssrInterpolate(it.unit_price_discounted)}</span><span class="line-through text-xs" data-v-59d95f90${_scopeId2}>€${ssrInterpolate(it.unit_price_original)}</span></span>`);
                    } else {
                      _push3(`<span data-v-59d95f90${_scopeId2}>€${ssrInterpolate(it.unit_price_original)}</span>`);
                    }
                    _push3(`</div></div><button class="shrink-0 p-1 hover:bg-text_color/10 rounded-sm h-7"${ssrIncludeBooleanAttr(unref(removingSlug) === (it.product_variant_slug ?? it.product_slug)) ? " disabled" : ""} aria-label="Remove item" title="Remove" data-v-59d95f90${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "lucide:x",
                      class: "w-4 h-4"
                    }, null, _parent3, _scopeId2));
                    _push3(`</button></div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "max-h-80 overflow-y-auto divide-y divide-text_color/30" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(cart).items, (it, i) => {
                        return openBlock(), createBlock("div", {
                          key: i,
                          class: "flex gap-3 py-3"
                        }, [
                          createVNode("img", {
                            src: it.avatar_image,
                            alt: it.product,
                            class: "w-20 h-24 object-cover border"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "flex-1 min-w-0" }, [
                            createVNode("div", { class: "text-sm leading-tight line-clamp-2" }, toDisplayString(it.product), 1),
                            createVNode("div", { class: "mt-1 text-xs opacity-70" }, "Size: " + toDisplayString(it.size), 1),
                            createVNode("div", { class: "mt-1 text-xs opacity-70" }, "Qty: " + toDisplayString(it.quantity), 1),
                            createVNode("div", { class: "mt-2 text-sm" }, [
                              it.unit_price_discounted !== it.unit_price_original ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "space-x-1"
                              }, [
                                createVNode("span", { class: "font-medium" }, "€" + toDisplayString(it.unit_price_discounted), 1),
                                createVNode("span", { class: "line-through text-xs" }, "€" + toDisplayString(it.unit_price_original), 1)
                              ])) : (openBlock(), createBlock("span", { key: 1 }, "€" + toDisplayString(it.unit_price_original), 1))
                            ])
                          ]),
                          createVNode("button", {
                            class: "shrink-0 p-1 hover:bg-text_color/10 rounded-sm h-7",
                            disabled: unref(removingSlug) === (it.product_variant_slug ?? it.product_slug),
                            onClick: ($event) => removeItem(it),
                            "aria-label": "Remove item",
                            title: "Remove"
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:x",
                              class: "w-4 h-4"
                            })
                          ], 8, ["disabled", "onClick"])
                        ]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(PopoverButton), { class: "w-full flex items-center justify-between py-4 text-sm border-t border-text_color/20" }, {
                default: withCtx(() => [
                  createVNode("span", { class: "uppercase tracking-widest" }, " Items (" + toDisplayString(unref(cart).items.length) + ") ", 1),
                  createVNode(_component_Icon, {
                    name: "lucide:chevron-down",
                    class: ["w-4 h-4 transition-transform duration-150", open ? "rotate-180" : ""]
                  }, null, 8, ["class"])
                ]),
                _: 2
              }, 1024),
              createVNode(Transition, {
                "enter-active-class": "transition duration-200 ease-out",
                "enter-from-class": "opacity-0 translate-y-1",
                "enter-to-class": "opacity-100 translate-y-0",
                "leave-active-class": "transition duration-150 ease-in",
                "leave-from-class": "opacity-100 translate-y-0",
                "leave-to-class": "opacity-0 translate-y-1"
              }, {
                default: withCtx(() => [
                  withDirectives(createVNode(unref(PopoverPanel), { static: "" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "max-h-80 overflow-y-auto divide-y divide-text_color/30" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(cart).items, (it, i) => {
                          return openBlock(), createBlock("div", {
                            key: i,
                            class: "flex gap-3 py-3"
                          }, [
                            createVNode("img", {
                              src: it.avatar_image,
                              alt: it.product,
                              class: "w-20 h-24 object-cover border"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", { class: "flex-1 min-w-0" }, [
                              createVNode("div", { class: "text-sm leading-tight line-clamp-2" }, toDisplayString(it.product), 1),
                              createVNode("div", { class: "mt-1 text-xs opacity-70" }, "Size: " + toDisplayString(it.size), 1),
                              createVNode("div", { class: "mt-1 text-xs opacity-70" }, "Qty: " + toDisplayString(it.quantity), 1),
                              createVNode("div", { class: "mt-2 text-sm" }, [
                                it.unit_price_discounted !== it.unit_price_original ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "space-x-1"
                                }, [
                                  createVNode("span", { class: "font-medium" }, "€" + toDisplayString(it.unit_price_discounted), 1),
                                  createVNode("span", { class: "line-through text-xs" }, "€" + toDisplayString(it.unit_price_original), 1)
                                ])) : (openBlock(), createBlock("span", { key: 1 }, "€" + toDisplayString(it.unit_price_original), 1))
                              ])
                            ]),
                            createVNode("button", {
                              class: "shrink-0 p-1 hover:bg-text_color/10 rounded-sm h-7",
                              disabled: unref(removingSlug) === (it.product_variant_slug ?? it.product_slug),
                              onClick: ($event) => removeItem(it),
                              "aria-label": "Remove item",
                              title: "Remove"
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:x",
                                class: "w-4 h-4"
                              })
                            ], 8, ["disabled", "onClick"])
                          ]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  }, 512), [
                    [vShow, open]
                  ])
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(Form), {
        class: "mt-6 space-y-10",
        onSubmit: submitOrder
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-59d95f90${_scopeId}><h3 class="text-sm uppercase tracking-widest" data-v-59d95f90${_scopeId}>Billing</h3><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>E-mail</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "email",
              type: "email",
              rules: emailRule
            }, {
              default: withCtx(({ field, meta }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    class: "input w-full",
                    "aria-invalid": !meta.valid && meta.touched
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      class: "input w-full",
                      "aria-invalid": !meta.valid && meta.touched
                    }), null, 16, ["aria-invalid"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "email" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, { name: "fade-error" }, {
                      default: withCtx(() => [
                        message ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-error_text_color leading-4"
                        }, toDisplayString(message), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-2 gap-3" data-v-59d95f90${_scopeId}><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Name</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "firstName",
              rules: req("Name", 50)
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: "input w-full",
                    maxlength: "50"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: "input w-full",
                      maxlength: "50"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "firstName" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, { name: "fade-error" }, {
                      default: withCtx(() => [
                        message ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-error_text_color leading-4"
                        }, toDisplayString(message), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Surname</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "lastName",
              rules: req("Surname", 50)
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: "input w-full",
                    maxlength: "50"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: "input w-full",
                      maxlength: "50"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "lastName" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, { name: "fade-error" }, {
                      default: withCtx(() => [
                        message ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-error_text_color leading-4"
                        }, toDisplayString(message), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Address</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "address",
              rules: req("Address", 120)
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: "input w-full",
                    maxlength: "120",
                    placeholder: "Street, number"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: "input w-full",
                      maxlength: "120",
                      placeholder: "Street, number"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "address" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, { name: "fade-error" }, {
                      default: withCtx(() => [
                        message ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-error_text_color leading-4"
                        }, toDisplayString(message), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-2 gap-3" data-v-59d95f90${_scopeId}><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Post code</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "postal_code",
              rules: postalRule("Post code")
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    class: "input w-full",
                    inputmode: "numeric",
                    maxlength: "10"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      class: "input w-full",
                      inputmode: "numeric",
                      maxlength: "10"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "postal_code" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, { name: "fade-error" }, {
                      default: withCtx(() => [
                        message ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-error_text_color leading-4"
                        }, toDisplayString(message), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Town / City</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "city",
              rules: req("City", 60)
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: "input w-full",
                    maxlength: "60"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: "input w-full",
                      maxlength: "60"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "city" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, { name: "fade-error" }, {
                      default: withCtx(() => [
                        message ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-error_text_color leading-4"
                        }, toDisplayString(message), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="grid grid-cols-1 gap-3" data-v-59d95f90${_scopeId}><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Country / Region</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "country",
              rules: req("Country")
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<select${ssrRenderAttrs(mergeProps(field, { class: "input w-full" }))} data-v-59d95f90${_scopeId2}><option value="Croatia" data-v-59d95f90${_scopeId2}>Croatia</option><option value="Slovenia" data-v-59d95f90${_scopeId2}>Slovenia</option><option value="Austria" data-v-59d95f90${_scopeId2}>Austria</option><option value="Germany" data-v-59d95f90${_scopeId2}>Germany</option><option value="Italy" data-v-59d95f90${_scopeId2}>Italy</option></select>`);
                } else {
                  return [
                    createVNode("select", mergeProps(field, { class: "input w-full" }), [
                      createVNode("option", { value: "Croatia" }, "Croatia"),
                      createVNode("option", { value: "Slovenia" }, "Slovenia"),
                      createVNode("option", { value: "Austria" }, "Austria"),
                      createVNode("option", { value: "Germany" }, "Germany"),
                      createVNode("option", { value: "Italy" }, "Italy")
                    ], 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "country" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, { name: "fade-error" }, {
                      default: withCtx(() => [
                        message ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-error_text_color leading-4"
                        }, toDisplayString(message), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Telephone</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "phone_number",
              rules: phoneRule
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "tel",
                    class: "input w-full",
                    maxlength: "20"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "tel",
                      class: "input w-full",
                      maxlength: "20"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "phone_number" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, { name: "fade-error" }, {
                      default: withCtx(() => [
                        message ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-error_text_color leading-4"
                        }, toDisplayString(message), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="space-y-6" data-v-59d95f90${_scopeId}><h3 class="text-sm uppercase tracking-widest" data-v-59d95f90${_scopeId}>Delivery</h3><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Delivery Address</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "delivery_address",
              rules: req("Delivery address", 120)
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: "input w-full",
                    maxlength: "120",
                    placeholder: "Street, number"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: "input w-full",
                      maxlength: "120",
                      placeholder: "Street, number"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "delivery_address" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, { name: "fade-error" }, {
                      default: withCtx(() => [
                        message ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-error_text_color leading-4"
                        }, toDisplayString(message), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-2 gap-3" data-v-59d95f90${_scopeId}><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Delivery Post code</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "delivery_postal_code",
              rules: postalRule("Delivery post code")
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    class: "input w-full",
                    inputmode: "numeric",
                    maxlength: "10"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      class: "input w-full",
                      inputmode: "numeric",
                      maxlength: "10"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "delivery_postal_code" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, { name: "fade-error" }, {
                      default: withCtx(() => [
                        message ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-error_text_color leading-4"
                        }, toDisplayString(message), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div data-v-59d95f90${_scopeId}><label class="block text-xs uppercase tracking-widest mb-2" data-v-59d95f90${_scopeId}>Delivery City</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "delivery_city",
              rules: req("Delivery city", 60)
            }, {
              default: withCtx(({ field }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: "input w-full",
                    maxlength: "60"
                  }))} data-v-59d95f90${_scopeId2}>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: "input w-full",
                      maxlength: "60"
                    }), null, 16)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "delivery_city" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, { name: "fade-error" }, {
                      default: withCtx(() => [
                        message ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-error_text_color leading-4"
                        }, toDisplayString(message), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="space-y-6" data-v-59d95f90${_scopeId}><h3 class="text-sm uppercase tracking-widest" data-v-59d95f90${_scopeId}>Payment</h3><div class="flex gap-2" data-v-59d95f90${_scopeId}><button type="button" class="${ssrRenderClass([unref(values).payment_method === "card" ? "border-text_color font-medium" : "border-text_color/30", "px-3 py-2 border text-xs"])}" data-v-59d95f90${_scopeId}>Card</button><button type="button" class="${ssrRenderClass([unref(values).payment_method === "paypal" ? "border-text_color font-medium" : "border-text_color/30", "px-3 py-2 border text-xs"])}" data-v-59d95f90${_scopeId}>PayPal</button><button type="button" class="${ssrRenderClass([unref(values).payment_method === "cod" ? "border-text_color font-medium" : "border-text_color/30", "px-3 py-2 border text-xs"])}" data-v-59d95f90${_scopeId}>Cash</button></div><div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "payment_method" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, { name: "fade-error" }, {
                      default: withCtx(() => [
                        message ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-error_text_color leading-4"
                        }, toDisplayString(message), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><label class="flex items-center gap-3 text-sm" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "newsletter",
              type: "checkbox",
              value: true,
              "unchecked-value": false
            }, null, _parent2, _scopeId));
            _push2(` I want to receive personalised commercial communications by email. </label><label class="flex items-center gap-3 text-sm" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "privacyAccepted",
              type: "checkbox",
              value: true,
              "unchecked-value": false,
              rules: (v) => v ? true : "You must accept the Privacy Policy"
            }, null, _parent2, _scopeId));
            _push2(`<a href="#" class="underline" data-v-59d95f90${_scopeId}>I have read and understand the Privacy and Cookies Policy.</a></label><div class="mt-1 h-4 overflow-hidden" data-v-59d95f90${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "privacyAccepted" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-59d95f90${_scopeId2}>${ssrInterpolate(message)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(Transition, { name: "fade-error" }, {
                      default: withCtx(() => [
                        message ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-xs text-error_text_color leading-4"
                        }, toDisplayString(message), 1)) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="pt-4" data-v-59d95f90${_scopeId}><button class="w-full text-center py-3 primary-btn cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(unref(ctaDisabled) || unref(submitting)) ? " disabled" : ""} type="submit" data-v-59d95f90${_scopeId}><span data-v-59d95f90${_scopeId}>${ssrInterpolate(unref(submitting) ? "Placing Order…" : "Place Order")}</span></button>`);
            if (unref(errorMsg)) {
              _push2(`<p class="mt-3 text-sm text-error_text_color" data-v-59d95f90${_scopeId}>${ssrInterpolate(unref(errorMsg))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("h3", { class: "text-sm uppercase tracking-widest" }, "Billing"),
                createVNode("div", null, [
                  createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "E-mail"),
                  createVNode(unref(Field), {
                    name: "email",
                    type: "email",
                    rules: emailRule
                  }, {
                    default: withCtx(({ field, meta }) => [
                      createVNode("input", mergeProps(field, {
                        class: "input w-full",
                        "aria-invalid": !meta.valid && meta.touched
                      }), null, 16, ["aria-invalid"])
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                    createVNode(unref(ErrorMessage), { name: "email" }, {
                      default: withCtx(({ message }) => [
                        createVNode(Transition, { name: "fade-error" }, {
                          default: withCtx(() => [
                            message ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-xs text-error_text_color leading-4"
                            }, toDisplayString(message), 1)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Name"),
                    createVNode(unref(Field), {
                      name: "firstName",
                      rules: req("Name", 50)
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: "input w-full",
                          maxlength: "50"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                      createVNode(unref(ErrorMessage), { name: "firstName" }, {
                        default: withCtx(({ message }) => [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              message ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(message), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Surname"),
                    createVNode(unref(Field), {
                      name: "lastName",
                      rules: req("Surname", 50)
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: "input w-full",
                          maxlength: "50"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                      createVNode(unref(ErrorMessage), { name: "lastName" }, {
                        default: withCtx(({ message }) => [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              message ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(message), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Address"),
                  createVNode(unref(Field), {
                    name: "address",
                    rules: req("Address", 120)
                  }, {
                    default: withCtx(({ field }) => [
                      createVNode("input", mergeProps(field, {
                        type: "text",
                        class: "input w-full",
                        maxlength: "120",
                        placeholder: "Street, number"
                      }), null, 16)
                    ]),
                    _: 1
                  }, 8, ["rules"]),
                  createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                    createVNode(unref(ErrorMessage), { name: "address" }, {
                      default: withCtx(({ message }) => [
                        createVNode(Transition, { name: "fade-error" }, {
                          default: withCtx(() => [
                            message ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-xs text-error_text_color leading-4"
                            }, toDisplayString(message), 1)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Post code"),
                    createVNode(unref(Field), {
                      name: "postal_code",
                      rules: postalRule("Post code")
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          class: "input w-full",
                          inputmode: "numeric",
                          maxlength: "10"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                      createVNode(unref(ErrorMessage), { name: "postal_code" }, {
                        default: withCtx(({ message }) => [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              message ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(message), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Town / City"),
                    createVNode(unref(Field), {
                      name: "city",
                      rules: req("City", 60)
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: "input w-full",
                          maxlength: "60"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                      createVNode(unref(ErrorMessage), { name: "city" }, {
                        default: withCtx(({ message }) => [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              message ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(message), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 gap-3" }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Country / Region"),
                    createVNode(unref(Field), {
                      name: "country",
                      rules: req("Country")
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("select", mergeProps(field, { class: "input w-full" }), [
                          createVNode("option", { value: "Croatia" }, "Croatia"),
                          createVNode("option", { value: "Slovenia" }, "Slovenia"),
                          createVNode("option", { value: "Austria" }, "Austria"),
                          createVNode("option", { value: "Germany" }, "Germany"),
                          createVNode("option", { value: "Italy" }, "Italy")
                        ], 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                      createVNode(unref(ErrorMessage), { name: "country" }, {
                        default: withCtx(({ message }) => [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              message ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(message), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Telephone"),
                    createVNode(unref(Field), {
                      name: "phone_number",
                      rules: phoneRule
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          type: "tel",
                          class: "input w-full",
                          maxlength: "20"
                        }), null, 16)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                      createVNode(unref(ErrorMessage), { name: "phone_number" }, {
                        default: withCtx(({ message }) => [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              message ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(message), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "space-y-6" }, [
                createVNode("h3", { class: "text-sm uppercase tracking-widest" }, "Delivery"),
                createVNode("div", null, [
                  createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery Address"),
                  createVNode(unref(Field), {
                    name: "delivery_address",
                    rules: req("Delivery address", 120)
                  }, {
                    default: withCtx(({ field }) => [
                      createVNode("input", mergeProps(field, {
                        type: "text",
                        class: "input w-full",
                        maxlength: "120",
                        placeholder: "Street, number"
                      }), null, 16)
                    ]),
                    _: 1
                  }, 8, ["rules"]),
                  createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                    createVNode(unref(ErrorMessage), { name: "delivery_address" }, {
                      default: withCtx(({ message }) => [
                        createVNode(Transition, { name: "fade-error" }, {
                          default: withCtx(() => [
                            message ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-xs text-error_text_color leading-4"
                            }, toDisplayString(message), 1)) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery Post code"),
                    createVNode(unref(Field), {
                      name: "delivery_postal_code",
                      rules: postalRule("Delivery post code")
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          class: "input w-full",
                          inputmode: "numeric",
                          maxlength: "10"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                      createVNode(unref(ErrorMessage), { name: "delivery_postal_code" }, {
                        default: withCtx(({ message }) => [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              message ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(message), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block text-xs uppercase tracking-widest mb-2" }, "Delivery City"),
                    createVNode(unref(Field), {
                      name: "delivery_city",
                      rules: req("Delivery city", 60)
                    }, {
                      default: withCtx(({ field }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: "input w-full",
                          maxlength: "60"
                        }), null, 16)
                      ]),
                      _: 1
                    }, 8, ["rules"]),
                    createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                      createVNode(unref(ErrorMessage), { name: "delivery_city" }, {
                        default: withCtx(({ message }) => [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              message ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(message), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "space-y-6" }, [
                createVNode("h3", { class: "text-sm uppercase tracking-widest" }, "Payment"),
                createVNode("div", { class: "flex gap-2" }, [
                  createVNode("button", {
                    type: "button",
                    class: ["px-3 py-2 border text-xs", unref(values).payment_method === "card" ? "border-text_color font-medium" : "border-text_color/30"],
                    onClick: ($event) => unref(setFieldValue)("payment_method", "card")
                  }, "Card", 10, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    class: ["px-3 py-2 border text-xs", unref(values).payment_method === "paypal" ? "border-text_color font-medium" : "border-text_color/30"],
                    onClick: ($event) => unref(setFieldValue)("payment_method", "paypal")
                  }, "PayPal", 10, ["onClick"]),
                  createVNode("button", {
                    type: "button",
                    class: ["px-3 py-2 border text-xs", unref(values).payment_method === "cod" ? "border-text_color font-medium" : "border-text_color/30"],
                    onClick: ($event) => unref(setFieldValue)("payment_method", "cod")
                  }, "Cash", 10, ["onClick"])
                ]),
                createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                  createVNode(unref(ErrorMessage), { name: "payment_method" }, {
                    default: withCtx(({ message }) => [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          message ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(message), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ]),
                createVNode("label", { class: "flex items-center gap-3 text-sm" }, [
                  createVNode(unref(Field), {
                    name: "newsletter",
                    type: "checkbox",
                    value: true,
                    "unchecked-value": false
                  }),
                  createTextVNode(" I want to receive personalised commercial communications by email. ")
                ]),
                createVNode("label", { class: "flex items-center gap-3 text-sm" }, [
                  createVNode(unref(Field), {
                    name: "privacyAccepted",
                    type: "checkbox",
                    value: true,
                    "unchecked-value": false,
                    rules: (v) => v ? true : "You must accept the Privacy Policy"
                  }, null, 8, ["rules"]),
                  createVNode("a", {
                    href: "#",
                    class: "underline"
                  }, "I have read and understand the Privacy and Cookies Policy.")
                ]),
                createVNode("div", { class: "mt-1 h-4 overflow-hidden" }, [
                  createVNode(unref(ErrorMessage), { name: "privacyAccepted" }, {
                    default: withCtx(({ message }) => [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          message ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(message), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode("div", { class: "pt-4" }, [
                createVNode("button", {
                  class: "w-full text-center py-3 primary-btn cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                  disabled: unref(ctaDisabled) || unref(submitting),
                  type: "submit"
                }, [
                  createVNode("span", null, toDisplayString(unref(submitting) ? "Placing Order…" : "Place Order"), 1)
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
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-59d95f90"]]);
export {
  checkout as default
};
//# sourceMappingURL=checkout-CzbvVHlK.js.map
