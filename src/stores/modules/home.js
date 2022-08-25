import { defineStore } from "pinia";
import { getHomeHotSuggests, getHomeCategories, getHomeContentRooms } from '@/service'

export const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],
        homeContent: [],
        currentPage: 1
    }),
    getters: {},
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data
        },
        async fetchCategories() {
            const res = await getHomeCategories()
            this.categories = res.data
        },
        async fetchHomeRoomsData() {
            const res = await getHomeContentRooms(this.currentPage)
            this.homeContent.push(...res.data)
            this.currentPage++
        }
    }
})
