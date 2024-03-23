import DocumentUploader from "@/components/DocumentUploader";
import MultiDateInput from "@/components/MultiDateInput";
import SelectInput from "@/components/SelectInput";
import TextArea from "@/components/TextArea";
import React from "react";
import { IRequest } from "@/pages/VacationRequests/CreateVacationRequest";

const RequestForm = ({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<IRequest>>;
}) => {
  return (
    <div>
      <div className='flex gap-[54px] items-center'>
        <SelectInput
          data={[
            {
              id: "Sick Leave",
              name: "Sick Leave",
            },
            {
              id: "Casual Leave",
              name: "Casual Leave",
            },
            {
              id: "Annual",
              name: "Annual",
            },
            {
              id: "Work From Home",
              name: "Work From Home",
            },
          ]}
          label='Request Type'
          className='flex-1'
          onSelect={(selectedItem) =>
            setData((prev) => {
              return {
                ...prev,
                type: selectedItem,
              };
            })
          }
        />
        <MultiDateInput
          onDateFrom={(date) =>
            setData((prev: any) => {
              return {
                ...prev,
                date_from: date,
              };
            })
          }
          onDateTo={(date) =>
            setData((prev: any) => {
              return {
                ...prev,
                date_to: date,
              };
            })
          }
          label='Date'
        />
      </div>
      <div className='flex gap-[48px] justify-between items-center'>
        <DocumentUploader
          label='Attachment'
          onSelect={(file) =>
            setData((prev: any) => {
              return {
                ...prev,
                medical_report: file,
              };
            })
          }
        />
        <TextArea
          label='Additional Notes'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                employee_notes: e.target.value,
              };
            })
          }
          className='w-full flex-1'
        />
      </div>
    </div>
  );
};

export default React.memo(RequestForm);
