<template>
    <section>
        <TransitionRoot
            appear
            :show="opend"
            enter="transition-opacity duration-150"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-150"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
            <div v-if="opend">
            <div
            class="fixed inset-0 z-40 bg-text_color/10 backdrop-blur-[1px]"
            aria-hidden="true"
            />
            </div>

            <!-- Modal -->
            <div v-if="opend">
                <div role="dialog" aria-modal="true" class="fixed bottom-0 md:bottom-4 md:left-4 z-50 md:p-4">
                <div class="w-full max-w-3xl border border-text_color/10 bg-background_color text-text_color shadow-2xl">
                    <!-- Header -->
                    <div class="flex items-center justify-between p-6">
                    <h2 class="text-xl font-semibold">Information</h2>
                    <button
                        class="hover:bg-text_color/10 rounded p-1"
                        aria-label="Close"
                        @click="rejectAll"
                    >
                        <Icon name="lucide:x" class="w-5 h-5 my-auto" />
                    </button>
                    </div>

                    <!-- Body -->
                    <div class="px-6 pb-4 space-y-4 text-sm leading-relaxed">
                        <p>
                            We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, also for functionality, experience, measurement and marketing (personalized ads) as specified in the
                            <NuxtLink to="/cookie-policy" class="underline">Cookie Policy</NuxtLink>.
                        </p>
                        <p>You can freely give, refuse, or withdraw your consent at any time.</p>

                        <div class="flex flex-col md:flex-row gap-3 pt-2">
                            <!-- Necessary (locked) -->
                            <button
                                disabled
                                class="relative inline-flex h-6 items-center md:px-3 bg-transparent"
                            >
                                <Icon name="lucide:check" class="w-4 h-4 mr-2" />
                                <span class="text-sm">Necessary</span>
                            </button>
                            <Switch v-model="measurement" as="template" v-slot="{ checked }">
                                <button class="relative inline-flex h-6 items-center md:px-3">
                                <span
                                    class="mr-2 inline-flex h-6 w-11 items-center rounded-full"
                                    :class="checked ? 'bg-text_color' : 'bg-text_color/30'"
                                >
                                    <span
                                    class="inline-block h-4 w-4 transform rounded-full bg-background_color transition ml-1"
                                    :class="checked ? 'translate-x-5' : 'translate-x-0'"
                                    />
                                </span>
                                <span class="text-sm">Measurement</span>
                                </button>
                            </Switch>

                            <!-- Marketing -->
                            <Switch v-model="marketing" as="template" v-slot="{ checked }">
                                <button class="relative inline-flex h-6 items-center md:px-3">
                                <span
                                    class="mr-2 inline-flex h-6 w-11 items-center rounded-full"
                                    :class="checked ? 'bg-text_color' : 'bg-text_color/30'"
                                >
                                    <span
                                    class="inline-block h-4 w-4 transform rounded-full bg-background_color transition ml-1"
                                    :class="checked ? 'translate-x-5' : 'translate-x-0'"
                                    />
                                </span>
                                <span class="text-sm">Marketing</span>
                                </button>
                            </Switch>
                        </div>

                    </div>

                    <!-- Footer -->
                    <div class="flex flex-col-reverse md:flex-row gap-3 p-6 pt-2">
                    <button class="secondary-btn sweep-secondary w-full md:w-fit px-4 py-2" @click="rejectAll">
                        <span class="relative z-50 text-sm text-text_color">Reject Everything</span>
                        <span class="sweep-overlay" aria-hidden="true"></span>
                    </button>

                    <button class="secondary-btn sweep-secondary w-full md:w-fit md:ml-auto px-4 py-2" @click="acceptSelected()">
                        <span class="relative z-50 text-sm text-text_color">Accept selected</span>
                        <span class="sweep-overlay" aria-hidden="true"></span>
                    </button>

                    <button class="primary-btn sweep group w-full md:w-fit px-4 py-2" @click="acceptAll">
                        <span class="relative z-50 text-sm text-background_color">Accept Everything</span>
                        <span class="sweep-overlay" aria-hidden="true"></span>
                    </button>
                    </div>
                </div>
                </div>
            </div>        
        </TransitionRoot>
        <button
            v-if="!opend"
            type="button"
            @click="opend = true"
            aria-label="Manage cookies"
            title="Manage cookies"
            class="fixed bottom-6 left-6 z-30 rounded-full border border-text_color/30 bg-background_color hover:bg-text_color hover:border-background_color/30 text-text_color hover:text-background_color
                shadow-md hover:shadow-lg p-2 transition flex items-center"
        >
            <Icon name="lucide:cookie" class="w-6 h-6 rounded-ful  my-auto" />
        </button>
    </section>
</template>
<script setup lang="ts">
import { Switch, TransitionRoot } from '@headlessui/vue'
import { ref, onMounted, computed } from 'vue'

const { gtag, initialize } = useGtag()

interface CookiePrefs {
  measurement: boolean
  marketing: boolean
}

// cookie (nullable)
const prefs = useCookie<CookiePrefs | null>('cookie_prefs', {
  sameSite: 'lax',
  secure: true,
  maxAge: 60 * 60 * 24 * 180,
  default: () => null,
})

const opend = ref(prefs.value === null)       // show modal if no choice yet
const necessary = ref(true)                   // locked
const measurement = ref(prefs.value?.measurement ?? false)
const marketing = ref(prefs.value?.marketing ?? false)
const hasInited = ref(false)

function savePrefs(): void {
  const next: CookiePrefs = { measurement: measurement.value, marketing: marketing.value }
  prefs.value = next
}

function updateConsent() {
  // Measurement controls analytics_storage; Marketing controls ad_*.
  gtag?.('consent', 'update', {
    analytics_storage: measurement.value ? 'granted' : 'denied',
    ad_storage: marketing.value ? 'granted' : 'denied',
    ad_user_data: marketing.value ? 'granted' : 'denied',
    ad_personalization: marketing.value ? 'granted' : 'denied',
  })
}

function maybeInit() {
  if (!hasInited.value && (measurement.value || marketing.value)) {
    initialize() // your ID is set in nuxt config
    hasInited.value = true
  }
}

function acceptAll() {
  measurement.value = true
  marketing.value = true
  savePrefs()
  updateConsent()
  maybeInit()
  opend.value = false
}
function acceptSelected() {
  savePrefs()
  updateConsent()
  maybeInit()
  opend.value = false
}

function rejectAll() {
  measurement.value = false
  marketing.value = false
  savePrefs()
  updateConsent()
  opend.value = false
}

onMounted(() => {
  // If user already chose, apply immediately
  if (prefs.value) {
    updateConsent()
    maybeInit()
    opend.value = false
  }
})
</script>
