import { createRouter, createWebHistory } from 'vue-router'
import Start from './Start'
import End from './End'
import Middle from './Middle'

const routes = [
  { path: '/', component: Start },
  { path: '/tsx', component: End },
  { path: '/tsx-setup', component: Middle }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
