import { createRouter, createWebHashHistory } from 'vue-router'
import AddPlantView from '../views/AddPlantView.vue'
import CatalogView from '../views/CatalogView.vue'
import HomeView from '../views/HomeView.vue'
import PlantDetailView from '../views/PlantDetailView.vue'
import SettingsView from '../views/SettingsView.vue'
import WaterGuideView from '../views/WaterGuideView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { tabIndex: 0 } },
    {
      path: '/plant/:id',
      name: 'plant-detail',
      component: PlantDetailView,
      meta: { overlay: true },
    },
    { path: '/add', name: 'add-plant', component: AddPlantView, meta: { overlay: true } },
    { path: '/catalog', name: 'catalog', component: CatalogView, meta: { tabIndex: 1 } },
    { path: '/water-guide', name: 'water-guide', component: WaterGuideView, meta: { tabIndex: 2 } },
    { path: '/settings', name: 'settings', component: SettingsView, meta: { tabIndex: 3 } },
  ],
})

export default router
