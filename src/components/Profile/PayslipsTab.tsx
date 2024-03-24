import { useQuery } from '@tanstack/react-query'
import PayslipsTabElm from './PayslipsTabElm'
import getProfilePayslips from '@/features/profile/services/getProfilePayslips'
import Loading from '../Loading/Loading'
import formatTime from '@/utils/formatTime'
import formatMoney from '@/utils/formatMoney'

const PayslipsTab = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['getProfilePayslips'],
    queryFn: getProfilePayslips
  })

  console.log(data)

  return (
    <>
      {isLoading ?
        <Loading />
        :
        <div className='mt-5'>
          <div className='flex items-start justify-between mb-8'>
            <PayslipsTabElm title='Experience' text={data?.experience ? data?.experience : 'Not Determined'} />
            <PayslipsTabElm title='Hiring date' text={data?.hiring_date ? data?.hiring_date : 'Not Determined'} />
          </div>
          <div className='flex items-start justify-between mb-8'>
            <PayslipsTabElm title='Net salary' text={data?.net_salary ? `${formatMoney(data?.net_salary)}$` : 'Not Determined'} />
            <PayslipsTabElm title='Actual working days' text={data?.actual_working_days ? formatTime(data?.actual_working_days) : 'Not Determined'} />
          </div>
          <div className='flex items-start justify-between mb-8'>
            <PayslipsTabElm title='Overtime hours' text={data?.overtime_hours ? formatTime(data?.overtime_hours) : 'Not Determined'} />
            <PayslipsTabElm title='Daily over time coast' text={data?.daily_overtime_cost ? formatMoney(data?.daily_overtime_cost) : 'Not Determined'} />
          </div>
          <div className='flex items-start justify-between mb-8'>
            <PayslipsTabElm title='Total Wage' text={data?.total_wage ? formatMoney(data?.total_wage) : 'Not Determined'} />
            <PayslipsTabElm title='penalties' text={data?.penalties ? data?.penalties : 'Not Determined'} />
          </div>
          <div className='flex items-start justify-between mb-8'>
            <PayslipsTabElm title='Loans' text={data?.loans ? data?.loans : 'Not Determined'} />
            <PayslipsTabElm title='Total Salary' text={data?.total_salary ? `${formatMoney(data?.total_salary)}$` : 'Not Determined'} />
          </div>
        </div>
      }
    </>
  )
}

export default PayslipsTab