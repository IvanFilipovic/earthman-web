<!-- components/FilterPanel.vue -->
<template>
  <TransitionRoot :show="open">
    <Dialog class="relative z-50" @close="$emit('update:open', false)">
      <div class="fixed inset-0 bg-text_color/40" aria-hidden="true"></div>

      <div class="fixed inset-y-0 right-0 flex max-w-full">
        <TransitionChild
          enter="transform transition ease-out duration-200"
          enter-from="translate-x-full"
          enter-to="translate-x-0"
          leave="transform transition ease-in duration-150"
          leave-from="translate-x-0"
          leave-to="translate-x-full"
        >
          <DialogPanel class="w-screen max-w-md bg-background_color h-full shadow-xl flex flex-col">
            <!-- Header -->
            <div class="flex items-center justify-between px-6 py-4 border-b">
              <h2 class="uppercase tracking-wider text-sm">Filters</h2>
              <button class="text-xl" @click="$emit('update:open', false)">×</button>
            </div>

            <!-- Body -->
            <div class="flex-1 overflow-auto px-6 py-6 space-y-8">
              <!-- Category -->
              <section>
                <div class="flex items-center justify-between">
                  <h3 class="uppercase text-xs tracking-widest">Category</h3>
                  <button class="text-xs underline" @click="local.categories = []">Clear</button>
                </div>
                <div class="mt-3 flex flex-wrap gap-2 justify-end">
                  <button
                    v-for="cat in facets.categories"
                    :key="cat.id"
                    @click="toggle('categories', cat.id)"
                    :class="chipClass(local.categories.includes(cat.id))"
                  >{{ cat.name }}
                </button>
                </div>
              </section>

              <!-- Size -->
              <section>
                <div class="flex items-center justify-between">
                  <h3 class="uppercase text-xs tracking-widest">Size</h3>
                  <button class="text-xs underline" @click="local.sizes = []">clear</button>
                </div>
                <div class="mt-3 flex flex-wrap gap-2 justify-end">
                  <button
                    v-for="s in facets.sizes"
                    :key="s"
                    @click="toggle('sizes', s.name)"
                    :class="chipClass(local.sizes.includes(s.name))"
                  >{{ s.name }}</button>
                </div>
              </section>

              <!-- Colour -->
              <section>
                <div class="flex items-center justify-between">
                  <h3 class="uppercase text-xs tracking-widest">Colour</h3>
                  <button class="text-xs underline" @click="local.colors = []">clear</button>
                </div>

                <div class="mt-3 flex flex-col gap-2">
                  <div
                    v-for="c in facets.colors"
                    :key="c.name"
                    class="relative"
                  >
                    <!-- Hidden checkbox to keep v-model working -->
                    <input
                      type="checkbox"
                      :value="c.name"
                      v-model="local.colors"
                      class="absolute inset-0 opacity-0 cursor-pointer"
                    />

                    <!-- Swatch block -->
                    <div class="flex flex-row my-auto justify-end">
                      <p class="my-auto text-sm text-text_color px-8">{{ c.name }}</p>
                      <div
                        class="w-6 h-6 border cursor-pointer m-1"
                        :class="local.colors.includes(c.name) ? 'ring-2 ring-text_color' : 'border-gray-300'"
                        :style="{ backgroundColor: `#${c.image}` }"
                        :title="c.name"
                      ></div>
                    </div>                    
                  </div>
                </div>
              </section>
            </div>

            <!-- Footer -->
            <div class="px-6 py-4 border-t flex items-center justify-between">
              <button class="text-sm underline" @click="reset">Clean filters</button>
              <button class="border px-4 py-2 rounded" @click="apply">View results</button>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

const props = defineProps({
  open: { type: Boolean, default: false },
  facets: { type: Object, default: () => ({ categories: [], sizes: [], colors: [] }) },
  modelValue: { type: Object, default: () => ({ categories: [], sizes: [], colors: [] }) }
})
const emit = defineEmits(['update:open','update:modelValue'])

function cloneFilters(v = {}) {
  return {
    categories: Array.isArray(v.categories) ? [...v.categories] : [],
    sizes: Array.isArray(v.sizes) ? [...v.sizes] : [],
    colors: Array.isArray(v.colors) ? [...v.colors] : []
  }
}

const local = reactive(cloneFilters(props.modelValue))

watch(() => props.modelValue, (v) => {
  Object.assign(local, cloneFilters(v))
}, { deep: true })

function apply () {
  // emit a plain object (no proxies)
  emit('update:modelValue', cloneFilters(local))
  emit('update:open', false)
}
function reset () {
  Object.assign(local, { categories: [], sizes: [], colors: [] })
}
function toggle (key, val) {
  const set = new Set(local[key]); set.has(val) ? set.delete(val) : set.add(val)
  local[key] = [...set]
}
function chipClass (active) {
  return ['px-3 py-1 text-sm text-text-color', active ? 'font-bold' : 'bg-backgroun_color']
}
</script>
