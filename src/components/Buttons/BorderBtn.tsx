import React, { CSSProperties } from "react";

type IProps = {
  name: string;
  onClick?: () => any;
  styles?: CSSProperties;
  type?: "reset" | "submit" | "button";
};

const BorderBtn = ({ name, onClick, styles, type }: IProps) => {
  return (
    <div
      onClick={() => onClick?.()}
      style={styles}
      className='cursor-pointer text-center flex items-center justify-center bg-transparent rounded-[6px] align-middle font-medium text-[#1A1A1A] border border-[rgba(26,26,26,0.18)] text-xs px-5 py-3'
    >
      {name}
    </div>
  );
};

export default React.memo(BorderBtn);
