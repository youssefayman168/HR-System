import DeleteIcon from '../../../assets/Projects/Delete.svg'
import EditIcon from '../../../assets/Projects/Edit.svg'

type ElementArchitectural = {
    text1 : string ,
    text2 : string ,
    text3 : string ,
    text4 : string ,
    text5 : string ,
    text6 : string ,
    text7 : string ,
    styleStaus : string ,
}

const ArchitecturalElement = ({ text1 , text2 , text3 , text4 , text5 , text6 , text7 , styleStaus } : ElementArchitectural ) => {
  return (
    <>
        <p className='w-[15%] text-[#105090] '>{text1}</p>
        <p className='w-[12%] '>{text2}</p>
        <p className='w-[12%] '>{text3}</p>
        <p className='w-[12%] '>{text4}</p>
        <p className='w-[12%] '>{text5}</p>
        <div className='w-[12%] ' >
          <p style={{background: styleStaus === "progress" ? "#E6EFFC" : styleStaus === "canceled" ? "#FFE3E3" : styleStaus === "planning" ? "#FFE9E0" : styleStaus === "done" ? "#DEFFE1" : "" ,     color : styleStaus === "progress" ? "#0764E6" : styleStaus === "canceled" ? "#A00" : styleStaus === "planning" ? "#FF793F" : styleStaus === "done" ? "#34E045" : ""   }} className='w-[120px] py-[7px] px-[12px] text-center rounded-[6px]'>{text6}</p>
        </div>
        <div className=' flex-1 flex items-center gap-[15px] '>
          <p className='w-fit'>{text7}</p>
          <div className='flex items-center gap-4 ms-auto'>
              <img className='bg-[#DEFFE1] cursor-pointer py-[10px] px-[10px] rounded-full ' src={EditIcon} alt="EditIcon" />
              <img className='cursor-pointer' src={DeleteIcon} alt="DeleteIcon" />
          </div>
        </div>
    </>
  )
}

export default ArchitecturalElement