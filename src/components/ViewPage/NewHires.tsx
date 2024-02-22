import { pathList } from '@/routes/routesPaths'
import React from 'react'
import { Link } from 'react-router-dom'

type Iprops = {
    title: string ,
    desc: string ,
    btn: string
}

const NewHires = ( { title , desc , btn } : Iprops ) => {
  return (
    <div className='flex items-center max-xxl:gap-4 gap-10 mb-6 w-fit '>
        <div className='w-[400px] max-xxl:w-[360px] '>
            <p className='text-[15px] font-[700] mb-1'>{title}</p>
            <p className='text-[#909DAD] text-[14px]'>{desc}</p>
        </div>
        <div className='Btn'>
            <Link to={pathList.viewSubTask} className='border-[1px] font-[500] border-[#224886] py-[7px] px-8 text-[#224886] rounded-[6px] ' >{btn}</Link>
        </div>
    </div>
  )
}

export default NewHires