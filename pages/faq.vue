<!-- pages/faq.vue -->
<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

type LinkInfo = { href: string; label: string }
type FaqItem = {
  title: string
  content: string
  link?: LinkInfo
}

const shippingFaqs: FaqItem[] = [
  {
    title: 'What are the shipping costs?',
    content: 'We offer free shipping on all orders over €200. For orders under €200, a flat shipping fee of €12.99 applies. Shipping costs are calculated automatically at checkout based on your order total.',
  },
  {
    title: 'How long does delivery take?',
    content: 'Standard delivery typically takes 3-5 business days within Croatia, 5-7 business days for other EU countries. You will receive a tracking number via email once your order has been dispatched.',
  },
  {
    title: 'Do you ship internationally?',
    content: 'Currently, we ship to Croatia, Slovenia, Austria, Germany, and Italy. We are working on expanding our shipping coverage to more countries. Please contact us if you have a specific location in mind.',
  },
  {
    title: 'Can I track my order?',
    content: 'Yes! Once your order is shipped, you will receive an email with a tracking number. You can use this number to track your package through our courier\'s website.',
  },
]

const orderFaqs: FaqItem[] = [
  {
    title: 'How do I place an order?',
    content: 'Browse our products, select your size, and click "Add to Cart". When you\'re ready, go to your cart, review your items, and proceed to checkout. Fill in your shipping information and choose your payment method to complete your order.',
  },
  {
    title: 'Can I modify or cancel my order?',
    content: 'You can modify or cancel your order within 1 hour of placing it by contacting us immediately. After this time, your order will be processed and cannot be changed. Please contact us as soon as possible if you need to make changes.',
    link: {
      href: '/contact',
      label: 'Contact us here',
    },
  },
  {
    title: 'What payment methods do you accept?',
    content: 'We accept credit/debit cards (Visa, Mastercard, American Express) via Stripe, and PayPal. All payments are processed securely using industry-standard encryption.',
  },
  {
    title: 'Will I receive an order confirmation?',
    content: 'Yes, you will receive an order confirmation email immediately after placing your order. If you don\'t receive it within a few minutes, please check your spam folder or contact us.',
  },
]

const returnsFaqs: FaqItem[] = [
  {
    title: 'What is your return policy?',
    content: 'We offer a 30-day return policy for unworn, unwashed items with original tags attached. Items must be returned in their original condition and packaging. Sale items and final sale products cannot be returned.',
  },
  {
    title: 'How do I return an item?',
    content: 'Contact us with your order number and the item(s) you wish to return. We will provide you with return instructions and a return authorization number. Ship the item(s) back to us using a trackable shipping method. Once we receive and inspect your return, we will process your refund.',
    link: {
      href: '/contact',
      label: 'Start a return request',
    },
  },
  {
    title: 'How long does it take to process a refund?',
    content: 'Once we receive your return, we will inspect it and process your refund within 5-7 business days. The refund will be issued to your original payment method. Please allow an additional 5-10 business days for the refund to appear in your account.',
  },
  {
    title: 'Can I exchange an item?',
    content: 'We currently do not offer direct exchanges. If you need a different size or color, please return the original item for a refund and place a new order for the item you want.',
  },
  {
    title: 'Who pays for return shipping?',
    content: 'Return shipping costs are the responsibility of the customer unless the item is defective or we made an error. We recommend using a trackable shipping method and keeping your shipping receipt.',
  },
]

const productFaqs: FaqItem[] = [
  {
    title: 'How do I know what size to order?',
    content: 'Each product page includes a detailed size guide. We recommend measuring yourself and comparing your measurements to our size chart. If you\'re between sizes, we generally recommend sizing up for a more comfortable fit.',
  },
  {
    title: 'Are your products sustainable?',
    content: 'Yes, sustainability is at the core of Earthman. We use organic cotton, recycled materials, and environmentally friendly production processes. We are committed to reducing our environmental impact and creating quality products that last.',
  },
  {
    title: 'How do I care for my Earthman products?',
    content: 'Care instructions are provided on the label of each garment. Generally, we recommend washing in cold water, using mild detergent, and air drying to maintain the quality and longevity of your products. Avoid bleach and high heat.',
  },
  {
    title: 'When will out-of-stock items be restocked?',
    content: 'Restocking times vary by product. You can sign up for restock notifications on the product page to be notified when the item is back in stock. We typically restock popular items every 4-6 weeks.',
  },
]

const accountFaqs: FaqItem[] = [
  {
    title: 'Do I need an account to place an order?',
    content: 'No, you can checkout as a guest. However, creating an account allows you to track your orders, save your shipping information, and receive exclusive offers and early access to new products.',
  },
  {
    title: 'How do I reset my password?',
    content: 'Click on "Login" and then "Forgot Password". Enter your email address and we will send you a link to reset your password. If you don\'t receive the email within a few minutes, please check your spam folder.',
  },
  {
    title: 'How do I update my account information?',
    content: 'Log in to your account and go to "Account Settings". From there, you can update your email address, password, shipping addresses, and other account details.',
  },
]

const otherFaqs: FaqItem[] = [
  {
    title: 'How can I contact customer service?',
    content: 'You can reach us through our contact form, email us at info@earthman.com, or visit our Contact page. We typically respond within 24-48 hours during business days (Monday-Friday).',
    link: {
      href: '/contact',
      label: 'Go to Contact page',
    },
  },
  {
    title: 'Do you offer gift cards?',
    content: 'Yes, we offer digital gift cards in various denominations. Gift cards are delivered via email and can be redeemed at checkout. They never expire and can be used for any products on our website.',
  },
  {
    title: 'Are there any current promotions or discounts?',
    content: 'Sign up for our newsletter to receive exclusive offers, early access to sales, and a welcome discount on your first purchase. We also run seasonal promotions throughout the year.',
  },
  {
    title: 'What if I received a defective or incorrect item?',
    content: 'We sincerely apologize if you received a defective or incorrect item. Please contact us immediately with your order number and photos of the item. We will arrange for a replacement or full refund, including return shipping costs.',
    link: {
      href: '/contact',
      label: 'Report an issue',
    },
  },
]

useSeoMeta({
  title: 'FAQ - Frequently Asked Questions | Earthman',
  description: 'Find answers to common questions about shipping, returns, orders, and products at Earthman.',
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
        <span class="pr-2" aria-current="page">FAQ</span>
      </nav>
    </div>

    <!-- Header -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl uppercase tracking-widest mb-4">
          Frequently Asked Questions
        </h1>
        <p class="text-text_color max-w-2xl mx-auto">
          Find answers to common questions about our products, shipping, returns, and more. 
          If you can't find what you're looking for, feel free to contact us.
        </p>
      </div>

      <!-- Shipping Questions -->
      <div class="mb-12">
        <h2 class="text-xl uppercase tracking-widest mb-6 pb-2 border-b-2 border-text_color">
          Shipping & Delivery
        </h2>
        <div class="bg-inherit text-text_color">
          <ul class="divide-y divide-text_color/30">
            <li v-for="(item, i) in shippingFaqs" :key="i" class="py-4">
              <Disclosure v-slot="{ open }" as="div">
                <DisclosureButton class="w-full flex items-center justify-between gap-4 text-left">
                  <h3 class="text-base md:text-lg font-medium">
                    {{ item.title }}
                  </h3>
                  <Icon
                    :name="open ? 'lucide:minus' : 'lucide:plus'"
                    class="h-5 w-5 transition-transform duration-200 ease-out shrink-0"
                    aria-hidden="true"
                  />
                </DisclosureButton>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-1"
                >
                  <DisclosurePanel v-if="open">
                    <div class="pt-4 text-sm md:text-base leading-relaxed text-text_color/90">
                      <p>{{ item.content }}</p>
                      <div v-if="item.link" class="pt-3">
                        <NuxtLink
                          :to="item.link.href"
                          class="underline underline-offset-2 hover:opacity-80"
                        >
                          {{ item.link.label }}
                        </NuxtLink>
                      </div>
                    </div>
                  </DisclosurePanel>
                </transition>
              </Disclosure>
            </li>
          </ul>
        </div>
      </div>

      <!-- Orders & Payment -->
      <div class="mb-12">
        <h2 class="text-xl uppercase tracking-widest mb-6 pb-2 border-b-2 border-text_color">
          Orders & Payment
        </h2>
        <div class="bg-inherit text-text_color">
          <ul class="divide-y divide-text_color/30">
            <li v-for="(item, i) in orderFaqs" :key="i" class="py-4">
              <Disclosure v-slot="{ open }" as="div">
                <DisclosureButton class="w-full flex items-center justify-between gap-4 text-left">
                  <h3 class="text-base md:text-lg font-medium">
                    {{ item.title }}
                  </h3>
                  <Icon
                    :name="open ? 'lucide:minus' : 'lucide:plus'"
                    class="h-5 w-5 transition-transform duration-200 ease-out shrink-0"
                    aria-hidden="true"
                  />
                </DisclosureButton>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-1"
                >
                  <DisclosurePanel v-if="open">
                    <div class="pt-4 text-sm md:text-base leading-relaxed text-text_color/90">
                      <p>{{ item.content }}</p>
                      <div v-if="item.link" class="pt-3">
                        <NuxtLink
                          :to="item.link.href"
                          class="underline underline-offset-2 hover:opacity-80"
                        >
                          {{ item.link.label }}
                        </NuxtLink>
                      </div>
                    </div>
                  </DisclosurePanel>
                </transition>
              </Disclosure>
            </li>
          </ul>
        </div>
      </div>

      <!-- Returns & Exchanges -->
      <div class="mb-12">
        <h2 class="text-xl uppercase tracking-widest mb-6 pb-2 border-b-2 border-text_color">
          Returns & Exchanges
        </h2>
        <div class="bg-inherit text-text_color">
          <ul class="divide-y divide-text_color/30">
            <li v-for="(item, i) in returnsFaqs" :key="i" class="py-4">
              <Disclosure v-slot="{ open }" as="div">
                <DisclosureButton class="w-full flex items-center justify-between gap-4 text-left">
                  <h3 class="text-base md:text-lg font-medium">
                    {{ item.title }}
                  </h3>
                  <Icon
                    :name="open ? 'lucide:minus' : 'lucide:plus'"
                    class="h-5 w-5 transition-transform duration-200 ease-out shrink-0"
                    aria-hidden="true"
                  />
                </DisclosureButton>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-1"
                >
                  <DisclosurePanel v-if="open">
                    <div class="pt-4 text-sm md:text-base leading-relaxed text-text_color/90">
                      <p>{{ item.content }}</p>
                      <div v-if="item.link" class="pt-3">
                        <NuxtLink
                          :to="item.link.href"
                          class="underline underline-offset-2 hover:opacity-80"
                        >
                          {{ item.link.label }}
                        </NuxtLink>
                      </div>
                    </div>
                  </DisclosurePanel>
                </transition>
              </Disclosure>
            </li>
          </ul>
        </div>
      </div>

      <!-- Products -->
      <div class="mb-12">
        <h2 class="text-xl uppercase tracking-widest mb-6 pb-2 border-b-2 border-text_color">
          Products
        </h2>
        <div class="bg-inherit text-text_color">
          <ul class="divide-y divide-text_color/30">
            <li v-for="(item, i) in productFaqs" :key="i" class="py-4">
              <Disclosure v-slot="{ open }" as="div">
                <DisclosureButton class="w-full flex items-center justify-between gap-4 text-left">
                  <h3 class="text-base md:text-lg font-medium">
                    {{ item.title }}
                  </h3>
                  <Icon
                    :name="open ? 'lucide:minus' : 'lucide:plus'"
                    class="h-5 w-5 transition-transform duration-200 ease-out shrink-0"
                    aria-hidden="true"
                  />
                </DisclosureButton>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-1"
                >
                  <DisclosurePanel v-if="open">
                    <div class="pt-4 text-sm md:text-base leading-relaxed text-text_color/90">
                      <p>{{ item.content }}</p>
                      <div v-if="item.link" class="pt-3">
                        <NuxtLink
                          :to="item.link.href"
                          class="underline underline-offset-2 hover:opacity-80"
                        >
                          {{ item.link.label }}
                        </NuxtLink>
                      </div>
                    </div>
                  </DisclosurePanel>
                </transition>
              </Disclosure>
            </li>
          </ul>
        </div>
      </div>

      <!-- Account -->
      <div class="mb-12">
        <h2 class="text-xl uppercase tracking-widest mb-6 pb-2 border-b-2 border-text_color">
          Account
        </h2>
        <div class="bg-inherit text-text_color">
          <ul class="divide-y divide-text_color/30">
            <li v-for="(item, i) in accountFaqs" :key="i" class="py-4">
              <Disclosure v-slot="{ open }" as="div">
                <DisclosureButton class="w-full flex items-center justify-between gap-4 text-left">
                  <h3 class="text-base md:text-lg font-medium">
                    {{ item.title }}
                  </h3>
                  <Icon
                    :name="open ? 'lucide:minus' : 'lucide:plus'"
                    class="h-5 w-5 transition-transform duration-200 ease-out shrink-0"
                    aria-hidden="true"
                  />
                </DisclosureButton>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-1"
                >
                  <DisclosurePanel v-if="open">
                    <div class="pt-4 text-sm md:text-base leading-relaxed text-text_color/90">
                      <p>{{ item.content }}</p>
                      <div v-if="item.link" class="pt-3">
                        <NuxtLink
                          :to="item.link.href"
                          class="underline underline-offset-2 hover:opacity-80"
                        >
                          {{ item.link.label }}
                        </NuxtLink>
                      </div>
                    </div>
                  </DisclosurePanel>
                </transition>
              </Disclosure>
            </li>
          </ul>
        </div>
      </div>

      <!-- Other -->
      <div class="mb-12">
        <h2 class="text-xl uppercase tracking-widest mb-6 pb-2 border-b-2 border-text_color">
          Other Questions
        </h2>
        <div class="bg-inherit text-text_color">
          <ul class="divide-y divide-text_color/30">
            <li v-for="(item, i) in otherFaqs" :key="i" class="py-4">
              <Disclosure v-slot="{ open }" as="div">
                <DisclosureButton class="w-full flex items-center justify-between gap-4 text-left">
                  <h3 class="text-base md:text-lg font-medium">
                    {{ item.title }}
                  </h3>
                  <Icon
                    :name="open ? 'lucide:minus' : 'lucide:plus'"
                    class="h-5 w-5 transition-transform duration-200 ease-out shrink-0"
                    aria-hidden="true"
                  />
                </DisclosureButton>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-1"
                >
                  <DisclosurePanel v-if="open">
                    <div class="pt-4 text-sm md:text-base leading-relaxed text-text_color/90">
                      <p>{{ item.content }}</p>
                      <div v-if="item.link" class="pt-3">
                        <NuxtLink
                          :to="item.link.href"
                          class="underline underline-offset-2 hover:opacity-80"
                        >
                          {{ item.link.label }}
                        </NuxtLink>
                      </div>
                    </div>
                  </DisclosurePanel>
                </transition>
              </Disclosure>
            </li>
          </ul>
        </div>
      </div>

      <!-- Still have questions CTA -->
      <div class="mt-16 text-center bg-text_color/5 border border-text_color/20 p-8 md:p-12">
        <h2 class="text-2xl uppercase tracking-widest mb-4">
          Still Have Questions?
        </h2>
        <p class="text-text_color/80 mb-6 max-w-xl mx-auto">
          Can't find the answer you're looking for? Our customer service team is here to help.
        </p>
        <NuxtLink to="/contact" class="btn btn--primary">
          <span class="btn__text">Contact Us</span>
          <span class="btn__fill"></span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>