import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

import { resolve } from "path"
// import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dirs: ['src/components', 'src/pages'],
      extensions: ['vue','ts'],
      dts: './components.d.ts',
    }),
    vue({ reactivityTransform: true }),
    Unocss({
      presets: [presetAttributify(), presetUno()]
    })
    // Inspect()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': resolve(__dirname, 'src') 
    },
  }
})
