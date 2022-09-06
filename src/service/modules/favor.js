import LicRequest from '../request'

export function getFavorList() {
    return LicRequest.get({
        url: "/favor/list"
    });
}
export function getHistoryList() {
    return LicRequest.get({
        url: "/favor/history"
    })
}