import BaseInput from "@/components/BaseInput";
import DateInput from "@/components/DateInput";
import MultiDateInput from "@/components/MultiDateInput";
import SelectInput from "@/components/SelectInput";
import getDepartmentList from "@/features/AllEmployees/AddPosition/services/getDepartmentList";
import { IEmployeeData } from "@/pages/NewEmployee";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import getPositions from "../services/getPositions";
import getCompanies from "../services/getCompanies";

const SetPermissions = ({
  setData,
  value,
}: {
  setData: React.Dispatch<React.SetStateAction<IEmployeeData>>;
  value: IEmployeeData;
}) => {
  const departments = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartmentList,
  });
  const positions = useQuery({
    queryKey: ["positions", value.department],
    queryFn: () => {
      return getPositions(value.department);
    },
    enabled: !!departments.data,
  });
  const companies = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });
  const queryClient = useQueryClient();
  console.log(positions.data);
  return (
    <>
      <div className='w-[100%] flex justify-between items-center gap-[21px]'>
        <SelectInput
          data={positions?.data}
          onSelect={(selectedItem) =>
            setData((prev) => {
              return {
                ...prev,
                position: selectedItem,
              };
            })
          }
          label='Position'
          className='flex-1'
          preSelect='Select Position'
        />
        {!departments.isPending && (
          <SelectInput
            data={departments?.data}
            onSelect={(selectedItem) => {
              setData((prev) => {
                return {
                  ...prev,
                  department: selectedItem,
                };
              });
              queryClient.invalidateQueries({
                queryKey: ["positions", value.department],
              });
            }}
            label='Department'
            className='flex-1'
            preSelect='Select Department'
          />
        )}
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
          req
          defaultValue={value.grade}
        />
        {!companies.isPending && (
          <SelectInput
            data={companies?.data}
            onSelect={(selectedItem) =>
              setData((prev) => {
                return {
                  ...prev,
                  company: selectedItem,
                };
              })
            }
            label='Company'
            className='flex-1'
            preSelect='Select Company'
          />
        )}
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
                college: e,
              };
            })
          }
          req
          defaultValue={value.college}
        />
        <MultiDateInput
          onDateFrom={(date) =>
            setData((prev: any) => {
              return {
                ...prev,
                graduation_year_from: date,
              };
            })
          }
          onDateTo={(date) =>
            setData((prev: any) => {
              return {
                ...prev,
                graduation_year_to: date,
              };
            })
          }
          label='Graduation Date'
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px] mb-[82px]'>
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
        <BaseInput
          type='text'
          placeholder='Please Enter Employee Medical Insurance Type'
          label='Medical Insurance Type'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                medical_insurance_type: e,
              };
            })
          }
          req
          defaultValue={value.medical_insurance_type}
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px] mb-[82px]'>
        <SelectInput
          data={[
            {
              id: "HR",
              name: "HR",
            },
            {
              id: "HOD",
              name: "HOD",
            },
            {
              id: "Senior",
              name: "Senior",
            },
            {
              id: "ProjectManager",
              name: "Project Manager",
            },
            {
              id: "Accountant",
              name: "Accountant",
            },
            {
              id: "OfficeManager",
              name: "Office Manager",
            },
            {
              id: "Employee",
              name: "Employee",
            },
          ]}
          onSelect={(role) =>
            setData((prev) => {
              return {
                ...prev,
                role: role,
              };
            })
          }
          label='Role'
          className='flex-1'
          preSelect='Select Role'
        />
        <BaseInput
          type='text'
          placeholder='Please Enter Employee Social Insurance Type'
          label='Social Insurance Type'
          className='w-[100%]'
          containerClassName='flex-1'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                social_insurance_type: e,
              };
            })
          }
          req
          defaultValue={value.social_insurance_type}
        />
      </div>
    </>
  );
};

export default React.memo(SetPermissions);
