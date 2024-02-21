import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import { pathList } from '@/routes/routesPaths'
import React from 'react'
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import BaseInput from '@/components/BaseInput'
import DateInpCreate from '@/components/DateInput/DateInpCreate'

const AddSubTasks = () => {
  return (
    <BaseLayout>
        <div className='p-5'>
            <div className='Header mb-8 '>
                <Link to={pathList.architecturalDrawing} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
                    <img src={ArrowLeft} alt="ArrowLeft" />
                    Tasks
                    <BiChevronRight />
                    Architectural drawing
                    <BiChevronRight />
                    Add SubTasks
                </Link>
            </div>
            <div className='bg-white px-32 py-11 rounded-[15px] h-[calc(100vh-186px)] overflow-y-auto HideScroll '>
                <form action="#">
                    <p className='mb-5 text-[#101828] font-[600] text-[24px] '>Add Subtasks</p>
                    <div className='inputs'>
                        <div className='flex items-center gap-8'>
                            <div className='w-full'>
                                <BaseInput styles={{width: "100%" , height: "70px" }} type='text' label='Sub Task Name' placeholder='Please Enter The Task Name' id='TaskName' />
                            </div>
                            <div className='w-full'>
                                <BaseInput styles={{width: "100%" , height: "70px" }} type='text' label='Sub Task Hours' placeholder='Please Enter Department Name' id='TaskHours' />
                            </div>
                        </div>

                        <div className='flex items-center gap-8'>
                            <div className='w-full'>
                                <div className='w-full mt-3 '>
                                    <BaseInput styles={{width: "100%" , height: "70px" }} type='text' label='Company' placeholder='Please Enter The Task Name' id='Company' />
                                </div>
                                <div className='w-full mt-5 '>
                                    <p className='text-lg font-medium'>Duration</p>
                                    <div className='flex gap-4 mt-3  '>
                                        <DateInpCreate when='From' />
                                        <DateInpCreate when='To' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex flex-col '>
                                <label className='mt-7 mb-2 text-lg font-medium ' htmlFor="textArea">Sub Task Description</label>
                                <textarea className='outline-none border-[1px] rounded-[10px] border-[#BDBDBD] h-[190px] p-5  ' placeholder='Please Enter Department Description' id="textArea"  ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className='Submit mx-auto w-fit mt-10 flex gap-5' >
                        <button type='submit' className='bg-[#224886] rounded-[6px] text-white py-3 px-16 '>Save</button>
                        <button className='border-[1px] border-[#224886] text-[#224886] py-3 px-14 rounded-[6px] '>Cancel</button>
                    </div>  
                </form>
            </div>
        </div>
    </BaseLayout>
  )
}

export default AddSubTasks