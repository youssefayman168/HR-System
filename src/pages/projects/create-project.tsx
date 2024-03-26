import { BiChevronRight } from "react-icons/bi";
import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import ArrowLeft from "../../assets/CreateProjects/ArrowLeft.svg";
import ArrowBottom from "../../assets/CreateProjects/ArrowBottom.svg";
import { Link, useNavigate } from "react-router-dom";
import DateInpCreate from "@/components/DateInput/DateInpCreate";
import DocumentUploader from "@/components/DocumentUploader";
import postCreateProjects from "@/features/Projects/create-projets/services/postCreateProjects";
import { useQuery } from "@tanstack/react-query";
import getSelectedCompanies from "@/features/Projects/create-projets/services/getSelectedCompanies";
import { useState } from "react";

const CreateProject = () => {
  const navigate = useNavigate();

  // Get Selected Companies
  const companies = useQuery({
    queryKey: ["getSelectedCompanies"],
    queryFn: getSelectedCompanies,
  });

  const selectCompany = companies?.data;

  const [data, setData] = useState({
    project_name: "",
    start_date: "",
    scope: "",
    location: "",
    company: "",
    plan: "",
    budget: "",
    status: "",
    work_hours: "",
  });

  return (
    <BaseLayout>
      <div className='p-5'>
        <Link
          to={pathList.projects}
          className='flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold '
        >
          <img src={ArrowLeft} alt='ArrowLeft' />
          Projects overview
          <BiChevronRight />
          Create Projects
        </Link>
        <div className='CreatProject HideScroll bg-white mt-6 rounded-[20px] px-[80px] py-[50px] h-[calc(100vh-176px)] overflow-y-auto '>
          <form
            className=' w-[100%] '
            onSubmit={(e) => {
              e.preventDefault();
              postCreateProjects(navigate(pathList.projects), data);
            }}
          >
            <p className='font-bold text-[25px] '>Create New Projects</p>
            <div className='mb-5 mt-7 flex items-center gap-8'>
              <div className='w-full'>
                <label
                  className='mb-2 block text-lg font-medium'
                  htmlFor='Task'
                >
                  Project Name
                </label>
                <input
                  required
                  id='Task'
                  placeholder='Please Enter The Project Name'
                  className='w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] '
                  onChange={(e) =>
                    setData((prev: any) => {
                      return {
                        ...prev,
                        project_name: e.target.value,
                      };
                    })
                  }
                  type='text'
                />
              </div>
              <div className='w-full'>
                <label
                  className='mb-2 block text-lg font-medium'
                  htmlFor='Project'
                >
                  Project Hours
                </label>
                <input
                  required
                  id='Project'
                  placeholder='Please Enter Department Name'
                  className='w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] '
                  onChange={(e) =>
                    setData((prev: any) => {
                      return {
                        ...prev,
                        work_hours: e.target.value,
                      };
                    })
                  }
                  type='text'
                />
              </div>
            </div>
            <div className='mb-5 mt-7 flex items-center gap-8'>
              <div className='w-full'>
                <label
                  className='mb-2 block text-lg font-medium'
                  htmlFor='Comp'
                >
                  Company
                </label>
                <div className='Select-Container relative w-full'>
                  <select
                    id='mySelect'
                    className='custom-select p-5 border-[1px] border-[#ccc] w-[100%] appearance-none outline-none h-[60px] rounded-[10px] '
                    onChange={(e) =>
                      setData((prev: any) => {
                        return {
                          ...prev,
                          company: e.target.value,
                        };
                      })
                    }
                    required
                  >
                    <option value=''>Select Company</option>
                    {selectCompany?.map(({ id, name }: any) => {
                      return (
                        <option value={id} key={id}>
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
              </div>

              <div className='w-full '>
                <label
                  className='mb-2 text-lg font-medium block'
                  htmlFor='mySelect'
                >
                  Status
                </label>
                <div className='Select-Container relative w-full'>
                  <select
                    id='mySelect'
                    className='custom-select p-5 border-[1px] border-[#ccc] w-[100%] appearance-none outline-none h-[60px] rounded-[10px]'
                    onChange={(e) => {
                      setData((prev: any) => {
                        return {
                          ...prev,
                          status: e.target.value,
                        };
                      });
                    }}
                    name='status'
                    defaultValue={"Hold"}
                    required
                  >
                    <option value='Hold'>On Hold</option>
                    <option value='Completed'>Completed</option>
                    <option value='In-Progress'>In Progress</option>
                    <option value='Declined'>Declined</option>
                  </select>
                  <img
                    className='absolute top-[50%] translate-y-[-50%] right-8 '
                    src={ArrowBottom}
                    alt='ArrowBottom'
                  />
                </div>
              </div>
            </div>

            <div className='mb-5 mt-7 flex items-center gap-8'>
              <div className=' w-full'>
                <p className='mb-2 mt-3 text-lg font-medium'>Start Date</p>
                <div className='flex items-center gap-4 w-full'>
                  <DateInpCreate
                    when='Start Date'
                    onChange={(e: any) =>
                      setData((prev: any) => {
                        return {
                          ...prev,
                          start_date: e.target?.value,
                        };
                      })
                    }
                  />
                </div>
              </div>
              <div className='w-full'>
                <label
                  className='mb-2 block text-lg font-medium'
                  htmlFor='budget'
                >
                  Budget
                </label>
                <input
                  required
                  id='budget'
                  placeholder='Please Enter The Budget'
                  className='w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] '
                  type='number'
                  onChange={(e) =>
                    setData((prev: any) => {
                      return {
                        ...prev,
                        budget: e.target.value,
                      };
                    })
                  }
                />
              </div>
            </div>

            <div className='w-full'>
              <label
                className='mb-2 block text-lg font-medium'
                htmlFor='Location'
              >
                Location
              </label>
              <input
                required
                id='Location'
                placeholder='Please Enter The Location'
                className='w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] '
                type='text'
                onChange={(e) =>
                  setData((prev: any) => {
                    return {
                      ...prev,
                      location: e.target.value,
                    };
                  })
                }
              />
            </div>

            <div className='Description flex flex-col mt-10 gap-5'>
              <div>
                <p className='font-medium text-lg mb-2'>Scope</p>
                <textarea
                  className='outline-none w-full border-2 p-3 rounded-[12px] '
                  placeholder='Please Enter Department Description'
                  cols={30}
                  rows={10}
                  onChange={(e) =>
                    setData((prev: any) => {
                      return {
                        ...prev,
                        scope: e.target.value,
                      };
                    })
                  }
                ></textarea>
              </div>
              <div>
                <DocumentUploader
                  label='Project Plan'
                  // name="plan"
                  onSelect={(file) =>
                    setData((prev: any) => {
                      return {
                        ...prev,
                        plan: file,
                      };
                    })
                  }
                />
              </div>
            </div>
            <div className='mt-8 flex justify-center items-center gap-3 '>
              <Link
                className='border-[1px] border-[#224886] py-2 px-10 rounded-[6px] '
                to={pathList.projects}
              >
                Cancel
              </Link>
              <button
                className='bg-[#224886] text-white py-2 px-10 rounded-[6px] '
                type='submit'
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

export default CreateProject;
