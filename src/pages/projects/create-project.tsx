import { BiChevronRight } from "react-icons/bi"; 
import BaseLayout from "@/layouts/BaseLayout/BaseLayout";
import { pathList } from "@/routes/routesPaths";
import { Link } from "react-router-dom";
import BaseInput from "@/components/BaseInput";

const CreateProject = () => {
  return (
    <BaseLayout>
      <div className="p-5">
          <Link to={pathList.projects} className="flex items-center gap-3 text-[22px] text-[#224886] font-bold ">
            <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17.5" cy="18" r="17.5" fill="white"/><path d="M10.25 17.75H25.25C25.4489 17.75 25.6397 17.829 25.7803 17.9697C25.921 18.1103 26 18.3011 26 18.5C26 18.6989 25.921 18.8897 25.7803 19.0303C25.6397 19.171 25.4489 19.25 25.25 19.25H10.25C10.0511 19.25 9.86032 19.171 9.71967 19.0303C9.57902 18.8897 9.5 18.6989 9.5 18.5C9.5 18.3011 9.57902 18.1103 9.71967 17.9697C9.86032 17.829 10.0511 17.75 10.25 17.75Z" fill="#224886"/><path d="M10.5599 18.5L16.7804 24.719C16.9212 24.8598 17.0003 25.0508 17.0003 25.25C17.0003 25.4491 16.9212 25.6401 16.7804 25.781C16.6396 25.9218 16.4486 26.0009 16.2494 26.0009C16.0502 26.0009 15.8592 25.9218 15.7184 25.781L8.96839 19.031C8.89854 18.9613 8.84313 18.8785 8.80532 18.7874C8.76751 18.6963 8.74805 18.5986 8.74805 18.5C8.74805 18.4013 8.76751 18.3036 8.80532 18.2125C8.84313 18.1214 8.89854 18.0386 8.96839 17.969L15.7184 11.219C15.8592 11.0781 16.0502 10.999 16.2494 10.999C16.4486 10.999 16.6396 11.0781 16.7804 11.219C16.9212 11.3598 17.0003 11.5508 17.0003 11.75C17.0003 11.9491 16.9212 12.1401 16.7804 12.281L10.5599 18.5Z" fill="#224886"/></svg>
            Projects overview
            <BiChevronRight />
            Create Projects
          </Link>
          <div className="CreatProject bg-white mt-6 rounded-[20px] px-[80px] py-[50px] ">
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

                  <div>
                    <label className='mb-2 text-lg font-medium block' htmlFor="mySelect">Status</label>
                    <div className="Select-Container relative">
                      <select id="mySelect" className="custom-select p-5 border-[1px] border-[#ccc] appearance-none outline-none w-[590px] h-[60px] rounded-[10px] ">
                        <option value="" >Please Choose The Status</option>
                        <option value="On Hold">On Hold</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Planning">Planning</option>
                        <option value="Active">Active</option>
                      </select>
                      <svg className="absolute top-[50%] translate-y-[-50%] right-8 " width="15" height="6" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0L5 5L10 0L0 0Z" fill="black"/></svg>
                    </div>
                  </div>
                </div>
                
                <div className="Duration">
                  <p className="mb-2 mt-3 text-lg font-medium">Duration</p>
                  <div className="flex items-center gap-4">
                    <input className="border-2 p-[14px] ps-6 pe-16 " type="date" />
                    <input className="border-2 p-[14px] ps-6 pe-16 " type="date" />
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
                    <svg className="mb-2" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1582 9.90104L18.1917 7.93641L8.35886 17.7673C7.97161 18.1547 7.66445 18.6145 7.45492 19.1206C7.24539 19.6267 7.13759 20.1691 7.13768 20.7169C7.13777 21.2646 7.24574 21.807 7.45544 22.313C7.66514 22.819 7.97245 23.2788 8.35983 23.666C8.74721 24.0533 9.20707 24.3604 9.71315 24.57C10.2192 24.7795 10.7616 24.8873 11.3094 24.8872C11.8571 24.8871 12.3995 24.7791 12.9055 24.5694C13.4115 24.3597 13.8713 24.0524 14.2585 23.665L26.0579 11.8676C27.3616 10.5637 28.0939 8.79531 28.0937 6.95148C28.0935 5.10765 27.3609 3.33941 26.057 2.03576C24.753 0.732102 22.9847 -0.000181642 21.1408 3.37966e-08C19.297 0.00018171 17.5288 0.732814 16.2251 2.03673L3.83673 14.4232L3.80961 14.4484C0.0217969 18.2362 0.0217969 24.3742 3.80961 28.16C7.59742 31.9459 13.7354 31.9459 17.5232 28.16L17.5484 28.1329L17.5504 28.1349L26.0075 19.6796L24.041 17.715L15.5838 26.1683L15.5586 26.1935C14.2607 27.4888 12.502 28.2163 10.6684 28.2163C8.83471 28.2163 7.07597 27.4888 5.77811 26.1935C5.13478 25.5487 4.62505 24.7834 4.27813 23.9412C3.9312 23.0991 3.75392 22.1968 3.75644 21.286C3.75896 20.3752 3.94123 19.4738 4.29281 18.6336C4.64439 17.7934 5.15835 17.0309 5.80523 16.3897L5.8033 16.3878L18.1936 4.00135C19.8192 2.37385 22.4658 2.37385 24.0933 4.00135C25.7208 5.62885 25.7189 8.27354 24.0933 9.8991L12.2939 21.6965C12.0299 21.9394 11.6822 22.0709 11.3235 22.0635C10.9648 22.0561 10.6228 21.9104 10.369 21.6568C10.1151 21.4033 9.9691 21.0614 9.96135 20.7027C9.95359 20.344 10.0847 19.9962 10.3274 19.7319L20.1602 9.8991L20.1582 9.90104Z" fill="#1F4690"/></svg>
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
