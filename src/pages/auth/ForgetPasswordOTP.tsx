import { useEffect, useRef } from "react";
import AuthLayout from "../../layouts/AuthLayout";
import "./ForgetPasswordOTP.css";
import BaseBtn from "../../components/BaseBtn";
import { pathList } from "../../routes/routesPaths";

const ForgetPasswordOTP = () => {
  const inp1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inputs = inp1.current?.querySelectorAll(".inp");

    inputs?.forEach((input, index) => {
      input.addEventListener("input", (e) => {
        if (e.target instanceof HTMLInputElement && e.target.value.length > 0) {
          let nextIndex = index + 1;
          e.target.disabled = true;
          if (nextIndex < inputs.length) {
            inputs[nextIndex].focus();
          }
        }
      });
    });
  }, []);

  return (
    <AuthLayout>
      <h2 className="text-[35px] font-[600]">Forgot Password</h2>
      <p className="my-5 text-[18px] font-[500]">
        Please enter the code we sent to the email you registered{" "}
      </p>
      <p className="my-5 mt-8 text-[16px] font-[500]">Code</p>
      <form action={pathList.resetPassword}>
        <div ref={inp1} className="flex items-center gap-10 mb-10">
          <input
            required
            className="inp border-2 border-[#BDBDBD] w-[120px] h-[120px] text-center text-[45px] rounded-[8px]"
            type="number"
            maxLength={1}
            autoFocus
          />
          <input
            required
            className="inp border-2 border-[#BDBDBD] w-[120px] h-[120px] text-center text-[45px] rounded-[8px]"
            type="number"
            maxLength={1}
          />
          <input
            required
            className="inp border-2 border-[#BDBDBD] w-[120px] h-[120px] text-center text-[45px] rounded-[8px]"
            type="number"
            maxLength={1}
          />
          <input
            required
            className="inp border-2 border-[#BDBDBD] w-[120px] h-[120px] text-center text-[45px] rounded-[8px]"
            type="number"
            maxLength={1}
          />
        </div>
        <BaseBtn
          name="Send"
          styles={{ width: "600px", height: "62px", fontSize: "20px" }}
        />
      </form>
    </AuthLayout>
  );
};

export default ForgetPasswordOTP;
