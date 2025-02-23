import { useEffect, useState } from "react";
import ReportsStatsBox from "../../components/ReportsStatsBox";
import SalariesTable from "./SalariesTable";
import ReactPaginate from "react-paginate";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SalaryElement from "./SalaryElement";
import { salariesData } from "./index";
import BtnCreate from "@/components/Buttons/BtnCreate";
import DownloadIcon from "@/assets/Projects/Download.svg";
import { useQuery } from "@tanstack/react-query";
import getSalaryAnalytics from "../services/getSalaryAnalytics";
import getAllEmployees from "@/features/AllEmployees/services/getAllEmployees";

const SalaryRecords = () => {
  //  DropDown State
  const [departmentState, setDepartmentState] = useState<boolean>(false);
  const [positionState, setPositionState] = useState<boolean>(false);

  const openDepartment = () => {
    setDepartmentState(!departmentState);
    setPositionState(false);
  };

  const openPosition = () => {
    setDepartmentState(false);
    setPositionState(!positionState);
  };

  // Pagination
  const [page, setPage] = useState(0);
  const [filterData, setFilterData] = useState<any>();
  const n = 5;
  useEffect(() => {
    setFilterData(
      salariesData.filter((_: any, index: number) => {
        return index >= page * n && index < (page + 1) * n;
      })
    );
  }, [page]);

  const salaryAnalytics = useQuery({
    queryKey: ["salary-analytics"],
    queryFn: getSalaryAnalytics,
  });
  const { data, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: getAllEmployees,
  });

  console.log(data?.data);
  return (
    <main>
      <div className='flex items-stretch gap-6 mt-5'>
        {salaryAnalytics.data && (
          <>
            <ReportsStatsBox
              title='Total Department'
              value={salaryAnalytics.data?.total_departments}
            />
            <ReportsStatsBox
              title='Total Employees'
              value={salaryAnalytics.data?.employee.total}
              status={salaryAnalytics.data?.employee.monthly_analysis.status}
              statMessage={`${salaryAnalytics.data?.employee.monthly_analysis.rate} vs Last Mont`}
            />
            <ReportsStatsBox
              title='Total Salaries'
              value={salaryAnalytics.data?.salaries.total}
              status={salaryAnalytics.data?.salaries.monthly.status}
              statMessage={`${salaryAnalytics.data?.salaries.monthly.rate} vs Last Mont`}
              unit='dollar'
            />
            <ReportsStatsBox
              title='Total working hours'
              value={salaryAnalytics.data?.working_hours.total}
              status={
                salaryAnalytics.data?.working_hours.monthly_analysis.status
              }
              statMessage={`${salaryAnalytics.data?.working_hours.monthly_analysis.rate} vs Last Mont`}
              unit='hours'
            />
          </>
        )}
      </div>
      <SalariesTable
        departmentDropDown={
          <ul
            className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${
              departmentState ? "ulFilter act" : "h-0"
            }`}
            style={{ opacity: departmentState ? 1 : 0 }}
          >
            <li className='py-[10px] border-b cursor-pointer'>All</li>
            <li className='py-[10px] border-b cursor-pointer'>HR</li>
            <li className='py-[10px] border-b cursor-pointer'>Designing</li>
            <li className='py-[10px] border-b cursor-pointer'>Accountant</li>
            <li className='py-[10px] border-b cursor-pointer'>Manager</li>
          </ul>
        }
        positionDropDown={
          <ul
            className={`bg-white duration-300 text-center absolute overflow-hidden w-[250px] text-black rounded-lg shadow-lg z-[2222] ${
              positionState ? "ulFilter act" : "h-0"
            }`}
            style={{ opacity: positionState ? 1 : 0 }}
          >
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
        <div className='h-[calc(100%-158px)] overflow-y-auto HideScroll'>
          {data?.data.map((employee: any) => (
            <SalaryElement
              key={employee.id}
              employeeImg={employee.image}
              employeeName={employee.name}
              companyName={employee.company}
              departmentName={employee.department}
              positionName={employee.position}
              hourPrice={employee.hr_rate}
              workHours={employee.total_work_hours}
            />
          ))}
          {/* {filterData &&
            filterData.map(
              (
                {
                  picture,
                  employeeName,
                  companyName,
                  departmentName,
                  positionName,
                }: any,
                index: number
              ) => {
                return (
                  <SalaryElement
                    key={index}
                    employeeImg={picture}
                    employeeName={employeeName}
                    companyName={companyName}
                    departmentName={departmentName}
                    positionName={positionName}
                    hourPrice={10}
                    workHours={300}
                  />
                );
              }
            )} */}
        </div>
        <div className='h-[80px] w-full'>
          <ReactPaginate
            containerClassName={"pagination flex items-center gap-[8px] ml-6"}
            pageClassName={
              "size-[40px] rounded-lg flex items-center justify-center border border-[#D9D9DB]"
            }
            activeClassName={"active border-primary"}
            onPageChange={(event) => setPage(event.selected)}
            pageCount={Math.ceil(salariesData.length / n)}
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
      </SalariesTable>
      <div className='w-fit mt-6 ms-auto'>
        <BtnCreate icon={DownloadIcon} text='Export As PDF' path='' />
      </div>
    </main>
  );
};

export default SalaryRecords;
