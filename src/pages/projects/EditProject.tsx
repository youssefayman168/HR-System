import { BiChevronRight } from "react-icons/bi";
import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'
import ArrowBottom from '../../assets/CreateProjects/ArrowBottom.svg'
import { Link, useNavigate, useParams } from "react-router-dom";
import DateInpCreate from "@/components/DateInput/DateInpCreate";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getSelectedCompanies from "@/features/Projects/create-projets/services/getSelectedCompanies";
import React, { useState } from "react";
import getEditProjectData from "@/features/Projects/editProject/getEditProjectData";
import updateProjects from "@/features/Projects/editProject/updateSingleProject";

const EditProject = () => {
  const navigate = useNavigate()

  const { id } = useParams()

  // Get Selected Companies
  const companies = useQuery({
    queryKey: ['getSelectedCompanies', id],
    queryFn: getSelectedCompanies
  })

  const selectCompany = companies?.data

  //   Get Data That Will Be Updated
  const { data } = useQuery<any>({
    queryKey: ['getUpdateProjectData', id],
    queryFn: () => getEditProjectData(id)
  })

  console.log(data)

  const [dataKeys, setDataKeys] = useState({
    project_name: '',
    start_date: '',
    scope: '',
    location: '',
    company: '',
    plan: '',
    budget: '',
    status: '',
    work_hours: ''
  })

  const queryClient = useQueryClient()
  const editProject = useMutation({
    mutationFn: () => {
      return updateProjects(
        id,
        {
          project_name: dataKeys.project_name ? dataKeys.project_name : data?.project_name,
          start_date: dataKeys.start_date ? dataKeys.start_date : data?.start_date,
          scope: dataKeys.scope ? dataKeys.scope : data?.scope,
          location: dataKeys.location ? dataKeys.location : data?.location,
          company: dataKeys.company ? dataKeys.company : data?.company?.id,
          plan: dataKeys.plan ? dataKeys.plan : data?.plan,
          budget: dataKeys.budget ? dataKeys.budget : data?.budget,
          status: dataKeys.status ? dataKeys.status : data?.status,
          work_hours: dataKeys.work_hours ? dataKeys.work_hours : data?.work_hours
        }
      )
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['editProject']
      }).then(() => navigate(pathList.projects))
    }
  })

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await editProject.mutateAsync()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <BaseLayout>
      <div className="p-5">
        <Link to={pathList.projects} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
          <img src={ArrowLeft} alt="ArrowLeft" />
          Projects overview
          <BiChevronRight />
          Edit Project
        </Link>
        <div className="CreatProject HideScroll bg-white mt-6 rounded-[20px] px-[80px] py-[50px] h-[calc(100vh-176px)] overflow-y-auto ">
          <form className=" w-[100%] " onSubmit={onSubmit}>
            <p className="font-bold text-[25px] ">Edit Project</p>
            <div className="mb-5 mt-7 flex items-center gap-8">
              <div className="w-full">
                <label className='mb-2 block text-lg font-medium' htmlFor="Task">Project Name</label>
                <input
                  id="Task"
                  defaultValue={data?.project_name}
                  className="w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] "
                  onChange={(e) => setDataKeys((prev: any) => {
                    return {
                      ...prev,
                      project_name: e.target.value
                    }
                  })}
                  type="text" />
              </div>
              <div className="w-full">
                <label className='mb-2 block text-lg font-medium' htmlFor="Project">Project Hours</label>
                <input
                  required
                  id="Project"
                  defaultValue={data?.work_hours}
                  placeholder="Please Enter Department Name"
                  className="w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] "
                  onChange={(e) => setDataKeys((prev: any) => {
                    return {
                      ...prev,
                      work_hours: e.target.value
                    }
                  })}
                  type="text" />
              </div>
            </div>
            <div className="mb-5 mt-7 flex items-center gap-8">
              <div className="w-full">
                <label className='mb-2 block text-lg font-medium' htmlFor="Comp">Company</label>
                <div className="Select-Container relative w-full">
                  <select
                    id="mySelect"
                    className="custom-select p-5 border-[1px] border-[#ccc] w-[100%] appearance-none outline-none h-[60px] rounded-[10px] " onChange={(e) => setDataKeys((prev: any) => {
                      return {
                        ...prev,
                        company: e.target.value
                      }
                    })}
                    required
                  >
                    {selectCompany?.map(({ id, name }: any) => {
                      return <option value={id} key={id} selected>{name}</option>
                    })}
                  </select>
                  <img className="absolute top-[50%] translate-y-[-50%] right-8 " src={ArrowBottom} alt="ArrowBottom" />
                </div>
              </div>

              <div className="w-full ">
                <label className='mb-2 text-lg font-medium block' htmlFor="mySelect">Status</label>
                <div className="Select-Container relative w-full">
                  <select
                    id="mySelect"
                    className="custom-select p-5 border-[1px] border-[#ccc] w-[100%] appearance-none outline-none h-[60px] rounded-[10px]"
                    onChange={(e) => {
                      setDataKeys((prev: any) => {
                        return {
                          ...prev,
                          status: e.target.value
                        }
                      })
                    }}
                    name="status"
                    defaultValue={'Hold'}
                    required
                  >
                    <option value="Hold">On Hold</option>
                    <option value="Completed">Completed</option>
                    <option value="In-Progress">In Progress</option>
                    <option value="Declined">Declined</option>
                  </select>
                  <img className="absolute top-[50%] translate-y-[-50%] right-8 " src={ArrowBottom} alt="ArrowBottom" />
                </div>
              </div>
            </div>
            <div className="mb-5 mt-7 flex items-center gap-8">
              <div className=" w-full">
                <p className="mb-2 mt-3 text-lg font-medium">Start Date</p>
                <div className="flex items-center gap-4 w-full">
                  <DateInpCreate
                    when="Update Date"
                    onChange={(e: any) => setDataKeys((prev: any) => {
                      return {
                        ...prev,
                        start_date: e.target?.value
                      }
                    })}
                  />
                </div>
              </div>
              <div className="w-full">
                <label className='mb-2 block text-lg font-medium' htmlFor="budget">Budget</label>
                <input
                  required
                  defaultValue={data?.budget}
                  id="budget"
                  placeholder="Please Enter The Budget"
                  className="w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] "
                  type="number"
                  onChange={(e) => setDataKeys((prev: any) => {
                    return {
                      ...prev,
                      budget: e.target.value
                    }
                  })}
                />
              </div>
            </div>

            <div className="w-full">
              <label className='mb-2 block text-lg font-medium' htmlFor="Location">Location</label>
              <input
                required
                defaultValue={data?.location}
                id="Location"
                placeholder="Please Enter The Location"
                className="w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] "
                type="text"
                onChange={(e) => setDataKeys((prev: any) => {
                  return {
                    ...prev,
                    location: e.target.value
                  }
                })} />
            </div>

            <div className="Description flex flex-col mt-10 gap-5">
              <div>
                <p className="font-medium text-lg mb-2">Scope</p>
                <textarea
                  defaultValue={data?.scope}
                  className="outline-none w-full border-2 p-3 rounded-[12px] "
                  placeholder="Please Enter Department Description"
                  cols={30}
                  rows={10}
                  onChange={(e) => setDataKeys((prev: any) => {
                    return {
                      ...prev,
                      scope: e.target.value
                    }
                  })}
                ></textarea>
              </div>
            </div>
            <div className="mt-8 flex justify-center items-center gap-3 ">
              <Link className="border-[1px] border-[#224886] py-2 px-10 rounded-[6px] " to={pathList.projects}>Cancel</Link>
              <button className="bg-[#224886] text-white py-2 px-10 rounded-[6px] " type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </BaseLayout>
  )
}

export default EditProject