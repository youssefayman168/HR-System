import requestHelpers from "@/lib/requestHelpers";

const logout = (refresh: any) => {
  return requestHelpers.postData("/user/logout/", {
    refresh,
  });
};

const getPersonalInfo = () => {
  return requestHelpers.getData("/user/profile/");
};

const globalServices = {
  logout,
  getPersonalInfo,
};

export default globalServices;
