import LicRequest from '../request'

export function getOrderList(type = "all") {
    return LicRequest.get({
        url: `order/list?type=${type}`
    })
}
