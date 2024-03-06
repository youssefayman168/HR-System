import requestHelpers from "@/lib/requestHelpers"

const getSelectedCompanies = () => {
    return requestHelpers.getData('company/get/')
}

export default getSelectedCompanies