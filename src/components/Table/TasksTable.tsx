import React, { useState } from 'react'
import ElementTasks from '../ElementTasks/ElementTasks'
import DropIcon from '../../assets/Projects/DropDown.svg'
import DropDown from '@/components/Table/DropDown'
import arrowBottom from '../../assets/Tasks/arrowBottom.svg'
import { Link } from 'react-router-dom'
import { pathList } from '@/routes/routesPaths'

const TasksTable = () => {

    const [openList, setOpenList] = useState<boolean>(false)
    const [openTable, setOpenTable] = useState<boolean>(false)
  return (
    <>
        <div>
            <div onClick={() => { setOpenTable(!openTable) }} className='text-[#105090] w-fit cursor-pointer text-[22px] font-[700] mt-6 flex items-center gap-3 '><img className={`duration-300 ${openTable && "rotate-[-90deg]" }`} src={arrowBottom} alt="arrowBottom" /> Architectural drawing 7</div>
            <div className={`${openTable ? "h-0 overflow-hidden" : "HideScroll h-[calc(100vh-520px)] overflow-y-auto " } bg-white mt-8 duration-300 rounded-[15px] px-10`} >
                <div className='w-full text-start '>
                    <div className='text-[#9295AB]'>
                        <div className='border-b-[2px] border-[#a0aaca80] py-7 flex items-center gap-[10px] '>
                            <p className='w-[15%]  '>Projects</p>
                            <p className='w-[12%]  '>Task</p>
                            <p className='w-[12%]  '>starting date</p>
                            <p className='w-[12%]  '>Expiry Date</p>
                            <div className='relative w-[12%]   cursor-pointer '>
                                <div className='flex items-center justify-start gap-2' onClick={() => setOpenList(!openList)}>
                                    Status
                                    <img src={DropIcon} alt="DropIcon" />
                                </div>
                                <DropDown style={{ height: openList ? '254px' : '0', opacity: openList ? '1' : '0' , visibility: openList ? 'visible' : 'hidden' }} text1='All' text2='Planning' text3='In progress' text4='Done' text5='Canceled' />
                            </div>
                            <p className='w-[12%]  '>Task Hours</p>
                            <p className='w-[12%]  '>Actions</p>
                        </div>
                        <div>
                            <Link to={pathList.architecturalDrawing} className='border-b-[2px] border-[#a0aaca80] font-[600] py-7 flex items-center gap-[10px] '>
                                <ElementTasks text1='Architectural drawing' text2='interior design' text3='29 July 2023' text4='29 July 2023' text5='In Progress' text6='200h' text7='Add sub Task' styles={{border: "1px solid #224886" , color: "#224886" , padding: "5px 20px" , borderRadius: "6px" }} />
                            </Link>
                            <Link to={pathList.architecturalDrawing} className='border-b-[2px] border-[#a0aaca80] font-[600] py-7 flex items-center gap-[10px] '>
                                <ElementTasks text1='Architectural drawing' text2='interior design' text3='29 July 2023' text4='29 July 2023' text5='In Progress' text6='200h' text7='Add sub Task' styles={{border: "1px solid #224886" , color: "#224886" , padding: "5px 20px" , borderRadius: "6px" }} />
                            </Link>
                            <Link to={pathList.architecturalDrawing} className='border-b-[2px] border-[#a0aaca80] font-[600] py-7 flex items-center gap-[10px] '>
                                <ElementTasks text1='Architectural drawing' text2='interior design' text3='29 July 2023' text4='29 July 2023' text5='In Progress' text6='200h' text7='Add sub Task' styles={{border: "1px solid #224886" , color: "#224886" , padding: "5px 20px" , borderRadius: "6px" }} />
                            </Link>
                            <Link to={pathList.architecturalDrawing} className='border-b-[2px] border-[#a0aaca80] font-[600] py-7 flex items-center gap-[10px] '>
                                <ElementTasks text1='Architectural drawing' text2='interior design' text3='29 July 2023' text4='29 July 2023' text5='In Progress' text6='200h' text7='Add sub Task' styles={{border: "1px solid #224886" , color: "#224886" , padding: "5px 20px" , borderRadius: "6px" }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TasksTable