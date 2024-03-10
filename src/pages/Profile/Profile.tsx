import { useState } from 'react';
import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import testImg from "../../assets/testImg.jpg";
import { AnimatePresence, motion } from "framer-motion";
import EmployeeInfo from '@/features/AllEmployees/ViewEmployees/components/EmployeeInfo';
import { tabs } from './index'
import WorkedProjects from '@/components/Profile/WorkedProjects';
import PayslipsTab from '@/components/Profile/PayslipsTab';
const Profile = () => {

    const [ currentTab , setCurrentTab ] = useState(tabs[0])
  return (
    <BaseLayout>
        <div className='p-6'>
            <div className='Header w-[80%] '>
                <p className='text-[#224886] font-[600] text-[22px] mb-6'>Profile</p>
                <div className='UserInfo flex items-start justify-between'>
                    <div>
                        <div className='flex items-center gap-6 mb-7'>
                            <img className='w-[50px] h-[50px] rounded-full' src={testImg} alt="UserImg" />
                            <p className='UserName text-[#0E2354] text-[19px] font-[500] '>James campion</p>
                        </div>
                        <p className='text-[#656565] border-[#656565] border-[1px] rounded-[6px] w-[200px] py-[7px] text-center  '>Sales specialist</p>
                    </div>
                    <div>
                        <EmployeeInfo title='Email:' value='invision@invisionapp.com' />
                        <EmployeeInfo title='Department' value='Designing' />
                    </div>
                    <div>
                        <EmployeeInfo title='Company' value='HR' />
                        <EmployeeInfo title='Per Hour' value='$3 per hour' />
                    </div>
                    <div>
                        <EmployeeInfo title='Mobile Number' value='937-298-2047' />
                        <EmployeeInfo title='Grade' value='Grade' />
                    </div>
                </div>
            </div>

            <div className='Body bg-white mt-2 py-5 px-6 rounded-[15px] h-[calc(100vh-332px)] HideScroll overflow-y-auto  '>
                <div>
                    <ul className='flex items-center gap-4 relative before:w-full before:bg-[#B0AFAF] before:h-[1px] before:absolute before:bottom-0 before:left-0 before:z-0 pt-2'>
                        {tabs.map((item) => (
                            <li
                                key={item.title}
                                className={`${item === currentTab ? "selected text-primary" : "text-[#B0AFAF]"} font-semibold pb-[14px] capitalize`}
                                onClick={() => setCurrentTab(item)}
                            >
                                {`${item.title}`}
                                {item === currentTab ? (
                                    <motion.div className="underline" layoutId="underline" />
                                ) : null}
                            </li>
                        ))}
                    </ul>
                </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentTab ? currentTab.title : "empty"}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    >
                        {
                            currentTab.title === 'Worked Projects' ? (
                                <WorkedProjects />
                            )
                            :
                            currentTab.title === 'Annuals' ? (
                                <>
                                    <div>
                                        <p></p>
                                    </div>
                                </>
                            )
                            :
                            currentTab.title === 'Payslips' ? (
                                <PayslipsTab />
                            )
                            :
                            ''
                        }
                </motion.div>
            </AnimatePresence>
            </div>

        </div>
    </BaseLayout>
  )
}

export default Profile