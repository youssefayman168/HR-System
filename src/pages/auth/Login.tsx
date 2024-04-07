import BaseInput from "../../components/BaseInput";
import AuthLayout from "../../layouts/AuthLayout";
import BaseBtn from "../../components/Buttons/BaseBtn";
import { Link, useNavigate } from "react-router-dom";
import { pathList } from "../../routes/routesPaths";
import PasswordInp from "../../components/PasswordInp";
import { useState } from "react";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import login from "@/features/Login/services/login";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<{
    email?: "";
    password?: "";
  }>({});
  const loginUser = useMutation({
    mutationFn: () => {
      return login(data);
    },
    onSuccess: (data) => {
      localStorage.setItem("access", JSON.stringify(data.data.access));
      localStorage.setItem("refresh", JSON.stringify(data.data.refresh));
      navigate("/profile");
      location.reload();
    },
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data.email) {
      toast.warn("Please Enter Your Email");
    }
    if (!data.password) {
      toast.warn("Please Enter Your Password");
    }
    loginUser.mutate();
  };
  return (
    <AuthLayout>
      <h2 className='text-[35px] font-[600] mb-6'>Sign In</h2>
      <form action='#' onSubmit={onSubmit}>
        <BaseInput
          req={true}
          placeholder='Please Enter Your Email'
          type='email'
          name='email'
          label='Email'
          styles={{ width: "600px", height: "62px" }}
          id='Email'
          onChange={(text) =>
            setData((prev) => {
              return {
                ...prev,
                email: text,
              };
            })
          }
        />
        <PasswordInp
          placeHolder='Enter Your Password'
          label='Password'
          onChange={(text) =>
            setData((prev) => {
              return {
                ...prev,
                password: text,
              };
            })
          }
        />

        <div className='RememberMeForgotPass flex items-center justify-between mt-2 mb-3'>
          <Link to={pathList.forgetPassword}>Forgot Password?</Link>
        </div>
        <BaseBtn
          name='Sign In'
          styles={{ width: "600px", height: "62px", fontSize: "20px" }}
          disabled={loginUser.isPending}
        />
      </form>
    </AuthLayout>
  );
};

export default Login;
