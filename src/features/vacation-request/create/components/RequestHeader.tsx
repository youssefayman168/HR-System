import React from "react";
import AddIcon from "./AddIcon";

const RequestHeader = ({
  onClickSelect,
  children,
  selectedManager,
}: {
  onClickSelect?: () => any;
  children: React.ReactNode;
  selectedManager?: string;
}) => {
  return (
    <>
      <h3 className='text-[#224886] text-[25px] font-[600]'>Send Request</h3>
      <div className='w-[100%] bg-[white] px-[32px] mt-[36px] overflow-scroll h-[78vh]'>
        <h3 className='text-[#101828] text-[26px] font-[600] pt-[44px] pb-[39px] border-b-[1px] border-b-[#EFF1F4] border-solid'>
          Submit New Request
        </h3>
        {/* <div className='pt-[33px] flex justify-between pb-[30px] border-b-[1px] border-b-[#EFF1F4] border-solid'>
          <div>
            <h5 className='text-[#224886] text-[18px] font-[600]'>Notify To</h5>
            <p className='text-[#676E7E] text-[16px] font-[500]'>
              Add the person you want to notify about this request
            </p>
          </div>
          <button
            onClick={() => onClickSelect?.()}
            className='border-[#E6E7EC] border-solid rounded-[29px] border-[1px] h-[44px] py-[10px] px-[16px] flex items-center gap-[8px] cursor-pointer'
          >
            <AddIcon />
            <p>{selectedManager ? selectedManager : "Reporting Manager"}</p>
          </button>
        </div> */}
        {children}
      </div>
    </>
  );
};

export default React.memo(RequestHeader);
