import React from "react";

const OTPHeader = () => {
  return (
    <>
      <h2 className='text-[35px] font-[600]'>Forgot Password</h2>
      <p className='my-5 text-[18px] font-[500]'>
        Please enter the code we sent to the email you registered{" "}
      </p>
      <p className='my-5 mt-8 text-[16px] font-[500]'>Code</p>
    </>
  );
};

export default React.memo(OTPHeader);
