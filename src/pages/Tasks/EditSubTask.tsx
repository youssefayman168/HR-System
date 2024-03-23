import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import ArrowLeft from "../../assets/CreateProjects/ArrowLeft.svg";
import { BiChevronRight } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import BaseInput from "@/components/BaseInput";
import DateInpCreate from "@/components/DateInput/DateInpCreate";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getTask from "@/features/Tasks/TaskDetails/services/getTask";
import DateInput from "@/components/DateInput";
import { useState } from "react";
import createSubTask from "@/features/Tasks/AddSubTasks/services/createSubtask";
import globalServices from "@/utils/globals.services";
import editSubtask from "@/features/Tasks/editSubtask/services/editSubtask";
import TaskDetails from "./TaskDetails";

const EditSubTask = () => {
  const { taskID, subtaskID } = useParams();
  const subtaskDetails = useQuery({
    queryKey: [`subtaskDetails-${subtaskID}`],
    queryFn: () => {
      return globalServices.getSubtaskDetails(Number(subtaskID!));
    },
  });
  const [data, setData] = useState({
    date: "",
    name: "",
    description: "",
    hours: 0,
    type: "",
  });
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const modifySubtask = useMutation({
    mutationFn: () => {
      return editSubtask(
        {
          date: data.date ? data.date : subtaskDetails.data?.data.date,
          name: data.name ? data.name : subtaskDetails.data?.data.name,
          description: data.description
            ? data.description
            : subtaskDetails.data?.data.description,
          type: data.type ? data.type : subtaskDetails.data?.data.type,
          hours: data.hours ? data.hours : subtaskDetails.data?.data.hours,
          task: subtaskDetails.data?.data.task_id,
        },
        Number(taskID!),
        Number(subtaskID!)
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`subtaskDetails-${subtaskID}`],
      });
      queryClient.invalidateQueries({
        queryKey: [`taskDetails-${taskID}`],
      });
      queryClient
        .invalidateQueries({
          queryKey: [`projects`],
        })
        .then(() => navigate(`/tasks/details/${taskID}`));
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await modifySubtask.mutateAsync();
    } catch (e) {
      console.log(e);
    }
  };

  console.log(subtaskDetails.data?.data);
  return (
    <BaseLayout>
      <div className='p-5'>
        <div className='Header mb-8 '>
          <Link
            to={`/tasks/view-task/${taskID}`}
            className='flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold '
          >
            <img src={ArrowLeft} alt='ArrowLeft' />
            Subtasks
            <BiChevronRight />
            {subtaskDetails.data?.data.name}
            <BiChevronRight />
            Edit Subtask
          </Link>
        </div>
        <div className='bg-white px-20 py-11 rounded-[15px] h-[calc(100vh-186px)] overflow-y-auto HideScroll '>
          <form onSubmit={onSubmit}>
            <p className='mb-5 text-[#101828] font-[600] text-[24px] '>
              Edit The Subtask
            </p>
            <div className='inputs'>
              <div className='flex items-center gap-8'>
                <div className='w-full'>
                  <BaseInput
                    styles={{ width: "100%", height: "70px" }}
                    type='text'
                    label='Sub Task Name'
                    placeholder='Please Enter The Task Name'
                    id='TaskName'
                    onChange={(text) =>
                      setData((prev) => {
                        return {
                          ...prev,
                          name: text,
                        };
                      })
                    }
                    defaultValue={subtaskDetails.data?.data.name}
                  />
                </div>
                <div className='w-full'>
                  <BaseInput
                    styles={{ width: "100%", height: "70px" }}
                    type='number'
                    label='Sub Task Hours'
                    placeholder='Please Enter Subtask Hours'
                    id='TaskHours'
                    onChange={(hours) =>
                      setData((prev) => {
                        return {
                          ...prev,
                          hours: hours,
                        };
                      })
                    }
                    defaultValue={subtaskDetails.data?.data.hours}
                  />
                </div>
              </div>

              <div className='flex items-center gap-8'>
                <div className='w-full'>
                  <div className='w-full mt-3 '>
                    <DateInput
                      label='Subtask Date'
                      onDate={(date) =>
                        setData((prev) => {
                          return {
                            ...prev,
                            date,
                          };
                        })
                      }
                      defaultValue={subtaskDetails.data?.data.date}
                    />
                  </div>
                  <div className='w-full mt-5 '>
                    <BaseInput
                      styles={{ width: "100%", height: "70px" }}
                      type='text'
                      label='Sub Task Type'
                      placeholder='Please Enter Subtask type'
                      id='TaskType'
                      onChange={(text) =>
                        setData((prev) => {
                          return {
                            ...prev,
                            type: text,
                          };
                        })
                      }
                      defaultValue={subtaskDetails.data?.data.type}
                    />
                  </div>
                </div>
                <div className='w-full flex flex-col '>
                  <label
                    className='mt-7 mb-2 text-lg font-medium '
                    htmlFor='textArea'
                  >
                    Sub Task Description
                  </label>
                  <textarea
                    className='outline-none border-[1px] rounded-[10px] border-[#BDBDBD] h-[190px] p-5  '
                    placeholder='Please Enter Department Description'
                    id='textArea'
                    onChange={(e) =>
                      setData((prev) => {
                        return {
                          ...prev,
                          description: e.target.value,
                        };
                      })
                    }
                    defaultValue={subtaskDetails.data?.data.description}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='Submit mx-auto w-fit mt-10 flex gap-5'>
              <button
                type='submit'
                className='bg-[#224886] rounded-[6px] text-white py-3 px-16 '
              >
                Save
              </button>
              <button className='border-[1px] border-[#224886] text-[#224886] py-3 px-14 rounded-[6px] '>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default EditSubTask;
