import requestHelpers from "@/lib/requestHelpers"

const postCreateProjects = async (e: any) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget)

    try {
        e.currentTarget.reset()
        await requestHelpers.postData('/project/create/', formData)
    } catch (error) {
        error
    }
}

export default postCreateProjects