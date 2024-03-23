import requestHelpers from "@/lib/requestHelpers";

const approveVacationRequest = (id: any) => {
  return requestHelpers.putData(
    `/vacation-requests/disapprove/${id}/`,
    {},
    { success: "The Request Is Rejected Successfully", showToast: true }
  );
};

export default approveVacationRequest;
