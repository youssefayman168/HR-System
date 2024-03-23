import requestHelpers from "@/lib/requestHelpers";

const getVacationRequests = () => {
  return requestHelpers.getData("/vacation-requests/get-all/");
};

export default getVacationRequests;
