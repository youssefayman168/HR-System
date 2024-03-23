import BaseInput from "@/components/BaseInput";
import DateInpCreate from "@/components/DateInput/DateInpCreate";
import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import { BiChevronRight } from "react-icons/bi";
import ArrowLeft from "../../assets/CreateProjects/ArrowLeft.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getAllProjects from "@/features/Projects/all/services/getAllProjects";
import ArrowBottom from "@/assets/CreateProjects/ArrowBottom.svg";
import getTask from "@/features/Tasks/TaskDetails/services/getTask";
import editTask from "@/features/Tasks/EditTask/services/editTask";

const EditTasks = () => {
  const [data, setData] = useState({
    title: "",
    project: "",
    description: "",
    status: "",
  });
  const projects = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
  });
  const { taskID } = useParams();
  const taskDetails = useQuery({
    queryKey: [`taskDetails-${taskID}`],
    queryFn: () => {
      return getTask(Number(taskID!));
    },
  });
  console.log(taskDetails.data?.data);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const modifyTask = useMutation({
    mutationFn: () => {
      return editTask(
        {
          title: data.title ? data.title : taskDetails.data?.data.title,
          project: data.project
            ? data.project
            : taskDetails.data?.data.project_id,
          description: data.description
            ? data.description
            : taskDetails.data?.data.description,
          status: data.status ? data.status : taskDetails.data?.data.status,
        },
        Number(taskDetails.data?.data.project_id),
        Number(taskDetails.data?.data.id)
      );
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries({
          queryKey: ["projects"],
        })
        .then(() => navigate(pathList.tasks));
    },
  });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await modifyTask.mutateAsync();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <BaseLayout>
      <div className='p-5'>
        <div className='header'>
          <Link
            to={pathList.tasks}
            className='flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold '
          >
            <img src={ArrowLeft} alt='ArrowLeft' />
            Tasks
            <BiChevronRight />
            Edit Tasks
          </Link>
        </div>
        <div className='bg-white px-20 py-10 rounded-[15px] mt-8 h-[calc(100vh-185px)] overflow-y-auto HideScroll '>
          <form onSubmit={onSubmit}>
            <p className='flex items-center text-[22px] font-[600] mb-6 '>
              {taskDetails.data?.data.project_name}{" "}
              <div className='text-[30px] '>
                {" "}
                <BiChevronRight />{" "}
              </div>{" "}
              Edit Task{" "}
            </p>
            <div className='inputs'>
              <div className='w-full'>
                <div className='flex gap-4'>
                  <BaseInput
                    type='text'
                    placeholder='Task name'
                    styles={{ width: "100%", height: "65px" }}
                    mainStyles={{
                      flex: 1,
                    }}
                    onChange={(e) =>
                      setData((prev: any) => {
                        return {
                          ...prev,
                          title: e,
                        };
                      })
                    }
                    defaultValue={taskDetails.data?.data.title}
                  />
                  <div className='flex-1 align-middle'>
                    <div className='Select-Container relative w-full'>
                      <select
                        className='custom-select mt-[23px] p-5 border-[1px] border-[#ccc] w-[100%] appearance-none outline-none h-[65px] rounded-[10px] '
                        onChange={(e) =>
                          setData((prev: any) => {
                            return {
                              ...prev,
                              project: e.target.value,
                            };
                          })
                        }
                        required
                        defaultValue={taskDetails.data?.data.project_id}
                      >
                        <option value={taskDetails.data?.data.project_id}>
                          {taskDetails.data?.data.project_name}
                        </option>
                        {projects?.data?.map(({ id, project_name }: any) => {
                          return (
                            <option value={id} key={id}>
                              {project_name}
                            </option>
                          );
                        })}
                      </select>
                      <img
                        className='absolute top-[64%] translate-y-[-50%] right-8 '
                        src={ArrowBottom}
                        alt='ArrowBottom'
                      />
                    </div>
                  </div>
                </div>
                <textarea
                  placeholder='Description'
                  className='border-[1px] border-[#BDBDBD] p-5 w-full mt-4 rounded-[10px] h-[150px] outline-none '
                  onChange={(e) =>
                    setData((prev: any) => {
                      return {
                        ...prev,
                        description: e.target.value,
                      };
                    })
                  }
                  value={taskDetails.data?.data.description}
                ></textarea>
                <div className='Date flex gap-4 mt-4'>
                  <div className='flex-1 items-center'>
                    <div className='Select-Container relative w-full flex items-center'>
                      <select
                        className='custom-select mt-[23px] p-5 border-[1px] border-[#ccc] w-[100%] appearance-none outline-none h-[65px] rounded-[10px] '
                        onChange={(e) =>
                          setData((prev: any) => {
                            return {
                              ...prev,
                              status: e.target.value,
                            };
                          })
                        }
                        required
                      >
                        <option value={taskDetails.data?.data.status}>
                          {taskDetails.data?.data.status}
                        </option>
                        <option value='Hold'>Hold</option>
                        <option value='Declined'>Declined</option>
                        <option value='Completed'>Completed</option>
                        <option value='In-Progress'>In Progress</option>
                      </select>
                      <img
                        className='absolute top-[66%] translate-y-[-50%] right-8 '
                        src={ArrowBottom}
                        alt='ArrowBottom'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='Submit mx-auto w-fit mt-16 flex gap-5'>
              <button className='border-[1px] border-[#224886] text-[#224886] py-3 px-14 rounded-[6px] '>
                Cancel
              </button>
              <button
                type='submit'
                className='bg-[#224886] rounded-[6px] text-white py-3 px-16 '
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default EditTasks;
