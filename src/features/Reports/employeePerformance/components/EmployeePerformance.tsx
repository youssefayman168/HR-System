import { useEffect, useState } from "react"
import { employeePerformanceData } from "."
import EmployeePerformanceTable from "./EmployeePerformanceTable"
import BtnCreate from "@/components/Buttons/BtnCreate"
import DownloadIcon from '@/assets/Projects/Download.svg'
import EmployeePerformanceElement from "./EmployeePerformanceElement"
import ReactPaginate from "react-paginate"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const EmployeePerformance = () => {

    //  DropDown State
    const [departmentState, setDepartmentState] = useState<boolean>(false)
    const [positionState, setPositionState] = useState<boolean>(false)

    const toggleDepartment = () => {
        setDepartmentState(!departmentState)
        setPositionState(false)
    }

    const togglePosition = () => {
        setPositionState(!positionState)
        setDepartmentState(false)
    }

    // Pagination
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState<any>();
    const n = 5
    useEffect(() => {
        setFilterData(
            employeePerformanceData.filter((_: any, index: number) => {
                return (index >= page * n) && (index < (page + 1) * n);
            })
        );
    }, [page]);

    return (
        <main>
            <EmployeePerformanceTable
                departmentDropDown={
                    <ul className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${departmentState ? 'ulFilter act' : 'h-0'}`} style={{ opacity: departmentState ? 1 : 0 }}>
                        <li className='py-[10px] border-b cursor-pointer'>200</li>
                        <li className='py-[10px] border-b cursor-pointer'>300</li>
                        <li className='py-[10px] border-b cursor-pointer'>400</li>
                        <li className='py-[10px] border-b cursor-pointer'>500</li>
                        <li className='py-[10px] border-b cursor-pointer'>600</li>
                    </ul>
                }
                positionDropDown={
                    <ul className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${positionState ? 'ulFilter act' : 'h-0'}`} style={{ opacity: positionState ? 1 : 0 }}>
                        <li className='py-[10px] border-b cursor-pointer'>PROGO</li>
                        <li className='py-[10px] border-b cursor-pointer'>SEC</li>
                        <li className='py-[10px] border-b cursor-pointer'>PROGO</li>
                        <li className='py-[10px] border-b cursor-pointer'>SEC</li>
                        <li className='py-[10px] border-b cursor-pointer'>PROGO</li>
                    </ul>
                }
                departmentClick={toggleDepartment}
                positionClick={togglePosition}
            >
                <div className="h-[calc(100%-158px)] overflow-y-auto HideScroll">
                    {filterData && filterData.map(({ picture, allEmployees, companyName, departmentName, position }: any, index: number) => {
                        return <EmployeePerformanceElement
                            key={index}
                            employeeImg={picture}
                            employeeName={allEmployees}
                            companyName={companyName}
                            departmentName={departmentName}
                            positionName={position}
                        />
                    })}
                </div>
                <div className="h-[80px] w-full">
                    <ReactPaginate
                        containerClassName={"pagination flex items-center gap-[8px] ml-6"}
                        pageClassName={"size-[40px] rounded-lg flex items-center justify-center border border-[#D9D9DB]"}
                        activeClassName={"active border-primary"}
                        onPageChange={(event) => setPage(event.selected)}
                        pageCount={Math.ceil(employeePerformanceData.length / n)}
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
            </EmployeePerformanceTable>
            <div className="w-fit mt-6 ms-auto">
                <BtnCreate icon={DownloadIcon} text='Export As PDF' path='' />
            </div>
        </main>
    )
}

export default EmployeePerformance