<template>
  <!-- Decorative header -->
  <header class="relative px-6 pt-10 pb-20 overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-transparent pointer-events-none"
    />
    <h1 class="text-4xl font-bold text-slate-900 relative">{{ t('settings.title') }}</h1>
    <p class="text-sm font-medium text-slate-500 mt-1 relative">{{ t('settings.subtitle') }}</p>
  </header>

  <main class="px-5 pt-2 space-y-4 -mt-12">
    <!-- Language -->
    <section class="card-glass rounded-2xl overflow-hidden">
      <div class="px-4 pt-3 pb-2">
        <p class="text-xs font-semibold text-slate-500">
          {{ t('settings.section_general') }}
        </p>
      </div>
      <div class="px-4 py-4">
        <p class="text-sm font-semibold text-slate-700 mb-3">
          <i class="mdi mdi-translate mr-2 text-slate-400" />
          {{ t('settings.language') }}
        </p>
        <div class="flex gap-2">
          <AppButton
            v-for="lang in LANGUAGES"
            :key="lang.code"
            variant="custom"
            class="flex-1 py-3 text-sm font-semibold border-2 gap-2"
            :class="
              locale === lang.code
                ? 'border-pink-400 bg-pink-50 text-pink-900'
                : 'border-slate-200 bg-white/60 text-slate-500 hover:border-pink-200'
            "
            @click="setLocale(lang.code)"
          >
            <i class="mdi mdi-check text-pink-500" v-if="locale === lang.code" />
            {{ lang.label }}
          </AppButton>
        </div>
      </div>
    </section>

    <!-- Data: export / import -->
    <section class="card-glass rounded-2xl overflow-hidden">
      <div class="px-4 pt-3 pb-2">
        <p class="text-xs font-semibold text-slate-500">
          {{ t('settings.section_data') }}
        </p>
      </div>
      <div class="divide-y divide-slate-100">
        <!-- Export -->
        <div class="px-4 py-4 flex items-center justify-between gap-4">
          <div class="min-w-0">
            <p class="text-sm font-semibold text-slate-700">
              <i class="mdi mdi-download-outline mr-1.5 text-slate-400" />
              {{ t('settings.export_title') }}
            </p>
            <p class="text-xs text-slate-500 mt-0.5">{{ t('settings.export_desc') }}</p>
          </div>
          <AppButton variant="glass" color="pink" size="sm" @click="plantsStore.exportPlants()">
            <i class="mdi mdi-download text-sm" />
            {{ t('settings.export_btn') }}
          </AppButton>
        </div>
        <!-- Import -->
        <div class="px-4 py-4 flex items-center justify-between gap-4">
          <div class="min-w-0">
            <p class="text-sm font-semibold text-slate-700">
              <i class="mdi mdi-upload-outline mr-1.5 text-slate-400" />
              {{ t('settings.import_title') }}
            </p>
            <p class="text-xs text-slate-500 mt-0.5">{{ t('settings.import_desc') }}</p>
          </div>
          <AppButton variant="glass" color="pink" size="sm" @click="triggerImport">
            <i class="mdi mdi-upload text-sm" />
            {{ t('settings.import_btn') }}
          </AppButton>
          <input
            ref="fileInput"
            type="file"
            accept=".json,application/json"
            class="hidden"
            @change="handleImport"
          />
        </div>
        <!-- Feedback message -->
        <Transition name="fade">
          <div
            v-if="importMessage"
            class="px-4 py-3 flex items-center gap-2 text-xs font-medium"
            :class="importError ? 'text-red-500' : 'text-emerald-600'"
          >
            <i
              class="mdi text-sm"
              :class="importError ? 'mdi-alert-circle-outline' : 'mdi-check-circle-outline'"
            />
            {{ importMessage }}
          </div>
        </Transition>
      </div>
    </section>

    <!-- About -->
    <section class="card-glass rounded-2xl overflow-hidden">
      <div class="px-4 pt-3 pb-2">
        <p class="text-xs font-semibold text-slate-500">
          {{ t('settings.section_about') }}
        </p>
      </div>
      <div class="divide-y divide-slate-100">
        <div class="px-4 py-3 flex items-center justify-between">
          <span class="text-sm text-slate-700">{{ t('settings.app_name') }}</span>
          <span class="text-sm font-semibold text-slate-900">Plant Care</span>
        </div>
        <div class="px-4 py-3 flex items-center justify-between">
          <span class="text-sm text-slate-700">{{ t('settings.version') }}</span>
          <span class="text-sm font-semibold text-slate-500">1.0.0</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppButton from '../components/AppButton.vue'
import { usePlantsStore } from '../stores/plants'

const { t, locale } = useI18n()
const plantsStore = usePlantsStore()

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'it', label: 'Italiano' },
]

function setLocale(code: string) {
  locale.value = code
  dayjs.locale(code)
  localStorage.setItem('locale', code)
}

// ── Import / Export ─────────────────────────────────────────────────────────

const fileInput = ref<HTMLInputElement | null>(null)
const importMessage = ref('')
const importError = ref(false)
let messageTimer: ReturnType<typeof setTimeout> | null = null

function triggerImport() {
  fileInput.value?.click()
}

function handleImport(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return // Reset input so same file can be re-selected
  ;(event.target as HTMLInputElement).value = ''

  if (!confirm(t('settings.import_confirm'))) return

  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const count = plantsStore.importPlants(e.target?.result as string)
      showMessage(t('settings.import_success', { count }), false)
    } catch {
      showMessage(t('settings.import_error'), true)
    }
  }
  reader.readAsText(file)
}

function showMessage(msg: string, isError: boolean) {
  importMessage.value = msg
  importError.value = isError
  if (messageTimer) clearTimeout(messageTimer)
  messageTimer = setTimeout(() => {
    importMessage.value = ''
  }, 4000)
}
</script>
