import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import { resolve } from "path"
// import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS(),
    Components({resolvers: []}),
    vue({ reactivityTransform: true }),
    // Inspect()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': resolve(__dirname, 'src') 
    },
  }
})
