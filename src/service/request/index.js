import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config"
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore()

class LicRequest{
    constructor(baseURL, timeout=6000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }
    request(config) {
        mainStore.isLoading = true
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
                mainStore.isLoading = false
            }).catch(err => {
                reject(err)
                mainStore.isLoading = false
            })
        })
    }
    get(config) {
        return this.request({...config, method: "get"})
    }
    post(config) {
        return this.request({...config, method: "post"})
    }
}

export default new LicRequest(BASE_URL, TIMEOUT)