import SecondaryBorderBtn from '@/components/Buttons/SecondaryBorderBtn'
import BaseLayout from '../../layouts/BaseLayout/BaseLayout'
import outlinePlus from '@/assets/outlinePlus.svg'
import DownloadIcon from '@/assets/Projects/Download.svg'
import BlueTableHeader from '@/components/Table/BlueTableHeader'
import AllEmployeesComponents from '@/features/AllEmployees/components/AllEmployeesComponents'
import ReactPaginate from 'react-paginate'
import { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { employeesData } from '.'
import BtnCreate from '@/components/Buttons/BtnCreate'

const AllEmployees = () => {

    //  DropDown State
    const [departmentState, setDepartmentState] = useState<boolean>(false)
    const [positionState, setPositionState] = useState<boolean>(false)

    const openDepartment = () => {
        setDepartmentState(!departmentState)
        setPositionState(false)
    }

    const openPosition = () => {
        setDepartmentState(false)
        setPositionState(!positionState)
    }

    // Pagination
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState<any>();
    const n = 5
    useEffect(() => {
        setFilterData(
            employeesData.filter((_, index: number) => {
                return (index >= page * n) && (index < (page + 1) * n);
            })
        );
    }, [page]);

    return (
        <BaseLayout>
            <div className="p-6">
                <div className="flex items-center justify-between gap-[15px]">
                    <h1 className='text-primary font-bold text-2xl'>
                        All Employees
                    </h1>
                    <div className="flex items-center gap-[15px]">
                        <SecondaryBorderBtn text='Add Department' icon={outlinePlus} />
                        <SecondaryBorderBtn text='Add Position' icon={outlinePlus} />
                    </div>
                </div>
                <BlueTableHeader
                    departmentDropDown={
                        <ul className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${departmentState ? 'ulFilter' : 'h-0'}`} style={{ opacity: departmentState ? 1 : 0 }}>
                            <li className='py-[10px] border-b cursor-pointer'>All</li>
                            <li className='py-[10px] border-b cursor-pointer'>HR</li>
                            <li className='py-[10px] border-b cursor-pointer'>Designing</li>
                            <li className='py-[10px] border-b cursor-pointer'>Accountant</li>
                            <li className='py-[10px] border-b cursor-pointer'>Manager</li>
                        </ul>
                    }
                    positionDropDown={
                        <ul className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${positionState ? 'ulFilter' : 'h-0'}`} style={{ opacity: positionState ? 1 : 0 }}>
                            <li className='py-[10px] border-b cursor-pointer'>All</li>
                            <li className='py-[10px] border-b cursor-pointer'>HR</li>
                            <li className='py-[10px] border-b cursor-pointer'>Designing</li>
                            <li className='py-[10px] border-b cursor-pointer'>Accountant</li>
                            <li className='py-[10px] border-b cursor-pointer'>Manager</li>
                        </ul>
                    }
                    departmentClick={openDepartment}
                    positionClick={openPosition}
                >
                    <div className="h-[calc(100%-158px)] overflow-y-auto HideScroll">
                        {filterData && filterData.map(({ picture, employeeName, companyName, departmentName, positionName }: any) => {
                            return <AllEmployeesComponents employeeImg={picture} employeeName={employeeName} companyName={companyName} departmentName={departmentName} positionName={positionName} />
                        })}
                    </div>
                    <div className="h-[80px] w-full">
                        <ReactPaginate
                            containerClassName={"pagination flex items-center gap-[8px] ml-6"}
                            pageClassName={"size-[40px] rounded-lg flex items-center justify-center border border-[#D9D9DB]"}
                            activeClassName={"active border-primary"}
                            onPageChange={(event) => setPage(event.selected)}
                            pageCount={Math.ceil(employeesData.length / n)}
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
                </BlueTableHeader>
                <div className="w-fit mt-6 ms-auto">
                    <BtnCreate icon={DownloadIcon} text='Export As PDF' path='' />
                </div>
            </div>
        </BaseLayout>
    )
}

export default AllEmployees