import { BiTrashAlt } from "react-icons/bi"; 
import { BiPencil } from "react-icons/bi"; 
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
    <td className='block mt-5 rounded-[8px] w-fit mx-auto ' style={styles} ><div className='p-2'>{status}</div></td>
    <td className='text-[#9295AB]' >{projectHours}</td>
    <td className='text-[#9295AB]' >{workHours}</td>

    {/* <div className="flex justify-center items-center">
    <td className='text-[#34E045] bg-[#DEFFE1] block mt-5 rounded-[8px] w-fit mx-auto' ><div className='p-2'><BiPencil /></div></td>
    <td className='text-[#AA0000] bg-[#FFE9E0] block mt-5 rounded-[8px] w-fit mx-auto' ><div className='p-2'><BiTrashAlt /></div></td>
    </div> */}
    </>
  )
}

export default Element