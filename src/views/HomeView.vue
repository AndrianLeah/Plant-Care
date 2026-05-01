<template>
  <!-- App bar -->
  <header class="relative px-6 pt-10 pb-20 overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-transparent pointer-events-none"
    />
    <p class="text-sm font-medium text-slate-500 mb-1 tracking-wide relative">
      {{ t('home.greeting', { time: t('home.time_' + greeting) }) }}
    </p>
    <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 relative">
      {{ t('home.title') }}
    </h1>
  </header>

  <main class="px-5 pt-2 -mt-12">
    <!-- Empty state -->
    <div
      v-if="store.sortedPlants.length === 0"
      class="flex flex-col items-center justify-center text-center py-20"
    >
      <i class="mdi mdi-sprout text-leaf-300 mb-4" style="font-size: 4rem" />
      <h2 class="text-lg font-bold text-slate-900 mb-1">{{ t('home.empty_title') }}</h2>
      <p class="text-sm text-slate-500 mb-8 max-w-[220px]">{{ t('home.empty_body') }}</p>
    </div>

    <!-- Responsive grid: 1 col on tiny screens, 2 col from ~300px per card -->
    <!-- Responsive grid: dynamic columns, add button is last cell -->
    <div
      class="grid gap-3 mb-3"
      style="grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))"
    >
      <PlantCard v-for="plant in store.sortedPlants" :key="plant.id" :plant="plant" />

      <!-- Add plant cell -->
      <button
        class="card-glass rounded-2xl flex flex-col items-center justify-center gap-2 py-10 text-slate-400 hover:text-emerald-600 hover:bg-white/50 transition-all active:scale-[0.98] group border-2 border-dashed border-white/70 hover:border-emerald-300/60 bg-transparent"
        @click="$router.push('/add')"
      >
        <div
          class="w-10 h-10 rounded-full border-2 border-dashed border-slate-300 group-hover:border-emerald-400 flex items-center justify-center transition-colors"
        >
          <i class="mdi mdi-plus text-xl" />
        </div>
        <span class="text-sm font-semibold">{{ t('home.add_plant') }}</span>
      </button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import PlantCard from '../components/PlantCard.vue'
import { usePlantsStore } from '../stores/plants'

const { t } = useI18n()
const store = usePlantsStore()

const greeting = computed(() => {
  const h = new Date().getHours()
  if (h < 12) return 'morning'
  if (h < 17) return 'afternoon'
  return 'evening'
})
</script>
