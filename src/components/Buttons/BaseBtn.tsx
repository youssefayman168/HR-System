import React, { CSSProperties } from "react";

type IProps = {
  name: string;
  onClick?: () => any;
  styles?: CSSProperties;
  disabled?: boolean;
};

const BaseBtn = ({ name, onClick, styles, disabled }: IProps) => {
  return (
    <button
      onClick={() => onClick?.()}
      style={styles}
      className='text-white bg-[#365B98] rounded-[6px] align-middle font-bold text-xs py-3'
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default React.memo(BaseBtn);
