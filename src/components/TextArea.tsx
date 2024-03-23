import React from "react";

const TextArea = ({
  label,
  onChange,
  className,
}: {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
  className?: string;
}) => {
  return (
    <div className={className}>
      <p className='font-medium text-lg mb-2'>{label}</p>
      <textarea
        className='outline-none w-full border-2 p-3 rounded-[12px] '
        placeholder='Please Enter Department Description'
        cols={30}
        rows={10}
        onChange={(e) => onChange(e)}
      ></textarea>
    </div>
  );
};

export default React.memo(TextArea);
