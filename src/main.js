import './assets/main.css'
import store from "./store";
import router from "@/router/index.js";
import i18n from "./localization/localization";

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .use(store)
    .use(router)
    .use(i18n)
    .mount('#app');
