import ViewInsightStatsBox from '@/features/Reports/components/ViewInsightStatsBox'
import Calendar from '../../assets/Analysis/Calendar.svg'
import DateInp from '../DateInput/Date'
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowDropdown } from 'react-icons/io'
import { useEffect, useState } from 'react'
import RequestsTableElm from './RequestsTableElm'
import ReactPaginate from 'react-paginate'
import DownLoad from '../../assets/Projects/Download.svg'
import {PayslipsData} from './IndexPayslips'
import BtnCreate from '../Buttons/BtnCreate'

const PayslipsTab = () => {


    const [ EmployeeState , setEmployeeState ] = useState(false)
    const [ Department , setDepartment ] = useState(false)

    const EmployeeList = () => {
        setEmployeeState(!EmployeeState)
        setDepartment(false)
    }
    
    const DepartmentList = () => {
        setDepartment(!Department)
        setEmployeeState(false)
    }


    const [currentPage, setCurrentPage] = useState(0)
    const [filterPayslipsData, setFilterPayslipsData] = useState<any>()
    const itemsNum = 4

    useEffect(() => {
        setFilterPayslipsData(
            PayslipsData.filter((_, index: number) => {
                return (index >= currentPage * itemsNum) && (index < (currentPage + 1) * itemsNum);
            })
        );
    }, [currentPage]);



  return (
    <>
    <div className='flex gap-5 mt-5 '>
        <ViewInsightStatsBox title="Total Projects" value={24}  />
        <ViewInsightStatsBox title="Total Projects" value={24} link="View All"/>
        <ViewInsightStatsBox title="Total Projects" value={24} link="View All" />
    </div>
    <div className='flex gap-5 mt-5 w-[66%] '>
        <ViewInsightStatsBox title="Total Projects" value={24} link="View All"/>
        <ViewInsightStatsBox title="Total Projects" value={24} link="View All" />
    </div>
    <div className='w-fit ms-auto my-5 '>
        <DateInp icon={Calendar} styles={{ color: "black", border: "1px solid #00000033", flexDirection: "row-reverse" }} stylesInp={{ display: "flex", flexDirection: "row-reverse" }} />
    </div>
    <div className='border-[1px] border-[#E0E0E0] p-4 rounded-[12px]'>
        <p className='text-[20px] font-[500] mb-5 text-[#161E54]'>Requests</p>
        <div className='Table'>
                
            <div className="Header py-5 mb-3 px-4 bg-[#FAFAFA] rounded-tr-[6px] rounded-tl-[6px] flex items-center gap-6 w-full">
                <button onClick={EmployeeList} className="w-[26%]  flex items-center gap-1 relative">
                    <span className="absolute top-[50px] left-0">
                        <ul className={`bg-white duration-250 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] duration-300 ${EmployeeState ? 'ulFilter act' : 'h-0'}`} style={{ opacity: EmployeeState ? 1 : 0 }}>
                            <li className='py-[10px] border-b cursor-pointer'>All</li>
                            <li className='py-[10px] border-b cursor-pointer'>HR</li>
                            <li className='py-[10px] border-b cursor-pointer'>Designing</li>
                            <li className='py-[10px] border-b cursor-pointer'>Accountant</li>
                            <li className='py-[10px] border-b cursor-pointer'>Manager</li>
                        </ul>
                    </span>
                    Request Type
                    <IoMdArrowDropdown />
                </button>
                <p className="w-[26%] ">Date</p>
                <button onClick={DepartmentList} className="w-[26%]  flex items-center gap-1 relative">
                    <span className="absolute top-[50px] left-0">
                        <ul className={`bg-white duration-250 text-center absolute duration-300 overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${Department ? 'ulFilter act' : 'h-0'}`} style={{ opacity: Department ? 1 : 0 }}>
                            <li className='py-[10px] border-b cursor-pointer'>All</li>
                            <li className='py-[10px] border-b cursor-pointer'>HR</li>
                            <li className='py-[10px] border-b cursor-pointer'>Designing</li>
                            <li className='py-[10px] border-b cursor-pointer'>Accountant</li>
                            <li className='py-[10px] border-b cursor-pointer'>Manager</li>
                        </ul>
                    </span>
                    Action
                    <IoMdArrowDropdown />
                </button>
            </div>


            <div className='Body h-[calc(100vh-500px)]'>
                {filterPayslipsData && filterPayslipsData.map((text : any, index: number) => {
                    return  <RequestsTableElm key={index} text1={text.text1} text2={text.text2} text3={text.text3} text4={text.text4} />
                })}
            </div>
            <div>
                <div>
                    <ReactPaginate
                        containerClassName={"pagination flex items-center mt-[8px] pt-[6px] gap-[8px]"}
                        pageClassName={"size-[40px] rounded-lg flex items-center justify-center border border-[#D9D9DB]"}
                        activeClassName={"active border-primary"}
                        onPageChange={(event) => setCurrentPage(event.selected)}
                        pageCount={Math.ceil(PayslipsData.length / itemsNum)}
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
                <p className='mt-6'>Total Taken Days: 13 Days</p>
            </div>
        </div>
    </div>
    <div className='w-fit ms-auto mt-6'>
        <BtnCreate text='Export As PDF' icon={DownLoad} path='' />
    </div>
    </>
  )
}

export default PayslipsTab