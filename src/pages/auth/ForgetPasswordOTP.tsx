import AuthLayout from "../../layouts/AuthLayout";
import "@/assets/css/ForgetPasswordOTP.css";
import OTPHeader from "@/features/ForgetPasswordOTP/components/OTPHeader";
import OTPForm from "@/features/ForgetPasswordOTP/components/OTPForm";

const ForgetPasswordOTP = () => {
  return (
    <AuthLayout>
      <OTPHeader />
      <OTPForm />
    </AuthLayout>
  );
};

export default ForgetPasswordOTP;
