import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
  ],
  theme: {
    breakpoints: {
      sm: '480px',
      md: '768px',
      lg: '1280px',
    },
  },
})
