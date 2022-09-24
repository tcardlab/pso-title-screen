import { createRouter, createWebHistory } from 'vue-router'
import PSO from './PSO'
import JSFree from './JSFree'
import Title from '@/components/title'
let { BASE_URL } = import.meta.env

const routes = [
  { path: '/', component: PSO },
  { path: '/PSO', component: PSO },
  { path: '/JSFree', component: JSFree },
  { path: '/JS-Free', component: JSFree },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: Title },
  { path: '/:pathMatch(.*)', name: 'bad-not-found', component: Title },
]

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
})

export default router