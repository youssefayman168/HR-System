import React, { CSSProperties } from "react";

type IProps = {
  placeholder?: string;
  label?: string;
  name?: string;
  disabled?: boolean;
  type: string;
  onChange?: () => any;
  styles?: CSSProperties;
  mainStyles?: CSSProperties;
  labelStyles?: CSSProperties;
  id: string;
  req?: boolean;
};

const BaseInput = ({
  name,
  onChange,
  styles,
  label,
  disabled,
  placeholder,
  type,
  mainStyles,
  id,
  labelStyles,
  req,
}: IProps) => {
  return (
    <main style={mainStyles} className="flex flex-col items-start gap-1">
      <label
        style={labelStyles}
        htmlFor={id}
        className="mb-2 mt-3 text-lg font-medium"
      >
        {label}
      </label>
      <input
        required={req}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={() => onChange?.()}
        style={styles}
        className="border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px]"
      />
    </main>
  );
};

export default React.memo(BaseInput);
