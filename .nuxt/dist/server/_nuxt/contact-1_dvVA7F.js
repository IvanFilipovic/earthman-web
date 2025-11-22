import { _ as __nuxt_component_0 } from "./AppNavigation-DbbUjllq.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BeJz8Y8C.js";
import { _ as __nuxt_component_0$2 } from "./index-DSJLL3Jq.js";
import { defineComponent, reactive, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, Transition, createBlock, createCommentVNode, openBlock, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Form, Field } from "vee-validate";
import { a as useSeoMeta, _ as _export_sfc } from "../server.mjs";
import "./virtual_public-Dgbfu3-q.js";
import "#internal/nuxt/paths";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const formValues = reactive({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const submitting = ref(false);
    const submitSuccess = ref(false);
    const errorMsg = ref("");
    function nameRule(value) {
      if (!value || !value.trim()) {
        return "Name is required";
      }
      if (value.length < 2) {
        return "Name must be at least 2 characters";
      }
      if (value.length > 100) {
        return "Name must be less than 100 characters";
      }
      return true;
    }
    function emailRule(value) {
      if (!value || !value.trim()) {
        return "Email is required";
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
      return true;
    }
    function subjectRule(value) {
      if (!value || !value.trim()) {
        return "Subject is required";
      }
      if (value.length > 200) {
        return "Subject must be less than 200 characters";
      }
      return true;
    }
    function messageRule(value) {
      if (!value || !value.trim()) {
        return "Message is required";
      }
      if (value.length < 10) {
        return "Message must be at least 10 characters";
      }
      if (value.length > 2e3) {
        return "Message must be less than 2000 characters";
      }
      return true;
    }
    async function handleSubmit() {
      submitSuccess.value = false;
      errorMsg.value = "";
      submitting.value = true;
      try {
        await $fetch("/api/contact", {
          method: "POST",
          body: {
            name: formValues.name,
            email: formValues.email,
            subject: formValues.subject,
            message: formValues.message
          }
        });
        submitSuccess.value = true;
        formValues.name = "";
        formValues.email = "";
        formValues.subject = "";
        formValues.message = "";
        setTimeout(() => {
          submitSuccess.value = false;
        }, 1e4);
        (void 0).scrollTo({ top: 0, behavior: "smooth" });
      } catch (error) {
        console.error("Contact form error:", error);
        errorMsg.value = error?.data?.statusMessage || "Failed to send message. Please try again or contact us at info@earthman.com";
      } finally {
        submitting.value = false;
      }
    }
    useSeoMeta({
      title: "Contact Us - Earthman",
      description: "Get in touch with Earthman. We're here to help with any questions about our products."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      let _temp0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background_color" }, _attrs))} data-v-c0b44062>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="px-4 md:px-8 pt-4" data-v-c0b44062><nav class="flex items-center py-1 text-xs md:text-sm text-text_color uppercase tracking-widest" aria-label="Breadcrumb" data-v-c0b44062>`);
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
      _push(`<span class="pr-2" aria-hidden="true" data-v-c0b44062>/</span><span class="pr-2" aria-current="page" data-v-c0b44062>CONTACT</span></nav></div><div class="mx-auto px-4 md:px-8 py-12" data-v-c0b44062>`);
      if (unref(submitSuccess)) {
        _push(`<div class="mb-8 overflow-hidden" data-v-c0b44062><div class="success-card p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-sm relative" data-v-c0b44062><div class="flex items-start gap-4" data-v-c0b44062><div class="success-icon-wrapper" data-v-c0b44062><div class="success-icon" data-v-c0b44062>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:check",
          class: "w-8 h-8 text-white"
        }, null, _parent));
        _push(`</div><div class="success-circle" data-v-c0b44062></div></div><div class="flex-1" data-v-c0b44062><h3 class="text-xl font-medium text-green-900 uppercase tracking-widest mb-2" data-v-c0b44062> Message Sent Successfully! </h3><p class="text-green-800 mb-3" data-v-c0b44062> Thank you for reaching out. We&#39;ve received your message and will get back to you within 24-48 hours. </p><p class="text-sm text-green-700" data-v-c0b44062> Check your inbox for a confirmation email. </p></div><button class="text-green-600 hover:text-green-800 transition-colors p-1" aria-label="Close" data-v-c0b44062>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:x",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</button></div><div class="success-particles" data-v-c0b44062><!--[-->`);
        ssrRenderList(6, (i) => {
          _push(`<span class="particle" style="${ssrRenderStyle({ "--i": i })}" data-v-c0b44062></span>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(errorMsg)) {
        _push(`<div class="mb-8 p-6 bg-red-50 border border-red-200 rounded-sm" data-v-c0b44062><div class="flex items-start gap-3" data-v-c0b44062>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:alert-circle",
          class: "w-6 h-6 text-red-600 shrink-0 mt-0.5"
        }, null, _parent));
        _push(`<div class="flex-1" data-v-c0b44062><h3 class="text-lg font-medium text-red-900 uppercase tracking-widest mb-2" data-v-c0b44062>Error</h3><p class="text-sm text-red-800" data-v-c0b44062>${ssrInterpolate(unref(errorMsg))}</p></div><button class="text-red-600 hover:text-red-800 transition-colors p-1" aria-label="Close" data-v-c0b44062>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:x",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-12" data-v-c0b44062><div data-v-c0b44062><h1 class="text-3xl md:text-4xl uppercase tracking-widest mb-6" data-v-c0b44062>Get in Touch</h1><p class="text-text_color mb-8 leading-relaxed" data-v-c0b44062> Have a question about our products or need assistance with your order? We&#39;re here to help. Fill out the form and we&#39;ll get back to you as soon as possible. </p><div class="space-y-6" data-v-c0b44062><div class="flex items-start gap-4" data-v-c0b44062><div class="w-12 h-12 flex items-center justify-center bg-text_color/5 border border-text_color/20" data-v-c0b44062>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:mail",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><div data-v-c0b44062><h3 class="text-sm uppercase tracking-widest mb-1" data-v-c0b44062>Email</h3><a href="mailto:info@earthman.com" class="text-text_color hover:text-text_color transition-colors" data-v-c0b44062> info@earthman.com </a></div></div><div class="flex items-start gap-4" data-v-c0b44062><div class="w-12 h-12 flex items-center justify-center bg-text_color/5 border border-text_color/20" data-v-c0b44062>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:clock",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</div><div data-v-c0b44062><h3 class="text-sm uppercase tracking-widest mb-1" data-v-c0b44062>Response Time</h3><p class="text-text_color" data-v-c0b44062> Within 24-48 hours<br data-v-c0b44062><span class="text-xs" data-v-c0b44062>Monday - Friday</span></p></div></div></div></div><div data-v-c0b44062><div class="border border-text_color/30 p-6 md:p-8" data-v-c0b44062><h2 class="text-xl uppercase tracking-widest mb-6" data-v-c0b44062>Send us a Message</h2>`);
      _push(ssrRenderComponent(unref(Form), { onSubmit: handleSubmit }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6" data-v-c0b44062${_scopeId}><div class="flex flex-col md:flex-row w-full md:gap-x-4" data-v-c0b44062${_scopeId}><div class="w-full" data-v-c0b44062${_scopeId}><label for="name" class="block text-xs uppercase tracking-widest mb-2" data-v-c0b44062${_scopeId}> Your Name * </label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "name",
              name: "name",
              type: "text",
              rules: nameRule,
              modelValue: unref(formValues).name,
              "onUpdate:modelValue": ($event) => unref(formValues).name = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    class: ["input", { "border-error_text_color": errorMessage }],
                    maxlength: "100",
                    placeholder: "John Doe",
                    "aria-describedby": "name-error"
                  }))} data-v-c0b44062${_scopeId2}><div id="name-error" class="mt-1 h-4 overflow-hidden" data-v-c0b44062${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-c0b44062${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      class: ["input", { "border-error_text_color": errorMessage }],
                      maxlength: "100",
                      placeholder: "John Doe",
                      "aria-describedby": "name-error"
                    }), null, 16),
                    createVNode("div", {
                      id: "name-error",
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
            _push2(`</div><div class="w-full" data-v-c0b44062${_scopeId}><label for="email" class="block text-xs uppercase tracking-widest mb-2" data-v-c0b44062${_scopeId}> Your Email * </label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "email",
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
                    placeholder: "john@example.com",
                    "aria-describedby": "email-error"
                  }))} data-v-c0b44062${_scopeId2}><div id="email-error" class="mt-1 h-4 overflow-hidden" data-v-c0b44062${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-c0b44062${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      class: ["input", { "border-error_text_color": errorMessage }],
                      placeholder: "john@example.com",
                      "aria-describedby": "email-error"
                    }), null, 16),
                    createVNode("div", {
                      id: "email-error",
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
            _push2(`</div></div><div data-v-c0b44062${_scopeId}><label for="subject" class="block text-xs uppercase tracking-widest mb-2" data-v-c0b44062${_scopeId}> Subject * </label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "subject",
              name: "subject",
              type: "text",
              rules: subjectRule,
              modelValue: unref(formValues).subject,
              "onUpdate:modelValue": ($event) => unref(formValues).subject = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input${ssrRenderAttrs(mergeProps(field, {
                    class: ["input", { "border-error_text_color": errorMessage }],
                    maxlength: "200",
                    placeholder: "Order inquiry",
                    "aria-describedby": "subject-error"
                  }))} data-v-c0b44062${_scopeId2}><div id="subject-error" class="mt-1 h-4 overflow-hidden" data-v-c0b44062${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-c0b44062${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("input", mergeProps(field, {
                      class: ["input", { "border-error_text_color": errorMessage }],
                      maxlength: "200",
                      placeholder: "Order inquiry",
                      "aria-describedby": "subject-error"
                    }), null, 16),
                    createVNode("div", {
                      id: "subject-error",
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
            _push2(`</div><div data-v-c0b44062${_scopeId}><label for="message" class="block text-xs uppercase tracking-widest mb-2" data-v-c0b44062${_scopeId}> Message * </label>`);
            _push2(ssrRenderComponent(unref(Field), {
              id: "message",
              name: "message",
              rules: messageRule,
              modelValue: unref(formValues).message,
              "onUpdate:modelValue": ($event) => unref(formValues).message = $event
            }, {
              default: withCtx(({ field, errorMessage }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<textarea${ssrRenderAttrs(_temp0 = mergeProps(field, {
                    class: ["input min-h-[150px] resize-y", { "border-error_text_color": errorMessage }],
                    maxlength: "2000",
                    placeholder: "Tell us how we can help you...",
                    "aria-describedby": "message-error"
                  }), "textarea")} data-v-c0b44062${_scopeId2}>${ssrInterpolate("value" in _temp0 ? _temp0.value : "")}</textarea><div id="message-error" class="mt-1 h-4 overflow-hidden" data-v-c0b44062${_scopeId2}>`);
                  if (errorMessage) {
                    _push3(`<p class="text-xs text-error_text_color leading-4" data-v-c0b44062${_scopeId2}>${ssrInterpolate(errorMessage)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("textarea", mergeProps(field, {
                      class: ["input min-h-[150px] resize-y", { "border-error_text_color": errorMessage }],
                      maxlength: "2000",
                      placeholder: "Tell us how we can help you...",
                      "aria-describedby": "message-error"
                    }), null, 16),
                    createVNode("div", {
                      id: "message-error",
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
            _push2(`</div><button type="submit" class="${ssrRenderClass([unref(submitting) ? "btn--disabled" : "btn--primary", "w-full btn"])}"${ssrIncludeBooleanAttr(unref(submitting)) ? " disabled" : ""} data-v-c0b44062${_scopeId}><span class="btn__text" data-v-c0b44062${_scopeId}>`);
            if (unref(submitting)) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "lucide:loader-2",
                class: "w-4 h-4 inline-block mr-2 animate-spin"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(` ${ssrInterpolate(unref(submitting) ? "Sending..." : "Send Message")}</span><span class="btn__fill" data-v-c0b44062${_scopeId}></span></button></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "flex flex-col md:flex-row w-full md:gap-x-4" }, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode("label", {
                      for: "name",
                      class: "block text-xs uppercase tracking-widest mb-2"
                    }, " Your Name * "),
                    createVNode(unref(Field), {
                      id: "name",
                      name: "name",
                      type: "text",
                      rules: nameRule,
                      modelValue: unref(formValues).name,
                      "onUpdate:modelValue": ($event) => unref(formValues).name = $event
                    }, {
                      default: withCtx(({ field, errorMessage }) => [
                        createVNode("input", mergeProps(field, {
                          class: ["input", { "border-error_text_color": errorMessage }],
                          maxlength: "100",
                          placeholder: "John Doe",
                          "aria-describedby": "name-error"
                        }), null, 16),
                        createVNode("div", {
                          id: "name-error",
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
                  ]),
                  createVNode("div", { class: "w-full" }, [
                    createVNode("label", {
                      for: "email",
                      class: "block text-xs uppercase tracking-widest mb-2"
                    }, " Your Email * "),
                    createVNode(unref(Field), {
                      id: "email",
                      name: "email",
                      type: "email",
                      rules: emailRule,
                      modelValue: unref(formValues).email,
                      "onUpdate:modelValue": ($event) => unref(formValues).email = $event
                    }, {
                      default: withCtx(({ field, errorMessage }) => [
                        createVNode("input", mergeProps(field, {
                          class: ["input", { "border-error_text_color": errorMessage }],
                          placeholder: "john@example.com",
                          "aria-describedby": "email-error"
                        }), null, 16),
                        createVNode("div", {
                          id: "email-error",
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
                createVNode("div", null, [
                  createVNode("label", {
                    for: "subject",
                    class: "block text-xs uppercase tracking-widest mb-2"
                  }, " Subject * "),
                  createVNode(unref(Field), {
                    id: "subject",
                    name: "subject",
                    type: "text",
                    rules: subjectRule,
                    modelValue: unref(formValues).subject,
                    "onUpdate:modelValue": ($event) => unref(formValues).subject = $event
                  }, {
                    default: withCtx(({ field, errorMessage }) => [
                      createVNode("input", mergeProps(field, {
                        class: ["input", { "border-error_text_color": errorMessage }],
                        maxlength: "200",
                        placeholder: "Order inquiry",
                        "aria-describedby": "subject-error"
                      }), null, 16),
                      createVNode("div", {
                        id: "subject-error",
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
                ]),
                createVNode("div", null, [
                  createVNode("label", {
                    for: "message",
                    class: "block text-xs uppercase tracking-widest mb-2"
                  }, " Message * "),
                  createVNode(unref(Field), {
                    id: "message",
                    name: "message",
                    rules: messageRule,
                    modelValue: unref(formValues).message,
                    "onUpdate:modelValue": ($event) => unref(formValues).message = $event
                  }, {
                    default: withCtx(({ field, errorMessage }) => [
                      createVNode("textarea", mergeProps(field, {
                        class: ["input min-h-[150px] resize-y", { "border-error_text_color": errorMessage }],
                        maxlength: "2000",
                        placeholder: "Tell us how we can help you...",
                        "aria-describedby": "message-error"
                      }), null, 16),
                      createVNode("div", {
                        id: "message-error",
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
                ]),
                createVNode("button", {
                  type: "submit",
                  class: ["w-full btn", unref(submitting) ? "btn--disabled" : "btn--primary"],
                  disabled: unref(submitting)
                }, [
                  createVNode("span", { class: "btn__text" }, [
                    unref(submitting) ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: "lucide:loader-2",
                      class: "w-4 h-4 inline-block mr-2 animate-spin"
                    })) : createCommentVNode("", true),
                    createTextVNode(" " + toDisplayString(unref(submitting) ? "Sending..." : "Send Message"), 1)
                  ]),
                  createVNode("span", { class: "btn__fill" })
                ], 10, ["disabled"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="text-xs text-text_color/60 mt-4 text-center" data-v-c0b44062> * Required fields </p></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c0b44062"]]);
export {
  contact as default
};
//# sourceMappingURL=contact-1_dvVA7F.js.map
