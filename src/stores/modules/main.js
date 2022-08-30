import { defineStore } from "pinia";

const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)

const useMainStore = defineStore("main", {
    state: () => ({
        token: "",
        isLoading: true,
        startDate: startDate,
        endDate: endDate
    }),
    getters: {},
    actions: {
        changeDate(selectStartDate, selectEndDate) {
            this.startDate = selectStartDate,
            this.endDate = selectEndDate
        }
    }
})

export default useMainStore