import BaseInput from "@/components/BaseInput";
import Calendar from "@/components/Calendar";
import React from "react";

const BasicInfo = () => {
  return (
    <>
      <div className='w-[100%] flex justify-between items-center gap-[21px]'>
        <BaseInput
          type='text'
          placeholder='Please Enter Employee Full Name'
          label='Full Name'
          className='w-[100%]'
          containerClassName='flex-1'
        />
        <BaseInput
          type='text'
          placeholder="Please Enter Employee's Email"
          label='Email'
          className='w-[100%]'
          containerClassName='flex-1'
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <BaseInput
          type='text'
          placeholder='Please Enter Employee Phone Number'
          label='Phone Number'
          className='w-[100%]'
          containerClassName='flex-1'
        />
        <BaseInput
          type='text'
          placeholder="Please Select Employee's Gender"
          label='Gender'
          className='w-[100%]'
          containerClassName='flex-1'
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <BaseInput
          type='text'
          placeholder='Please Enter Employee Nationality'
          label='Nationality'
          className='w-[100%]'
          containerClassName='flex-1'
        />
        <BaseInput
          type='text'
          placeholder="Please Enter Employee's Location"
          label='Location'
          className='w-[100%]'
          containerClassName='flex-1'
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <BaseInput
          type='text'
          placeholder='Please Enter Employee Birth Date'
          label='Date of Birth'
          className='w-[100%]'
          containerClassName='flex-1'
        />
        <BaseInput
          type='text'
          placeholder='Please Select Insurance Type'
          label='Email'
          className='w-[100%]'
          containerClassName='flex-1'
        />
      </div>
      <div className='mt-[50px] mb-[61px]'>
        <p className='text-[#000] text-[20px] font-medium'>
          Employee’s Profile Photo
        </p>
        <div className='flex flex-col items-center pt-[40px] px-[237px] pb-[35px] rounded-[9px] border-[1px] border-dashed border-[#1F4690] mt-[12px]'>
          <Calendar />
          <h5 className='text-[#1F4690] cursor-pointer font-bold'>
            Browse Images From Your Local Device
          </h5>
          <p className='text-[#969DB2] text-[8px] '>
            Supports: PNG, JPG, JPEG, WEBP
          </p>
        </div>
      </div>
    </>
  );
};

export default React.memo(BasicInfo);
