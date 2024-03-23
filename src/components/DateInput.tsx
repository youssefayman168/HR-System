import React, { CSSProperties } from "react";
import CalendarIco from "./CalendarIco";

type IProps = {
  placeholder?: string;
  label?: string;
  styles?: CSSProperties;
  mainStyles?: CSSProperties;
  labelStyles?: CSSProperties;
  className?: string;
  containerClassName?: string;
  onDate?: (date: any) => any;
  defaultValue?: string | any;
};

const DateInput = ({
  styles,
  label,
  placeholder,
  mainStyles,
  labelStyles,
  className,
  containerClassName,
  onDate,
  defaultValue,
}: IProps) => {
  return (
    <main
      style={mainStyles}
      className={`flex flex-col items-start gap-1 ${containerClassName}`}
    >
      <p style={labelStyles} className='mb-2 mt-3 text-lg font-medium'>
        {label}
      </p>
      <div
        style={styles}
        className={`border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] ${
          className ?? ""
        } w-[475.81px] h-[50px] relative`}
      >
        <input
          //   onChange={dataInputFromOnChange}
          className='border-2 px-[17.6px] rounded-[10px] absolute inset-0 z-[99] opacity-1 '
          type='date'
          onChange={(e) => onDate?.(e.target.value)}
          defaultValue={defaultValue}
        />
        <p>{placeholder}</p>
        <div className='right-[15px] absolute'>
          <CalendarIco />
        </div>
      </div>
    </main>
  );
};

export default React.memo(DateInput);
