<!-- pages/contact.vue -->
<script setup lang="ts">
import { Form as VForm, Field, ErrorMessage } from 'vee-validate'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const formValues = reactive<ContactFormData>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitting = ref(false)
const submitSuccess = ref(false)
const errorMsg = ref('')

function nameRule(value: string): string | true {
  if (!value || !value.trim()) {
    return 'Name is required'
  }
  if (value.length < 2) {
    return 'Name must be at least 2 characters'
  }
  if (value.length > 100) {
    return 'Name must be less than 100 characters'
  }
  return true
}

function emailRule(value: string): string | true {
  if (!value || !value.trim()) {
    return 'Email is required'
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  if (!emailRegex.test(value)) {
    return 'Please enter a valid email address'
  }
  return true
}

function subjectRule(value: string): string | true {
  if (!value || !value.trim()) {
    return 'Subject is required'
  }
  if (value.length > 200) {
    return 'Subject must be less than 200 characters'
  }
  return true
}

function messageRule(value: string): string | true {
  if (!value || !value.trim()) {
    return 'Message is required'
  }
  if (value.length < 10) {
    return 'Message must be at least 10 characters'
  }
  if (value.length > 2000) {
    return 'Message must be less than 2000 characters'
  }
  return true
}

async function handleSubmit(): Promise<void> {
  submitSuccess.value = false
  errorMsg.value = ''
  submitting.value = true

  try {
    const { getCsrfHeaders } = useCsrf()
    await $fetch('/api/contact', {
      method: 'POST',
      headers: getCsrfHeaders(),
      body: {
        name: formValues.name,
        email: formValues.email,
        subject: formValues.subject,
        message: formValues.message
      }
    })

    submitSuccess.value = true
    
    // Reset form
    formValues.name = ''
    formValues.email = ''
    formValues.subject = ''
    formValues.message = ''

    // Auto-hide success message after 10 seconds
    setTimeout(() => {
      submitSuccess.value = false
    }, 10000)

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (error: any) {
    console.error('Contact form error:', error)
    errorMsg.value = error?.data?.statusMessage || 'Failed to send message. Please try again or contact us at info@earthman.com'
  } finally {
    submitting.value = false
  }
}

useSeoMeta({
  title: 'Contact Us - Earthman',
  description: 'Get in touch with Earthman. We\'re here to help with any questions about our products.',
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
        <span class="pr-2" aria-current="page">CONTACT</span>
      </nav>
    </div>

    <div class="mx-auto px-4 md:px-8 py-12">
      <!-- Success Animation -->
      <transition name="success-slide">
        <div v-if="submitSuccess" class="mb-8 overflow-hidden">
          <div class="success-card p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-sm relative">
            <!-- Animated checkmark -->
            <div class="flex items-start gap-4">
              <div class="success-icon-wrapper">
                <div class="success-icon">
                  <Icon name="lucide:check" class="w-8 h-8 text-white" />
                </div>
                <div class="success-circle"></div>
              </div>
              
              <div class="flex-1">
                <h3 class="text-xl font-medium text-green-900 uppercase tracking-widest mb-2">
                  Message Sent Successfully!
                </h3>
                <p class="text-green-800 mb-3">
                  Thank you for reaching out. We've received your message and will get back to you within 24-48 hours.
                </p>
                <p class="text-sm text-green-700">
                  Check your inbox for a confirmation email.
                </p>
              </div>

              <button 
                @click="submitSuccess = false"
                class="text-green-600 hover:text-green-800 transition-colors p-1"
                aria-label="Close"
              >
                <Icon name="lucide:x" class="w-5 h-5" />
              </button>
            </div>

            <!-- Animated background particles -->
            <div class="success-particles">
              <span v-for="i in 6" :key="i" class="particle" :style="{ '--i': i }"></span>
            </div>
          </div>
        </div>
      </transition>

      <!-- Error Message -->
      <transition name="fade">
        <div v-if="errorMsg" class="mb-8 p-6 bg-red-50 border border-red-200 rounded-sm">
          <div class="flex items-start gap-3">
            <Icon name="lucide:alert-circle" class="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            <div class="flex-1">
              <h3 class="text-lg font-medium text-red-900 uppercase tracking-widest mb-2">Error</h3>
              <p class="text-sm text-red-800">{{ errorMsg }}</p>
            </div>
            <button 
              @click="errorMsg = ''"
              class="text-red-600 hover:text-red-800 transition-colors p-1"
              aria-label="Close"
            >
              <Icon name="lucide:x" class="w-5 h-5" />
            </button>
          </div>
        </div>
      </transition>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h1 class="text-3xl md:text-4xl uppercase tracking-widest mb-6">Get in Touch</h1>
          
          <p class="text-text_color mb-8 leading-relaxed">
            Have a question about our products or need assistance with your order? 
            We're here to help. Fill out the form and we'll get back to you as soon as possible.
          </p>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 flex items-center justify-center bg-text_color/5 border border-text_color/20">
                <Icon name="lucide:mail" class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-sm uppercase tracking-widest mb-1">Email</h3>
                <a href="mailto:info@earthman.com" class="text-text_color hover:text-text_color transition-colors">
                  info@earthman.com
                </a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 flex items-center justify-center bg-text_color/5 border border-text_color/20">
                <Icon name="lucide:clock" class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-sm uppercase tracking-widest mb-1">Response Time</h3>
                <p class="text-text_color">
                  Within 24-48 hours<br />
                  <span class="text-xs">Monday - Friday</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <div class="border border-text_color/30 p-6 md:p-8">
            <h2 class="text-xl uppercase tracking-widest mb-6">Send us a Message</h2>

            <VForm @submit="handleSubmit">
              <div class="space-y-6">
                <div class="flex flex-col md:flex-row w-full md:gap-x-4">
                    <!-- Name Field -->
                    <div class="w-full">
                    <label for="name" class="block text-xs uppercase tracking-widest mb-2">
                        Your Name *
                    </label>
                    <Field
                        id="name"
                        name="name"
                        type="text"
                        :rules="nameRule"
                        v-model="formValues.name"
                        v-slot="{ field, errorMessage }"
                    >
                        <input
                        v-bind="field"
                        class="input"
                        :class="{ 'border-error_text_color': errorMessage }"
                        maxlength="100"
                        placeholder="John Doe"
                        aria-describedby="name-error"
                        />
                        <div id="name-error" class="mt-1 h-4 overflow-hidden">
                        <transition name="fade-error">
                            <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">
                            {{ errorMessage }}
                            </p>
                        </transition>
                        </div>
                    </Field>
                    </div>

                    <!-- Email Field -->
                    <div class="w-full">
                    <label for="email" class="block text-xs uppercase tracking-widest mb-2">
                        Your Email *
                    </label>
                    <Field
                        id="email"
                        name="email"
                        type="email"
                        :rules="emailRule"
                        v-model="formValues.email"
                        v-slot="{ field, errorMessage }"
                    >
                        <input
                        v-bind="field"
                        class="input"
                        :class="{ 'border-error_text_color': errorMessage }"
                        placeholder="john@example.com"
                        aria-describedby="email-error"
                        />
                        <div id="email-error" class="mt-1 h-4 overflow-hidden">
                        <transition name="fade-error">
                            <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">
                            {{ errorMessage }}
                            </p>
                        </transition>
                        </div>
                    </Field>
                    </div>
                </div>
                <!-- Subject Field -->
                <div>
                  <label for="subject" class="block text-xs uppercase tracking-widest mb-2">
                    Subject *
                  </label>
                  <Field
                    id="subject"
                    name="subject"
                    type="text"
                    :rules="subjectRule"
                    v-model="formValues.subject"
                    v-slot="{ field, errorMessage }"
                  >
                    <input
                      v-bind="field"
                      class="input"
                      :class="{ 'border-error_text_color': errorMessage }"
                      maxlength="200"
                      placeholder="Order inquiry"
                      aria-describedby="subject-error"
                    />
                    <div id="subject-error" class="mt-1 h-4 overflow-hidden">
                      <transition name="fade-error">
                        <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">
                          {{ errorMessage }}
                        </p>
                      </transition>
                    </div>
                  </Field>
                </div>

                <!-- Message Field -->
                <div>
                  <label for="message" class="block text-xs uppercase tracking-widest mb-2">
                    Message *
                  </label>
                  <Field
                    id="message"
                    name="message"
                    :rules="messageRule"
                    v-model="formValues.message"
                    v-slot="{ field, errorMessage }"
                  >
                    <textarea
                      v-bind="field"
                      class="input min-h-[150px] resize-y"
                      :class="{ 'border-error_text_color': errorMessage }"
                      maxlength="2000"
                      placeholder="Tell us how we can help you..."
                      aria-describedby="message-error"
                    />
                    <div id="message-error" class="mt-1 h-4 overflow-hidden">
                      <transition name="fade-error">
                        <p v-if="errorMessage" class="text-xs text-error_text_color leading-4">
                          {{ errorMessage }}
                        </p>
                      </transition>
                    </div>
                  </Field>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="w-full btn"
                  :class="submitting ? 'btn--disabled' : 'btn--primary'"
                  :disabled="submitting"
                >
                  <span class="btn__text">
                    <Icon v-if="submitting" name="lucide:loader-2" class="w-4 h-4 inline-block mr-2 animate-spin" />
                    {{ submitting ? 'Sending...' : 'Send Message' }}
                  </span>
                  <span class="btn__fill"></span>
                </button>
              </div>
            </VForm>
          </div>

          <p class="text-xs text-text_color/60 mt-4 text-center">
            * Required fields
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Success Animation */
.success-slide-enter-active {
  animation: slideDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.success-slide-leave-active {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideUp {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(-20px) scale(0.98);
  }
}

/* Success Icon Animation */
.success-icon-wrapper {
  position: relative;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

.success-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #10b981, #059669);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  animation: iconPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s backwards;
}

.success-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border: 3px solid #10b981;
  border-radius: 50%;
  animation: circlePulse 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards;
}

@keyframes iconPop {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}

@keyframes circlePulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}

/* Success Card Animation */
.success-card {
  animation: cardShine 3s ease-in-out infinite;
}

@keyframes cardShine {
  0%, 100% {
    box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.1), 0 2px 4px -1px rgba(16, 185, 129, 0.06);
  }
  50% {
    box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2), 0 4px 6px -2px rgba(16, 185, 129, 0.1);
  }
}

/* Particles Animation */
.success-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #10b981, #34d399);
  border-radius: 50%;
  opacity: 0;
  animation: particleFloat 3s ease-in-out calc(var(--i) * 0.2s) infinite;
}

.particle:nth-child(1) { left: 10%; }
.particle:nth-child(2) { left: 25%; }
.particle:nth-child(3) { left: 40%; }
.particle:nth-child(4) { left: 60%; }
.particle:nth-child(5) { left: 75%; }
.particle:nth-child(6) { left: 90%; }

@keyframes particleFloat {
  0% {
    transform: translateY(100%) scale(0);
    opacity: 0;
  }
  20% {
    opacity: 0.8;
  }
  50% {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%) scale(0);
    opacity: 0;
  }
}

/* Fade Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-error-enter-active,
.fade-error-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-error-enter-from {
  opacity: 0;
  transform: translateY(-4px);
}

.fade-error-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>