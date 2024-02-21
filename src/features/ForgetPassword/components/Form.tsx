import BaseBtn from "@/components/Buttons/BaseBtn";
import BaseInput from "@/components/BaseInput";
import { pathList } from "@/routes/routesPaths";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import requestOTP from "../services/requestOTP";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Form = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const getOTP = useMutation({
    mutationFn: () => {
      return requestOTP(email);
    },
    onSuccess: () => {
      navigate(`/forget_password/forget_password_OTP/${email}`);
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!email) {
        toast.warn("Please enter your email");
      }
      await getOTP.mutateAsync();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form action={pathList.forgetPasswordOTP} onSubmit={onSubmit}>
        <div className='mb-12'>
          <BaseInput
            req={true}
            type='email'
            name='email'
            label='Email'
            placeholder='Please Enter Your Email'
            styles={{ width: "600px", height: "62px" }}
            id='email'
            onChange={(text) => setEmail(text)}
          />
        </div>
        <BaseBtn
          name='Send'
          styles={{ width: "600px", height: "62px", fontSize: "20px" }}
        />
      </form>
    </>
  );
};

export default React.memo(Form);
