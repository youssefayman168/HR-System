import requestHelpers from "@/lib/requestHelpers";

const logout = (refresh: any) => {
  return requestHelpers.postData("/user/logout/", {
    refresh,
  });
};

const getPersonalInfo = () => {
  return requestHelpers.getData("/user/profile/");
};

const getSubtaskDetails = (subtaskID: number) => {
  return requestHelpers.getData(`/task/sub-task/get/${subtaskID}/`);
};

const globalServices = {
  logout,
  getPersonalInfo,
  getSubtaskDetails,
};

export default globalServices;
