import requestHelpers from "@/lib/requestHelpers";

const getEmployees = () => {
  return requestHelpers.getData("/user/get-all/");
};

export default getEmployees;
