import React, { useState } from "react";
import Calendar from "./Calendar";

const ImageUploader = ({
  onSelect,
  label,
}: {
  onSelect?: (file?: File) => any;
  label: string;
}) => {
  const [selectedFile, setSelectedFile] = useState<File>();
  return (
    <div className='mt-[50px] mb-[61px]'>
      <p className='text-[#000] text-[20px] font-medium'>{label}</p>
      <div className='flex flex-col items-center pt-[40px] px-[237px] pb-[35px] rounded-[9px] border-[1px] border-dashed border-[#1F4690] mt-[12px] relative'>
        <input
          type='file'
          accept='.png, .jpeg, .webp'
          onChange={(e) => {
            onSelect?.(e.target.files?.[0]);
            setSelectedFile(e.target.files?.[0]);
          }}
        />
        <Calendar />
        <h5 className='text-[#1F4690] cursor-pointer font-bold'>
          {selectedFile
            ? "Image Selected"
            : "Browse Images From Your Local Device"}
        </h5>
        <p className='text-[#969DB2] text-[8px] '>
          {selectedFile
            ? `filename: ${selectedFile?.name}`
            : "Supports: PNG, JPG, JPEG, WEBP"}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ImageUploader);
