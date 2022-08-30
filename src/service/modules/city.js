import LicRequest from '../request'

export function getCityAll() {
    return LicRequest.get({
        url: "/city/all"
    })
}