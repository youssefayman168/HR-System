import React, { CSSProperties } from "react";

type IProps = {
  name: string;
  onClick?: () => any;
  styles?: CSSProperties;
  disabled?: boolean;
  type?: any
};

const BaseBtn = ({ name, onClick, styles, disabled, type }: IProps) => {
  return (
    <button
      onClick={() => onClick?.()}
      style={styles}
      className='text-white bg-[#365B98] rounded-[6px] align-middle font-bold text-xs py-3'
      disabled={disabled}
      type={type}
    >
      {name}
    </button>
  );
};

export default React.memo(BaseBtn);
