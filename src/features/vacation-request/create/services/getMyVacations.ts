import requestHelpers from "@/lib/requestHelpers";

const getMyVacations = () => {
  return requestHelpers.getData("/vacation-requests/me/");
};

export default getMyVacations;
