import { createRouter, createWebHistory } from 'vue-router'
import Start from './Start'
import End from './End'
import Middle from './Middle'
import PSO from './PSO'

const routes = [
  { path: '/', component: Start },
  { path: '/PSO', component: PSO },
  { path: '/PSO-bg', component: ()=>import('./PSO/bgText.vue') },
  { path: '/tsx', component: End },
  { path: '/tsx-setup', component: Middle }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
