<template>
  <section class="z-50">
    <TransitionRoot
      appear
      :show="isOpen"
      enter="transition-opacity duration-150"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-150"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div v-if="isOpen">
        <div
          class="fixed inset-0 z-40 bg-text_color/10 backdrop-blur-[1px]"
          aria-hidden="true"
        />
      </div>

      <div v-if="isOpen">
        <div role="dialog" aria-modal="true" class="fixed bottom-0 md:bottom-4 md:left-4 z-50 md:p-4">
          <div class="w-full max-w-3xl border border-text_color/10 bg-background_color text-text_color shadow-2xl">
            <div class="flex items-center justify-between p-6">
              <h2 class="text-xl font-semibold">Cookie Settings</h2>
              <button
                class="ml-2 p-1 inline-flex items-center justify-center hover:bg-text_color/10 shrink-0"
                aria-label="Close cookie settings"
                @click="isOpen = false"
              >
                <Icon name="lucide:x" class="w-5 h-5" />
              </button>
            </div>

            <div class="px-6 pb-4 space-y-4 text-sm leading-relaxed">
              <p>
                We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, 
                also for functionality, experience, measurement and marketing (personalized ads) as specified in the
                <NuxtLink to="/cookie-policy" class="underline hover:no-underline">Cookie Policy</NuxtLink>.
              </p>
              <p>You can freely give, refuse, or withdraw your consent at any time.</p>

              <div class="flex flex-col md:flex-row gap-3 pt-2">
                <button
                  disabled
                  class="relative inline-flex h-6 items-center md:px-3 bg-transparent cursor-not-allowed opacity-50"
                  aria-label="Necessary cookies (always enabled)"
                >
                  <Icon name="lucide:check" class="w-4 h-4 mr-2" />
                  <span class="text-sm">Necessary</span>
                </button>

                <Switch v-model="preferences.measurement" as="template" v-slot="{ checked }">
                  <button 
                    class="relative inline-flex h-6 items-center md:px-3"
                    :aria-checked="checked"
                    role="switch"
                    aria-label="Toggle measurement cookies"
                  >
                    <span
                      class="mr-2 inline-flex h-6 w-11 items-center rounded-full transition-colors"
                      :class="checked ? 'bg-text_color' : 'bg-text_color/30'"
                    >
                      <span
                        class="inline-block h-4 w-4 transform rounded-full bg-background_color transition-transform ml-1"
                        :class="checked ? 'translate-x-5' : 'translate-x-0'"
                      />
                    </span>
                    <span class="text-sm">Measurement</span>
                  </button>
                </Switch>

                <Switch v-model="preferences.marketing" as="template" v-slot="{ checked }">
                  <button 
                    class="relative inline-flex h-6 items-center md:px-3"
                    :aria-checked="checked"
                    role="switch"
                    aria-label="Toggle marketing cookies"
                  >
                    <span
                      class="mr-2 inline-flex h-6 w-11 items-center rounded-full transition-colors"
                      :class="checked ? 'bg-text_color' : 'bg-text_color/30'"
                    >
                      <span
                        class="inline-block h-4 w-4 transform rounded-full bg-background_color transition-transform ml-1"
                        :class="checked ? 'translate-x-5' : 'translate-x-0'"
                      />
                    </span>
                    <span class="text-sm">Marketing</span>
                  </button>
                </Switch>
              </div>
            </div>

            <div class="flex flex-col-reverse md:flex-row gap-3 p-6 pt-2">
              <button 
                class="secondary-btn sweep-secondary w-full md:w-fit px-4 py-2" 
                @click="handleRejectAll"
              >
                <span class="relative z-50 text-sm text-text_color">Reject All</span>
                <span class="sweep-overlay" aria-hidden="true"></span>
              </button>

              <button 
                class="secondary-btn sweep-secondary w-full md:w-fit md:ml-auto px-4 py-2" 
                @click="handleAcceptSelected"
              >
                <span class="relative z-50 text-sm text-text_color">Accept Selected</span>
                <span class="sweep-overlay" aria-hidden="true"></span>
              </button>

              <button 
                class="primary-btn sweep group w-full md:w-fit px-4 py-2" 
                @click="handleAcceptAll"
              >
                <span class="relative z-50 text-sm text-background_color">Accept All</span>
                <span class="sweep-overlay" aria-hidden="true"></span>
              </button>
            </div>
          </div>
        </div>
      </div>        
    </TransitionRoot>

    <button
      v-if="!isOpen"
      type="button"
      @click="isOpen = true"
      aria-label="Manage cookie preferences"
      title="Manage cookies"
      class="fixed bottom-6 left-6 z-30 rounded-full border border-text_color/30 bg-background_color 
             hover:bg-text_color hover:border-background_color/30 text-text_color hover:text-background_color
             shadow-md hover:shadow-lg p-2 transition-all duration-200 flex items-center"
    >
      <Icon name="lucide:cookie" class="w-6 h-6" />
    </button>
  </section>
</template>

<script setup lang="ts">
import { Switch, TransitionRoot } from '@headlessui/vue'

interface CookiePreferences {
  measurement: boolean
  marketing: boolean
}

interface GtagConsentParams {
  analytics_storage: 'granted' | 'denied'
  ad_storage: 'granted' | 'denied'
  ad_user_data: 'granted' | 'denied'
  ad_personalization: 'granted' | 'denied'
}

const COOKIE_MAX_AGE_DAYS = 180
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * COOKIE_MAX_AGE_DAYS

const { gtag, initialize } = useGtag()

const cookiePrefs = useCookie<CookiePreferences | null>('cookie_prefs', {
  sameSite: 'lax',
  secure: true,
  path: '/',
  maxAge: COOKIE_MAX_AGE_SECONDS,
  default: () => null,
})

const isOpen = ref<boolean>(cookiePrefs.value === null)
const hasInitialized = ref<boolean>(false)

const preferences = reactive<CookiePreferences>({
  measurement: cookiePrefs.value?.measurement ?? false,
  marketing: cookiePrefs.value?.marketing ?? false,
})

function savePreferences(): void {
  cookiePrefs.value = {
    measurement: preferences.measurement,
    marketing: preferences.marketing,
  }
}

function updateGtagConsent(): void {
  const consentParams: GtagConsentParams = {
    analytics_storage: preferences.measurement ? 'granted' : 'denied',
    ad_storage: preferences.marketing ? 'granted' : 'denied',
    ad_user_data: preferences.marketing ? 'granted' : 'denied',
    ad_personalization: preferences.marketing ? 'granted' : 'denied',
  }

  gtag?.('consent', 'update', consentParams)
}

function initializeGtagIfNeeded(): void {
  const shouldInitialize = preferences.measurement || preferences.marketing
  
  if (!hasInitialized.value && shouldInitialize) {
    initialize()
    hasInitialized.value = true
  }
}

function handleAcceptAll(): void {
  preferences.measurement = true
  preferences.marketing = true
  savePreferences()
  updateGtagConsent()
  initializeGtagIfNeeded()
  isOpen.value = false
}

function handleAcceptSelected(): void {
  savePreferences()
  updateGtagConsent()
  initializeGtagIfNeeded()
  isOpen.value = false
}

function handleRejectAll(): void {
  preferences.measurement = false
  preferences.marketing = false
  savePreferences()
  updateGtagConsent()
  isOpen.value = false
}

onMounted(() => {
  if (cookiePrefs.value) {
    updateGtagConsent()
    initializeGtagIfNeeded()
    isOpen.value = false
  }
})
</script>