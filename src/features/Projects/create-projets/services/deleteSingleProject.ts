import axiosInstance from "@/lib/axiosInstance"

async function handleDeleteProject(id: any) {
    try {
        return await axiosInstance.delete(`/project/delete/${id}/`)
    } catch (err) {
        return err
    }
}

export default handleDeleteProject