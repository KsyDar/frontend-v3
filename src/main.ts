import { createApp } from 'vue'
import { modules } from "@/modules";

import { createModules } from "@/app/plugins";
import router from "@/app/router";
import store from "@/app/store";

import '@/shared/assets/styles/main.scss';
import App from './App.vue';

import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyTheme = definePreset(Aura, {
  semantic: {
    // Основная палитра приложения
    primary: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#344DD3',
      700: '#1E37C3',
      800: '#3730a3',
      900: '#312e81',
      950: '#1e1b4b'
    },

    // Цвета поверхностей
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#9a9fa3',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#000000'
        }
      },
    },

    focusRing: {
      width: '2px',
      style: 'solid',
      color: '{primary.500}',
      offset: '2px'
    }
  },
});

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: MyTheme,
      options: {
        prefix: 'p',
        darkModeSelector: '.app-dark',
        cssLayer: {
          name: 'primevue',
          // Чтобы стили приложения были приоритетнее стилей primevue
          order: 'primevue, app-styles'
        }
      }
    }
  })
  .use(store)
  .use(createModules(modules, router))
  .use(router)
  .mount('#app')
