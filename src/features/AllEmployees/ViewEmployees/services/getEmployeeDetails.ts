import requestHelpers from "@/lib/requestHelpers"

const getEmployeeDetails = (id: any) => {
    return requestHelpers.getData(`/user/get/${id}/`)
}

export default getEmployeeDetails