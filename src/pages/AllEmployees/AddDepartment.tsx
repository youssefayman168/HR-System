import BaseInput from "@/components/BaseInput"
import BaseLayout from "@/layouts/BaseLayout/BaseLayout"
import { pathList } from "@/routes/routesPaths"
import { BiChevronRight } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'

const AddDepartment = () => {
    const navigation = useNavigate()

    const cancelClick = () => navigation(pathList.all_employees)
    return (
        <BaseLayout>
            <div className='p-5'>
                <div className='header'>
                    <Link to={pathList.tasks} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
                        <img src={ArrowLeft} alt="ArrowLeft" />
                        All Employees
                        <BiChevronRight />
                        Add Department
                    </Link>
                </div>
                <div className='bg-white px-20 py-10 rounded-[15px] mt-8 h-[calc(100vh-185px)] overflow-y-auto HideScroll '>
                    <form action="#">
                        <p className='flex items-center text-[22px] font-[600] mb-6 text-[#0E2354] '>Create New Department</p>
                        <div className='inputs'>
                            <div className='w-full'>
                                <BaseInput type='text' placeholder='Task name' label="Department Name" labelStyles={{ fontWeight: 'bold' }} styles={{ width: "100%", height: "65px", marginBottom: 24 }} />

                                <label
                                    className='mb-2 text-lg font-bold'
                                >
                                    Description
                                </label>
                                <textarea placeholder='Description' className='border-[1px] border-[#BDBDBD] p-5 w-full mt-4 rounded-[10px] h-[250px] outline-none ' ></textarea>
                            </div>
                        </div>
                        <div className='Submit mx-auto w-fit mt-16 flex gap-5' >
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