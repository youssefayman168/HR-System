import requestHelpers from "@/lib/requestHelpers"

const getTotalTasks = () => {
    return requestHelpers.getData('analytics/current-user-insights/')
}

export default getTotalTasks