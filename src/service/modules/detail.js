import LicRequest from '../request'

export function getDetails(houseId) {
    return LicRequest.get({
        url: "/detail/infos",
        params: {
            houseId
        }
    })
}