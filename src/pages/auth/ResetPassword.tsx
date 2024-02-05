import React from "react";
import BaseBtn from "../../components/BaseBtn";
import PasswordInp from "../../components/PasswordInp";
import AuthLayout from "../../layouts/AuthLayout";
import PageHeader from "@/features/ResetPassword/components/PageHeader";
import ResetForm from "@/features/ResetPassword/components/ResetForm";

const ResetPassword = () => {
  return (
    <AuthLayout>
      <PageHeader />
      <ResetForm />
    </AuthLayout>
  );
};

export default ResetPassword;
