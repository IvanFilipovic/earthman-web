<template>
  <TransitionRoot :show="open" as="template">
    <Dialog class="relative z-50" @close="closePanel">
      <!-- Backdrop with fade transition -->
      <TransitionChild
        enter="transition-opacity ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div 
          class="fixed inset-0 bg-text_color/30 cursor-pointer" 
          aria-hidden="true"
          @click="closePanel"
        ></div>
      </TransitionChild>

      <!-- Panel Container -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute inset-y-0 right-0 flex max-w-full">
          <TransitionChild
            enter="transform transition ease-out duration-300"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in duration-200"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel class="w-screen max-w-md bg-background_color h-full shadow-xl flex flex-col pointer-events-auto">
              <!-- Header -->
              <div class="flex items-center justify-between px-6 py-4 border-b border-text_color/30">
                <DialogTitle class="uppercase tracking-wider text-md">
                  Filters
                </DialogTitle>
                <button
                  type="button"
                  class="ml-2 p-1 inline-flex items-center justify-center hover:bg-text_color/10 shrink-0 rounded transition-colors duration-200"
                  aria-label="Close filters"
                  @click="closePanel"
                >
                  <Icon name="lucide:x" class="w-4 h-4" />
                </button>
              </div>

              <!-- Body -->
              <div class="flex-1 overflow-auto px-6 py-6 space-y-8">
                <!-- Gender -->
                <section class="pt-2">
                  <div class="flex items-center justify-between">
                    <h3 class="uppercase text-xs tracking-widest">Gender</h3>
                    <button 
                      type="button"
                      class="text-xs underline hover:no-underline transition-all duration-200" 
                      @click="resetGender"
                    >
                      Clear
                    </button>
                  </div>

                  <div class="mt-3 flex flex-wrap gap-2 justify-end">
                    <button
                      v-for="g in genderOptions"
                      :key="g.value || 'all'"
                      type="button"
                      @click="selectGender(g.value)"
                      :class="getChipClass(isGenderActive(g.value))"
                    >
                      {{ g.label }}
                    </button>
                  </div>
                </section>

                <!-- Collection -->
                <section class="pt-2">
                  <div class="flex items-center justify-between">
                    <h3 class="uppercase text-xs tracking-widest">Collection</h3>
                    <button 
                      type="button"
                      class="text-xs underline hover:no-underline transition-all duration-200" 
                      @click="resetCollection"
                    >
                      Clear
                    </button>
                  </div>
                  <div class="mt-3 flex flex-wrap gap-2 justify-end">
                    <button
                      v-for="col in facets.collections"
                      :key="`col-${col.slug}`"
                      type="button"
                      @click="toggleFilter('collections', col.slug)"
                      :class="getChipClass(localFilters.collections.includes(col.slug))"
                    >
                      {{ col.name }}
                    </button>
                  </div>
                </section>

                <!-- Category -->
                <section>
                  <div class="flex items-center justify-between">
                    <h3 class="uppercase text-xs tracking-widest">Category</h3>
                    <button 
                      type="button"
                      class="text-xs underline hover:no-underline transition-all duration-200" 
                      @click="resetCategories"
                    >
                      Clear
                    </button>
                  </div>
                  <div class="mt-3 flex flex-wrap gap-2 justify-end">
                    <button
                      v-for="cat in facets.categories"
                      :key="cat.id"
                      type="button"
                      @click="toggleFilter('categories', cat.id)"
                      :class="getChipClass(localFilters.categories.includes(cat.id))"
                    >
                      {{ cat.name }}
                    </button>
                  </div>
                </section>

                <!-- Size -->
                <section>
                  <div class="flex items-center justify-between">
                    <h3 class="uppercase text-xs tracking-widest">Size</h3>
                    <button 
                      type="button"
                      class="text-xs underline hover:no-underline transition-all duration-200" 
                      @click="resetSize"
                    >
                      Clear
                    </button>
                  </div>
                  <div class="mt-3 flex flex-wrap gap-2 justify-end">
                    <button
                      v-for="s in facets.sizes"
                      :key="s.name"
                      type="button"
                      @click="toggleFilter('sizes', s.name)"
                      :class="getChipClass(localFilters.sizes.includes(s.name))"
                    >
                      {{ s.name }}
                    </button>
                  </div>
                </section>

                <!-- Colour -->
                <section>
                  <div class="flex items-center justify-between">
                    <h3 class="uppercase text-xs tracking-widest">Colour</h3>
                    <button 
                      type="button"
                      class="text-xs underline hover:no-underline transition-all duration-200" 
                      @click="resetColor"
                    >
                      Clear
                    </button>
                  </div>
                  <div class="mt-3 flex flex-col">
                    <label
                      v-for="c in facets.colors"
                      :key="c.name"
                      class="relative cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        :value="c.name"
                        v-model="localFilters.colors"
                        class="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <div class="flex flex-row my-auto justify-end">
                        <p class="my-auto text-sm text-text_color px-8">{{ c.name }}</p>
                        <div
                          class="w-6 h-6 border cursor-pointer transition-all duration-200"
                          :class="localFilters.colors.includes(c.name) ? 'ring-2 ring-text_color' : 'border-gray-300'"
                          :style="{ backgroundColor: `#${c.image}` }"
                          :title="c.name"
                        ></div>
                      </div>
                    </label>
                  </div>
                </section>
              </div>

              <!-- Footer -->
              <div class="px-6 py-4 border-t border-text_color/30 flex items-center justify-between gap-3">
                <button 
                  type="button"
                  class="text-sm underline hover:no-underline transition-all duration-200" 
                  @click="resetAllFilters"
                >
                  Clear filters
                </button>
                <button 
                  type="button"
                  class="btn btn--secondary"
                  @click="applyFilters"
                >
                  <span class="btn__text">View results</span>
                  <span class="btn__fill"></span>
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

interface Collection {
  slug: string
  name: string
}

interface Category {
  id: number
  name: string
}

interface Size {
  name: string
}

interface Color {
  name: string
  image: string
}

interface Facets {
  collections: Collection[]
  categories: Category[]
  sizes: Size[]
  colors: Color[]
}

interface Filters {
  gender: string[]
  collections: string[]
  categories: number[]
  sizes: string[]
  colors: string[]
}

interface Props {
  open?: boolean
  facets?: Facets
  modelValue?: Filters
}

interface Emits {
  (e: 'update:open', value: boolean): void
  (e: 'update:modelValue', value: Filters): void
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
  facets: () => ({
    collections: [],
    categories: [],
    sizes: [],
    colors: []
  }),
  modelValue: () => ({
    gender: [],
    collections: [],
    categories: [],
    sizes: [],
    colors: []
  })
})

const emit = defineEmits<Emits>()

interface GenderOption {
  label: string
  value: string
}

const genderOptions: GenderOption[] = [
  { label: 'WOMAN', value: 'female' },
  { label: 'MAN', value: 'male' },
  { label: 'KIDS', value: 'kids' },
  { label: 'ALL', value: '' }
]

function cloneFilters(filters: Filters): Filters {
  return {
    gender: Array.isArray(filters.gender) ? [...filters.gender] : [],
    collections: Array.isArray(filters.collections) ? [...filters.collections] : [],
    categories: Array.isArray(filters.categories) ? [...filters.categories] : [],
    sizes: Array.isArray(filters.sizes) ? [...filters.sizes] : [],
    colors: Array.isArray(filters.colors) ? [...filters.colors] : []
  }
}

const localFilters = reactive<Filters>(cloneFilters(props.modelValue))

watch(
  () => props.modelValue,
  (newValue) => {
    Object.assign(localFilters, cloneFilters(newValue))
  },
  { deep: true }
)

function closePanel(): void {
  emit('update:open', false)
}

function selectGender(value: string): void {
  localFilters.gender = value ? [value] : []
}

function isGenderActive(value: string): boolean {
  if (!value) {
    return localFilters.gender.length === 0
  }
  return localFilters.gender[0] === value
}

function toggleFilter(key: keyof Filters, value: string | number): void {
  const array = localFilters[key] as Array<string | number>
  const index = array.indexOf(value)
  
  if (index > -1) {
    array.splice(index, 1)
  } else {
    array.push(value)
  }
}

function getChipClass(active: boolean): string {
  return [
    'px-3 py-1 text-sm transition-all duration-200',
    active 
      ? 'font-bold' 
      : 'hover:opacity-70'
  ].join(' ')
}

function resetGender(): void {
  localFilters.gender = []
}

function resetCollection(): void {
  localFilters.collections = []
}

function resetCategories(): void {
  localFilters.categories = []
}

function resetSize(): void {
  localFilters.sizes = []
}

function resetColor(): void {
  localFilters.colors = []
}

function resetAllFilters(): void {
  Object.assign(localFilters, {
    gender: [],
    collections: [],
    categories: [],
    sizes: [],
    colors: []
  })
  emit('update:modelValue', cloneFilters(localFilters))
}

function applyFilters(): void {
  emit('update:modelValue', cloneFilters(localFilters))
  emit('update:open', false)
}
</script>