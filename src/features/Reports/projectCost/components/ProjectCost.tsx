import { useEffect, useState } from "react";
import ReportsStatsBox from "../../components/ReportsStatsBox";
import { projectCostData } from ".";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BtnCreate from "@/components/Buttons/BtnCreate";
import DownloadIcon from "@/assets/Projects/Download.svg";
import ProjectCostTable from "./ProjectCostTable";
import ProjectCostElement from "./ProjectCostElement";
import { useQuery } from "@tanstack/react-query";
import getProjectsAnalytics from "../services/getProjectsAnalytics";
import getProjects from "@/features/Home/services/getProjects";

const ProjectCost = () => {
  //  DropDown State
  const [projectBudgetState, setProjectBudgetState] = useState<boolean>(false);
  const [companyDropdown, setCompanyDropdown] = useState<boolean>(false);

  const toggleProjectBudget = () => {
    setProjectBudgetState(!projectBudgetState);
    setCompanyDropdown(false);
  };

  const toggleCompany = () => {
    setCompanyDropdown(!companyDropdown);
    setProjectBudgetState(false);
  };

  // Pagination
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState<any>();
  const n = 5;
  useEffect(() => {
    setFilterData(
      projectCostData.filter((_: any, index: number) => {
        return index >= page * n && index < (page + 1) * n;
      })
    );
  }, [page]);

  const projectsAnalytics = useQuery({
    queryKey: ["projects-analytics"],
    queryFn: getProjectsAnalytics,
  });
  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });
  console.log(projects.data);
  return (
    <main>
      <div className='flex items-stretch gap-6 mt-5'>
        {projectsAnalytics.data && (
          <>
            <ReportsStatsBox
              title='Total Companies'
              value={projectsAnalytics.data?.total_companies}
              //   status='decrease'
              //   statMessage='10% vs Last Mont'
            />
            <ReportsStatsBox
              title='Total Projects'
              value={projectsAnalytics.data?.projects.total}
              status={projectsAnalytics.data?.projects.monthly.status}
              statMessage={`${projectsAnalytics.data?.projects.monthly.rate} vs Last Mont`}
            />
            <ReportsStatsBox
              title='Total Budget'
              value={projectsAnalytics.data?.budget.total}
              status={projectsAnalytics.data?.budget.monthly.status}
              statMessage={`${projectsAnalytics.data?.budget.monthly.rate} vs Last Mont`}
              unit='dollar'
            />
            <ReportsStatsBox
              title='Total working hours'
              value={projectsAnalytics.data?.working_hours.total}
              status={projectsAnalytics.data?.working_hours.monthly.status}
              statMessage={`${projectsAnalytics.data?.working_hours.monthly.rate} vs Last Mont`}
              unit='hours'
            />
          </>
        )}
      </div>
      <ProjectCostTable
        projectBudgetDropdown={
          <ul
            className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${
              projectBudgetState ? "ulFilter act" : "h-0"
            }`}
            style={{ opacity: projectBudgetState ? 1 : 0 }}
          >
            <li className='py-[10px] border-b cursor-pointer'>200</li>
            <li className='py-[10px] border-b cursor-pointer'>300</li>
            <li className='py-[10px] border-b cursor-pointer'>400</li>
            <li className='py-[10px] border-b cursor-pointer'>500</li>
            <li className='py-[10px] border-b cursor-pointer'>600</li>
          </ul>
        }
        companyDropdown={
          <ul
            className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${
              companyDropdown ? "ulFilter act" : "h-0"
            }`}
            style={{ opacity: companyDropdown ? 1 : 0 }}
          >
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
        {projects.data && (
          <div className='h-[calc(100%-158px)] overflow-y-auto HideScroll'>
            {projects.data?.map((project: any) => {
              return (
                <ProjectCostElement
                  key={project.id}
                  id={project.id}
                  allProjects={project.project_name}
                  companyName={project.company.name}
                  projectBudget={project.budget}
                  workHours={project.work_hours}
                />
              );
            })}
            {/* {filterData &&
            filterData.map(
              (
                { id, allProjects, companyName, projectBudget, workHours }: any,
                index: number
              ) => {
                return (
                  <ProjectCostElement
                    key={index}
                    id={id}
                    allProjects={allProjects}
                    companyName={companyName}
                    projectBudget={projectBudget}
                    workHours={workHours}
                  />
                );
              }
            )} */}
          </div>
        )}
        <div className='h-[80px] w-full'>
          <ReactPaginate
            containerClassName={"pagination flex items-center gap-[8px] ml-6"}
            pageClassName={
              "size-[40px] rounded-lg flex items-center justify-center border border-[#D9D9DB]"
            }
            activeClassName={"active border-primary"}
            onPageChange={(event) => setPage(event.selected)}
            pageCount={Math.ceil(projectCostData.length / n)}
            breakLabel='...'
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
      <div className='w-fit mt-6 ms-auto'>
        <BtnCreate icon={DownloadIcon} text='Export As PDF' path='' />
      </div>
    </main>
  );
};

export default ProjectCost;
