import requestHelpers from "@/lib/requestHelpers";

const getHrRequests = () => {
  return requestHelpers.getData("/request/get/hr-requests/");
};

export default getHrRequests;
