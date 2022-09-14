// uno.config.js
import { defineConfig } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
  transformers: [
    transformerDirective({
      varStyle: '--'
    })
  ],
})