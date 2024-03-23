import React from "react";

const PendingStatus = () => {
  return (
    <p
      style={{
        width: "fit-content",
      }}
      className='bg-[#E6EFFC] py-[9px] px-[6px] justify-center items-center rounded-[6px] text-[#0764E6] text-[14px] font-[500]'
    >
      Pending
    </p>
  );
};

export default React.memo(PendingStatus);
