import LicRequest from '../request'

export function getHomeHotSuggests() {
    return LicRequest.get({
        url: "/home/hotSuggests"
    })
}

export function getHomeCategories() {
    return LicRequest.get({
        url: "/home/categories"
    })
}

export function getHomeContentRooms(currentPage) {
    return LicRequest.get({
        url: "/home/houselist",
        params: {
            page: currentPage
        }
    })
}