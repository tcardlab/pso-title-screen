import { createApp, h, App } from 'vue'
import './style.scss'
import AppEl from './App.vue'
import router from './pages/router'

const app = createApp(AppEl)

function vStyle(app: App<Element>) {
  // provides unscoped style at render time 
  // (style tag is leaky and can't bind outside the app, so its useful for <body/>)
  
  app.component('v-style', {
    render() { return h('style', this.$slots.default()) }
  });
}

vStyle(app)

app.use(router)

app.mount('#app')
