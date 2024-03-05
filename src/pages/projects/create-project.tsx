import { BiChevronRight } from "react-icons/bi";
import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'
import ArrowBottom from '../../assets/CreateProjects/ArrowBottom.svg'
import { Link } from "react-router-dom";
import DateInpCreate from "@/components/DateInput/DateInpCreate";
import DocumentUploader from "@/components/DocumentUploader";
import postCreateProjects from "@/features/Projects/create-projets/services/postCreateProjects";
import { useQuery } from "@tanstack/react-query";
import getSelectedCompanies from "@/features/Projects/create-projets/services/getSelectedCompanies";
import CreatableSelect from 'react-select/creatable'

const CreateProject = () => {

  // Get Selected Companies
  const companies = useQuery({
    queryKey: ['getSelectedCompanies'],
    queryFn: getSelectedCompanies
  })

  const selectCompany = companies?.data

  const options = [selectCompany?.map(({ id, name }: any) => { label: ''; value: name })]

  return (
    <BaseLayout>
      <div className="p-5">
        <Link to={pathList.projects} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
          <img src={ArrowLeft} alt="ArrowLeft" />
          Projects overview
          <BiChevronRight />
          Create Projects
        </Link>
        <div className="CreatProject HideScroll bg-white mt-6 rounded-[20px] px-[80px] py-[50px] h-[calc(100vh-176px)] overflow-y-auto ">
          <form className=" w-[100%] " onSubmit={postCreateProjects}>
            <p className="font-bold text-[25px] ">Create New Projects</p>
            <div className="mb-5 mt-7 flex items-center gap-8">
              <div className="w-full">
                <label className='mb-2 block text-lg font-medium' htmlFor="Task">Project Name</label>
                <input id="Task" placeholder="Please Enter The Project Name" className="w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] " name="project_name" type="text" />
              </div>
              <div className="w-full">
                <label className='mb-2 block text-lg font-medium' htmlFor="Project">Project Hours</label>
                <input id="Project" placeholder="Please Enter Department Name" className="w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] " name="work_hours" type="text" />
              </div>
            </div>
            <div className="mb-5 mt-7 flex items-center gap-8">
              <div className="w-full">
                <label className='mb-2 block text-lg font-medium' htmlFor="Comp">Company</label>
                <div className="Select-Container relative w-full">
                  <select id="mySelect" className="custom-select p-5 border-[1px] border-[#ccc] w-[100%] appearance-none outline-none h-[60px] rounded-[10px] ">
                    <option value="" >Please Choose The Status</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Planning">Planning</option>
                    <option value="Active">Active</option>
                  </select>
                  <img className="absolute top-[50%] translate-y-[-50%] right-8 " src={ArrowBottom} alt="ArrowBottom" />
                </div>
              </div>

              <div className="w-full ">
                <label className='mb-2 text-lg font-medium block' htmlFor="mySelect">Status</label>
                <div className="Select-Container relative w-full">
                  <select id="mySelect" className="custom-select p-5 border-[1px] border-[#ccc] w-[100%] appearance-none outline-none h-[60px] rounded-[10px] ">
                    <option value="" >Please Choose The Status</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Planning">Planning</option>
                    <option value="Active">Active</option>
                  </select>
                  <img className="absolute top-[50%] translate-y-[-50%] right-8 " src={ArrowBottom} alt="ArrowBottom" />
                </div>
              </div>
            </div>

            <div className="mb-5 mt-7 flex items-center gap-8">
              <div className=" w-full">
                <p className="mb-2 mt-3 text-lg font-medium">Start Date</p>
                <div className="flex items-center gap-4 w-full">
                  <DateInpCreate when="Start Date" />
                </div>
              </div>
              <div className="w-full">
                <label className='mb-2 block text-lg font-medium' htmlFor="budget">Budget</label>
                <input id="budget" placeholder="Please Enter The Budget" className="w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] " type="text" />
              </div>
            </div>

            <div className="w-full">
              <label className='mb-2 block text-lg font-medium' htmlFor="Location">Location</label>
              <input id="Location" placeholder="Please Enter The Location" className="w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] " type="text" />
            </div>

            <div className="Description flex flex-col mt-10 gap-5">
              <div>
                <p className="font-medium text-lg mb-2">Scope</p>
                <textarea className="outline-none w-full border-2 p-3 rounded-[12px] " placeholder="Please Enter Department Description" cols={30} rows={10}></textarea>
              </div>
              <div>
                <DocumentUploader
                  label="Project Plan"
                />
              </div>
            </div>
            <DocumentUploader
              label="Add Drawing"
            />
            <div className="mt-8 flex justify-center items-center gap-3 ">
              <Link className="border-[1px] border-[#224886] py-2 px-10 rounded-[6px] " to={pathList.projects}>Cancel</Link>
              <button className="bg-[#224886] text-white py-2 px-10 rounded-[6px] " type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </BaseLayout>
  )
};

export default CreateProject;
