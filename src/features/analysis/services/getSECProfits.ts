import requestHelpers from "@/lib/requestHelpers"

const getSECProfits = () => {
    return requestHelpers.getData('analytics/sec/profits/')
}

export default getSECProfits