import requestHelpers from "@/lib/requestHelpers";

const postDepartment = async (e: any) => {
    e.preventDefault()
    let formData = new FormData(e.currentTarget)

    try {
        e.currentTarget.reset()
        await requestHelpers.postData("/company/department/create/", formData);
    } catch (error) {
        error
    }
};

export default postDepartment;
