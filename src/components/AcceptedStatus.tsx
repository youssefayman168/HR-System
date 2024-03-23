import React from "react";

const AcceptedStatus = () => {
  return (
    <p
      style={{
        width: "fit-content",
      }}
      className='bg-[#DEFFE1] py-[9px] px-[6px] justify-center items-center rounded-[6px] text-[#339E00] text-[14px] font-[500]'
    >
      Accepted
    </p>
  );
};

export default React.memo(AcceptedStatus);
