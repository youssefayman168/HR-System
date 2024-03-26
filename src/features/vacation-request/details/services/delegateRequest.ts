import requestHelpers from "@/lib/requestHelpers";

const delegateRequest = (requestId: any, hodID: any) => {
  return requestHelpers.putData(
    `/vacation-requests/delegate/${requestId}/`,
    { delegate_to: hodID },
    {
      showToast: true,
      success: "The Request Is Referred To Another HOD Successfully",
      error: "There Is An Error Occurred",
    }
  );
};

export default delegateRequest;
