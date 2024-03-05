import BaseInput from "@/components/BaseInput";
import Calendar from "@/components/Calendar";
import ImageUploader from "@/components/ImageUploader";
import { IEmployeeData } from "@/pages/NewEmployee";
import React from "react";

const BasicInfo = ({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<IEmployeeData>>;
}) => {
  return (
    <>
      <div className='w-[100%] flex justify-between items-center gap-[21px]'>
        <BaseInput
          type='text'
          placeholder='Please Enter Employee Full Name'
          label='Full Name'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                name: e,
              };
            })
          }
        />
        <BaseInput
          type='text'
          placeholder="Please Enter Employee's Email"
          label='Email'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                email: e,
              };
            })
          }
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <BaseInput
          type='text'
          placeholder='Please Enter Employee Phone Number'
          label='Phone Number'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                phone_number: e,
              };
            })
          }
        />
        <BaseInput
          type='text'
          placeholder="Please Select Employee's Gender"
          label='Gender'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                gender: e,
              };
            })
          }
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <BaseInput
          type='text'
          placeholder='Please Enter Employee Nationality'
          label='Nationality'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                nationality: e,
              };
            })
          }
        />
        <BaseInput
          type='text'
          placeholder="Please Enter Employee's Location"
          label='Location'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                location: e,
              };
            })
          }
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <BaseInput
          type='text'
          placeholder='Please Enter Employee Birth Date'
          label='Date of Birth'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                birth_date: e,
              };
            })
          }
        />
        <BaseInput
          type='text'
          placeholder='Please Select Insurance Type'
          label='Insurance Type'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                social_insurance: e,
              };
            })
          }
        />
      </div>
      <ImageUploader label='Employee’s Profile Photo' onSelect={(file) => {
        setData((prev) => {
          return {
            ...prev,
            image: file!,
          };
        });
      }}/>
    </>
  );
};

export default React.memo(BasicInfo);
