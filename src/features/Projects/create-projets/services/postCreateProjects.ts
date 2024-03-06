import requestHelpers from "@/lib/requestHelpers"

const postCreateProjects = async (data: any) => {

    let formData = new FormData()
    try {
        formData.append('project_name', data.project_name)
        formData.append('start_date', data.start_date)
        formData.append('scope', data.scope)
        formData.append('location', data.location)
        formData.append('company', data.company)
        formData.append('plan', data.plan)
        formData.append('budget', data.budget)
        formData.append('work_hours', data.work_hours)
        formData.append('status', data.status)
        // e.currentTarget.reset()
        await requestHelpers.postData('/project/create/', formData)
    } catch (error) {
        error
    }
}

export default postCreateProjects