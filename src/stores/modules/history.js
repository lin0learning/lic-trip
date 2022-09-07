import { defineStore } from "pinia";
import { getHistoryList } from "@/service";

const useHistoryStore = defineStore("history", {
    state: () => ({
        historyList: []
    }),
    getters: {},
    actions: {
        async getHistoryData() {
            const res = await getHistoryList()
            this.historyList = res.data.data.items || []
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                storage: sessionStorage,
                paths: ['historyList']
            }
        ]
    }
})
export default useHistoryStore