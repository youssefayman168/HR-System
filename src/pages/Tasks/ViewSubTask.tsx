import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import ArrowLeft from "../../assets/CreateProjects/ArrowLeft.svg";
import { BiChevronRight } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import EmployeeInfo from "@/features/AllEmployees/ViewEmployees/components/EmployeeInfo";
import People from "@/components/ViewPage/People";
import testImg from "../../assets/testImg.jpg";
import download from "../../assets/Projects/Download.svg";
import BtnCreate from "@/components/Buttons/BtnCreate";
import { useQuery } from "@tanstack/react-query";
import getSubtask from "@/features/Tasks/ViewSubTask/services/getSubtask";
import { format } from "date-fns";

const ViewSubTask = () => {
  const { subTaskID } = useParams();
  const subtaskDetails = useQuery({
    queryKey: ["subtaskDetails", subTaskID],
    queryFn: () => {
      return getSubtask(Number(subTaskID!));
    },
  });
  console.log(subtaskDetails.data?.data);
  return (
    <BaseLayout>
      <div className='p-5'>
        <div className='Header'>
          <Link
            to={pathList.taskDetails}
            className='flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold '
          >
            <img src={ArrowLeft} alt='ArrowLeft' />
            Tasks
            <BiChevronRight />
            {subtaskDetails.data?.data.task_name}
            <BiChevronRight />
            View Sub Task
          </Link>
        </div>
        <div className='Body bg-white HideScroll h-[calc(100vh-175px)] overflow-y-auto rounded-[15px] px-14 py-10 mt-6'>
          <div className='flex items-center justify-between border-b-[1px] border-[#EFF1F4] pb-10'>
            <div className='w-[500px]'>
              <p className='text-[22px] font-[600] mb-5 text-[#0E2354]'>
                {subtaskDetails.data?.data.name}
              </p>
              <p className='text-[#676E7E]  '>
                {subtaskDetails.data?.data.description}
              </p>
            </div>
            <BtnCreate text='Export As PDF' icon={download} path='' />
          </div>
          <div className='Details mt-8'>
            <div className='flex items-center gap-32'>
              <div>
                <p className='font-[600] text-[18px] text-[#0E2354]'>Project</p>
                <p className='mb-4 mt-2'>
                  {subtaskDetails.data?.data.project_name}
                </p>
              </div>
              <div>
                <p className='font-[600] text-[18px] text-[#0E2354]'>Task</p>
                <p className='mb-4 mt-2'>
                  {subtaskDetails.data?.data.task_name}
                </p>
              </div>
            </div>

            <p className='font-[600] text-[18px] my-6 text-[#0E2354] '>
              Task Details
            </p>
            <div className='flex gap-20'>
              <div>
                <EmployeeInfo
                  title='Sub Task ID:'
                  value={subtaskDetails.data?.data.id}
                />
                <div className='mb-7'>
                  <p className='text-sm text-grayColor font-bold capitalize'>
                    Approved
                  </p>
                  <p className='relative text-[15px] font-semibold bg-[#ECFDF3] text-[#027A48] after:absolute after:bg-[#12B76A] w-fit left-[-5px] py-[3px] px-3 ps-5 after:w-[8px] after:h-[8px] after:rounded-full after:top-[50%] after:translate-y-[-50%] after:left-[7px] rounded-[15px] '>
                    {subtaskDetails.data?.data.approved ? "Yes" : "No"}
                  </p>
                </div>
                <EmployeeInfo
                  title='Task Date'
                  value={format(
                    new Date(subtaskDetails.data?.data.date),
                    "dd MMM yyyy"
                  )}
                />
              </div>
              <div>
                <EmployeeInfo
                  title='Sub Task Hours'
                  value={subtaskDetails.data?.data.hours}
                />
                <EmployeeInfo
                  title='Company'
                  value={subtaskDetails.data?.data.company_name}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ViewSubTask;
