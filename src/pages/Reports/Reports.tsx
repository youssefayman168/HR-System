import BaseLayout from '../../layouts/BaseLayout/BaseLayout'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { tabs } from '.';
import SalaryRecords from '@/features/Reports/salaryRecords/components/SalaryRecords';
import ProjectCost from '@/features/Reports/projectCost/components/ProjectCost';
import EmployeePerformance from '@/features/Reports/employeePerformance/components/EmployeePerformance';
import Budget from '@/features/Reports/budget/components/Budget';

const Reports = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <BaseLayout>
            <div className="p-6">
                <h1 className='text-primary font-bold text-2xl'>
                    Reports
                </h1>
                <div className="mt-6 rounded-2xl w-full h-[calc(100vh-180px)] bg-white p-6 overflow-y-auto HideScroll">

                    <ul className='flex items-center gap-4 relative before:w-full before:bg-[#B0AFAF] before:h-[1px] before:absolute before:bottom-0 before:left-0 before:z-0 pt-2'>
                        {tabs.map((item) => (
                            <li
                                key={item.text}
                                className={`${item === selectedTab ? "selected text-primary" : "text-[#B0AFAF]"} font-semibold pb-[14px] capitalize`}
                                onClick={() => setSelectedTab(item)}
                            >
                                {`${item.text}`}
                                {item === selectedTab ? (
                                    <motion.div className="underline" layoutId="underline" />
                                ) : null}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab ? selectedTab.text : "empty"}
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {selectedTab.text === 'salary records' ?
                                    <SalaryRecords /> :
                                    selectedTab.text === 'project cost' ?
                                        <ProjectCost /> :
                                        selectedTab.text === 'employee performance' ?
                                            <EmployeePerformance /> :
                                            selectedTab.text === 'budget' ?
                                                <Budget /> :
                                                ''
                                }
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}

export default Reports