import Breadcrumb from "@/components/Breadcrumb"
import BaseLayout from "@/layouts/BaseLayout/BaseLayout"
import { pathList } from "@/routes/routesPaths"
import { useNavigate } from "react-router-dom"
import postCompany from "../services/postCompany"
import { useState } from "react"
import DocumentUploader from "@/components/DocumentUploader"

const AddCompany = () => {
  const navigate = useNavigate()

  const cancelClick = () => navigate(pathList.add_company)

  const [data, setData] = useState({
    name: '',
    image: ''
  })

  return (
    <BaseLayout>
      <div className='p-5'>
        <div className='header'>
          <Breadcrumb link={pathList.all_employees} />
        </div>
        <div className='bg-white px-20 py-10 rounded-[15px] mt-8 h-[calc(100vh-185px)] overflow-y-auto HideScroll relative'>
          <form onSubmit={(e) => {
            e.preventDefault()
            postCompany(navigate(pathList.all_employees), data)
          }}>
            <p className='flex items-center text-[22px] font-[600] mb-6 text-[#0E2354] '>Create New Company</p>
            <div className='inputs mt-12'>
              <div className='w-full flex items-center gap-6'>
                <div className='w-full'>
                  <label
                    className='mb-2 block text-lg font-medium'
                    htmlFor='Task'
                  >
                    Company Name
                  </label>
                  <input
                    required
                    id='Task'
                    placeholder='Please Enter The Company Name'
                    className='w-full h-[60px] border border-[#BDBDBD] placeholder:text-[#737373] py-3 px-5 focus:outline-none rounded-[10px] placeholder:text-[14px] '
                    onChange={(e) =>
                      setData((prev: any) => {
                        return {
                          ...prev,
                          name: e.target.value,
                        };
                      })
                    }
                    type='text'
                  />
                </div>
              </div>
              <div>
                <DocumentUploader
                  label='Company Image'
                  onSelect={(file) =>
                    setData((prev: any) => {
                      return {
                        ...prev,
                        image: file,
                      };
                    })
                  }
                />
              </div>
            </div>
            <div className='Submit mx-auto w-fit absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-5' >
              <button onClick={() => cancelClick()} className='border-[1px] border-[#224886] text-[#224886] py-3 px-14 rounded-[6px] '>Cancel</button>
              <button type='submit' className='bg-[#224886] rounded-[6px] text-white py-3 px-16 '>Save</button>
            </div>
          </form>
        </div>
      </div></BaseLayout>
  )
}

export default AddCompany