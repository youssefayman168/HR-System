import requestHelpers from "@/lib/requestHelpers";

const login = (data: any) => {
  return requestHelpers.postData("/user/login/", data, {
    showToast: true,
    success: (data) => data.message,
    error: (error) => error.message[0],
  });
};

export default login;
