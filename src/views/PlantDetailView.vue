<template>
  <template v-if="plant && species">
    <!-- Sticky top bar (always rendered, bg appears on scroll) -->
    <div class="fixed top-0 inset-x-0 z-50 flex items-center gap-3 px-3 pt-10 pb-2">
      <!-- Background layer: fades as one unit via opacity only -->
      <div
        class="absolute inset-0 bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/60 transition-opacity duration-300"
        :class="scrolled ? 'opacity-100' : 'opacity-0'"
      />

      <!-- Back -->
      <AppButton
        variant="custom"
        size="icon"
        class="relative flex-shrink-0"
        :class="
          scrolled ? 'bg-slate-100 hover:bg-slate-200' : 'bg-white/85 backdrop-blur-sm shadow-sm'
        "
        @click="$router.back()"
      >
        <i class="mdi mdi-arrow-left text-slate-900 text-lg" />
      </AppButton>

      <!-- Title (only visible when scrolled) -->
      <span
        :class="[
          'relative flex-1 font-extrabold text-slate-900 truncate text-base transition-all duration-300',
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1',
        ]"
      >
        {{ plant.nickname }}
      </span>

      <!-- Action buttons (compact icons when scrolled) -->
      <div
        :class="[
          'relative flex gap-2 transition-all duration-300',
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none',
        ]"
      >
        <AppButton variant="glass" color="violet" size="sm" @click="showMoistureSheet = true">
          <i class="mdi mdi-water-check-outline text-sm" />
          <span class="hidden xs:inline">{{ t('detail.log_moisture') }}</span>
        </AppButton>
        <AppButton variant="glass" color="sky" size="sm" @click="confirmWater">
          <i class="mdi mdi-watering-can-outline text-sm" />
          <span class="hidden xs:inline">{{ t('detail.mark_watered') }}</span>
        </AppButton>
      </div>
    </div>

    <!-- Hero image -->
    <div class="relative h-72 bg-leaf-100 overflow-hidden">
      <img
        v-if="speciesImageUrl"
        :src="speciesImageUrl"
        :alt="t(`species.${species.id}.name`)"
        class="w-full h-full object-cover"
      />
      <span v-else class="absolute inset-0 flex items-center justify-center">
        <i class="mdi mdi-leaf text-leaf-200" style="font-size: 7rem" />
      </span>

      <!-- Top safe-area gradient for back button visibility -->
      <div class="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
      <!-- Bottom fade into content panel -->
      <div class="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
      <!-- No back button here anymore: it's in the sticky bar above -->
    </div>

    <!-- Content lifted panel -->
    <div class="relative z-10 -mt-5 rounded-t-3xl bg-white/70 backdrop-blur-xl">
      <!-- Title -->
      <div class="px-6 pt-6 pb-3 flex items-start justify-between gap-3">
        <div class="flex-1 min-w-0">
          <h1 class="text-3xl font-extrabold text-slate-900 leading-tight">{{ plant.nickname }}</h1>
          <p class="text-sm text-slate-500 mt-0.5">
            {{ t(`species.${species.id}.name`) }} ·
            <em>{{ species.scientificName }}</em>
          </p>
        </div>
        <AppButton
          variant="ghost"
          color="red"
          size="icon"
          class="flex-shrink-0 mt-1"
          :title="t('detail.remove')"
          @click="confirmDelete"
        >
          <i class="mdi mdi-trash-can-outline text-xl" />
        </AppButton>
      </div>

      <!-- Content -->
      <main class="px-5 pt-2 pb-10 space-y-4">
        <!-- Quick actions -->
        <div class="flex gap-3">
          <AppButton
            variant="primary"
            color="violet"
            size="lg"
            full-width
            @click="showMoistureSheet = true"
          >
            <i class="mdi mdi-water-check-outline text-base" />
            {{ t('detail.log_moisture') }}
          </AppButton>
          <AppButton variant="primary" color="sky" size="lg" full-width @click="confirmWater">
            <i class="mdi mdi-watering-can-outline text-base" />
            {{ t('detail.mark_watered') }}
          </AppButton>
        </div>

        <!-- Current status -->
        <PlantStatusCard
          :last-moisture="lastMoisture"
          :last-watered-date="plant.lastWateredDate"
          :next-watering="nextWatering"
          :location="plant.location"
        />
        <!-- Water quality -->
        <div
          class="card-glass rounded-2xl overflow-hidden"
          :class="waterWarning ? 'ring-2 ring-orange-300' : ''"
        >
          <!-- Status banner -->
          <div
            class="px-4 py-3 flex items-center gap-3"
            :class="waterWarning ? 'bg-orange-50' : 'bg-cyan-50'"
          >
            <i
              class="mdi text-xl flex-shrink-0"
              :class="
                waterWarning ? 'mdi-water-alert text-orange-400' : 'mdi-water-check text-cyan-500'
              "
            />
            <div class="flex-1 min-w-0">
              <div
                class="text-sm font-semibold"
                :class="waterWarning ? 'text-orange-700' : 'text-cyan-800'"
              >
                {{ waterWarning ? t('detail.water_warning_title') : t('detail.water_ok_title') }}
              </div>
              <div
                class="text-xs mt-0.5"
                :class="waterWarning ? 'text-orange-500' : 'text-cyan-600'"
              >
                {{ waterWarning ? t('detail.water_warning_sub') : t('detail.water_ok_sub') }}
              </div>
            </div>
          </div>

          <!-- Water options: what's recommended -->
          <div class="px-4 pt-3 pb-1 flex flex-wrap gap-2">
            <span
              v-for="opt in waterOptions"
              :key="opt.key"
              class="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
              :class="
                opt.ok
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'bg-slate-100 text-slate-400 line-through'
              "
            >
              <i
                class="mdi text-sm"
                :class="
                  opt.ok ? 'mdi-check-circle text-emerald-500' : 'mdi-close-circle text-slate-300'
                "
              />
              {{ t(opt.labelKey) }}
            </span>
          </div>

          <!-- Tip: only shown when tap water is a concern -->
          <div
            v-if="waterWarning && waterWarningTip"
            class="px-4 pt-2 pb-4 flex items-center gap-2"
          >
            <i class="mdi mdi-alert-circle-outline text-sm flex-shrink-0 text-orange-400" />
            <p class="text-xs text-slate-500 leading-snug">{{ waterWarningTip }}</p>
          </div>
          <div v-else class="pb-3" />
        </div>

        <!-- Watering care -->
        <div class="card-glass rounded-2xl overflow-hidden">
          <div class="px-4 py-3 flex items-center gap-3 bg-sky-50">
            <i class="mdi mdi-watering-can-outline text-xl flex-shrink-0 text-sky-500" />
            <div class="flex-1 min-w-0">
              <div class="text-sm font-semibold text-sky-800">
                {{ t('detail.watering_section') }}
              </div>
              <div class="text-xs mt-0.5 text-sky-600">
                {{
                  t('detail.every_days', {
                    min: species.wateringFrequencyDays.min,
                    max: species.wateringFrequencyDays.max,
                  })
                }}
                · {{ t(`moisture.${species.idealMoisture}`) }}
              </div>
            </div>
          </div>
          <div class="px-4 pt-3 pb-4">
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ t(`species.${species.id}.moistureNotes`) }}
            </p>
          </div>
        </div>

        <!-- Light -->
        <div class="card-glass rounded-2xl overflow-hidden">
          <div class="px-4 py-3 flex items-center gap-3 bg-amber-50">
            <i class="mdi text-xl flex-shrink-0 text-amber-500" :class="lightBadgeIcon" />
            <div class="flex-1 min-w-0">
              <div class="text-sm font-semibold text-amber-800">
                {{ t('detail.light_section') }}
              </div>
              <div class="text-xs mt-0.5 text-amber-600">{{ t(`light.${species.light}`) }}</div>
            </div>
          </div>
          <div class="px-4 pt-3 pb-4">
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ t(`species.${species.id}.lightNotes`) }}
            </p>
          </div>
        </div>

        <!-- Moisture chart -->
        <div class="card-glass rounded-2xl p-4">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-6 h-6 rounded-lg bg-leaf-100 flex items-center justify-center">
              <i class="mdi mdi-chart-bell-curve-cumulative text-leaf-600 text-sm" />
            </div>
            <span class="text-sm font-medium text-slate-500">
              {{ t('detail.history_section') }}
            </span>
          </div>
          <MoistureChart v-if="plant.moistureLogs.length > 0" :logs="plant.moistureLogs" />
          <p v-else class="text-sm text-slate-500 text-center py-4">
            {{ t('detail.no_data_period') }}
          </p>
        </div>

        <!-- Watering chart -->
        <div class="card-glass rounded-2xl p-4">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-6 h-6 rounded-lg bg-sky-100 flex items-center justify-center">
              <i class="mdi mdi-chart-bar text-sky-500 text-sm" />
            </div>
            <span class="text-sm font-medium text-slate-500">
              {{ t('detail.watering_history_section') }}
            </span>
          </div>
          <WateringChart v-if="plant.wateringDates?.length" :dates="plant.wateringDates" />
          <p v-else class="text-sm text-slate-500 text-center py-4">
            {{ t('detail.no_data_period') }}
          </p>
        </div>

        <!-- Common problems -->
        <div class="card-glass rounded-2xl">
          <div class="px-4 pt-4 pb-1 flex items-center gap-2">
            <div class="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center">
              <i class="mdi mdi-alert-circle-outline text-amber-500 text-sm" />
            </div>
            <span class="text-sm font-medium text-slate-500">
              {{ t('detail.problems_section') }}
            </span>
          </div>
          <div class="px-4 pt-2 pb-4 flex flex-wrap gap-2">
            <div
              v-for="(_, i) in tm(`species.${species.id}.commonProblems`) as string[]"
              :key="i"
              class="inline-flex items-start gap-1.5 bg-amber-50 text-amber-800 text-xs font-medium px-3 py-1.5 rounded-full"
            >
              <i class="mdi mdi-alert-outline text-amber-400 text-xs mt-px flex-shrink-0" />
              {{ t(`species.${species.id}.commonProblems[${i}]`) }}
            </div>
          </div>
        </div>

        <!-- Delete -->
      </main>
    </div>
    <!-- end lifted panel -->
  </template>

  <template v-else>
    <div class="flex items-center justify-center h-screen">
      <p class="text-slate-500">{{ t('detail.not_found') }}</p>
    </div>
  </template>

  <MoistureLogSheet
    v-model="showMoistureSheet"
    :plant-name="plant?.nickname ?? ''"
    :ideal-moisture="species?.idealMoisture"
    @save="onMoistureSaved"
  />

  <WateringLogSheet
    v-model="showWateringSheet"
    :plant-name="plant?.nickname ?? ''"
    @save="onWaterSaved"
  />

  <PlantDeleteModal
    v-model="showDeleteModal"
    :plant-name="plant?.nickname ?? ''"
    @confirm="doDelete"
  />
</template>

<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import AppButton from '../components/AppButton.vue'
import MoistureChart from '../components/MoistureChart.vue'
import MoistureLogSheet from '../components/MoistureLogSheet.vue'
import PlantDeleteModal from '../components/PlantDeleteModal.vue'
import PlantStatusCard from '../components/PlantStatusCard.vue'
import WateringChart from '../components/WateringChart.vue'
import WateringLogSheet from '../components/WateringLogSheet.vue'
import { getSpeciesImageUrl } from '../composables/usePlantImage'
import { useWaterOptions } from '../composables/useWaterOptions'
import { useWaterWarning } from '../composables/useWaterWarning'
import { getSpeciesById } from '../data/plants'
import { usePlantsStore } from '../stores/plants'
import { useWaterProfileStore } from '../stores/waterProfile'
import type { MoistureLevel } from '../types'

const route = useRoute()
const router = useRouter()
const { t, tm } = useI18n()
const store = usePlantsStore()

const waterWarning = useWaterWarning(computed(() => species.value))
const waterProfileStore = useWaterProfileStore()
const { plantWaterBadges } = useWaterOptions()

const waterWarningTip = computed(() => {
  const tol = species.value?.waterHardnessTolerance
  const city = waterProfileStore.profile.cityName || t('detail.your_tap')
  if (tol === 'soft-only') return t('detail.water_tip_soft_only', { city })
  if (tol === 'soft-preferred') return t('detail.water_tip_soft_preferred', { city })
  if (tol === 'tolerant') return t('detail.water_tip_tolerant', { city })
  return null
})

const waterOptions = computed(
  () =>
    plantWaterBadges(
      species.value?.waterHardnessTolerance,
      !waterWarning.value,
      species.value?.coldWaterSensitive ?? false,
    ).value,
)

const plant = computed(() => store.getPlantById(route.params.id as string))
const species = computed(() => (plant.value ? getSpeciesById(plant.value.speciesId) : undefined))
const speciesImageUrl = computed(() =>
  plant.value ? getSpeciesImageUrl(plant.value.speciesId) : null,
)
const lastMoisture = computed(() =>
  plant.value ? store.getLastMoisture(plant.value.id) : undefined,
)
const nextWatering = computed(() =>
  plant.value ? store.getNextWateringEstimate(plant.value.id) : null,
)
const showMoistureSheet = ref(false)
const showWateringSheet = ref(false)
const { y: scrollY } = useScroll(window)
const scrolled = computed(() => scrollY.value > 120)

function onMoistureSaved(level: MoistureLevel, note?: string) {
  if (!plant.value) return
  store.logMoisture(plant.value.id, level, note)
}

function confirmWater() {
  showWateringSheet.value = true
}

function onWaterSaved(isoDate: string) {
  if (!plant.value) return
  store.logWatering(plant.value.id, isoDate)
}

const showDeleteModal = ref(false)

const lightBadgeIcon = computed(() => {
  const l = species.value?.light
  if (l === 'low') return 'mdi-weather-cloudy'
  if (l === 'indirect') return 'mdi-weather-partly-cloudy'
  if (l === 'bright-indirect') return 'mdi-white-balance-sunny'
  return 'mdi-weather-sunny-alert'
})

function confirmDelete() {
  if (!plant.value) return
  showDeleteModal.value = true
}

function doDelete() {
  if (!plant.value) return
  store.removePlant(plant.value.id)
  router.replace('/')
}
</script>
