import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import router from './router'
import VueLazyload from 'vue-lazyload'

import "normalize.css"
import "./assets/css/index.css"
import { List } from 'vant'


createApp(App).use(pinia).use(router).use(List).use(VueLazyload, {
    preLoad: 1.3,
    // error: 'dist/error.jpg',
    // loading: 'dist/loading.jpg',
}).mount('#app')
