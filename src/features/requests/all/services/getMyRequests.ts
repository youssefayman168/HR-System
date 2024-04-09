import requestHelpers from "@/lib/requestHelpers";

const getMyRequests = () => {
  return requestHelpers.getData("/request/get/me/");
};

export default getMyRequests;
