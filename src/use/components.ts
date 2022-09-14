import { h, App } from 'vue'

export function vStyle(app: App) {
  // provides unscoped style at render time 
  // (style tag is leaky and can't bind outside the app, so its useful for <body/>)
  
  app.component('v-style', {
    render() { return h('style', this.$slots.default()) }
  });
}
