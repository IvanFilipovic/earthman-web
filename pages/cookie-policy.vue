<!-- pages/cookie-policy.vue -->
<script setup lang="ts">
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

useSeoMeta({
  title: 'Cookie Policy - Earthman',
  description: 'Learn about how Earthman uses cookies and similar technologies on our website.',
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
        <span class="pr-2" aria-current="page">COOKIE POLICY</span>
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
          Cookie Policy
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
        <div class="prose prose-lg max-w-none text-text_color leading-relaxed">
          <p class="text-lg mb-6">
            This Cookie Policy explains how Earthman ("we", "us", or "our") uses cookies and similar 
            technologies to recognize you when you visit our website. It explains what these technologies 
            are and why we use them, as well as your rights to control our use of them.
          </p>
        </div>
      </div>

      <!-- What Are Cookies -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.15s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            What Are Cookies?
          </h2>
        </div>
        <div class="space-y-4 text-text_color leading-relaxed">
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit 
            a website. Cookies are widely used by website owners in order to make their websites work, or 
            to work more efficiently, as well as to provide reporting information.
          </p>
          <p>
            Cookies set by the website owner (in this case, Earthman) are called "first-party cookies." 
            Cookies set by parties other than the website owner are called "third-party cookies." 
            Third-party cookies enable third-party features or functionality to be provided on or through 
            the website (e.g., advertising, interactive content, and analytics).
          </p>
        </div>
      </div>

      <!-- Why We Use Cookies -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.2s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            Why We Use Cookies
          </h2>
        </div>
        <div class="space-y-6 text-text_color leading-relaxed">
          <p>
            We use first-party and third-party cookies for several reasons. Some cookies are required for 
            technical reasons in order for our website to operate, and we refer to these as "essential" or 
            "strictly necessary" cookies. Other cookies enable us to track and target the interests of our 
            users to enhance the experience on our website.
          </p>
        </div>
      </div>

      <!-- Types of Cookies -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.25s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            Types of Cookies We Use
          </h2>
        </div>
        <div class="space-y-8">
          <!-- Essential Cookies -->
          <div class="bg-text_color/5 border-l-4 border-text_color p-6">
            <h3 class="text-xl uppercase tracking-wider mb-3 font-medium">
              Essential Website Cookies
            </h3>
            <p class="text-text_color leading-relaxed mb-4">
              These cookies are strictly necessary to provide you with services available through our 
              website and to use some of its features, such as access to secure areas.
            </p>
            <div class="text-sm text-text_color/80">
              <p class="mb-2"><strong>Examples:</strong></p>
              <ul class="list-disc pl-6 space-y-1">
                <li>Shopping cart functionality</li>
                <li>User authentication and security</li>
                <li>Session management</li>
              </ul>
            </div>
          </div>

          <!-- Performance Cookies -->
          <div class="bg-text_color/5 border-l-4 border-text_color p-6">
            <h3 class="text-xl uppercase tracking-wider mb-3 font-medium">
              Performance and Analytics Cookies
            </h3>
            <p class="text-text_color leading-relaxed mb-4">
              These cookies are used to collect information about traffic to our website and how users 
              use our website. The information gathered may include the number of visitors to the website, 
              the websites that referred them, the pages they visited, the time of day they visited, and 
              other similar information.
            </p>
            <div class="text-sm text-text_color/80">
              <p class="mb-2"><strong>Purpose:</strong></p>
              <ul class="list-disc pl-6 space-y-1">
                <li>Monitor site performance</li>
                <li>Understand user behavior</li>
                <li>Improve user experience</li>
              </ul>
            </div>
          </div>

          <!-- Functionality Cookies -->
          <div class="bg-text_color/5 border-l-4 border-text_color p-6">
            <h3 class="text-xl uppercase tracking-wider mb-3 font-medium">
              Functionality Cookies
            </h3>
            <p class="text-text_color leading-relaxed mb-4">
              These cookies are used to recognize you when you return to our website. This enables us to 
              personalize our content for you, greet you by name, and remember your preferences.
            </p>
            <div class="text-sm text-text_color/80">
              <p class="mb-2"><strong>Examples:</strong></p>
              <ul class="list-disc pl-6 space-y-1">
                <li>Language preferences</li>
                <li>Region or country selection</li>
                <li>Previously viewed products</li>
              </ul>
            </div>
          </div>

          <!-- Targeting Cookies -->
          <div class="bg-text_color/5 border-l-4 border-text_color p-6">
            <h3 class="text-xl uppercase tracking-wider mb-3 font-medium">
              Targeting and Advertising Cookies
            </h3>
            <p class="text-text_color leading-relaxed mb-4">
              These cookies record your visit to our website, the pages you have visited, and the links 
              you have followed. We will use this information to make our website and the advertising 
              displayed on it more relevant to your interests.
            </p>
            <div class="text-sm text-text_color/80">
              <p class="mb-2"><strong>Purpose:</strong></p>
              <ul class="list-disc pl-6 space-y-1">
                <li>Display relevant advertisements</li>
                <li>Measure advertising effectiveness</li>
                <li>Limit the number of times you see an ad</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- How to Control Cookies -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.3s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            How to Control Cookies
          </h2>
        </div>
        <div class="space-y-6 text-text_color leading-relaxed">
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie 
            preferences by clicking on the appropriate opt-out links provided in the cookie banner that 
            appears when you first visit our website.
          </p>
          <p>
            You can also set or amend your web browser controls to accept or refuse cookies. If you choose 
            to reject cookies, you may still use our website though your access to some functionality and 
            areas of our website may be restricted.
          </p>
          <div class="bg-blue-50 border border-blue-200 p-6">
            <div class="flex items-start gap-3">
              <Icon name="lucide:info" class="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div class="text-sm text-blue-900">
                <p class="font-medium mb-2">Browser Settings:</p>
                <p class="text-blue-800">
                  The specific types of first- and third-party cookies served through our website and the 
                  purposes they perform are described below. However, please note that the specific cookies 
                  served may vary depending on the specific pages you visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Third-Party Services -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.35s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            Third-Party Services
          </h2>
        </div>
        <div class="space-y-4 text-text_color leading-relaxed">
          <p>
            We may use the following third-party services that use cookies:
          </p>
          <ul class="list-disc pl-6 space-y-2">
            <li><strong>Google Analytics:</strong> To understand how visitors interact with our website</li>
            <li><strong>Stripe:</strong> For secure payment processing</li>
            <li><strong>Social Media Platforms:</strong> To enable social sharing features</li>
          </ul>
          <p class="text-sm text-text_color/70 mt-4">
            These third-party services have their own privacy policies addressing how they use such information.
          </p>
        </div>
      </div>

      <!-- Updates to Policy -->
      <div 
        class="mb-12 animate-fade-in-up"
        :class="{ 'is-visible': isVisible }"
        style="animation-delay: 0.4s"
      >
        <div class="border-b-3 border-text_color pb-4 mb-6">
          <h2 class="text-2xl md:text-3xl uppercase tracking-widest">
            Updates to This Policy
          </h2>
        </div>
        <div class="space-y-4 text-text_color leading-relaxed">
          <p>
            We may update this Cookie Policy from time to time in order to reflect changes to the cookies 
            we use or for other operational, legal, or regulatory reasons. Please therefore revisit this 
            Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>
          <p>
            The date at the top of this Cookie Policy indicates when it was last updated.
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