import requestHelpers from "@/lib/requestHelpers"

const referHR = (requestId: any, hrId: any, redirect: any) => {
    return requestHelpers.putData(`/request/delegate/${requestId}/`, { delegate_to: hrId }, { showToast: true, success: 'The Request Is Referred To Another HR Successfully', error: 'There Is An Error Occurred' }).then(()=> redirect)
}

export default referHR