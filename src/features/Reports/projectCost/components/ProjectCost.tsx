import { useEffect, useState } from "react"
import ReportsStatsBox from "../../components/ReportsStatsBox"
import { projectCostData } from "."
import ReactPaginate from "react-paginate"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import BtnCreate from "@/components/Buttons/BtnCreate"
import DownloadIcon from '@/assets/Projects/Download.svg'
import ProjectCostTable from "./ProjectCostTable"
import ProjectCostElement from "./ProjectCostElement"

const ProjectCost = () => {

    //  DropDown State
    const [projectBudgetState, setProjectBudgetState] = useState<boolean>(false)
    const [companyDropdown, setCompanyDropdown] = useState<boolean>(false)

    const toggleProjectBudget = () => {
        setProjectBudgetState(!projectBudgetState)
        setCompanyDropdown(false)
    }

    const toggleCompany = () => {
        setCompanyDropdown(!companyDropdown)
        setProjectBudgetState(false)
    }

    // Pagination
    const [page, setPage] = useState(0);
    const [filterData, setFilterData] = useState<any>();
    const n = 5
    useEffect(() => {
        setFilterData(
            projectCostData.filter((_: any, index: number) => {
                return (index >= page * n) && (index < (page + 1) * n);
            })
        );
    }, [page]);

    return (
        <main>
            <div className="flex items-stretch gap-6 mt-5">
                <ReportsStatsBox title="Total Companies" value={24} status="decrease" statMessage="10% vs Last Mont" />
                <ReportsStatsBox title="Total Projects" value={300} status="increase" statMessage="10% vs Last Mont" />
                <ReportsStatsBox title="Total Budget" value={2000} status="increase" statMessage="10% vs Last Mont" unit="dollar" />
                <ReportsStatsBox title="Total working hours" value={300} status="increase" statMessage="10% vs Last Mont" unit="hours" />
            </div>
            <ProjectCostTable
                projectBudgetDropdown={
                    <ul className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${projectBudgetState ? 'ulFilter act' : 'h-0'}`} style={{ opacity: projectBudgetState ? 1 : 0 }}>
                        <li className='py-[10px] border-b cursor-pointer'>200</li>
                        <li className='py-[10px] border-b cursor-pointer'>300</li>
                        <li className='py-[10px] border-b cursor-pointer'>400</li>
                        <li className='py-[10px] border-b cursor-pointer'>500</li>
                        <li className='py-[10px] border-b cursor-pointer'>600</li>
                    </ul>
                }
                companyDropdown={
                    <ul className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${companyDropdown ? 'ulFilter act' : 'h-0'}`} style={{ opacity: companyDropdown ? 1 : 0 }}>
                        <li className='py-[10px] border-b cursor-pointer'>PROGO</li>
                        <li className='py-[10px] border-b cursor-pointer'>SEC</li>
                        <li className='py-[10px] border-b cursor-pointer'>PROGO</li>
                        <li className='py-[10px] border-b cursor-pointer'>SEC</li>
                        <li className='py-[10px] border-b cursor-pointer'>PROGO</li>
                    </ul>
                }
                projectBudgetClick={toggleProjectBudget}
                companyClick={toggleCompany}
            >
                <div className="h-[calc(100%-158px)] overflow-y-auto HideScroll">
                    {filterData && filterData.map(({ id, allProjects, companyName, projectBudget, workHours }: any, index: number) => {
                        return <ProjectCostElement
                            key={index}
                            id={id}
                            allProjects={allProjects}
                            companyName={companyName}
                            projectBudget={projectBudget}
                            workHours={workHours}
                        />
                    })}
                </div>
                <div className="h-[80px] w-full">
                    <ReactPaginate
                        containerClassName={"pagination flex items-center gap-[8px] ml-6"}
                        pageClassName={"size-[40px] rounded-lg flex items-center justify-center border border-[#D9D9DB]"}
                        activeClassName={"active border-primary"}
                        onPageChange={(event) => setPage(event.selected)}
                        pageCount={Math.ceil(projectCostData.length / n)}
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
            </ProjectCostTable>
            <div className="w-fit mt-6 ms-auto">
                <BtnCreate icon={DownloadIcon} text='Export As PDF' path='' />
            </div>
        </main>
    )
}

export default ProjectCost