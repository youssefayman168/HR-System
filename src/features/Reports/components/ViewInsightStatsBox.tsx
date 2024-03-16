import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

type IProps = {
    title: string,
    value: any,
    statMessage?: string,
    status?: string,
    unit?: string
    link?: string
}
const ViewInsightStatsBox = ({ title, value, statMessage, status, unit, link }: IProps) => {

    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const controls = animate(count, value, { duration: 1.5 })

        return controls.stop
    }, [])
    return (
        <div className="border border-[#E0E0E0] rounded-[10px] p-5 flex-1 h-[200px] min-w-[200px]">
            <h2 className="font-semibold text-xl whitespace-nowrap">{title}</h2>
            <div className="text-4xl font-semibold flex items-center my-4">
                <motion.p>{rounded}</motion.p> {unit === 'dollar' ? '$' : unit === 'hours' ? 'h' : ''}
            </div>
            {status === 'increase' ?
                <p className="text-greenColor text-sm">+{statMessage}</p>
                :
                status === 'decrease' ?
                    <p className="text-redColor text-sm">-{statMessage}</p>
                    :
                    ''
            }
            <Link to={''} className="text-blackGrayColor text-sm mt-1">{link}</Link>
        </div>
    )
}

export default ViewInsightStatsBox