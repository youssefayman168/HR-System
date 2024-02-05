import React from "react";

const PageHeader = () => {
  return (
    <>
      <h2 className='text-[35px] font-[600]'>Forgot Password</h2>
      <p className='my-5 text-[18px] font-[500]'>
        Please enter your email so we can send you a code to <br /> resset
        yourpassword
      </p>
    </>
  );
};

export default React.memo(PageHeader);
