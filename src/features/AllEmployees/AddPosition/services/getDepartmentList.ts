import requestHelpers from "@/lib/requestHelpers"

const getDepartmentList = () => {
    return requestHelpers.getData('/company/department/get/')
}

export default getDepartmentList