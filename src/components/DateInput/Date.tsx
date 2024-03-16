import React, { CSSProperties, useRef, useState } from "react";

type DateProp = {
  icon: string;
  styles?: CSSProperties;
  stylesInp?: CSSProperties;
  onSelectDate?: (date: string) => any;
};

const DateInp = ({ icon, styles, stylesInp, onSelectDate }: DateProp) => {
  const d = new Date();

  const addLeadingZero = (num: number) => (num < 10 ? `0${num}` : num);

  const [dateF, setDateF] = useState<string>(
    `${addLeadingZero(d.getFullYear())}-${addLeadingZero(
      d.getMonth() + 1
    )}-${addLeadingZero(d.getDate())} `
  );

  const dateInpF = useRef<HTMLInputElement>(null);
  const dataInputFromOnChange = () => {
    if (dateInpF.current) {
      setDateF(dateInpF.current.value);
    }
  };

  return (
    <div className='relative'>
      <input
        style={stylesInp}
        ref={dateInpF}
        onChange={(e) => onSelectDate?.(e.target.value)}
        className='border-2 px-[17.6px] rounded-[10px] absolute inset-0 z-[99] opacity-0 '
        type='date'
      />
      <div
        style={styles}
        className='text-[#224886] flex items-center gap-3 py-3 px-4 rounded-[10px] border-[1px] border-[#224886] '
      >
        <p>{dateF}</p>
        <img src={icon} alt='Date' />
      </div>
    </div>
  );
};

export default DateInp;
