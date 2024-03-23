import React from "react";

const DeclinedStatus = () => {
  return (
    <p
      style={{
        width: "fit-content",
      }}
      className='bg-[#FFE3E3] py-[9px] px-[6px] justify-center items-center rounded-[6px] text-[#AA0000] text-[14px] font-[500]'
    >
      Declined
    </p>
  );
};

export default React.memo(DeclinedStatus);
