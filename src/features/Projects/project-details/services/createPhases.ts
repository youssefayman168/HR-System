import requestHelpers from "@/lib/requestHelpers"

const createPhases = (id: any) => {
    return requestHelpers.postData(`/project/phase/create/${id}/`, {}, { showToast: true, success: 'The Phase Is Created Successfully', error: 'The Phase Does not Created' },)
}

export default createPhases