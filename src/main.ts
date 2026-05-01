import '@mdi/font/css/materialdesignicons.css'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/it'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { seedMockDataIfEmpty } from './data/mockPlants'
import i18n from './i18n'
import router from './router'
import './style.css'

dayjs.locale(localStorage.getItem('locale') ?? 'en')

if (import.meta.env.DEV) {
  seedMockDataIfEmpty()
}

createApp(App).use(createPinia()).use(router).use(i18n).mount('#app')
