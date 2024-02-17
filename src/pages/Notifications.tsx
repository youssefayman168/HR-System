import BaseLayout from '../layouts/BaseLayout/BaseLayout'
import testImg from "../assets/testImg.jpg";
import NotificationCompo from '@/components/Notification/NotificationCompo';
import { useRef } from 'react';

const Notifications = () => {


    const ulElement = useRef<HTMLUListElement>(null)





    return (
        <BaseLayout>
        <div className='p-5'>
            <div className='NavNotify flex items-center justify-between '>
                <p className='text-[#224886] text-[26px] font-[600] '>Notifications</p>
                <div className='flex items-center gap-3'>
                    <div className='relative'>
                        <button onClick={ () => ulElement.current?.classList.toggle("act") } className='Filter flex items-center gap-2 border-[1px] border-[#224886] py-[10px] px-6 rounded-[6px] '>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 10.5H15.5M3 5.5H18M8 15.5H13" stroke="#063C84" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
                    <p className='flex items-center gap-2 border-[1px] border-[#224886] py-[10px] px-6 rounded-[6px] '>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 1.66699V3.33366M5 1.66699V3.33366" stroke="#063C84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.33333 14.1673L8.33332 11.1233C8.33332 10.9635 8.21938 10.834 8.07882 10.834H7.5M11.358 14.1673L12.4868 11.125C12.5396 10.9827 12.4274 10.834 12.2672 10.834H10.8333" stroke="#063C84" stroke-width="1.5" stroke-linecap="round"/><path d="M2.08398 10.2027C2.08398 6.57161 2.08398 4.75607 3.12742 3.62803C4.17085 2.5 5.85023 2.5 9.20898 2.5H10.7923C14.1511 2.5 15.8305 2.5 16.8739 3.62803C17.9173 4.75607 17.9173 6.57161 17.9173 10.2027V10.6306C17.9173 14.2617 17.9173 16.0773 16.8739 17.2053C15.8305 18.3333 14.1511 18.3333 10.7923 18.3333H9.20898C5.85023 18.3333 4.17085 18.3333 3.12742 17.2053C2.08398 16.0773 2.08398 14.2617 2.08398 10.6306V10.2027Z" stroke="#063C84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 6.66699H15" stroke="#063C84" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        13 Jan, 2024
                    </p>
                </div>
            </div>

            <div className='Notifications mt-8 h-[78vh] overflow-y-auto'>

                <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='New Emplyee' type='New Emplyee' />
                <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Update Employees' type='Update Employees' />
                <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Delete Employees' type='Delete Employees' />
                <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Office supplies requests' type='Office supplies requests' />
                <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Done' type='Read' />
                <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='New Emplyee' type='New Emplyee' />
                <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Update Employees' type='Update Employees' />
                <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Delete Employees' type='Delete Employees' />
                <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Office supplies requests' type='Office supplies requests' />
                <NotificationCompo img={testImg} name='James campion' info='added a new employee to the department product designs' date='12 Jan 2024' status='Done' type='Read' />

            </div>
        </div>
        </BaseLayout>
    )
}

export default Notifications