import NameProjectsInf from '@/components/NameProjects/NameProjectsInf'
import BaseLayout from '../../layouts/BaseLayout/BaseLayout'
import Calendar from '../../assets/Analysis/Calendar.svg'
import DateInp from '@/components/DateInput/Date'
import IncreaseLine from '../../assets/Analysis/IncreaseLine.svg'
import DecreaseLine from '../../assets/Analysis/DecreaseLine.svg'
import DecreaseBTM from '../../assets/Analysis/DecreaseBTM.svg'
import IncreaseTOP from '../../assets/Analysis/IncreaseTOP.svg'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useEffect, useState } from 'react'
import {employeesDataFunds} from './index'
import AllEmployeeFunds from '@/components/Analysis/AllEmployeeFunds'
import ReactPaginate from 'react-paginate'
import Header from '@/components/Analysis/Header';

//  Pie
import { Chart as ChartJS, ArcElement, Tooltip , CategoryScale , LinearScale , BarElement , Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip);
export const data = {
    labels: [],
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


//  Bar
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker'
import IncreaseDec from '@/components/Analysis/IncreaseDec'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);
export const options = {
  responsive: true,
};
const labels = ['Sat', 'Sun', 'Man', 'Tue', 'Wed', 'Thu', 'Fri'];
export const data2 = {
  labels,
  datasets: [
    {
      label: '',
      data: labels.map(() => (faker.datatype.number({ min: 0, max: 1000 }))),
      backgroundColor: '#224886',
      borderRadius: '30' ,      
    },
    {
      label: '2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#224886BA',
      borderRadius: '30' ,
    },
  ],
};


const Analysis = () => {

    const [ currentPage , setCurrentPage ] = useState(0)
    const [ filterDataFunds , setFilterDataFunds ] = useState<any>()

    const itemsNum = 4

    useEffect(() => {
        setFilterDataFunds(
            employeesDataFunds.filter((_, index: number) => {
                return (index >= currentPage * itemsNum) && (index < (currentPage + 1) * itemsNum);
            })
        );
    }, [currentPage]);

    

    return (
        <BaseLayout>
            <div className='p-6 h-[calc(100vh-80px)] HideScroll overflow-y-auto '>
                <div className='flex gap-5'>
                    <div className='Header bg-white py-8 pb-0 px-16 w-[100%] rounded-[16px] '>
                        <div className='flex items-center justify-between '>
                            <p className='text-[20px] font-[600] '>Employee Funds</p>
                            <div>
                                <DateInp icon={Calendar} styles={{color: "black" , border: "1px solid #00000033" , flexDirection: "row-reverse" }} stylesInp={{display: "flex" , flexDirection: "row-reverse" }} />
                            </div>
                        </div>
                            <Header>
                            <div className='Table h-[260px] overflow-y-auto HideScroll '>

                                {filterDataFunds && filterDataFunds.map(({ picture, employeeName, Department, Hours, TotalMonthFund , Productivity , type }: any, index: number) => {
                                    return <AllEmployeeFunds key={index} employeeImg={picture} EmpolyeeName={employeeName} Department={Department} Hours={Hours} TotalMonthFund={TotalMonthFund} Productivity={Productivity} type={type} />
                                })}
                            </div>
                            <div>
                                <ReactPaginate
                                    containerClassName={"pagination flex items-center mt-[8px] pt-[6px] gap-[8px]"}
                                    pageClassName={"size-[40px] rounded-lg flex items-center justify-center border border-[#D9D9DB]"}
                                    activeClassName={"active border-primary"}
                                    onPageChange={(event) => setCurrentPage(event.selected)}
                                    pageCount={Math.ceil(employeesDataFunds.length / itemsNum)}
                                    breakLabel="..."
                                    previousLabel={
                                        <div className='border border-[#D9D9DB] size-[40px] flex items-center justify-center rounded-lg'>
                                            <IoIosArrowBack />
                                        </div>
                                    }
                                    nextLabel={
                                        <div className='border border-[#D9D9DB] size-[40px] flex items-center justify-center rounded-lg'>
                                            <IoIosArrowForward />
                                        </div>
                                    }
                                    />
                        </div>
                    </Header>
                    </div>
                    <div className='Year Projects bg-white p-5 pb-0 rounded-[16px] w-[24%] '>
                        <p className='mb-6 font-[600] text-[21px] '>Year Projects</p>
                        <div className='h-[50vh] xxxl:h-[42vh] xxl:h-[47vh] max-xxl:h-[52vh] overflow-y-auto HideScroll '>
                            <NameProjectsInf Name='Lorem ipsum' Value='20k' styleName={{color: "#1c1c1c" , width: "260px" , marginBottom: "13px" , fontSize: "18px" }} />
                            <NameProjectsInf Name='Lorem ipsum' Value='20k' styleName={{color: "#1c1c1c" , width: "260px" , marginBottom: "13px" , fontSize: "18px" }} />
                            <NameProjectsInf Name='Lorem ipsum' Value='20k' styleName={{color: "#1c1c1c" , width: "260px" , marginBottom: "13px" , fontSize: "18px" }} />
                            <NameProjectsInf Name='Lorem ipsum' Value='20k' styleName={{color: "#1c1c1c" , width: "260px" , marginBottom: "13px" , fontSize: "18px" }} />
                            <NameProjectsInf Name='Lorem ipsum' Value='20k' styleName={{color: "#1c1c1c" , width: "260px" , marginBottom: "13px" , fontSize: "18px" }} />
                            <NameProjectsInf Name='Lorem ipsum' Value='20k' styleName={{color: "#1c1c1c" , width: "260px" , marginBottom: "13px" , fontSize: "18px" }} />
                            <NameProjectsInf Name='Lorem ipsum' Value='20k' styleName={{color: "#1c1c1c" , width: "260px" , marginBottom: "13px" , fontSize: "18px" }} />
                            <NameProjectsInf Name='Lorem ipsum' Value='20k' styleName={{color: "#1c1c1c" , width: "260px" , marginBottom: "13px" , fontSize: "18px" }} />
                            <NameProjectsInf Name='Lorem ipsum' Value='20k' styleName={{color: "#1c1c1c" , width: "260px" , marginBottom: "13px" , fontSize: "18px" }} />
                        </div>
                        <div className='Total py-1'>
                            <NameProjectsInf Name='Total' Value='100k' styleName={{color: "#1c1c1c" , width: "260px" , marginBottom: "13px" , fontSize: "19px" , fontWeight: "800" }} styleVal={{fontSize: "19px" , fontWeight: "800"}} styleDiv={{margin: "0"}} />
                        </div>
                    </div>
                </div>


                <div className='flex gap-5 mt-6'>
                    <div className='bg-white py-6 px-10 w-[60%] rounded-[16px] '>
                        <div className='flex items-center justify-between mb-6 '>
                            <div className='flex items-center gap-6'>
                                <p className='font-[500] text-[17px] '>Company Profit And Expands</p>
                                <DateInp icon={Calendar} styles={{color: "black" , border: "1px solid #00000033" , flexDirection: "row-reverse" }} stylesInp={{display: "flex" , flexDirection: "row-reverse" }} />
                            </div>
                            <div className='flex items-center gap-8'>
                                <p className='relative after:absolute after:bg-[#343C6A] after:top-[50%] after:translate-y-[-50%] after:w-[6px] after:h-[6px] after:rounded-full after:left-[-12px] '>Profit</p>
                                <p className='relative after:absolute after:bg-[#7694BA] after:top-[50%] after:translate-y-[-50%] after:w-[6px] after:h-[6px] after:rounded-full after:left-[-12px] '>Expand</p>
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
                            <Pie data={data} />
                        </div>
                        <div className='Info mt-5'>
                            <div className='flex items-center justify-between mb-4'>
                                <p className='relative after:absolute after:bg-[#343C6A] after:top-[50%] after:translate-y-[-50%] after:w-[6px] after:h-[6px] after:rounded-full after:left-[-12px] '>Design</p>
                                <p>30K</p>
                                <p className='relative after:absolute after:bg-[#7694BA] after:top-[50%] after:translate-y-[-50%] after:w-[6px] after:h-[6px] after:rounded-full after:left-[-12px] '>HR</p>
                                <p>50K</p>
                            </div>
                            <div className='flex items-center justify-between '>
                                <p className='relative after:absolute after:bg-[#A1E3CB] after:top-[50%] after:translate-y-[-50%] after:w-[6px] after:h-[6px] after:rounded-full after:left-[-12px] '>Managment</p>
                                <p>60K</p>
                                <p className='relative after:absolute after:bg-[#1814F3] after:top-[50%] after:translate-y-[-50%] after:w-[6px] after:h-[6px] after:rounded-full after:left-[-12px] '>Other</p>
                                <p>40K</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-5 mt-6 '>
                    <div className='relative py-6 px-10 w-[50%] h-[calc(20vh+50px)] rounded-[16px] bg-white '>
                        <IncreaseDec title='Company Expands' price='192,065' lastYear='132,000' type='increase' arrowImg={IncreaseLine} arrowImgSm={IncreaseTOP} />
                    </div>
                    <div className='relative py-6 px-10 w-[50%] h-[calc(20vh+50px)] rounded-[16px] bg-white '>
                        <IncreaseDec title='Company Profit' price='192,065' lastYear='132,000' type='decrease' arrowImg={DecreaseLine} arrowImgSm={DecreaseBTM} />
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default Analysis