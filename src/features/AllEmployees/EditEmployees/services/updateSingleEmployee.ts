import requestHelpers from "@/lib/requestHelpers"

const updateSingleEmployee = (id: any, data: any) => {
    return requestHelpers.putData(
        `user/update/${id}/`,
        data,
        {
            showToast: true,
            success: 'The Employee Data Is Updated',
            error: "The Employee Data Isn't Updated"
        })
}

export default updateSingleEmployee