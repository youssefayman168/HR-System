import React from "react";

const MultiDateInput = ({
  onDateFrom,
  onDateTo,
}: {
  onDateFrom: (date: Date | string) => any;
  onDateTo: (date: Date | string) => any;
}) => {
  return (
    <div className='flex-1 gap-[30px] flex-col items-start justify-start'>
      <p className='mb-2 mt-3 text-lg font-medium'>Graduation Date</p>
      <div className='flex-1 gap-[30px] flex'>
        <div className='w-[50%] h-[60px] rounded-[10px] border-[1px] border-solid border-[#BDBDBD] flex items-center relative'>
          <input
            className='border-2 px-[17.6px] rounded-[10px] absolute inset-0 z-[99] opacity-1 '
            type='date'
            onChange={(e) => onDateFrom(e.target.value)}
          />
          <p className='color-[#737373] pl-[15px] text-[18px] font-medium'>
            from
          </p>
        </div>
        <div className='w-[50%] h-[60px] rounded-[10px] border-[1px] border-solid border-[#BDBDBD] flex items-center relative'>
          <input
            //   onChange={dataInputFromOnChange}
            className='border-2 px-[17.6px] rounded-[10px] absolute inset-0 z-[99] opacity-1 '
            type='date'
            onChange={(e) => onDateTo(e.target.value)}
          />
          <p className='color-[#737373] pl-[15px] text-[18px] font-medium'>
            to
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MultiDateInput);
