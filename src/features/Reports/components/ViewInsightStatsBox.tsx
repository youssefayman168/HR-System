
type IProps = {
    title: string,
    value: any,
    statMessage?: string,
    status?: string,
    unit?: string
}
const ViewInsightStatsBox = ({ title, value, statMessage, status, unit }: IProps) => {

    return (
        <div className="border border-[#E0E0E0] rounded-[10px] p-5 flex-1 h-[200px] min-w-[200px]">
            <h2 className="font-semibold text-xl whitespace-nowrap">{title}</h2>
            <div className="text-4xl font-semibold flex items-center my-4">
                {value} {unit === 'dollar' ? '$' : unit === 'hours' ? 'h' : ''}
            </div>
            {status === 'increase' ?
                <p className="text-greenColor text-sm">{statMessage}</p>
                :
                status === 'decrease' ?
                    <p className="text-redColor text-sm">{statMessage}</p>
                    :
                    <p className="text-sm">{statMessage}</p>
            }
        </div>
    )
}

export default ViewInsightStatsBox