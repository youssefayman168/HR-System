import requestHelpers from "@/lib/requestHelpers"

const deleteEmployee = (id:any) =>{
    return requestHelpers.deleteData(
        `user/delete/${id}/`
        , 
        {
            showToast:true , 
            success: 'The Employee Has Been Deleted Successfully',
            error: 'This Is An Error Occurred'
        })
}

export default deleteEmployee