import React from "react";
import ArrowBottom from "@/assets/CreateProjects/ArrowBottom.svg";

const SelectInput = ({
  data,
  onSelect,
  label,
  className,
  preSelect,
  fetchName,
}: {
  data: any;
  label: string;
  onSelect: (selectedItem: any) => any;
  className?: string;
  preSelect?: string;
  fetchName?: (currentItem: any) => string;
}) => {
  return (
    <div className={`w-full ${className}`}>
      <label className='mb-2 block text-lg font-medium' htmlFor='Comp'>
        {label}
      </label>
      <div className='Select-Container relative w-full'>
        <select
          id='mySelect'
          className='custom-select p-5 border-[1px] border-[#ccc] w-[100%] appearance-none outline-none h-[60px] rounded-[10px] '
          onChange={(e) => onSelect(e.target.value)}
          required
        >
          {preSelect && <option value=''>{preSelect}</option>}
          {data?.map((item: any) => {
            console.log(item.name);
            return (
              <option value={item.id} key={item.id}>
                {fetchName ? fetchName(item) : item.name}
              </option>
            );
          })}
        </select>
        <img
          className='absolute top-[50%] translate-y-[-50%] right-8 '
          src={ArrowBottom}
          alt='ArrowBottom'
        />
      </div>
    </div>
  );
};

export default React.memo(SelectInput);
