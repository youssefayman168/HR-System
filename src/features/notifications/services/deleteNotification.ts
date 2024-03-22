import requestHelpers from "@/lib/requestHelpers"

const deleteNotification = (id: any) => {
    return requestHelpers.deleteData(`notification/delete/${id}/`, { showToast: true, success: 'The Notification Is Deleted Successfully', error: 'The Notification Does Not Deleted' })
}

export default deleteNotification