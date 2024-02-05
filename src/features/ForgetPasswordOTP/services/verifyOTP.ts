import requestHelpers from "@/lib/requestHelpers";

const verifyOTP = (otp: string, email: string) => {
  return requestHelpers.postData("/user/reset-password/verify-otp/", {
    otp,
    email,
  });
};

export default verifyOTP;
