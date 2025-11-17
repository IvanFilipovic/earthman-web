import { _ as __nuxt_component_0 } from "./AppNavigation-lCU69XCi.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BeJz8Y8C.js";
import { _ as __nuxt_component_0$2 } from "./index-DSJLL3Jq.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
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
  __name: "privacy-policy",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    useSeoMeta({
      title: "Privacy Policy - Earthman",
      description: "Learn how Earthman collects, uses, and protects your personal information."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background_color" }, _attrs))} data-v-0457e4aa>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="px-4 md:px-8 pt-4" data-v-0457e4aa><nav class="flex items-center py-1 text-xs md:text-sm text-text_color uppercase tracking-widest" aria-label="Breadcrumb" data-v-0457e4aa>`);
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
      _push(`<span class="pr-2" aria-hidden="true" data-v-0457e4aa>/</span><span class="pr-2" aria-current="page" data-v-0457e4aa>PRIVACY POLICY</span></nav></div><div class="max-w-7xl mx-auto px-4 md:px-8 py-12" data-v-0457e4aa><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "text-center mb-16 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0s" })}" data-v-0457e4aa><h1 class="text-3xl md:text-5xl uppercase tracking-widest mb-4" data-v-0457e4aa> Privacy Policy </h1><p class="text-text_color/70 text-sm" data-v-0457e4aa> Last updated: November 16, 2025 </p></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-12 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}" data-v-0457e4aa><div class="prose prose-lg max-w-none text-text_color/90 leading-relaxed" data-v-0457e4aa><p class="text-lg mb-6" data-v-0457e4aa> At Earthman, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase from our online store. </p><p data-v-0457e4aa> By using our website, you consent to the data practices described in this policy. </p></div></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-12 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.15s" })}" data-v-0457e4aa><div class="border-b-3 border-text_color pb-4 mb-6" data-v-0457e4aa><h2 class="text-2xl md:text-3xl uppercase tracking-widest" data-v-0457e4aa> 1. Information We Collect </h2></div><div class="space-y-6 text-text_color/90 leading-relaxed" data-v-0457e4aa><div data-v-0457e4aa><h3 class="text-xl font-medium mb-3" data-v-0457e4aa>1.1 Personal Information</h3><p class="mb-3" data-v-0457e4aa> When you place an order or create an account, we collect: </p><ul class="list-disc pl-6 space-y-2" data-v-0457e4aa><li data-v-0457e4aa>Name and contact information (email address, phone number)</li><li data-v-0457e4aa>Billing and shipping addresses</li><li data-v-0457e4aa>Payment information (processed securely by our payment providers)</li><li data-v-0457e4aa>Order history and preferences</li></ul></div><div data-v-0457e4aa><h3 class="text-xl font-medium mb-3" data-v-0457e4aa>1.2 Automatically Collected Information</h3><p class="mb-3" data-v-0457e4aa> When you visit our website, we automatically collect: </p><ul class="list-disc pl-6 space-y-2" data-v-0457e4aa><li data-v-0457e4aa>IP address and browser type</li><li data-v-0457e4aa>Device information and operating system</li><li data-v-0457e4aa>Pages visited and time spent on our website</li><li data-v-0457e4aa>Referring website or application</li><li data-v-0457e4aa>Clickstream data and browsing behavior</li></ul></div><div data-v-0457e4aa><h3 class="text-xl font-medium mb-3" data-v-0457e4aa>1.3 Cookies and Tracking Technologies</h3><p data-v-0457e4aa> We use cookies and similar tracking technologies to track activity on our website and hold certain information. For more details, please see our `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cookie-policy",
        class: "underline hover:no-underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cookie Policy`);
          } else {
            return [
              createTextVNode("Cookie Policy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </p></div></div></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-12 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}" data-v-0457e4aa><div class="border-b-3 border-text_color pb-4 mb-6" data-v-0457e4aa><h2 class="text-2xl md:text-3xl uppercase tracking-widest" data-v-0457e4aa> 2. How We Use Your Information </h2></div><div class="space-y-4 text-text_color/90 leading-relaxed" data-v-0457e4aa><p data-v-0457e4aa>We use the information we collect to:</p><ul class="list-disc pl-6 space-y-2" data-v-0457e4aa><li data-v-0457e4aa>Process and fulfill your orders</li><li data-v-0457e4aa>Send order confirmations and shipping notifications</li><li data-v-0457e4aa>Provide customer support and respond to your inquiries</li><li data-v-0457e4aa>Improve our website and customer experience</li><li data-v-0457e4aa>Send marketing communications (with your consent)</li><li data-v-0457e4aa>Detect and prevent fraud or security issues</li><li data-v-0457e4aa>Comply with legal obligations</li><li data-v-0457e4aa>Analyze website usage and performance</li></ul></div></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-12 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.25s" })}" data-v-0457e4aa><div class="border-b-3 border-text_color pb-4 mb-6" data-v-0457e4aa><h2 class="text-2xl md:text-3xl uppercase tracking-widest" data-v-0457e4aa> 3. Legal Basis for Processing (GDPR) </h2></div><div class="space-y-4 text-text_color/90 leading-relaxed" data-v-0457e4aa><p data-v-0457e4aa>If you are from the European Economic Area (EEA), our legal basis for collecting and using personal information depends on the data and the context:</p><ul class="list-disc pl-6 space-y-2" data-v-0457e4aa><li data-v-0457e4aa><strong data-v-0457e4aa>Contract Performance:</strong> To fulfill our contract with you (processing orders)</li><li data-v-0457e4aa><strong data-v-0457e4aa>Legitimate Interests:</strong> To improve our services and prevent fraud</li><li data-v-0457e4aa><strong data-v-0457e4aa>Consent:</strong> For marketing communications (you can withdraw at any time)</li><li data-v-0457e4aa><strong data-v-0457e4aa>Legal Obligation:</strong> To comply with applicable laws</li></ul></div></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-12 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}" data-v-0457e4aa><div class="border-b-3 border-text_color pb-4 mb-6" data-v-0457e4aa><h2 class="text-2xl md:text-3xl uppercase tracking-widest" data-v-0457e4aa> 4. Sharing Your Information </h2></div><div class="space-y-6 text-text_color/90 leading-relaxed" data-v-0457e4aa><p data-v-0457e4aa>We may share your information with:</p><div class="bg-text_color/5 border-l-4 border-text_color p-6" data-v-0457e4aa><h3 class="font-medium mb-2" data-v-0457e4aa>Service Providers</h3><p class="text-sm" data-v-0457e4aa> Third-party companies that help us operate our business (payment processors, shipping companies, email service providers, analytics providers). These providers are contractually obligated to protect your information. </p></div><div class="bg-text_color/5 border-l-4 border-text_color p-6" data-v-0457e4aa><h3 class="font-medium mb-2" data-v-0457e4aa>Payment Processors</h3><p class="text-sm" data-v-0457e4aa> We use Stripe and PayPal to process payments. Your payment information is transmitted directly to these providers and is not stored on our servers. </p></div><div class="bg-text_color/5 border-l-4 border-text_color p-6" data-v-0457e4aa><h3 class="font-medium mb-2" data-v-0457e4aa>Legal Requirements</h3><p class="text-sm" data-v-0457e4aa> When required by law, to protect our rights, or in response to legal processes. </p></div><p class="text-sm text-text_color/70" data-v-0457e4aa> We do not sell or rent your personal information to third parties for marketing purposes. </p></div></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-12 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.35s" })}" data-v-0457e4aa><div class="border-b-3 border-text_color pb-4 mb-6" data-v-0457e4aa><h2 class="text-2xl md:text-3xl uppercase tracking-widest" data-v-0457e4aa> 5. Your Privacy Rights </h2></div><div class="space-y-6 text-text_color/90 leading-relaxed" data-v-0457e4aa><p data-v-0457e4aa>Depending on your location, you may have the following rights:</p><div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-v-0457e4aa><div class="bg-white border border-text_color/20 p-4" data-v-0457e4aa><h4 class="font-medium mb-2 flex items-center gap-2" data-v-0457e4aa>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:eye",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` Right to Access </h4><p class="text-sm" data-v-0457e4aa>Request a copy of your personal data we hold</p></div><div class="bg-white border border-text_color/20 p-4" data-v-0457e4aa><h4 class="font-medium mb-2 flex items-center gap-2" data-v-0457e4aa>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:edit",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` Right to Rectification </h4><p class="text-sm" data-v-0457e4aa>Request correction of inaccurate data</p></div><div class="bg-white border border-text_color/20 p-4" data-v-0457e4aa><h4 class="font-medium mb-2 flex items-center gap-2" data-v-0457e4aa>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:trash-2",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` Right to Erasure </h4><p class="text-sm" data-v-0457e4aa>Request deletion of your personal data</p></div><div class="bg-white border border-text_color/20 p-4" data-v-0457e4aa><h4 class="font-medium mb-2 flex items-center gap-2" data-v-0457e4aa>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:ban",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` Right to Object </h4><p class="text-sm" data-v-0457e4aa>Object to certain processing activities</p></div><div class="bg-white border border-text_color/20 p-4" data-v-0457e4aa><h4 class="font-medium mb-2 flex items-center gap-2" data-v-0457e4aa>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:download",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` Right to Portability </h4><p class="text-sm" data-v-0457e4aa>Receive your data in a portable format</p></div><div class="bg-white border border-text_color/20 p-4" data-v-0457e4aa><h4 class="font-medium mb-2 flex items-center gap-2" data-v-0457e4aa>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:shield-off",
        class: "w-4 h-4"
      }, null, _parent));
      _push(` Right to Withdraw Consent </h4><p class="text-sm" data-v-0457e4aa>Withdraw consent for marketing at any time</p></div></div><p class="text-sm" data-v-0457e4aa> To exercise these rights, please contact us at <a href="mailto:privacy@earthman.com" class="underline" data-v-0457e4aa>privacy@earthman.com</a>. </p></div></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-12 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.4s" })}" data-v-0457e4aa><div class="border-b-3 border-text_color pb-4 mb-6" data-v-0457e4aa><h2 class="text-2xl md:text-3xl uppercase tracking-widest" data-v-0457e4aa> 6. Data Security </h2></div><div class="space-y-4 text-text_color/90 leading-relaxed" data-v-0457e4aa><p data-v-0457e4aa> We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These include: </p><ul class="list-disc pl-6 space-y-2" data-v-0457e4aa><li data-v-0457e4aa>SSL/TLS encryption for data transmission</li><li data-v-0457e4aa>Secure storage of personal data</li><li data-v-0457e4aa>Regular security assessments</li><li data-v-0457e4aa>Limited access to personal data by authorized personnel only</li><li data-v-0457e4aa>Secure payment processing through certified providers</li></ul><div class="bg-yellow-50 border border-yellow-200 p-6" data-v-0457e4aa><div class="flex items-start gap-3" data-v-0457e4aa>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:alert-triangle",
        class: "w-5 h-5 text-yellow-600 shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<p class="text-sm text-yellow-900" data-v-0457e4aa> While we strive to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security. </p></div></div></div></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-12 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.45s" })}" data-v-0457e4aa><div class="border-b-3 border-text_color pb-4 mb-6" data-v-0457e4aa><h2 class="text-2xl md:text-3xl uppercase tracking-widest" data-v-0457e4aa> 7. Data Retention </h2></div><div class="space-y-4 text-text_color/90 leading-relaxed" data-v-0457e4aa><p data-v-0457e4aa> We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. </p><ul class="list-disc pl-6 space-y-2" data-v-0457e4aa><li data-v-0457e4aa><strong data-v-0457e4aa>Account Information:</strong> Until you request deletion or close your account</li><li data-v-0457e4aa><strong data-v-0457e4aa>Order History:</strong> 7 years for tax and accounting purposes</li><li data-v-0457e4aa><strong data-v-0457e4aa>Marketing Data:</strong> Until you unsubscribe or request deletion</li><li data-v-0457e4aa><strong data-v-0457e4aa>Website Analytics:</strong> 26 months (Google Analytics default)</li></ul></div></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-12 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.5s" })}" data-v-0457e4aa><div class="border-b-3 border-text_color pb-4 mb-6" data-v-0457e4aa><h2 class="text-2xl md:text-3xl uppercase tracking-widest" data-v-0457e4aa> 8. International Data Transfers </h2></div><div class="space-y-4 text-text_color/90 leading-relaxed" data-v-0457e4aa><p data-v-0457e4aa> Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country. </p><p data-v-0457e4aa> When we transfer personal data outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission. </p></div></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-12 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.55s" })}" data-v-0457e4aa><div class="border-b-3 border-text_color pb-4 mb-6" data-v-0457e4aa><h2 class="text-2xl md:text-3xl uppercase tracking-widest" data-v-0457e4aa> 9. Children&#39;s Privacy </h2></div><div class="space-y-4 text-text_color/90 leading-relaxed" data-v-0457e4aa><p data-v-0457e4aa> Our website is not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us. </p></div></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-12 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.6s" })}" data-v-0457e4aa><div class="border-b-3 border-text_color pb-4 mb-6" data-v-0457e4aa><h2 class="text-2xl md:text-3xl uppercase tracking-widest" data-v-0457e4aa> 10. Third-Party Links </h2></div><div class="space-y-4 text-text_color/90 leading-relaxed" data-v-0457e4aa><p data-v-0457e4aa> Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party websites you visit. </p></div></div><div class="${ssrRenderClass([{ "is-visible": unref(isVisible) }, "mb-12 animate-fade-in-up"])}" style="${ssrRenderStyle({ "animation-delay": "0.65s" })}" data-v-0457e4aa><div class="border-b-3 border-text_color pb-4 mb-6" data-v-0457e4aa><h2 class="text-2xl md:text-3xl uppercase tracking-widest" data-v-0457e4aa> 11. Changes to This Policy </h2></div><div class="space-y-4 text-text_color/90 leading-relaxed" data-v-0457e4aa><p data-v-0457e4aa> We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. </p><p data-v-0457e4aa> We encourage you to review this Privacy Policy periodically for any changes. </p></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy-policy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacyPolicy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0457e4aa"]]);
export {
  privacyPolicy as default
};
//# sourceMappingURL=privacy-policy-C3fAL8bk.js.map
