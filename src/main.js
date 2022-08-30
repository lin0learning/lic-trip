import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import router from './router'

import "normalize.css"
import "./assets/css/index.css"
import { List } from 'vant'

createApp(App).use(pinia).use(router).use(List).mount('#app')
