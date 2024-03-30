import BaseInput from "@/components/BaseInput"
import BaseLayout from "@/layouts/BaseLayout/BaseLayout"
import { pathList } from "@/routes/routesPaths"
import { useNavigate } from "react-router-dom"
import postDepartment from "../services/postDepartment"
import Breadcrumb from "@/components/Breadcrumb"
import ArrowBottom from '@/assets/Projects/DropDown.svg'
import { useQuery } from "@tanstack/react-query"
import getAllHeads from "../services/getHeads"

const AddDepartment = () => {
  const navigation = useNavigate()

  //  Get All Heads
  const heads = useQuery({
    queryKey: ['getAllHeads'],
    queryFn: getAllHeads
  })

  const headData = heads?.data?.data

  // Cancel Click Functionality
  const cancelClick = () => navigation(pathList.all_employees)
  return (
    <BaseLayout>
      <div className='p-5'>
        <div className='header'>
          <Breadcrumb link={pathList.all_employees} />
        </div>
        <div className='bg-white px-20 py-10 rounded-[15px] mt-8 h-[calc(100vh-185px)] overflow-y-auto HideScroll relative'>
          <form onSubmit={postDepartment}>
            <p className='flex items-center text-[22px] font-[600] mb-6 text-[#0E2354] '>Create New Department</p>
            <div className='inputs mt-12'>
              <div className='w-full flex items-center gap-6'>
                <BaseInput
                  type='text'
                  placeholder='Please Enter Department Name'
                  label="Department Name"
                  labelStyles={{ fontWeight: 'bold' }}
                  name="name"
                  styles={{ width: "100%", height: "65px", marginBottom: 24 }}
                  containerClassName="flex-1"

                />

                <div className="w-1/2">
                  <label className=' mt-3 text-lg font-bold' htmlFor="mySelect">Head Name</label>
                  <div className="Select-Container relative w-full">
                    <select id="mySelect" className="custom-select p-5 border-[1px] border-[#ccc] w-full appearance-none outline-none rounded-[10px] cursor-pointer h-[65px] mt-2" name="head">
                      {headData?.map(({ name, id }: any) => {
                        return <option key={id} value={id}>{name}</option>
                      })}
                    </select>
                    <img className="absolute top-[50%] translate-y-[-50%] right-8 " src={ArrowBottom} alt="ArrowBottom" />
                  </div>
                </div>

              </div>
            </div>
            <div className='Submit mx-auto w-fit absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-5' >
              <button onClick={() => cancelClick()} className='border-[1px] border-[#224886] text-[#224886] py-3 px-14 rounded-[6px] '>Cancel</button>
              <button type='submit' className='bg-[#224886] rounded-[6px] text-white py-3 px-16 '>Save</button>
            </div>
          </form>
        </div>
      </div>
    </BaseLayout>
  )
}

export default AddDepartment