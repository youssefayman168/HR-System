import requestHelpers from "@/lib/requestHelpers"


const postCompany = (action: any, data: any) => {

    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('image', data.image)

    return requestHelpers.postData('/company/create/', formData, { showToast: true, success: 'The Company Is Created Successfully', error: "The Company Could'nt Created" }).then(action)
}

export default postCompany