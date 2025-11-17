<!-- pages/size-guide.vue -->
<script setup lang="ts">
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'

interface SizeData {
  size: string
  chest: string
  waist: string
  hips: string
}

const womenSizes: SizeData[] = [
  { size: 'XS', chest: '80-84', waist: '62-66', hips: '88-92' },
  { size: 'S', chest: '84-88', waist: '66-70', hips: '92-96' },
  { size: 'M', chest: '88-92', waist: '70-74', hips: '96-100' },
  { size: 'L', chest: '92-97', waist: '74-79', hips: '100-105' },
  { size: 'XL', chest: '97-102', waist: '79-84', hips: '105-110' },
  { size: 'XXL', chest: '102-108', waist: '84-90', hips: '110-116' },
]

const menSizes: SizeData[] = [
  { size: 'XS', chest: '86-89', waist: '73-76', hips: '89-92' },
  { size: 'S', chest: '89-94', waist: '76-81', hips: '92-97' },
  { size: 'M', chest: '94-99', waist: '81-86', hips: '97-102' },
  { size: 'L', chest: '99-104', waist: '86-91', hips: '102-107' },
  { size: 'XL', chest: '104-111', waist: '91-98', hips: '107-114' },
  { size: 'XXL', chest: '111-118', waist: '98-105', hips: '114-121' },
]

const kidsSizes: SizeData[] = [
  { size: 'XS (4-5Y)', chest: '56-58', waist: '52-54', hips: '60-62' },
  { size: 'S (6-7Y)', chest: '60-63', waist: '55-58', hips: '64-67' },
  { size: 'M (8-9Y)', chest: '64-67', waist: '59-62', hips: '68-71' },
  { size: 'L (10-11Y)', chest: '71-74', waist: '63-66', hips: '74-77' },
  { size: 'XL (12-13Y)', chest: '78-82', waist: '67-70', hips: '82-86' },
]

const categories = [
  { name: 'Women', sizes: womenSizes },
  { name: 'Men', sizes: menSizes },
  { name: 'Kids', sizes: kidsSizes },
]

const selectedIndex = ref(0)

useSeoMeta({
  title: 'Size Guide - Earthman',
  description: 'Find your perfect fit with our comprehensive size guide for women, men, and kids clothing.',
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
        <span class="pr-2" aria-current="page">SIZE GUIDE</span>
      </nav>
    </div>

    <div class="max-w-6xl mx-auto px-4 md:px-8 py-12">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl md:text-4xl uppercase tracking-widest mb-4">Size Guide</h1>
        <p class="text-text_color/70 max-w-2xl mx-auto">
          Find your perfect fit. All measurements are in centimeters (cm).
        </p>
      </div>

      <!-- Tabs - ADD as="div" HERE -->
      <TabGroup v-model="selectedIndex" as="div">
        <!-- Tab List -->
        <TabList class="flex gap-2 border-b border-text_color/30 mb-8 overflow-x-auto">
          <Tab
            v-for="category in categories"
            :key="category.name"
            v-slot="{ selected }"
            as="template"
          >
            <button
              class="px-6 py-3 text-sm md:text-base uppercase tracking-widest whitespace-nowrap transition-colors focus:outline-none"
              :class="[
                selected
                  ? 'border-b-2 border-text_color font-medium -mb-[2px]'
                  : 'text-text_color/60 hover:text-text_color',
              ]"
            >
              {{ category.name }}
            </button>
          </Tab>
        </TabList>

        <!-- Tab Panels -->
        <TabPanels>
          <TabPanel
            v-for="(category, idx) in categories"
            :key="idx"
            class="focus:outline-none"
          >
            <!-- How to Measure Section -->
            <div class="mb-12 bg-text_color/5 border border-text_color/20 p-6 md:p-8">
              <h2 class="text-xl uppercase tracking-widest mb-6">How to Measure</h2>
              
              <p class="text-text_color/80 mb-8">
                Take the measurements close to your body to find the right size.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Measurement Diagram -->
                <div class="flex items-center justify-center bg-white p-8 border border-text_color/10">
                  <div class="relative">
                    <!-- Simple body outline SVG -->
                    <svg width="200" height="300" viewBox="0 0 200 300" class="text-text_color/20">
                      <!-- Head -->
                      <circle cx="100" cy="30" r="25" fill="currentColor" />
                      <!-- Body -->
                      <rect x="75" y="55" width="50" height="120" rx="8" fill="currentColor" />
                      <!-- Arms -->
                      <rect x="35" y="60" width="40" height="15" rx="7" fill="currentColor" />
                      <rect x="125" y="60" width="40" height="15" rx="7" fill="currentColor" />
                      <!-- Legs -->
                      <rect x="80" y="175" width="15" height="90" rx="7" fill="currentColor" />
                      <rect x="105" y="175" width="15" height="90" rx="7" fill="currentColor" />
                      
                      <!-- Measurement lines -->
                      <g class="text-text_color" stroke="currentColor" stroke-width="1.5">
                        <!-- Chest line (1) -->
                        <line x1="30" y1="80" x2="170" y2="80" />
                        <text x="10" y="85" font-size="16" font-weight="bold">1</text>
                        
                        <!-- Waist line (2) -->
                        <line x1="30" y1="130" x2="170" y2="130" />
                        <text x="10" y="135" font-size="16" font-weight="bold">2</text>
                        
                        <!-- Hip line (3) -->
                        <line x1="30" y1="170" x2="170" y2="170" />
                        <text x="10" y="175" font-size="16" font-weight="bold">3</text>
                      </g>
                    </svg>
                  </div>
                </div>

                <!-- Measurement Instructions -->
                <div class="space-y-6">
                  <div class="flex gap-4">
                    <div class="w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <h3 class="font-medium mb-1">
                        {{ category.name === 'Kids' ? 'Chest' : 'Bust/Chest circumference' }}
                      </h3>
                      <p class="text-sm text-text_color/80">
                        Measure around the fullest part of the chest
                      </p>
                    </div>
                  </div>

                  <div class="flex gap-4">
                    <div class="w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <h3 class="font-medium mb-1">Waist circumference</h3>
                      <p class="text-sm text-text_color/80">
                        Measure where you want the waistband to sit
                      </p>
                    </div>
                  </div>

                  <div class="flex gap-4">
                    <div class="w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <h3 class="font-medium mb-1">Hip circumference</h3>
                      <p class="text-sm text-text_color/80">
                        Measure at the widest part of the hip
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Size Table -->
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-text_color text-background_color">
                    <th class="px-4 py-3 text-left text-sm uppercase tracking-widest font-medium">
                      Size
                    </th>
                    <th class="px-4 py-3 text-left text-sm uppercase tracking-widest font-medium">
                      Chest (cm)
                    </th>
                    <th class="px-4 py-3 text-left text-sm uppercase tracking-widest font-medium">
                      Waist (cm)
                    </th>
                    <th class="px-4 py-3 text-left text-sm uppercase tracking-widest font-medium">
                      Hips (cm)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(size, sizeIdx) in category.sizes"
                    :key="sizeIdx"
                    class="border-b border-text_color/20 hover:bg-text_color/5 transition-colors"
                  >
                    <td class="px-4 py-4 font-medium">{{ size.size }}</td>
                    <td class="px-4 py-4">{{ size.chest }}</td>
                    <td class="px-4 py-4">{{ size.waist }}</td>
                    <td class="px-4 py-4">{{ size.hips }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Size Tips -->
            <div class="mt-8 bg-blue-50 border border-blue-200 p-6">
              <div class="flex items-start gap-3">
                <Icon name="lucide:info" class="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div class="text-sm text-blue-900">
                  <p class="font-medium mb-2">Sizing Tips:</p>
                  <ul class="space-y-1 text-blue-800">
                    <li>• If you're between sizes, we recommend sizing up for a more comfortable fit</li>
                    <li>• All measurements are body measurements, not garment measurements</li>
                    <li>• For the most accurate measurement, have someone help you</li>
                    <li>• Wear fitted clothing or underwear when measuring</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>

      <!-- Additional Help -->
      <div class="mt-16 text-center bg-text_color/5 border border-text_color/20 p-8 md:p-12">
        <Icon name="lucide:ruler" class="w-12 h-12 mx-auto mb-4" />
        <h2 class="text-2xl uppercase tracking-widest mb-4">
          Need Help Finding Your Size?
        </h2>
        <p class="text-text_color/80 mb-6 max-w-xl mx-auto">
          Still unsure about sizing? Our customer service team is here to help you find the perfect fit.
        </p>
        <NuxtLink to="/contact" class="btn btn--primary">
          <span class="btn__text">Contact Us</span>
          <span class="btn__fill"></span>
        </NuxtLink>
      </div>

      <!-- Conversion Chart -->
      <div class="mt-12">
        <h2 class="text-xl uppercase tracking-widest mb-6 text-center">International Size Conversions</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Women's Conversion -->
          <div class="bg-white border border-text_color/20 p-6">
            <h3 class="font-medium uppercase tracking-wider mb-4 text-center">Women</h3>
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-text_color/20">
                  <th class="py-2 text-left">EU</th>
                  <th class="py-2 text-left">UK</th>
                  <th class="py-2 text-left">US</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">XS</td>
                  <td class="py-2">6</td>
                  <td class="py-2">2</td>
                </tr>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">S</td>
                  <td class="py-2">8-10</td>
                  <td class="py-2">4-6</td>
                </tr>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">M</td>
                  <td class="py-2">12</td>
                  <td class="py-2">8</td>
                </tr>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">L</td>
                  <td class="py-2">14</td>
                  <td class="py-2">10</td>
                </tr>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">XL</td>
                  <td class="py-2">16</td>
                  <td class="py-2">12</td>
                </tr>
                <tr>
                  <td class="py-2">XXL</td>
                  <td class="py-2">18</td>
                  <td class="py-2">14</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Men's Conversion -->
          <div class="bg-white border border-text_color/20 p-6">
            <h3 class="font-medium uppercase tracking-wider mb-4 text-center">Men</h3>
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-text_color/20">
                  <th class="py-2 text-left">EU</th>
                  <th class="py-2 text-left">UK</th>
                  <th class="py-2 text-left">US</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">XS</td>
                  <td class="py-2">34</td>
                  <td class="py-2">XS</td>
                </tr>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">S</td>
                  <td class="py-2">36</td>
                  <td class="py-2">S</td>
                </tr>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">M</td>
                  <td class="py-2">38-40</td>
                  <td class="py-2">M</td>
                </tr>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">L</td>
                  <td class="py-2">42</td>
                  <td class="py-2">L</td>
                </tr>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">XL</td>
                  <td class="py-2">44</td>
                  <td class="py-2">XL</td>
                </tr>
                <tr>
                  <td class="py-2">XXL</td>
                  <td class="py-2">46</td>
                  <td class="py-2">XXL</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Kids Conversion -->
          <div class="bg-white border border-text_color/20 p-6">
            <h3 class="font-medium uppercase tracking-wider mb-4 text-center">Kids</h3>
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-text_color/20">
                  <th class="py-2 text-left">Age</th>
                  <th class="py-2 text-left">Height</th>
                  <th class="py-2 text-left">Size</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">4-5Y</td>
                  <td class="py-2">104-110</td>
                  <td class="py-2">XS</td>
                </tr>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">6-7Y</td>
                  <td class="py-2">116-122</td>
                  <td class="py-2">S</td>
                </tr>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">8-9Y</td>
                  <td class="py-2">128-134</td>
                  <td class="py-2">M</td>
                </tr>
                <tr class="border-b border-text_color/10">
                  <td class="py-2">10-11Y</td>
                  <td class="py-2">140-146</td>
                  <td class="py-2">L</td>
                </tr>
                <tr>
                  <td class="py-2">12-13Y</td>
                  <td class="py-2">152-158</td>
                  <td class="py-2">XL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>