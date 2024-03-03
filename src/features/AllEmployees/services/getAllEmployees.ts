import requestHelpers from "@/lib/requestHelpers";

const getAllEmployees = () => {
  return requestHelpers.getData("/user/get-all/");
};

export default getAllEmployees;