import requestHelpers from "@/lib/requestHelpers"

const acceptRequest = (id: any) => {
    return requestHelpers.putData(`/request/accept/${id}/`, {}, { success: 'The Request Is Accepted Successfully', showToast: true })
}

export default acceptRequest