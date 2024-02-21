import { Link } from 'react-router-dom'
import DeleteIcon from '../../assets/Projects/Delete.svg'
import EditIcon from '../../assets/Projects/Edit.svg'
import { CSSProperties } from 'react'
import { pathList } from '@/routes/routesPaths'


type MyElement = {
    text1? : string,
    text2? : string,
    text3? : string,
    text4? : string,
    text5? : string,
    text6? : string,
    text7? : string,
    text8? : string,
    status?: CSSProperties,
    
}

const Element = ({text1 , text2 , text3 , text4 , text5 , text6 , text7 , text8 , status } : MyElement) => {
  return (
    <Link className='flex items-center gap-2 py-7 text-[#9295AB] border-b-[2px] border-[#a0aaca80] ' to={`/projects/21323`}>
        <p className='w-[5%] text-[#105090] font-[600] '>{text1}</p>
        <p className='w-[12%] text-[#105090] font-[600] '>{text2}</p>
        <p className='w-[18%] '>{text3}</p>
        <p className='w-[10%]  '>{text4}</p>
          <p  className='w-[10%] mx-auto py-[7px] px-[12px] text-center rounded-[6px]'>{text5}</p>
        <div className='w-[10%] '>
        <p style={status} className='w-[120px]  mx-auto py-[7px] px-[12px] text-center rounded-[6px]'>{text6}</p>
        </div>
        <p className='w-[13%]  text-center  '>{text7}</p>
        <div className=' flex-1 flex items-center  gap-[15px] '>
          <p className='w-[50%] '>{text8}</p>
          <div className='flex items-center gap-4 ms-auto'>
              <img className='bg-[#DEFFE1] cursor-pointer py-[10px] px-[10px] rounded-full ' src={EditIcon} alt="EditIcon" />
              <img className='cursor-pointer' src={DeleteIcon} alt="DeleteIcon" />
          </div>
        </div>
    </Link>
  )
}

export default Element