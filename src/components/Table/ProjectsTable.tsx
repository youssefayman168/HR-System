import Element from './Element'
import DropDown from './DropDown'
import { useState } from 'react'

const ProjectsTable = () => {
    const [openList, setOpenList] = useState<boolean>(false)
    return (
        <div className='bg-white px-10 rounded-[20px] '>

            <table className='w-full text-center  '>

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
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.2778 11.8764L14.1001 6.9035C14.401 6.5932 14.2186 6 13.8223 6H4.17773C3.78142 6 3.59902 6.5932 3.89992 6.9035L8.72219 11.8764C8.88205 12.0412 9.11795 12.0412 9.2778 11.8764Z" fill="#8F93AC" /></svg>
                            </div>

                            <DropDown style={{ height: openList ? '254px' : '0', opacity: openList ? '1' : '0' }} text1='All' text2='Planning' text3='In progress' text4='Done' text5='Canceled' />
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

                </tbody>

            </table>
        </div>

    )
}

export default ProjectsTable