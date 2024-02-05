import requestHelpers from "@/lib/requestHelpers";

const login = (data: any) => {
  return requestHelpers.postData("/user/login/", data);
};

export default login;
