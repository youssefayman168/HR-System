import requestHelpers from "@/lib/requestHelpers";

const postDepartment = async (e: any) => {
    e.preventDefault()
    let formData = new FormData(e.currentTarget)
    const head = formData.get('head')
    const name = formData.get('name')

    try {
        await requestHelpers.postData("/company/department/create/", formData);
        e.currentTarget.reset()
    } catch (error) {
        error
    }
};

export default postDepartment;
