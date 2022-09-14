/*   Init Pinia   */
import { createPinia } from 'pinia'

import { markRaw } from 'vue'
import { router } from '../pages/router'

const pinia = createPinia()

pinia.use(({ store }) => {
  // provides router as universal property to all stores
  store.router = markRaw(router)
})

export default pinia
