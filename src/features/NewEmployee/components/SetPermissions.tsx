import BaseInput from "@/components/BaseInput";
import DateInput from "@/components/DateInput";
import MultiDateInput from "@/components/MultiDateInput";
import { IEmployeeData } from "@/pages/NewEmployee";
import React from "react";

const SetPermissions = ({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<IEmployeeData>>;
}) => {
  return (
    <>
      <div className='w-[100%] flex justify-between items-center gap-[21px]'>
        <BaseInput
          type='text'
          placeholder='Please Enter Employee Position'
          label='Position'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                position: e,
              };
            })
          }
        />
        <BaseInput
          type='text'
          placeholder="Please Enter Employee's Department"
          label='Department'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                department: e,
              };
            })
          }
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <BaseInput
          type='text'
          placeholder="Please Enter Employee's Grade"
          label='Grade'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                grade: e,
              };
            })
          }
        />
        <BaseInput
          type='text'
          placeholder="Please Select Employee's Company"
          label='Company'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                company: e,
              };
            })
          }
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <BaseInput
          type='text'
          placeholder='Please Enter Employee College Name'
          label='College Name'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                college_name: e,
              };
            })
          }
        />
        <MultiDateInput
          onDateFrom={(date) =>
            setData((prev: any) => {
              return {
                ...prev,
                graduation_date_from: date,
              };
            })
          }
          onDateTo={(date) =>
            setData((prev: any) => {
              return {
                ...prev,
                graduation_date_to: date,
              };
            })
          }
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <DateInput
          label='Hiring Date'
          onDate={(date) =>
            setData((prev) => {
              return {
                ...prev,
                hiring_date: date,
              };
            })
          }
        />
      </div>
    </>
  );
};

export default React.memo(SetPermissions);
