import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import { pathList } from '@/routes/routesPaths'
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import EmployeeInfo from '@/features/AllEmployees/ViewEmployees/components/EmployeeInfo'
import People from '@/components/ViewPage/People'
import testImg from "../../assets/testImg.jpg";
import download from '../../assets/Projects/Download.svg'
import BtnCreate from '@/components/Buttons/BtnCreate'

const ViewSubTask = () => {
    return (
        <BaseLayout>
            <div className='p-5'>
                <div className='Header'>
                    <Link to={pathList.architecturalDrawing} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
                        <img src={ArrowLeft} alt="ArrowLeft" />
                        Tasks
                        <BiChevronRight />
                        Architectural drawing
                        <BiChevronRight />
                        View Sub Task
                    </Link>
                </div>
                <div className='Body bg-white HideScroll h-[calc(100vh-175px)] overflow-y-auto rounded-[15px] px-14 py-10 mt-6'>
                    <div className='flex items-center justify-between border-b-[1px] border-[#EFF1F4] pb-10'>
                        <div className='w-[500px]'>
                            <p className='text-[22px] font-[600] mb-5 text-[#0E2354]'>Designing Sub task</p>
                            <p className='text-[#676E7E]  '>Owners have view and edit access to user management, roles and permission by default which cannot be changed. You have an option to set permissions or add other admins</p>
                        </div>
                        <BtnCreate text='Export As PDF' icon={download} path='' />
                    </div>
                    <div className='Details mt-8'>
                        <div className='flex items-center gap-32'>
                            <div>
                                <p className='font-[600] text-[18px] text-[#0E2354]'>Project</p>
                                <p className='mb-4 mt-2'>Project One</p>
                            </div>
                            <div>
                                <p className='font-[600] text-[18px] text-[#0E2354]'>Task</p>
                                <p className='mb-4 mt-2'>Task One</p>
                            </div>
                        </div>
                        <p className='font-[600] text-[18px] text-[#0E2354]'>Task Team</p>
                        <p className='mt-6 mb-3 '>People working on the task</p>
                        <div className='People flex gap-3'>
                            <People photo={testImg} name='Jennifer Lopez' />
                            <People photo={testImg} name='Tassy Omah' />
                            <People photo={testImg} name='Emeto Winnder' />
                            <People photo={testImg} name='Kate Magnamay' />
                            <People photo={testImg} name='Jane Mena' />
                        </div>
                        <p className='font-[600] text-[18px] my-6 text-[#0E2354] '>Task Details</p>
                        <div className='flex gap-20'>
                        <div>
                            <EmployeeInfo title='Sub Task ID:' value='23GH 56HJK' />
                            <div className="flex items-start flex-col mb-6">
                                <p className="text-sm text-grayColor font-bold capitalize">Status</p>
                                <p className="relative text-[15px] font-semibold bg-[#ECFDF3] text-[#027A48] after:absolute after:bg-[#12B76A] left-[-5px] py-[3px] px-3 ps-5 after:w-[8px] after:h-[8px] after:rounded-full after:top-[50%] after:translate-y-[-50%] after:left-[7px] rounded-[15px] ">Active</p>
                            </div>
                            <EmployeeInfo title='Start Date' value='Mon Jan 29 2024 ' />
                        </div>
                        <div>
                            <EmployeeInfo title='Sub Task Hours' value='12' />
                            <EmployeeInfo title='Company' value='Hr' />
                            <EmployeeInfo title='End Date' value='Mon Jan 29 2024' />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default ViewSubTask