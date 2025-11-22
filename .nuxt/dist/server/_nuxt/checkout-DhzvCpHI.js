import { u as useCartStore, _ as __nuxt_component_0 } from "./AppNavigation-DbbUjllq.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BeJz8Y8C.js";
import { _ as __nuxt_component_0$2 } from "./index-DSJLL3Jq.js";
import { computed, defineComponent, ref, reactive, withCtx, createTextVNode, unref, mergeProps, createVNode, Transition, createBlock, createCommentVNode, openBlock, toDisplayString, Fragment, renderList, withDirectives, vShow, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { Form, Field, ErrorMessage } from "vee-validate";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { y as useCookie, f as useRuntimeConfig, n as navigateTo, _ as _export_sfc } from "../server.mjs";
import "./virtual_public-Dgbfu3-q.js";
import "pinia";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
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
const _imports_0 = publicAssetsURL("/logo/stripe.png");
const _imports_1 = publicAssetsURL("/logo/paypal.png");
function useCartSession() {
  const sessionId = useCookie("cart_session_id");
  return {
    sessionId: computed(() => sessionId.value)
  };
}
const FREE_THRESHOLD = 200;
const FLAT_SHIPPING = 12.99;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const cartStore = useCartStore();
    const removingSlug = ref(null);
    const submitting = ref(false);
    const errorMsg = ref("");
    const selectedPaymentMethod = ref("");
    const cart = computed(() => ({
      items: cartStore.items,
      cart_total_to_pay: cartStore.totals.toPay
    }));
    const formValues = reactive({
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      postal_code: "",
      city: "",
      country: "",
      phone_number: "",
      delivery_address: "",
      delivery_postal_code: "",
      delivery_city: "",
      privacyAccepted: false,
      newsletter: false
    });
    useCartSession();
    const formatMoney = (amount) => {
      return Number.isInteger(amount) ? amount.toString() : amount.toFixed(2);
    };
    const subtotal = computed(() => cartStore.merchandiseTotal);
    const shippingFee = computed(() => {
      return subtotal.value >= FREE_THRESHOLD ? 0 : FLAT_SHIPPING;
    });
    const total = computed(() => {
      return subtotal.value + shippingFee.value;
    });
    const isSubmitDisabled = computed(() => {
      if (cart.value.items.length === 0) return true;
      if (submitting.value) return true;
      if (!selectedPaymentMethod.value) return true;
      const hasRequiredFields = Boolean(
        formValues.email?.trim() && formValues.firstName?.trim() && formValues.lastName?.trim() && formValues.address?.trim() && formValues.postal_code?.trim() && formValues.city?.trim() && formValues.country?.trim() && formValues.phone_number?.trim() && formValues.delivery_address?.trim() && formValues.delivery_postal_code?.trim() && formValues.delivery_city?.trim() && formValues.privacyAccepted
      );
      return !hasRequiredFields;
    });
    function createRequiredRule(label, maxLength) {
      return (value) => {
        const val = value ?? "";
        const str = String(val);
        if (!str || !str.trim()) {
          return `${label} is required`;
        }
        if (maxLength && str.length > maxLength) {
          return `${label} must be less than ${maxLength + 1} characters`;
        }
        return true;
      };
    }
    function emailRule(value) {
      const val = String(value ?? "");
      if (!val || !val.trim()) {
        return "Email is required";
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!emailRegex.test(val)) {
        return "Please enter a valid email address";
      }
      return true;
    }
    function phoneRule(value) {
      const val = String(value ?? "");
      if (!val || !val.trim()) {
        return "Phone number is required";
      }
      const phoneRegex = /^[+()\-.\s\d]{7,20}$/;
      if (!phoneRegex.test(val)) {
        return "Please enter a valid phone number (+, digits, spaces, (), -)";
      }
      return true;
    }
    function createPostalRule(label = "Postal code") {
      return (value) => {
        const val = String(value ?? "");
        if (!val || !val.trim()) {
          return `${label} is required`;
        }
        const postalRegex = /^[A-Za-z0-9\s\-]{3,10}$/;
        if (!postalRegex.test(val)) {
          return `${label} looks invalid`;
        }
        return true;
      };
    }
    function privacyRule(value) {
      return Boolean(value) ? true : "You must accept the Privacy Policy";
    }
    function selectPaymentMethod(method) {
      selectedPaymentMethod.value = method;
    }
    function getItemSlug(item) {
      return item.product_variant_slug ?? item.product_slug ?? "";
    }
    async function removeCartItem(item) {
      const slug = getItemSlug(item);
      if (!slug || removingSlug.value) return;
      removingSlug.value = slug;
      try {
        await cartStore.removeFromCart({ ...item, product_slug: item.product_slug ?? slug });
      } catch (error) {
        console.error("Failed to remove item:", error);
      } finally {
        removingSlug.value = null;
      }
    }
    async function handleSubmit() {
      errorMsg.value = "";
      if (cart.value.items.length === 0) {
        errorMsg.value = "Your cart is empty.";
        return;
      }
      if (!selectedPaymentMethod.value) {
        errorMsg.value = "Please select a payment method.";
        return;
      }
      try {
        submitting.value = true;
        const cartSessionCookie = useCookie("cart_session_id");
        const payload = {
          email: formValues.email,
          country: formValues.country,
          address: formValues.address,
          city: formValues.city,
          postal_code: formValues.postal_code,
          phone_number: formValues.phone_number,
          delivery_address: formValues.delivery_address,
          delivery_city: formValues.delivery_city,
          delivery_postal_code: formValues.delivery_postal_code,
          payment_method: selectedPaymentMethod.value,
          shipping_cost: shippingFee.value,
          session_id: cartSessionCookie.value
        };
        console.log("📤 Sending payload:", payload);
        const response = await $fetch(
          `${config.public.apiBase}/api/orders/create/`,
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: payload
          }
        );
        console.log("📥 Response received:", response);
        if (response.payment_method === "card" && response.client_secret) {
          console.log("💳 Redirecting to payment page...");
          await navigateTo({
            path: "/payment",
            query: {
              ref: response.order_reference,
              clientSecret: response.client_secret,
              amount: response.total_price
            }
          });
        } else {
          console.log("✅ Redirecting to thank you page...");
          await navigateTo({
            path: "/thank-you",
            query: {
              ref: response.order_reference,
              total: response.total_price
            }
          });
        }
      } catch (error) {
        console.error("❌ Order error:", error);
        console.error("❌ Error data:", error?.data);
        console.error("❌ Error status:", error?.status);
        errorMsg.value = error?.data?.detail || "Could not create order. Please try again.";
      } finally {
        submitting.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(_attrs)} data-v-92be7921>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-6" data-v-92be7921><div class="flex justify-start w-full" data-v-92be7921><nav class="flex items-center py-1 text-xs md:text-sm text-text_color uppercase tracking-widest" aria-label="Breadcrumb" data-v-92be7921>`);
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
      _push(`<span class="pr-2" aria-hidden="true" data-v-92be7921>/</span>`);
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
      _push(`<span class="pr-2" aria-hidden="true" data-v-92be7921>/</span><span class="pr-2" aria-current="page" data-v-92be7921>CHECKOUT</span></nav></div></div><div class="hidden md:flex flex-col md:flex-row py-8 md:px-8 mt-6 md:gap-x-16" data-v-92be7921>`);
      _push(ssrRenderComponent(unref(Form), {
        class: "w-full",
        onSubmit: handleSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-8" data-v-92be7921${_scopeId}><h3 class="text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color" data-v-92be7921${_scopeId}>Billing</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-92be7921${_scopeId}><div class="md:col-span-2" data-v-92be7921${_scopeId}><label for="email-desktop" class="block text-xs uppercase tracking-widest mb-2" data-v-92be7921${_scopeId}>E-mail</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "email-desktop",
              name: "email",
              type: "email",
              rules: emailRule,
              modelValue: unref(formValues).email,
              "onUpdate:modelValue": ($event) => unref(formValues).email = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    class: ["input", { "border-error_text_color": errorMessage }],
                    "aria-describedby": "email-error-desktop"
                  }))} data-v-92be7921${_scopeId2}><div id="email-error-desktop" class="mt-1 h-4 overflow-hidden" data-v-92be7921${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-92be7921${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      class: ["input", { "border-error_text_color": errorMessage }],
                      "aria-describedby": "email-error-desktop"
                    }), null, 16),
                    createVNode("div", {
                      id: "email-error-desktop",
                      class: "mt-1 h-4 overflow-hidden"
                    }, [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          errorMessage ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-92be7921${_scopeId}><div data-v-92be7921${_scopeId}><label for="firstName-desktop" class="block text-xs uppercase tracking-widest mb-2" data-v-92be7921${_scopeId}>Name</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "firstName-desktop",
              name: "firstName",
              rules: createRequiredRule("Name", 50),
              modelValue: unref(formValues).firstName,
              "onUpdate:modelValue": ($event) => unref(formValues).firstName = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: ["input", { "border-error_text_color": errorMessage }],
                    maxlength: "50",
                    "aria-describedby": "firstName-error-desktop"
                  }))} data-v-92be7921${_scopeId2}><div id="firstName-error-desktop" class="mt-1 h-4 overflow-hidden" data-v-92be7921${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-92be7921${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: ["input", { "border-error_text_color": errorMessage }],
                      maxlength: "50",
                      "aria-describedby": "firstName-error-desktop"
                    }), null, 16),
                    createVNode("div", {
                      id: "firstName-error-desktop",
                      class: "mt-1 h-4 overflow-hidden"
                    }, [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          errorMessage ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div data-v-92be7921${_scopeId}><label for="lastName-desktop" class="block text-xs uppercase tracking-widest mb-2" data-v-92be7921${_scopeId}>Surname</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "lastName-desktop",
              name: "lastName",
              rules: createRequiredRule("Surname", 50),
              modelValue: unref(formValues).lastName,
              "onUpdate:modelValue": ($event) => unref(formValues).lastName = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: ["input", { "border-error_text_color": errorMessage }],
                    maxlength: "50",
                    "aria-describedby": "lastName-error-desktop"
                  }))} data-v-92be7921${_scopeId2}><div id="lastName-error-desktop" class="mt-1 h-4 overflow-hidden" data-v-92be7921${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-92be7921${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: ["input", { "border-error_text_color": errorMessage }],
                      maxlength: "50",
                      "aria-describedby": "lastName-error-desktop"
                    }), null, 16),
                    createVNode("div", {
                      id: "lastName-error-desktop",
                      class: "mt-1 h-4 overflow-hidden"
                    }, [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          errorMessage ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-92be7921${_scopeId}><div class="md:col-span-2" data-v-92be7921${_scopeId}><label for="address-desktop" class="block text-xs uppercase tracking-widest mb-2" data-v-92be7921${_scopeId}>Address</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "address-desktop",
              name: "address",
              rules: createRequiredRule("Address", 120),
              modelValue: unref(formValues).address,
              "onUpdate:modelValue": ($event) => unref(formValues).address = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: ["input", { "border-error_text_color": errorMessage }],
                    maxlength: "120",
                    placeholder: "Street, number",
                    "aria-describedby": "address-error-desktop"
                  }))} data-v-92be7921${_scopeId2}><div id="address-error-desktop" class="mt-1 h-4 overflow-hidden" data-v-92be7921${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-92be7921${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: ["input", { "border-error_text_color": errorMessage }],
                      maxlength: "120",
                      placeholder: "Street, number",
                      "aria-describedby": "address-error-desktop"
                    }), null, 16),
                    createVNode("div", {
                      id: "address-error-desktop",
                      class: "mt-1 h-4 overflow-hidden"
                    }, [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          errorMessage ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-92be7921${_scopeId}><div data-v-92be7921${_scopeId}><label for="postal_code-desktop" class="block text-xs uppercase tracking-widest mb-2" data-v-92be7921${_scopeId}>Post code</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "postal_code-desktop",
              name: "postal_code",
              rules: createPostalRule("Post code"),
              modelValue: unref(formValues).postal_code,
              "onUpdate:modelValue": ($event) => unref(formValues).postal_code = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    class: ["input", { "border-error_text_color": errorMessage }],
                    inputmode: "numeric",
                    maxlength: "10",
                    "aria-describedby": "postal_code-error-desktop"
                  }))} data-v-92be7921${_scopeId2}><div id="postal_code-error-desktop" class="mt-1 h-4 overflow-hidden" data-v-92be7921${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-92be7921${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      class: ["input", { "border-error_text_color": errorMessage }],
                      inputmode: "numeric",
                      maxlength: "10",
                      "aria-describedby": "postal_code-error-desktop"
                    }), null, 16),
                    createVNode("div", {
                      id: "postal_code-error-desktop",
                      class: "mt-1 h-4 overflow-hidden"
                    }, [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          errorMessage ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div data-v-92be7921${_scopeId}><label for="city-desktop" class="block text-xs uppercase tracking-widest mb-2" data-v-92be7921${_scopeId}>Town / City</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "city-desktop",
              name: "city",
              rules: createRequiredRule("City", 60),
              modelValue: unref(formValues).city,
              "onUpdate:modelValue": ($event) => unref(formValues).city = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: ["input", { "border-error_text_color": errorMessage }],
                    maxlength: "60",
                    "aria-describedby": "city-error-desktop"
                  }))} data-v-92be7921${_scopeId2}><div id="city-error-desktop" class="mt-1 h-4 overflow-hidden" data-v-92be7921${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-92be7921${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: ["input", { "border-error_text_color": errorMessage }],
                      maxlength: "60",
                      "aria-describedby": "city-error-desktop"
                    }), null, 16),
                    createVNode("div", {
                      id: "city-error-desktop",
                      class: "mt-1 h-4 overflow-hidden"
                    }, [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          errorMessage ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 gap-6" data-v-92be7921${_scopeId}><div data-v-92be7921${_scopeId}><label for="country-desktop" class="block text-xs uppercase tracking-widest mb-2" data-v-92be7921${_scopeId}>Country / Region</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "country-desktop",
              name: "country",
              rules: createRequiredRule("Country"),
              modelValue: unref(formValues).country,
              "onUpdate:modelValue": ($event) => unref(formValues).country = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<select${ssrRenderAttrs(mergeProps(field, {
                    class: ["input", { "border-error_text_color": errorMessage }],
                    "aria-describedby": "country-error-desktop"
                  }))} data-v-92be7921${_scopeId2}><option value="" data-v-92be7921${_scopeId2}>Select country</option><option value="Croatia" data-v-92be7921${_scopeId2}>Croatia</option><option value="Slovenia" data-v-92be7921${_scopeId2}>Slovenia</option><option value="Austria" data-v-92be7921${_scopeId2}>Austria</option><option value="Germany" data-v-92be7921${_scopeId2}>Germany</option><option value="Italy" data-v-92be7921${_scopeId2}>Italy</option></select><div id="country-error-desktop" class="mt-1 h-4 overflow-hidden" data-v-92be7921${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-92be7921${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("select", mergeProps(field, {
                      class: ["input", { "border-error_text_color": errorMessage }],
                      "aria-describedby": "country-error-desktop"
                    }), [
                      createVNode("option", { value: "" }, "Select country"),
                      createVNode("option", { value: "Croatia" }, "Croatia"),
                      createVNode("option", { value: "Slovenia" }, "Slovenia"),
                      createVNode("option", { value: "Austria" }, "Austria"),
                      createVNode("option", { value: "Germany" }, "Germany"),
                      createVNode("option", { value: "Italy" }, "Italy")
                    ], 16),
                    createVNode("div", {
                      id: "country-error-desktop",
                      class: "mt-1 h-4 overflow-hidden"
                    }, [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          errorMessage ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div data-v-92be7921${_scopeId}><label for="phone_number-desktop" class="block text-xs uppercase tracking-widest mb-2" data-v-92be7921${_scopeId}>Telephone</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "phone_number-desktop",
              name: "phone_number",
              rules: phoneRule,
              modelValue: unref(formValues).phone_number,
              "onUpdate:modelValue": ($event) => unref(formValues).phone_number = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "tel",
                    class: ["input", { "border-error_text_color": errorMessage }],
                    maxlength: "20",
                    "aria-describedby": "phone_number-error-desktop"
                  }))} data-v-92be7921${_scopeId2}><div id="phone_number-error-desktop" class="mt-1 h-4 overflow-hidden" data-v-92be7921${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-92be7921${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "tel",
                      class: ["input", { "border-error_text_color": errorMessage }],
                      maxlength: "20",
                      "aria-describedby": "phone_number-error-desktop"
                    }), null, 16),
                    createVNode("div", {
                      id: "phone_number-error-desktop",
                      class: "mt-1 h-4 overflow-hidden"
                    }, [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          errorMessage ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="space-y-8 mt-10" data-v-92be7921${_scopeId}><h3 class="text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color" data-v-92be7921${_scopeId}>Delivery</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-92be7921${_scopeId}><div class="md:col-span-2" data-v-92be7921${_scopeId}><label for="delivery_address-desktop" class="block text-xs uppercase tracking-widest mb-2" data-v-92be7921${_scopeId}>Delivery Address</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "delivery_address-desktop",
              name: "delivery_address",
              rules: createRequiredRule("Delivery address", 120),
              modelValue: unref(formValues).delivery_address,
              "onUpdate:modelValue": ($event) => unref(formValues).delivery_address = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: ["input", { "border-error_text_color": errorMessage }],
                    maxlength: "120",
                    placeholder: "Street, number",
                    "aria-describedby": "delivery_address-error-desktop"
                  }))} data-v-92be7921${_scopeId2}><div id="delivery_address-error-desktop" class="mt-1 h-4 overflow-hidden" data-v-92be7921${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-92be7921${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: ["input", { "border-error_text_color": errorMessage }],
                      maxlength: "120",
                      placeholder: "Street, number",
                      "aria-describedby": "delivery_address-error-desktop"
                    }), null, 16),
                    createVNode("div", {
                      id: "delivery_address-error-desktop",
                      class: "mt-1 h-4 overflow-hidden"
                    }, [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          errorMessage ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-92be7921${_scopeId}><div data-v-92be7921${_scopeId}><label for="delivery_postal_code-desktop" class="block text-xs uppercase tracking-widest mb-2" data-v-92be7921${_scopeId}>Delivery Post code</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "delivery_postal_code-desktop",
              name: "delivery_postal_code",
              rules: createPostalRule("Delivery post code"),
              modelValue: unref(formValues).delivery_postal_code,
              "onUpdate:modelValue": ($event) => unref(formValues).delivery_postal_code = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    class: ["input", { "border-error_text_color": errorMessage }],
                    inputmode: "numeric",
                    maxlength: "10",
                    "aria-describedby": "delivery_postal_code-error-desktop"
                  }))} data-v-92be7921${_scopeId2}><div id="delivery_postal_code-error-desktop" class="mt-1 h-4 overflow-hidden" data-v-92be7921${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-92be7921${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      class: ["input", { "border-error_text_color": errorMessage }],
                      inputmode: "numeric",
                      maxlength: "10",
                      "aria-describedby": "delivery_postal_code-error-desktop"
                    }), null, 16),
                    createVNode("div", {
                      id: "delivery_postal_code-error-desktop",
                      class: "mt-1 h-4 overflow-hidden"
                    }, [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          errorMessage ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div data-v-92be7921${_scopeId}><label for="delivery_city-desktop" class="block text-xs uppercase tracking-widest mb-2" data-v-92be7921${_scopeId}>Delivery City</label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "delivery_city-desktop",
              name: "delivery_city",
              rules: createRequiredRule("Delivery city", 60),
              modelValue: unref(formValues).delivery_city,
              "onUpdate:modelValue": ($event) => unref(formValues).delivery_city = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    type: "text",
                    class: ["input", { "border-error_text_color": errorMessage }],
                    maxlength: "60",
                    "aria-describedby": "delivery_city-error-desktop"
                  }))} data-v-92be7921${_scopeId2}><div id="delivery_city-error-desktop" class="mt-1 h-4 overflow-hidden" data-v-92be7921${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-92be7921${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      type: "text",
                      class: ["input", { "border-error_text_color": errorMessage }],
                      maxlength: "60",
                      "aria-describedby": "delivery_city-error-desktop"
                    }), null, 16),
                    createVNode("div", {
                      id: "delivery_city-error-desktop",
                      class: "mt-1 h-4 overflow-hidden"
                    }, [
                      createVNode(Transition, { name: "fade-error" }, {
                        default: withCtx(() => [
                          errorMessage ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-xs text-error_text_color leading-4"
                          }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="space-y-6 mt-10" data-v-92be7921${_scopeId}><h3 class="text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color" data-v-92be7921${_scopeId}>Payment</h3><div class="flex flex-col md:flex-row gap-3" data-v-92be7921${_scopeId}><label class="flex-1 cursor-pointer" data-v-92be7921${_scopeId}><input type="radio" name="payment" value="card" class="sr-only peer" data-v-92be7921${_scopeId}><div class="${ssrRenderClass([unref(selectedPaymentMethod) === "card" ? "border-text_color bg-text_color/5 font-medium" : "border-text_color/30", "px-4 py-3 border text-sm uppercase transition-colors flex items-center gap-2 peer-checked:border-text_color peer-checked:bg-text_color/50 peer-checked:font-medium peer-checked:text-background_color hover:border-text_color/50"])}" data-v-92be7921${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="Card Payment" class="w-5 h-5 object-contain" data-v-92be7921${_scopeId}><span data-v-92be7921${_scopeId}>Card</span></div></label><label class="flex-1 cursor-pointer" data-v-92be7921${_scopeId}><input type="radio" name="payment" value="paypal" class="sr-only peer" data-v-92be7921${_scopeId}><div class="${ssrRenderClass([unref(selectedPaymentMethod) === "paypal" ? "border-text_color bg-text_color/5 font-medium" : "border-text_color/30", "px-4 py-3 border text-sm uppercase transition-colors flex items-center gap-2 peer-checked:border-text_color peer-checked:bg-text_color/50 peer-checked:font-medium peer-checked:text-background_color hover:border-text_color/50"])}" data-v-92be7921${_scopeId}><img${ssrRenderAttr("src", _imports_1)} alt="PayPal" class="w-5 h-5 object-contain" data-v-92be7921${_scopeId}><span data-v-92be7921${_scopeId}>PayPal</span></div></label></div><div class="space-y-4 pt-2" data-v-92be7921${_scopeId}><label class="flex items-start gap-3 text-sm cursor-pointer" data-v-92be7921${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "newsletter",
              type: "checkbox",
              value: true,
              "unchecked-value": false,
              modelValue: unref(formValues).newsletter,
              "onUpdate:modelValue": ($event) => unref(formValues).newsletter = $event,
              class: "mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-92be7921${_scopeId}>I want to receive personalised commercial communications by email.</span></label><label class="flex items-start gap-3 text-sm cursor-pointer" data-v-92be7921${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "privacyAccepted",
              type: "checkbox",
              value: true,
              "unchecked-value": false,
              rules: privacyRule,
              modelValue: unref(formValues).privacyAccepted,
              "onUpdate:modelValue": ($event) => unref(formValues).privacyAccepted = $event,
              class: "mt-0.5"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-92be7921${_scopeId}><a href="#" class="underline hover:no-underline" data-v-92be7921${_scopeId}>I have read and understand the Privacy and Cookies Policy.</a></span></label><div class="mt-1 h-4 overflow-hidden" data-v-92be7921${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ErrorMessage), { name: "privacyAccepted" }, {
              default: withCtx(({ message }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(``);
                  if (message) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-92be7921${_scopeId2}>${ssrInterpolate(message)}</p>`);
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
            _push2(`</div></div></div><div class="pt-6" data-v-92be7921${_scopeId}><button type="submit" class="${ssrRenderClass([unref(isSubmitDisabled) ? "btn--disabled" : "btn--primary", "w-full btn"])}"${ssrIncludeBooleanAttr(unref(isSubmitDisabled)) ? " disabled" : ""} data-v-92be7921${_scopeId}><span class="btn__text" data-v-92be7921${_scopeId}>${ssrInterpolate(unref(submitting) ? "Placing Order…" : "Place Order")}</span><span class="btn__fill" data-v-92be7921${_scopeId}></span></button><div class="mt-3 h-5 overflow-hidden" data-v-92be7921${_scopeId}>`);
            if (unref(errorMsg)) {
              _push2(`<p class="text-sm text-error_text_color" data-v-92be7921${_scopeId}>${ssrInterpolate(unref(errorMsg))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-8" }, [
                createVNode("h3", { class: "text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color" }, "Billing"),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode("div", { class: "md:col-span-2" }, [
                    createVNode("label", {
                      for: "email-desktop",
                      class: "block text-xs uppercase tracking-widest mb-2"
                    }, "E-mail"),
                    createVNode(unref(Field), {
                      id: "email-desktop",
                      name: "email",
                      type: "email",
                      rules: emailRule,
                      modelValue: unref(formValues).email,
                      "onUpdate:modelValue": ($event) => unref(formValues).email = $event
                    }, {
                      default: withCtx(({ field, errorMessage }) => [
                        createVNode("input", mergeProps(field, {
                          class: ["input", { "border-error_text_color": errorMessage }],
                          "aria-describedby": "email-error-desktop"
                        }), null, 16),
                        createVNode("div", {
                          id: "email-error-desktop",
                          class: "mt-1 h-4 overflow-hidden"
                        }, [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              errorMessage ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "firstName-desktop",
                      class: "block text-xs uppercase tracking-widest mb-2"
                    }, "Name"),
                    createVNode(unref(Field), {
                      id: "firstName-desktop",
                      name: "firstName",
                      rules: createRequiredRule("Name", 50),
                      modelValue: unref(formValues).firstName,
                      "onUpdate:modelValue": ($event) => unref(formValues).firstName = $event
                    }, {
                      default: withCtx(({ field, errorMessage }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: ["input", { "border-error_text_color": errorMessage }],
                          maxlength: "50",
                          "aria-describedby": "firstName-error-desktop"
                        }), null, 16),
                        createVNode("div", {
                          id: "firstName-error-desktop",
                          class: "mt-1 h-4 overflow-hidden"
                        }, [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              errorMessage ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    }, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "lastName-desktop",
                      class: "block text-xs uppercase tracking-widest mb-2"
                    }, "Surname"),
                    createVNode(unref(Field), {
                      id: "lastName-desktop",
                      name: "lastName",
                      rules: createRequiredRule("Surname", 50),
                      modelValue: unref(formValues).lastName,
                      "onUpdate:modelValue": ($event) => unref(formValues).lastName = $event
                    }, {
                      default: withCtx(({ field, errorMessage }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: ["input", { "border-error_text_color": errorMessage }],
                          maxlength: "50",
                          "aria-describedby": "lastName-error-desktop"
                        }), null, 16),
                        createVNode("div", {
                          id: "lastName-error-desktop",
                          class: "mt-1 h-4 overflow-hidden"
                        }, [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              errorMessage ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    }, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode("div", { class: "md:col-span-2" }, [
                    createVNode("label", {
                      for: "address-desktop",
                      class: "block text-xs uppercase tracking-widest mb-2"
                    }, "Address"),
                    createVNode(unref(Field), {
                      id: "address-desktop",
                      name: "address",
                      rules: createRequiredRule("Address", 120),
                      modelValue: unref(formValues).address,
                      "onUpdate:modelValue": ($event) => unref(formValues).address = $event
                    }, {
                      default: withCtx(({ field, errorMessage }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: ["input", { "border-error_text_color": errorMessage }],
                          maxlength: "120",
                          placeholder: "Street, number",
                          "aria-describedby": "address-error-desktop"
                        }), null, 16),
                        createVNode("div", {
                          id: "address-error-desktop",
                          class: "mt-1 h-4 overflow-hidden"
                        }, [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              errorMessage ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    }, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "postal_code-desktop",
                      class: "block text-xs uppercase tracking-widest mb-2"
                    }, "Post code"),
                    createVNode(unref(Field), {
                      id: "postal_code-desktop",
                      name: "postal_code",
                      rules: createPostalRule("Post code"),
                      modelValue: unref(formValues).postal_code,
                      "onUpdate:modelValue": ($event) => unref(formValues).postal_code = $event
                    }, {
                      default: withCtx(({ field, errorMessage }) => [
                        createVNode("input", mergeProps(field, {
                          class: ["input", { "border-error_text_color": errorMessage }],
                          inputmode: "numeric",
                          maxlength: "10",
                          "aria-describedby": "postal_code-error-desktop"
                        }), null, 16),
                        createVNode("div", {
                          id: "postal_code-error-desktop",
                          class: "mt-1 h-4 overflow-hidden"
                        }, [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              errorMessage ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    }, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "city-desktop",
                      class: "block text-xs uppercase tracking-widest mb-2"
                    }, "Town / City"),
                    createVNode(unref(Field), {
                      id: "city-desktop",
                      name: "city",
                      rules: createRequiredRule("City", 60),
                      modelValue: unref(formValues).city,
                      "onUpdate:modelValue": ($event) => unref(formValues).city = $event
                    }, {
                      default: withCtx(({ field, errorMessage }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: ["input", { "border-error_text_color": errorMessage }],
                          maxlength: "60",
                          "aria-describedby": "city-error-desktop"
                        }), null, 16),
                        createVNode("div", {
                          id: "city-error-desktop",
                          class: "mt-1 h-4 overflow-hidden"
                        }, [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              errorMessage ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    }, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 gap-6" }, [
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "country-desktop",
                      class: "block text-xs uppercase tracking-widest mb-2"
                    }, "Country / Region"),
                    createVNode(unref(Field), {
                      id: "country-desktop",
                      name: "country",
                      rules: createRequiredRule("Country"),
                      modelValue: unref(formValues).country,
                      "onUpdate:modelValue": ($event) => unref(formValues).country = $event
                    }, {
                      default: withCtx(({ field, errorMessage }) => [
                        createVNode("select", mergeProps(field, {
                          class: ["input", { "border-error_text_color": errorMessage }],
                          "aria-describedby": "country-error-desktop"
                        }), [
                          createVNode("option", { value: "" }, "Select country"),
                          createVNode("option", { value: "Croatia" }, "Croatia"),
                          createVNode("option", { value: "Slovenia" }, "Slovenia"),
                          createVNode("option", { value: "Austria" }, "Austria"),
                          createVNode("option", { value: "Germany" }, "Germany"),
                          createVNode("option", { value: "Italy" }, "Italy")
                        ], 16),
                        createVNode("div", {
                          id: "country-error-desktop",
                          class: "mt-1 h-4 overflow-hidden"
                        }, [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              errorMessage ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    }, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "phone_number-desktop",
                      class: "block text-xs uppercase tracking-widest mb-2"
                    }, "Telephone"),
                    createVNode(unref(Field), {
                      id: "phone_number-desktop",
                      name: "phone_number",
                      rules: phoneRule,
                      modelValue: unref(formValues).phone_number,
                      "onUpdate:modelValue": ($event) => unref(formValues).phone_number = $event
                    }, {
                      default: withCtx(({ field, errorMessage }) => [
                        createVNode("input", mergeProps(field, {
                          type: "tel",
                          class: ["input", { "border-error_text_color": errorMessage }],
                          maxlength: "20",
                          "aria-describedby": "phone_number-error-desktop"
                        }), null, 16),
                        createVNode("div", {
                          id: "phone_number-error-desktop",
                          class: "mt-1 h-4 overflow-hidden"
                        }, [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              errorMessage ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ]),
              createVNode("div", { class: "space-y-8 mt-10" }, [
                createVNode("h3", { class: "text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color" }, "Delivery"),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode("div", { class: "md:col-span-2" }, [
                    createVNode("label", {
                      for: "delivery_address-desktop",
                      class: "block text-xs uppercase tracking-widest mb-2"
                    }, "Delivery Address"),
                    createVNode(unref(Field), {
                      id: "delivery_address-desktop",
                      name: "delivery_address",
                      rules: createRequiredRule("Delivery address", 120),
                      modelValue: unref(formValues).delivery_address,
                      "onUpdate:modelValue": ($event) => unref(formValues).delivery_address = $event
                    }, {
                      default: withCtx(({ field, errorMessage }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: ["input", { "border-error_text_color": errorMessage }],
                          maxlength: "120",
                          placeholder: "Street, number",
                          "aria-describedby": "delivery_address-error-desktop"
                        }), null, 16),
                        createVNode("div", {
                          id: "delivery_address-error-desktop",
                          class: "mt-1 h-4 overflow-hidden"
                        }, [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              errorMessage ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    }, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "delivery_postal_code-desktop",
                      class: "block text-xs uppercase tracking-widest mb-2"
                    }, "Delivery Post code"),
                    createVNode(unref(Field), {
                      id: "delivery_postal_code-desktop",
                      name: "delivery_postal_code",
                      rules: createPostalRule("Delivery post code"),
                      modelValue: unref(formValues).delivery_postal_code,
                      "onUpdate:modelValue": ($event) => unref(formValues).delivery_postal_code = $event
                    }, {
                      default: withCtx(({ field, errorMessage }) => [
                        createVNode("input", mergeProps(field, {
                          class: ["input", { "border-error_text_color": errorMessage }],
                          inputmode: "numeric",
                          maxlength: "10",
                          "aria-describedby": "delivery_postal_code-error-desktop"
                        }), null, 16),
                        createVNode("div", {
                          id: "delivery_postal_code-error-desktop",
                          class: "mt-1 h-4 overflow-hidden"
                        }, [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              errorMessage ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    }, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "delivery_city-desktop",
                      class: "block text-xs uppercase tracking-widest mb-2"
                    }, "Delivery City"),
                    createVNode(unref(Field), {
                      id: "delivery_city-desktop",
                      name: "delivery_city",
                      rules: createRequiredRule("Delivery city", 60),
                      modelValue: unref(formValues).delivery_city,
                      "onUpdate:modelValue": ($event) => unref(formValues).delivery_city = $event
                    }, {
                      default: withCtx(({ field, errorMessage }) => [
                        createVNode("input", mergeProps(field, {
                          type: "text",
                          class: ["input", { "border-error_text_color": errorMessage }],
                          maxlength: "60",
                          "aria-describedby": "delivery_city-error-desktop"
                        }), null, 16),
                        createVNode("div", {
                          id: "delivery_city-error-desktop",
                          class: "mt-1 h-4 overflow-hidden"
                        }, [
                          createVNode(Transition, { name: "fade-error" }, {
                            default: withCtx(() => [
                              errorMessage ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-xs text-error_text_color leading-4"
                              }, toDisplayString(errorMessage), 1)) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _: 1
                    }, 8, ["rules", "modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ]),
              createVNode("div", { class: "space-y-6 mt-10" }, [
                createVNode("h3", { class: "text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color" }, "Payment"),
                createVNode("div", { class: "flex flex-col md:flex-row gap-3" }, [
                  createVNode("label", { class: "flex-1 cursor-pointer" }, [
                    createVNode("input", {
                      type: "radio",
                      name: "payment",
                      value: "card",
                      class: "sr-only peer",
                      onChange: ($event) => selectPaymentMethod("card")
                    }, null, 40, ["onChange"]),
                    createVNode("div", {
                      class: ["px-4 py-3 border text-sm uppercase transition-colors flex items-center gap-2 peer-checked:border-text_color peer-checked:bg-text_color/50 peer-checked:font-medium peer-checked:text-background_color hover:border-text_color/50", unref(selectedPaymentMethod) === "card" ? "border-text_color bg-text_color/5 font-medium" : "border-text_color/30"]
                    }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "Card Payment",
                        class: "w-5 h-5 object-contain"
                      }),
                      createVNode("span", null, "Card")
                    ], 2)
                  ]),
                  createVNode("label", { class: "flex-1 cursor-pointer" }, [
                    createVNode("input", {
                      type: "radio",
                      name: "payment",
                      value: "paypal",
                      class: "sr-only peer",
                      onChange: ($event) => selectPaymentMethod("paypal")
                    }, null, 40, ["onChange"]),
                    createVNode("div", {
                      class: ["px-4 py-3 border text-sm uppercase transition-colors flex items-center gap-2 peer-checked:border-text_color peer-checked:bg-text_color/50 peer-checked:font-medium peer-checked:text-background_color hover:border-text_color/50", unref(selectedPaymentMethod) === "paypal" ? "border-text_color bg-text_color/5 font-medium" : "border-text_color/30"]
                    }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "PayPal",
                        class: "w-5 h-5 object-contain"
                      }),
                      createVNode("span", null, "PayPal")
                    ], 2)
                  ])
                ]),
                createVNode("div", { class: "space-y-4 pt-2" }, [
                  createVNode("label", { class: "flex items-start gap-3 text-sm cursor-pointer" }, [
                    createVNode(unref(Field), {
                      name: "newsletter",
                      type: "checkbox",
                      value: true,
                      "unchecked-value": false,
                      modelValue: unref(formValues).newsletter,
                      "onUpdate:modelValue": ($event) => unref(formValues).newsletter = $event,
                      class: "mt-0.5"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("span", null, "I want to receive personalised commercial communications by email.")
                  ]),
                  createVNode("label", { class: "flex items-start gap-3 text-sm cursor-pointer" }, [
                    createVNode(unref(Field), {
                      name: "privacyAccepted",
                      type: "checkbox",
                      value: true,
                      "unchecked-value": false,
                      rules: privacyRule,
                      modelValue: unref(formValues).privacyAccepted,
                      "onUpdate:modelValue": ($event) => unref(formValues).privacyAccepted = $event,
                      class: "mt-0.5"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("span", null, [
                      createVNode("a", {
                        href: "#",
                        class: "underline hover:no-underline"
                      }, "I have read and understand the Privacy and Cookies Policy.")
                    ])
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
                ])
              ]),
              createVNode("div", { class: "pt-6" }, [
                createVNode("button", {
                  type: "submit",
                  class: ["w-full btn", unref(isSubmitDisabled) ? "btn--disabled" : "btn--primary"],
                  disabled: unref(isSubmitDisabled)
                }, [
                  createVNode("span", { class: "btn__text" }, toDisplayString(unref(submitting) ? "Placing Order…" : "Place Order"), 1),
                  createVNode("span", { class: "btn__fill" })
                ], 10, ["disabled"]),
                createVNode("div", { class: "mt-3 h-5 overflow-hidden" }, [
                  createVNode(Transition, { name: "fade-error" }, {
                    default: withCtx(() => [
                      unref(errorMsg) ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-sm text-error_text_color"
                      }, toDisplayString(unref(errorMsg)), 1)) : createCommentVNode("", true)
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
      _push(`<aside class="w-full mt-10 md:mt-0" data-v-92be7921><div class="space-y-5" data-v-92be7921><h2 class="uppercase tracking-widest text-sm" data-v-92be7921>Order Summary</h2>`);
      if (unref(cart).items.length) {
        _push(`<div class="grid grid-cols-1 gap-y-4" data-v-92be7921><!--[-->`);
        ssrRenderList(unref(cart).items, (item, idx) => {
          _push(`<div class="flex gap-4" data-v-92be7921><img${ssrRenderAttr("src", item.avatar_image)}${ssrRenderAttr("alt", item.product)} class="w-22 h-40 object-cover border" loading="lazy" data-v-92be7921><div class="flex-1" data-v-92be7921><div class="text-sm md:text-base leading-tight tracking-wider px-3" data-v-92be7921>${ssrInterpolate(item.product)}</div><div class="text-xs mt-1 tracking-wider px-3" data-v-92be7921>Size: ${ssrInterpolate(item.size)}</div><div class="text-xs mt-1 tracking-wider px-3" data-v-92be7921>Quantity: ${ssrInterpolate(item.quantity)}</div></div><div class="text-right" data-v-92be7921><div class="text-sm md:text-base" data-v-92be7921>`);
          if (item.unit_price_discounted !== item.unit_price_original) {
            _push(`<span class="space-x-1" data-v-92be7921><span class="font-semibold" data-v-92be7921>€${ssrInterpolate(item.unit_price_discounted)}</span><span class="line-through text-xs" data-v-92be7921>€${ssrInterpolate(item.unit_price_original)}</span></span>`);
          } else {
            _push(`<span data-v-92be7921>€${ssrInterpolate(item.unit_price_original)}</span>`);
          }
          _push(`</div><button type="button" class="mt-3 text-xs uppercase tracking-widest border-b border-text_color/30 hover:border-text_color transition-colors disabled:opacity-50"${ssrIncludeBooleanAttr(unref(removingSlug) === getItemSlug(item)) ? " disabled" : ""} data-v-92be7921>${ssrInterpolate(unref(removingSlug) === getItemSlug(item) ? "Removing..." : "Remove item")}</button></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-sm opacity-70" data-v-92be7921>Your cart is empty.</div>`);
      }
      _push(`<div class="space-y-2 text-sm border-t border-text_color/30 pt-4" data-v-92be7921><div class="flex justify-between" data-v-92be7921><span data-v-92be7921>Subtotal</span><span data-v-92be7921>€${ssrInterpolate(formatMoney(unref(subtotal)))}</span></div><div class="flex justify-between" data-v-92be7921><span data-v-92be7921>Shipping</span>`);
      if (unref(shippingFee) === 0) {
        _push(`<span data-v-92be7921>€0 (Free)</span>`);
      } else {
        _push(`<span data-v-92be7921>€${ssrInterpolate(formatMoney(unref(shippingFee)))}</span>`);
      }
      _push(`</div><div class="flex justify-between font-medium text-base pt-2" data-v-92be7921><span data-v-92be7921>Total</span><span data-v-92be7921>€${ssrInterpolate(formatMoney(unref(total)))}</span></div><p class="text-xs opacity-70" data-v-92be7921> Prices include VAT, excluding any import duties. </p></div></div></aside></div><div class="md:hidden pb-10 max-w-screen-md mx-auto px-4 md:px-8 pt-4 gap-6" data-v-92be7921><div class="border-t border-b border-text_color/30 bg-background_color text-text_color rounded-sm" data-v-92be7921><div class="flex items-center justify-between py-4" data-v-92be7921><div class="text-sm uppercase tracking-widest" data-v-92be7921> Cart (${ssrInterpolate(unref(cart).items.length)}) </div><div class="text-base font-medium" data-v-92be7921> €${ssrInterpolate(formatMoney(unref(total)))}</div></div><div class="pb-4 text-sm space-y-1" data-v-92be7921><div class="flex justify-between" data-v-92be7921><span data-v-92be7921>Subtotal</span><span data-v-92be7921>€${ssrInterpolate(formatMoney(unref(subtotal)))}</span></div><div class="flex justify-between" data-v-92be7921><span data-v-92be7921>Shipping</span>`);
      if (unref(shippingFee) === 0) {
        _push(`<span data-v-92be7921>€0 (Free)</span>`);
      } else {
        _push(`<span data-v-92be7921>€${ssrInterpolate(formatMoney(unref(shippingFee)))}</span>`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(Popover), { class: "block" }, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(PopoverButton), { class: "w-full flex items-center justify-between py-4 text-sm border-t border-text_color/20" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="uppercase tracking-widest" data-v-92be7921${_scopeId2}> Items (${ssrInterpolate(unref(cart).items.length)}) </span>`);
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
                  _push3(`<div class="max-h-80 overflow-y-auto divide-y divide-text_color/30" data-v-92be7921${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(cart).items, (item, idx) => {
                    _push3(`<div class="flex gap-3 py-3" data-v-92be7921${_scopeId2}><img${ssrRenderAttr("src", item.avatar_image)}${ssrRenderAttr("alt", item.product)} class="w-20 h-24 object-cover border" loading="lazy" data-v-92be7921${_scopeId2}><div class="flex-1 min-w-0" data-v-92be7921${_scopeId2}><div class="text-sm leading-tight line-clamp-2" data-v-92be7921${_scopeId2}>${ssrInterpolate(item.product)}</div><div class="mt-1 text-xs opacity-70" data-v-92be7921${_scopeId2}>Size: ${ssrInterpolate(item.size)}</div><div class="mt-1 text-xs opacity-70" data-v-92be7921${_scopeId2}>Qty: ${ssrInterpolate(item.quantity)}</div><div class="mt-2 text-sm" data-v-92be7921${_scopeId2}>`);
                    if (item.unit_price_discounted !== item.unit_price_original) {
                      _push3(`<span class="space-x-1" data-v-92be7921${_scopeId2}><span class="font-medium" data-v-92be7921${_scopeId2}>€${ssrInterpolate(item.unit_price_discounted)}</span><span class="line-through text-xs" data-v-92be7921${_scopeId2}>€${ssrInterpolate(item.unit_price_original)}</span></span>`);
                    } else {
                      _push3(`<span data-v-92be7921${_scopeId2}>€${ssrInterpolate(item.unit_price_original)}</span>`);
                    }
                    _push3(`</div></div><button type="button" class="shrink-0 p-1 hover:bg-text_color/10 rounded-sm h-7 transition-colors disabled:opacity-50"${ssrIncludeBooleanAttr(unref(removingSlug) === getItemSlug(item)) ? " disabled" : ""}${ssrRenderAttr("aria-label", `Remove ${item.product}`)} title="Remove" data-v-92be7921${_scopeId2}>`);
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
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(cart).items, (item, idx) => {
                        return openBlock(), createBlock("div", {
                          key: idx,
                          class: "flex gap-3 py-3"
                        }, [
                          createVNode("img", {
                            src: item.avatar_image,
                            alt: item.product,
                            class: "w-20 h-24 object-cover border",
                            loading: "lazy"
                          }, null, 8, ["src", "alt"]),
                          createVNode("div", { class: "flex-1 min-w-0" }, [
                            createVNode("div", { class: "text-sm leading-tight line-clamp-2" }, toDisplayString(item.product), 1),
                            createVNode("div", { class: "mt-1 text-xs opacity-70" }, "Size: " + toDisplayString(item.size), 1),
                            createVNode("div", { class: "mt-1 text-xs opacity-70" }, "Qty: " + toDisplayString(item.quantity), 1),
                            createVNode("div", { class: "mt-2 text-sm" }, [
                              item.unit_price_discounted !== item.unit_price_original ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "space-x-1"
                              }, [
                                createVNode("span", { class: "font-medium" }, "€" + toDisplayString(item.unit_price_discounted), 1),
                                createVNode("span", { class: "line-through text-xs" }, "€" + toDisplayString(item.unit_price_original), 1)
                              ])) : (openBlock(), createBlock("span", { key: 1 }, "€" + toDisplayString(item.unit_price_original), 1))
                            ])
                          ]),
                          createVNode("button", {
                            type: "button",
                            class: "shrink-0 p-1 hover:bg-text_color/10 rounded-sm h-7 transition-colors disabled:opacity-50",
                            disabled: unref(removingSlug) === getItemSlug(item),
                            onClick: ($event) => removeCartItem(item),
                            "aria-label": `Remove ${item.product}`,
                            title: "Remove"
                          }, [
                            createVNode(_component_Icon, {
                              name: "lucide:x",
                              class: "w-4 h-4"
                            })
                          ], 8, ["disabled", "onClick", "aria-label"])
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
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(cart).items, (item, idx) => {
                          return openBlock(), createBlock("div", {
                            key: idx,
                            class: "flex gap-3 py-3"
                          }, [
                            createVNode("img", {
                              src: item.avatar_image,
                              alt: item.product,
                              class: "w-20 h-24 object-cover border",
                              loading: "lazy"
                            }, null, 8, ["src", "alt"]),
                            createVNode("div", { class: "flex-1 min-w-0" }, [
                              createVNode("div", { class: "text-sm leading-tight line-clamp-2" }, toDisplayString(item.product), 1),
                              createVNode("div", { class: "mt-1 text-xs opacity-70" }, "Size: " + toDisplayString(item.size), 1),
                              createVNode("div", { class: "mt-1 text-xs opacity-70" }, "Qty: " + toDisplayString(item.quantity), 1),
                              createVNode("div", { class: "mt-2 text-sm" }, [
                                item.unit_price_discounted !== item.unit_price_original ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "space-x-1"
                                }, [
                                  createVNode("span", { class: "font-medium" }, "€" + toDisplayString(item.unit_price_discounted), 1),
                                  createVNode("span", { class: "line-through text-xs" }, "€" + toDisplayString(item.unit_price_original), 1)
                                ])) : (openBlock(), createBlock("span", { key: 1 }, "€" + toDisplayString(item.unit_price_original), 1))
                              ])
                            ]),
                            createVNode("button", {
                              type: "button",
                              class: "shrink-0 p-1 hover:bg-text_color/10 rounded-sm h-7 transition-colors disabled:opacity-50",
                              disabled: unref(removingSlug) === getItemSlug(item),
                              onClick: ($event) => removeCartItem(item),
                              "aria-label": `Remove ${item.product}`,
                              title: "Remove"
                            }, [
                              createVNode(_component_Icon, {
                                name: "lucide:x",
                                class: "w-4 h-4"
                              })
                            ], 8, ["disabled", "onClick", "aria-label"])
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
        class: "w-full",
        onSubmit: handleSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-8 mt-6" data-v-92be7921${_scopeId}><h3 class="text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color" data-v-92be7921${_scopeId}>Billing</h3></div><div class="pt-6" data-v-92be7921${_scopeId}><button type="submit" class="${ssrRenderClass([unref(isSubmitDisabled) ? "btn--disabled" : "btn--primary", "w-full btn"])}"${ssrIncludeBooleanAttr(unref(isSubmitDisabled)) ? " disabled" : ""} data-v-92be7921${_scopeId}><span class="btn__text" data-v-92be7921${_scopeId}>${ssrInterpolate(unref(submitting) ? "Placing Order…" : "Place Order")}</span><span class="btn__fill" data-v-92be7921${_scopeId}></span></button><div class="mt-3 h-5 overflow-hidden" data-v-92be7921${_scopeId}>`);
            if (unref(errorMsg)) {
              _push2(`<p class="text-sm text-error_text_color" data-v-92be7921${_scopeId}>${ssrInterpolate(unref(errorMsg))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-8 mt-6" }, [
                createVNode("h3", { class: "text-base uppercase tracking-widest py-2 -mx-4 px-4 md:-mx-8 md:px-8 bg-text_color text-background_color" }, "Billing")
              ]),
              createVNode("div", { class: "pt-6" }, [
                createVNode("button", {
                  type: "submit",
                  class: ["w-full btn", unref(isSubmitDisabled) ? "btn--disabled" : "btn--primary"],
                  disabled: unref(isSubmitDisabled)
                }, [
                  createVNode("span", { class: "btn__text" }, toDisplayString(unref(submitting) ? "Placing Order…" : "Place Order"), 1),
                  createVNode("span", { class: "btn__fill" })
                ], 10, ["disabled"]),
                createVNode("div", { class: "mt-3 h-5 overflow-hidden" }, [
                  createVNode(Transition, { name: "fade-error" }, {
                    default: withCtx(() => [
                      unref(errorMsg) ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-sm text-error_text_color"
                      }, toDisplayString(unref(errorMsg)), 1)) : createCommentVNode("", true)
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
const checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-92be7921"]]);
export {
  checkout as default
};
//# sourceMappingURL=checkout-DhzvCpHI.js.map
