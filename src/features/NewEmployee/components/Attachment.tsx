import DocumentUploader from "@/components/DocumentUploader";
import { IEmployeeData } from "@/pages/NewEmployee";
import React from "react";

const Attachment = ({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<IEmployeeData>>;
}) => {
  return (
    <>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <DocumentUploader
          label='Upload CV'
          onSelect={(file) =>
            setData((prev: any) => {
              return {
                ...prev,
                cv: file,
              };
            })
          }
          optional={false}
        />
        <DocumentUploader
          label='Upload Passport Copy'
          optional={false}
          onSelect={(file) =>
            setData((prev: any) => {
              return {
                ...prev,
                passport_copy: file,
              };
            })
          }
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <DocumentUploader
          label='Upload Scanned Paper'
          onSelect={(file) =>
            setData((prev: any) => {
              return {
                ...prev,
                scanned_paper: file,
              };
            })
          }
          optional={false}
        />
        <DocumentUploader
          label='Upload ID Photo'
          onSelect={(file) =>
            setData((prev: any) => {
              return {
                ...prev,
                id_photo: file,
              };
            })
          }
          optional={false}
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <DocumentUploader
          label='Upload Birth Certificate'
          onSelect={(file) =>
            setData((prev: any) => {
              return {
                ...prev,
                birth_certificate: file,
              };
            })
          }
          optional={false}
        />
        <DocumentUploader
          label='Upload Military Certificate'
          optional={false}
          onSelect={(file) =>
            setData((prev: any) => {
              return {
                ...prev,
                military_certificate: file,
              };
            })
          }
        />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <DocumentUploader
          label='Upload Graduation Certificate'
          onSelect={(file) =>
            setData((prev: any) => {
              return {
                ...prev,
                graduation_certificate: file,
              };
            })
          }
          optional={false}
        />
        <DocumentUploader
          label='Upload Social Insurance'
          optional={false}
          onSelect={(file) =>
            setData((prev: any) => {
              return {
                ...prev,
                social_insurance: file,
              };
            })
          }
        />
      </div>
    </>
  );
};

export default React.memo(Attachment);
