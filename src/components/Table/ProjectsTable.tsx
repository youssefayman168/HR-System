import Element from './Element'
import DropDown from './DropDown'
import DropIcon from '../../assets/Projects/DropDown.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { pathList } from '@/routes/routesPaths'

const ProjectsTable = () => {
    const [openList, setOpenList] = useState<boolean>(false)
    return (
        <div className='bg-white px-10 rounded-[20px] '>




            <div className='Table text-center'>
                <div className='Theade text-[#9295AB] font-[800] flex items-center gap-2 py-7 border-b-[2px] border-[#a0aaca80] '>
                    <p className='w-[5%]  '>ID</p>
                    <p className='w-[12%]  '>Projects</p>
                    <p className='w-[18%]  text-center '>Company</p>
                    <p className='w-[10%]  '>Starting date</p>
                    <p className='w-[10%]  '>Expiry date</p>
                    <div className='statusDropDown cursor-pointer relative w-[10%] '>
                        <div className='flex items-center justify-center gap-2' onClick={() => setOpenList(!openList)}>
                            Status
                            <img src={DropIcon} alt="DropIcon" />
                        </div>
                        <DropDown style={{ height: openList ? '254px' : '0', opacity: openList ? '1' : '0' , visibility: openList ? 'visible' : 'hidden' }} text1='All' text2='Planning' text3='In progress' text4='Done' text5='Canceled' />
                    </div>
                    <p className='w-[13%] '>Project Hours</p>
                    <p className='w-[9%]'>Work Hours</p>
                </div>
                <div className='Tbody '>


                    <Element text1='2341421' text2='Architectural drawing' text3='Smart Engineering Consultancy' text4='29 July 2023' text5='29 July 2023' text6='In progress' text7='200h' text8='10h 2m' status={{ color: "#0764E6", backgroundColor: "#D2E5FF" }} />
                    <Element text1='2341421' text2='Architectural drawing' text3='Smart Engineering Consultancy' text4='29 July 2023' text5='29 July 2023' text6='In progress' text7='200h' text8='10h 2m' status={{ color: "#0764E6", backgroundColor: "#D2E5FF" }} />
                    <Element text1='2341421' text2='Architectural drawing' text3='Smart Engineering Consultancy' text4='29 July 2023' text5='29 July 2023' text6='In progress' text7='200h' text8='10h 2m' status={{ color: "#0764E6", backgroundColor: "#D2E5FF" }} />
                    <Element text1='2341421' text2='Architectural drawing' text3='Smart Engineering Consultancy' text4='29 July 2023' text5='29 July 2023' text6='In progress' text7='200h' text8='10h 2m' status={{ color: "#0764E6", backgroundColor: "#D2E5FF" }} />
                    <Element text1='2341421' text2='Architectural drawing' text3='Smart Engineering Consultancy' text4='29 July 2023' text5='29 July 2023' text6='In progress' text7='200h' text8='10h 2m' status={{ color: "#0764E6", backgroundColor: "#D2E5FF" }} />
                    <Element text1='2341421' text2='Architectural drawing' text3='Smart Engineering Consultancy' text4='29 July 2023' text5='29 July 2023' text6='In progress' text7='200h' text8='10h 2m' status={{ color: "#0764E6", backgroundColor: "#D2E5FF" }} />


                </div>

            </div>


        </div>

    )
}

export default ProjectsTable