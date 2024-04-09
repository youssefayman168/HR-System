import requestHelpers from "@/lib/requestHelpers";

const getHODVacations = () => {
  return requestHelpers.getData("/vacation-requests/hod/");
};

export default getHODVacations;
