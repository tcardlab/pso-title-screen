import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

import {copyFile} from 'fs' 
import { resolve } from "path"
// import Inspect from 'vite-plugin-inspect'

const add404 = ()=> ({
  // move to build utils helper l8r
  name: 'add404',
  closeBundle() {
    copyFile('dist/index.html', 'dist/404.html', (err) => {
      if (err) throw err;
    })
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dirs: ['src/components', 'src/pages'],
      extensions: ['vue','ts'],
      dts: './components.d.ts',
    }),
    vue({ reactivityTransform: true }),
    vueJsx({}),
    // Inspect(),
    add404()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': resolve(__dirname, 'src') 
    },
  }
})
