import AcceptedStatus from "@/components/AcceptedStatus";
import DeclinedStatus from "@/components/DeclinedStatus";
import PendingStatus from "@/components/PendingStatus";
import React from "react";
import { Link } from "react-router-dom";

type IRequestInfo = {
  hodImage: any;
  hodName: string;
  type: string;
  date: string;
  status: string;
  requestID: number;
};

const statues: any = {
  Accepted: <AcceptedStatus />,
  Declined: <DeclinedStatus />,
  Pending: <PendingStatus />,
};

const Request = ({
  hodImage,
  hodName,
  type,
  date,
  status,
  requestID,
}: IRequestInfo) => {
  return (
    <>
      <div className='flex items-center p-[23px] border-b-[1px] border-solid border-[#D9D9DB]'>
        <div className='w-[29%] flex items-center gap-[5px]'>
          <img
            src={`https://sec-system-apis.up.railway.app${hodImage}`}
            className='w-[31.056px] h-[31.056px] rounded-[50%]'
          />
          <p className='text-[#000] text-[16px] font-[500]'>{hodName}</p>
        </div>
        <p className='w-[17%] text-[#000] text-[16px] font-[500]'>{type}</p>
        <p className='w-[20%] text-[#000] text-[16px] font-[500]'>{date}</p>
        <div className='w-[18%]'>{statues[status]}</div>
        <Link
          //   onClick={onClick}
          to={`/vacation-requests/viewRequests/${requestID}`}
          className='text-[#063C84] bg-[#CCE2FF] py-[9px] px-[27px] rounded-[6px]'
        >
          View Request
        </Link>
      </div>
    </>
  );
};

export default React.memo(Request);
