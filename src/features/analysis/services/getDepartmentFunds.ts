import requestHelpers from "@/lib/requestHelpers"

const getDepartmentFunds = () => {
    return requestHelpers.getData('analytics/departments/salary/')
}

export default getDepartmentFunds