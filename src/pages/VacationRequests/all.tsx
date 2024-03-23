import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";
import { useEffect, useState } from "react";
import download from "../../assets/Projects/Download.svg";
import DropDown from "../../components/DropDown/DropDown";
import Elm from "../../components/Requests/Elm";
import BtnCreate from "../../components/Buttons/BtnCreate";
import ReactPaginate from "react-paginate";
import { useQuery } from "@tanstack/react-query";
import getAllRequests from "@/features/requests/all/services/getAllRequests";
import { pathList } from "@/routes/routesPaths";
import plus from "@/assets/plus.svg";
import getVacationRequests from "@/features/vacation-request/all/services/getVacationRequests";
import Request from "@/features/vacation-request/all/components/Request";
import { format } from "date-fns";

export const getStatus = (hodApproved: boolean, staffApproved: boolean) => {
  if (hodApproved) {
    return "Accepted";
  } else if (hodApproved == false) {
    return "Declined";
  } else if (hodApproved == null) {
    return "Pending";
  } else if (hodApproved == false && staffApproved == false) {
    return "Declined";
  } else if (staffApproved == null) {
    return "Pending";
  } else if (staffApproved == false) {
    return "Pending";
  } else return "inactive";
};

const All = () => {
  const vacationRequests = useQuery({
    queryKey: ["vacation-requests"],
    queryFn: getVacationRequests,
  });
  const data: any = [];
  return (
    <BaseLayout>
      <div className='p-6 pb-3'>
        <div className='flex justify-between'>
          <p className='text-[#224886] text-[25px] font-bold '>Requests</p>
          <BtnCreate
            text='Create Request'
            icon={plus}
            path={pathList.createVacationRequest}
          />
        </div>
        <div className='Table bg-white rounded-[15px] w-full mt-6'>
          <div className='Header bg-[#224886] py-7 rounded-tl-[15px] rounded-tr-[15px] px-6 text-white flex items-center gap-6 w-full'>
            <p
              //   onClick={uListEmp1}
              className='w-[18%] flex items-center mx-auto gap-1 relative'
            >
              <span className='absolute top-[50px] left-[-110px]'></span>
              Sent To
            </p>
            <p
              //   onClick={uListReq2}
              className=' flex items-center w-[18%] mx-auto gap-1 relative'
            >
              <span className='absolute top-[50px] left-[-110px]'></span>
              Request Type
            </p>
            <p className='w-[15%] '>Date</p>
            <p
              //   onClick={uListStat4}
              className=' flex items-center w-[15%] mx-auto gap-1 relative'
            >
              Status
            </p>
            <p className='w-[15%] '>Action</p>
          </div>
          <div className='Body w-full h-[calc(100vh-385px)] HideScroll overflow-y-auto '>
            {vacationRequests.data?.data?.map(
              ({
                hod,
                type,
                hod_approved,
                staff_approved,
                id,
                date_from,
              }: any) => {
                const { image, name, hiring_date, role } = hod;
                console.log(status);
                return (
                  <Request
                    hodImage={image}
                    hodName={name}
                    requestID={id}
                    status={getStatus(hod_approved, staff_approved)}
                    type={type}
                    date={format(new Date(date_from), "dd MMM yyyy")}
                  />
                );
              }
            )}
          </div>
          <div className='flex items-center justify-between px-6'>
            {/* <div>
                            <ReactPaginate
                                containerClassName={"pagination flex items-center py-[14px] gap-[8px]"}
                                pageClassName={"size-[40px] rounded-lg flex items-center justify-center border border-[#D9D9DB]"}
                                activeClassName={"active border-primary"}
                                onPageChange={(event) => setCurrentPage(event.selected)}
                                pageCount={Math.ceil(RequestData.length / itemsNum)}
                                breakLabel="..."
                                previousLabel={
                                    <div className='border border-[#D9D9DB] size-[40px] flex items-center justify-center rounded-lg'>
                                        <IoIosArrowBack />
                                    </div>
                                }
                                nextLabel={
                                    <div className='border border-[#D9D9DB] size-[40px] flex items-center justify-center rounded-lg'>
                                        <IoIosArrowForward />
                                    </div>
                                }
                            />
                        </div> */}
          </div>
        </div>
        <div className='w-fit ms-auto mt-4'>
          <BtnCreate text='Export As PDF' icon={download} path='' />
        </div>
      </div>
    </BaseLayout>
  );
};

export default All;
