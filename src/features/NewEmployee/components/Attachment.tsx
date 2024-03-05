import DocumentUploader from "@/components/DocumentUploader";
import React from "react";

const Attachment = () => {
  return (
    <>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <DocumentUploader label='Upload CV' />
        <DocumentUploader label='Upload Passport Copy' optional />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <DocumentUploader label='Upload Scanned Paper' />
        <DocumentUploader label='Upload ID Photo' />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <DocumentUploader label='Upload Birth Certificate' />
        <DocumentUploader label='Upload Military Certificate' optional />
      </div>
      <div className='w-[100%] flex justify-between items-center gap-[21px] mt-[50px]'>
        <DocumentUploader label='Upload Graduation Certificate' />
        <DocumentUploader label='Upload Social Insurance' optional />
      </div>
    </>
  );
};

export default React.memo(Attachment);
