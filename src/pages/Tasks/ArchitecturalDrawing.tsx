import ArchitecturalDrawingTable from '@/components/Table/ArchitecturalTable/ArchitecturalDrawingTable'
import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'
import { pathList } from '@/routes/routesPaths'
import React from 'react'
import DownloadIcon from '../../assets/Projects/Download.svg'
import { BiChevronRight } from 'react-icons/bi'
import DateIcon from '../../assets/Projects/Date.svg'
import { Link } from 'react-router-dom'
import plus from '../../assets/plus.svg'
import DateInp from '@/components/DateInput/Date'
import BtnCreate from '@/components/BtnCreate/BtnCreate'

const ArchitecturalDrawing = () => {
  return (
    <BaseLayout>
    <div className='p-5'>
        <div className='header flex items-center justify-between '>
          <Link to={pathList.tasks} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
              <img src={ArrowLeft} alt="ArrowLeft" />
              Tasks
              <BiChevronRight />
              Architectural drawing
          </Link>
          <div className='btns flex items-center gap-4 '>
              <Link to={""} className='text-[#224886] gap-3 py-3 px-4 rounded-[10px] border-[1px] border-[#224886]'>View Task</Link>
              <DateInp icon={DateIcon} stylesInp={{display: "flex" , flexDirection: "row-reverse" }} styles={{flexDirection: "row-reverse" }} />
              <BtnCreate icon={plus} text='Add Subtasks' path={pathList.addSubTasks} />
          </div>
        </div>
        <div className='text-[#105090] my-7 w-fit text-[22px] font-[700] flex items-center gap-3'>All SubTasks</div>
        <div className='rounded-[15px]'>
            <ArchitecturalDrawingTable />
        </div>
        <div className='w-fit ms-auto mt-5'>
            <BtnCreate icon={DownloadIcon} text="Export As PDF" path="" />
        </div>
    </div>
    </BaseLayout>
  )
}

export default ArchitecturalDrawing