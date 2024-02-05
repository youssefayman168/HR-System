import requestHelpers from "@/lib/requestHelpers";

const logout = (refresh: any) => {
  return requestHelpers.postData("/user/logout/", {
    refresh,
  });
};

const globalServices = {
  logout,
};

export default globalServices;
