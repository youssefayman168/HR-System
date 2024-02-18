import { BiTrashAlt } from "react-icons/bi"; 
import { BiPencil } from "react-icons/bi"; 
import DeleteIcon from '../../assets/Projects/Delete.svg'
import EditIcon from '../../assets/Projects/Edit.svg'
import { CSSProperties } from 'react'


type MyElement = {
    id? : string,
    projects? : string,
    company? : string,
    startingDate? : string,
    expiryDate? : string,
    status? : string,
    projectHours? : string,
    workHours? : string,
    styles?: CSSProperties,
}



const Element = ({id , projects , company , startingDate , expiryDate , status , projectHours , workHours , styles} : MyElement) => {
  return (
    <>
    <td className='text-[#105090] font-bold py-7' >{id}</td>
    <td className='text-[#105090] font-bold' >{projects}</td>
    <td className='text-[#9295AB]'>{company}</td>
    <td className='text-[#9295AB]' >{startingDate}</td>
    <td className='text-[#9295AB]'>{expiryDate}</td>
    <td className='block mt-5 rounded-[8px] mx-auto w-[95px] ' style={styles} ><div className='p-2'>{status}</div></td>
    <td className='text-[#9295AB]' >{projectHours}</td>
    <td className='text-[#9295AB]' >{workHours}</td>
    <td><img className="bg-[#DEFFE1] inline-block py-[10px] px-[10px] mt-1 rounded-full cursor-pointer" src={EditIcon} alt="EditIcon" /></td>
    <td className='inline-block cursor-pointer' ><img src={DeleteIcon} alt="DeleteIcon" /></td>
    </>
  )
}

export default Element