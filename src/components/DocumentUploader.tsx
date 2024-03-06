import React, { useState } from "react";
import AttachmentIcon from "./AttachmentIcon";

const ImageUploader = ({
  name,
  onSelect,
  label,
  optional,
}: {
  onSelect?: (file?: File) => any;
  label: string;
  optional?: boolean;
  name?: string
}) => {
  const [selectedFile, setSelectedFile] = useState<File>();

  return (
    <div className='mt-[50px] mb-[61px] flex-1 w-full'>
      <p className='text-[#000] text-[20px] font-medium'>
        {label}{" "}
        {optional && (
          <span className='text-[#969DB2] text-[8px] font-semibold'>
            (optional)
          </span>
        )}
      </p>
      <div className='flex flex-col items-center pt-[40px] pb-[35px] rounded-[9px] border-[1px] border-dashed border-[#1F4690] mt-[12px] relative'>
        <input
          type='file'
          accept='.doc, .docx, .pdf, .png, .jpeg, .webp'
          name={name}
          onChange={(e) => {
            onSelect?.(e.target.files?.[0]);
            setSelectedFile(e.target.files?.[0]);
          }}
          required={optional}
        />
        <AttachmentIcon />
        <h5 className='text-[#1F4690] cursor-pointer font-bold my-2'>
          {selectedFile
            ? "File Selected"
            : "Browse Files From Your Local Device"}
        </h5>
        <p className='text-[#969DB2] text-sm '>
          {selectedFile
            ? `filename: ${selectedFile?.name}`
            : "Supports: PDF, Doc, Docx, PNG, JPEG, WEBP"}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ImageUploader);
