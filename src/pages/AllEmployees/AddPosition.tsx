import BaseInput from "@/components/BaseInput"
import BaseLayout from "@/layouts/BaseLayout/BaseLayout"
import { pathList } from "@/routes/routesPaths"
import { BiChevronRight } from "react-icons/bi"
import { Link, useNavigate } from "react-router-dom"
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'
import ArrowBottom from '@/assets/CreateProjects/ArrowBottom.svg'

const AddPosition = () => {
    const navigation = useNavigate()

    const cancelAddPosition = () => navigation(pathList.all_employees)

    return (
        <BaseLayout>
            <div className='p-5'>
                <div className='header'>
                    <Link to={pathList.tasks} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
                        <img src={ArrowLeft} alt="ArrowLeft" />
                        All Employees
                        <BiChevronRight />
                        Add Position
                    </Link>
                </div>
                <div className='bg-white px-20 py-10 rounded-[15px] mt-8 h-[calc(100vh-185px)] overflow-y-auto HideScroll '>
                    <form action="#">
                        <p className='flex items-center text-[22px] font-[600] mb-12 text-[#0E2354] '>Create New Position</p>
                        <div className='inputs'>
                            <div className='w-full'>
                                <div className="w-full flex items-center gap-5 mb-8">
                                    <div className="w-full">
                                        <BaseInput type='text' placeholder='Task name' label="Position Name" labelStyles={{ fontWeight: 'bold' }} styles={{ height: "65px", marginBottom: 24, width: '100%' }} />
                                    </div>
                                    <div className="w-full mb-2">
                                        <label className={`my-3 text-lg font-bold`} htmlFor="mySelect">Department</label>
                                        <div className="Select-Container relative w-full mt-2">
                                            <select id="mySelect" className={` px-3 border-[1px] border-[#ccc] w-[100%] appearance-none outline-none rounded-[10px] h-[65px] py-3`}>
                                                <option value="">Please Enter Department Name</option>
                                                <option value="">Super Admin</option>
                                                <option value="">HR</option>
                                            </select>
                                            <img className="absolute top-[50%] translate-y-[-50%] right-4" src={ArrowBottom} alt="ArrowBottom" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5">
                                    <div className="flex-1">
                                        <label
                                            className='mb-2 text-lg font-bold'
                                        >
                                            Role Description
                                        </label>
                                        <textarea placeholder='Please Enter Department Description' className='border-[1px] border-[#BDBDBD] p-5 w-full mt-4 rounded-[10px] h-[250px] outline-none ' ></textarea>
                                    </div>
                                    <div className="flex-1">
                                        <label
                                            className='mb-2 text-lg font-bold'
                                        >
                                            Requirements
                                        </label>
                                        <textarea placeholder='Please Enter Department Description' className='border-[1px] border-[#BDBDBD] p-5 w-full mt-4 rounded-[10px] h-[250px] outline-none ' ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='Submit mx-auto w-fit mt-16 flex gap-5' >
                            <button onClick={() => cancelAddPosition()} className='border-[1px] border-[#224886] text-[#224886] py-3 px-14 rounded-[6px] '>Cancel</button>
                            <button type='submit' className='bg-[#224886] rounded-[6px] text-white py-3 px-16 '>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </BaseLayout>
    )
}

export default AddPosition