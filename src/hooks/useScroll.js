import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from 'underscore'

export default function useScroll(elRef) {
    let el = window

    const isReachBottom = ref(false)

    const clientHeight = ref(0)
    const scrollHeight = ref(0)
    const scrollTop = ref(0)

    //  防抖/节流
    const scrollListenerHandler = throttle(() => {
        // console.log("正在滚动");
        if (el === window) {
            // 元素可视区高度
            clientHeight.value = document.documentElement.clientHeight
            // 滚动条滚动 超出网页顶部的位置
            scrollTop.value = document.documentElement.scrollTop
            // 整个文档的高度
            scrollHeight.value = document.documentElement.scrollHeight
        } else {
            clientHeight.value = el.clientHeight
            scrollTop.value = el.scrollTop
            scrollHeight.value = el.scrollHeight
        }
        

        if (clientHeight.value + scrollTop.value >= scrollHeight.value ) {
            console.log("滚动到底部");
            isReachBottom.value = true
        }
    }, 100)

    onMounted(() => {
        if (elRef) {
            el = elRef.value
        }
        el.addEventListener("scroll", scrollListenerHandler)
    })

    onUnmounted(() => {
        el.removeEventListener("scroll", scrollListenerHandler)
    })
    return { isReachBottom, scrollTop, clientHeight, scrollHeight }
}