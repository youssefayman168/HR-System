import requestHelpers from "@/lib/requestHelpers";

const resetPassword = (otpCode: string, email: string, newPassword: string) => {
  return requestHelpers.postData(
    "/user/reset-password/reset/",
    {
      otp_code: otpCode,
      email,
      new_password: newPassword,
    },
    {
      showToast: true,
      success: (data) => data.message,
      error: (e) => {
        console.log(e);
        return e.message;
      },
    }
  );
};

export default resetPassword;
