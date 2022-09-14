import { defineStore } from 'pinia'
import { getOS } from '@/use/helpers'

export default defineStore({
  id: '$store',

  state: () => ({
    platform: getOS(),
  }),

  actions: {},

  getters: {}
})