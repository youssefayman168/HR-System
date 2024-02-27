import requestHelpers from "@/lib/requestHelpers";

const createEmployee = (data: any) => {
  return requestHelpers.postData("/user/create/", data);
};

export default createEmployee;
