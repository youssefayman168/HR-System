import BaseInput from '@/components/BaseInput'
import DateInpCreate from '@/components/DateInput/DateInpCreate'
import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import { pathList } from '@/routes/routesPaths'
import { BiChevronRight } from 'react-icons/bi'
import ArrowLeft from '../../assets/CreateProjects/ArrowLeft.svg'
import { Link } from 'react-router-dom'

const EditTasks = () => {
    return (
        <BaseLayout>
        <div className='p-5'>
            <div className='header'>
                <Link to={pathList.tasks} className="flex w-fit items-center gap-3 text-[22px] text-[#224886] font-bold ">
                    <img src={ArrowLeft} alt="ArrowLeft" />
                    Tasks
                    <BiChevronRight />
                    Edit Tasks
                </Link>
            </div>
            <div className='bg-white px-20 py-10 rounded-[15px] mt-8 h-[calc(100vh-185px)] overflow-y-auto HideScroll '>
                <form action="#">
                    <p className='flex items-center text-[22px] font-[600] mb-6 text-[#0E2354] '>Designing Task</p>
                    <div className='inputs'>
                        <div className='w-full'>
                            <BaseInput type='text' placeholder='Task name' styles={{width : "100%" , height : "65px"}} />
                            <textarea placeholder='Description' className='border-[1px] border-[#BDBDBD] p-5 w-full mt-4 rounded-[10px] h-[150px] outline-none ' ></textarea>
                            <div className='Date flex gap-4 mt-4'>
                                <DateInpCreate when='Starting Date' styles={{color: "rgba(115, 115, 115, 0.80)" , border: "1px solid #BDBDBD"}} />
                                <DateInpCreate when='Expiry Date' styles={{color: "rgba(115, 115, 115, 0.80)" , border: "1px solid #BDBDBD"}} />
                            </div>
                        </div>
                    </div>
                    <div className='Submit mx-auto w-fit mt-16 flex gap-5' >
                        <button className='border-[1px] border-[#224886] text-[#224886] py-3 px-14 rounded-[6px] '>Cancel</button>
                        <button type='submit' className='bg-[#224886] rounded-[6px] text-white py-3 px-16 '>Save</button>
                    </div> 
                </form>
            </div>
        </div>
        </BaseLayout>
    )
}

export default EditTasks