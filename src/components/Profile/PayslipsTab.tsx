import React from 'react'
import PayslipsTabElm from './PayslipsTabElm'

const PayslipsTab = () => {
  return (
    <div className='mt-5'>
        <div className='flex items-start justify-between mb-8'>

          <PayslipsTabElm title='Experience' text='Owners have view and edit access to user management, roles and permission by default which cannot be changed. You have an option to set permissions or add other admins' />
          <PayslipsTabElm title='Hiring date' text='Sat Feb 24 2024 00:40:19 GMT+0200' />
        </div>
        <div className='flex items-start justify-between mb-8'>
          <PayslipsTabElm title='Net salary' text='2446$'  />
          <PayslipsTabElm title='Actual working days' text='12 Days' />
        </div>
        <div className='flex items-start justify-between mb-8'>
          <PayslipsTabElm title='Overtime hours' text='12 Hours' />
          <PayslipsTabElm title='Daily over time coast' text='12$' />
        </div>
        <div className='flex items-start justify-between mb-8'>
          <PayslipsTabElm title='Total Wage' text='Total Wage' />
          <PayslipsTabElm title='penalties' text='penalties' />
        </div>
        <div className='flex items-start justify-between mb-8'>
          <PayslipsTabElm title='Loans' text='Loans' />
          <PayslipsTabElm title='Total Salary' text='6000$' />
        </div>

    </div>
  )
}

export default PayslipsTab