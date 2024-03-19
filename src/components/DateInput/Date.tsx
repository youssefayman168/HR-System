import React, { CSSProperties, useRef, useState } from "react";

type DateProp = {
  icon: string;
  styles?: CSSProperties;
  stylesInp?: CSSProperties;
  onSelectDate?: (date: string) => any;
  value?: any,
  onChange?: any
};

const DateInp = ({ icon, styles, stylesInp, onSelectDate, value, onChange }: DateProp) => {

  return (
    <div className='relative'>
      <input
        style={stylesInp}
        onChange={() => {
          onChange
        }}
        className='border-2 px-[17.6px] rounded-[10px] absolute inset-0 z-[99] opacity-0 '
        type='date'
        value={value}
      />
      <div
        style={styles}
        className='text-[#224886] flex items-center gap-3 py-3 px-4 rounded-[10px] border-[1px] border-[#224886] '
      >
        <p>{value}</p>
        <img src={icon} alt='Date' />
      </div>
    </div>
  );
};

export default DateInp;
