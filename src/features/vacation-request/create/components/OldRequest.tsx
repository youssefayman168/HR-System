import React from "react";
import { useNavigate } from "react-router-dom";

const OldRequest = ({
  type,
  date,
  status,
  requestID,
}: {
  type: string;
  date: string;
  status: string;
  requestID: number;
}) => {
  const navigate = useNavigate();
  return (
    <div className='flex bg-[#FAFAFA] rounded-[6px] border-[0.5px] border-solid border-[#E0E0E0] py-[12px] px-[16px] my-[13px]'>
      <p className='w-[37%] text-[18px] font-[500] text-[#303030]'>{type}</p>
      <p className='w-[32%] text-[18px] font-[500] text-[#303030]'>{date}</p>
      <p className='w-[20%] text-[18px] font-[500] text-[#303030]'>{status}</p>
      <button
        onClick={() => navigate(`/vacation-requests/viewRequests/${requestID}`)}
      >
        View
      </button>
    </div>
  );
};

export default React.memo(OldRequest);
