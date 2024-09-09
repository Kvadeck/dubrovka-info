import { defineConfig, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetUno(),
    presetRemToPx(),
  ],
  theme: {
    breakpoints: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
      xl: '1500px'
    }
  }
})
