import 'vue3-carousel/dist/carousel.css'
import './assets/css/main.css'
import 'uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import BreakpointBlock from '@/components/ui/BreakpointBlock.vue'

const app = createApp(App)
app.component('BreakpointBlock', BreakpointBlock)
app.mount('#app')
