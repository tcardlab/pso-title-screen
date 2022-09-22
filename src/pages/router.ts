import { createRouter, createWebHistory } from 'vue-router'
import PSO from './PSO'
import JSFree from './JSFree'

const routes = [
  { path: '/', component: PSO },
  { path: '/PSO', component: PSO },
  { path: '/JSFree', component: JSFree },
  { path: '/JS-Free', component: JSFree }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
