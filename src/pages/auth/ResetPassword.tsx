import React from 'react'
import BaseBtn from '../../components/BaseBtn'
import PasswordInp from '../../components/PasswordInp'
import AuthLayout from '../../layouts/AuthLayout'

const ResetPassword = () => {
  return (
    <AuthLayout>
      <h2 className="text-[35px] font-[600]">Forgot Password</h2>
      <p className="my-5 text-[18px] font-[500]">Please change your password and sign in again</p>
      <form action="#">
        <PasswordInp placeHolder='Enter Your Password' label='Password' />
        <PasswordInp placeHolder='Enter Your Password' label='Confirm Password' />
        <BaseBtn name="Change" styles={{ width: "600px", height: "62px", fontSize: "20px"}} />
      </form>
    </AuthLayout>
  )
}

export default ResetPassword