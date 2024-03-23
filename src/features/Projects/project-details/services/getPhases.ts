import requestHelpers from "@/lib/requestHelpers"

const getPhases = (id: any) => {
    return requestHelpers.getData(`project/phase/get/${id}/`)
}

export default getPhases