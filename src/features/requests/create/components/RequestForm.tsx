import DocumentUploader from "@/components/DocumentUploader";
import MultiDateInput from "@/components/MultiDateInput";
import SelectInput from "@/components/SelectInput";
import TextArea from "@/components/TextArea";
import React from "react";
import { IRequest } from "../../../../pages/Requests/CreateRequest";

const RequestForm = ({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<IRequest>>;
}) => {
  return (
    <div>
      <div className='flex gap-[54px] items-start'>
        <SelectInput
          data={[
            {
              id: "loans",
              name: "loans",
            },
            {
              id: "expenses",
              name: "expenses",
            },
            {
              id: "stationery",
              name: "stationery",
            },
            {
              id: "training",
              name: "training",
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
        <TextArea
          label='Additional Notes'
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                comment_from_the_employee: e.target.value,
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
