import { createApp } from 'vue'
import { modules } from "@/modules";

import { createModules } from "@/app/plugins";
import router from "@/app/router";
import store from "@/app/store";

import '@/shared/assets/styles/main.scss';
import App from './App.vue';

createApp(App)
  .use(store)
  .use(createModules(modules, router))
  .use(router)
  .mount('#app')
