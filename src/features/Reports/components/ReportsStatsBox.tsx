import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

type IProps = {
    title: string,
    value: any,
    statMessage?: string,
    status?: string,
    unit?: string
}
const ReportsStatsBox = ({ title, value, statMessage, status, unit }: IProps) => {

    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const controls = animate(count, value, { duration: 1.5 })

        return controls.stop
    }, [])
    return (
        <div className="border border-[#E0E0E0] rounded-[10px] p-5 min-w-[250px]">
            <h2 className="font-semibold text-xl whitespace-nowrap">{title}</h2>
            <div className="text-4xl font-semibold flex items-center my-4">
                <motion.p>{rounded}</motion.p> {unit === 'dollar' ? '$' : unit === 'hours' ? 'h' : ''}
            </div>            {status === 'increase' ?
                <p className="text-greenColor text-sm">+{statMessage}</p>
                :
                status === 'decrease' ?
                    <p className="text-redColor text-sm">-{statMessage}</p>
                    :
                    ''
            }
        </div>
    )
}

export default ReportsStatsBox