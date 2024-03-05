import requestHelpers from "@/lib/requestHelpers"

const postPosition = async (e: any) => {
    e.preventDefault()
    let formData = new FormData(e.currentTarget)

    try {
        e.currentTarget.reset()
        await requestHelpers.postData('/company/position/create/', formData)
    } catch (error) {
        error
    }
}

export default postPosition