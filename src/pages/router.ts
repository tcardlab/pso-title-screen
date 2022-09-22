import { createRouter, createWebHistory } from 'vue-router'
import PSO from './PSO'

const routes = [
  { path: '/', component: PSO }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
