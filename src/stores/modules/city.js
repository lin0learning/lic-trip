import { defineStore } from "pinia";
import { getCityAll } from "@/service";

const useCityStore = defineStore("city", {
    state: () => ({
        allCities: {},
        currentCity: {
            cityName: "成都"
        }
    }),
    getters: {

    },
    actions: {
        async fetchAllCitiesData() {
            const res = await getCityAll()
            this.allCities = res.data
        }
    },
    persist: {
        enabled: true,
        // 自定义存储方法, 默认sessionStorage
        strategies: [
            {
                storage: localStorage,
                // 指定要持久化的数据, 默认当前所有 state 都会进行缓存, 可通过 paths 指定要持久化的字段
                paths: ['allCities']
            }
        ]
    }
})

export default useCityStore