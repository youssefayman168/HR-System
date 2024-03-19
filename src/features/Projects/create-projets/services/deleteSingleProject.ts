import requestHelpers from "@/lib/requestHelpers"

async function handleDeleteProject(id: any) {
    return requestHelpers.deleteData(`/project/delete/${id}/`,
        {
            showToast: true,
            success: 'The Project Is Deleted Successfully',
            error: "The Project Doesn't Deleted"
        })
}

export default handleDeleteProject