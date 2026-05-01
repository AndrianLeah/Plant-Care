<template>
  <!-- Fixed-height anchor element: the dropdown is positioned relative to its screen rect -->
  <div ref="comboboxAnchor" class="relative h-[76px]">
    <!-- Selected state -->
    <button
      v-if="selectedSpecies && !isSearching"
      type="button"
      class="absolute inset-0 w-full flex items-center gap-4 px-4 bg-leaf-50 border border-leaf-400 rounded-2xl hover:border-leaf-500 transition-all text-left group"
      @click="openSearch"
    >
      <img
        v-if="imageMap[selectedSpecies.id]"
        :src="imageMap[selectedSpecies.id]"
        class="w-14 h-14 rounded-xl object-cover flex-shrink-0"
      />
      <i v-else class="mdi mdi-leaf text-leaf-500 text-3xl flex-shrink-0" />
      <div class="flex-1 min-w-0">
        <div class="text-base font-semibold text-slate-900 truncate">
          {{ t(`species.${selectedSpecies.id}.name`) }}
        </div>
        <div class="text-sm text-slate-500">
          {{ t(`difficulty.${selectedSpecies.difficulty}`) }}
        </div>
      </div>
      <i
        class="mdi mdi-pencil-outline text-slate-300 group-hover:text-slate-400 text-lg flex-shrink-0 transition-colors"
      />
    </button>

    <!-- Search state -->
    <label
      v-else
      class="absolute inset-0 flex items-center gap-3 px-4 bg-slate-50 border rounded-2xl transition-all cursor-text"
      :class="isSearching ? 'border-leaf-400 ring-2 ring-leaf-200' : 'border-slate-200'"
    >
      <i class="mdi mdi-magnify text-slate-400 text-base flex-shrink-0" />
      <input
        ref="searchInput"
        v-model="searchQuery"
        type="text"
        :placeholder="t('add.search_species_placeholder')"
        class="flex-1 text-sm text-slate-700 placeholder:text-slate-400 bg-transparent outline-none min-w-0"
        @focus="onFocus"
      />
      <i
        v-if="searchQuery"
        class="mdi mdi-close text-slate-300 text-base cursor-pointer flex-shrink-0"
        @mousedown.prevent="searchQuery = ''"
      />
      <i v-else class="mdi mdi-chevron-down text-slate-300 text-base flex-shrink-0" />
    </label>
  </div>

  <!-- Dropdown: teleported to avoid stacking context issues -->
  <Teleport to="body">
    <Transition name="fade-fast">
      <div
        v-if="showDropdown && isSearching"
        ref="dropdownRef"
        class="fixed z-[200] bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden"
        :style="dropdownStyle"
      >
        <div class="max-h-60 overflow-y-auto">
          <template v-if="filteredSpecies.length > 0">
            <button
              v-for="s in filteredSpecies"
              :key="s.id"
              type="button"
              class="w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors"
              :class="
                modelValue === s.id
                  ? 'bg-leaf-50 text-leaf-700'
                  : 'text-slate-700 hover:bg-slate-50'
              "
              @mousedown.prevent="selectSpecies(s)"
            >
              <img
                v-if="imageMap[s.id]"
                :src="imageMap[s.id]"
                class="w-9 h-9 rounded-lg object-cover flex-shrink-0"
              />
              <div
                v-else
                class="w-9 h-9 rounded-lg bg-leaf-100 flex items-center justify-center flex-shrink-0"
              >
                <i class="mdi mdi-leaf text-leaf-400 text-base" />
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-semibold truncate">{{ t(`species.${s.id}.name`) }}</div>
                <div class="text-xs text-slate-500 truncate italic">{{ s.scientificName }}</div>
              </div>
              <span class="text-xs text-slate-500 flex-shrink-0">
                {{ t(`difficulty.${s.difficulty}`) }}
              </span>
            </button>
          </template>
          <div v-else class="px-4 py-3 text-sm text-slate-500 text-center">
            {{ t('add.search_species_no_results') }}
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onClickOutside, refDebounced } from '@vueuse/core'
import { find, keyBy, mapValues, orderBy } from 'lodash'
import { computed, nextTick, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { getSpeciesImageUrl } from '../composables/usePlantImage'
import { PLANT_SPECIES } from '../data/plants'
import type { PlantSpecies } from '../types'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{
  (e: 'update:modelValue', id: string): void
}>()

const { t } = useI18n()

const imageMap: Record<string, string> = mapValues(
  keyBy(PLANT_SPECIES, 'id'),
  (s) => getSpeciesImageUrl(s.id) ?? '',
)

const searchQuery = ref('')
const searchQueryDebounced = refDebounced(searchQuery, 150)
const isSearching = ref(false)
const showDropdown = ref(false)
const searchInput = ref<HTMLInputElement | null>(null)
const comboboxAnchor = ref<HTMLElement | null>(null)

onClickOutside(comboboxAnchor, () => {
  isSearching.value = false
  showDropdown.value = false
  searchQuery.value = ''
})

const dropdownStyle = computed(() => {
  if (!comboboxAnchor.value) return {}
  const rect = comboboxAnchor.value.getBoundingClientRect()
  return {
    top: `${rect.bottom + 4}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
  }
})

const selectedSpecies = computed<PlantSpecies | null>(
  () => find(PLANT_SPECIES, { id: props.modelValue }) ?? null,
)

const filteredSpecies = computed(() => {
  const q = searchQueryDebounced.value.trim().toLowerCase()
  const base = q
    ? PLANT_SPECIES.filter(
        (s) =>
          t(`species.${s.id}.name`).toLowerCase().includes(q) ||
          s.scientificName.toLowerCase().includes(q),
      )
    : PLANT_SPECIES
  return orderBy(base, [(s) => t(`species.${s.id}.name`).toLowerCase()])
})

function openSearch() {
  isSearching.value = true
  showDropdown.value = true
  searchQuery.value = ''
  nextTick(() => searchInput.value?.focus())
}

function onFocus() {
  isSearching.value = true
  showDropdown.value = true
}

function selectSpecies(s: PlantSpecies) {
  emit('update:modelValue', s.id)
  isSearching.value = false
  showDropdown.value = false
  searchQuery.value = ''
}
</script>
