import BaseLayout from '../../layouts/BaseLayout/BaseLayout'
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { tabs } from '.';

const Reports = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <BaseLayout>
            <div className="p-6">
                <h1 className='text-primary font-bold text-2xl'>
                    Reports
                </h1>
                <div className="mt-6 rounded-2xl w-full h-[100vh] bg-white p-6">

                    <ul className='flex items-center gap-4 relative before:w-full before:bg-[#B0AFAF] before:h-[1px] before:absolute before:bottom-0 before:left-0 before:z-0 '>
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
                    <main>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab ? selectedTab.text : "empty"}
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {selectedTab.text === 'salary records' ? 'true' : 'false'}
                                {selectedTab.text === 'project cost' ? 'true' : 'false'}
                                {selectedTab.text === 'employee performance' ? 'true' : 'false'}
                                {selectedTab.text === 'budget' ? 'true' : 'false'}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </BaseLayout>
    );
}

export default Reports