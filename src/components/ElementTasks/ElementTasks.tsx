import React, { CSSProperties } from 'react'
import DeleteIcon from '../../assets/Projects/Delete.svg'
import EditIcon from '../../assets/Projects/Edit.svg'
import { Link } from 'react-router-dom'

type ElementTask = {
    text1 : string ,
    text2 : string ,
    text3 : string ,
    text4 : string ,
    text5 : string ,
    text6 : string ,
    text7 : string ,
    styles? : CSSProperties ,
    status? : CSSProperties ,
}

const ElementTasks = ({ text1 , text2 , text3 , text4 , text5 , text6 , text7 , styles , status } : ElementTask ) => {
  return (
    <>
        <p className='w-[15%] text-[#105090] '>{text1}</p>
        <p className='w-[12%] '>{text2}</p>
        <p className='w-[12%] '>{text3}</p>
        <p className='w-[12%] '>{text4}</p>
        <div className='w-[12%] ' >
          <p style={status} className='w-[120px] py-[7px] px-[12px] text-center rounded-[6px] bg-[#E6EFFC] text-[#0764E6]'>{text5}</p>
        </div>
        <p className='w-[12%] '>{text6}</p>
        <div className=' flex-1 flex items-center gap-[15px] '>
          <Link to={"/home"} style={styles} className='w-fit'>{text7}</Link>
          <div className='flex items-center gap-4 ms-auto'>
              <img className='bg-[#DEFFE1] cursor-pointer py-[10px] px-[10px] rounded-full ' src={EditIcon} alt="EditIcon" />
              <img className='cursor-pointer' src={DeleteIcon} alt="DeleteIcon" />
          </div>
        </div>
    </>
  )
}

export default ElementTasks