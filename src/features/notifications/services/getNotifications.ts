import requestHelpers from "@/lib/requestHelpers"

const getNotifications = (type: any, date: any) => {
    return requestHelpers.getData(`notification/all/?type=${type}&date=${date}`)
}

export default getNotifications