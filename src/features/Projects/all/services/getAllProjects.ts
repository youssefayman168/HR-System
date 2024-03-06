import requestHelpers from "@/lib/requestHelpers"

const getAllProjects = () => {
    return requestHelpers.getData('/project/get/all/')
}

export default getAllProjects