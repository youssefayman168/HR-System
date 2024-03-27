import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import ArrowLeft from "../../assets/CreateProjects/ArrowLeft.svg";
import { BiChevronRight } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { pathList } from "@/routes/routesPaths";
import plus from "../../assets/plus.svg";
import testImg from "../../assets/testImg.jpg";
import download from "../../assets/Projects/Download.svg";
import BtnCreate from "@/components/Buttons/BtnCreate";
import EmployeeInfo from "@/features/AllEmployees/ViewEmployees/components/EmployeeInfo";
import People from "@/components/ViewPage/People";
import NewHires from "@/components/ViewPage/NewHires";
import { useQuery } from "@tanstack/react-query";
import getTask from "@/features/Tasks/TaskDetails/services/getTask";
import { format } from "date-fns";
import NoData from "@/assets/icons/NoData";

const ViewTask = () => {
  const { taskID } = useParams();
  const taskDetails = useQuery({
    queryKey: [`taskDetails-${taskID}`],
    queryFn: () => {
      return getTask(Number(taskID!));
    },
  });
  console.log(taskDetails.data?.data.contributors);
  return (
    <BaseLayout>
      <div className='p-5 '>
        <div className='Header'>
          <Link
            to={pathList.tasks}
            className='flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold '
          >
            <img src={ArrowLeft} alt='ArrowLeft' />
            Tasks
            <BiChevronRight />
            View Tasks
          </Link>
        </div>
        <div className='Body bg-white HideScroll h-[calc(100vh-175px)] overflow-y-auto rounded-[15px] px-14 py-10 mt-6'>
          <div className='flex items-center justify-between border-b-[1px] border-[#EFF1F4] pb-10'>
            <div className='w-[500px]'>
              <p className='text-[22px] font-[600] mb-5 text-[#0E2354]'>
                {taskDetails.data?.data.title}
              </p>
              <p className='text-[#676E7E]  '>
                {taskDetails.data?.data.description}
              </p>
            </div>
            <div className='flex flex-col gap-y-3 '>
              <BtnCreate text='Export As PDF' icon={download} path='' />
              <BtnCreate
                text='Create Sub Task'
                icon={plus}
                path={`/tasks/${taskID}/addSubTasks`}
              />
            </div>
          </div>
          <div className='Details mt-8'>
            <p className='font-[600] text-[18px] text-[#0E2354]'>Project</p>
            <p className='mb-4 mt-2 '>{taskDetails.data?.data.project_name}</p>
            <p className='font-[600] text-[18px] text-[#0E2354]'>Task Team</p>
            <p className='mt-6 mb-3 '>People working on the task</p>
            <div className='People flex gap-3'>
              {taskDetails.data?.data.contributors?.map((contributor: any) => (
                <People
                  photo={`https://sec-system-apis.up.railway.app${contributor.image}`}
                  name={contributor.name}
                />
              ))}
            </div>
            <p className='font-[600] text-[18px] mb-6 mt-4 text-[#0E2354]'>
              Task Details
            </p>
            <div className='flex gap-20'>
              <div>
                <EmployeeInfo
                  title='Task Hours'
                  value={taskDetails.data?.data?.hours}
                />
                <div className='flex items-start flex-col mb-6'>
                  <p className='text-sm text-grayColor font-bold capitalize'>
                    Status
                  </p>
                  <p
                    className={`relative text-[15px] font-semibold ${
                      taskDetails.data?.data.status == "Done"
                        ? "bg-[#ECFDF3] text-[#027A48]"
                        : taskDetails.data?.data.status == "Hold"
                        ? "bg-[#FFEFC4] text-[#D99D00]"
                        : taskDetails.data?.data.status == "In-Progress"
                        ? "bg-[#E6EFFC] text-[#0764E6]"
                        : "bg-[#FFE3E3] text-[#A00]"
                    } after:absolute ${
                      taskDetails.data?.data.status == "Done"
                        ? "after:bg-[#12B76A]"
                        : taskDetails.data?.data.status == "In-Progress"
                        ? "after:bg-[#0764E6]"
                        : taskDetails.data?.data.status == "Hold"
                        ? "after:bg-[#D99D00]"
                        : "after:bg-[#A00]"
                    } left-[-5px] py-[3px] px-3 ps-5 after:w-[8px] after:h-[8px] after:rounded-full after:top-[50%] after:translate-y-[-50%] after:left-[7px] rounded-[15px]`}
                  >
                    {taskDetails.data?.data?.status}
                  </p>
                </div>
                {taskDetails.data?.data?.created_at ? (
                  <EmployeeInfo
                    title='Start Date'
                    value={format(
                      new Date(taskDetails.data?.data?.created_at),
                      "dd MMM yyyy"
                    )}
                  />
                ) : null}
              </div>
              <div>
                <EmployeeInfo title='Total Worked Hours' value='9' />
                <EmployeeInfo title='Company' value='Hr' />
                <EmployeeInfo
                  title='Suspended'
                  value={taskDetails.data?.data.suspended ? "Yes" : "No"}
                />
              </div>
            </div>
            <div className='CreateJob'>
              <p className='font-[600] text-[18px] mb-3 text-[#0E2354]'>
                Subtasks
              </p>
              {taskDetails.data?.data.subtasks.length == 0 ? (
                <div className='flex flex-col justify-center items-center text-center'>
                  <div>
                    <NoData className='w-[254px] h-[254px]' />
                  </div>
                  <p className='ml-[53px]'>There's no subtasks created</p>
                </div>
              ) : (
                <div className='border-[1px] border-[#C1C1C1] pb-4 pt-6 rounded-[10px] max-xxl:px-4 flex flex-wrap justify-start'>
                  {taskDetails.data?.data.subtasks.map((subtask: any) => (
                    <NewHires
                      title={subtask.name}
                      desc={subtask.description}
                      btn='View'
                      subtaskID={subtask.id}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ViewTask;
