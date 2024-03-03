import React from "react";

const SuccessIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={131}
      height={131}
      fill="none"
    >
      <path
        stroke="#20AE5C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        d="M128 72.942c-5 25.025-23.849 48.588-50.297 53.853a62.435 62.435 0 0 1-38.238-4.48 62.525 62.525 0 0 1-28.36-26.064 62.616 62.616 0 0 1 8.131-72.877c18.14-20 48.767-25.506 73.766-15.496"
      />
      <path
        stroke="#20AE5C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        d="M42 69.77 55.824 84 89 47"
      />
    </svg>
  );
};

export default React.memo(SuccessIcon);
