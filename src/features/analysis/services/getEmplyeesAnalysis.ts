import requestHelpers from "@/lib/requestHelpers"

const getEmployeesAnalysis = (date: any) => {
    return requestHelpers.getData(`analytics/employees/?date=${date} `)
}

export default getEmployeesAnalysis