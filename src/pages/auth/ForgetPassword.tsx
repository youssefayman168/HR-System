import { pathList } from "../../routes/routesPaths";
import BaseBtn from "../../components/BaseBtn";
import BaseInput from "../../components/BaseInput";
import AuthLayout from "../../layouts/AuthLayout";
import PageHeader from "@/features/ForgetPassword/components/PageHeader";
import Form from "@/features/ForgetPassword/components/Form";

const ForgetPassword = () => {
  return (
    <AuthLayout>
      <PageHeader />
      <Form />
    </AuthLayout>
  );
};

export default ForgetPassword;
