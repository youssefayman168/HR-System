import requestHelpers from "@/lib/requestHelpers"

const getChartData = () => {
    return requestHelpers.getData('analytics/yearly-worked-hours/')
}

export default getChartData