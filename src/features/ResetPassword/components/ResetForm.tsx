import BaseBtn from "@/components/BaseBtn";
import PasswordInp from "@/components/PasswordInp";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import resetPassword from "../services/resetPassword";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ResetForm = () => {
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  const reset = useMutation({
    mutationFn: () => {
      return resetPassword(params.otpCode!, params.email!, passwords.password);
    },
    onSuccess: () => {
      navigate("/");
    },
  });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwords.password != passwords.confirmPassword) {
      return toast.error("Passwords didn't match");
    }
    try {
      await reset.mutateAsync();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form action='#' onSubmit={onSubmit}>
        <PasswordInp
          placeHolder='Enter Your Password'
          label='Password'
          onChange={(value) =>
            setPasswords((prev) => {
              return {
                ...prev,
                password: value,
              };
            })
          }
        />
        <PasswordInp
          placeHolder='Enter Your Password'
          label='Confirm Password'
          onChange={(value) =>
            setPasswords((prev) => {
              return {
                ...prev,
                confirmPassword: value,
              };
            })
          }
        />
        <BaseBtn
          name='Change'
          styles={{ width: "600px", height: "62px", fontSize: "20px" }}
        />
      </form>
    </>
  );
};

export default React.memo(ResetForm);
