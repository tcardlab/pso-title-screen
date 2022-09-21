/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />

declare module 'howler'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// allows import of index.vue from folder level
declare module "*" {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}