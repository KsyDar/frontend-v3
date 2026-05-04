import { createApp } from 'vue'
import { modules } from "@/modules";

import { createModules } from "@/platform/plugins";
import router from "@/platform/router";
import store from "@/platform/store";

import '@/assets/styles/main.scss'
import App from './App.vue'

createApp(App)
  .use(store)
  .use(createModules(modules, router))
  .use(router)
  .mount('#app')
