import requestHelpers from "@/lib/requestHelpers";

const getVacationRequest = (requestID: number) => {
  return requestHelpers.getData(`/vacation-requests/get-request/${requestID}/`);
};

export default getVacationRequest;
