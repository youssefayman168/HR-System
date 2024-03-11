import requestHelpers from "@/lib/requestHelpers"

const getEditProjectData = (id: any) => {
    try {
        return requestHelpers.getData(`/project/get/project/${id}/`)
    } catch (error) {
        return error
    }
}

export default getEditProjectData