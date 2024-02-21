import BaseBtn from "@/components/Buttons/BaseBtn";
import { pathList } from "@/routes/routesPaths";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import verifyOTP from "../services/verifyOTP";
import { useNavigate, useParams } from "react-router-dom";

const OTPForm = () => {
  const inp1 = useRef<HTMLDivElement>(null);
  const [OTPs, setOTPs] = useState({
    firstInput: "",
    secondInput: "",
    thirdInput: "",
    forthInput: "",
  });
  const OTP = `${OTPs.firstInput}${OTPs.secondInput}${OTPs.thirdInput}${OTPs.forthInput}`;

  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const inputs = inp1.current?.querySelectorAll(".inp");

    inputs?.forEach((input, index) => {
      input.addEventListener("input", (e) => {
        if (e.target instanceof HTMLInputElement && e.target.value.length > 0) {
          let nextIndex = index + 1;
          e.target.disabled = true;
          if (nextIndex < inputs.length) {
            (inputs[nextIndex] as any).focus();
          }
        }
      });
    });
  }, []);

  const validateOTP = useMutation({
    mutationFn: () => {
      return verifyOTP(OTP, params.email!);
    },
    onSuccess: () => {
      navigate(`/forget_password/reset_password/${OTP}/${params.email!}`);
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await validateOTP.mutateAsync();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <form action={pathList.resetPassword} onSubmit={onSubmit}>
        <div ref={inp1} className='flex items-center gap-10 mb-10'>
          <input
            required
            className='inp border-2 border-[#BDBDBD] w-[120px] h-[120px] text-center text-[45px] rounded-[8px]'
            type='number'
            maxLength={1}
            autoFocus
            onChange={(e) =>
              setOTPs((prev) => {
                return {
                  ...prev,
                  firstInput: e.target.value,
                };
              })
            }
          />
          <input
            required
            className='inp border-2 border-[#BDBDBD] w-[120px] h-[120px] text-center text-[45px] rounded-[8px]'
            type='number'
            maxLength={1}
            onChange={(e) =>
              setOTPs((prev) => {
                return {
                  ...prev,
                  secondInput: e.target.value,
                };
              })
            }
          />
          <input
            required
            className='inp border-2 border-[#BDBDBD] w-[120px] h-[120px] text-center text-[45px] rounded-[8px]'
            type='number'
            maxLength={1}
            onChange={(e) =>
              setOTPs((prev) => {
                return {
                  ...prev,
                  thirdInput: e.target.value,
                };
              })
            }
          />
          <input
            required
            className='inp border-2 border-[#BDBDBD] w-[120px] h-[120px] text-center text-[45px] rounded-[8px]'
            type='number'
            maxLength={1}
            onChange={(e) =>
              setOTPs((prev) => {
                return {
                  ...prev,
                  forthInput: e.target.value,
                };
              })
            }
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

export default React.memo(OTPForm);
