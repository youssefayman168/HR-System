import React from "react";
import OldRequest from "./OldRequest";
import { useQuery } from "@tanstack/react-query";
import getMyVacations from "../services/getMyVacations";
import { getStatus } from "@/pages/VacationRequests/all";
import { format } from "date-fns";

const OldRequests = () => {
  const myRequests = useQuery({
    queryKey: ["my-requests"],
    queryFn: getMyVacations,
  });
  console.log();
  return (
    <div className='border-[1px] border-[#E0E0E0] border-solid rounded-[12px] px-[22px] mt-[135px] mb-[20px]'>
      <h5 className='pt-[27px]'>Requests</h5>
      <div className='flex bg-[#FAFAFA] py-[12px] px-[16px]'>
        <p className='w-[37%] text-[18px] font-[500] text-[#303030]'>
          Request Type
        </p>
        <p className='w-[32%] text-[18px] font-[500] text-[#303030]'>Date</p>
        <p className='w-[20%] text-[18px] font-[500] text-[#303030]'>Status</p>
      </div>
      <div>
        {myRequests.data?.data?.map((request: any) => (
          <OldRequest
            key={request.id}
            requestID={request.id}
            status={getStatus(request.hod_approved, request.staff_approved)}
            type={request.type}
            date={format(new Date(request.date_from), "dd MMM yyyy")}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(OldRequests);
