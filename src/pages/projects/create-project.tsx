import { BiChevronRight } from "react-icons/bi"; 
import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'
import ArrowBottom from '../../assets/CreateProjects/ArrowBottom.svg'
import DropFiles from '../../assets/CreateProjects/DropFiles.svg'
import { Link } from "react-router-dom";
import DateInpCreate from "@/components/DateInput/DateInpCreate";

const CreateProject = () => {

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
            <form className=" w-[100%] " action="">
                <p className="font-bold text-[25px] ">Create New Projects</p>
                <div className="mb-5 mt-7 flex items-center gap-8">
                  <div className="w-full">
                    <label className='mb-2 block text-lg font-medium' htmlFor="Task">Project Name</label>
                    <input id="Task" placeholder="Please Enter The Task Name" className="w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] " type="text" />
                  </div>
                  <div className="w-full">
                    <label className='mb-2 block text-lg font-medium' htmlFor="Project">Project Hours</label>
                    <input id="Project" placeholder="Please Enter Department Name" className="w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] " type="text" />
                  </div>
                </div>
                <div className="mb-5 mt-7 flex items-center gap-8">
                  <div className="w-full">
                    <label className='mb-2 block text-lg font-medium' htmlFor="Comp">Company</label>
                    <input id="Comp" placeholder="Please Enter The Task Name" className="w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] " type="text" />
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
                
                <div className="Duration">

                  <p className="mb-2 mt-3 text-lg font-medium">Duration</p>

                  <div className="flex items-center gap-4 w-[50%]">

                    <DateInpCreate when="From" />
                    <DateInpCreate when="To" />

                  </div>

                </div>

              <div className="Description flex flex-col mt-10 gap-5">
                <div>
                  <p className="font-medium text-lg mb-2">Scope</p>
                  <textarea className="outline-none w-full border-2 p-3 rounded-[12px] " placeholder="Please Enter Department Description" cols={30} rows={10}></textarea>
                </div>
                <div>
                  <p className="font-medium text-lg mb-2">Project Plan</p>
                  <textarea className="outline-none w-full border-2 p-3 rounded-[12px] " placeholder="Please Enter Department Description " cols={30} rows={10}></textarea>
                </div>
              </div>

              <div className="DragCV mt-5 ">
                <p className="font-medium text-lg mb-2">Add Drawing</p>

                <label className="border-[2px] relative border-dashed h-[200px] rounded-[12px] border-[#b1bfd06a] block cursor-pointer ">
                  <input className="w-full" type="file" accept="image/png, image/jpeg, image/jpg, image/webp" hidden />
                  <div className="content mx-auto w-fit flex flex-col justify-center items-center h-full ">
                    <img className="mb-2" src={DropFiles} alt="DropFiles" />
                    <p>Drop The CV  here, or <span className="text-[#1F4690] font-semibold">Browse</span> </p>
                    <p className="text-[#969DB2] text-[12px]">Supports: PNG, JPG, JPEG, WEBP</p>
                  </div>
                </label>
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
};

export default CreateProject;
