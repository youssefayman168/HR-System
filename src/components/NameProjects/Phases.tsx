import React, { useState } from 'react'
import bold from '../../assets/NameProjects/Bold.svg'
import bTM from '../../assets/NameProjects/ArrowBTM.svg'
import Groupe from '../../assets/NameProjects/Groupe.svg'
import Calendar from '../../assets/NameProjects/Calendar.svg'
import ArrowBottom from '../../assets/NameProjects/PhaseArrowBTM.svg'
import icons from '../../assets/NameProjects/GroupeImg.svg'
import addPlus from '../../assets/NameProjects/addPlus.svg'
import ElementPhase from './ElementPhase'
import { Link } from 'react-router-dom'
import DropDown from '../Table/DropDown'
type phaseNum = {
    phaseNum : string
}
const Phases = ( { phaseNum } : phaseNum ) => {
    const [ phaseList , setPhaseList ] = useState(false)
    const [ openList , setOpenList ] = useState(false)

  return (
      <div className='Phases mb-10'>
      <div onClick={() => { setPhaseList(!phaseList) } } className='flex cursor-pointer items-center gap-3 text-[#101828] font-[600] text-[19px] mt-2 w-fit '><img className={`${phaseList ? "rotate-[-90deg]" : ""} duration-300 `} src={ArrowBottom} alt="ArrowBottom" />Phase{phaseNum}</div>
        <div className={` ${phaseList ? "h-0 overflow-hidden opacity-0 hidden " : ""} duration-200`} >
            <div className='header flex items-center border-b-[1px] border-[#DFE2E5] text-[#9295AB] font-[800] pb-4 mt-4 '>
                <p className='w-[15%]'>A Task name</p>
                <div onClick={() => setOpenList(!openList)} className='w-[15%] cursor-pointer relative flex items-center gap-2'>
                    <img src={bold} alt="bold" />
                    Status
                    <img src={bTM} alt="arrowBTM" />
                    <DropDown text1='All' text2='Planning' text3='In progress' text4='Done' text5='Canceled' style={{ height: openList ? '254px' : '0', opacity: openList ? '1' : '0' , visibility: openList ? 'visible' : 'hidden' }} />
                </div>
                <div className='w-[15%] flex items-center gap-2'>
                    <img src={Groupe} alt="Groupe" />
                    Assignee
                </div>
                <div className='w-[15%] flex items-center gap-2'>
                    <img src={Calendar} alt="Calendar" />
                    Start Date
                </div>
                <div className='w-[15%] flex items-center gap-2'>
                    <img src={Calendar} alt="Calendar" />
                    Expiry date
                </div>
            </div>
            <ElementPhase taskName='Architectural drawing' status='Progress' icons={icons} startDate='29 July 2023' ExpiryDate='29 July 2023' styleStaus="progress" />
            <ElementPhase taskName='Architectural drawing' status='Canceled' icons={icons} startDate='29 July 2023' ExpiryDate='29 July 2023' styleStaus="canceled" />
            <Link to={'/projects/21323/addTask'} className='addTask flex items-center gap-2 mt-3 text-[#101828] text-[18px] font-[600] '>
                <img src={addPlus} alt="addPlus" />
                Add Task
            </Link>
        </div>
    </div>
  )
}

export default Phases