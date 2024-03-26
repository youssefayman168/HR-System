import requestHelpers from "@/lib/requestHelpers"

const getProfilePayslips = () => {
    return requestHelpers.getData('payslips/get/last/')
}

export default getProfilePayslips