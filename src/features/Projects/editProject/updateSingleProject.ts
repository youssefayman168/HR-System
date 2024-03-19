import requestHelpers from "@/lib/requestHelpers"

const updateProjects = async (id: any, data: any) => {
    return requestHelpers.putData(`/project/update/${id}/`,
        data,
        {
            showToast: true,
            error: "Task Doesn't Updated",
            success: 'Task Updated Successfully'
        })
}

export default updateProjects