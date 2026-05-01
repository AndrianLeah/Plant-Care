<template>
  <!-- Fixed top bar (floating back button) -->
  <div
    class="fixed top-0 inset-x-0 z-50 flex items-center gap-3 px-3 pt-10 pb-2 pointer-events-none"
  >
    <AppButton
      variant="custom"
      size="icon"
      class="pointer-events-auto bg-white/85 backdrop-blur-sm shadow-sm hover:bg-white"
      @click="$router.back()"
    >
      <i class="mdi mdi-arrow-left text-slate-900 text-lg" />
    </AppButton>
  </div>

  <!-- Hero: always h-64, image fades in/out over gradient -->
  <div class="relative h-64 bg-gradient-to-b from-leaf-100 to-leaf-50 overflow-hidden">
    <Transition name="fade-fast">
      <img
        v-if="selectedSpecies && selectedImageUrl"
        :key="selectedSpecies.id"
        :src="selectedImageUrl"
        :alt="t(`species.${selectedSpecies.id}.name`)"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </Transition>
    <div class="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
    <div class="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
  </div>

  <!-- Lifted content panel -->
  <main
    class="relative z-10 -mt-5 rounded-t-3xl bg-white/70 backdrop-blur-xl px-5 pb-10 min-h-[calc(100vh-14.75rem)]"
  >
    <!-- Title row -->
    <div class="px-1 pt-6 pb-3">
      <h1 class="text-3xl font-extrabold text-slate-900 leading-tight">{{ t('add.title') }}</h1>
    </div>

    <form class="space-y-4" @submit.prevent="submit">
      <div class="card-glass rounded-2xl px-5 pt-5 pb-5 space-y-6">
        <!-- Species combobox -->
        <div>
          <label class="block text-sm font-medium text-slate-500 mb-1.5">
            {{ t('add.plant_type') }} *
          </label>

          <SpeciesCombobox v-model="form.speciesId" />

          <p v-if="errors.speciesId" class="text-xs text-red-600 mt-2">{{ errors.speciesId }}</p>
        </div>

        <!-- Nickname -->
        <div>
          <label class="block text-sm font-medium text-slate-500 mb-1.5">
            {{ t('add.nickname') }} *
          </label>
          <input
            v-model="form.nickname"
            type="text"
            :placeholder="t('add.nickname_placeholder')"
            class="w-full rounded-2xl px-4 py-3 text-sm focus:outline-none transition-shadow placeholder-slate-400"
            :class="
              errors.nickname
                ? 'bg-red-50 border border-red-300 focus:ring-2 focus:ring-red-300 focus:border-transparent'
                : 'bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-leaf-400 focus:border-transparent'
            "
          />
          <p v-if="errors.nickname" class="text-xs text-red-600 mt-2">{{ errors.nickname }}</p>
        </div>

        <!-- Location -->
        <div>
          <label class="block text-sm font-medium text-slate-500 mb-1.5">
            {{ t('add.location') }}
          </label>
          <input
            v-model="form.location"
            type="text"
            :placeholder="t('add.location_placeholder')"
            class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400 focus:border-transparent transition-shadow placeholder-slate-400"
          />
        </div>

        <!-- Notes -->
        <div>
          <label class="block text-sm font-medium text-slate-500 mb-1.5">
            {{ t('add.notes') }}
          </label>
          <textarea
            v-model="form.notes"
            :placeholder="t('add.notes_placeholder')"
            rows="3"
            class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400 focus:border-transparent transition-shadow placeholder-slate-400 resize-none"
          />
        </div>
      </div>

      <AppButton
        type="submit"
        :disabled="!form.speciesId || !form.nickname.trim()"
        variant="primary"
        color="emerald"
        size="lg"
        full-width
      >
        {{ t('add.submit') }}
      </AppButton>
    </form>
  </main>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import AppButton from '../components/AppButton.vue'
import SpeciesCombobox from '../components/SpeciesCombobox.vue'
import { getSpeciesImageUrl } from '../composables/usePlantImage'
import { PLANT_SPECIES } from '../data/plants'
import { usePlantsStore } from '../stores/plants'
import type { PlantSpecies } from '../types'

const router = useRouter()
const route = useRoute()
const store = usePlantsStore()
const { t } = useI18n()

const form = reactive({
  speciesId: (route.query.species as string) ?? '',
  nickname: '',
  location: '',
  notes: '',
})

const errors = reactive<Record<string, string>>({})

const selectedSpecies = computed<PlantSpecies | null>(
  () => PLANT_SPECIES.find((s) => s.id === form.speciesId) ?? null,
)
const selectedImageUrl = computed<string | null>(() =>
  form.speciesId ? getSpeciesImageUrl(form.speciesId) : null,
)

function validate(): boolean {
  errors.speciesId = form.speciesId ? '' : t('add.error_species')
  errors.nickname = form.nickname.trim() ? '' : t('add.error_nickname')
  return !errors.speciesId && !errors.nickname
}

function submit() {
  if (!validate()) return
  store.addPlant({
    speciesId: form.speciesId,
    nickname: form.nickname.trim(),
    location: form.location.trim(),
    notes: form.notes.trim() || undefined,
  })
  router.replace('/')
}
</script>
