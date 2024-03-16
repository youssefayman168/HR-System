import requestHelpers from "@/lib/requestHelpers"

const getRequestDetails = (id: any) => {
    return requestHelpers.getData(`/request/get/request/${id}/`)
}

export default getRequestDetails