import Element from './Element'
import DropIcon from '../../../assets/Projects/DropDown.svg'
import { useState } from 'react'
import DropDown from '@/components/DropDown/DropDown'
import getAllProjects from '@/features/Projects/all/services/getAllProjects'
import { useQuery } from '@tanstack/react-query'

const ProjectsTable = () => {
    const [openList, setOpenList] = useState<boolean>(false)
    
  const projects = useQuery({
    queryKey: ['getAllProjects'],
    queryFn: getAllProjects
  })

  const allProjects = projects?.data

    return (
        <div className='bg-white px-10 rounded-[20px] '>
            <div className='Table text-center'>
                <div className='Theade text-[#9295AB] font-[800] flex items-center gap-2 py-7 border-b-[2px] border-[#a0aaca80] '>
                    <p className='w-[5%]  '>ID</p>
                    <p className='w-[20%]  '>Projects</p>
                    <p className='w-[18%]  text-center '>Company</p>
                    <p className='w-[10%]  '>Starting date</p>
                    <div className='statusDropDown cursor-pointer relative w-[10%] '>
                        <div className='flex items-center justify-center gap-2' onClick={() => setOpenList(!openList)}>
                            Status
                            <img src={DropIcon} alt="DropIcon" />
                        </div>
                        <DropDown style={{ height: openList ? '254px' : '0', opacity: openList ? '1' : '0' , visibility: openList ? 'visible' : 'hidden' }} text1='All' text2='Planning' text3='In progress' text4='Done' text5='Canceled' />
                    </div>
                    <p className='w-[13%] '>Worked Hours</p>
                    <p className='w-[9%]'>Work Hours</p>
                </div>
                <div className='Tbody HideScroll h-[calc(100vh-350px)] overflow-y-auto '>
                    {allProjects?.map(({id, project_name, company, start_date, status, work_hours, worked_hours}: any)=>{
                        return<Element 
                        key={id} 
                        text1={id} 
                        text2={project_name} 
                        text3={company?.name} 
                        text4={start_date} 
                        text6={status} 
                        text7={`${worked_hours}h`} 
                        text8={`${work_hours}h`} 
                        styleStaus={status}
                        />
                    }
                    )}
                </div>
            </div>
        </div>

    )
}

export default ProjectsTable