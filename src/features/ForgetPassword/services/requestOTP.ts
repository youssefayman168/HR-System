import requestHelpers from "@/lib/requestHelpers";

const requestOTP = (email: string) => {
  return requestHelpers.postData(
    "/user/reset-password/send-otp/",
    {
      email,
    },
    {
      showToast: true,
      success: (data) => data.message,
      error: (e) => e,
    }
  );
};

export default requestOTP;
