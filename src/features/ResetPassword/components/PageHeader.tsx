import React from "react";

const PageHeader = () => {
  return (
    <>
      <h2 className='text-[35px] font-[600]'>Forgot Password</h2>
      <p className='my-5 text-[18px] font-[500]'>
        Please change your password and sign in again
      </p>
    </>
  );
};

export default React.memo(PageHeader);
