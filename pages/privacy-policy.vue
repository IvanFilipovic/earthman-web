<!-- pages/privacy-policy.vue -->
<script setup lang="ts">
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

useSeoMeta({
  title: 'Privacy Policy - Earthman',
  description: 'Learn how Earthman collects, uses, and protects your personal information.',
})
</script>

<template>
  <section class="min-h-screen bg-background_color">
    <AppNavigation :dark="false" />

    <!-- Breadcrumb -->
    <div class="px-4 md:px-8 pt-4">
      <nav class="flex items-center py-1 text-xs md:text-sm text-text_color uppercase tracking-widest" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:underline pr-2">HOME</NuxtLink>
        <span class="pr-2" aria-hidden="true">/</span>
        <span class="pr-2" aria-current="page">PRIVACY POLICY</span>
      </nav>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <!-- Header -->
      <div 
        class="text-center mb-16 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0s"
      >
        <h1 class="text-3xl md:text-5xl uppercase tracking-widest mb-4">
          Privacy Policy
        </h1>
        <p class="text-text_color/70 text-sm">
          Last updated: November 16, 2025
        </p>
      </div>

      <!-- Introduction -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.1s"
      >
        <div class="prose prose-lg max-w-none text-text_color/90 leading-relaxed">
          <p class="text-lg mb-6">
            At Earthman, we are committed to protecting your privacy and ensuring the security of your 
            personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
            your information when you visit our website or make a purchase from our online store.
          </p>
          <p>
            By using our website, you consent to the data practices described in this policy.
          </p>
        </div>
      </div>

      <!-- Information We Collect -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.15s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            1. Information We Collect
          </h2>
        </div>
        <div class="space-y-6 text-text_color/90 leading-relaxed">
          <div>
            <h3 class="text-xl font-medium mb-3">1.1 Personal Information</h3>
            <p class="mb-3">
              When you place an order or create an account, we collect:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely by our payment providers)</li>
              <li>Order history and preferences</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-medium mb-3">1.2 Automatically Collected Information</h3>
            <p class="mb-3">
              When you visit our website, we automatically collect:
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website or application</li>
              <li>Clickstream data and browsing behavior</li>
            </ul>
          </div>

          <div>
            <h3 class="text-xl font-medium mb-3">1.3 Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold 
              certain information. For more details, please see our 
              <NuxtLink to="/cookie-policy" class="underline hover:no-underline">Cookie Policy</NuxtLink>.
            </p>
          </div>
        </div>
      </div>

      <!-- How We Use Your Information -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.2s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            2. How We Use Your Information
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>We use the information we collect to:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping notifications</li>
            <li>Provide customer support and respond to your inquiries</li>
            <li>Improve our website and customer experience</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Detect and prevent fraud or security issues</li>
            <li>Comply with legal obligations</li>
            <li>Analyze website usage and performance</li>
          </ul>
        </div>
      </div>

      <!-- Legal Basis for Processing -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.25s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            3. Legal Basis for Processing (GDPR)
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>If you are from the European Economic Area (EEA), our legal basis for collecting and using personal information depends on the data and the context:</p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Contract Performance:</strong> To fulfill our contract with you (processing orders)</li>
            <li><strong>Legitimate Interests:</strong> To improve our services and prevent fraud</li>
            <li><strong>Consent:</strong> For marketing communications (you can withdraw at any time)</li>
            <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
          </ul>
        </div>
      </div>

      <!-- Sharing Your Information -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.3s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            4. Sharing Your Information
          </h2>
        </div>
        <div class="space-y-6 text-text_color/90 leading-relaxed">
          <p>We may share your information with:</p>
          
          <div class="bg-text_color/5 border-l-4 border-text_color p-6">
            <h3 class="font-medium mb-2">Service Providers</h3>
            <p class="text-sm">
              Third-party companies that help us operate our business (payment processors, shipping 
              companies, email service providers, analytics providers). These providers are contractually 
              obligated to protect your information.
            </p>
          </div>

          <div class="bg-text_color/5 border-l-4 border-text_color p-6">
            <h3 class="font-medium mb-2">Payment Processors</h3>
            <p class="text-sm">
              We use Stripe and PayPal to process payments. Your payment information is transmitted 
              directly to these providers and is not stored on our servers.
            </p>
          </div>

          <div class="bg-text_color/5 border-l-4 border-text_color p-6">
            <h3 class="font-medium mb-2">Legal Requirements</h3>
            <p class="text-sm">
              When required by law, to protect our rights, or in response to legal processes.
            </p>
          </div>

          <p class="text-sm text-text_color/70">
            We do not sell or rent your personal information to third parties for marketing purposes.
          </p>
        </div>
      </div>

      <!-- Your Rights -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.35s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            5. Your Privacy Rights
          </h2>
        </div>
        <div class="space-y-6 text-text_color/90 leading-relaxed">
          <p>Depending on your location, you may have the following rights:</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white border border-text_color/20 p-4">
              <h4 class="font-medium mb-2 flex items-center gap-2">
                <Icon name="lucide:eye" class="w-4 h-4" />
                Right to Access
              </h4>
              <p class="text-sm">Request a copy of your personal data we hold</p>
            </div>

            <div class="bg-white border border-text_color/20 p-4">
              <h4 class="font-medium mb-2 flex items-center gap-2">
                <Icon name="lucide:edit" class="w-4 h-4" />
                Right to Rectification
              </h4>
              <p class="text-sm">Request correction of inaccurate data</p>
            </div>

            <div class="bg-white border border-text_color/20 p-4">
              <h4 class="font-medium mb-2 flex items-center gap-2">
                <Icon name="lucide:trash-2" class="w-4 h-4" />
                Right to Erasure
              </h4>
              <p class="text-sm">Request deletion of your personal data</p>
            </div>

            <div class="bg-white border border-text_color/20 p-4">
              <h4 class="font-medium mb-2 flex items-center gap-2">
                <Icon name="lucide:ban" class="w-4 h-4" />
                Right to Object
              </h4>
              <p class="text-sm">Object to certain processing activities</p>
            </div>

            <div class="bg-white border border-text_color/20 p-4">
              <h4 class="font-medium mb-2 flex items-center gap-2">
                <Icon name="lucide:download" class="w-4 h-4" />
                Right to Portability
              </h4>
              <p class="text-sm">Receive your data in a portable format</p>
            </div>

            <div class="bg-white border border-text_color/20 p-4">
              <h4 class="font-medium mb-2 flex items-center gap-2">
                <Icon name="lucide:shield-off" class="w-4 h-4" />
                Right to Withdraw Consent
              </h4>
              <p class="text-sm">Withdraw consent for marketing at any time</p>
            </div>
          </div>

          <p class="text-sm">
            To exercise these rights, please contact us at 
            <a href="mailto:privacy@earthman.com" class="underline">privacy@earthman.com</a>.
          </p>
        </div>
      </div>

      <!-- Data Security -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.4s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            6. Data Security
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            We implement appropriate technical and organizational security measures to protect your 
            personal information from unauthorized access, alteration, disclosure, or destruction. These include:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li>SSL/TLS encryption for data transmission</li>
            <li>Secure storage of personal data</li>
            <li>Regular security assessments</li>
            <li>Limited access to personal data by authorized personnel only</li>
            <li>Secure payment processing through certified providers</li>
          </ul>
          <div class="bg-yellow-50 border border-yellow-200 p-6">
            <div class="flex items-start gap-3">
              <Icon name="lucide:alert-triangle" class="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
              <p class="text-sm text-yellow-900">
                While we strive to protect your personal information, no method of transmission over the 
                internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Data Retention -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.45s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            7. Data Retention
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes 
            outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Account Information:</strong> Until you request deletion or close your account</li>
            <li><strong>Order History:</strong> 7 years for tax and accounting purposes</li>
            <li><strong>Marketing Data:</strong> Until you unsubscribe or request deletion</li>
            <li><strong>Website Analytics:</strong> 26 months (Google Analytics default)</li>
          </ul>
        </div>
      </div>

      <!-- International Transfers -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.5s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            8. International Data Transfers
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            Your information may be transferred to and processed in countries other than your country of 
            residence. These countries may have different data protection laws than your country.
          </p>
          <p>
            When we transfer personal data outside the EEA, we ensure appropriate safeguards are in place, 
            such as Standard Contractual Clauses approved by the European Commission.
          </p>
        </div>
      </div>

      <!-- Children's Privacy -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.55s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            9. Children's Privacy
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            Our website is not intended for children under 16 years of age. We do not knowingly collect 
            personal information from children under 16. If you are a parent or guardian and believe your 
            child has provided us with personal information, please contact us.
          </p>
        </div>
      </div>

      <!-- Third-Party Links -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.6s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            10. Third-Party Links
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy 
            practices or content of these external sites. We encourage you to read the privacy policies of 
            any third-party websites you visit.
          </p>
        </div>
      </div>

      <!-- Changes to Policy -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.65s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            11. Changes to This Policy
          </h2>
        </div>
        <div class="space-y-4 text-text_color/90 leading-relaxed">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for 
            legal, regulatory, or operational reasons. We will notify you of any material changes by posting 
            the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          <p>
            We encourage you to review this Privacy Policy periodically for any changes.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-fade-in-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.border-b-3 {
  border-bottom-width: 3px;
}
</style>