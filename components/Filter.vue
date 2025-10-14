<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-50" @close="$emit('update:open', false)">
      <div class="fixed inset-0 bg-black/20" aria-hidden="true"></div>

      <div class="fixed inset-y-0 right-0 flex max-w-full">
        <TransitionChild
          enter="transform transition ease-out duration-200"
          enter-from="translate-x-full"
          enter-to="translate-x-0"
          leave="transform transition ease-in duration-150"
          leave-from="translate-x-0"
          leave-to="translate-x-full"
        >
          <DialogPanel class="w-screen max-w-md bg-white h-full shadow-xl flex flex-col">
            <!-- Header -->
            <div class="flex items-center justify-between px-6 py-4 border-b">
              <h2 class="uppercase tracking-wider text-sm">Filters</h2>
              <button class="text-xl" @click="$emit('update:open', false)">×</button>
            </div>

            <!-- Body -->
            <div class="flex-1 overflow-auto px-6 py-6 space-y-8">
              <section>
                <div class="flex items-center justify-between">
                  <h3 class="uppercase text-xs tracking-widest">Category</h3>
                  <button class="text-xs underline" @click="local.categories = []">clear</button>
                </div>
                <div class="mt-3 grid grid-cols-2 gap-2">
                  <label v-for="cat in facets.categories" :key="cat" class="flex items-center gap-2">
                    <input type="checkbox" :value="cat" v-model="local.categories" />
                    <span class="text-sm">{{ cat }}</span>
                  </label>
                </div>
              </section>

              <section>
                <div class="flex items-center justify-between">
                  <h3 class="uppercase text-xs tracking-widest">Size</h3>
                  <button class="text-xs underline" @click="local.sizes = []">clear</button>
                </div>
                <div class="mt-3 flex flex-wrap gap-2">
                  <button
                    v-for="s in facets.sizes"
                    :key="s"
                    @click="toggle('sizes', s)"
                    :class="chipClass(local.sizes.includes(s))"
                  >{{ s }}</button>
                </div>
              </section>

              <section>
                <div class="flex items-center justify-between">
                  <h3 class="uppercase text-xs tracking-widest">Colour</h3>
                  <button class="text-xs underline" @click="local.colors = []">clear</button>
                </div>
                <div class="mt-3 grid grid-cols-2 gap-2">
                  <label v-for="c in facets.colors" :key="c" class="flex items-center gap-2">
                    <input type="checkbox" :value="c" v-model="local.colors" />
                    <span class="text-sm">{{ c }}</span>
                  </label>
                </div>
              </section>
            </div>

            <!-- Footer -->
            <div class="px-6 py-4 border-t flex items-center justify-between">
              <button class="text-sm underline" @click="reset">Clean filters</button>
              <button class="border px-4 py-2 rounded"
                      @click="apply">View results</button>
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

const local = reactive(structuredClone(props.modelValue))
watch(() => props.modelValue, v => Object.assign(local, structuredClone(v)), { deep: true })

function apply() {
  emit('update:modelValue', structuredClone(local))
  emit('update:open', false)
}
function reset() {
  Object.assign(local, { categories: [], sizes: [], colors: [] })
}
function toggle(key, val) {
  const set = new Set(local[key]); set.has(val) ? set.delete(val) : set.add(val)
  local[key] = Array.from(set)
}
function chipClass(active) {
  return [
    'px-3 py-1 rounded-full text-sm border',
    active ? 'bg-black text-white' : 'bg-white'
  ]
}
</script>
