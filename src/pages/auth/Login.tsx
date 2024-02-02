import BaseInput from "../../components/BaseInput";
import AuthLayout from "../../layouts/AuthLayout";
import BaseBtn from "../../components/BaseBtn";
import { Link } from "react-router-dom";
import { pathList } from "../../routes/routesPaths";
import PasswordInp from "../../components/PasswordInp";

const Login = () => {
  return (
    <AuthLayout>
      <h2 className="text-[35px] font-[600] mb-6">Sign In</h2>
      <form action="#">
        <BaseInput
          req={true}
          placeholder="Please Enter Your Email"
          type="email"
          name="email"
          label="Email"
          styles={{ width: "600px", height: "62px" }}
          id="Email"
        />
        <PasswordInp placeHolder="Enter Your Password" label="Password" />

        <div className="RememberMeForgotPass flex items-center justify-between mt-2 mb-3">
          <div className="flex items-end gap-3 ">
            <BaseInput
              req={false}
              type="checkbox"
              label="Remember me"
              id="RememberMe"
              labelStyles={{
                color: "#737373",
                fontSize: "15px",
                paddingBottom: "4px",
              }}
              mainStyles={{
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: "15px",
              }}
            />
          </div>
          <Link to={pathList.forgetPassword}>Forgot Password?</Link>
        </div>
        <BaseBtn
          name="Sign In"
          styles={{ width: "600px", height: "62px", fontSize: "20px" }}
        />
      </form>
    </AuthLayout>
  );
};

export default Login;
