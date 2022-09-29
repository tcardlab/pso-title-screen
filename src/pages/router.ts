import { createRouter, createWebHistory } from 'vue-router'
let { BASE_URL } = import.meta.env

import PSO from './PSO'
import JSFree from './JSFree'
import Title from '@/components/title'
import Editor from './Editor'
import Sigil from './Sigil'
import ViewBox from './ViewBox'

const routes = [
  { path: '/', component: PSO },
  { path: '/PSO', component: PSO },
  { path: '/JSFree', component: JSFree },
  { path: '/JS-Free', component: JSFree },
  { path: '/editor', component: Editor },
  { path: '/sigil', component: Sigil },
  { path: '/viewbox', component: ViewBox },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: Title },
  { path: '/:pathMatch(.*)', name: 'bad-not-found', component: Title },
]

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes
})

export default router