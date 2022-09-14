import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { router } from './pages/router'
import pinia from './stores'
import 'uno.css'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
