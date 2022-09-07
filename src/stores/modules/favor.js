import { defineStore } from "pinia";
import { getFavorList, } from "@/service";

const useFavorStore = defineStore("favor", {
    state: () => ({
        favorList: []
    }),
    getters: {},
    actions: {
        async getFavorData() {
            const res = await getFavorList()
            this.favorList = res.data.data.items || []
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                storage: sessionStorage,
                paths: ['favorList']
            }
        ]
    }
})
export default useFavorStore