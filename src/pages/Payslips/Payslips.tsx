import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import BlueTableHeader from '@/components/Table/BlueTableHeader'
import BtnCreate from '@/components/Buttons/BtnCreate'
import plus from '../../assets/plus.svg'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { payslipsData } from './index'
import AllEmployeesComponents from '@/features/AllEmployees/components/AllEmployeesComponents'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { pathList } from '@/routes/routesPaths'

const Payslips = () => {


    const [departmentState, setDepartmentState] = useState<boolean>(false)
    const [positionState, setPositionState] = useState<boolean>(false)
    const [allEmployeesState, setAllEmployeesState] = useState<boolean>(false)

    const openDepartment = () => {
        setDepartmentState(!departmentState)
        setPositionState(false)
        setAllEmployeesState(false)
    }

    const openPosition = () => {
        setPositionState(!positionState)
        setDepartmentState(false)
        setAllEmployeesState(false)
    }
    const openAllEmployeesState = () => {
        setAllEmployeesState(!allEmployeesState)
        setPositionState(false)
        setDepartmentState(false)
    }



    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState<any>();
    const n = 6
    useEffect(() => {
        setFilterData(
            payslipsData.filter((_, index: number) => {
                return (index >= page * n) && (index < (page + 1) * n);
            })
        );
    }, [page]);



  return (
    <BaseLayout>
        <div className='p-6 pb-2'>
            <div className='CreatePayslip w-fit ms-auto'>
                <BtnCreate text='Create Payslip' icon={plus} path={pathList.create_payslip} />
            </div>
            <div className='bg-white rounded-[15px]'>
            <BlueTableHeader
                    departmentDropDown={
                        <ul className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${departmentState ? 'ulFilter act' : 'h-0'}`} style={{ opacity: departmentState ? 1 : 0 }}>
                            <li className='py-[10px] border-b cursor-pointer'>All</li>
                            <li className='py-[10px] border-b cursor-pointer'>HR</li>
                            <li className='py-[10px] border-b cursor-pointer'>Designing</li>
                            <li className='py-[10px] border-b cursor-pointer'>Accountant</li>
                            <li className='py-[10px] border-b cursor-pointer'>Manager</li>
                        </ul>
                    }
                    positionDropDown={
                        <ul className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${positionState ? 'ulFilter act' : 'h-0'}`} style={{ opacity: positionState ? 1 : 0 }}>
                            <li className='py-[10px] border-b cursor-pointer'>All</li>
                            <li className='py-[10px] border-b cursor-pointer'>HR</li>
                            <li className='py-[10px] border-b cursor-pointer'>Designing</li>
                            <li className='py-[10px] border-b cursor-pointer'>Accountant</li>
                            <li className='py-[10px] border-b cursor-pointer'>Manager</li>
                        </ul>
                    }
                    allEmployeesDropDown={
                        <ul className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${allEmployeesState ? 'ulFilter act' : 'h-0'}`} style={{ opacity: allEmployeesState ? 1 : 0 }}>
                            <li className='py-[10px] border-b cursor-pointer'>All</li>
                            <li className='py-[10px] border-b cursor-pointer'>HR</li>
                            <li className='py-[10px] border-b cursor-pointer'>Designing</li>
                            <li className='py-[10px] border-b cursor-pointer'>Accountant</li>
                            <li className='py-[10px] border-b cursor-pointer'>Manager</li>
                        </ul>
                    }
                    departmentClick={openDepartment}
                    positionClick={openPosition}
                    allEmployeesClick={openAllEmployeesState}
                >
                    <div className="Body w-full h-[calc(100vh-330px)] HideScroll overflow-y-auto">
                        {filterData && filterData.map(({ picture, employeeName, companyName, departmentName, positionName }: any, index: number) => {
                            return <AllEmployeesComponents key={index} styleDeleteBtn={{display: "none"}} employeeImg={picture} employeeName={employeeName} companyName={companyName} departmentName={departmentName} positionName={positionName}/>
                        })}
                    </div>

                    <div className='py-3 flex items-center justify-between px-6'>
                        <div>
                            <ReactPaginate
                                containerClassName={"pagination flex items-center gap-[8px]"}
                                pageClassName={"size-[40px] rounded-lg flex items-center justify-center border border-[#D9D9DB]"}
                                activeClassName={"active border-primary"}
                                onPageChange={(event) => setPage(event.selected)}
                                pageCount={Math.ceil(payslipsData.length / n)}
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
                        <div>
                            <p>Showing <span className='w-[13px] inline-block text-center'>{page + 1}</span> to 10 out of 60 records</p>
                        </div>
                    </div>
                </BlueTableHeader>
            </div>
        </div>
    </BaseLayout>
  )
}

export default Payslips