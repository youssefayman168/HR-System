import requestHelpers from "@/lib/requestHelpers"

const rejectRequest = (id: any) => {
    return requestHelpers.putData(`/request/reject/${id}/`, {}, { success: 'The Request Is Rejected Successfully', showToast: true })
}

export default rejectRequest