// src/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import router from './router'
import './styles/style.css'

import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'

const CustomAura = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#eef2ff',
      100: '#d9e2ff',
      200: '#b6c4ff',
      300: '#8aa0ff',
      400: '#5f73ff',
      500: '#4c63ff',
      600: '#3f53e6',
      700: '#3343bf',
      800: '#293597',
      900: '#212c78',
      950: '#171f57',
    },
  },
  components: {
    button: {
      root: {
        borderRadius: '10px',
        secondary: {
          background: '#171f57',
        },
      },
    },
  },
})

const app = createApp(App)
app.use(createPinia())
app.use(PrimeVue, {
  theme: {
    preset: CustomAura,
    options: { darkModeSelector: false },
  },
})

app.use(router)
app.mount('#app')
