import { animate, useMotionValue, useTransform, motion } from 'framer-motion';
import { useEffect } from 'react'
import addedEmployeesIcon from '@/assets/home/addedEmployees.svg'
import increaseIcon from '@/assets/home/increaseIcon.svg'
import decreaseIcon from '@/assets/home/decrease.svg'

type IProps = {
    titleName: string,
    employeesNumber: string,
    messageIcon: any,
    mainNumber: number,
    mainIcon: any,
    unit?: string
}

const BoxStats = ({ titleName, employeesNumber, messageIcon, mainNumber, mainIcon, unit }: IProps) => {

    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const controls = animate(count, mainNumber, { duration: 1 })

        return controls.stop
    }, [])

    return (
        <div className="bg-white rounded-2xl py-4 px-6 w-[100%] flex items-start justify-between">
            <div>
                <div className="text-primary text-[38px] font-bold flex items-center">
                    <motion.p>{rounded}</motion.p> {unit === 'dollar' ? '$' : unit === 'hours' ? 'h' : ''}
                </div>
                <div className="mt-2 text-[#252C58]">
                    <p className="text-lg font-semibold mb-1">{titleName}</p>
                    <div className="flex items-center gap-2">
                        {messageIcon === 'new' ?
                            <img src={addedEmployeesIcon} className="w-6" />
                            :
                            messageIcon === 'increase' ?
                                <img src={increaseIcon} className='w-6' />
                                :
                                messageIcon === 'decrease' ?
                                    <img src={decreaseIcon} alt="w-8" />
                                    :
                                    ''
                        }
                        <p className="text-sm whitespace-nowrap">{employeesNumber}</p>
                    </div>
                </div>
            </div>
            <div className="rounded-full w-[42px] h-[42px] bg-[#E6EAF5] flex items-center justify-center">
                {mainIcon}
            </div>
        </div>
    )
}

export default BoxStats