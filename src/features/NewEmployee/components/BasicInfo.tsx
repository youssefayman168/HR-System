import BaseInput from "@/components/BaseInput";
import Calendar from "@/components/Calendar";
import DateInput from "@/components/DateInput";
import ImageUploader from "@/components/ImageUploader";
import SelectInput from "@/components/SelectInput";
import { IEmployeeData } from "@/pages/NewEmployee";
import React from "react";

const BasicInfo = ({
  setData,
  value,
}: {
  setData: React.Dispatch<React.SetStateAction<IEmployeeData>>;
  value: IEmployeeData;
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
          defaultValue={value.name}
          req
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
          defaultValue={value.email}
          req
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
          defaultValue={value.nationality}
          req
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
          defaultValue={value.location}
          req
        />
      </div>
      {/* <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <BaseInput
          type='text'
          placeholder='Please Enter Insurance Type'
          label='Insurance Type'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                in: e,
              };
            })
          }
          defaultValue={value.social_insurance_type}
          req
        />
      </div> */}
      <ImageUploader
        label='Employee’s Profile Photo'
        onSelect={(file) => {
          setData((prev) => {
            return {
              ...prev,
              image: file!,
            };
          });
        }}
      />
    </>
  );
};

export default React.memo(BasicInfo);
