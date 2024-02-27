import CheckMark from "@/components/Checkmark";
import React from "react";

const Step = ({
  active,
  completed,
  stepName,
  stepNumber,
}: {
  active: boolean;
  completed: boolean;
  stepNumber: number;
  stepName: string;
}) => {
  return (
    <div className='flex items-center'>
      <div
        className={` ${
          active ? "border-[#1F4690]" : "border-[#FFF]"
        } border-[2px] border-solid rounded-[50%] w-[26px] h-[26px] flex items-center justify-center font-semibold text-[${
          active ? "#1F4690" : "#9AA1B1"
        }] ${completed ? "bg-[#1F4690]" : "bg-transparent"} mr-[12px]`}
      >
        {completed ? <CheckMark /> : stepNumber}
      </div>
      <p className={`text-[${active ? "#1F4690" : "#505F79"}] font-semibold`}>
        {stepName}
      </p>
    </div>
  );
};

export default React.memo(Step);
