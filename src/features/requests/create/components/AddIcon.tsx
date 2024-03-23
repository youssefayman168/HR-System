import React from "react";

const AddIcon = () => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='2'
        y='2'
        width='20'
        height='20'
        rx='10'
        stroke='#D0D5DD'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-dasharray='1 3'
      />
      <path
        d='M11.9997 7.3335V16.6668M7.33301 12.0002H16.6663'
        stroke='#A6AEBB'
        stroke-width='1.33333'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default React.memo(AddIcon);
