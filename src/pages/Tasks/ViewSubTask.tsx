import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import ArrowLeft from "../../assets/CreateProjects/ArrowLeft.svg";
import { BiChevronRight } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeInfo from "@/features/AllEmployees/ViewEmployees/components/EmployeeInfo";
import People from "@/components/ViewPage/People";
import testImg from "../../assets/testImg.jpg";
import download from "../../assets/Projects/Download.svg";
import BtnCreate from "@/components/Buttons/BtnCreate";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getSubtask from "@/features/Tasks/ViewSubTask/services/getSubtask";
import { format } from "date-fns";
import approveSubTask from "@/features/Tasks/ViewSubTask/services/approveSubTask";
import globalServices from "@/utils/globals.services";
import { useState } from "react";
import BaseBtn from "@/components/Buttons/BaseBtn";
import getAllHR from "@/features/requests/details/services/getAllHr";
import ArrowBottom from "@/assets/CreateProjects/ArrowBottom.svg";
import SecondaryBorderBtn from "@/components/Buttons/SecondaryBorderBtn";
import delegateSubtask from "@/features/Tasks/ViewSubTask/services/delegateSubtask";

const ViewSubTask = () => {
  const { subTaskID } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedHOD, setSelectedHOD] = useState<any>();
  const subtaskDetails = useQuery({
    queryKey: ["subtaskDetails", subTaskID],
    queryFn: () => {
      return getSubtask(Number(subTaskID!));
    },
  });
  const myProfile = useQuery({
    queryKey: ["myProfile"],
    queryFn: globalServices.getPersonalInfo,
  });
  const queryClient = useQueryClient();
  const approve = useMutation<any, any, any>({
    mutationFn: (variables) => {
      return approveSubTask(Number(subTaskID!), variables);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["subtaskDetails", subTaskID],
      });
    },
  });
  const HODs = useQuery({
    queryKey: ["getAllHR"],
    queryFn: getAllHR,
  });
  const navigate = useNavigate();
  const filteredHODs = HODs?.data?.data
    ?.filter(({ role }: any) => role === "HOD")
    .map(({ name, id }: any) => ({ name, id }));
  const delegateTask = useMutation({
    mutationFn: () => {
      return delegateSubtask(subTaskID, selectedHOD);
    },
    onSuccess: () => {
      navigate(`/tasks/details/5`);
    },
  });
  console.log(subtaskDetails);
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
                {subtaskDetails.data && (
                  <EmployeeInfo
                    title='Task Date'
                    value={format(
                      new Date(subtaskDetails.data?.data.date),
                      "dd MMM yyyy"
                    )}
                  />
                )}
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
            {myProfile.data?.role == "Senior" ||
            myProfile.data?.role == "HOD" ? (
              <div>
                {!subtaskDetails.data?.data.approved ? (
                  <div>
                    <p className='text-[#091E42] font-[500] text-[20px] mb-4'>
                      Take Action
                    </p>
                    <p className='w-[500px] xxxl:w-[600px] max-xxl:w-[400px] bg-red-40 '>
                      Once you take the action the employees will be notified
                      and the action can’t be undone{" "}
                    </p>
                    <div className='Btns flex items-center gap-32 mt-8'>
                      <button
                        className='text-[#224886] text-[18px] border-[1px] border-[#1F4690] w-[100%] text-center py-3 rounded-[10px] '
                        onClick={() => approve.mutate(0)}
                      >
                        Reject
                      </button>
                      <button
                        className='text-[#224886] text-[18px] border-[1px] border-[#1F4690] w-[100%] text-center py-3 rounded-[10px]'
                        onClick={() => approve.mutate(1)}
                      >
                        Accept
                      </button>
                      <button
                        className='text-[#224886] text-[18px] border-[1px] border-[#1F4690] w-[100%] text-center py-3 rounded-[10px]'
                        onClick={() => setShowPopup(true)}
                      >
                        Refer
                      </button>
                    </div>
                  </div>
                ) : subtaskDetails.data?.data?.status === "referred" ? (
                  <div>
                    <p className='text-[20px] text-[#15294B] font-[600] mb-3'>
                      Referred To:
                    </p>
                    <div className='flex items-center flex-wrap gap-x-3 gap-y-4 '>
                      <People
                        name={subtaskDetails.data?.data?.hr?.name}
                        photo={`https://sec-system-apis.up.railway.app${subtaskDetails.data?.data?.hr?.image}`}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : null}
          </div>
          <div
            className={`top-0 left-0 right-0 bottom-0 bg-[#000000CC] ${
              showPopup ? "absolute" : "hidden"
            }`}
          >
            <div className='w-[600px] h-[400px] absolute top-[28.5%] left-[33%] rounded-[6px] bg-white flex flex-col justify-center items-center'>
              <div className='flex items-between justify-between h-full flex-col p-10'>
                <h4 className='font-medium text-[#000] text-[24px] text-center'>
                  Please Choose the HOD that you want to refer about this
                  request{" "}
                </h4>
                <div className='Select-Container relative w-full'>
                  <select
                    id='mySelect'
                    className='custom-select p-5 border-[1px] border-[#ccc] w-[100%] appearance-none outline-none h-[60px] rounded-[10px] '
                    onChange={(e) => setSelectedHOD(e.target.value)}
                    required
                  >
                    {filteredHODs?.map(({ id, name }: any) => {
                      return (
                        <option selected value={id} key={id}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                  <img
                    className='absolute top-[50%] translate-y-[-50%] right-8 '
                    src={ArrowBottom}
                    alt='ArrowBottom'
                  />
                </div>
                <div className='flex gap-8 items-center justify-center'>
                  <BaseBtn
                    name='Send'
                    styles={{
                      fontSize: 16,
                      fontWeight: 500,
                      width: 100,
                      textAlign: "center",
                    }}
                    onClick={() => delegateTask.mutate()}
                  />
                  <SecondaryBorderBtn
                    text='Cancel'
                    style={{ width: 100, justifyContent: "center" }}
                    onClick={() => setShowPopup(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ViewSubTask;
