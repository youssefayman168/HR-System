import requestHelpers from "@/lib/requestHelpers"

const deleteNotification = (id: any) => {
    return requestHelpers.deleteData(`notification/delete/${id}/`)
}

export default deleteNotification