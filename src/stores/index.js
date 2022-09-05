// 引入pinia仓库
import { createPinia } from "pinia";
// 持久化存储pinia
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia();
pinia.use(piniaPersist)

export default pinia