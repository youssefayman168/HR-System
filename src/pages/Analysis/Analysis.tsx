import { Bar } from 'react-chartjs-2';
import IncreaseDec from '@/components/Analysis/IncreaseDec'
import ValueColor from '@/components/Analysis/ValueColor'
import { useQuery } from '@tanstack/react-query'
import getEmployeesAnalysis from '@/features/analysis/services/getEmplyeesAnalysis'
import getAllProjects from '@/features/Projects/all/services/getAllProjects'
import NameProjectsInf from '@/components/NameProjects/NameProjectsInf'
import BaseLayout from '../../layouts/BaseLayout/BaseLayout'
import { useEffect, useState } from 'react'
import AllEmployeeFunds from '@/components/Analysis/AllEmployeeFunds'
import Header from '@/components/Analysis/Header';
import { Chart as ChartJS, ArcElement, Tooltip, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import formatMoney from '@/utils/formatMoney';
import Loading from '@/components/Loading/Loading';
import getDepartmentFunds from '@/features/analysis/services/getDepartmentFunds';
import getSECProfits from '@/features/analysis/services/getSECProfits';
import getWorkingHours from '@/features/Home/services/getWorkingHours';
import getChartData from '@/features/analysis/services/getChartData';
ChartJS.register(ArcElement, Tooltip);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);
export const pieData = {
  datasets: [
    {
      data: [15, 25, 35, 25],
      backgroundColor: [
        '#7694BA', // Right
        '#1814F3', //Blue
        '#A1E3CB', //Green
        '#343C6A', //BlueDark
      ],
      borderColor: [
        'white',
      ],
    },
  ],
};


const Analysis = () => {


  // Chart Data
  const chartData = useQuery({
    queryKey: ['getChartData'],
    queryFn: getChartData
  })

  const options = {
    responsive: true,
  };
  const labels = chartData?.data?.map(({ month }: any) => month);
  const data2: any = {
    labels,
    datasets: [
      {
        data: labels?.map(() => chartData?.data?.map(({ profit }: any) => profit)),
        backgroundColor: '#224886',
        borderRadius: '30',
      },
      {
        data: labels?.map(() => chartData?.data?.map(({ worked_hours }: any) => worked_hours)),
        backgroundColor: '#224886BA',
        borderRadius: '30',
      },
    ],
  };
  // Employee Funds Box
  const [dateValue, setDateValue] = useState('2024-03-1')

  const employees = useQuery({
    queryKey: ['getEmployeesAnalysis', dateValue],
    queryFn: () => getEmployeesAnalysis(dateValue)
  })

  // Projects Box
  const { data, isLoading } = useQuery({
    queryKey: ['projectElement'],
    queryFn: getAllProjects
  })

  const [totalBudget, setTotalBudget] = useState(0);

  // Calculate Total Budget
  useEffect(() => {
    const total = data?.reduce((acc: any, { budget }: any) => acc + budget, 0);
    setTotalBudget(total);
  }, [data]);

  // Department Funds Box
  const departmentFunds = useQuery({
    queryKey: ['getDepartmentFunds'],
    queryFn: getDepartmentFunds
  })

  // SEC Profits Box
  const secProfits = useQuery({
    queryKey: ['getSECProfits'],
    queryFn: getSECProfits
  })

  console.log(chartData?.data)

  // Working Hours Box
  const workingHours = useQuery({
    queryKey: ['getWorkingHours'],
    queryFn: getWorkingHours
  })

  return (
    <BaseLayout>
      {isLoading ? <Loading />
        :
        <div className='p-6 h-[calc(100vh-80px)] HideScroll overflow-y-auto '>
          <div className='flex gap-5'>
            <div className='Header bg-white py-8 pb-0 px-16 w-[100%] rounded-[16px] '>
              <div className='flex items-center justify-between '>
                <p className='text-[20px] font-[600] '>Employee Funds</p>
                <input
                  onChange={(e: any) => setDateValue(e.target.value)}
                  className='rounded-[6px] border border-[#224886] focus:outline-none px-3 py-2'
                  type='date'
                  value={dateValue}
                  id='dateInput'
                  name='dateInput'
                />
              </div>
              <Header>
                <div className='Table h-full overflow-y-auto HideScroll '>
                  {employees?.data?.data?.map(({ id, image, name, department, total_work_hours, total_month_fund, productivity }: any,) => {
                    return <AllEmployeeFunds
                      key={id}
                      employeeImg={`https://sec-system-apis.up.railway.app${image}`}
                      EmpolyeeName={name}
                      Department={department}
                      Hours={total_work_hours}
                      TotalMonthFund={total_month_fund}
                      Productivity={productivity?.rate}
                      type={productivity?.status} />
                  })}
                </div>
              </Header>
            </div>
            <div className='Year Projects bg-white p-5 pb-0 rounded-[16px] w-[24%] '>
              <p className='mb-6 font-[600] text-[21px] '>Projects</p>
              <div className='h-[50vh] xxxl:h-[42vh] xxl:h-[47vh] max-xxl:h-[52vh] overflow-y-auto HideScroll '>
                {data?.map(({ project_name, budget }: any) => {
                  return <NameProjectsInf Name={project_name} Value={`${formatMoney(budget)}$`} styleName={{ color: "#1c1c1c", width: "260px", marginBottom: "13px", fontSize: "18px" }} />
                })}
              </div>
              <div className='Total py-1'>
                <NameProjectsInf Name='Total' Value={`${formatMoney(totalBudget)}$`} styleName={{ color: "#1c1c1c", width: "260px", marginBottom: "13px", fontSize: "19px", fontWeight: "800" }} styleVal={{ fontSize: "19px", fontWeight: "800" }} styleDiv={{ margin: "0" }} />
              </div>
            </div>
          </div>


          <div className='flex gap-5 mt-6'>
            <div className='bg-white py-6 px-10 w-[60%] rounded-[16px] '>
              <div className='flex items-center justify-between mb-6 '>
                <div className='flex items-center gap-6'>
                  <p className='font-[500] text-[17px] '>Company Profit And Worked Hours</p>
                </div>
                <div className='flex items-center gap-5'>
                  <ValueColor name='Profit' aftColor='profit' styleName={{ width: "fit-content" }} />
                  <ValueColor name='worked hours' aftColor='worked hours' styleName={{ width: "fit-content" }} />
                </div>
              </div>
              <div className='w-[97%] mx-auto'>
                <Bar redraw options={options} data={data2} />
              </div>
            </div>

            <div className='bg-white py-6 px-10 w-[40%] rounded-[16px] '>
              <div className='flex items-center justify-between mb-3 '>
                <p className='font-[600] text-[20px]'>Funds By Department</p>
                <p>Total <span className='font-[600] ms-3 text-[17px]'>34K</span></p>
              </div>
              <div className='w-[300px] max-xxl:w-[200px] mx-auto'>
                <Pie data={pieData} />
              </div>
              <div className='Info mt-10'>
                <div className='flex items-center justify-between mb-8'>
                  <ValueColor aftColor='design' name='Design' val='30K' />
                  <ValueColor aftColor='hr' name='HR' val='50K' />
                </div>
                <div className='flex items-center justify-between '>
                  <ValueColor aftColor='managment' name='Managment' val='60K' />
                  <ValueColor aftColor='other' name='Other' val='40K' />
                </div>
              </div>
            </div>
          </div>

          <div className='flex gap-5 mt-6 '>
            <div className='relative py-6 px-10 w-[50%] h-[calc(20vh+50px)] rounded-[16px] bg-white '>
              <IncreaseDec
                title='Company Working Hours'
                price={workingHours?.data?.data?.total_wh_today ? workingHours?.data?.data?.total_wh_today : 0}
                type={workingHours?.data?.data?.increase_rate <= 0 ? 'decrease' : 'increase'}
                subNumber={workingHours?.data?.data?.total_wh_yesterday ? `${workingHours?.data?.data?.total_wh_yesterday} hours` : 0}
                rate={workingHours?.data?.data?.increase_rate} />
            </div>
            <div className='relative py-6 px-10 w-[50%] h-[calc(20vh+50px)] rounded-[16px] bg-white '>
              <IncreaseDec
                title='Company Profit'
                price={`${secProfits?.data?.current_year_profit}$`}
                type={secProfits?.data?.status}
                subNumber={secProfits?.data?.data?.last_year_profit ? `${secProfits?.data?.data?.last_year_profit} last year` : `0 last year `}
                rate={secProfits?.data?.rate} />
            </div>
          </div>
        </div>
      }
    </BaseLayout>
  )
}

export default Analysis