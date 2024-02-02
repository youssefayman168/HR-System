import { pathList } from "../../routes/routesPaths"
import BaseBtn from "../../components/BaseBtn"
import BaseInput from "../../components/BaseInput"
import AuthLayout from "../../layouts/AuthLayout"


const ForgetPassword = () => {
    return (
        <AuthLayout>
      <h2 className="text-[35px] font-[600]">Forgot Password</h2>
      <p className="my-5 text-[18px] font-[500]">Please enter your email so we can send you a code to <br /> resset yourpassword</p>
     <form action={pathList.forgetPasswordOTP}>
        <div className="mb-12">
          <BaseInput req={true} type="email" name="email" label="Email" placeholder="Please Enter Your Email" styles={{width : "600px" , height : "62px"}} id="email" />
        </div>
          <BaseBtn name="Send" styles={{width : "600px" , height : "62px" , fontSize : "20px"}} />
     </form>
    </AuthLayout>
    )
}

export default ForgetPassword