import React from "react";

const Checkmark = () => {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='13' cy='13' r='13' fill='#1F4690' />
      <path
        d='M8 13.5L11 16.5L17.5 10'
        stroke='white'
        stroke-width='1.3'
        stroke-linecap='round'
      />
    </svg>
  );
};

export default React.memo(Checkmark);
