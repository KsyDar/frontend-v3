import { createApp } from 'vue'
import { modules } from "@/modules";

import { createModules } from "@/app/plugins";
import router from "@/app/router";
import store from "@/app/store";

import '@/shared/assets/styles/main.css';
import App from './App.vue';

import PrimeVue from 'primevue/config';

createApp(App)
  .use(PrimeVue, {
    unstyled: true
  })
  .use(store)
  .use(createModules(modules, router))
  .use(router)
  .mount('#app')
