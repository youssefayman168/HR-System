import Element from './Element'
import DropDown from './DropDown'
import DropIcon from '../../assets/Projects/DropDown.svg'
import { useState } from 'react'

const ProjectsTable = () => {
    const [openList, setOpenList] = useState<boolean>(false)
    return (
        <div className='bg-white px-10 rounded-[20px] '>

            <table className='w-full text-center'>

                <thead className='text-[#9295AB] '>
                    <tr className='border-b-[2px] border-[#a0aaca80]'>
                        <th className='py-7' >ID</th>
                        <th>Projects</th>
                        <th>Company</th>
                        <th>Starting Date</th>
                        <th>Expiry Date</th>
                        <th className='statusDropDown cursor-pointer relative'>
                            <div className='flex items-center justify-center gap-2' onClick={() => setOpenList(!openList)}>
                                Status
                                <img src={DropIcon} alt="DropIcon" />
                            </div>
                            <DropDown style={{ height: openList ? '254px' : '0', opacity: openList ? '1' : '0' , visibility: openList ? 'visible' : 'hidden' }} text1='All' text2='Planning' text3='In progress' text4='Done' text5='Canceled' />
                        </th>
                        <th>Project Hours</th>
                        <th>Work Hours</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b-[2px]' >
                        <Element id='2341421' projects='Architectural drawing' company='Smart Engineering Consultancy' startingDate='29 July 2023' expiryDate='29 July 2023' status='In progress' projectHours='200h' workHours='10h 2m' styles={{ color: "#0764E6", backgroundColor: "#D2E5FF" }} />
                    </tr>
                    <tr className='border-b-[2px]' >
                        <Element id='2341421' projects='Architectural drawing' company='Smart Engineering Consultancy' startingDate='29 July 2023' expiryDate='29 July 2023' status='Canceled' projectHours='200h' workHours='10h 2m' styles={{ color: "#AA0000", backgroundColor: "#FFE3E3" }} />
                    </tr>
                    <tr className='border-b-[2px]' >
                        <Element id='2341421' projects='Architectural drawing' company='Smart Engineering Consultancy' startingDate='29 July 2023' expiryDate='29 July 2023' status='Canceled' projectHours='200h' workHours='10h 2m' styles={{ color: "#FF793F", backgroundColor: "#FFE9E0" }} />
                    </tr>
                    <tr className='border-b-[2px]' >
                        <Element id='2341421' projects='Architectural drawing' company='Smart Engineering Consultancy' startingDate='29 July 2023' expiryDate='29 July 2023' status='Done' projectHours='200h' workHours='10h 2m' styles={{ color: "#34E045", backgroundColor: "#DEFFE1" }} />
                    </tr>
                    <tr className='border-b-[2px]' >
                        <Element id='2341421' projects='Architectural drawing' company='Smart Engineering Consultancy' startingDate='29 July 2023' expiryDate='29 July 2023' status='In progress' projectHours='200h' workHours='10h 2m' styles={{ color: "#0764E6", backgroundColor: "#D2E5FF" }} />
                    </tr>
                    <tr className='border-b-[2px]' >
                        <Element id='2341421' projects='Architectural drawing' company='Smart Engineering Consultancy' startingDate='29 July 2023' expiryDate='29 July 2023' status='Canceled' projectHours='200h' workHours='10h 2m' styles={{ color: "#AA0000", backgroundColor: "#FFE3E3" }} />
                    </tr>
                    <tr>
                        <Element id='2341421' projects='Architectural drawing' company='Smart Engineering Consultancy' startingDate='29 July 2023' expiryDate='29 July 2023' status='Done' projectHours='200h' workHours='10h 2m' styles={{ color: "#34E045", backgroundColor: "#DEFFE1" }} />
                    </tr>
                    <tr>
                        <Element id='2341421' projects='Architectural drawing' company='Smart Engineering Consultancy' startingDate='29 July 2023' expiryDate='29 July 2023' status='Done' projectHours='200h' workHours='10h 2m' styles={{ color: "#34E045", backgroundColor: "#DEFFE1" }} />
                    </tr>
                    <tr>
                        <Element id='2341421' projects='Architectural drawing' company='Smart Engineering Consultancy' startingDate='29 July 2023' expiryDate='29 July 2023' status='Done' projectHours='200h' workHours='10h 2m' styles={{ color: "#34E045", backgroundColor: "#DEFFE1" }} />
                    </tr>
                    <tr>
                        <Element id='2341421' projects='Architectural drawing' company='Smart Engineering Consultancy' startingDate='29 July 2023' expiryDate='29 July 2023' status='Done' projectHours='200h' workHours='10h 2m' styles={{ color: "#34E045", backgroundColor: "#DEFFE1" }} />
                    </tr>
                    <tr>
                        <Element id='2341421' projects='Architectural drawing' company='Smart Engineering Consultancy' startingDate='29 July 2023' expiryDate='29 July 2023' status='Done' projectHours='200h' workHours='10h 2m' styles={{ color: "#34E045", backgroundColor: "#DEFFE1" }} />
                    </tr>

                </tbody>

            </table>
        </div>

    )
}

export default ProjectsTable