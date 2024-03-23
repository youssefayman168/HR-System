import requestHelpers from "@/lib/requestHelpers";

const getCompanies = () => {
  return requestHelpers.getData("/company/get/");
};

export default getCompanies;
