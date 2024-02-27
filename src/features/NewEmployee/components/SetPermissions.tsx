import BaseInput from "@/components/BaseInput";
import DateInput from "@/components/DateInput";
import MultiDateInput from "@/components/MultiDateInput";
import React from "react";

const SetPermissions = () => {
  return (
    <>
      <div className='w-[100%] flex justify-between items-center gap-[21px]'>
        <BaseInput
          type='text'
          placeholder='Please Enter Employee Position'
          label='Position'
          className='w-[100%]'
          containerClassName='flex-1'
        />
        <BaseInput
          type='text'
          placeholder="Please Enter Employee's Department"
          label='Department'
          className='w-[100%]'
          containerClassName='flex-1'
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <BaseInput
          type='text'
          placeholder="Please Enter Employee's Grade"
          label='Grade'
          className='w-[100%]'
          containerClassName='flex-1'
        />
        <BaseInput
          type='text'
          placeholder="Please Select Employee's Company"
          label='Company'
          className='w-[100%]'
          containerClassName='flex-1'
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <BaseInput
          type='text'
          placeholder='Please Enter Employee College Name'
          label='College Name'
          className='w-[100%]'
          containerClassName='flex-1'
        />
        <MultiDateInput />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <DateInput label='Hiring Date' />
      </div>
    </>
  );
};

export default React.memo(SetPermissions);
