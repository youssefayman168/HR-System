import { useState } from 'react';
import BaseLayout from '@/layouts/BaseLayout/BaseLayout'
import { AnimatePresence, motion } from "framer-motion";
import EmployeeInfo from '@/features/AllEmployees/ViewEmployees/components/EmployeeInfo';
import { tabs } from './index'
import AnnualsTab from '@/components/Profile/AnnualsTab';
import PayslipsTab from '@/components/Profile/PayslipsTab';
import WorkedProjectsTab from '@/components/Profile/WorkedProjectsTab';
import { useQuery } from '@tanstack/react-query';
import getProfileData from '@/features/profile/services/getProfileData';
import Loading from '@/components/Loading/Loading';
const Profile = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0])

  const { data, isLoading } = useQuery<any>({
    queryKey: ['getProfileData'],
    queryFn: getProfileData
  })

  return (

    <BaseLayout>
      {isLoading ?
        <Loading />
        :
        <div className='p-6'>
          <div className='Header w-[80%] '>
            <p className='text-[#224886] font-[600] text-[22px] mb-6'>Profile</p>
            <div className='UserInfo flex items-start justify-between'>
              <div>
                <div className='flex items-center gap-6 mb-7'>
                  <img className='w-[50px] h-[50px] rounded-full' src={`https://sec-system-apis.up.railway.app${data?.image}`} alt="UserImg" />
                  <p className='UserName text-[#0E2354] text-[19px] font-[500] '>{data?.name}</p>
                </div>
                <p className='text-[#656565] border-[#656565] border-[1px] rounded-[6px] w-[200px] py-[7px] text-center  '>{data?.position}</p>
              </div>
              <div>
                <EmployeeInfo title='Email:' value={data?.email} />
                <EmployeeInfo title='Department' value={data?.department} />
              </div>
              <div>
                <EmployeeInfo title='Company' value={data?.company} />
                <EmployeeInfo title='Per Hour' value={`${data?.hr_rate}$ per hour`} />
              </div>
              <div>
                <EmployeeInfo title='Mobile Number' value={data?.phone_number} />
                <EmployeeInfo title='Grade' value={data?.grade} />
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
                    <WorkedProjectsTab />
                  )
                    :
                    currentTab.title === 'Annuals' ? (
                      <AnnualsTab />
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
      }
    </BaseLayout>
  )
}

export default Profile