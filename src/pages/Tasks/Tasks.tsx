import BaseLayout from '../../layouts/BaseLayout/BaseLayout'
import DateInp from '@/components/DateInput/Date'
import searchIcon from '../../assets/Projects/search.svg'
import DateIcon from '../../assets/Projects/Date.svg'
import plus from '../../assets/plus.svg'
import DownloadIcon from '../../assets/Projects/Download.svg'
import TasksTable from '@/components/Table/TasksTable/TasksTable'
import BtnCreate from '@/components/Buttons/BtnCreate'

const Tasks = () => {
    return (
        <BaseLayout>
            <div className='p-5'>
                <div className='HideScroll h-[calc(100vh-185px)] overflow-y-auto rounded-[15px] '>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[#224886] text-[25px] font-[600] ">Tasks</p>
                        </div>
                        <div className="relative">
                            <div className="absolute top-[50%] left-3 translate-y-[-50%] text-[#737373]">
                                <img src={searchIcon} alt="searchIcon" />
                            </div>
                            <input className="w-[520px] h-[52px] rounded-lg ps-10 outline-none" type="text" placeholder="Quick Search..." />
                        </div>
                        <div className="flex items-center gap-4">

                            <DateInp icon={DateIcon} styles={{ flexDirection: "row-reverse" }} stylesInp={{ display: "flex", flexDirection: "row-reverse" }} />

                            <BtnCreate text='Create Task' icon={plus} path='' />
                        </div>
                    </div>

                    <div>
                        <TasksTable />
                        <TasksTable />
                        <TasksTable />
                    </div>
                </div>
                    <div className='w-fit ms-auto mt-5'>
                        <BtnCreate icon={DownloadIcon} text="Export As PDF" path="" />
                    </div>
            </div>
        </BaseLayout>
    )
}

export default Tasks