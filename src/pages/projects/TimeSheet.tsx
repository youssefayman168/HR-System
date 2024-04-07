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
import getAllProjects from "@/features/Projects/all/services/getAllProjects";
import SelectInput from "@/components/SelectInput";
import getPhases from "@/features/Projects/project-details/services/getPhases";

const TimeSheet = () => {
  const [data, setData] = useState({
    date: "",
    name: "",
    description: "",
    hours: 0,
    type: "",
    project: "",
    phase: "",
    task: "",
  });
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projectElement"],
    queryFn: getAllProjects,
  });
  const { data: phases, isLoading: phasesLoading } = useQuery({
    queryKey: ["phases", data.project],
    queryFn: () => {
      return getPhases(data.project);
    },
    enabled: !!data.project,
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const addSubTask = useMutation({
    mutationFn: () => {
      return createSubTask(data, Number(data.task));
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries({
          queryKey: ["taskDetails"],
        })
        .then(() => navigate(`/tasks/details/${Number(data.task)}`));
    },
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addSubTask.mutateAsync();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <BaseLayout>
      <div className='p-5'>
        <div className='Header mb-8 '>
          <Link
            to={`/home`}
            className='flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold '
          >
            <img src={ArrowLeft} alt='ArrowLeft' />
            Time Sheet
          </Link>
        </div>
        <div className='bg-white px-20 py-11 rounded-[15px] h-[calc(100vh-186px)] overflow-y-auto HideScroll '>
          <form onSubmit={onSubmit}>
            <p className='mb-5 text-[#101828] font-[600] text-[24px] '>
              Register Time Sheet
            </p>
            <div className='inputs'>
              <div className='flex items-center gap-8'>
                <div className='w-full'>
                  <SelectInput
                    data={projects}
                    label='Project'
                    onSelect={(selectedItem) =>
                      setData((prev) => {
                        return {
                          ...prev,
                          project: selectedItem,
                        };
                      })
                    }
                    preSelect='Select Project'
                    fetchName={(item) => item.project_name}
                  />
                </div>
                <div className='w-full'>
                  <SelectInput
                    data={phases}
                    label='Phase'
                    onSelect={(selectedItem) =>
                      setData((prev) => {
                        return {
                          ...prev,
                          phase: selectedItem,
                        };
                      })
                    }
                    preSelect='Select Phase'
                    fetchName={(item) => `Phase ${item.id}`}
                  />
                </div>
              </div>
              <div className='flex items-center gap-8'>
                <div className='w-full'>
                  <SelectInput
                    data={
                      phases?.find(
                        (phase: any) => phase.id == Number(data.phase)
                      )?.tasks
                    }
                    label='Task'
                    onSelect={(selectedItem) =>
                      setData((prev) => {
                        return {
                          ...prev,
                          task: selectedItem,
                        };
                      })
                    }
                    preSelect='Select Task'
                    fetchName={(item) => item.title}
                  />
                </div>
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
                    />
                  </div>
                  <div className='w-full mt-5'>
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
                  ></textarea>
                </div>
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
                />
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

export default TimeSheet;
