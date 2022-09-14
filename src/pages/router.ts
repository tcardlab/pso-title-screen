import { createRouter, createWebHistory } from 'vue-router'
import Start from './Start'

const routes = [
  { path: '/', component: Start },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
