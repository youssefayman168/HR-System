import React, { useState } from "react";
import QuestionMark from "./QuestionMark";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import globalServices from "@/utils/globals.services";

const RemainingDaysViewer = () => {
  const [showRemainingDays, setShowRemainingDays] = useState(false);
  const myProfile = useQuery({
    queryKey: ["myProfile"],
    queryFn: globalServices.getPersonalInfo,
  });
  console.log(myProfile.data);
  return (
    <div className='flex justify-between pt-[50px] pb-[53px]'>
      <motion.div
        className='text-[#00900E] text-[24px] font-[500] flex items-center'
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
        animate={showRemainingDays ? "visible" : "hidden"}
        transition={{
          type: "spring",
          duration: 1,
        }}
      >
        <QuestionMark />
        <p className='ml-[5px]'>
          You still have {myProfile.data?.vacation_days} days Available
        </p>
      </motion.div>
      <button
        className='bg-[#105090] rounded-[10px] py-[12px] px-[30px] flex justify-center items-center text-white'
        onClick={() => setShowRemainingDays((prev) => !prev)}
      >
        View Remaining Days
      </button>
    </div>
  );
};

export default React.memo(RemainingDaysViewer);
