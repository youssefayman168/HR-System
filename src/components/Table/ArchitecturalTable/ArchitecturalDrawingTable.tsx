import ElementTasks from '@/components/ElementTasks/ElementTasks'
import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import { pathList } from '@/routes/routesPaths'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DropIcon from '../../../assets/Projects/DropDown.svg'
import arrowBottom from '../../../assets/CreateProjects/ArrowBottom.svg'
import ArchitecturalElement from './ArchitecturalElement'
import DropDown from '../DropDown'

const ArchitecturalDrawingTable = () => {
    const [openList, setOpenList] = useState<boolean>(false)
  return (
    <div>
        <div>
            <div className="bg-white duration-300 rounded-[15px] px-10" >
                <div className='w-full text-start '>
                    <div className='text-[#9295AB]'>
                        <div className='border-b-[2px] font-[600] border-[#a0aaca80] py-7 flex items-center gap-[10px] '>
                            <p className='w-[15%]  '>Projects</p>
                            <p className='w-[12%]  '>Task</p>
                            <p className='w-[12%]  '>SubTask</p>
                            <p className='w-[12%]  '>Starting date</p>
                            <p className='w-[12%]  '>Expiry Date</p>
                            <div className='relative w-[12%]   cursor-pointer '>
                                <div className='flex items-center justify-start gap-2' onClick={() => setOpenList(!openList)}>
                                    Status
                                    <img src={DropIcon} alt="DropIcon" />
                                </div>
                                <DropDown style={{ height: openList ? '254px' : '0', opacity: openList ? '1' : '0' , visibility: openList ? 'visible' : 'hidden' }} text1='All' text2='Planning' text3='In progress' text4='Done' text5='Canceled' />
                            </div>
                            <p className='w-[12%]  '>Task Hours</p>
                        </div>
                        <div>
                            <Link to={pathList.architecturalDrawing} className='border-b-[2px] border-[#a0aaca80] font-[600] py-7 flex items-center gap-[10px] '>
                                <ArchitecturalElement text1='Architectural drawing' text2='interior design' text3='interior design' text4='29 July 2023' text5='29 July 2023' text6='In Progress' text7='200h' styles={{border: "1px solid #224886" , color: "#224886" , padding: "5px 20px" , borderRadius: "6px" }} />
                            </Link>
                            <Link to={pathList.architecturalDrawing} className='border-b-[2px] border-[#a0aaca80] font-[600] py-7 flex items-center gap-[10px] '>
                                <ArchitecturalElement text1='Architectural drawing' text2='interior design' text3='interior design' text4='29 July 2023' text5='29 July 2023' text6='In Progress' text7='200h' styles={{border: "1px solid #224886" , color: "#224886" , padding: "5px 20px" , borderRadius: "6px" }} />
                            </Link>
                            <Link to={pathList.architecturalDrawing} className='border-b-[2px] border-[#a0aaca80] font-[600] py-7 flex items-center gap-[10px] '>
                                <ArchitecturalElement text1='Architectural drawing' text2='interior design' text3='interior design' text4='29 July 2023' text5='29 July 2023' text6='In Progress' text7='200h' styles={{border: "1px solid #224886" , color: "#224886" , padding: "5px 20px" , borderRadius: "6px" }} />
                            </Link>
                            <Link to={pathList.architecturalDrawing} className='border-b-[2px] border-[#a0aaca80] font-[600] py-7 flex items-center gap-[10px] '>
                                <ArchitecturalElement text1='Architectural drawing' text2='interior design' text3='interior design' text4='29 July 2023' text5='29 July 2023' text6='In Progress' text7='200h' styles={{border: "1px solid #224886" , color: "#224886" , padding: "5px 20px" , borderRadius: "6px" }} />
                            </Link>
                            <Link to={pathList.architecturalDrawing} className='border-b-[2px] border-[#a0aaca80] font-[600] py-7 flex items-center gap-[10px] '>
                                <ArchitecturalElement text1='Architectural drawing' text2='interior design' text3='interior design' text4='29 July 2023' text5='29 July 2023' text6='In Progress' text7='200h' styles={{border: "1px solid #224886" , color: "#224886" , padding: "5px 20px" , borderRadius: "6px" }} />
                            </Link>
                            <Link to={pathList.architecturalDrawing} className='border-b-[2px] border-[#a0aaca80] font-[600] py-7 flex items-center gap-[10px] '>
                                <ArchitecturalElement text1='Architectural drawing' text2='interior design' text3='interior design' text4='29 July 2023' text5='29 July 2023' text6='In Progress' text7='200h' styles={{border: "1px solid #224886" , color: "#224886" , padding: "5px 20px" , borderRadius: "6px" }} />
                            </Link>
                            <Link to={pathList.architecturalDrawing} className='border-b-[2px] border-[#a0aaca80] font-[600] py-7 flex items-center gap-[10px] '>
                                <ArchitecturalElement text1='Architectural drawing' text2='interior design' text3='interior design' text4='29 July 2023' text5='29 July 2023' text6='In Progress' text7='200h' styles={{border: "1px solid #224886" , color: "#224886" , padding: "5px 20px" , borderRadius: "6px" }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ArchitecturalDrawingTable