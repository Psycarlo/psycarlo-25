import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import OnePage from '../views/OnePage.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/one',
    name: 'One',
    component: OnePage
  }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
