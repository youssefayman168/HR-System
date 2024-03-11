import { Link } from 'react-router-dom'
import DeleteIcon from '../../../assets/Projects/Delete.svg'
import EditIcon from '../../../assets/Projects/Edit.svg'


type MyElement = {
  text1: string,
  text2: string,
  text3: string,
  text4: string,
  text6: string,
  text7: string,
  text8: string,
  styleStaus: string,
  id: any,
  deleteAction: Function

}

const Element = ({ text1, text2, text3, text4, text6, text7, text8, styleStaus, id, deleteAction }: MyElement) => {
  return (
    <main className='flex items-center gap-2 py-6 text-[#9295AB] border-b-[2px] border-[#a0aaca80]'>
      <p className='w-[5%] text-[#105090] font-[600] '>{text1}</p>
      <Link to={`/projects/${id}`} className='w-[20%] text-[#105090] font-[600] '>{text2}</Link>
      <p className='w-[18%] '>{text3}</p>
      <p className='w-[10%]  '>{text4}</p>
      <div className='w-[10%] '>
        <p
          style={{

            backgroundColor:
              styleStaus === "In-Progress" ? "#E6EFFC" :
                styleStaus === "Declined" ? "#FFE3E3" :
                  styleStaus === "Completed" ? "#DEFFE1" :
                    styleStaus === 'Hold' ? '#FFE9E0' : '',

            color: styleStaus === "In-Progress" ? "#0764E6" :
              styleStaus === "Declined" ? "#A00" :
                styleStaus === "Completed" ? "#34E045" :
                  styleStaus === 'Hold' ? '#FF793F' : ''
          }}
          className='w-[120px]  mx-auto py-[7px] px-[12px] text-center rounded-[6px] font-semibold'>{text6}</p>
      </div>
      <p className='w-[13%]  text-center  '>{text7}</p>
      <div className=' flex-1 flex items-center  gap-[15px] '>
        <p className='w-[50%] '>{text8}</p>
        <div className='flex items-center gap-4 ms-auto'>
          <Link to={`/projects/editProject/${id}`}>
            <img className='bg-[#DEFFE1] cursor-pointer py-[10px] px-[10px] rounded-full ' src={EditIcon} alt="EditIcon" />
          </Link>
          <img className='cursor-pointer' src={DeleteIcon} alt="DeleteIcon" onClick={() => deleteAction()} />
        </div>
      </div>
    </main>
  )
}

export default Element