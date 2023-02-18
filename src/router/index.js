import { createRouter, createWebHistory } from 'vue-router'
import CareInfoView from '@/views/CareInfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'care',
      component: CareInfoView
    },
  ]
})

export default router
