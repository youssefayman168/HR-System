import BaseLayout from '../layouts/BaseLayout/BaseLayout'
import testImg from "../assets/testImg.jpg";
import NotificationIcons from '../assets/Notification/Filter.svg'
import DateIcon from '../assets/Notification/DateIcon.svg'
import NotificationCompo from '@/components/Notification/NotificationCompo';
import { useRef } from 'react';
import DateInp from '@/components/DateInput/Date';

const Notifications = () => {
    const ulElement = useRef<HTMLUListElement>(null)

    return (
        <BaseLayout>
            <div className='p-5'>
                <div className='NavNotify flex items-center justify-between '>
                    <p className='text-[#224886] text-[26px] font-[600] '>Notifications</p>
                    <div className='flex items-center gap-3'>
                        <div className='relative'>
                            <button onClick={() => ulElement.current?.classList.toggle("act")} className='Filter flex items-center gap-2 border-[1px] border-[#224886] py-[10px] px-6 rounded-[6px] '>
                                <img src={NotificationIcons} alt="NotificationIcons" />
                                Filter
                            </button>
                            <ul ref={ulElement} className='ulFilter bg-white duration-300 text-center absolute h-0 overflow-hidden  w-[250px] top-[calc(100%+10px)] rounded-lg shadow-lg z-[2222] right-0 '>
                                <li className='py-[10px] border-b cursor-pointer'>Projects</li>
                                <li className='py-[10px] border-b cursor-pointer'>Task & Sub Task</li>
                                <li className='py-[10px] border-b cursor-pointer'>Emplyee</li>
                                <li className='py-[10px] border-b cursor-pointer'>Requests</li>
                                <li className='py-[10px] border-b cursor-pointer'>Reports</li>
                            </ul>
                        </div>
                        <DateInp icon={DateIcon} styles={{ flexDirection: "row-reverse" }} stylesInp={{ display: "flex", flexDirection: "row-reverse" }} />
                    </div>
                </div>

            <div className='Notifications HideScroll mt-8 h-[calc(100vh-200px)] overflow-y-auto'>

                    <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='New Emplyee' type='new' />
                    <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Update Employees' type='update' />
                    <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Delete Employees' type='delete' />
                    <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Office supplies requests' type='office' />
                    <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Done' type='read' />
                    <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='New Emplyee' type='new' />
                    <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Update Employees' type='update' />
                    <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Delete Employees' type='delete' />
                    <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Office supplies requests' type='office' />
                    <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Done' type='read' />

                </div>
            </div>
        </BaseLayout>
    )
}

export default Notifications