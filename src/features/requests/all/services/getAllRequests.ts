import requestHelpers from "@/lib/requestHelpers"

const getAllRequests = () => {
    return requestHelpers.getData('/request/get/')
}

export default getAllRequests